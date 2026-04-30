const STAGE3_LESSONS = [
    {
        id: 's3_l1_criminal', domain: 'criminal', emoji: '🔍', title: 'Geographic Profiling', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Hunting Ground', content: 'Stage 3: The Observer. We begin with Geographic Profiling—the study of where crimes occur to determine where the offender lives.' },
            { type: 'explain', title: 'Distance Decay', content: 'Most offenders commit crimes close to home, in their "Comfort Zone". As the distance from home increases, the frequency of crime decreases. This is the principle of least effort.' },
            { type: 'explain', title: 'The Buffer Zone', content: 'Offenders rarely commit crimes in their immediate neighborhood to avoid being recognized. This empty space around their home is the "Buffer Zone".' },
            { type: 'explain', title: 'Marauders vs Commuters', content: 'Marauders hunt in a circle around their home. Commuters travel to a specific area outside their home base to hunt. Identifying the pattern narrows the search radius by 70%.' },
            { type: 'realworld', title: 'Application', content: 'Map your own "Movement Baseline". Where do you spend 90% of your time? These are your hunting grounds. If you want to remain invisible, you must consciously break these geographic patterns.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Buffer Zone" in geographic profiling?', options: [{text: 'An area where the offender feels safe to kill.', isCorrect: false}, {text: 'The area immediately surrounding an offender\'s home where they avoid committing crimes.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l2_eq', domain: 'eq', emoji: '👁', title: 'Pupillometry', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Windows to the System', content: 'The pupils are controlled by the autonomic nervous system. They cannot be consciously manipulated.' },
            { type: 'explain', title: 'Dilation and Arousal', content: 'Pupils dilate (get larger) when a person is interested, attracted, or experiencing high cognitive load (lying). They constrict (get smaller) when bored, angry, or disgusted.' },
            { type: 'explain', title: 'The Baseline', content: 'Always baseline a person\'s pupils in the current lighting. Sudden dilation during a specific topic indicates an "Emotional Spike"—the brain is working harder or feeling more.' },
            { type: 'realworld', title: 'Application', content: 'In your next negotiation, watch the other person\'s pupils when you mention the price. A sudden dilation means they are internally reacting, regardless of their calm expression.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why are pupils a reliable indicator of internal state?', options: [{text: 'Because they are controlled by the autonomic nervous system and cannot be faked.', isCorrect: true}, {text: 'Because people like to stare when they are happy.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l3_mindset', domain: 'mindset', emoji: '🧊', title: 'The Stoic Citadel', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Fortress of Mind', content: 'Marcus Aurelius taught that while we cannot control external events, we have absolute control over our perception of them.' },
            { type: 'explain', title: 'The Objective View', content: 'When something "bad" happens, strip it of its labels. "My car is stolen" is the objective truth. "This is a disaster" is a subjective label you are choosing to apply.' },
            { type: 'explain', title: 'Amor Fati', content: 'Love your fate. Not just tolerate it, but embrace it. Every obstacle is fuel for your growth. The Architect views a crisis as a rare data-gathering opportunity.' },
            { type: 'realworld', title: 'Application', content: 'Next time you face a minor annoyance (traffic, a rude comment), say to yourself: "This is exactly what I needed to test my composure." Transform the annoyance into a training exercise.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core Stoic principle regarding external events?', options: [{text: 'We should try to control everything around us.', isCorrect: false}, {text: 'We cannot control events, only our judgment and reaction to them.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l4_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Ben Franklin" Effect', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Cognitive Consistency', content: 'We do not help people because we like them; we like people because we have helped them.' },
            { type: 'explain', title: 'The Inversion', content: 'If you want someone to like you, don\'t do them a favor. Ask THEM for a small, easy favor. "Could I borrow that book?" or "What do you recommend for lunch?"' },
            { type: 'explain', title: 'Resolving the Dissonance', content: 'Their brain thinks: "I am helping this person. I only help people I like. Therefore, I must like this person." It is a subconscious bypass of their defenses.' },
            { type: 'realworld', title: 'Application', content: 'Ask a difficult boss or colleague for a tiny piece of advice on a topic they are an expert in. Watch their hostility melt into a protective, mentoring attitude.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you trigger the Ben Franklin Effect?', options: [{text: 'By asking someone for a small favor.', isCorrect: true}, {text: 'By doing a large favor for someone.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l5_iq', domain: 'iq', emoji: '🧠', title: 'Occam\'s Razor', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Law of Parsimony', content: 'When faced with competing hypotheses, the simplest explanation is usually the correct one.' },
            { type: 'explain', title: 'Removing Complexity', content: 'Conspiracy theories fail Occam\'s Razor because they require too many people to keep a secret perfectly. Reality is usually more mundane.' },
            { type: 'explain', title: 'Operational Efficiency', content: 'The Architect uses Occam\'s Razor to cut through noise. If a subordinate is late, don\'t imagine a complex plot; assume they have poor time management.' },
            { type: 'realworld', title: 'Application', content: 'When a situation seems confusingly complex, ask: "What is the simplest, most boring explanation for this?" 90% of the time, that is your answer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does Occam\'s Razor suggest?', options: [{text: 'The most complex solution is the most thorough.', isCorrect: false}, {text: 'The explanation with the fewest assumptions is most likely correct.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l6_criminal', domain: 'criminal', emoji: '🔍', title: 'The Triad of Evil', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The MacDonald Triad', content: 'A set of three behavioral characteristics associated with later violent sociopathic behavior.' },
            { type: 'term', title: 'The Indicators', content: '1. Enuresis (persistent bed-wetting past age 5). 2. Fire-setting (pyromania). 3. Animal cruelty (killing or torturing small animals).' },
            { type: 'explain', title: 'The Connection', content: 'These aren\'t causes; they are early symptoms of a lack of empathy and a need for control. While controversial in modern research, they remain a foundational concept in classic profiling.' },
            { type: 'realworld', title: 'Application', content: 'When assessing a person\'s childhood background, look for patterns of early power-seeking through destruction or cruelty. These baselines rarely disappear; they just evolve.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which of these is NOT part of the classic MacDonald Triad?', options: [{text: 'Animal cruelty', isCorrect: false}, {text: 'Extreme shyness', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l7_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Pre-Mortem', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Visualizing Failure', content: 'Stoicism teaches "Premeditatio Malorum"—the premeditation of evils.' },
            { type: 'explain', title: 'The Technique', content: 'Before starting a project, assume it has already failed catastrophically. Now, work backward: what caused it? This bypasses the optimism bias of the brain.' },
            { type: 'explain', title: 'Building the Immune System', content: 'By identifying the 10 ways your plan will fail before you start, you can build defenses against them. You are no longer surprised by disaster; you are prepared for it.' },
            { type: 'realworld', title: 'Application', content: 'Spend 10 minutes tonight imagining your most important goal failing. List the 3 most likely reasons why. Fix those 3 things tomorrow.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of a Pre-Mortem?', options: [{text: 'To identify potential failure points before they happen so they can be prevented.', isCorrect: true}, {text: 'To discourage yourself from taking risks.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l8_eq', domain: 'eq', emoji: '👁', title: 'The Blink Rate', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Stress in the Eyes', content: 'The average human blinks 15-20 times per minute. Significant changes in this rate indicate shifting emotional states.' },
            { type: 'explain', title: 'The Stress Spike', content: 'When a person is under pressure or lying, their blink rate typically spikes. Their brain is processing rapidly, and the eyes reflect the internal "friction".' },
            { type: 'explain', title: 'The Stare', content: 'Conversely, a sudden *decrease* in blink rate indicates intense focus, aggression, or a "Predatory Gaze". They are no longer blinking because they don\'t want to miss a second of your reaction.' },
            { type: 'realworld', title: 'Application', content: 'Count the blinks of a person during casual conversation. Then, ask a direct, challenging question. Watch for the sudden flutter or the frozen stare.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does a sudden spike in blink rate usually indicate?', options: [{text: 'Relaxation and comfort.', isCorrect: false}, {text: 'Increased psychological stress or cognitive load.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l9_mindset', domain: 'mindset', emoji: '🧊', title: 'Voluntary Hardship', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Anti-Fragility', content: 'Stoicism is not just a philosophy; it is a physical practice. You must periodically practice being poor and uncomfortable.' },
            { type: 'explain', title: 'The Exercise', content: 'Spend a weekend eating only basic food, sleeping on the floor, or taking only cold showers. Ask yourself: "Is this what I feared?"' },
            { type: 'explain', title: 'The Benefit', content: 'When you prove that you can survive and be happy with nothing, you become immune to the threats of others. You cannot be manipulated by the fear of loss if you have mastered loss itself.' },
            { type: 'realworld', title: 'Application', content: 'Commit to one "Hardship Day" a month. No luxuries, no distractions. Remind your brain who is the master.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why do Stoics practice voluntary hardship?', options: [{text: 'To desensitize themselves to the fear of loss and build mental resilience.', isCorrect: true}, {text: 'To save money.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l10_criminal', domain: 'criminal', emoji: '🔍', title: 'The Modus Operandi (M.O.)', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Method', content: 'The M.O. is the functional part of a crime—the actions necessary to complete the act and escape.' },
            { type: 'explain', title: 'The Dynamic Nature', content: 'The M.O. evolves. As an offender gains experience, their M.O. becomes more efficient and sophisticated. They learn from their mistakes.' },
            { type: 'explain', title: 'M.O. vs Signature', content: 'M.O. is what is needed to do the job. Signature is what the offender does to satisfy their psychological needs. M.O. changes; Signature remains constant.' },
            { type: 'realworld', title: 'Application', content: 'Analyze your "Work M.O.". How do you approach a new project? Is it efficient? How has it evolved over the last year? If it hasn\'t evolved, you are stagnant.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Does an offender\'s Modus Operandi typically stay the same throughout their life?', options: [{text: 'Yes, it is their identity.', isCorrect: false}, {text: 'No, it evolves as they learn and gain experience.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l11_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Rule of Three', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Cognitive Rhythm', content: 'The human brain is optimized to recognize patterns of three. Two is a couple; three is a sequence.' },
            { type: 'explain', title: 'Structure in Persuasion', content: 'Group your points into threes. "Better, Faster, Stronger." "Blood, Sweat, and Tears." It feels complete, satisfying, and authoritative to the listener.' },
            { type: 'explain', title: 'The Power of the Third', content: 'The first two points build the pattern; the third point delivers the impact. Use this rhythm to anchor your most important idea at the end of a trio.' },
            { type: 'realworld', title: 'Application', content: 'In your next presentation or email, list exactly three benefits or three steps. Avoid two (incomplete) or four (overwhelming).' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is the number three powerful in speech?', options: [{text: 'It is the smallest number needed to create a pattern in the human brain.', isCorrect: true}, {text: 'It is a lucky number in most cultures.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l12_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Red Herring', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Diversion', content: 'A Red Herring is a logical fallacy where irrelevant information is introduced to distract from the main issue.' },
            { type: 'explain', title: 'The Mechanism', content: 'When backed into a corner in an argument, launch a passionate attack on a side-issue that is tangentially related but ultimately irrelevant. The audience will follow the noise.' },
            { type: 'explain', title: 'The Emotional Pivot', content: 'The best Red Herrings are highly emotional. "How can you ask about the budget when children are suffering elsewhere?" You haven\'t answered the budget question, but you\'ve shifted the moral ground.' },
            { type: 'realworld', title: 'Application', content: 'Spot when others use this on you. When they pivot, say: "That is an important topic, but it doesn\'t change the fact that we need to discuss X." Bring the focus back.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Red Herring"?', options: [{text: 'A very effective piece of evidence.', isCorrect: false}, {text: 'A distraction used to lead an argument away from the core issue.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l13_iq', domain: 'iq', emoji: '🧠', title: 'First Principles Thinking', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Deconstructing Reality', content: 'Most people think by analogy—doing what everyone else does. The Architect thinks by First Principles.' },
            { type: 'explain', title: 'The Process', content: 'Boil a problem down to its fundamental truths—the "physics" of the situation. Then, rebuild your solution from scratch without using any assumptions.' },
            { type: 'explain', title: 'The Elon Musk Example', content: 'Instead of buying a rocket for $65M, Musk calculated the cost of the raw materials (aluminum, titanium, fuel) and realized it was only 2% of the price. He built the rocket himself. That is First Principles.' },
            { type: 'realworld', title: 'Application', content: 'Identify a "rule" in your industry. Ask: "Is this a law of physics, or just a convention people agreed on?" If it\'s a convention, you can break it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is "First Principles Thinking"?', options: [{text: 'Breaking a problem down to its fundamental truths and building up from there.', isCorrect: true}, {text: 'Following the most popular expert advice.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l14_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The View from Above', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Cosmic Perspective', content: 'A Stoic meditation designed to shrink your problems to their actual size.' },
            { type: 'explain', title: 'The Zoom Out', content: 'Imagine yourself from the ceiling. Then from the clouds. Then from the moon. See the millions of people, the thousands of years of history. Your current "catastrophe" is a microscopic speck in the timeline of the universe.' },
            { type: 'explain', title: 'The Emotional Release', content: 'This isn\'t about nihilism; it\'s about proportion. When you see your problems from a cosmic height, you gain the calm needed to solve them effectively.' },
            { type: 'realworld', title: 'Application', content: 'When you feel overwhelmed, close your eyes and perform the "Zoom Out" for 2 minutes. Return to the room with the perspective of an immortal observer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the purpose of the "View from Above"?', options: [{text: 'To gain perspective and realize that most of our worries are insignificant in the grand scheme of things.', isCorrect: true}, {text: 'To feel superior to others.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l16_mindset', domain: 'mindset', emoji: '🧊', title: 'The Dichotomy of Control', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Foundation of Peace', content: 'Epictetus stated that some things are up to us and some things are not. Happiness lies in knowing the difference.' },
            { type: 'explain', title: 'Up to Us', content: 'Our opinions, our intentions, our desires, and our own actions. These are the ONLY things we should concern ourselves with.' },
            { type: 'explain', title: 'Not Up to Us', content: 'Our bodies, our reputation, our wealth, and the actions of others. If you tie your happiness to these, you are a slave to the world.' },
            { type: 'realworld', title: 'Application', content: 'List 3 things you are currently worried about. For each, ask: "Do I have 100% control over the outcome?" If not, stop worrying about the outcome and focus only on your immediate action.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to Epictetus, what should we focus our energy on?', options: [{text: 'Improving our reputation.', isCorrect: false}, {text: 'Our own thoughts, intentions, and actions.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l17_criminal', domain: 'criminal', emoji: '🔍', title: 'The Signature', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Psychological Need', content: 'While the M.O. is what an offender DOES to commit a crime, the Signature is what they NEED to do to satisfy their inner fantasy.' },
            { type: 'explain', title: 'Static Nature', content: 'Unlike the M.O., the Signature rarely changes. It is the core of the offender\'s pathology. It can be a specific way of positioning a body, a ritualistic phrase, or the taking of a "Trophy".' },
            { type: 'explain', title: 'The Calling Card', content: 'The Signature is unnecessary for the crime to succeed. It is an extra step taken purely for psychological relief. It is the most reliable way to link multiple crimes to one person.' },
            { type: 'realworld', title: 'Application', content: 'What is your "Productivity Signature"? What ritual or habit do you perform that isn\'t strictly necessary for the work but satisfies your psychological need for order? Acknowledge it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the main difference between M.O. and Signature?', options: [{text: 'M.O. is functional; Signature is psychological.', isCorrect: true}, {text: 'M.O. is psychological; Signature is functional.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l18_eloquence', domain: 'eloquence', emoji: '✍️', title: 'Vocal Kinesics', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Music of Authority', content: 'It is not just what you say, but the frequency and tone with which you say it.' },
            { type: 'explain', title: 'Lowering the Register', content: 'Lower-pitched voices are perceived as more authoritative, calm, and trustworthy. When under stress, your vocal cords naturally tighten, raising your pitch. Consciously relax your throat to drop your voice back to its natural baseline.' },
            { type: 'explain', title: 'The Downward Inflection', content: 'End your sentences with a downward tone. Amateurs end with an upward tone (making every statement sound like a question), which signals submissiveness and seeking approval.' },
            { type: 'realworld', title: 'Application', content: 'Record yourself speaking. Do you end sentences on a high note? Practice the "Downward Inflection" until you sound like a judge, not a student.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does an upward inflection at the end of a sentence signal?', options: [{text: 'Certainty and power.', isCorrect: false}, {text: 'Submissiveness or a need for validation.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l19_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The "Yes-Set"', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Priming Compliance', content: 'A hypnotic technique used to make a person more likely to agree to a major request by getting them into a "rhythm of agreement".' },
            { type: 'explain', title: 'The Mechanism', content: 'Ask three or four questions where the answer is an obvious, undeniable "Yes". "It\'s a nice day, isn\'t it?" "You\'re looking for a better solution, right?"' },
            { type: 'explain', title: 'The Momentum', content: 'Once the target has said "Yes" four times, their brain has established a neurological path of least resistance. When you ask the fifth, difficult question, they are significantly more likely to say "Yes" automatically.' },
            { type: 'realworld', title: 'Application', content: 'Before asking for a raise or a favor, start the conversation with 3 "truisms"—statements that are obviously true—to prime the "Yes-Set".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does a "Yes-Set" work?', options: [{text: 'It confuses the target with too many questions.', isCorrect: false}, {text: 'It creates a psychological momentum of agreement that makes the final request harder to refuse.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l20_iq', domain: 'iq', emoji: '🧠', title: 'The Fermi Estimate', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Back-of-the-Envelope Genius', content: 'Named after physicist Enrico Fermi, this is the ability to make remarkably accurate estimates with very little data.' },
            { type: 'explain', title: 'The Technique', content: 'Break a complex question into smaller, estimable parts. "How many piano tuners are in Chicago?" Guess the population, the percentage who own pianos, how often they are tuned. Multiply the guesses.' },
            { type: 'explain', title: 'The Architect\'s Application', content: 'The goal is to be "roughly right" rather than "precisely wrong." This allows you to make strategic decisions in seconds while others are waiting for a spreadsheet.' },
            { type: 'realworld', title: 'Application', content: 'Estimate how many gallons of gasoline are sold in your city every day. Don\'t use Google. Use Fermi logic. Then check your answer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core idea of a Fermi Estimate?', options: [{text: 'To get a perfectly precise answer through complex software.', isCorrect: false}, {text: 'To get a reasonably accurate answer by breaking a problem into manageable, estimable parts.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l21_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Enchiridion', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Manual for Life', content: 'Epictetus\'s "Enchiridion" (The Handbook) was designed for soldiers and leaders to keep on them at all times.' },
            { type: 'explain', title: 'The Core Lesson', content: '"Men are disturbed not by things, but by the view which they take of them." This is the ultimate weapon of the Stoic. No one can hurt you without your consent to be hurt.' },
            { type: 'explain', title: 'The Stoic Response', content: 'When someone insults you, they are only making sounds. It is your mind that translates those sounds into an "insult". You can choose to translate them into "meaningless noise" instead.' },
            { type: 'realworld', title: 'Application', content: 'Memorize this phrase: "It is my own impression that is bothering me." Use it the next time you feel a surge of anger or anxiety.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to the Enchiridion, what is the source of our distress?', options: [{text: 'The events themselves.', isCorrect: false}, {text: 'The interpretation and judgment we place on those events.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l22_eq', domain: 'eq', emoji: '👁', title: 'The Power Gaze', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Visual Dominance', content: 'Where you look determines how much power you project.' },
            { type: 'explain', title: 'The Social Triangle', content: 'In casual conversation, we look from eye to eye to mouth. This is the "Social Gaze".' },
            { type: 'explain', title: 'The Power Triangle', content: 'In high-stakes situations, look from eye to eye to the center of the forehead. This is the "Power Gaze". It creates an invisible pressure on the other person, signaling that you are the evaluator, not the evaluated.' },
            { type: 'realworld', title: 'Application', content: 'Next time someone tries to intimidate you or speak over you, switch to the "Power Gaze". Do not look at their mouth. Watch them stumble over their words.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Where is the focus of the "Power Gaze"?', options: [{text: 'Eye to eye to the mouth.', isCorrect: false}, {text: 'Eye to eye to the center of the forehead.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l23_mindset', domain: 'mindset', emoji: '🧊', title: 'Negative Visualization', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Antidote to Hedonic Adaptation', content: 'We often take our blessings for granted. "Premeditatio Malorum" forces us to appreciate them by imagining their loss.' },
            { type: 'explain', title: 'The Technique', content: 'Spend a minute imagining you have lost everything—your job, your health, your loved ones. Experience the grief briefly. Now, open your eyes. Everything has been "returned" to you.' },
            { type: 'explain', title: 'The Resilience', content: 'By rehearsing the worst, you diminish the power of fear. You realize that you are capable of enduring far more than your comfort-addicted brain suggests.' },
            { type: 'realworld', title: 'Application', content: 'Do this once a day for 30 seconds. It is the fastest way to build genuine gratitude and unshakable mental toughness.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of Negative Visualization?', options: [{text: 'To become a depressed and pessimistic person.', isCorrect: false}, {text: 'To decrease the fear of loss and increase appreciation for current blessings.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l24_criminal', domain: 'criminal', emoji: '🔍', title: 'The Modus Operandi vs Signature (Advanced)', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Case Study Analysis', content: 'Let\'s dissect the difference in a real-world scenario.' },
            { type: 'explain', title: 'Scenario', content: 'A burglar enters through the window (M.O.), takes the jewelry (Goal), but spends 10 minutes folding all the laundry in the house (Signature).' },
            { type: 'explain', title: 'The Profile', content: 'The window entry is efficient. The laundry folding is a psychological compulsion—it signals a need for order, possibly reflecting a childhood trauma or a specific fantasy of domestic mastery.' },
            { type: 'realworld', title: 'Application', content: 'Look at your own "Signature" in your social interactions. Do you always have to have the last word? Do you always play the victim? These are unnecessary for communication; they are psychological signatures. Control them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Is folding the laundry in the burglary scenario part of the M.O. or the Signature?', options: [{text: 'Signature (it satisfies a psychological need, not a functional one).', isCorrect: true}, {text: 'M.O. (it helps the burglar get away).', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l25_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Power of the Passive Voice', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Strategic Ambiguity', content: 'While active voice is usually better, the passive voice is a weapon for avoiding accountability.' },
            { type: 'explain', title: 'The Shift', content: 'Active: "I made a mistake." (Accountability). Passive: "Mistakes were made." (The mistake exists, but no one did it).' },
            { type: 'explain', title: 'Deflecting Blame', content: 'Use the passive voice when you need to mention a negative outcome without attaching it to yourself or your team. "The deadline was missed," sounds like an act of god; "We missed the deadline," sounds like a failure.' },
            { type: 'realworld', title: 'Application', content: 'In your next difficult report, use the passive voice for failures and the active voice for successes. Watch how the perception of your competence shifts.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is the passive voice used in corporate or political speech?', options: [{text: 'To sound more academic.', isCorrect: false}, {text: 'To mention negative outcomes while obscuring who is responsible for them.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l26_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Mirroring Technique', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Subconscious Bonding', content: 'Mirroring is the act of subtly imitating the body language, speech patterns, and energy levels of the person you are talking to.' },
            { type: 'explain', title: 'The Biology of Trust', content: 'We trust people who are like us. When you mirror someone, their brain releases oxytocin and signals: "This person is safe; they are part of my tribe."' },
            { type: 'explain', title: 'Subtlety is Key', content: 'Do not copy them instantly. Wait 10-15 seconds before adopting their posture or using their specific vocabulary. If they notice it, the trust is shattered instantly.' },
            { type: 'realworld', title: 'Application', content: 'In your next high-stakes meeting, mirror the person with the most power. If they lean back, you lean back. If they use short sentences, you use short sentences. Watch them open up to you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the main goal of mirroring?', options: [{text: 'To mock the other person.', isCorrect: false}, {text: 'To build subconscious trust and rapport by making the other person feel you are "like them".', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l27_iq', domain: 'iq', emoji: '🧠', title: 'The Survivorship Bias', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Invisible Evidence', content: 'We tend to focus on the "winners" and ignore the much larger group of "losers" who used the exact same strategy.' },
            { type: 'explain', title: 'The WWII Armor Example', content: 'Engineers wanted to add armor to where returning planes had bullet holes. Statistician Abraham Wald realized they should add armor to where the holes WEREN\'T—because the planes hit in those spots never made it back to be studied.' },
            { type: 'explain', title: 'The Architect\'s Warning', content: 'Don\'t just study successful people. Study the people who failed. Often, they did the exact same things as the winners, but had worse luck. Survivorship bias makes us attribute to skill what was actually chance.' },
            { type: 'realworld', title: 'Application', content: 'Before following the advice of a billionaire, ask: "How many other people did this exact same thing and went bankrupt?" Look for the missing data.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is Survivorship Bias?', options: [{text: 'Focusing only on the people or things that succeeded and ignoring the ones that failed, leading to a distorted view of reality.', isCorrect: true}, {text: 'The desire to survive at any cost.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l28_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Inner Citadel', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Psychological Retreat', content: 'Marcus Aurelius wrote that you can always find a quiet place within yourself, no matter how chaotic the world around you is.' },
            { type: 'explain', title: 'The Practice', content: 'Identify the core values and truths that cannot be taken from you. This is your Inner Citadel. When you are attacked or stressed, retreat there. Remind yourself: "They can take my job, but they cannot take my character."' },
            { type: 'explain', title: 'Indifference to Fame', content: 'The opinion of others is like a passing cloud. It is external and irrelevant to the Citadel. By becoming truly indifferent to praise and blame, you become invincible.' },
            { type: 'realworld', title: 'Application', content: 'Spend 5 minutes defining your "Top 3 Non-Negotiable Values". This is the foundation of your Citadel. Build it strong.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Inner Citadel" in Stoicism?', options: [{text: 'A physical fortress built for protection.', isCorrect: false}, {text: 'A mental space of core values and logic that remains untouched by external events.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's3_l29_eq', domain: 'eq', emoji: '👁', title: 'The "Liar\'s Lean"', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Body Language in Deception', content: 'While liars often try to look relaxed, their bodies frequently leak the desire to escape.' },
            { type: 'explain', title: 'Ventral Denial', content: 'We point our "Ventral" (front) side toward things we like and away from things we dislike. A person who is lying will often subtly angle their torso or feet toward the door, even if they are looking at you.' },
            { type: 'explain', title: 'The Barrier Signal', content: 'If a person suddenly crosses their arms, puts an object between you, or leans back significantly during a specific question, they are creating a physical barrier to match their psychological distance.' },
            { type: 'realworld', title: 'Application', content: 'In your next interview, watch the feet. Feet are the most honest part of the body because we rarely think to control them. Are they pointed at you, or the exit?' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does "Ventral Denial" (angling the body away) typically signal?', options: [{text: 'Discomfort, dislike, or a desire to leave the interaction.', isCorrect: true}, {text: 'Extreme interest and engagement.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's3_l30_mindset', domain: 'mindset', emoji: '🧊', title: 'The Final Exam: Stage 3', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Synthesis of the Observer', content: 'You have completed Stage 3. You are now a trained observer of the human machine.' },
            { type: 'explain', title: 'The Observer State', content: 'To be an Observer is to be present but detached. You see the blinks, the pupils, the logical fallacies, and the signatures without being emotionally affected by them.' },
            { type: 'explain', title: 'The Path Forward', content: 'Stage 4 will move from Observation to Endurance—The Stoic. You have the eyes; now you need the armor.' },
            { type: 'realworld', title: 'Application', content: 'For the next 24 hours, speak 50% less than usual. Focus 100% on observing the signatures and blinks of everyone you meet. Speak only when you have identified their primary frame.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What is the primary characteristic of the "Observer" state?', options: [{text: 'Constant talking and social engagement.', isCorrect: false}, {text: 'Active, detailed observation combined with emotional detachment.', isCorrect: true}] }
            ]}
        ]
    }
];

window.STAGE3_LESSONS = STAGE3_LESSONS;
