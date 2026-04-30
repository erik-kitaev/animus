class LessonEngine {
    constructor() {
        this.cacheDOM();
        this.bindEvents();
        this.activeLesson = null;
        this.currentSlideIndex = 0;
        this.quizScore = 0;
        this.quizAnswers = [];
    }

    cacheDOM() {
        this.runnerView = document.getElementById('lesson-runner-view');
        this.slideContainer = document.getElementById('lesson-slide-container');
        this.progressBar = document.getElementById('lesson-progress');
        this.closeBtn = document.getElementById('close-lesson-btn');
        this.nextSlideBtn = document.getElementById('lesson-next-slide-btn');
        this.actionBar = document.getElementById('lesson-action-bar');
    }

    bindEvents() {
        if(this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.closeRunner();
            });
        }
        if(this.nextSlideBtn) {
            this.nextSlideBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
    }

    startLessonById(lessonId, stageId) {
        const stage = window.ANIMUS_LESSONS[stageId];
        if(!stage) return;
        const lesson = stage.lessons.find(l => l.id === lessonId);
        if(lesson) this.startLesson(lesson);
    }

    startLesson(lesson) {
        this.activeLesson = lesson;
        this.currentSlideIndex = 0;
        this.quizScore = 0;
        this.quizAnswers = [];
        
        window.switchView('lesson-runner-view');
        document.getElementById('bottom-nav').classList.add('hidden');
        this.renderSlide();
    }

    renderSlide() {
        this.slideContainer.innerHTML = '';
        this.actionBar.classList.remove('hidden');
        this.nextSlideBtn.disabled = false;
        this.nextSlideBtn.textContent = 'Continue';

        const slide = this.activeLesson.slides[this.currentSlideIndex];
        
        // Progress
        const prog = ((this.currentSlideIndex) / this.activeLesson.slides.length) * 100;
        this.progressBar.style.width = `${prog}%`;

        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide active';

        let badgeText = '';
        if(slide.type === 'intro') badgeText = 'Introduction';
        else if(slide.type === 'explain') badgeText = 'Concept';
        else if(slide.type === 'term') badgeText = 'Definition';
        else if(slide.type === 'quote') badgeText = 'Aphorism';
        else if(slide.type === 'realworld') badgeText = 'Real World Application';
        else if(slide.type === 'quiz') badgeText = 'Knowledge Check';

        let html = `<span class="slide-type-badge">${badgeText}</span>`;
        if (slide.title && slide.type !== 'quote') html += `<h2 class="slide-title mt-2">${slide.title}</h2>`;

        if (slide.type === 'quiz') {
            // Handle Quiz
            html += `<div class="quiz-container w-full mt-4" id="quiz-container"></div>`;
            slideDiv.innerHTML = html;
            this.slideContainer.appendChild(slideDiv);
            this.renderQuiz(slide);
            this.nextSlideBtn.disabled = true; // disable until answered
        } else {
            // Handle text slides
            if (slide.type === 'term') {
                html += `<div class="card mt-4" style="background: rgba(239, 208, 118, 0.05); border-color: rgba(239, 208, 118, 0.2);">
                    <p class="slide-content-text" style="font-size:1.1rem; color:var(--text-main);">${slide.content}</p>
                </div>`;
            } else if (slide.type === 'quote') {
                html += `<blockquote class="slide-quote mt-4" style="font-size:1.4rem; line-height: 1.5; border-left-width: 6px; color: white;">${slide.quote}</blockquote>`;
                if(slide.content) html += `<p class="slide-content-text mt-4">${slide.content}</p>`;
            } else {
                html += `<p class="slide-content-text mt-2">${slide.content}</p>`;
                if (slide.quote) {
                    html += `<blockquote class="slide-quote mt-4">${slide.quote}</blockquote>`;
                }
            }

            slideDiv.innerHTML = html;
            this.slideContainer.appendChild(slideDiv);
            
            if(this.currentSlideIndex === this.activeLesson.slides.length - 1) {
                this.nextSlideBtn.textContent = 'Complete Lesson';
            }
        }
    }

    renderQuiz(slide) {
        const container = document.getElementById('quiz-container');
        if(this.quizAnswers.length < slide.questions.length) {
            const currentQIndex = this.quizAnswers.length;
            const q = slide.questions[currentQIndex];
            
            let html = `
                <div class="quiz-question-wrapper animate-in">
                    <p class="text-lg font-bold mb-6 text-center" style="font-size: 1.3rem; line-height: 1.4;">${q.text}</p>
                    <div class="options-grid" style="gap: 12px;">
            `;
            q.options.forEach((opt, idx) => {
                html += `<button class="option-btn" data-idx="${idx}">${opt.text}</button>`;
            });
            html += `</div></div>`;
            container.innerHTML = html;

            const btns = container.querySelectorAll('.option-btn');
            btns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const selectedIdx = parseInt(e.currentTarget.getAttribute('data-idx'));
                    const isCorrect = q.options[selectedIdx].isCorrect;
                    
                    btns.forEach(b => {
                        b.disabled = true;
                        const bIdx = parseInt(b.getAttribute('data-idx'));
                        if (q.options[bIdx].isCorrect) {
                            b.classList.add('correct');
                            b.innerHTML += ' <span style="float:right">✓</span>';
                        } else if (bIdx === selectedIdx) {
                            b.classList.add('wrong');
                            b.innerHTML += ' <span style="float:right">✕</span>';
                        }
                    });

                    if(isCorrect) this.quizScore += 10;
                    this.quizAnswers.push(isCorrect);

                    setTimeout(() => {
                        if(this.quizAnswers.length < slide.questions.length) {
                            this.renderQuiz(slide);
                        } else {
                            this.nextSlideBtn.disabled = false;
                            this.nextSlideBtn.textContent = 'Complete Lesson';
                            container.innerHTML = `
                                <div class="text-center mt-8 animate-in">
                                    <div class="success-icon-wrapper" style="margin-bottom: 20px;">
                                        <span class="emoji" style="font-size:4rem">🏆</span>
                                    </div>
                                    <h2 class="mb-2" style="color: var(--accent-gold);">Assessment Complete</h2>
                                    <p class="text-gray" style="font-size: 1.1rem;">Superior logic detected. <br><b>+${this.quizScore} XP</b> added to your profile.</p>
                                </div>
                            `;
                        }
                    }, 1200);
                });
            });
        }
    }

    async nextSlide() {
        this.currentSlideIndex++;
        if (this.currentSlideIndex < this.activeLesson.slides.length) {
            this.renderSlide();
        } else {
            await this.finishLesson();
        }
    }

    async finishLesson() {
        this.nextSlideBtn.disabled = true;
        this.nextSlideBtn.textContent = 'Saving...';
        this.progressBar.style.width = `100%`;

        const baseXP = 50; // base completion XP
        const totalXP = baseXP + this.quizScore;

        if (window.dashboardEngine.isDevMock) {
            // Mock saving locally
            window.dashboardEngine.profile.xp += totalXP;
            window.dashboardEngine.completedLessons.push({
                lesson_id: this.activeLesson.id,
                xp_earned: totalXP,
                completed_at: new Date().toISOString()
            });
        } else {
            await window.db.markLessonComplete(window.dashboardEngine.userId, this.activeLesson.id, totalXP);
            await window.db.updateProfileXP(window.dashboardEngine.userId, totalXP);
        }
        
        // Refresh dashboard data
        await window.dashboardEngine.init(window.dashboardEngine.userId);

        setTimeout(() => {
            this.closeRunner();
        }, 500);
    }

    closeRunner() {
        this.activeLesson = null;
        window.switchView('main-dashboard-view');
        document.getElementById('bottom-nav').classList.remove('hidden');
    }
}

window.LessonEngine = LessonEngine;
