document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const authError = document.getElementById('auth-error');

    if(authForm) {
        authForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('auth-submit-btn');

            try {
                btn.disabled = true;
                btn.textContent = 'Processing...';
                authError.classList.add('hidden');

                // Try to sign in first
                try {
                    console.log("Auth Debug: Attempting Sign In...");
                    await window.db.signIn(email, password);
                } catch (signInErr) {
                    console.warn("Sign In Failed:", signInErr.message);
                    
                    // If invalid credentials, it might be a new user OR wrong password
                    if (signInErr.message.includes('Invalid login credentials')) {
                        console.log("Potential new user. Attempting Registration...");
                        try {
                            await window.db.signUp(email, password);
                            // If sign up succeeds, try to sign in again (auto-login)
                            await window.db.signIn(email, password);
                        } catch (signUpErr) {
                            console.error("Registration Failed:", signUpErr);
                            let errorMsg = signUpErr.message;
                            
                            if (errorMsg.includes('User already registered')) {
                                throw new Error("This account already exists. Use your original password.");
                            } else if (errorMsg.includes('Database error saving new user')) {
                                throw new Error("Supabase Server Error (500). This usually means a Database Trigger is failing in your Supabase Dashboard. Check your SQL triggers.");
                            } else {
                                throw signUpErr;
                            }
                        }
                    } else {
                        throw signInErr;
                    }
                }
                
                // Login successful, trigger app state check
                window.checkAuthState();

            } catch (err) {
                console.error("Auth Exception:", err);
                authError.textContent = err.message || 'Authentication failed.';
                authError.classList.remove('hidden');
            } finally {
                btn.disabled = false;
                btn.textContent = 'Sign In / Register';
            }
        });
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            await window.db.signOut();
            window.checkAuthState();
        });
    }
});
