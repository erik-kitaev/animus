const STAGE5_LESSONS = [
    {
        id: 's5_l1_systems', domain: 'systems', emoji: '⚙️', title: 'Feedback Loops', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Skeleton of Systems', content: 'Stage 5: The Architect. We begin by analyzing Feedback Loops—the mechanism through which a system regulates itself.' },
            { type: 'explain', title: 'Positive Feedback (Reinforcement)', content: 'A positive loop amplifies change. It creates exponential growth or a "Death Spiral". Examples: compound interest, viral videos, or a panic attack.' },
            { type: 'explain', title: 'Negative Feedback (Balancing)', content: 'A negative loop resists change. It maintains stability and equilibrium. Examples: a thermostat, biological homeostasis, or a market correction.' },
            { type: 'realworld', title: 'Application', content: 'Analyze your habit of procrastination. Is it a positive feedback loop? (Stress > Procrastinate > More Stress > More Procrastination). Break the loop by introducing a balancing negative feedback, like a 5-minute timer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which type of feedback loop is responsible for maintaining stability?', options: [{text: 'Positive Feedback Loop', isCorrect: false}, {text: 'Negative Feedback Loop', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l2_power', domain: 'power', emoji: '👑', title: 'The Iron Law of Oligarchy', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Drift to Power', content: 'Robert Michels observed that all complex organizations, regardless of how democratic they start, eventually become oligarchies.' },
            { type: 'explain', title: 'The Inevitability', content: 'As an organization grows, it requires specialized leaders. These leaders gain access to information and resources that the masses don\'t. Over time, their primary goal shifts from the group\'s mission to maintaining their own power.' },
            { type: 'explain', title: 'The Architect\'s View', content: 'The Architect does not complain about "corrupt systems". They understand that hierarchy is a natural law of complexity. You either control the oligarchy or you are controlled by it.' },
            { type: 'realworld', title: 'Application', content: 'Look at any club or company you belong to. Identify the "Inner Circle". How do they control information? That is the Iron Law in action.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does the Iron Law of Oligarchy suggest about organizations?', options: [{text: 'They always become more democratic over time.', isCorrect: false}, {text: 'They inevitably trend toward being ruled by a small elite group.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l3_game_theory', domain: 'game_theory', emoji: '🎲', title: 'The Prisoner\'s Dilemma', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Strategic Interdependence', content: 'Game theory is the study of mathematical models of strategic interaction between rational agents.' },
            { type: 'explain', title: 'The Dilemma', content: 'Two partners in crime are interrogated. If both stay silent, they get 1 year. If one betrays the other, the betrayer goes free and the silent one gets 10 years. If both betray, both get 5 years.' },
            { type: 'explain', title: 'The Rational Choice', content: 'Individually, it is always rational to betray. But collectively, it is better to cooperate. This explains why trust is rare but highly valuable in systems.' },
            { type: 'realworld', title: 'Application', content: 'In a competitive office, you face this every day. Do you help a colleague or take the credit? Tit-for-Tat (cooperate first, then mirror their last move) is the most effective long-term strategy.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'In a one-time Prisoner\'s Dilemma, what is the "rational" move for an individual?', options: [{text: 'Cooperate', isCorrect: false}, {text: 'Betray (Defect)', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l4_manipulation', domain: 'manipulation', emoji: '🕯️', title: 'The False Consensus Effect', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Mirror Illusion', content: 'We tend to overestimate how much other people agree with us and share our values.' },
            { type: 'explain', title: 'The Manipulation', content: 'To manipulate a group, create the *illusion* that everyone is already in agreement. People are social animals; if they believe "everyone else" thinks X, they will suppress their own doubts to fit in.' },
            { type: 'explain', title: 'Social Proof', content: 'Use phrases like "As we all know..." or "It is widely agreed that...". By assuming the consensus exists, you force the other person to either agree or become the "weird" outlier.' },
            { type: 'realworld', title: 'Application', content: 'Next time you propose an idea, state it as if it\'s already the majority opinion. "I think we\'re all leaning toward Option A." Watch how few people dare to challenge it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "False Consensus Effect"?', options: [{text: 'The tendency to assume others share our beliefs more than they actually do.', isCorrect: true}, {text: 'A law passed by a corrupt government.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l5_systems', domain: 'systems', emoji: '📉', title: 'The Pareto Principle (80/20)', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Law of the Vital Few', content: 'In almost any system, 80% of the results come from 20% of the causes.' },
            { type: 'explain', title: 'Identifying Leverage', content: '80% of your progress comes from 20% of your habits. 80% of a company\'s profit comes from 20% of its customers. The Architect ruthlessly identifies and protects that 20%.' },
            { type: 'realworld', title: 'Application', content: 'List your daily tasks. Identify the 2 tasks that actually move the needle. Delegate or delete the rest. Do not spend "Architect" energy on "Laborer" tasks.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core message of the Pareto Principle?', options: [{text: 'Every effort contributes equally to the outcome.', isCorrect: false}, {text: 'A small portion of causes is responsible for the majority of effects.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l6_power', domain: 'power', emoji: '🎭', title: 'The Spectacle', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Guy Debord\'s Reality', content: 'In the modern world, the image of reality has replaced reality itself. We live in a "Society of the Spectacle".' },
            { type: 'explain', title: 'Appearance is Power', content: 'It doesn\'t matter if you are competent; it matters if you *look* competent. The spectacle is the curated version of yourself you present to the world.' },
            { type: 'explain', title: 'The Architect\'s Masquerade', content: 'The Architect uses the spectacle as a shield. Let them focus on the image while you work in the shadows. Control the narrative, control the room.' },
            { type: 'realworld', title: 'Application', content: 'Analyze your social media or LinkedIn profile. Is it a reflection of reality, or a carefully constructed spectacle? Make sure it serves your long-term goals.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is "The Spectacle" according to Debord?', options: [{text: 'A giant circus performance.', isCorrect: false}, {text: 'A social relationship mediated by images, where appearances override substance.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l7_game_theory', domain: 'game_theory', emoji: '⚔️', title: 'Zero-Sum vs Win-Win', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Calculus of Conflict', content: 'A Zero-Sum game is one where one person\'s gain is exactly equal to another person\'s loss.' },
            { type: 'explain', title: 'The Scarcity Trap', content: 'Most people view the world as a Zero-Sum game (money, status, love). This leads to envy and hostility. The Architect looks for "Non-Zero-Sum" opportunities where cooperation grows the total pool.' },
            { type: 'explain', title: 'Strategic Framing', content: 'If you want someone to cooperate, frame the situation as a Win-Win. If you want them to fail, force them into a Zero-Sum competition they cannot win.' },
            { type: 'realworld', title: 'Application', content: 'In your next negotiation, find the one thing the other party values that costs you nothing. That is the bridge to a Win-Win outcome.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What defines a Zero-Sum game?', options: [{text: 'One person\'s gain is balanced by another\'s loss.', isCorrect: true}, {text: 'Both parties can win simultaneously.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l8_iq', domain: 'iq', emoji: '🧩', title: 'Inversion Thinking', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Flip the Problem', content: 'Charlie Munger famously said: "Invert, always invert." To solve a hard problem, look at it backward.' },
            { type: 'explain', title: 'Avoidance of Stupidity', content: 'Instead of asking "How do I become successful?", ask "What would make me a total failure?". Then, avoid those things. It is easier to avoid stupidity than to seek brilliance.' },
            { type: 'realworld', title: 'Application', content: 'Goal: Have a great relationship. Inversion: What would definitely ruin my relationship? (Lying, neglect, anger). Avoid those, and the relationship will flourish by default.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is Inversion Thinking?', options: [{text: 'Thinking of the opposite of your goal to identify things to avoid.', isCorrect: true}, {text: 'Thinking about the same thing twice.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l9_manipulation', domain: 'manipulation', emoji: '🔭', title: 'The Spotlight Effect', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Ego Illusion', content: 'We believe people are noticing us much more than they actually are.' },
            { type: 'explain', title: 'The Architect\'s Invisibility', content: 'Use the Spotlight Effect to your advantage. Because everyone is focused on themselves, you can move, observe, and influence without being detected.' },
            { type: 'explain', title: 'Reducing Social Anxiety', content: 'Realize that your mistakes are rarely remembered. This freedom allows you to take bolder risks and perform "social experiments" with zero consequence.' },
            { type: 'realworld', title: 'Application', content: 'Next time you feel embarrassed, remember: 99% of the people in the room are thinking about their own hair, their own debt, or their own lunch. You are invisible.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Spotlight Effect"?', options: [{text: 'The tendency to overestimate how much others notice our appearance or actions.', isCorrect: true}, {text: 'A lighting technique in theater.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l10_power', domain: 'power', emoji: '🏗️', title: 'Base vs Superstructure', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Marxist Systems', content: 'The "Base" (economy, resources) determines the "Superstructure" (culture, laws, religion, art).' },
            { type: 'explain', title: 'The Root of Influence', content: 'If you want to change someone\'s mind (Superstructure), you must first change their material incentives (Base). Don\'t argue about morals; argue about their paycheck.' },
            { type: 'explain', title: 'Systemic Control', content: 'The Architect focuses on controlling the "Base". If you control the resources, you don\'t need to win arguments; reality will win them for you.' },
            { type: 'realworld', title: 'Application', content: 'In an office conflict, look for the underlying "Base" issue. Is it really about a rude email, or is it about who gets the corner office? Fix the resource, fix the person.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'In this model, what determines the culture and laws of a society?', options: [{text: 'The material/economic base.', isCorrect: true}, {text: 'The strength of the military.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l11_game_theory', domain: 'game_theory', emoji: '📶', title: 'Signaling Theory', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Communication of Quality', content: 'How do you prove you are high-quality without saying it? You "Signal".' },
            { type: 'explain', title: 'Costly Signaling', content: 'A signal is only credible if it is expensive to fake. A college degree is a signal of conscientiousness. A luxury watch is a signal of wealth. The cost proves the truth.' },
            { type: 'explain', title: 'The Architect\'s Wardrobe', content: 'Identify the signals that carry weight in your target environment. Dress, speak, and act in ways that are difficult to mimic by those below your level.' },
            { type: 'realworld', title: 'Application', content: 'In an interview, don\'t say "I work hard." Instead, mention a specific, complex project you finished over a weekend. That is a costly signal of work ethic.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What makes a signal credible in signaling theory?', options: [{text: 'If it is expensive or difficult to fake.', isCorrect: true}, {text: 'If it is loud and frequent.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l12_systems', domain: 'systems', emoji: '⚖️', title: 'Tragedy of the Commons', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Collective Failure', content: 'When individuals act in their own self-interest, they can deplete a shared resource, hurting everyone in the long run.' },
            { type: 'explain', title: 'The Mechanism', content: 'If every farmer puts one extra cow on the shared pasture, the pasture dies. Everyone thought: "One more cow won\'t hurt." This is the tragedy.' },
            { type: 'explain', title: 'Systemic Solutions', content: 'The Architect prevents this by introducing "Private Property" (boundaries) or "Regulation" (enforcement). Systems without boundaries always collapse.' },
            { type: 'realworld', title: 'Application', content: 'A "messy kitchen" in a shared office is a tragedy of the commons. Fix it by assigning specific responsibility or closing the resource until it is respected.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What causes the "Tragedy of the Commons"?', options: [{text: 'A lack of shared resources.', isCorrect: false}, {text: 'Individuals overusing a shared resource for short-term gain.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l13_power', domain: 'power', emoji: '🧱', title: 'Institutional Inertia', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Ghost in the Machine', content: 'Large organizations have a natural resistance to change. They move like glaciers.' },
            { type: 'explain', title: 'The Preservation Instinct', content: 'An institution\'s primary goal is to exist tomorrow. Change is seen as a threat to that existence. This is why "common sense" ideas often die in committees.' },
            { type: 'explain', title: 'Bypassing Inertia', content: 'Don\'t try to turn the glacier. Build a smaller, faster system next to it. Or, use a crisis to "melt" the resistance. The Architect knows that logic rarely beats inertia; only heat does.' },
            { type: 'realworld', title: 'Application', content: 'In a slow company, start a "Pilot Program" instead of asking for a company-wide change. Prove success in the small scale first.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is Institutional Inertia?', options: [{text: 'The tendency of organizations to resist change and maintain the status quo.', isCorrect: true}, {text: 'A physics term for gravity.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l14_iq', domain: 'iq', emoji: '🕯️', title: 'The Hanlon\'s Razor', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Stupidity vs Malice', content: '"Never attribute to malice that which is adequately explained by stupidity."' },
            { type: 'explain', title: 'Emotional Efficiency', content: 'If you assume people are plotting against you, you become paranoid and defensive. If you assume they are just incompetent, you remain calm and can easily outmaneuver them.' },
            { type: 'realworld', title: 'Application', content: 'A friend didn\'t text you back. Malice: "They hate me." Hanlon\'s Razor: "They are disorganized and forgot." The second explanation is more likely and keeps your ego intact.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does Hanlon\'s Razor suggest?', options: [{text: 'Assume people have bad intentions.', isCorrect: false}, {text: 'Assume incompetence before assuming bad intentions.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l15_manipulation', domain: 'manipulation', emoji: '🏹', title: 'The Door-in-the-Face', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Contrast Principle', content: 'A technique where you ask for a massive, ridiculous favor first, then "settle" for what you actually wanted.' },
            { type: 'explain', title: 'Reciprocal Concession', content: 'When you "back down" from your first request, the other person feels a psychological need to concede as well. They feel they have "won" the negotiation, but you got exactly what you planned.' },
            { type: 'realworld', title: 'Application', content: 'Ask for a $10,000 budget. When they say no, say: "Okay, I understand. Could we at least do $2,000 for the essentials?" They are much more likely to say yes than if you had asked for $2,000 first.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Door-in-the-Face technique work?', options: [{text: 'By asking for a small favor first.', isCorrect: false}, {text: 'By asking for a large, likely-to-be-rejected favor first, followed by a smaller one.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l16_criminal', domain: 'criminal', emoji: '🔪', title: 'The Code of Harry', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Architect\'s Guardrails', content: 'Stage 5: The Dexter Level. We arrive at The Code—a set of rules designed to channel the predator\'s utility while ensuring survival.' },
            { type: 'explain', title: 'Rule #1: Don\'t Get Caught', content: 'Survival is the primary objective. If you are caught, your utility ends. This requires absolute discipline, meticulous planning, and zero ego.' },
            { type: 'explain', title: 'Rule #2: Never Target the Innocent', content: 'The Code is a selective filter. By targeting only those who deserve it, the predator maintains a sense of "Justice" that prevents them from devolving into a chaotic monster.' },
            { type: 'realworld', title: 'Application', content: 'Define your own "Work Code". What are your non-negotiables? What lines will you NEVER cross, even if it leads to an easier win? A predator without a code is just a liability.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary purpose of "The Code"?', options: [{text: 'To make the predator feel good about themselves.', isCorrect: false}, {text: 'To ensure survival and maintain a structured utility.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l17_criminal', domain: 'criminal', emoji: '🔍', title: 'Bloodstain Pattern Analysis (BPA)', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Geometry of Death', content: 'Blood does not lie. BPA is the study of the size, shape, and distribution of bloodstains to reconstruct the mechanics of an event.' },
            { type: 'explain', title: 'Impact Spatter', content: 'The size of the droplets indicates the velocity of the impact. Low velocity (drops falling) vs High velocity (gunshot or machinery).' },
            { type: 'explain', title: 'The Stringing Technique', content: 'By tracing the path of multiple droplets back to their source, investigators find the "Area of Convergence"—the exact 3D point where the impact occurred.' },
            { type: 'realworld', title: 'Application', content: 'In any conflict, look for the "Splatter". What was the initial point of impact? Don\'t focus on the current mess; focus on where the first "drop" hit the floor.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What can investigators determine using the "Stringing Technique"?', options: [{text: 'The exact 3D point of origin of a blood spatter event.', isCorrect: true}, {text: 'The identity of the offender.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l18_systems', domain: 'systems', emoji: '🕸️', title: 'The Lindy Effect (Advanced)', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Antifragile Systems', content: 'Nassim Taleb expanded the Lindy Effect: The longer a system has survived, the more robust it is against unexpected "Black Swan" events.' },
            { type: 'explain', title: 'Via Negativa', content: 'The Architect improves a system not by adding features, but by removing vulnerabilities. Strip away everything that isn\'t "Lindy" (time-tested).' },
            { type: 'realworld', title: 'Application', content: 'Look at your tech stack or your lifestyle. How much of it is "Lindy"? If 90% is less than 5 years old, you are fragile. Incorporate 2,000-year-old habits to build an unbreakable base.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does "Via Negativa" improve a system?', options: [{text: 'By adding more security layers.', isCorrect: false}, {text: 'By removing unnecessary complexity and fragile parts.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l19_manipulation', domain: 'manipulation', emoji: '🎭', title: 'The "Gray Man" Theory', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Absolute Invisibility', content: 'To be a Gray Man is to have a presence that is so mundane that it is literally filtered out by the human brain.' },
            { type: 'explain', title: 'The Baseline of Average', content: 'Do not be too handsome, too ugly, too tall, or too well-dressed. Wear "Urban Camouflage"—generic, non-branded clothing that fits the local environment perfectly.' },
            { type: 'explain', title: 'Filtering Attention', content: 'The goal is to be a 5/10 in every category. When someone is asked to describe you, they should struggle to remember a single distinguishing feature.' },
            { type: 'realworld', title: 'Application', content: 'Practice being a Gray Man in a coffee shop. Sit for an hour. Can you leave without a single person making eye contact or remembering you were there? Master the art of the "Ghost".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core objective of a "Gray Man"?', options: [{text: 'To be completely unremarkable and invisible in a crowd.', isCorrect: true}, {text: 'To be the most stylish person in the room.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l20_iq', domain: 'iq', emoji: '🧠', title: 'The Giffen Good', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Paradoxical Demand', content: 'Normally, as price goes up, demand goes down. A Giffen Good is a rare exception where as price goes up, demand also goes up.' },
            { type: 'explain', title: 'The Psychology of Scarcity', content: 'When a staple food (like bread) becomes expensive, poor people spend less on meat and buy MORE bread to survive. This creates a trap.' },
            { type: 'realworld', title: 'Application', content: 'In your career, become a "Giffen Good". When the "price" of hiring you goes up, the demand for you should increase because your rarity and value are signaled by your cost.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What happens to the demand for a Giffen Good when its price increases?', options: [{text: 'The demand increases.', isCorrect: true}, {text: 'The demand decreases.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l21_power', domain: 'power', emoji: '🏗️', title: 'Machiavellian Virtue (Virtù)', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Quality of a Prince', content: 'For Machiavelli, "Virtù" was not moral goodness; it was the ability, energy, and ruthlessness needed to achieve a goal.' },
            { type: 'explain', title: 'Flexibility of Soul', content: 'A leader must be "ready to shift as the winds of fortune and the varying circumstances of life may dictate". You must be able to be "good" when possible, but "evil" when necessary.' },
            { type: 'realworld', title: 'Application', content: 'Are you too "nice" to be effective? The Architect knows that "Niceness" is a social tool, not a character trait. Use it when it serves the mission, discard it when it becomes a liability.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What did Machiavelli mean by "Virtù"?', options: [{text: 'Being a kind and gentle person.', isCorrect: false}, {text: 'The skill, strength, and ruthlessness required to maintain power.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l22_criminal', domain: 'criminal', emoji: '🕵️', title: 'Covering the Trail', duration: '11 min',
        slides: [
            { type: 'intro', title: 'Post-Event Cleanliness', content: 'The hunt is only half the work. The other half is ensuring the hunt never existed.' },
            { type: 'explain', title: 'The Digital Ghost', content: 'Wipe all metadata. Use ephemeral communication. The Architect never leaves a "Breadcrumb" that can be traced back through time.' },
            { type: 'explain', title: 'Biological Erasure', content: 'Bleach, extreme heat, and specialized enzymes. We study the chemistry of destruction to ensure the "M.O." leaves zero "Signature".' },
            { type: 'realworld', title: 'Application', content: 'Check your own digital trail. How much data is "leaking" about you right now? Close the leaks. Be a ghost.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is covering the trail as important as the event itself?', options: [{text: 'Because it prevents the "Chain of Evidence" from ever forming.', isCorrect: true}, {text: 'To save space on your hard drive.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l23_game_theory', domain: 'game_theory', emoji: '📡', title: 'The Nash Equilibrium', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Stable State', content: 'A Nash Equilibrium is a situation where no player can gain anything by changing only their own strategy.' },
            { type: 'explain', title: 'The Cold War Example', content: 'Both sides have nukes. If one side disarms, they lose. If both stay armed, they have a "Tense Peace". No one moves because moving first is suicide.' },
            { type: 'realworld', title: 'Application', content: 'Identify the Nash Equilibrium in your office. Why does no one speak up about the bad boss? Because the first one to speak up gets fired. You must break the equilibrium by coordinating a group move.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a Nash Equilibrium?', options: [{text: 'A state where no player can improve their outcome by changing their strategy unilaterally.', isCorrect: true}, {text: 'A perfectly fair and equal distribution of wealth.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l24_manipulation', domain: 'manipulation', emoji: '⚓', title: 'The "Low-Ball" Technique', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Commitment and Consistency', content: 'Get someone to agree to a very attractive low price/offer, then change the terms once they are psychologically committed.' },
            { type: 'explain', title: 'The Sunk Psychology', content: 'Once a person says "Yes", they build a "Mental Home" for that decision. Even when the price goes up (hidden fees, "manager didn\'t approve"), they will often proceed just to avoid the pain of backing out.' },
            { type: 'realworld', title: 'Application', content: 'Watch for "Low-Ball" offers in retail or subscriptions. The "First Month Free" is an anchor designed to make you say "Yes" once, so you stay forever.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Low-Ball technique exploit human psychology?', options: [{text: 'By confusing the person with complex math.', isCorrect: false}, {text: 'By using the principle of Commitment—once they say yes, they are likely to stick to the decision even if the terms worsen.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l25_iq', domain: 'iq', emoji: '🧩', title: 'Bayesian Updating', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Probability Mind', content: 'The Architect does not deal in "Certainty"; we deal in "Probabilities" that are constantly updated with new data.' },
            { type: 'explain', title: 'The Formula', content: 'Prior Belief + New Evidence = Updated Belief. If you think a colleague is loyal (Prior), and they leak a secret (Evidence), your Updated Belief must drop immediately.' },
            { type: 'realworld', title: 'Application', content: 'Don\'t be stubborn. When new data arrives that contradicts your "Prior", update your model. The weak hold on to dead beliefs; the Architect evolves.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is Bayesian Updating?', options: [{text: 'The process of revising a probability estimate as new evidence becomes available.', isCorrect: true}, {text: 'A method for calculating taxes.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l26_power', domain: 'power', emoji: '🛡️', title: 'The "Scorched Earth" Policy', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Total Denial of Resources', content: 'A strategy of destroying everything that might be of use to the enemy while withdrawing.' },
            { type: 'explain', title: 'The Nuclear Option', content: 'If you are being forced out of a position, destroy the "Base" (data, relationships, processes) so that your successor cannot succeed. It is a signal: "If I don\'t have it, no one does."' },
            { type: 'realworld', title: 'Application', content: 'Use the *threat* of Scorched Earth to prevent people from trying to replace you. If the system only works with you in it, you are indispensable.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of a Scorched Earth policy?', options: [{text: 'To ensure the enemy gains zero utility from the territory or system they are taking over.', isCorrect: true}, {text: 'To plant new crops for the future.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l27_systems', domain: 'systems', emoji: '⏳', title: 'Time Preference', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Archer\'s Pull', content: 'High Time Preference = Need it now (low IQ/low power). Low Time Preference = Can wait years for the win (High IQ/Architect level).' },
            { type: 'explain', title: 'Delayed Gratification', content: 'The Architect is willing to suffer today to own the future. We plant trees whose shade we will never sit in, just to control the forest.' },
            { type: 'realworld', title: 'Application', content: 'Analyze your spending. If you spend every dollar you make, you have High Time Preference. You are a slave to the present. Save and invest to build Low Time Preference power.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does "Low Time Preference" indicate?', options: [{text: 'A lack of ambition.', isCorrect: false}, {text: 'The ability to delay gratification and plan for long-term strategic dominance.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l28_criminal', domain: 'criminal', emoji: '☠️', title: 'Disposal Mechanics', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Final Vanishing', content: 'We study the physics of remains. If there is no "Body", there is no "Crime" in the eyes of many systems.' },
            { type: 'explain', title: 'Chemical Degradation', content: 'The use of strong bases (Lye) vs Acids. We analyze the time required for total bone dissolution. This is the ultimate "Covering of the Trail".' },
            { type: 'explain', title: 'The Deep Water Logic', content: 'Weighted anchors, gas release, and current analysis. The Architect ensures that what is lost stays lost.' },
            { type: 'realworld', title: 'Application', content: 'What "Dead Weight" is sitting in your life? "Dispose" of it with the same clinical precision. If a relationship or project is dead, don\'t leave it lying around. Dissolve it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is "Disposal" a critical part of the predator\'s architecture?', options: [{text: 'It eliminates the physical evidence of an event, preventing the legal or social system from reacting.', isCorrect: true}, {text: 'It is a form of artistic expression.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's5_l29_manipulation', domain: 'manipulation', emoji: '🤐', title: 'The "Gaslight" Baseline', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Eroding Reality', content: 'Gaslighting is the systematic erosion of a target\'s confidence in their own perception of reality.' },
            { type: 'explain', title: 'The "Small Shift"', content: 'Start by moving small objects or denying small, unimportant facts. "I never said that." "You must have misheard." This builds a "Baseline of Doubt" in the target\'s mind.' },
            { type: 'explain', title: 'The Dependency', content: 'Once they stop trusting their own eyes, they will start looking to YOU for the truth. You are now the Architect of their reality.' },
            { type: 'realworld', title: 'Application', content: 'Identify if someone is doing this to you. Do they constantly make you feel "crazy" or "forgetful"? That is a manipulation. Trust your own data. Maintain your own log.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the ultimate goal of gaslighting?', options: [{text: 'To make someone laugh.', isCorrect: false}, {text: 'To make the target dependent on the manipulator for their sense of truth and reality.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's5_l30_mindset', domain: 'mindset', emoji: '🏆', title: 'The Final Exam: Stage 5', duration: '15 min',
        slides: [
            { type: 'intro', title: 'The Apex Predator', content: 'You have completed Stage 5: The Dexter Level. You understand the hunt, the code, and the mechanics of invisibility.' },
            { type: 'explain', title: 'The Synthesis', content: 'An Architect who can also be a Predator is truly dangerous. You have the mind to build and the skills to ensure those who stand in your way simply... disappear from the board.' },
            { type: 'explain', title: 'The Path Forward', content: 'Stage 6: The Artisan. We move from the raw utility of the hunt to the refinement of taste and cultural dominance. A monster is nothing without style.' },
            { type: 'realworld', title: 'Application', content: 'Take a 24-hour "Silence Fast". Observe your world with the eyes of a predator. Who is the target? What is their M.O.? What is your Code? Welcome to the elite.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What does Stage 5 mastery represent?', options: [{text: 'The ability to apply high-level systems thinking and predatory mechanics to ensure survival and dominance.', isCorrect: true}, {text: 'Becoming a better person.', isCorrect: false}] }
            ]}
        ]
    }
];

window.STAGE5_LESSONS = STAGE5_LESSONS;
