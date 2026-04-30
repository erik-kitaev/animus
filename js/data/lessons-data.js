const LESSONS_DB = {
    stage1: {
        id: 'stage1',
        title: 'Stage 1: The Foundation',
        description: 'Building the fundamental cognitive and emotional architecture.',
        lessons: window.STAGE1_LESSONS || []
    },
    stage2: { 
        id: 'stage2', 
        title: 'Stage 2: The Architect', 
        description: 'Structuring complex behavioral manipulation and philosophical detachment.', 
        lessons: window.STAGE2_LESSONS || [] 
    },
    stage3: { id: 'stage3', title: 'Stage 3: The Observer', description: 'Advanced environmental awareness, criminal pathology and Stoic detachment.', lessons: window.STAGE3_LESSONS || [] },
    stage4: { id: 'stage4', title: 'Stage 4: The Stoic', description: 'Mastery over physical pain, emotional suppression, and extreme endurance.', lessons: window.STAGE4_LESSONS || [] },
    stage5: { id: 'stage5', title: 'Stage 5: The Dexter Level', description: 'Understanding the mechanics of the hunt, covering tracks, and the Code.', lessons: window.STAGE5_LESSONS || [] },
    stage6: { id: 'stage6', title: 'Stage 6: The Artisan', description: 'Refining cultural tastes, aesthetics, and culinary psychology.', lessons: window.STAGE6_LESSONS || [] },
    stage7: { id: 'stage7', title: 'Stage 7: The Persuader', description: 'Hypnotic language patterns and advanced conversational dominance.', lessons: window.STAGE7_LESSONS || [] },
    stage8: { id: 'stage8', title: 'Stage 8: The Shadow', description: 'Becoming completely untraceable, psychologically and digitally.', lessons: window.STAGE8_LESSONS || [] },
    stage9: { id: 'stage9', title: 'Stage 9: The Monster', description: 'Embracing the darker triad traits for absolute utility.', lessons: window.STAGE9_LESSONS || [] },
    stage10: { id: 'stage10', title: 'Stage 10: Hannibal Level', description: 'The pinnacle of cognitive, emotional, and psychological mastery. Total control.', lessons: window.STAGE10_LESSONS || [] },
    stage48: { id: 'stage48', title: 'The 48 Laws', description: 'Deep study modules for Robert Greene\'s 48 Laws of Power.', lessons: window.LAWS_48 || [] }
};

// Generate placeholders for the rest of the 325 lessons to show roadmap
const domains = ['iq', 'eq', 'cultural', 'criminal', 'philosophy', 'mindset', 'eloquence', 'manipulation'];
const emojis = { iq:'🧠', eq:'👁', cultural:'🎨', criminal:'🔍', philosophy:'⚡', mindset:'🧊', eloquence:'✍️', manipulation:'♟️' };

// Placeholder loop removed - all stages now hardcoded.

window.ANIMUS_LESSONS = LESSONS_DB;
