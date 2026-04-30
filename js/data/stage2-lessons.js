const STAGE2_LESSONS = [
    {
        id: 's2_l1_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Architect\'s Frame', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Controlling the Narrative', content: 'Stage 2 begins with "Framing". He who controls the frame controls the perception of reality. A frame is the underlying psychological premise of an interaction.' },
            { type: 'explain', title: 'What is a Frame?', content: 'If you are being interviewed for a job, the interviewer holds the "Prize Frame" (they have the job, you want it). Your goal is to shatter their frame and establish your own.' },
            { type: 'explain', title: 'Frame Control Techniques', content: 'To break a frame, use humor, mild defiance, or strategic ignoring. If someone acts overly authoritative, respond with a slight, amused smile. You are communicating: "Your authority is an illusion here."' },
            { type: 'explain', title: 'The Hannibal Application', content: 'Hannibal never operates within someone else\'s frame. Even when incarcerated behind glass, he forces the FBI agents to operate within his psychological frame by withholding information and demanding quid pro quo.' },
            { type: 'realworld', title: 'Application', content: 'Next time someone tries to rush you or force a decision (urgency frame), physically slow down your movements and speech. Take a long pause. You have just taken control of the interaction\'s pacing.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the most effective way to shatter someone\'s "Authority Frame"?', options: [{text: 'Argue with them logically.', isCorrect: false}, {text: 'Respond with mild, detached amusement.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l2_criminal', domain: 'criminal', emoji: '🔍', title: 'The Disorganized Offender', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Chaos and Pathology', content: 'In Stage 1 we studied the Organized mind. Now we dissect the Disorganized mind: impulsive, chaotic, and driven by immediate psychosis.' },
            { type: 'explain', title: 'Profile Characteristics', content: 'The disorganized offender is often socially inadequate, acts under the influence of drugs or severe mental illness, leaves the weapon at the scene, and chooses victims of opportunity.' },
            { type: 'explain', title: 'The Crime Scene', content: 'The scene is messy. There is no attempt to conceal the body. The violence is usually explosive, frantic, and lacks the surgical precision of an organized mind.' },
            { type: 'explain', title: 'The Vulnerability', content: 'They are predictable in their unpredictability. Because they act on raw impulse, their crimes happen close to their comfort zones. They do not follow the news; they retreat into their delusions.' },
            { type: 'realworld', title: 'Application', content: 'When dealing with a highly erratic, emotionally explosive person, do not look for a "master plan". Look for the immediate trigger. Their actions are reactionary, not strategic.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Does a disorganized offender typically bring their own weapon to the scene?', options: [{text: 'Yes, they prepare heavily.', isCorrect: false}, {text: 'No, they usually use weapons of opportunity found at the scene.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l3_philosophy', domain: 'philosophy', emoji: '⚡', title: 'Nietzschean Utility', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Beyond Good and Evil', content: 'To reach the apex of cognitive detachment, one must discard the moral conditioning imposed by the herd.' },
            { type: 'explain', title: 'Master vs Slave Morality', content: 'Slave morality values kindness, humility, and sympathy—traits that benefit the weak. Master morality values pride, strength, and nobility—traits that benefit the strong.' },
            { type: 'explain', title: 'The Will to Power', content: 'The fundamental driving force of all living things is not survival, but the desire to exert one\'s will over their environment. It is the drive to overcome and dominate.' },
            { type: 'explain', title: 'The Architect\'s Application', content: 'You must view morality not as an absolute truth, but as a tool. Adhere to social contracts when they benefit your Will to Power, and discard them when they hinder your architecture.' },
            { type: 'realworld', title: 'Application', content: 'Identify a "moral rule" you follow out of guilt rather than logic. If breaking it harms no one but benefits your long-term goals, systematically desensitize yourself to that guilt.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to Nietzsche, what is the ultimate driving force of humanity?', options: [{text: 'The desire for peace and survival.', isCorrect: false}, {text: 'The Will to Power.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l4_eq', domain: 'eq', emoji: '👁', title: 'The Micro-Expression Map', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Face Never Lies', content: 'A micro-expression is an involuntary facial movement that occurs in 1/25th of a second when a person attempts to conceal an emotion.' },
            { type: 'explain', title: 'The 7 Universal Emotions', content: 'Anger, Fear, Disgust, Happiness, Sadness, Surprise, and Contempt. These are biologically hardwired and identical across all human cultures.' },
            { type: 'explain', title: 'Contempt: The Most Dangerous Emotion', content: 'Contempt is the only asymmetrical emotion. It manifests as a unilateral lip raise (a half-smirk). It signals moral superiority and is the #1 predictor of relationship failure.' },
            { type: 'explain', title: 'Spotting Fear', content: 'Eyebrows raised and pulled together, upper eyelids raised, lower eyelids tensed. Lips stretched horizontally back toward the ears.' },
            { type: 'realworld', title: 'Application', content: 'In your next conversation, ignore the words. Focus entirely on the muscles around the eyes and the corners of the mouth. Watch the rapid flashes of emotion before the social mask returns.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which emotion is uniquely asymmetrical on the human face?', options: [{text: 'Disgust', isCorrect: false}, {text: 'Contempt', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l5_mindset', domain: 'mindset', emoji: '🧊', title: 'Cognitive Dissonance Weaponization', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Fracturing the Mind', content: 'Cognitive dissonance is the psychological stress experienced by a person holding two or more contradictory beliefs. You can use this to break their resolve.' },
            { type: 'explain', title: 'The Mechanism', content: 'The human brain cannot tolerate dissonance. When faced with a contradiction, the brain will instantly rationalize, ignore, or alter memories to restore harmony.' },
            { type: 'explain', title: 'Weaponizing the Ben Franklin Effect', content: 'If you force an enemy to do you a small favor, their brain experiences dissonance: "I hate this person, but I just helped them." To resolve the stress, the brain concludes: "I must actually like this person."' },
            { type: 'explain', title: 'The Double Bind', content: 'Give a target an illusion of choice where both outcomes serve your architecture. "Would you prefer to do this difficult task now, or wait until tomorrow when the deadline is tighter?"' },
            { type: 'realworld', title: 'Application', content: 'Identify a person who dislikes you. Ask them for a tiny, harmless favor (e.g., to borrow a pen or ask for a simple recommendation). Watch their brain rationalize a friendlier attitude toward you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the brain typically respond to severe cognitive dissonance?', options: [{text: 'It accepts the contradiction logically.', isCorrect: false}, {text: 'It forces rationalization or alters beliefs to eliminate the psychological stress.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l6_manipulation', domain: 'manipulation', emoji: '♟️', title: 'Gaslighting Mechanics', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Eroding Reality', content: 'Gaslighting is not just lying; it is a systematic psychological attack designed to make the victim question their own memory, perception, and sanity.' },
            { type: 'explain', title: 'The Slow Burn', content: 'It starts small. Moving objects, denying minor conversations. "I never said that, you must have misheard me." The goal is to establish a pattern of memory failure.' },
            { type: 'explain', title: 'Isolation and Escalation', content: 'Once the victim doubts themselves, the manipulator isolates them from external validation. "Your friends are lying to you. I am the only one who tells you the truth."' },
            { type: 'explain', title: 'The Hannibal Application', content: 'Lecter gaslights Will Graham by exploiting his encephalitis, feeding him false realities, and convincing him that he (Will) is the killer, fracturing his sanity entirely.' },
            { type: 'realworld', title: 'Application', content: 'Defense: If you suspect gaslighting, document everything. Keep a private journal. Do not rely on your memory if someone is actively trying to rewrite it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the ultimate goal of gaslighting?', options: [{text: 'To make the victim question their own perception of reality.', isCorrect: true}, {text: 'To win a logical argument.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l7_iq', domain: 'iq', emoji: '🧠', title: 'The Socratic Trap', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Leading to the Gallows', content: 'Never tell someone they are wrong. Instead, ask them questions that force them to prove themselves wrong.' },
            { type: 'explain', title: 'Socratic Questioning', content: 'Feign ignorance. Ask innocent, logical questions that dismantle their argument piece by piece. "If X is true, then how does Y work?"' },
            { type: 'explain', title: 'The Illusion of Discovery', content: 'When a person realizes their error on their own, they change their mind. If you point it out to them, they will fight you defensively.' },
            { type: 'realworld', title: 'Application', content: 'When someone presents a terrible idea, do not reject it. Say, "That is interesting. Walk me through how we handle [obvious flaw]?" Let them discover the impossibility.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is Socratic questioning more effective than direct confrontation?', options: [{text: 'It avoids defensive reactions and allows the target to "discover" their own error.', isCorrect: true}, {text: 'It proves you are smarter than them.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l8_cultural', domain: 'cultural', emoji: '🎭', title: 'The Bystander Apathy', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Illusion of the Crowd', content: 'The greater the number of bystanders, the less likely any single person is to intervene or take responsibility.' },
            { type: 'explain', title: 'Diffusion of Responsibility', content: 'In a crowd, everyone assumes someone else will handle the crisis. The psychological weight of action is divided by the number of people present.' },
            { type: 'explain', title: 'Bypassing the Effect', content: 'If you are in danger, do not yell "Help!" Point at a specific person and say, "You, in the red shirt, call the police." Force the responsibility onto an individual.' },
            { type: 'realworld', title: 'Application', content: 'In business emails, never send a task to a group asking "Can someone handle this?" Assign the task to one specific person to avoid diffusion of responsibility.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you overcome Bystander Apathy in an emergency?', options: [{text: 'Yell as loud as possible to the whole crowd.', isCorrect: false}, {text: 'Single out one specific person and give them a direct command.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l9_mindset', domain: 'mindset', emoji: '🧊', title: 'Emotional Suppression', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Dead Hand', content: 'True power is the ability to feel absolute rage or terror and display absolutely nothing.' },
            { type: 'explain', title: 'The Cortisol Spike', content: 'When provoked, cortisol and adrenaline flood your system. Your heart rate spikes. You lose access to the prefrontal cortex (logic) and rely on the amygdala (reaction).' },
            { type: 'explain', title: 'Box Breathing', content: 'To regain control, inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. This mathematically forces your heart rate down and re-engages your prefrontal cortex.' },
            { type: 'realworld', title: 'Application', content: 'Next time you are insulted, do not react. Perform one cycle of Box Breathing. Let the silence hang. Respond only when your heart rate is at resting pace.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the biological purpose of Box Breathing?', options: [{text: 'To lower heart rate and re-engage the prefrontal cortex.', isCorrect: true}, {text: 'To increase oxygen to the muscles for a fight.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l10_criminal', domain: 'criminal', emoji: '🔍', title: 'The Psychopath\'s Mask', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Mask of Sanity', content: 'Psychopaths do not appear crazy. They appear charming, rational, and overly sane.' },
            { type: 'explain', title: 'Superficial Charm', content: 'They study human emotion mathematically. They know when to smile, when to act sad, and what words trigger sympathy, but they feel none of it.' },
            { type: 'explain', title: 'The Glib Nature', content: 'Their speech is often extremely fluent and entertaining. They are immune to social anxiety because they do not care about the opinions of others.' },
            { type: 'realworld', title: 'Application', content: 'Beware the person who is instantly "too perfect." True human connection involves awkwardness and vulnerability. Absolute, flawless charm is often a manufactured mask.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why are psychopaths often highly charming?', options: [{text: 'Because they are deeply empathetic.', isCorrect: false}, {text: 'Because they study human emotion intellectually and mimic it flawlessly without feeling it.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l11_eloquence', domain: 'eloquence', emoji: '✍️', title: 'Neurolinguistic Anchoring', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Pavlovian Speech', content: 'You can train humans to associate specific physical gestures or tones of voice with specific emotional states.' },
            { type: 'explain', title: 'The Setup', content: 'Wait until the target is experiencing a strong, genuine emotion (e.g., they are laughing hard). At the peak of the emotion, perform a specific, unique gesture (like touching your watch or a specific hand motion).' },
            { type: 'explain', title: 'The Trigger', content: 'Repeat this pairing several times. Eventually, their brain will link your gesture to the feeling of happiness. Later, when you need them to be agreeable, simply perform the gesture to trigger the subconscious emotion.' },
            { type: 'realworld', title: 'Application', content: 'When praising a subordinate, always stand in a specific spot or use a specific hand gesture. Use that same anchor later when you need to soften the blow of a difficult task.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of Neurolinguistic Anchoring?', options: [{text: 'To link a specific physical trigger to a specific emotional state in the target\'s brain.', isCorrect: true}, {text: 'To confuse the target using large vocabulary.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l12_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Reciprocity Trap', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Debt of Kindness', content: 'Humans are biologically programmed to feel extreme psychological discomfort when they owe someone a favor.' },
            { type: 'explain', title: 'Unsolicited Gifts', content: 'Give a target something they did not ask for. A coffee, a piece of vital information. They will instantly feel a subconscious debt.' },
            { type: 'explain', title: 'The Exploitation', content: 'Once the debt is established, you can extract a favor vastly disproportionate to the original gift. They will agree just to relieve the psychological burden of owing you.' },
            { type: 'realworld', title: 'Application', content: 'Do a small, highly visible favor for a rival colleague. When you later need them to back down on a crucial project point, call in the debt.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why do unsolicited gifts create leverage?', options: [{text: 'Because people like free things.', isCorrect: false}, {text: 'Because they trigger an uncomfortable psychological obligation to repay the debt.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l13_iq', domain: 'iq', emoji: '🧠', title: 'The Availability Heuristic', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Illusion of Frequency', content: 'People judge the probability of an event based on how easily examples come to mind.' },
            { type: 'explain', title: 'Media Manipulation', content: 'Shark attacks are incredibly rare, but because they are heavily reported, people fear the ocean. Car crashes are common, but ignored.' },
            { type: 'explain', title: 'Weaponizing Availability', content: 'If you want to make someone fear a specific outcome, do not use statistics. Tell them three vivid, highly emotional stories about that outcome. Their brain will automatically assume it is highly probable.' },
            { type: 'realworld', title: 'Application', content: 'In a pitch, don\'t just give data on why the competitor will fail. Tell a vivid, detailed story of a recent, famous failure similar to theirs. It will anchor in their mind.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to the Availability Heuristic, how do people judge risk?', options: [{text: 'By analyzing statistical data.', isCorrect: false}, {text: 'By how easily a vivid example comes to memory.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l14_philosophy', domain: 'philosophy', emoji: '⚡', title: 'The Noble Lie', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Plato\'s Republic', content: 'Plato argued that a society sometimes requires a "Noble Lie"—a myth or untruth propagated by the elite to maintain social harmony.' },
            { type: 'explain', title: 'The Architecture of Belief', content: 'Not everyone is equipped to handle absolute, brutal reality. The Architect must sometimes construct a comforting illusion to keep the herd functioning efficiently.' },
            { type: 'explain', title: 'Ethical Manipulation', content: 'The Noble Lie is not told out of malice, but out of necessity. It is the lie a commander tells his soldiers to give them the courage to survive an impossible battle.' },
            { type: 'realworld', title: 'Application', content: 'If a project is failing but panic will guarantee its destruction, project absolute confidence. Your Noble Lie of certainty may be the very thing that prevents collapse.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the purpose of Plato\'s "Noble Lie"?', options: [{text: 'To maintain social harmony and operational efficiency when the truth would cause panic.', isCorrect: true}, {text: 'To enrich the elite at the expense of the poor.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l15_eq', domain: 'eq', emoji: '👁', title: 'Cold Reading Fundamentals', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Illusion of Omniscience', content: 'Cold reading is the technique used by psychics and profilers to gather massive amounts of information from a stranger while appearing to already know it.' },
            { type: 'explain', title: 'The Barnum Statement', content: 'Make statements that seem highly personal but apply to almost everyone. "You project a confident exterior, but inside, you often worry if you are making the right choices."' },
            { type: 'explain', title: 'Shotgunning', content: 'Throw out a wide array of vague statements quickly. Watch their micro-expressions. When they react to one, drill down on it and discard the rest.' },
            { type: 'explain', title: 'The Rainbow Ruse', content: 'Assign two opposite traits simultaneously. "You can be very introverted and cautious, but when you are with the right people, you are the life of the party." It is impossible to be wrong.' },
            { type: 'realworld', title: 'Application', content: 'Use Barnum statements to instantly build deep rapport with strangers. They will feel that you "understand their soul" within minutes of meeting them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a Barnum statement?', options: [{text: 'A highly specific, factual observation.', isCorrect: false}, {text: 'A statement that seems highly personal but is vague enough to apply to almost anyone.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l16_cultural', domain: 'cultural', emoji: '🎭', title: 'The Horns Effect', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Reverse Halo', content: 'The dark mirror to the Halo Effect. If a person exhibits one negative trait, the brain automatically assigns them multiple other negative traits.' },
            { type: 'explain', title: 'Stigmatization', content: 'If someone is frequently late, people will subconsciously assume they are also dishonest, lazy, and less intelligent, even if those traits are unrelated.' },
            { type: 'explain', title: 'Weaponized Stigma', content: 'To destroy an opponent\'s reputation, do not attack their core competency. Highlight one highly visible, unrelated negative trait (e.g., they are messy). The Horns Effect will do the rest of the damage.' },
            { type: 'realworld', title: 'Application', content: 'Ensure your own "front stage" behavior is flawless. A single visible flaw (like a stained shirt) can trigger the Horns Effect and ruin a brilliant pitch.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Horns Effect work?', options: [{text: 'One negative trait causes people to assume other unrelated negative traits.', isCorrect: true}, {text: 'People become aggressive when angry.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l17_criminal', domain: 'criminal', emoji: '🔍', title: 'The False Confession', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Breaking the Will', content: 'How interrogators force innocent people to admit to crimes they did not commit.' },
            { type: 'explain', title: 'The Reid Technique', content: 'Isolate the target. Project absolute certainty of their guilt. Refuse all denials. Offer a sympathetic out ("I know you didn\'t mean to do it").' },
            { type: 'explain', title: 'Mental Exhaustion', content: 'When deprived of sleep and subjected to relentless cognitive load, the brain will agree to anything simply to escape the immediate stressor of the room.' },
            { type: 'realworld', title: 'Application', content: 'Defense: If you are ever interrogated (even in an aggressive corporate setting), invoke silence. Do not engage in the psychological game. The moment you argue, they have control of the frame.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why do innocent people give false confessions?', options: [{text: 'Because they feel guilty about other things.', isCorrect: false}, {text: 'Because of extreme psychological pressure, isolation, and cognitive exhaustion.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l18_manipulation', domain: 'manipulation', emoji: '♟️', title: 'Strategic Incompetence', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Weaponized Stupidity', content: 'Pretending to be incompetent at a specific task so that you are never asked to do it again.' },
            { type: 'explain', title: 'The Execution', content: 'Do not refuse the task. Accept it enthusiastically, but perform it so poorly, with so many questions, that it becomes easier for the other person to just do it themselves.' },
            { type: 'explain', title: 'The Danger', content: 'You must only use this on low-value tasks. Never use it on tasks related to your core value or reputation.' },
            { type: 'realworld', title: 'Application', content: 'If assigned annoying administrative paperwork outside your scope, fill it out incorrectly three times in a row while acting incredibly apologetic. You will be removed from the rotation.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of Strategic Incompetence?', options: [{text: 'To get out of low-value work by doing it so poorly that others do it for you.', isCorrect: true}, {text: 'To hide your true IQ from your enemies.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l19_iq', domain: 'iq', emoji: '🧠', title: 'Syllogistic Logic Puzzles', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Bones of Deduction', content: 'A syllogism is a logical argument that applies deductive reasoning to arrive at a conclusion based on two or more propositions.' },
            { type: 'explain', title: 'The Structure', content: 'Major premise: All A are B. Minor premise: C is A. Conclusion: Therefore, C is B.' },
            { type: 'explain', title: 'Spotting Fallacies', content: 'All dogs are animals. All cats are animals. Therefore, all dogs are cats. (Undistributed Middle Fallacy). Recognizing these structural errors is crucial to dismantling bad arguments.' },
            { type: 'realworld', title: 'Application', content: 'When a politician or rival makes an emotional argument, strip away the adjectives and format it as a strict A=B, B=C syllogism. The logical fallacy will immediately become glaringly obvious.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary benefit of converting an argument into a syllogism?', options: [{text: 'It makes you sound smarter.', isCorrect: false}, {text: 'It strips away emotion and exposes structural logical fallacies.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l20_mindset', domain: 'mindset', emoji: '🧊', title: 'The Law of Detachment', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Desire Without Need', content: 'To acquire anything in the physical universe, you must relinquish your attachment to it.' },
            { type: 'explain', title: 'The Paradox of Need', content: 'Desperation emits a psychological frequency of weakness. If you *need* the deal to close, the other party will sense it and withhold it or raise the price.' },
            { type: 'explain', title: 'True Power', content: 'True power in any negotiation goes to the person who is most willing to walk away. You must deeply internalize that you will be fine without the outcome.' },
            { type: 'realworld', title: 'Application', content: 'Before walking into a high-stakes interview, explicitly write down 3 reasons why it would actually be a *good* thing if you didn\'t get the job. Enter the room detached.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Who holds the most power in a negotiation?', options: [{text: 'The person with the most money.', isCorrect: false}, {text: 'The person who is most willing to walk away.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l21_eloquence', domain: 'eloquence', emoji: '✍️', title: 'Conversational Pacing', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Rhythmic Control', content: 'Speech is music. The tempo dictates the emotional state of the listener.' },
            { type: 'explain', title: 'Fast Pacing', content: 'Speaking quickly elevates heart rate, creates urgency, and bypasses logical filters. It is used to generate excitement or force a rapid decision.' },
            { type: 'explain', title: 'Slow Pacing', content: 'Speaking very slowly commands absolute authority. It forces the listener to hang on your next word. It is used to deliver threats, profound truths, or commands.' },
            { type: 'realworld', title: 'Application', content: 'To establish dominance in a chaotic meeting, do not yell over the noise. Wait for a lull, then speak at 50% of your normal speed. The room will naturally quiet down to hear you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the psychological effect of speaking very slowly?', options: [{text: 'It puts people to sleep.', isCorrect: false}, {text: 'It commands authority and forces listeners to hang on every word.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l22_cultural', domain: 'cultural', emoji: '🎭', title: 'The Door-in-the-Face Technique', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Rejection as a Setup', content: 'Using the human desire for compromise against them.' },
            { type: 'explain', title: 'The Mechanism', content: 'Make an extreme request that you know will be rejected. Immediately follow up with a much smaller, more reasonable request (the one you actually wanted).' },
            { type: 'explain', title: 'Guilt and Concession', content: 'When the target refuses the first request, they feel a slight pang of guilt. When you immediately "compromise" and ask for less, they feel socially obligated to match your compromise and say yes.' },
            { type: 'realworld', title: 'Application', content: 'Ask your friend to help you move out of your apartment all weekend. When they say no, ask: "Okay, could you just help me move the couch on Saturday morning?" They will say yes.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why does the Door-in-the-Face technique work?', options: [{text: 'Because it relies on the target feeling a social obligation to reciprocate your "compromise".', isCorrect: true}, {text: 'Because people like saying no.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l23_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Foot-in-the-Door Technique', duration: '5 min',
        slides: [
            { type: 'intro', title: 'Incremental Compliance', content: 'The exact opposite of Door-in-the-Face. Used for long-term behavioral shifting.' },
            { type: 'explain', title: 'The Mechanism', content: 'Get the target to agree to a trivial, completely harmless request. Once they comply, wait, then ask for a slightly larger request. Continue escalating.' },
            { type: 'explain', title: 'Self-Perception Shift', content: 'Once someone says yes to you once, they unconsciously alter their self-image to view themselves as "the type of person who helps you." To remain consistent with that identity, they must keep saying yes.' },
            { type: 'realworld', title: 'Application', content: 'Need a massive favor from a stranger? First ask them for the time. Then ask them for directions. Then ask to borrow their phone. Escalation builds rapid compliance.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What psychological drive makes the Foot-in-the-Door technique work?', options: [{text: 'The desire to maintain a consistent self-image after the initial compliance.', isCorrect: true}, {text: 'Fear of punishment.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l24_philosophy', domain: 'philosophy', emoji: '⚡', title: 'Machiavelli: The Lion and the Fox', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Dual Nature', content: 'A ruler must know how to fight by two methods: by law (human) and by force (beast).' },
            { type: 'explain', title: 'The Fox', content: 'The Fox is cunning. It can recognize traps, use deception, and maneuver politically. But the Fox cannot fight off wolves.' },
            { type: 'explain', title: 'The Lion', content: 'The Lion is raw, terrifying power. It can frighten off wolves and crush opposition. But the Lion cannot recognize traps.' },
            { type: 'realworld', title: 'Application', content: 'You must be both. Use the cunning of the Fox to navigate office politics and identify manipulation. But possess the raw aggression of the Lion to ruthlessly execute when trapped.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to Machiavelli, why must you be both the Lion and the Fox?', options: [{text: 'To appeal to different voter demographics.', isCorrect: false}, {text: 'Because the Lion cannot spot traps, and the Fox cannot fight wolves.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l25_criminal', domain: 'criminal', emoji: '🔍', title: 'The Dark Tetrad', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Evolution of Darkness', content: 'Beyond the Dark Triad lies the Dark Tetrad: the addition of Everyday Sadism.' },
            { type: 'explain', title: 'Sadism Defined', content: 'While Machiavellians manipulate for gain, and Psychopaths act purely on impulse, the Sadist derives direct, intrinsic pleasure from inflicting pain or humiliation on others.' },
            { type: 'explain', title: 'The Trolls', content: 'Everyday sadism is rampant on the internet. Cyberbullying and trolling are the modern playgrounds for sub-clinical sadists who seek the dopamine hit of causing distress.' },
            { type: 'realworld', title: 'Application', content: 'Never try to reason with or negotiate with a Sadist. They do not want a solution; they want your reaction. The only defense is absolute, unyielding indifference. Starve them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What trait distinguishes the Dark Tetrad from the Dark Triad?', options: [{text: 'Sadism (deriving pleasure from inflicting pain).', isCorrect: true}, {text: 'High intelligence.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l26_mindset', domain: 'mindset', emoji: '🧊', title: 'The 40% Rule', duration: '6 min',
        slides: [
            { type: 'intro', title: 'Beyond the Limit', content: 'David Goggins and SEAL training teach that when your mind tells you that you are finished, you are only at 40% of your actual capability.' },
            { type: 'explain', title: 'The Governor', content: 'The brain has a "governor" designed to keep you safe and comfortable. It triggers pain and exhaustion signals long before you are in actual danger to prevent you from overexerting.' },
            { type: 'explain', title: 'Overriding the System', content: 'To access the remaining 60%, you must recognize the signal for what it is: a lie. By continuing through the pain, you gradually push back the governor and expand your operational capacity.' },
            { type: 'realworld', title: 'Application', content: 'Next time you want to stop during a workout or a difficult mental task, do exactly 40% more of what you have already done. Prove to your brain that its limit is a suggestion.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to the 40% Rule, what is the purpose of physical/mental exhaustion signals?', options: [{text: 'To tell you that you are about to die.', isCorrect: false}, {text: 'A protective mechanism (the "governor") to keep you in your comfort zone.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l27_iq', domain: 'iq', emoji: '🧠', title: 'Bayesian Updating', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Probabilistic Thinking', content: 'Never be 100% sure of anything. Instead, assign probabilities to your beliefs and update them as new data arrives.' },
            { type: 'explain', title: 'The Mechanism', content: 'Start with a "prior" (your current belief). When you encounter new evidence, adjust your belief accordingly. If the evidence is strong, move the probability significantly. If weak, move it slightly.' },
            { type: 'explain', title: 'Avoiding Dogma', content: 'The Bayesian mind is immune to "being wrong" because it never claims to be "right"—only "likely." This allows for extreme flexibility in shifting strategy as environments change.' },
            { type: 'realworld', title: 'Application', content: 'Estimate the probability that your current main project will succeed. Now, search for one piece of negative data about it. Update your probability. Do this weekly.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is "Bayesian Updating"?', options: [{text: 'The process of adjusting the probability of a belief based on new evidence.', isCorrect: true}, {text: 'A software update for your computer.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l28_eloquence', domain: 'eloquence', emoji: '✍️', title: 'The Pause for Effect', duration: '5 min',
        slides: [
            { type: 'intro', title: 'The Weight of Silence', content: 'Silence is the most underutilized tool in persuasion. It creates tension that the other person will feel desperate to fill.' },
            { type: 'explain', title: 'The Tactical Silence', content: 'After asking a difficult question, or making a bold claim, stop talking. Do not explain. Do not justify. Simply look the person in the eyes.' },
            { type: 'explain', title: 'The Yield', content: 'The longer the silence lasts, the more the other person feels the need to speak. In their discomfort, they will often over-explain, reveal secrets, or make concessions just to break the tension.' },
            { type: 'realworld', title: 'Application', content: 'In your next negotiation, after they make an offer, wait exactly 5 seconds before responding. Watch them start to doubt their own price.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is silence effective in a negotiation?', options: [{text: 'It makes people uncomfortable, often causing them to speak prematurely and reveal more than they intended.', isCorrect: true}, {text: 'It shows you have nothing to say.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's2_l29_criminal', domain: 'criminal', emoji: '🔍', title: 'The Victimology Profile', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Why This Victim?', content: 'In profiling, understanding why a specific victim was chosen is the fastest way to understand the offender\'s needs and proximity.' },
            { type: 'explain', title: 'High-Risk vs Low-Risk', content: 'Victim risk is the probability of being targeted. A prostitute (high-risk) vs a wealthy recluse (low-risk). If a low-risk victim is killed, the offender likely had a personal relationship or spent massive resources to reach them.' },
            { type: 'explain', title: 'The Selection Process', content: 'Was the victim chosen for their accessibility, their vulnerability, or their symbolic value? The answer defines the offender\'s psychological "Signature".' },
            { type: 'realworld', title: 'Application', content: 'Assess your own "Target Profile". In what areas are you "high-risk" for social or professional manipulation? Close those vulnerabilities.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does it imply if a "low-risk" victim is targeted?', options: [{text: 'The offender is likely disorganized.', isCorrect: false}, {text: 'The offender likely has a personal connection to the victim or is highly motivated and organized.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's2_l30_manipulation', domain: 'manipulation', emoji: '♟️', title: 'The Scarcity Principle', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Value of Less', content: 'Humans assign significantly higher value to things they perceive as limited or becoming unavailable.' },
            { type: 'explain', title: 'Loss Aversion', content: 'The fear of losing out is a much stronger motivator than the desire for gain. We don\'t want the item because it is good; we want it because we might not be able to get it later.' },
            { type: 'explain', title: 'Artificial Scarcity', content: 'Limiting access, creating deadlines, or implying high demand from others. "I have two other people interested in this, but I wanted to check with you first."' },
            { type: 'realworld', title: 'Application', content: 'When offering your services, never be "available whenever". Give specific, limited windows of time. Your time is a scarce resource; treat it as such.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why does scarcity increase desire?', options: [{text: 'Because people are greedy.', isCorrect: false}, {text: 'Because it triggers "Loss Aversion"—the fear that an opportunity will vanish.', isCorrect: true}] }
            ]}
        ]
    }
];

window.STAGE2_LESSONS = STAGE2_LESSONS;
