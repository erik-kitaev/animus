const STAGE4_LESSONS = [
    {
        id: 's4_l1_mindset', domain: 'mindset', emoji: '🧊', title: 'The Armor of Patience', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Stage 4: The Stoic', content: 'We move from observation to endurance. The first lesson is Patience—the ability to wait for the right moment without psychological decay.' },
            { type: 'explain', title: 'The Boredom Threshold', content: 'Most people fail because they cannot tolerate boredom. They act prematurely just to "do something". The Stoic treats boredom as a filter that removes the weak.' },
            { type: 'explain', title: 'The Predator\'s Wait', content: 'Observe a predator. It does not pace nervously. It sits perfectly still for hours until the target is in the absolute optimal position. This stillness is not laziness; it is high-intensity preparation.' },
            { type: 'realworld', title: 'Application', content: 'Next time you are waiting in a long line or a slow meeting, do not check your phone. Sit with the boredom. Observe your own desire to escape it. Kill that desire.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is patience considered a "weapon" in Stoicism?', options: [{text: 'It allows you to wait until the odds are perfectly in your favor while others exhaust themselves.', isCorrect: true}, {text: 'It makes you look more mysterious.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l2_criminal', domain: 'criminal', emoji: '🔍', title: 'The Psychopath\'s Anatomy', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Amygdala Deficit', content: 'The brain of a primary psychopath shows significant structural differences, particularly in the amygdala—the center for fear and empathy.' },
            { type: 'explain', title: 'Low Fear Response', content: 'Psychopaths do not experience the "fight or flight" response in the same way. Their heart rate stays low even in life-threatening situations. This is why they are so effective under pressure.' },
            { type: 'explain', title: 'The Instrumental Goal', content: 'For a psychopath, other people are not "people"; they are "obstacles" or "tools". Emotion is not felt; it is used as a data point for manipulation.' },
            { type: 'realworld', title: 'Application', content: 'You are not a psychopath, but you can adopt their "Instrumental Perspective" during a crisis. Strip away the emotional noise and ask: "What are the mechanical steps to solve this?"' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a key neurological feature of primary psychopathy?', options: [{text: 'An overactive imagination.', isCorrect: false}, {text: 'A reduced fear response due to amygdala deficits.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l3_eq', domain: 'eq', emoji: '👁', title: 'The "Mask of Sanity"', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Perfect Neighbor', content: 'The most dangerous people do not look like villains. They look like the most reliable person you know.' },
            { type: 'explain', title: 'Mimicry as Survival', content: 'High-level manipulators spend years studying the "Normal Baseline". They learn to simulate warmth, concern, and humility so perfectly that it becomes their primary defense.' },
            { type: 'explain', title: 'The Glitch', content: 'The mask only slips during sudden, high-stress pivots. Watch for the "Micro-Sneer" or the "Cold Eyes" when they think no one is looking. The mask is a performance; performances have gaps.' },
            { type: 'realworld', title: 'Application', content: 'Don\'t trust a person based on their "vibe". Trust them based on their consistent actions over time. The "Mask" is easy to wear for an hour, but hard to wear for a year.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do high-level manipulators typically present themselves?', options: [{text: 'As aggressive and obvious threats.', isCorrect: false}, {text: 'As charming, helpful, and "perfectly normal" individuals.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l4_iq', domain: 'iq', emoji: '🧠', title: 'Second-Order Thinking', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Beyond the Immediate', content: 'First-order thinking is: "If I do X, Y happens." Second-order thinking is: "And then what?"' },
            { type: 'explain', title: 'The Cascade Effect', content: 'Every action has a ripple. Solving a problem in the short term (1st order) often creates a much bigger problem in the long term (2nd order). The Stoic always traces the ripple to the end.' },
            { type: 'explain', title: 'The Chessboard Mind', content: 'Amateurs play the move. Masters play the sequence. Before any significant action, ask "And then what?" five times. If the 5th ripple is negative, the 1st action is a failure.' },
            { type: 'realworld', title: 'Application', content: 'Identify a solution you are proposing at work. Trace the 2nd and 3rd order consequences. Who will be upset? What system will break? How will you mitigate it?' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the key question of Second-Order Thinking?', options: [{text: '"And then what?"', isCorrect: true}, {text: '"Why me?"', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l5_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Discipline of Assent', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Filtering Perception', content: 'An impression is just a data point. "Assent" is when you choose to believe that data point is true.' },
            { type: 'explain', title: 'The Gap', content: 'Between the impression (seeing a rude face) and the reaction (feeling angry) is a gap. The Stoic lives in that gap. You do not have to "assent" to the idea that the face is an insult.' },
            { type: 'explain', title: 'Categorization', content: 'When an impression arrives, categorize it immediately: "Fact" or "Judgment". If it\'s a judgment, refuse your assent. It loses all power over you.' },
            { type: 'realworld', title: 'Application', content: 'Practice "Delayed Assent". When someone gives you bad news, wait 10 seconds before deciding if it is actually "bad". Use the gap.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Discipline of Assent"?', options: [{text: 'Agreeing with everyone to avoid conflict.', isCorrect: false}, {text: 'The practice of carefully evaluating our impressions before choosing to believe or react to them.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l6_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Anchor" Effect', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Setting the Baseline', content: 'The first piece of information offered in a negotiation sets the "Anchor" around which all subsequent talk revolves.' },
            { type: 'explain', title: 'The Power of the First Move', content: 'Even if the anchor is ridiculous, it pulls the other person\'s brain toward it. If you ask for $1M, and they wanted to pay $10k, they will likely offer $100k just because of the anchor.' },
            { type: 'explain', title: 'Breaking the Anchor', content: 'If someone anchors you first, do not counter-offer immediately. Shatter the anchor. Say: "That is so far off that I can\'t even use it as a starting point." Force them to reset.' },
            { type: 'realworld', title: 'Application', content: 'In your next salary negotiation, be the first to mention a number. Make it high, but semi-defensible. You have just defined the geography of the deal.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is the "Anchor" so effective?', options: [{text: 'Because the human brain relies too heavily on the first piece of information it receives.', isCorrect: true}, {text: 'Because it shows you are confident.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l7_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Pregnant Pause', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Silence as Authority', content: 'The person who is most comfortable with silence is the person with the most power in the room.' },
            { type: 'explain', title: 'The Interrogation Silence', content: 'After a target answers a question, wait. Don\'t speak. Maintain eye contact. 80% of people will keep talking to fill the void, often revealing more than they intended.' },
            { type: 'explain', title: 'The Status Signal', content: 'High-status individuals speak slowly and use pauses. Low-status individuals rush their speech because they are afraid of being interrupted. Use the pause to reclaim the room.' },
            { type: 'realworld', title: 'Application', content: 'Next time someone asks you a question, wait 3 full seconds before you start your answer. It makes your response seem significantly more considered and powerful.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary psychological effect of a long pause in conversation?', options: [{text: 'It makes the other person feel a desperate need to fill the silence with more information.', isCorrect: true}, {text: 'It makes you look like you forgot what to say.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l8_criminal', domain: 'criminal', emoji: '🔍', title: 'The Victim\'s Script', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Predatory Selection', content: 'Predators select victims based on non-verbal cues of submissiveness and vulnerability.' },
            { type: 'explain', title: 'The Gait Study', content: 'Research shows that predators can identify "easy targets" just by the way they walk. Short strides, looking at the ground, and lack of peripheral awareness are the "Victim\'s Script".' },
            { type: 'explain', title: 'Rewriting the Script', content: 'Project "Target Hardening". Broaden your stance, look at the horizon, move with purpose, and maintain a 360-degree awareness. You aren\'t just being safe; you are communicating "Not Worth the Effort".' },
            { type: 'realworld', title: 'Application', content: 'Observe people in a crowded area. Identify who looks like a "target" based only on their body language. Now, ensure you are doing the opposite.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do predators typically select their victims?', options: [{text: 'Through random chance.', isCorrect: false}, {text: 'By observing subconscious cues of vulnerability and lack of awareness.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l9_mindset', domain: 'mindset', emoji: '🧊', title: 'The Deadened Heart', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Stoic Indifference', content: 'To be truly free, you must become indifferent to the things that are indifferent to you.' },
            { type: 'explain', title: 'Preferred Indifferents', content: 'Wealth, health, and beauty are "Preferred". It is okay to have them. But they are still "Indifferents"—they do not define your character. If they are gone tomorrow, the Stoic is unchanged.' },
            { type: 'explain', title: 'The Anchor of Identity', content: 'If your identity is tied to your bank account, you are fragile. If it is tied to your internal "Code", you are unbreakable. The world can take the bank account; it cannot take the Code.' },
            { type: 'realworld', title: 'Application', content: 'Identify one luxury you "need". Spend 24 hours without it. Prove to yourself that your happiness is not dependent on it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Preferred Indifferent" in Stoicism?', options: [{text: 'Something that is good to have but not essential for a virtuous life.', isCorrect: true}, {text: 'A person you pretend to like.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l10_eq', domain: 'eq', emoji: '👁', title: 'The "I" Filter', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Ego in Speech', content: 'The frequency with which a person uses the word "I" or "Me" is a direct map of their narcissism or their insecurity.' },
            { type: 'explain', title: 'High "I" Usage', content: 'Signals a narrow perspective, high self-focus, and often a desperate need for validation. It makes the speaker predictable.' },
            { type: 'explain', title: 'The Observer\'s Shield', content: 'The Architect uses "We" or "The Situation". By removing the "I", you remove your ego from the interaction. You become harder to target because there is no visible "self" to attack.' },
            { type: 'realworld', title: 'Application', content: 'Try to go a whole hour without using the words "I", "Me", or "Mine". Observe how much harder it is to express opinions when you can\'t attach them to your ego.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why does the Architect minimize "I" usage?', options: [{text: 'To hide their identity.', isCorrect: false}, {text: 'To remove their ego from the interaction, making them less vulnerable to personal attacks.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l11_iq', domain: 'iq', emoji: '🧠', title: 'The Lindy Effect', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Survival of Time', content: 'For non-perishable things like ideas, books, or technologies, their future life expectancy is proportional to their current age.' },
            { type: 'explain', title: 'Old is Gold', content: 'If a book has been in print for 50 years, it will likely be in print for 50 more. If it\'s been out for 2 weeks, it will likely be gone in 2 weeks. Time is the ultimate filter for quality.' },
            { type: 'explain', title: 'Building the Foundation', content: 'The Architect does not chase trends. We study the things that have survived for 2,000 years (Stoicism, Machiavelli, Logic). These are the "Lindy" ideas.' },
            { type: 'realworld', title: 'Application', content: 'Look at your reading list. If it\'s 100% books from the last 5 years, you are a victim of the present. Add one book that is at least 100 years old.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does the Lindy Effect predict?', options: [{text: 'That the longer an idea has survived, the longer it is likely to continue surviving.', isCorrect: true}, {text: 'That all technology becomes obsolete in 10 years.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l12_philosophy', domain: 'philosophy', emoji: '⚡', title: 'Memento Mori', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Remember You Must Die', content: 'The most powerful Stoic tool for prioritizing the present moment.' },
            { type: 'explain', title: 'The Final Filter', content: 'In the face of death, all petty grievances, social anxieties, and vanity disappear. Ask: "Would I care about this if I knew I were dying tomorrow?" If no, don\'t care about it now.' },
            { type: 'explain', title: 'Urgency of Action', content: 'Death is not a future event; it is happening right now. We are dying every second that passes. Use this urgency to ruthlessly execute your architecture. There is no time for hesitation.' },
            { type: 'realworld', title: 'Application', content: 'Keep a small coin or a reminder on your desk that says "Memento Mori". Every time you see it, drop one useless worry.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the psychological benefit of "Memento Mori"?', options: [{text: 'It provides a sense of proportion and urgency, stripping away petty concerns.', isCorrect: true}, {text: 'It makes life feel meaningless.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l13_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Contrast" Principle', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Relative Perception', content: 'We do not perceive things in isolation. We perceive them in contrast to what came before.' },
            { type: 'explain', title: 'The Real Estate Tactic', content: 'Show a buyer two "dump" houses at an inflated price first. Then show them the "okay" house at the same price. The okay house will look like a palace and a bargain in contrast.' },
            { type: 'explain', title: 'Weaponized Bad News', content: 'If you have to deliver a $10k loss, first tell them the loss might be $100k. When you "find out" it\'s only $10k, they will be relieved instead of angry.' },
            { type: 'realworld', title: 'Application', content: 'In a proposal, always include a "Premium" option that is intentionally overpriced. It makes your "Standard" option look like a smart, mid-range choice.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Contrast Principle affect judgment?', options: [{text: 'It makes us judge things based on their absolute value.', isCorrect: false}, {text: 'It makes us judge things based on the difference between them and the previous experience.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l14_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The "But" Eraser', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Word Choice as a Scalpel', content: 'The word "But" is a psychological eraser. Everything said before it is dismissed by the listener\'s brain.' },
            { type: 'explain', title: 'The Erasure', content: '"I love your work, BUT we need to change X." The listener only hears "We need to change X." The praise is gone.' },
            { type: 'explain', title: 'The "And" Pivot', content: 'Replace "But" with "And". "I love your work, AND I think we can make it even better by changing X." Now the praise is a foundation, not a lie. Compliance increases by 40%.' },
            { type: 'realworld', title: 'Application', content: 'Listen to yourself. Every time you are about to say "But", pause and replace it with "And". Watch how people stop getting defensive around you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why should you avoid the word "But" when giving feedback?', options: [{text: 'Because it is grammatically incorrect.', isCorrect: false}, {text: 'Because it subconsciously erases any positive statement that came before it.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l16_mindset', domain: 'mindset', emoji: '🧊', title: 'The Discipline of Desire', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Managing the Will', content: 'Stoicism teaches that we must train ourselves to desire only what is within our control.' },
            { type: 'explain', title: 'The Trap of External Desire', content: 'If you desire a promotion, a specific person, or a certain amount of money, you have handed your happiness to the universe. You are now a gambler, not a Stoic.' },
            { type: 'explain', title: 'Desired Outcomes vs. Desired Actions', content: 'Do not desire "To win the race". Desire "To run with 100% of my capability". The first is up to luck and competitors; the second is entirely up to you. You can never "fail" at the second.' },
            { type: 'realworld', title: 'Application', content: 'Look at your goals for the month. Rephrase each one from an "Outcome goal" to an "Action goal". Feel the immediate reduction in anxiety.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it dangerous to desire things outside of your control?', options: [{text: 'It makes you dependent on luck and external factors for your happiness.', isCorrect: true}, {text: 'It makes you work too hard.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l17_criminal', domain: 'criminal', emoji: '🔍', title: 'The Piquerism Profile', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Lust for Pain', content: 'Piquerism is a specific paraphilia where sexual gratification is derived from penetrating the skin of another person with sharp objects.' },
            { type: 'explain', title: 'The Psychological Root', content: 'This is often a "Signature" of extreme power-seeking and sadistic pathology. It is common in serial offenders like Albert Fish or Jack the Ripper.' },
            { type: 'explain', title: 'The Escalation', content: 'It usually begins with small acts of piercing or cutting and escalates as the offender needs a higher "dose" of the sensation of control.' },
            { type: 'realworld', title: 'Application', content: 'Understand the "Escalation Curve". Any person who shows a small, repetitive need for control or causing minor distress will likely escalate if the behavior is not checked.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is "Piquerism"?', options: [{text: 'A need to steal shiny objects.', isCorrect: false}, {text: 'A paraphilia involving the derivement of pleasure from piercing or cutting a victim.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l18_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The "Because" Trigger', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Compliance Shortcut', content: 'The human brain is a pattern-matching machine. The word "Because" triggers an automatic "Compliance Script".' },
            { type: 'explain', title: 'The Copy Machine Study', content: 'A researcher found that saying "Can I use the copier?" got 60% compliance. Saying "Can I use the copier BECAUSE I have to make copies?" got 93% compliance. The reason didn\'t even have to make sense.' },
            { type: 'explain', title: 'The Logical Anchor', content: 'When you give a reason (even a trivial one), the brain stops evaluating the request and starts accepting it. Always provide a "Because".' },
            { type: 'realworld', title: 'Application', content: 'Next time you ask for a favor, always add "because [reason]". Watch how much faster people agree without questioning the logic of the reason.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why does the word "Because" increase compliance?', options: [{text: 'It triggers an automatic mental shortcut where the brain assumes the request is justified.', isCorrect: true}, {text: 'It shows you are being honest.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l19_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Flinch" Technique', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Reaction as a Negotiation Tool', content: 'A physical or verbal "Flinch" is a powerful way to signal that the other person\'s offer is unacceptable.' },
            { type: 'explain', title: 'The Mechanism', content: 'When they name a price or a term, physically recoil. Wince. Act as if you\'ve been slapped. This is a non-verbal "Counter-Anchor".' },
            { type: 'explain', title: 'Subconscious Doubt', content: 'If you respond calmly, they think their price is fair. If you "Flinch", they immediately start thinking: "Oh, I must have asked for too much." They will often start negotiating against themselves before you even speak.' },
            { type: 'realworld', title: 'Application', content: 'Practice your "Flinch" in low-stakes settings (like a flea market). Observe how quickly the seller drops the price just to stop your "pain".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of the "Flinch" in a negotiation?', options: [{text: 'To show that you are emotionally unstable.', isCorrect: false}, {text: 'To subconsciously signal that the other person\'s offer is far beyond your range, causing them to doubt it.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l20_iq', domain: 'iq', emoji: '🧠', title: 'The Base Rate Fallacy', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Ignoring the Statistics', content: 'We tend to focus on specific, vivid information and ignore the "Base Rate"—the actual statistical probability of something occurring.' },
            { type: 'explain', title: 'The Medical Example', content: 'If a test for a rare disease is 99% accurate, and you test positive, you likely assume you have it. But if only 1 in 10,000 people have the disease, the "Base Rate" means you still likely don\'t have it. The test is more likely to be a false positive.' },
            { type: 'explain', title: 'Operational Logic', content: 'The Architect always asks: "What is the base rate of success for this type of venture?" regardless of how "perfect" the specific opportunity looks.' },
            { type: 'realworld', title: 'Application', content: 'Before following a "hot tip" or a "sure thing", look up the general failure rate of that activity. That is your actual probability of success.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Base Rate"?', options: [{text: 'The fundamental probability of an event happening in the general population.', isCorrect: true}, {text: 'The minimum interest rate of a bank.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l21_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Inner Discourse', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Talking to Yourself', content: 'The quality of your life depends on the quality of your internal dialogue.' },
            { type: 'explain', title: 'Self-Correction', content: 'When you feel a negative emotion, talk to it. "Why are you here? Is this helpful? Is this true?" Treat your emotions like a confused child that needs logical guidance, not as absolute commands.' },
            { type: 'explain', title: 'The Third Person', content: 'Talking to yourself in the third person ("Why is [Your Name] feeling this way?") provides immediate psychological distance and allows for more objective analysis.' },
            { type: 'realworld', title: 'Application', content: 'Next time you are stressed, write a one-paragraph analysis of your situation using only your name and "He/She". Watch the panic turn into a problem-solving exercise.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is third-person self-talk effective?', options: [{text: 'It provides psychological distance and allows for more objective thinking.', isCorrect: true}, {text: 'It makes you sound more important.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l22_eq', domain: 'eq', emoji: '👁', title: 'The "Ventral" Reveal', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Trust in Exposure', content: 'We subconsciously hide our "Ventral" side (chest, neck, stomach) when we feel threatened or untrusting.' },
            { type: 'explain', title: 'Opening the Cage', content: 'When someone trusts you, they will uncross their arms, tilt their head (exposing the neck), and face you directly. This is a sign of total "Ventral Exposure".' },
            { type: 'explain', title: 'Force-Multiplying Trust', content: 'To make someone trust you, consciously expose your own ventral side. Lean back, open your arms, and expose your palms. Their mirror neurons will see the lack of threat and lower their own guard.' },
            { type: 'realworld', title: 'Application', content: 'In your next meeting, check your own body. Are you "Closed"? Consciously "Open" up and watch the energy of the room shift toward cooperation.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does "Ventral Exposure" signal in body language?', options: [{text: 'Trust, comfort, and an absence of perceived threat.', isCorrect: true}, {text: 'Deception and hidden agendas.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l23_mindset', domain: 'mindset', emoji: '🧊', title: 'The Stoic Joy', duration: '7 min',
        slides: [
            { type: 'intro', title: 'True Happiness', content: 'Stoic joy ("Gaudium") is not a fleeting emotion. it is a deep, internal state of satisfaction with one\'s own character.' },
            { type: 'explain', title: 'The Source', content: 'External joy is fragile. It comes from winning, from money, from praise. Stoic joy is unbreakable because it comes from knowing you acted with logic and virtue, regardless of the outcome.' },
            { type: 'explain', title: 'The Unshakable Calm', content: 'When you are satisfied with your own actions, the chaos of the world cannot touch you. You are like a rock in the ocean; the waves crash against you, but you remain unmoved.' },
            { type: 'realworld', title: 'Application', content: 'At the end of the day, review only your *actions*. Did you act with integrity? Did you control your emotions? If yes, experience that joy. Ignore the results for now.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does "Stoic Joy" differ from regular happiness?', options: [{text: 'It is based on internal character and actions, rather than external circumstances.', isCorrect: true}, {text: 'It is a more intense version of excitement.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l24_criminal', domain: 'criminal', emoji: '🔍', title: 'The "Mask" Slips (Advanced)', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Deconstructing the Performance', content: 'No one can maintain a perfect "Mask of Sanity" forever. The gaps are where the truth lives.' },
            { type: 'explain', title: 'The "Duper\'s Delight"', content: 'Watch for a subtle, inappropriate smile that flashes across a manipulator\'s face when they believe they have successfully tricked you. It is the leak of their internal "God Complex".' },
            { type: 'explain', title: 'The Lack of Range', content: 'Manipulators often have "Flat Affect" during truly emotional events. They will *tell* you they are sad, but their eyes will remain analytical and dry. They are reading the script, not feeling the scene.' },
            { type: 'realworld', title: 'Application', content: 'When someone tells you a tragic or exciting story, look for "Micro-Congruence". Does their body language match the emotion they are describing? If not, the story is a construction.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is "Duper\'s Delight"?', options: [{text: 'A genuine smile of shared happiness.', isCorrect: false}, {text: 'An involuntary flash of pleasure on a liar\'s face when they think they\'ve fooled someone.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's4_l25_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Power of the Collective "We"', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Involuntary Inclusion', content: 'Using "We" and "Us" creates a subconscious "Tribe" that includes the listener, making it harder for them to disagree.' },
            { type: 'explain', title: 'The Shift', content: 'Instead of saying "You need to do this," say "We need to solve this." You have moved from a confrontation to a partnership. They are now working *with* you, not for you.' },
            { type: 'explain', title: 'Shared Responsibility', content: '"We" shares the burden of failure and the glory of success. It lowers the target\'s defenses and makes them feel like part of an elite team.' },
            { type: 'realworld', title: 'Application', content: 'In your next email or meeting, replace 80% of your "I" and "You" statements with "We". Watch the level of cooperation increase instantly.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is the word "We" so effective in leadership?', options: [{text: 'It creates a sense of shared tribal identity and cooperation, reducing individual resistance.', isCorrect: true}, {text: 'It makes the leader look humble.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l26_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Puppet Master" Frame', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Invisible Influence', content: 'The most effective manipulation is the one where the target believes they came up with the idea themselves.' },
            { type: 'explain', title: 'The "Inception" Technique', content: 'Don\'t give a command. Give a piece of "raw data" that leads to only one logical conclusion. Let the target "discover" that conclusion. They will defend it with their life because they believe it is *theirs*.' },
            { type: 'explain', title: 'Leading Questions', content: '"I was looking at the data, and it seems X is happening. If X is true, wouldn\'t that mean we have to do Y?" "Yes," they say. You haven\'t told them to do Y; they have told themselves.' },
            { type: 'realworld', title: 'Application', content: 'Identify something you want your team or boss to do. Instead of asking, present the "problem" in a way that makes your solution the only logical "discovery" for them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it better to let a target "discover" your idea?', options: [{text: 'Because they will be more committed to it, as they feel a sense of ownership over the conclusion.', isCorrect: true}, {text: 'Because it saves you time.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l27_iq', domain: 'iq', emoji: '🧠', title: 'The Sunk Cost Fallacy', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Throwing Good Money After Bad', content: 'The human tendency to continue an endeavor once an investment in money, effort, or time has been made.' },
            { type: 'explain', title: 'The Trap', content: 'Your brain says: "I can\'t quit now, I\'ve already spent $10k/2 years on this!" The Stoic says: "That $10k/2 years is gone regardless. The only question is: Is this the best use of my NEXT dollar/hour?"' },
            { type: 'explain', title: 'The Clean Slate', content: 'Every morning, the Architect should view their projects with zero attachment to previous investment. If you wouldn\'t start the project today with what you know now, kill it immediately.' },
            { type: 'realworld', title: 'Application', content: 'Identify a "Zombie Project" in your life—something you are only doing because you\'ve already started it. Kill it today. Reclaim your future resources.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you overcome the Sunk Cost Fallacy?', options: [{text: 'By only considering the future costs and benefits, ignoring what has already been spent.', isCorrect: true}, {text: 'By working harder to make the investment pay off.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l28_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Amor Fati (Advanced)', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Loving the Flame', content: 'Not just accepting your fate, but loving it. Every crisis is an essential ingredient in your architecture.' },
            { type: 'explain', title: 'The Fire Analogy', content: 'A small candle is blown out by the wind. A great fire uses the wind to grow larger. Be the fire. Every obstacle, every betrayal, every failure is oxygen for your growth.' },
            { type: 'explain', title: 'Total Responsibility', content: 'When you love your fate, you stop blaming others. Everything that happens to you is "Good" because it provides the raw material for your transformation into the Architect.' },
            { type: 'realworld', title: 'Application', content: 'Think of the worst thing that happened to you this year. Find 3 ways it actually made you stronger or smarter. Genuinely thank the universe for the lesson.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core of "Amor Fati"?', options: [{text: 'Total, joyful acceptance and love of everything that happens in your life.', isCorrect: true}, {text: 'Fear of the future.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l29_eq', domain: 'eq', emoji: '👁', title: 'The "Comfort" Baseline', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Profiling through Normalcy', content: 'You cannot spot a lie or a threat if you don\'t know what "Normal" looks like for that specific person.' },
            { type: 'explain', title: 'The 3-Minute Rule', content: 'Spend the first 3 minutes of any interaction asking harmless, easy questions. Observe their "Comfort Baseline": How often do they blink? Where are their hands? What is their vocal pitch?' },
            { type: 'explain', title: 'Spotting the "Deviation"', content: 'When you move to the "Critical Questions", watch for any change from that baseline. A sudden freeze, a blink spike, or a pitch shift is the signal of "Stress". The stress is the trail to the truth.' },
            { type: 'realworld', title: 'Application', content: 'Always start meetings with "The Weather/The Weekend" talk. It\'s not politeness; it\'s data-gathering. Build the baseline before you launch the probe.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it important to "Baseline" someone?', options: [{text: 'To establish a standard of normal behavior so that you can accurately spot deviations caused by stress or deception.', isCorrect: true}, {text: 'To be friendly.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's4_l30_mindset', domain: 'mindset', emoji: '🧊', title: 'The Final Exam: Stage 4', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Birth of the Stoic', content: 'You have completed Stage 4. You are no longer a victim of your emotions or the environment.' },
            { type: 'explain', title: 'The Fortress is Built', content: 'You have the Armor of Patience, the Discipline of Assent, and the Perspective of the Cosmic Observer. You are now ready for Stage 5—The Dexter Level.' },
            { type: 'explain', title: 'The Path Forward', content: 'Stage 5 moves from internal mastery to external execution. We will study the mechanics of the hunt, covering tracks, and the Code. The Stoic becomes the Predator.' },
            { type: 'realworld', title: 'Application', content: 'Spend the next week living 100% by your "Internal Code". Do not seek praise. Do not avoid blame. Act as if you are the only judge of your own character. Welcome to the Apex.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What is the goal of Stage 4 mastery?', options: [{text: 'To become emotionally unbreakable and indifferent to external circumstances.', isCorrect: true}, {text: 'To learn how to hide from others.', isCorrect: false}] }
            ]}
        ]
    }
];

window.STAGE4_LESSONS = STAGE4_LESSONS;
