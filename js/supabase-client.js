const SUPABASE_URL = 'https://dzvsdgcsfsrzdpwbhchc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6dnNkZ2NzZnNyemRwd2JoY2hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MzM1NzgsImV4cCI6MjA5MTQwOTU3OH0.ZGpmnMLcj4zIESVacMflzLAw_nE4f1LN4vhIWE6R-Ig';

let supabase = null;
try {
    if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch(e) { console.error(e); }

const db = {
    async getCurrentUser() {
        if(!supabase) return null;
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) console.error('Error getting session:', error);
        return session ? session.user : null;
    },
    async signUp(email, password) {
        if(!supabase) throw new Error("Database connection unavailable.");
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        if (data.user) {
            await supabase.from('profiles').insert([{ id: data.user.id, name: email.split('@')[0], xp: 0, streak: 0 }]);
        }
        return data;
    },
    async signIn(email, password) {
        if(!supabase) throw new Error("Database connection unavailable.");
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    },
    async signOut() {
        if(!supabase) return;
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },
    async getProfile(userId) {
        if(!supabase) return null;
        const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
        if (error && error.code !== 'PGRST116') console.error(error);
        return data;
    },
    async updateProfileXP(userId, xpGained) {
        if(!supabase) return;
        const profile = await this.getProfile(userId);
        if (!profile) return;
        const { error } = await supabase.from('profiles').update({ xp: profile.xp + xpGained }).eq('id', userId);
        if (error) console.error(error);
    },
    async saveTestResult(userId, domain, score) {
        if(!supabase) return null;
        const { data, error } = await supabase.from('test_results').insert([
            { user_id: userId, domain, score }
        ]);
        if (error) console.error('Error saving test result:', error);
        return data;
    },
    async getTestResults(userId) {
        if(!supabase) return [];
        const { data, error } = await supabase.from('test_results').select('*').eq('user_id', userId);
        if (error) {
            console.error('Error getting test results:', error);
            return [];
        }
        return data || [];
    },
    async clearTestResults(userId) {
        if(!supabase) return;
        const { error } = await supabase.from('test_results').delete().eq('user_id', userId);
        if (error) console.error(error);
    },
    async markLessonComplete(userId, lessonId, xpEarned) {
        if(!supabase) return null;
        const unique_key = `${userId}_${lessonId}`;
        const { data, error } = await supabase.from('completed_lessons').insert([
            { user_id: userId, lesson_id: lessonId, xp_earned: xpEarned, unique_key }
        ]);
        if (error && error.code !== '23505') console.error('Error saving lesson:', error);
        return data;
    },
    async getCompletedLessons(userId) {
        if(!supabase) return [];
        const { data, error } = await supabase.from('completed_lessons').select('*').eq('user_id', userId);
        if (error) {
            console.error(error);
            return [];
        }
        return data || [];
    }
};

// Re-assign the full implementation once ready
const finalDb = { ...db, isReady: true };
window.db = finalDb;
console.log("ANIMUS Database Client Ready.");
