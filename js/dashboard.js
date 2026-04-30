class DashboardEngine {
    constructor() {
        this.cacheDOM();
        this.bindEvents();
    }

    cacheDOM() {
        this.homeTab = document.getElementById('home-tab-content');
        this.roadmapTab = document.getElementById('roadmap-tab-content');
        this.laws48Tab = document.getElementById('tab-48');
        this.profileTab = document.getElementById('tab-profile');
        this.laws48List = document.getElementById('laws-48-list');
        this.navItems = document.querySelectorAll('.nav-item'); // Updated to .nav-item
        this.tabContents = [this.homeTab, this.roadmapTab, this.laws48Tab, this.profileTab];
    }

    bindEvents() {
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetId = item.getAttribute('data-target');
                this.switchTab(targetId);
                this.navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
            });
        });

        // Logout
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async () => {
                if (window.db && window.db.signOut) await window.db.signOut();
                window.checkAuthState && window.checkAuthState();
            });
        }

        // Retake assessments
        const retakeBtn = document.getElementById('retake-assessments-btn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', async () => {
                if (confirm('Reset all assessment scores and retake from the start?')) {
                    await window.db.clearTestResults(this.userId);
                    window.assessmentEngine.init(this.userId);
                    window.switchView('assessment-dashboard-view');
                }
            });
        }
    }

    switchTab(tabId) {
        this.tabContents.forEach(tc => {
            if(tc) tc.classList.add('hidden');
        });
        const t = document.getElementById(tabId);
        if(t) t.classList.remove('hidden');
        window.scrollTo(0,0);
    }

    async init(userId) {
        this.userId = userId;
        
        if (!this.isDevMock) {
            this.profile = await window.db.getProfile(userId) || { streak: 0, xp: 0 };
            this.completedLessons = await window.db.getCompletedLessons(userId) || [];
            this.testResults = await window.db.getTestResults(userId) || [];
            this.lessonsData = window.ANIMUS_LESSONS || {};
        } else {
            this.lessonsData = this.lessonsData || window.ANIMUS_LESSONS || {};
        }

        this.renderHome();
        this.renderRoadmap();
        this.render48Laws();
        this.renderStats();
    }



    getLevelInfo(xp) {
        if (xp < 500) return { title: 'Novice', lvl: 1, progress: (xp / 500) * 100, next: 'Student' };
        if (xp < 1500) return { title: 'Student', lvl: 2, progress: ((xp - 500) / 1000) * 100, next: 'Profiler' };
        if (xp < 3000) return { title: 'Profiler', lvl: 3, progress: ((xp - 1500) / 1500) * 100, next: 'The Architect' };
        if (xp < 5000) return { title: 'The Architect', lvl: 4, progress: ((xp - 3000) / 2000) * 100, next: 'Dexter Morgan' };
        if (xp < 8000) return { title: 'Dexter Morgan', lvl: 5, progress: ((xp - 5000) / 3000) * 100, next: 'The Monster' };
        if (xp < 15000) return { title: 'The Monster', lvl: 6, progress: ((xp - 8000) / 7000) * 100, next: 'Hannibal Lecter' };
        return { title: 'Hannibal Lecter', lvl: 7, progress: 100, next: 'MAX' };
    }

    getNextLesson() {
        // Find first incomplete lesson traversing stages
        for (let i = 1; i <= 10; i++) {
            const stage = (this.lessonsData || {})[`stage${i}`];
            if(!stage || !stage.lessons) continue;
            for (const lesson of stage.lessons) {
                const isCompleted = (this.completedLessons || []).some(cl => cl.lesson_id === lesson.id);
                if (!isCompleted && !lesson.locked) {
                    return lesson;
                }
            }
        }
        return null;
    }

    renderHome() {
        this.homeTab.innerHTML = '';
        const levelInfo = this.getLevelInfo(this.profile.xp || 0);
        const nextLesson = this.getNextLesson();
        let activeStage = nextLesson ? 'Stage ' + nextLesson.id.split('_')[0].replace('s', '') : 'Stage 10';

        // 1. Header & Stage Progress
        let html = `
            <div class="animate-up">
                <h1 class="mt-4 mb-2">System Status</h1>
                <p class="mb-6">${levelInfo.title} · ${activeStage}</p>

                <div class="card mb-6">
                    <div class="flex-row space-between mb-4">
                        <span class="text-sm text-gray">NEURONAL MAPPING</span>
                        <span class="text-sm" style="color:var(--primary); font-weight: 900;">${Math.round(levelInfo.progress)}%</span>
                    </div>
                    <div class="progress-track w-full">
                        <div class="progress-fill" style="width: ${levelInfo.progress}%;"></div>
                    </div>
                    <div class="flex-row space-between mt-4">
                         <span class="text-sm text-gray">STREAK</span>
                         <span class="text-sm" style="color:var(--primary);">🔥 ${this.profile.streak || 0} DAYS</span>
                    </div>
                </div>

                <h3 class="mb-4 text-gray" style="font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">Primary Objective</h3>
        `;
        
        if (nextLesson) {
            html += `
                <div class="lesson-card animate-up" style="animation-delay: 0.1s" onclick="window.lessonEngine.startLessonById('${nextLesson.id}', 'stage${nextLesson.id.split('_')[0].replace('s', '')}')">
                    <div class="icon-box">${nextLesson.emoji}</div>
                    <div class="content">
                        <h4>${nextLesson.title}</h4>
                        <p>${nextLesson.domain.toUpperCase()} · ${activeStage}</p>
                    </div>
                    <div class="xp-earned">+50</div>
                </div>
            `;
        } else {
            html += `<p class="mb-4">All current objectives achieved. Awaiting further directives.</p>`;
        }

        // Secondary Objectives
        html += `
                <h3 class="mt-6 mb-4 text-gray" style="font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">Support Modules</h3>

                <div class="lesson-card animate-up" style="animation-delay: 0.3s">
                    <div class="icon-box">⚖️</div>
                    <div class="content">
                        <h4>48 LAWS RECAP</h4>
                        <p>Strategic Summaries</p>
                    </div>
                    <div class="xp-earned">${window.LAWS_48 ? window.LAWS_48.length : 0}</div>
                </div>

                <div class="flex-row gap-4 mt-6" style="gap: 12px;">
                    <button class="btn btn-secondary flex-1" onclick="document.querySelector('[data-target=\\'roadmap-tab-content\\']').click()">ROADPATH</button>
                    <button class="btn btn-secondary flex-1" onclick="if(confirm('Reset assessments?')) { window.db.clearTestResults(window.dashboardEngine.userId); window.assessmentEngine.init(window.dashboardEngine.userId); window.switchView('assessment-dashboard-view'); }">RE-TEST</button>
                </div>
            </div>
        `;

        this.homeTab.innerHTML = html;
    }

    renderRoadmap() {
        this.roadmapTab.innerHTML = `
            <div class="animate-up">
                <h1 class="mt-4 mb-2">Roadpath</h1>
                <p class="mb-6">The trajectory to absolute cognitive dominance.</p>
            </div>
        `;
        
        for (let i = 1; i <= 10; i++) {
            const stage = this.lessonsData[`stage${i}`];
            if(!stage) continue;

            let stageCompletedCount = 0;
            const nestedLessonsHtml = stage.lessons.map(lesson => {
                const isCompleted = this.completedLessons.some(cl => cl.lesson_id === lesson.id);
                if (isCompleted) stageCompletedCount++;
                return `
                    <div class="lesson-card mt-2 ${isCompleted ? 'completed' : ''} ${lesson.locked ? 'locked' : 'cursor-pointer'}" 
                         style="padding: 16px; ${isCompleted ? 'opacity:0.6' : ''}"
                         data-id="${lesson.id}" ${lesson.locked ? '' : `onclick="window.lessonEngine.startLessonById('${lesson.id}', '${stage.id}')"`}>
                        <div class="icon-box" style="width:44px; height:44px; font-size:1.2rem;">${lesson.emoji}</div>
                        <div class="content">
                            <h4 style="font-size: 0.95rem;">${lesson.title}</h4>
                            <p style="font-size: 0.75rem;">${lesson.domain.toUpperCase()}</p>
                        </div>
                        ${isCompleted ? '<span class="text-success" style="font-weight:900;">✔</span>' : ''}
                        ${lesson.locked ? '<span>🔒</span>' : ''}
                    </div>
                `;
            }).join('');

            const isActiveStage = stageCompletedCount < stage.lessons.length && stageCompletedCount >= 0;

            let cardHtml = `
                <div class="roadmap-stage-container mb-4 animate-up" style="animation-delay: ${i * 0.05}s">
                    <div class="lesson-card ${isActiveStage ? 'active' : ''}" style="border-left: 4px solid ${isActiveStage ? 'var(--primary)' : 'transparent'}" onclick="this.nextElementSibling.classList.toggle('hidden')">
                        <div class="icon-box" style="background: ${isActiveStage ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.03)'}; color: ${isActiveStage ? 'var(--primary)' : 'inherit'}">${i}</div>
                        <div class="content">
                            <h4>${stage.title.split(': ')[1] || stage.title}</h4>
                            <p>${stageCompletedCount}/${stage.lessons.length} COMPLETE</p>
                        </div>
                        <div style="color:var(--text-muted); font-size: 0.7rem;">${isActiveStage ? 'ACTIVE' : 'VIEW'}</div>
                    </div>
                    <div class="nested-lessons hidden pl-4 pr-4 pb-4">
                        ${nestedLessonsHtml}
                    </div>
                </div>
            `;

            this.roadmapTab.insertAdjacentHTML('beforeend', cardHtml);
        }
    }

    render48Laws() {
        if (!this.laws48List) return;
        this.laws48List.innerHTML = `
            <div class="animate-up">
                <h1 class="mt-4 mb-2">The 48 Laws</h1>
                <p class="mb-6">The ultimate compendium of power strategies.</p>
            </div>
        `;
        if (!window.LAWS_48) return;

        window.LAWS_48.forEach((law, idx) => {
            const isCompleted = this.completedLessons.some(cl => cl.lesson_id === law.id);
            const html = `
                <div class="lesson-card mb-4 cursor-pointer animate-up" style="animation-delay: ${idx * 0.02}s" onclick="window.lessonEngine.startLessonById('${law.id}', 'stage48')">
                    <div class="icon-box">${law.emoji || '♟️'}</div>
                    <div class="content">
                        <h4>Law ${idx + 1}</h4>
                        <p>${law.title.split(': ')[1] || law.title}</p>
                    </div>
                    <div class="xp-earned">${isCompleted ? '✔' : '+100'}</div>
                </div>
            `;
            this.laws48List.insertAdjacentHTML('beforeend', html);
        });
    }

    renderStats() {
        const profileContainer = document.getElementById('stats-bars-profile');
        if (!profileContainer) return;
        profileContainer.innerHTML = '';

        const levelInfo = this.getLevelInfo(this.profile.xp || 0);

        // Profile Header
        profileContainer.insertAdjacentHTML('beforeend', `
            <div class="profile-header animate-up">
                <div class="profile-avatar">🧠</div>
                <h2>The Architect</h2>
                <p>LEVEL ${levelInfo.lvl} · ${levelInfo.title.toUpperCase()}</p>
            </div>
            
            <div class="stats-grid mb-6 animate-up" style="animation-delay: 0.1s">
                <div class="stat-card">
                    <div class="label">Total XP</div>
                    <div class="value">${this.profile.xp || 0}</div>
                </div>
                <div class="stat-card">
                    <div class="label">Streak</div>
                    <div class="value">🔥 ${this.profile.streak || 0}</div>
                </div>
            </div>

            <div class="card mb-6 animate-up" style="animation-delay: 0.2s">
                <div class="flex-row space-between mb-4">
                    <span class="text-sm text-gray">NEXT LEVEL: ${levelInfo.next.toUpperCase()}</span>
                    <span class="text-sm" style="color:var(--primary); font-weight:900;">${Math.round(levelInfo.progress)}%</span>
                </div>
                <div class="progress-track w-full">
                    <div class="progress-fill" style="width: ${levelInfo.progress}%;"></div>
                </div>
            </div>

            <h3 class="mb-4 text-gray animate-up" style="font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; animation-delay: 0.3s">Cognitive Profile</h3>
            <div class="grid animate-up" style="animation-delay: 0.4s; gap: 12px;" id="baseline-grid-inner"></div>
        `);
        
        const grid = profileContainer.querySelector('#baseline-grid-inner');

        const domains = [
            { id: 'iq', name: 'Intellect', emoji: '🧠' },
            { id: 'eq', name: 'Perception', emoji: '👁' },
            { id: 'cultural', name: 'Culture', emoji: '🎨' },
            { id: 'philosophy', name: 'Stoicism', emoji: '⚡' },
            { id: 'criminal', name: 'Acuity', emoji: '🔍' },
            { id: 'mindset', name: 'Mindset', emoji: '🧊' },
            { id: 'eloquence', name: 'Eloquence', emoji: '✍️' },
            { id: 'manipulation', name: 'Influence', emoji: '♟️' }
        ];

        domains.forEach(d => {
            const testRes = this.testResults.find(tr => tr.domain === d.id);
            const baseScore = testRes ? testRes.score : 0;
            let pct = Math.min((baseScore / 20) * 50, 50);
            pct += this.completedLessons.filter(cl => cl.lesson_id.includes(d.id)).length * 2;
            pct = Math.min(Math.round(pct), 100);

            grid.insertAdjacentHTML('beforeend', `
                <div class="stat-card" style="padding: 16px;">
                    <div class="label" style="font-size: 0.6rem;">${d.name}</div>
                    <div class="value" style="font-size: 1.4rem;">${pct}%</div>
                    <div class="progress-track mt-2" style="height: 4px;">
                        <div class="progress-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `);
        });

        // Logout
        profileContainer.insertAdjacentHTML('beforeend', `
            <button class="btn btn-secondary btn-block mt-6 mb-6" id="logout-btn">TERMINATE SESSION</button>
        `);

        document.getElementById('logout-btn').addEventListener('click', async () => {
            if (window.db && window.db.signOut) await window.db.signOut();
            window.checkAuthState && window.checkAuthState();
        });
    }
}

window.DashboardEngine = DashboardEngine;
