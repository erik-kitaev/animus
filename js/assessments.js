class AssessmentEngine {
    constructor() {
        this.tests = window.ANIMUS_ASSESSMENTS || [];
        this.results = {};
        this.currentTestIndex = 0;
        this.currentQuestionIndex = 0;
        this.activeTest = null;
        
        this.cacheDOM();
        this.bindEvents();
    }

    cacheDOM() {
        this.listContainer = document.getElementById('assessment-list');
        this.runnerView = document.getElementById('assessment-runner-view');
        this.dashboardView = document.getElementById('assessment-dashboard-view');
        this.questionText = document.getElementById('assessment-question-text');
        this.optionsContainer = document.getElementById('assessment-options');
        this.progressBar = document.getElementById('assessment-progress');
        this.closeBtn = document.getElementById('close-assessment-btn');
        this.mainDashboardBtn = document.getElementById('go-to-main-dashboard-btn');
    }

    bindEvents() {
        if(this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.closeRunner();
            });
        }
        if(this.mainDashboardBtn) {
            this.mainDashboardBtn.addEventListener('click', () => {
                window.switchView('main-dashboard-view');
            });
        }
    }

    async init(userId) {
        this.userId = userId;
        // Fetch existing results
        const dbResults = await window.db.getTestResults(userId);
        this.results = {};
        dbResults.forEach(r => {
            this.results[r.domain] = r.score;
        });

        this.renderDashboard();
    }

    renderDashboard() {
        if (!this.listContainer) return;
        this.listContainer.innerHTML = '';
        
        let allCompleted = true;

        this.tests.forEach(test => {
            const isCompleted = this.results[test.id] !== undefined;
            if (!isCompleted) allCompleted = false;

            const card = document.createElement('div');
            card.className = `card assessment-card ${isCompleted ? 'completed cursor-pointer' : 'cursor-pointer'}`;
            card.innerHTML = `
                <span class="emoji">${test.emoji}</span>
                <h4>${test.title}</h4>
                ${isCompleted ? `<span class="text-sm" style="color:var(--success)">Completed</span>` : `<span class="text-sm text-gray">Pending</span>`}
            `;

            card.addEventListener('click', () => {
                if (!isCompleted) {
                    this.startTest(test.id);
                } else {
                    // Could show score, but spec says "checkmark on it > clicks on next test"
                }
            });

            this.listContainer.appendChild(card);
        });

        if (allCompleted) {
            this.mainDashboardBtn.classList.remove('hidden');
        } else {
            this.mainDashboardBtn.classList.add('hidden');
        }
    }

    startTest(testId) {
        this.activeTest = this.tests.find(t => t.id === testId);
        this.currentQuestionIndex = 0;
        this.testScore = 0;
        
        window.switchView('assessment-runner-view');
        this.renderQuestion();
    }

    renderQuestion() {
        const q = this.activeTest.questions[this.currentQuestionIndex];
        this.questionText.textContent = q.text;
        this.optionsContainer.innerHTML = '';

        // Progress
        const prog = ((this.currentQuestionIndex) / this.activeTest.questions.length) * 100;
        this.progressBar.style.width = `${prog}%`;

        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => this.handleAnswer(opt));
            this.optionsContainer.appendChild(btn);
        });
    }

    async handleAnswer(selectedOption) {
        this.testScore += selectedOption.score;
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.activeTest.questions.length) {
            this.renderQuestion();
        } else {
            await this.finishTest();
        }
    }

    async finishTest() {
        this.progressBar.style.width = `100%`;
        // Save to DB
        await window.db.saveTestResult(this.userId, this.activeTest.id, this.testScore);
        this.results[this.activeTest.id] = this.testScore;
        
        setTimeout(() => {
            this.closeRunner();
        }, 500);
    }

    closeRunner() {
        this.activeTest = null;
        window.switchView('assessment-dashboard-view');
        this.renderDashboard();
    }
}

window.AssessmentEngine = AssessmentEngine;
