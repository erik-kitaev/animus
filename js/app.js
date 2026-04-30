e ressodocument.addEventListener('DOMContentLoaded', () => {
    // Initialize Engines
    window.assessmentEngine = new window.AssessmentEngine();
    window.dashboardEngine = new window.DashboardEngine();
    window.lessonEngine = new window.LessonEngine();

    // View Switching Logic
    window.switchView = (viewId) => {
        document.querySelectorAll('.view').forEach(v => {
            v.classList.remove('active');
            v.classList.add('hidden');
        });
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                target.classList.add('active');
            }, 10);
        }
    };

    // Main Auth State Checker
    window.checkAuthState = async () => {
        const user = await window.db.getCurrentUser();
        if (user) {
            // User is logged in. Check if assessments are complete.
            const results = await window.db.getTestResults(user.id);
            const totalTests = window.ANIMUS_ASSESSMENTS.length;

            // Wait for DB profile setup if this is a fresh sign up
            let profile = await window.db.getProfile(user.id);
            if (!profile) {
                // simple retry mechanism
                await new Promise(r => setTimeout(r, 1000));
                profile = await window.db.getProfile(user.id);
            }

            if (results.length < totalTests) {
                // Needs to complete assessments
                await window.assessmentEngine.init(user.id);
                window.switchView('assessment-dashboard-view');
            } else {
                // Assessments complete, go to dashboard
                await window.dashboardEngine.init(user.id);
                window.switchView('main-dashboard-view');
            }
        } else {
            // Not logged in
            window.switchView('auth-view');
        }
    };

    // Dev Bypass Logic
    const devBypassBtn = document.getElementById('dev-bypass-btn');
    if (devBypassBtn) {
        devBypassBtn.addEventListener('click', () => {
            const mockUserId = '1234-test-user';
            window.dashboardEngine.userId = mockUserId;
            window.dashboardEngine.profile = { streak: 5, xp: 120 };
            window.dashboardEngine.completedLessons = [];
            window.dashboardEngine.testResults = window.ANIMUS_ASSESSMENTS.map(a => ({ domain: a.id, score: 10 }));

            window.dashboardEngine.renderHeader();
            window.dashboardEngine.renderHome();
            window.dashboardEngine.renderRoadmap();
            window.dashboardEngine.renderStats();

            window.switchView('main-dashboard-view');
        });
    }

    // Initial Check
    window.checkAuthState();
});
