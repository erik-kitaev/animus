const STAGE1_LESSONS = [
    {
        id: 's1_l1_iq', domain: 'iq', emoji: '🧠', title: 'Deductive vs Inductive Logic', duration: '15 min',
        slides: [
            { type: 'intro', title: 'The Architecture of Thought', content: 'Before you can outthink an opponent, you must understand the machinery of your own mind. This is the foundation of cognitive superiority. We will explore the absolute difference between deductive and inductive processing, and how to weaponize both.' },
            { type: 'term', title: 'Deductive Reasoning', content: 'Top-Down Logic. The process of reasoning from one or more general statements (premises) to reach a logically certain conclusion. If the premises are true, the conclusion MUST be true.' },
            { type: 'explain', title: 'The Vulnerability of Deduction', content: 'Deduction is mathematically flawless, but it relies entirely on the premises being 100% accurate. Manipulators will feed you false premises, forcing you to logically deduce a lie.' },
            { type: 'quote', quote: '"When you have eliminated the impossible, whatever remains, however improbable, must be the truth."', content: 'Sherlock Holmes utilized deduction. By systematically proving what cannot be true, you are forced into the only remaining reality.' },
            { type: 'term', title: 'Inductive Reasoning', content: 'Bottom-Up Logic. Reasoning in which the premises seek to supply strong evidence for the truth of the conclusion. It is based on patterns. "I have seen 100 white swans, therefore all swans are white."' },
            { type: 'explain', title: 'The Hannibal Application', content: 'Hannibal uses Induction to rapidly profile victims from visual clues (clothing, scent). He observes patterns to guess their insecurities. He then switches to Deduction to set psychological traps based on absolute facts.' },
            { type: 'quote', quote: '"The problem with inductive profiling is that human beings are capable of profound anomalies." - FBI Behavioral Science Unit' },
            { type: 'realworld', title: 'Application: The Boardroom', content: 'In a meeting, inductively profile your boss (they look stressed, checked their watch twice). Deductively restrict their options (they must leave by 5 PM, so if I pitch at 4:55, they will say yes to avoid a long discussion).' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which reasoning is vulnerable to the "Black Swan" anomaly (a sudden break in a pattern)?', options: [{text: 'Deductive', isCorrect: false}, {text: 'Inductive', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l2_eq', domain: 'eq', emoji: '👁', title: 'The Baseline Technique', duration: '12 min',
        slides: [
            { type: 'intro', title: 'Establishing the Baseline', content: 'You cannot detect deception if you do not know what the truth looks like on their face. You must map their physiological default state.' },
            { type: 'term', title: 'The Baseline', content: 'A person\'s default, un-stressed physiological and behavioral state. This includes blink rate, vocal pitch, posture, and resting tension in the jaw.' },
            { type: 'explain', title: 'Calibration', content: 'To find the baseline, ask questions you already know the honest answer to. "Did you take the train today?" Watch their eye movements and blink rate as they access a truthful memory. This is your zero-point.' },
            { type: 'quote', quote: '"There is no such thing as a universal sign of deception. There is only a deviation from the individual\'s baseline."' },
            { type: 'term', title: 'The Stressor', content: 'A high-impact, unexpected question designed to force a sudden cognitive load. "Where were you at 9 PM on Tuesday?"' },
            { type: 'explain', title: 'The Cluster Rule', content: 'Never judge deception on a single tic. You need a cluster of at least 3 deviations (e.g., eye dart, throat swallow, shoulder twitch) occurring simultaneously with the stressor to confirm a lie.' },
            { type: 'realworld', title: 'Application: The Negotiation', content: 'Calibrate your target for 2 minutes before negotiating. Ask about their weekend. When you state your final price, watch the baseline shatter. If their blink rate drops to zero, they are calculating.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why must you ask questions you already know the answer to?', options: [{text: 'To build rapport and make them like you.', isCorrect: false}, {text: 'To calibrate their physiological truthful baseline.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l3_manipulation', domain: 'manipulation', emoji: '♟️', title: 'Advanced Mirroring', duration: '14 min',
        slides: [
            { type: 'intro', title: 'The Biology of Trust', content: 'We inherently trust our reflections. Mirroring hijacks the brain\'s mirror neurons, creating a subconscious feeling of intense rapport and safety.' },
            { type: 'term', title: 'Isopraxim', content: 'The biological phenomenon where members of the same species adopt the same posture and behaviors to signal alignment.' },
            { type: 'explain', title: 'The 3-Second Delay', content: 'Amateurs mirror instantly, which is creepy and obvious. Masters wait exactly 3 seconds after the target shifts posture before they adopt the same stance. It must bypass the conscious mind.' },
            { type: 'term', title: 'Vocal Mirroring', content: 'Matching the tempo, volume, and rhythm of the target\'s speech. If they speak in a slow, hushed whisper, you must drop your volume and speed to match.' },
            { type: 'quote', quote: '"To become the master of the interaction, you must first become the mirror."' },
            { type: 'explain', title: 'The Lead', content: 'Once you are perfectly synced, you must test the connection. Shift your posture deliberately (e.g., cross your legs). If they subconsciously follow you within 10 seconds, you own the interaction.' },
            { type: 'realworld', title: 'Application: De-escalation', content: 'Mirror the rapid breathing rate of a furious person. Once synced, slowly decelerate your own breathing. Their biology will follow yours, calming them down against their will.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you test if your psychological mirroring has successfully hijacked their subconscious?', options: [{text: 'By asking for a large favor.', isCorrect: false}, {text: 'By leading: changing your own posture and seeing if they blindly follow.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l4_mindset', domain: 'mindset', emoji: '🧊', title: 'Pain Detachment', duration: '18 min',
        slides: [
            { type: 'intro', title: 'Severing the Nerve', content: 'Pain is a necessary biological signal. Suffering is an optional cognitive choice. The elite mind learns to separate the physical sensation from the emotional panic.' },
            { type: 'term', title: 'Nociception', content: 'The sensory nervous system\'s response to certain harmful or potentially harmful stimuli. This is pure data processing. It is not an emotion.' },
            { type: 'explain', title: 'The Dual-Processing Theory', content: 'When you touch a hot stove, the nerve sends a damage signal (nociception). Your amygdala then floods your brain with panic (suffering). You must build a firewall between these two processes.' },
            { type: 'quote', quote: '"Choose not to be harmed, and you won\'t feel harmed. Don\'t feel harmed, and you haven\'t been." — Marcus Aurelius' },
            { type: 'explain', title: 'Clinical Observation', content: 'When experiencing pain, strip away the emotional language. Do not say "It hurts." Say "There is an intense thermal sensation in my left hand." Objectify the data.' },
            { type: 'term', title: 'The Titanium Box Technique', content: 'Visualize a mental titanium box. Put the emotional panic inside the box and lock it. Leave the physical sensation outside. Observe it clinically.' },
            { type: 'realworld', title: 'Application: Cold Exposure', content: 'Next time you take a freezing cold shower, do not gasp, shiver, or flinch. Objectively observe the temperature without attaching the emotion of discomfort. Control your heart rate.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to this cognitive framework, what is the fundamental difference between pain and suffering?', options: [{text: 'Pain is biological data; suffering is the emotional reaction to that data.', isCorrect: true}, {text: 'They are identical processes that cannot be separated.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l5_criminal', domain: 'criminal', emoji: '🔍', title: 'The Organized Offender', duration: '15 min',
        slides: [
            { type: 'intro', title: 'Pathological Taxonomy', content: 'To predict a predator, you must classify them. We begin with understanding the difference between a crime of blind passion and a crime of cold, calculated design.' },
            { type: 'term', title: 'The Organized Offender', content: 'A psychopathic profile characterized by high intelligence, social competence, and meticulous planning. They do not act on impulse; they act on architecture.' },
            { type: 'explain', title: 'The Organized Mind', content: 'They stalk their target, often a specific stranger who fits a fantasy profile. They bring their own tools to the event and take them away. They leave a pristine scene.' },
            { type: 'quote', quote: '"The organized offender is terrifying because they look exactly like you and me. They have a wife, a car, and a mortgage." — FBI BAU' },
            { type: 'explain', title: 'Post-Offense Behavior', content: 'They follow the media coverage obsessively. They may even insert themselves into the investigation to monitor police progress. They exhibit absolutely no remorse, only pride in their execution.' },
            { type: 'realworld', title: 'Application: Corporate Pathology', content: 'When dealing with a highly organized, toxic executive, do not expect them to make sloppy, emotional mistakes. You cannot provoke them into anger. You must find the flaw in their grand design.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Does an organized offender usually know their victim personally?', options: [{text: 'Yes, crimes are usually committed against close friends or spouses.', isCorrect: false}, {text: 'No, they meticulously select specific strangers who fit their criteria.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l6_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Stoic Dichotomy', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Illusion of Control', content: 'Emotional turbulence is the result of trying to control the uncontrollable. The Stoic Dichotomy is the scalpel that severs this anxiety.' },
            { type: 'explain', title: 'Internal vs External', content: 'You control exactly two things: your thoughts and your actions. Everything else—other people\'s opinions, the weather, the economy—is external and fundamentally beyond your control.' },
            { type: 'explain', title: 'Radical Acceptance', content: 'When an external factor works against you, the amateur complains. The master accepts it instantly as an objective fact of reality and immediately recalculates.' },
            { type: 'realworld', title: 'Application', content: 'When someone insults you, recognize that their words are an external variable. You cannot control their mouth. You only control your reaction. Choose indifference.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to the Stoic Dichotomy, which of the following is within your control?', options: [{text: 'Your reputation among peers.', isCorrect: false}, {text: 'Your reaction to an insult.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l7_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Art of the Pause', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Silence as a Weapon', content: 'Amateurs fill silence with words because silence makes them uncomfortable. Masters use silence to make others uncomfortable.' },
            { type: 'explain', title: 'The Power Vacuum', content: 'In conversation, a long pause creates a psychological vacuum. The socially weaker person will always rush to fill that vacuum with nervous chatter.' },
            { type: 'explain', title: 'The Interrogation Pause', content: 'When someone gives you an excuse, do not respond. Maintain unbroken eye contact and remain completely silent. 90% of the time, they will immediately contradict themselves or offer a better deal just to end the silence.' },
            { type: 'realworld', title: 'Application', content: 'In your next negotiation, state your terms and then stop talking completely. Let the silence stretch for 5 full seconds. Watch the other person fold.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why do socially dominant individuals use silence?', options: [{text: 'To avoid saying the wrong thing.', isCorrect: false}, {text: 'To force the weaker party to fill the vacuum and reveal information.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l8_cultural', domain: 'cultural', emoji: '🎨', title: 'The Halo Effect', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Aesthetic Trap', content: 'The human brain is lazy. It uses shortcuts. The most dangerous shortcut is assuming that "beautiful" equals "good".' },
            { type: 'explain', title: 'Cognitive Spillover', content: 'If you perceive a person as highly attractive or exceptionally well-dressed, your brain will unconsciously assume they are also intelligent, moral, and trustworthy.' },
            { type: 'explain', title: 'The Hannibal Aesthetic', content: 'Hannibal Lecter dresses impeccably, listens to Bach, and serves gourmet meals. He weaponizes the Halo Effect to ensure his peers associate him with high society and culture, never with savagery.' },
            { type: 'realworld', title: 'Application', content: 'Never underestimate the psychological impact of a tailored suit and perfect grooming. It provides a protective camouflage against suspicion.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the Halo Effect?', options: [{text: 'Assuming one positive trait (like attractiveness) implies other positive traits.', isCorrect: true}, {text: 'A spiritual awakening.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l9_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Anchoring Heuristic', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Setting the Boundaries of Reality', content: 'The first piece of information offered in a negotiation sets the invisible boundary for the entire interaction. This is the Anchor.' },
            { type: 'explain', title: 'How it Works', content: 'If you ask for a $100,000 salary, the employer\'s counter-offer will orbit that number. If you ask for $150,000, even a "low" counter-offer will be much higher than it would have been.' },
            { type: 'explain', title: 'Extreme Anchoring', content: 'Set an anchor so extreme that it shatters their expectations, making your actual demand seem incredibly reasonable by comparison.' },
            { type: 'realworld', title: 'Application', content: 'If you need a 2-day extension on a project, tell your boss you need a 2-week extension. When they panic, "compromise" down to 2 days. They will feel relieved instead of angry.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What happens when you set an extreme anchor?', options: [{text: 'It makes your actual demand look far more reasonable.', isCorrect: true}, {text: 'It instantly destroys trust.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l10_mindset', domain: 'mindset', emoji: '🧊', title: 'The Zeigarnik Effect', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Psychology of Unfinished Business', content: 'The human brain remembers uncompleted or interrupted tasks vastly better than completed ones.' },
            { type: 'explain', title: 'The Open Loop', content: 'When a task is incomplete, the brain holds it in working memory, creating a sense of tension and anxiety until the loop is closed.' },
            { type: 'explain', title: 'Conversational Weaponization', content: 'If you want someone to obsess over you, leave interactions abruptly at the highest point of emotional intensity. Do not give them closure.' },
            { type: 'realworld', title: 'Application', content: 'End a text conversation by dropping a highly intriguing statement ("I just realized something crazy about you..."), then go offline for 4 hours. They will not be able to stop thinking about it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which type of tasks does the brain remember best?', options: [{text: 'Completed tasks', isCorrect: false}, {text: 'Incomplete or interrupted tasks', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l11_cultural', domain: 'cultural', emoji: '🎭', title: 'The Pygmalion Effect', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Power of Expectation', content: 'People will instinctively rise or fall to meet the expectations you project onto them.' },
            { type: 'explain', title: 'Self-Fulfilling Prophecy', content: 'If you treat someone like a genius, they will gain confidence and perform better. If you treat someone like a failure, they will subconsciously self-sabotage.' },
            { type: 'explain', title: 'The Architect\'s Control', content: 'You can program the behavior of those around you simply by changing how you treat them. Speak to them as if they are already the person you need them to be.' },
            { type: 'realworld', title: 'Application', content: 'Instead of criticizing a colleague for being lazy, start thanking them preemptively for their "outstanding work ethic." Watch them scramble to justify your praise.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does the Pygmalion Effect prove?', options: [{text: 'High expectations lead to improved performance.', isCorrect: true}, {text: 'People always rebel against expectations.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l12_iq', domain: 'iq', emoji: '🧠', title: 'The Sunk Cost Fallacy', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Trap of Investment', content: 'The tendency to continue an endeavor once an investment in money, effort, or time has been made, even if it is doomed to fail.' },
            { type: 'explain', title: 'Emotional Mathematics', content: 'The human ego hates admitting defeat. It will throw good money after bad simply to avoid the emotional pain of acknowledging a loss.' },
            { type: 'explain', title: 'Weaponizing the Fallacy', content: 'To control someone, make them invest heavily in you. Make them spend time, money, and emotional energy. The more they invest, the harder it will be for them to walk away.' },
            { type: 'realworld', title: 'Application', content: 'In a negotiation, force the other party to spend hours working out minor details with you before you discuss the price. They will agree to a worse price just because they invested so much time.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why do people fall for the Sunk Cost Fallacy?', options: [{text: 'They don\'t understand basic math.', isCorrect: false}, {text: 'They want to avoid the psychological pain of admitting their initial investment was wasted.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l13_philosophy', domain: 'philosophy', emoji: '⚔️', title: 'Machiavellian Fear vs Love', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Prince\'s Dilemma', content: 'Machiavelli asked: Is it better to be loved or feared? He concluded it is best to be both, but if you must choose one, choose fear.' },
            { type: 'explain', title: 'The Instability of Love', content: 'Love is a bond of obligation. Because men are fundamentally self-interested, they will break this bond whenever it benefits them.' },
            { type: 'explain', title: 'The Durability of Fear', content: 'Fear is supported by the dread of pain, which never leaves a person. A foundation built on fear is mathematically more stable than one built on affection.' },
            { type: 'realworld', title: 'Application', content: 'In leadership, do not strive to be everyone\'s best friend. Strive to be respected and slightly feared. Maintain boundaries.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why did Machiavelli prefer fear over love?', options: [{text: 'Fear is sustained by the dread of punishment, which is reliable.', isCorrect: true}, {text: 'Love is a biological weakness.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l14_eq', domain: 'eq', emoji: '👁', title: 'The Law of State Transfer', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Emotional Contagion', content: 'Emotions are highly contagious viruses. The person with the strongest emotional state in a room will infect everyone else.' },
            { type: 'explain', title: 'The Anchor State', content: 'If you walk into a chaotic, panicking room with absolute, unbreakable calmness, the room will eventually sync to your frequency.' },
            { type: 'explain', title: 'State Control', content: 'Never let the environment dictate your state. You dictate the environment\'s state by becoming an unmovable psychological anchor.' },
            { type: 'realworld', title: 'Application', content: 'The next time someone yells at you, do not raise your voice. Lower your voice. Speak slower and deeper. Watch their hysteria hit an invisible wall and dissipate.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to the Law of State Transfer, who controls the emotional tone of an interaction?', options: [{text: 'The person who speaks the loudest.', isCorrect: false}, {text: 'The person with the strongest, most stable emotional state.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l15_mindset', domain: 'mindset', emoji: '🧊', title: 'The Scarcity Principle', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Value of Rarity', content: 'Human beings are wired to desire that which is rare, fleeing, or difficult to attain.' },
            { type: 'explain', title: 'Manufactured Demand', content: 'Diamonds are inherently worthless, but their supply is strictly controlled by cartels to create the illusion of extreme scarcity, driving prices up.' },
            { type: 'explain', title: 'Personal Scarcity', content: 'If you are always available, always replying instantly, and always agreeable, your psychological market value drops to zero. You must manufacture your own scarcity.' },
            { type: 'realworld', title: 'Application', content: 'Stop replying to messages immediately. Make yourself less available. When you do grant someone your time, they will value it ten times as much.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you increase your perceived psychological value?', options: [{text: 'By being universally liked and available to everyone.', isCorrect: false}, {text: 'By restricting access to your time and attention.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l16_criminal', domain: 'criminal', emoji: '🔍', title: 'The Triad of Psychopathy', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Dark Triad', content: 'The dark triad refers to three distinct but related personality traits: Narcissism, Machiavellianism, and Psychopathy.' },
            { type: 'explain', title: 'Narcissism', content: 'Grandiose self-view, entitlement, and a desperate need for admiration.' },
            { type: 'explain', title: 'Machiavellianism', content: 'Strategic manipulation, deceit, and a cynical view of human nature. The end always justifies the means.' },
            { type: 'explain', title: 'Psychopathy', content: 'High impulsivity, thrill-seeking, and a complete lack of empathy or remorse.' },
            { type: 'realworld', title: 'Application', content: 'When profiling an opponent, identify which triad trait is dominant. A narcissist is easily defeated by attacking their ego. A Machiavellian requires out-planning.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which dark triad trait is defined by a complete lack of empathy?', options: [{text: 'Narcissism', isCorrect: false}, {text: 'Psychopathy', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l17_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Authority Bias', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Milgram Illusion', content: 'Humans are biologically programmed to obey authority figures, even when the orders conflict with their personal conscience.' },
            { type: 'explain', title: 'Symbols of Authority', content: 'Authority is not always real. It is often perceived through symbols: titles (Dr., Officer), clothing (uniforms, expensive suits), and confident posture.' },
            { type: 'explain', title: 'Manufactured Authority', content: 'If you speak with absolute, unwavering certainty and dress impeccably, people will naturally assume you are in charge and defer to you.' },
            { type: 'realworld', title: 'Application', content: 'When entering a room where you have no actual power, assume the physical posture of the highest-ranking person. Speak with 10% more volume. Watch people defer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the most effective way to trigger the Authority Bias?', options: [{text: 'Presenting a logical argument.', isCorrect: false}, {text: 'Displaying symbols of power and speaking with absolute certainty.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l18_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Contrast Principle', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Relative Perception', content: 'The human brain does not measure things in absolute terms. It measures them in comparison to what it just saw.' },
            { type: 'explain', title: 'The Sales Strategy', content: 'If a salesperson shows you a $4,000 suit first, the $500 shoes they show you next seem inexpensive. If they showed the shoes first, they would seem expensive.' },
            { type: 'explain', title: 'Behavioral Contrast', content: 'If you need to deliver bad news, precede it with hypothetically much worse news. "I totaled the car... just kidding, but I did scratch the bumper."' },
            { type: 'realworld', title: 'Application', content: 'Ask someone for an outrageously large favor (which they will refuse). Immediately follow up with the smaller favor you actually wanted. They will comply due to the contrast.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Contrast Principle work?', options: [{text: 'By making things look exactly the same.', isCorrect: false}, {text: 'By altering perception based on the preceding information.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l19_iq', domain: 'iq', emoji: '🧠', title: 'Confirmation Bias', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Echo Chamber', content: 'People only search for, interpret, and remember information that confirms their pre-existing beliefs.' },
            { type: 'explain', title: 'The Logic Blindspot', content: 'If someone believes you are a bad person, they will interpret your kindness as manipulation and your mistakes as proof of your evil.' },
            { type: 'explain', title: 'Exploiting the Bias', content: 'Do not try to change someone\'s mind with facts. Find out what they already believe, and frame your argument so that it aligns with their pre-existing worldview.' },
            { type: 'realworld', title: 'Application', content: 'If your boss believes they are a visionary, frame your new project not as your idea, but as the natural evolution of their original vision. They will approve it instantly.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the best way to bypass confirmation bias?', options: [{text: 'Present irrefutable logical facts.', isCorrect: false}, {text: 'Frame your argument to align with their existing beliefs.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l20_eq', domain: 'eq', emoji: '👁', title: 'Vocal Kinesics', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Hidden Audio Tape', content: 'It is not what you say, it is how the acoustic waves hit the listener\'s ear.' },
            { type: 'explain', title: 'Upward Inflection (The Seeker)', content: 'Ending a sentence on a higher pitch implies uncertainty and seeks approval. It destroys authority.' },
            { type: 'explain', title: 'Downward Inflection (The Commander)', content: 'Ending a sentence on a lower pitch implies absolute certainty. It is not a question, it is a statement of fact.' },
            { type: 'realworld', title: 'Application', content: 'Record yourself speaking. Notice how often you use upward inflections when stating facts. Practice forcing a downward inflection on the last word of every sentence.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does an upward vocal inflection signal to the listener?', options: [{text: 'Uncertainty and a need for approval.', isCorrect: true}, {text: 'Dominance and certainty.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l21_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Concept of Amor Fati', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Loving Your Fate', content: 'Do not merely tolerate adversity. Learn to love it.' },
            { type: 'explain', title: 'The Nietzschean Shift', content: 'Amor Fati translates to "Love of one\'s fate." It is the attitude in which you see everything that happens—including suffering and loss—as good or necessary.' },
            { type: 'explain', title: 'The Ultimate Armor', content: 'If you love the obstacles thrown in your path because they make you stronger, your opponent has no weapons left. You cannot traumatize someone who uses trauma as fuel.' },
            { type: 'realworld', title: 'Application', content: 'When disaster strikes today, do not say "Why is this happening to me?" Say "This is exactly what I needed to test my resilience."' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core principle of Amor Fati?', options: [{text: 'Avoiding pain at all costs.', isCorrect: false}, {text: 'Embracing and loving everything that happens to you, including suffering.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l22_criminal', domain: 'criminal', emoji: '🔍', title: 'The Signature vs The M.O.', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Behavioral Evidence Analysis', content: 'Understanding the difference between what a predator needs to do, and what they want to do.' },
            { type: 'explain', title: 'Modus Operandi (M.O.)', content: 'The M.O. is the method of operation. It is strictly functional. How did they break in? How did they tie the knot? The M.O. evolves and improves over time.' },
            { type: 'explain', title: 'The Signature', content: 'The signature is psychological. It is unnecessary for the completion of the task, but emotionally required for the offender. Posing the body, leaving a specific playing card.' },
            { type: 'realworld', title: 'Application', content: 'In business, distinguish between a competitor\'s M.O. (their functional business strategy) and their Signature (their ego-driven need to have their name on the building). Exploit the Signature.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which aspect of an offender\'s behavior evolves and changes over time?', options: [{text: 'The Signature', isCorrect: false}, {text: 'The Modus Operandi (M.O.)', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l23_manipulation', domain: 'manipulation', emoji: '♟️', title: 'Triangulation', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Three-Body Problem', content: 'Triangulation is a manipulation tactic where one person controls the communication between two other people to create conflict or dependency.' },
            { type: 'explain', title: 'The Setup', content: 'Person A tells Person B that Person C said something bad about them. Person B now hates Person C and relies entirely on Person A for "the truth".' },
            { type: 'explain', title: 'Divide and Conquer', content: 'By preventing direct communication between the targets, the manipulator becomes the sole arbiter of reality, breaking alliances that could threaten them.' },
            { type: 'realworld', title: 'Application', content: 'If you suspect you are being triangulated, the defense is simple: break the triangle. Go directly to Person C and verify the information. Watch the manipulator panic.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the ultimate goal of triangulation?', options: [{text: 'To foster direct, honest communication.', isCorrect: false}, {text: 'To isolate targets and control the flow of information.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l24_mindset', domain: 'mindset', emoji: '🧊', title: 'Negative Visualization', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Premeditatio Malorum', content: 'The Stoic practice of premeditating the evils that may occur.' },
            { type: 'explain', title: 'Inoculation against Panic', content: 'If you vividly imagine the worst-case scenario happening (losing your job, a relationship ending), you neurologically inoculate yourself against the shock if it actually occurs.' },
            { type: 'explain', title: 'Eradicating Anxiety', content: 'Anxiety thrives in the unknown. By defining the absolute worst outcome and realizing you would still survive it, the anxiety loses its power.' },
            { type: 'realworld', title: 'Application', content: 'Before a high-stakes presentation, spend 5 minutes visualizing it going completely wrong. The projector breaks, people laugh. Realize you would survive. Walk in fearless.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does Negative Visualization help reduce anxiety?', options: [{text: 'By making you depressed.', isCorrect: false}, {text: 'By defining the worst-case scenario and proving to your brain that it is survivable.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l25_iq', domain: 'iq', emoji: '🧠', title: 'First Principles Thinking', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Deconstructing Reality', content: 'Amateurs reason by analogy (doing what has been done before). Masters reason from first principles.' },
            { type: 'explain', title: 'The Breakdown', content: 'Boil a problem down to its absolute, irrefutable fundamental truths. Discard all assumptions, traditions, and "common sense".' },
            { type: 'explain', title: 'The Reconstruction', content: 'Once you have the raw materials (the first principles), build a new solution from scratch. This is how paradigm-shifting innovations are made.' },
            { type: 'realworld', title: 'Application', content: 'Instead of assuming a task must take 5 days because "that is how we\'ve always done it", ask: "What are the physics/absolute requirements of this task?" You will often find a 1-day solution.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does reasoning from First Principles involve?', options: [{text: 'Copying the best practices of your competitors.', isCorrect: false}, {text: 'Breaking a problem down to its fundamental truths and building up from there.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l26_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Rhetorical Triangle', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Architecture of Persuasion', content: 'Aristotle identified three pillars of persuasion over 2,300 years ago. Every speech that ever moved a nation, closed a deal, or started a war used this exact structure. It is timeless because it is biological.' },
            { type: 'term', title: 'Ethos (Credibility)', content: 'The audience\'s perception of the speaker\'s character and competence. Without Ethos, nothing you say will be believed. You must establish authority before your argument begins.' },
            { type: 'explain', title: 'Building Ethos', content: 'Ethos is established through: demonstrated knowledge, credentials, shared values with the audience, and vocal certainty. Never begin an argument without first establishing why you are qualified to have this opinion.' },
            { type: 'term', title: 'Pathos (Emotion)', content: 'The emotional resonance of the argument. The single most powerful persuasion tool. Logic informs, but emotion decides. The best logical argument in the world loses to a mediocre emotional story.' },
            { type: 'term', title: 'Logos (Logic)', content: 'The logical structure of the argument. Facts, statistics, and deductive reasoning. Logos alone is almost never enough — but paired with Pathos, it makes the emotional decision feel justified.' },
            { type: 'explain', title: 'The Correct Order', content: 'The correct deployment sequence is: Ethos first (why should they listen to me?), then Pathos (make them feel the problem), then Logos (give them the intellectual justification for the emotional decision they already made).' },
            { type: 'quote', quote: '"The fool persuades me with his reasons; the wise man persuades me with my own." — Aristotle' },
            { type: 'realworld', title: 'Application: The Pitch', content: 'Before pitching your next idea, structure it: [Ethos] "I have studied this market for 3 years..." [Pathos] "Imagine if your team never missed a deadline again..." [Logos] "Our system reduces project time by 40% on average."' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'Why must Pathos always come before Logos in a persuasive argument?', options: [{text: 'Because people make decisions emotionally and justify them logically afterwards.', isCorrect: true}, {text: 'Because logic is boring.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's1_l27_philosophy', domain: 'philosophy', emoji: '⚡', title: 'Nietzsche\'s Will to Power', duration: '14 min',
        slides: [
            { type: 'intro', title: 'The Fundamental Drive', content: 'Nietzsche proposed that the primary motivational force in humans is not survival, nor pleasure, nor love — it is the will to power. The relentless drive to grow, dominate, and overcome.' },
            { type: 'term', title: 'Will to Power', content: 'Not merely the desire for political dominance. The deep, biological drive to master one\'s environment, expand one\'s capabilities, and impose one\'s values on the world.' },
            { type: 'explain', title: 'The Slave Morality', content: 'Nietzsche identified two moral systems. Slave Morality was created by the weak to suppress the strong. It rebrands weakness as virtue (humility, meekness) and strength as evil (pride, dominance).' },
            { type: 'explain', title: 'The Master Morality', content: 'Master Morality is the morality of the strong. Good = powerful, noble, beautiful. Bad = weak, cowardly, self-pitying. This is not cruelty — it is honesty about the fundamental drives of superior beings.' },
            { type: 'quote', quote: '"Man must be surpassed. What is great in man is that he is a bridge and not an end." — Friedrich Nietzsche' },
            { type: 'term', title: 'The Übermensch', content: 'The "Overman" — the goal that Nietzsche set for humanity. A being who has created their own values, transcended conventional morality, and continually overcomes themselves.' },
            { type: 'explain', title: 'The ANIMUS Application', content: 'This program is fundamentally Nietzschean. You are not here to be accepted. You are here to become something that ordinary human psychology cannot comprehend or contain.' },
            { type: 'realworld', title: 'Application: Self-Surpassing', content: 'Identify one area where you are operating from Slave Morality — where you have convinced yourself your limitation is actually a virtue. Destroy that excuse today.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What did Nietzsche identify as the primary drive of human beings?', options: [{text: 'The desire for safety and comfort.', isCorrect: false}, {text: 'The will to power — the drive to grow, overcome, and master.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l28_cultural', domain: 'cultural', emoji: '🎨', title: 'Art as Psychological Intelligence', duration: '13 min',
        slides: [
            { type: 'intro', title: 'Why Hannibal Knows Art', content: 'Hannibal Lecter does not study art because it is pleasant. He studies it because art is a direct transmission of human psychological states across centuries. Art is a data source.' },
            { type: 'explain', title: 'Reading Emotional Architecture', content: 'A painting is a frozen emotional state of the painter. When you develop the ability to read what emotional and psychological pressures produced a work, you gain a template for understanding all human expression.' },
            { type: 'term', title: 'Chiaroscuro', content: 'The technique of using strong contrasts between light and dark to model three-dimensional forms. Used by Caravaggio and Rembrandt. Psychologically, it mirrors the dual nature of the human condition: light and shadow coexist in every person.' },
            { type: 'explain', title: 'Caravaggio\'s Violence', content: 'Caravaggio painted violent biblical scenes with unprecedented realism. His characters look like common criminals because they were — he used street people as models. He understood that the sacred and the profane are one. So did Hannibal.' },
            { type: 'quote', quote: '"Beauty will save the world." — Fyodor Dostoevsky' },
            { type: 'explain', title: 'Cultural Weaponization', content: 'When you walk into any social environment armed with genuine knowledge of art, literature, and music, you can speak the private language of the elite. Doors that remain closed to the uninformed open instantly.' },
            { type: 'realworld', title: 'Application: The Museum Protocol', content: 'Visit one museum per month. Do not read the labels first. Stand in front of a painting for 5 minutes and write down what emotional state you believe produced it. Then read about the artist. Track your accuracy.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'Why does Hannibal Lecter invest so heavily in cultural knowledge?', options: [{text: 'Because art is beautiful and life should be enjoyed.', isCorrect: false}, {text: 'Because cultural mastery opens elite social circles and signals intelligence and control.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l29_eq', domain: 'eq', emoji: '👁', title: 'Reading Microexpressions', duration: '15 min',
        slides: [
            { type: 'intro', title: 'The Face Betrays Everything', content: 'Paul Ekman\'s landmark research proved that across all cultures, the human face produces 7 universal emotional microexpressions that last between 1/15th and 1/25th of a second. They cannot be suppressed.' },
            { type: 'term', title: 'Microexpression', content: 'An involuntary facial expression that occurs when a person either deliberately or unconsciously conceals a felt emotion. They flash across the face in under 1/5th of a second before being suppressed.' },
            { type: 'explain', title: 'The 7 Universal Expressions', content: 'Happiness, Sadness, Contempt, Disgust, Anger, Fear, Surprise. These are hard-coded into human biology. They appear identically on the face of a Wall Street banker and a tribesman in Papua New Guinea.' },
            { type: 'term', title: 'Contempt', content: 'The single most dangerous microexpression in a relationship or negotiation. It is unilateral — it occurs in only ONE side of the face (a slight one-sided lip pull). It signals a fundamental belief that the other person is beneath you. It predicts relationship failure with 93% accuracy according to Gottman\'s research.' },
            { type: 'explain', title: 'How to See Them', content: 'Microexpressions are too fast to catch consciously in real-time without training. The key is to watch videos of people being interviewed on high-stakes topics (e.g., politicians being asked about scandals) and practice pausing at the exact moments of response.' },
            { type: 'quote', quote: '"The face is a picture of the mind with the eyes as its interpreter." — Marcus Tullius Cicero' },
            { type: 'explain', title: 'The Steepled Question Technique', content: 'To deliberately trigger a microexpression: ask a question that directly threatens their status, finances, or relationships while watching their face at the precise millisecond you finish speaking. The truth flashes before the controlled response can load.' },
            { type: 'realworld', title: 'Application: The Practice Protocol', content: 'Watch one political press conference this week with the sound off. Focus only on the face. Write down every time you see a microexpression that contradicts the verbal narrative being performed.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'Which microexpression predicts relationship failure with 93% accuracy?', options: [{text: 'Sadness', isCorrect: false}, {text: 'Contempt', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's1_l30_iq', domain: 'iq', emoji: '🧠', title: 'Second-Order Thinking', duration: '14 min',
        slides: [
            { type: 'intro', title: 'The Chess Player\'s Mind', content: 'First-order thinking asks: "What will happen?" Second-order thinking asks: "What will happen AFTER what will happen?" Amateurs play the board in front of them. Masters play the board 5 moves ahead.' },
            { type: 'term', title: 'First-Order Thinking', content: 'Asking "And then what?" only once. Seeing the immediate, obvious consequence of an action. This is the cognitive level of 90% of the population.' },
            { type: 'term', title: 'Second-Order Thinking', content: 'Asking "And then what?" repeatedly until you reach the terminal consequence. Tracing the full chain of causality. This is the cognitive level of elite strategists, investors, and psychological architects.' },
            { type: 'explain', title: 'The Cobra Effect', content: 'The British government in colonial India offered a bounty for every dead cobra to reduce the cobra population. The result? Entrepreneurs began breeding cobras to collect the bounty, massively INCREASING the cobra population. First-order thinking created the opposite of the intended outcome.' },
            { type: 'quote', quote: '"It is not enough to think about difficult problems one way. You need to think about them forwards and backwards." — Charlie Munger' },
            { type: 'explain', title: 'The Hannibal Standard', content: 'Hannibal Lecter never acts impulsively. Every interaction is a move in a game that unfolds over months or years. He has already traced every possible chain of consequence before the opening move is made.' },
            { type: 'explain', title: 'Building the Habit', content: 'Take any decision you are currently facing. Write out the first-order outcome. Then ask "And then what?" at least 3 more times, mapping out the cascade. Examine which downstream consequences you had not previously considered.' },
            { type: 'realworld', title: 'Application: The Decision Audit', content: 'Before any significant decision today, spend 10 minutes mapping the second and third-order consequences. Ask: "If this works, what does that make possible? If it fails, what does that make inevitable?"' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What is the key question that differentiates second-order thinking from first-order thinking?', options: [{text: '"What should I do?"', isCorrect: false}, {text: '"And then what?" — asked repeatedly until the terminal consequence is reached.', isCorrect: true}] }
            ]}
        ]
    }
];

window.STAGE1_LESSONS = STAGE1_LESSONS;
