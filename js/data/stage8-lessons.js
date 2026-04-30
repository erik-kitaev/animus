const STAGE8_LESSONS = [
    {
        id: 's8_l1_criminal', domain: 'criminal', emoji: '👥', title: 'The Shadow Self', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Stage 8: The Shadow', content: 'You have mastered social presence. Now, you must master its opposite: Total Invisibility.' },
            { type: 'explain', title: 'The Psychological Void', content: 'The Shadow is the ability to move through systems without leaving a trace. It requires removing your ego. Most people fail because they *want* to be seen and recognized. The Shadow only wants to be effective.' },
            { type: 'realworld', title: 'Application', content: 'Practice doing a "High-Value Favor" for someone anonymously. No one can ever know it was you. This exercises the "Ego-Less Utility" required for the Shadow.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary obstacle to becoming "The Shadow"?', options: [{text: 'Lack of technology.', isCorrect: false}, {text: 'The human ego\'s desire for recognition.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l2_criminal', domain: 'criminal', emoji: '🎭', title: 'Deep Cover Identities', duration: '12 min',
        slides: [
            { type: 'intro', title: 'Building the Legend', content: 'To disappear, you don\'t just hide; you become someone else so completely that "You" no longer exist.' },
            { type: 'explain', title: 'The Layers of a Legend', content: 'A true deep-cover identity (a "Legend") has a paper trail, a history, and a physical presence. It isn\'t a mask; it\'s a life. We study the creation of digital and physical "Backstories" that survive scrutiny.' },
            { type: 'realworld', title: 'Application', content: 'Create a "Digital Legend". A social media profile for a person who doesn\'t exist. Give them 3 months of history, interests, and connections. See if you can make it indistinguishable from a real person.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Legend" in the context of deep cover?', options: [{text: 'A famous spy.', isCorrect: false}, {text: 'A fully realized, documented, and practiced secondary identity.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l3_criminal', domain: 'criminal', emoji: '💻', title: 'Digital Ghosting', duration: '11 min',
        slides: [
            { type: 'intro', title: 'Erasing the Footprint', content: 'The Architect knows that in the modern world, your data is your leash.' },
            { type: 'explain', title: 'Data Obfuscation', content: 'Don\'t just delete data; generate "Noise". If you want to hide a trip to Berlin, buy 10 tickets to random cities and never use them. The system can handle deletion; it cannot handle a sea of false positives.' },
            { type: 'realworld', title: 'Application', content: 'Use an "Obfuscator" tool for your search history. Generate 10,000 random searches to drown out your real interests. Become a "Signal" hidden in "Noise".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does "Data Obfuscation" differ from "Data Deletion"?', options: [{text: 'It hides the real signal by surrounding it with massive amounts of false data.', isCorrect: true}, {text: 'It is a more expensive way to delete files.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's8_l4_criminal', domain: 'criminal', emoji: '🕵️', title: 'Counter-Surveillance', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Seeing the Watcher', content: 'You cannot be a Shadow if you do not know who is looking for you.' },
            { type: 'explain', title: 'Detection Routes', content: 'A Detection Route is a path designed specifically to see if you are being followed. 3 right turns in a row. Stopping at a window to see the reflection. If you see the same "Face" twice, you are no longer a Shadow.' },
            { type: 'realworld', title: 'Application', content: 'Practice a "Detection Route" on your way home. Do not look directly behind you. Use reflections. Master the art of the "Side-Eye".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Detection Route"?', options: [{text: 'A shortcut through the city.', isCorrect: false}, {text: 'A planned path used to identify if you are being surveilled or followed.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l5_mindset', domain: 'mindset', emoji: '🧊', title: 'Emotional Erasure', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Poker Face of Life', content: 'The Shadow has no "Tell". Emotions are signals; to be invisible, you must emit zero signals.' },
            { type: 'explain', title: 'The Controlled Burn', content: 'Feel the emotion, but don\'t let it reach the surface. We use "Micro-Expression Suppression" techniques. The Shadow\'s face is a blank slate onto which others project what they want to see.' },
            { type: 'realworld', title: 'Application', content: 'Next time you receive significant news (good or bad), wait 60 seconds before showing any reaction. Own your internal state.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is Emotional Erasure critical for the Shadow?', options: [{text: 'Because emotions are data points that others use to track and predict your behavior.', isCorrect: true}, {text: 'Because emotions are a sign of weakness.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's8_l6_philosophy', domain: 'philosophy', emoji: '🕸️', title: 'Network Disruption', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Ghost in the Machine', content: 'The Shadow doesn\'t fight systems; they disrupt the connections *within* the system.' },
            { type: 'explain', title: 'The Whisper Campaign', content: 'Seed a system with tiny, conflicting data points. "Person A said X." "Person B heard Y." As the system tries to reconcile the noise, it slows down. The Shadow moves through the friction.' },
            { type: 'realworld', title: 'Application', content: 'In a group project, subtly introduce "Conflicting Priorities". Watch how the system spends all its energy on internal debate rather than external progress.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of Network Disruption?', options: [{text: 'To destroy the system entirely.', isCorrect: false}, {text: 'To create enough internal friction that the system becomes blind to your movements.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l7_criminal', domain: 'criminal', emoji: '🗝️', title: 'Physical Infiltration', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Open Door', content: 'Most "Locked" systems are actually wide open if you have the right "Keys".' },
            { type: 'explain', title: 'Social Engineering Access', content: 'The best way into a building isn\'t through a window; it\'s through the front door with a coffee cup in each hand. People will hold the door for you because you look "Occupied" and "Harmless". This is the Shadow\'s Entry.' },
            { type: 'realworld', title: 'Application', content: 'Try to enter a restricted area (e.g., the staff room of a large store) just by looking like you belong there. Don\'t sneak. Walk with purpose.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Coffee Cup" technique?', options: [{text: 'A way to get free coffee.', isCorrect: false}, {text: 'Using a physical social cue (being busy/helpful) to bypass security through human kindness.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l8_criminal', domain: 'criminal', emoji: '📦', title: 'The "Dead Drop" Logic', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Asymmetric Communication', content: 'The Shadow never meets their connections. Meetings are "Vulnerabilities".' },
            { type: 'explain', title: 'The Logic of the Drop', content: 'Leave information in a neutral, public place. The "Recipient" picks it up later. No one is ever seen together. There is no "Link" to trace.' },
            { type: 'realworld', title: 'Application', content: 'Practice a "Digital Dead Drop". Use a shared, anonymous draft in a webmail account. No email is ever sent; the communication exists only in the "Space between".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is a Dead Drop safer than a meeting?', options: [{text: 'It eliminates the physical and temporal link between two people, making them untraceable as a pair.', isCorrect: true}, {text: 'It is faster.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's8_l9_mindset', domain: 'mindset', emoji: '🌪️', title: 'Chaos Navigation', duration: '11 min',
        slides: [
            { type: 'intro', title: 'The eye of the storm', content: 'When a system crashes, most people panic. The Shadow thrives in the collapse.' },
            { type: 'explain', title: 'The Breakdown Opportunity', content: 'During a crisis, standard operating procedures are abandoned. Security is lax. This is when the Shadow executes their highest-value objectives. While everyone else is "Fixing", you are "Taking".' },
            { type: 'realworld', title: 'Application', content: 'Identify a "Recurring Crisis" in your life or work. What rules are ignored during that time? How can you use that "Rule-Less Space" to your advantage?' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'When is a system most vulnerable to the Shadow?', options: [{text: 'When it is perfectly stable.', isCorrect: false}, {text: 'During a crisis or a breakdown of standard procedures.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l10_criminal', domain: 'criminal', emoji: '🔪', title: 'The Principle of Compartmentalization', duration: '14 min',
        slides: [
            { type: 'intro', title: 'The Fragmented Life', content: 'A single, unified identity is fragile. If one part falls, the whole structure collapses. The Shadow divides their life into hermetically sealed compartments.' },
            { type: 'explain', title: 'Information Silos', content: 'Your work colleagues should know nothing of your personal ambitions. Your personal friends should know nothing of your financial maneuvers. Information is shared strictly on a need-to-know basis.' },
            { type: 'explain', title: 'The Firewall', content: 'When moving between compartments, you change your behavior, your vocabulary, and even your digital devices. If Compartment A is compromised, Compartment B remains completely ignorant and untouched.' },
            { type: 'realworld', title: 'Application', content: 'Audit your social circles. Identify who knows too much about domains they have no business in. Begin a slow, methodical starvation of information to those people.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary benefit of psychological and social compartmentalization?', options: [{text: 'It makes you seem mysterious.', isCorrect: false}, {text: 'It prevents a total systemic collapse if one area of your life is compromised.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l11_perception', domain: 'perception', emoji: '🕶️', title: 'The Gray Man', duration: '11 min',
        slides: [
            { type: 'intro', title: 'Weaponized Mediocrity', content: 'To be invisible, you must become aggressively average. The human brain filters out the mundane to save energy. You want to be filtered out.' },
            { type: 'explain', title: 'Aesthetic Camouflage', content: 'No bright colors, no logos, no high-status signaling, but also no low-status signaling (which draws a different kind of attention). You dress in medium gray, navy, and beige.' },
            { type: 'explain', title: 'Behavioral Camouflage', content: 'You walk at exactly the average speed of the crowd. You look at your phone when everyone else does. You do not make eye contact, but you do not deliberately avoid it either.' },
            { type: 'realworld', title: 'Application', content: 'Go to a busy location. Spend 15 minutes trying to be the least memorable person there. Move exactly with the flow of the crowd. Become a background extra in everyone else\'s movie.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of the "Gray Man" protocol?', options: [{text: 'To avoid triggering the reticular activating system in other people\'s brains, rendering you unmemorable.', isCorrect: true}, {text: 'To save money on expensive clothing.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's8_l12_manipulation', domain: 'manipulation', emoji: '🪤', title: 'The False Flag', duration: '13 min',
        slides: [
            { type: 'intro', title: 'Controlling the Narrative', content: 'Sometimes, you need an event to happen, but you cannot be seen causing it. You must engineer a situation where someone else takes the blame or the credit.' },
            { type: 'explain', title: 'The Proxy Conflict', content: 'Identify two people with latent hostility. Subtly feed each one information that confirms their suspicions about the other. Step back and watch them destroy each other while you remain completely clean.' },
            { type: 'realworld', title: 'Application', content: 'This is a dangerous technique. Use it only defensively. If you are being targeted by an aggressive actor, redirect their aggression toward a larger, more dangerous target in their environment.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "False Flag" operation in social dynamics?', options: [{text: 'Lying about your political beliefs.', isCorrect: false}, {text: 'Engineering a conflict or event while making it appear as though a third party was responsible.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l13_mindset', domain: 'mindset', emoji: '🕳️', title: 'The Tolerance for Isolation', duration: '15 min',
        slides: [
            { type: 'intro', title: 'The Price of the Shadow', content: 'Most people are addicted to external validation. They need to be seen to feel real. The Shadow must be completely comfortable existing in a void.' },
            { type: 'explain', title: 'Solitary Confinement', content: 'To test your reliance on external validation, you must subject yourself to extreme isolation. If you cannot be alone with your own mind for 48 hours, your mind is weak and easily manipulated by the crowd.' },
            { type: 'realworld', title: 'Application', content: 'Spend one entire Saturday completely alone. No phone, no internet, no books, no music. Just you and a notebook. Document the exact moment the panic sets in. That panic is your vulnerability.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why must the Shadow cultivate a high tolerance for isolation?', options: [{text: 'Because the need for social validation makes you predictable and easily manipulated by others.', isCorrect: true}, {text: 'Because people are annoying.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's8_l14_eloquence', domain: 'eloquence', emoji: '🔇', title: 'The Non-Answer', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Verbal Evasion', content: 'When interrogated, a lie is dangerous because it leaves a record. The truth is dangerous because it reveals your position. The Shadow uses the Non-Answer.' },
            { type: 'explain', title: 'The Politician\'s Pivot', content: 'Acknowledge the question, but answer a slightly different, safer question. "Are you going to fire him?" -> "My focus right now is ensuring the entire team has the resources they need to succeed." You sound cooperative while giving absolutely nothing.' },
            { type: 'realworld', title: 'Application', content: 'Practice the Pivot. Have a friend ask you aggressive, personal questions. Reply smoothly with abstract, philosophical answers that completely ignore the premise of their question.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary advantage of a "Non-Answer" over a lie?', options: [{text: 'It is morally superior.', isCorrect: false}, {text: 'A lie can be proven false and used against you; a Non-Answer provides no data to attack.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's8_l15_mindset', domain: 'mindset', emoji: '🌌', title: 'The Stage 8 Final Exam', duration: '15 min',
        slides: [
            { type: 'intro', title: 'Becoming the Void', content: 'You have completed Stage 8. You have mastered the art of the Shadow.' },
            { type: 'explain', title: 'The Invisible Architect', content: 'You can create legends, erase footprints, and move through systems like a ghost. You understand that the highest form of power is the power that no one knows exists.' },
            { type: 'explain', title: 'The Path Forward', content: 'Stage 9: The Monster. We have mastered invisibility; now we master the "Dark Triad". We embrace the predator within to ensure absolute utility. You have been hidden; now you become dangerous.' },
            { type: 'realworld', title: 'Application', content: 'Take a 48-hour "Digital and Social Fast". Disappear completely. No posts, no texts, no presence. When you return, don\'t explain where you were. Let the mystery grow.' },
            { type: 'quiz', title: 'Final Knowledge Check', questions: [
                { text: 'What is the ultimate goal of Stage 8 mastery?', options: [{text: 'To become completely untraceable while maintaining absolute control over your environment.', isCorrect: true}, {text: 'To become a professional spy.', isCorrect: false}] }
            ]}
        ]
    }
];

window.STAGE8_LESSONS = STAGE8_LESSONS;
