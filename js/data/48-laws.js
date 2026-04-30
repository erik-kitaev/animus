const LAWS_48 = [
    {
        id: 'law_1', domain: 'manipulation', emoji: '👑', title: 'Law 1: Never Outshine the Master', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Ego Trap', content: 'Always make those above you feel comfortably superior. In your desire to please or impress them, do not go too far in displaying your talents or you might accomplish the opposite – inspire fear and insecurity.' },
            { type: 'term', title: 'The Master', content: 'Anyone who holds power over your current trajectory. A boss, a mentor, an investor, or a social leader.' },
            { type: 'explain', title: 'The Mechanism of Resentment', content: 'All masters want to appear more brilliant than other people. If you display a genius that eclipses theirs, you instantly become a threat. They will quietly destroy you to protect their ego.' },
            { type: 'quote', quote: '"It is a sign of great wisdom to know when to play the fool." — Baltasar Gracián' },
            { type: 'realworld', title: 'Application', content: 'If you have a brilliant idea at work, do not present it as solely your own. Present it as an evolution of something the master said previously. Attribute the core genesis of the idea to them.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What happens when you clearly demonstrate that you are smarter than your boss?', options: [{text: 'They promote you.', isCorrect: false}, {text: 'They become insecure and seek to eliminate you.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_2', domain: 'manipulation', emoji: '🐍', title: 'Law 2: Never Put Too Much Trust in Friends', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Danger of Familiarity', content: 'Learn how to use enemies. Friends will quickly betray you, for they are easily aroused to envy. They also become spoiled and tyrannical.' },
            { type: 'term', title: 'The Veil of Friendship', content: 'The illusion that affection overrides self-interest. It does not.' },
            { type: 'explain', title: 'The Problem with Friends', content: 'You rarely know your friends completely. When you hire them, the dynamic shifts. If you critique their work, they take it personally. If you promote them, others feel envy.' },
            { type: 'quote', quote: '"Lord, protect me from my friends; I can take care of my enemies." — Voltaire' },
            { type: 'explain', title: 'The Value of an Enemy', content: 'An enemy expects nothing. If you hire a former enemy, they have everything to prove. They will be more loyal than a friend because they know they are on thin ice.' },
            { type: 'realworld', title: 'Application', content: 'Keep friendships out of your direct line of power. If you need a difficult job done, hire someone competent who has a mild rivalry with you; their desire to prove their worth will guarantee excellent work.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'Why is a former enemy often a better hire than a close friend?', options: [{text: 'Because they have more to prove and expect fewer favors.', isCorrect: true}, {text: 'Because they are naturally more trustworthy.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_3', domain: 'manipulation', emoji: '🎭', title: 'Law 3: Conceal Your Intentions', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Art of the Smokescreen', content: 'Keep people off-balance and in the dark by never revealing the purpose behind your actions.' },
            { type: 'term', title: 'The Decoy Object', content: 'A false goal you loudly declare to distract your opponent from your true objective.' },
            { type: 'explain', title: 'Predictability is Vulnerability', content: 'If your opponent knows exactly what you want, they can easily build a defense against you. If they have no idea what you are doing, they must defend everything at once, exhausting their resources.' },
            { type: 'quote', quote: '"Use false sincerity to cover your tracks. A person who speaks their mind is easy to read." — Robert Greene' },
            { type: 'realworld', title: 'Application', content: 'In a negotiation, passionately argue for a term you actually do not care about (the decoy). Later, "concede" that term in exchange for the term you actually wanted all along.' },
            { type: 'quiz', title: 'Knowledge Check', questions: [
                { text: 'What is the purpose of a Decoy Object?', options: [{text: 'To confuse your opponent so they waste resources defending the wrong target.', isCorrect: true}, {text: 'To build trust by being honest about your secondary goals.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_4', domain: 'eloquence', emoji: '🤐', title: 'Law 4: Always Say Less Than Necessary', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Power of Silence', content: 'When you are trying to impress people with words, the more you say, the more common you appear, and the less in control.' },
            { type: 'explain', title: 'Creating an Aura', content: 'Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish.' },
            { type: 'realworld', title: 'Application', content: 'In meetings, wait until the end to speak. Summarize the room in one or two sentences. You will appear far more intelligent than the person who talked for 30 minutes.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why does saying less make you appear more powerful?', options: [{text: 'It creates an aura of mystery and prevents you from saying something common or foolish.', isCorrect: true}, {text: 'It saves time.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_5', domain: 'cultural', emoji: '🛡️', title: 'Law 5: So Much Depends on Reputation – Guard It with Your Life', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Cornerstone of Power', content: 'Reputation is the cornerstone of power. Through reputation alone you can intimidate and win; once it slips, however, you are vulnerable and will be attacked on all sides.' },
            { type: 'explain', title: 'Weaponizing Reputation', content: 'Establish a reputation for one specific quality (e.g., efficiency, ruthlessness, or honesty). Let that reputation do the work for you before you even enter the room.' },
            { type: 'realworld', title: 'Application', content: 'Identify the one trait you want to be known for. Ruthlessly eliminate any behavior that contradicts that trait. Your reputation is your shadow; make sure it is tall.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What happens when your reputation is damaged?', options: [{text: 'You become vulnerable to attack on all sides.', isCorrect: true}, {text: 'People feel sorry for you.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_6', domain: 'cultural', emoji: '✨', title: 'Law 6: Court Attention at All Cost', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Danger of Invisibility', content: 'Everything is judged by its appearance; what is unseen counts for nothing. Never let yourself get lost in the crowd, or buried in oblivion.' },
            { type: 'explain', title: 'Negative Attention is Better than None', content: 'It is better to be slandered and attacked than ignored. Burn brighter and more mysterious than the people around you.' },
            { type: 'realworld', title: 'Application', content: 'If you are being ignored in your field, create a controversy. Attach your name to a bold, polarizing idea. Be the magnet of attention.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to Law 6, what is the greatest danger to power?', options: [{text: 'Being hated.', isCorrect: false}, {text: 'Being ignored or invisible.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_7', domain: 'manipulation', emoji: '⚙️', title: 'Law 7: Get Others to Do the Work for You, but Always Take the Credit', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Efficient Master', content: 'Use the wisdom, knowledge, and legwork of other people to further your own cause. Not only will such assistance save you valuable energy and time, but it will give you a godlike aura of efficiency.' },
            { type: 'explain', title: 'The Source of Genius', content: 'No one builds anything alone. The "genius" is simply the person who knows how to coordinate the efforts of others and attach their name to the final result.' },
            { type: 'realworld', title: 'Application', content: 'Stop trying to do everything yourself. Find specialists, extract their best ideas, and synthesize them into a "Master Plan" that you present. You are the architect, not the bricklayer.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary benefit of Law 7?', options: [{text: 'It saves you time and energy while making you appear more capable than you are.', isCorrect: true}, {text: 'It helps others get promoted.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_8', domain: 'manipulation', emoji: '🧲', title: 'Law 8: Make Other People Come to You – Use Bait if Necessary', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Advantage of the Ground', content: 'When you force the other person to act, you are the one in control. It is always better to make your opponent come to you, abandoning his own plans in the process.' },
            { type: 'explain', title: 'The Bait', content: 'Lure them with gains—money, information, or prestige. Once they are on your territory, you dictate the terms and the pace.' },
            { type: 'realworld', title: 'Application', content: 'Never chase a client or a rival. Create a situation where they *need* to meet with you. Host the meeting in your office. You have the "Home Field Advantage".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it better to make others come to you?', options: [{text: 'It forces them to abandon their plans and operate on your territory.', isCorrect: true}, {text: 'It saves you money on travel.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_9', domain: 'eloquence', emoji: '🔨', title: 'Law 9: Win Through Your Actions, Never Through Argument', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Futility of Words', content: 'Any momentary triumph you think you have gained through argument is really a Pyrrhic victory: The resentment and ill will you stir up is stronger and lasts longer than any momentary change of opinion.' },
            { type: 'explain', title: 'Demonstrate, Don\'t Explain', content: 'It is much more powerful to get others to agree with you through your actions, without saying a word. Demonstrate your point. People believe what they see, not what they hear.' },
            { type: 'realworld', title: 'Application', content: 'If a colleague disagrees with your strategy, do not argue. Implement a small pilot of your strategy and show the data. The results will silence them more effectively than a thousand words.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is winning an argument often a "Pyrrhic victory"?', options: [{text: 'Because it creates lasting resentment in the person you defeated.', isCorrect: true}, {text: 'Because it takes too much energy.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_10', domain: 'cultural', emoji: '☣️', title: 'Law 10: Infection: Avoid the Unhappy and Unlucky', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Poison of Misfortune', content: 'You can die from someone else’s misery—emotional states are as infectious as diseases. You may feel you are helping the drowning man, but you are only precipitating your own disaster.' },
            { type: 'explain', title: 'The Chronic Loser', content: 'The "unlucky" are often people who attract disaster through their own character. If you associate with them, their chaos will inevitably leak into your life.' },
            { type: 'realworld', title: 'Application', content: 'Audit your social circle. Identify the person who is always in a "crisis" that isn\'t their fault. Distance yourself immediately. Associate only with the successful and the fortunate.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'According to Law 10, how should you treat people who are chronically "unlucky"?', options: [{text: 'Try to help them fix their lives.', isCorrect: false}, {text: 'Avoid them at all costs to prevent their misfortune from infecting your own life.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_11', domain: 'manipulation', emoji: '🔗', title: 'Law 11: Learn to Keep People Dependent on You', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Essential Cog', content: 'To maintain your independence you must always be needed and wanted. The more you are relied on, the more freedom you have.' },
            { type: 'explain', title: 'The Secret Ingredient', content: 'Never teach people enough so that they can do without you. Hold the "Secret Knowledge" or the "Final Step" of a process. You are safe as long as you are indispensable.' },
            { type: 'realworld', title: 'Application', content: 'At work, become the only person who knows how to handle a specific, critical system or client. Your job security becomes absolute.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the key to maintaining your freedom according to Law 11?', options: [{text: 'Being the most independent person in the room.', isCorrect: false}, {text: 'Ensuring that others are dependent on you for their own success and happiness.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_12', domain: 'manipulation', emoji: '🎁', title: 'Law 12: Use Selective Honesty and Generosity to Disarm Your Victim', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Trojan Horse', content: 'One sincere and honest move will overbalance dozens of dishonest ones. Open-hearted gestures of honesty and generosity bring down the guard of even the most suspicious people.' },
            { type: 'explain', title: 'The Gift of Truth', content: 'Tell a small, harmless truth to build trust. Once the target believes you are honest, you can lead them into the trap of your choosing.' },
            { type: 'realworld', title: 'Application', content: 'When meeting a new rival, admit to a minor weakness or a past mistake. They will categorize you as "honest" and "vulnerable", making them blind to your true strength.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the purpose of "Selective Honesty"?', options: [{text: 'To build a false sense of trust that you can later exploit.', isCorrect: true}, {text: 'To become a better person.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_13', domain: 'manipulation', emoji: '🤝', title: 'Law 13: When Asking for Help, Appeal to People’s Self-Interest, Never to Their Mercy or Gratitude', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Reality of Man', content: 'If you need to turn to an ally for help, do not bother to remind him of your past assistance and good deeds. He will find a way to ignore you.' },
            { type: 'explain', title: 'The Leverage of Gain', content: 'Instead, uncover something in your request, or in your alliance with him, that will benefit him, and emphasize it out of all proportion.' },
            { type: 'realworld', title: 'Application', content: 'When asking for a favor, never say "I\'ve done so much for you." Say "If you do this, you will gain X and Y." Self-interest is the only reliable motor of human action.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the most reliable way to get help from someone?', options: [{text: 'Remind them of the favors you did for them in the past.', isCorrect: false}, {text: 'Show them how helping you will directly benefit them.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_14', domain: 'manipulation', emoji: '🕵️', title: 'Law_14: Pose as a Friend, Work as a Spy', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Information is Power', content: 'Knowing about your rival is critical. You can send spies to gather valuable information that will keep you a step ahead. Better still: Play the spy yourself.' },
            { type: 'explain', title: 'The Art of Probing', content: 'In polite social encounters, learn to probe. Ask indirect questions to get people to reveal their weaknesses and intentions. There is no occasion that is not an opportunity for artful spying.' },
            { type: 'realworld', title: 'Application', content: 'In casual conversation, feign ignorance. People love to show off their knowledge to a "student". They will reveal secrets just to appear superior to you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is "posing as a friend" effective for gathering information?', options: [{text: 'It makes people lower their guard and share things they would never tell a rival.', isCorrect: true}, {text: 'It helps you make genuine connections.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_15', domain: 'manipulation', emoji: '🔨', title: 'Law 15: Crush Your Enemy Totally', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Danger of the Ember', content: 'If one ember is left alight, no matter how dimly it smolders, a fire will eventually break out. More is lost through stopping halfway than through total annihilation.' },
            { type: 'explain', title: 'The Resentment of the Defeated', content: 'The enemy will recover, and will seek revenge. Crush him, not only in body but in spirit. He must be left with no hope of a comeback.' },
            { type: 'realworld', title: 'Application', content: 'In a professional rivalry, do not just "win". Ensure your opponent is moved to a different department or company where they can no longer influence your trajectory. Leave no room for retaliation.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why must an enemy be "crushed totally"?', options: [{text: 'Because even a weak enemy can recover and seek revenge if left with any hope or resources.', isCorrect: true}, {text: 'Because it feels good.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_16', domain: 'eloquence', emoji: '⌛', title: 'Law 16: Use Absence to Increase Respect and Honor', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Scarcity of Presence', content: 'Too much circulation makes the price go down: The more you are seen and heard from, the more common you appear.' },
            { type: 'explain', title: 'Withdrawal', content: 'If you are already established in a group, temporary withdrawal from it will make you more talked about, even more admired. You must learn when to leave. Create value through scarcity.' },
            { type: 'realworld', title: 'Application', content: 'In a group chat or office, don\'t reply to everything instantly. Be selectively absent. When you do appear, your presence will carry 10x the weight.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does absence affect your value in a group?', options: [{text: 'It makes you look lazy.', isCorrect: false}, {text: 'It increases your perceived value by creating scarcity and mystery.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_17', domain: 'manipulation', emoji: '🎲', title: 'Law 17: Keep Others in Suspended Terror: Cultivate an Air of Unpredictability', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Trap of Routine', content: 'Humans are creatures of habit with an insatiable need to see familiarity in other people’s actions. Your predictability gives them a sense of control. Turn the tables: Be deliberately unpredictable.' },
            { type: 'explain', title: 'The Strategic Randomness', content: 'Behavior that seems to have no consistency or purpose will keep them off-balance, and they will wear themselves out trying to explain your moves.' },
            { type: 'realworld', title: 'Application', content: 'Occasionally break your own patterns. Take a different route, change your tone suddenly, or make a decision that contradicts your previous "logic". Keep them guessing.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the purpose of being unpredictable?', options: [{text: 'To keep others off-balance and prevent them from gaining a sense of control over you.', isCorrect: true}, {text: 'To avoid being bored.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_18', domain: 'cultural', emoji: '🏰', title: 'Law 18: Do Not Build Fortresses to Protect Yourself – Isolation is Dangerous', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Danger of the Wall', content: 'The world is dangerous and enemies are everywhere — everyone has to protect themselves. A fortress seems the safest. But isolation exposes you to more dangers than it protects you from.' },
            { type: 'explain', title: 'Crowds as a Shield', content: 'Isolation cuts you off from valuable information and makes you a conspicuous target. It is better to circulate among people, find allies, and mingle. You are shielded from your enemies by the crowd.' },
            { type: 'realworld', title: 'Application', content: 'Even if you feel attacked at work, don\'t retreat to your office. Stay in the cafeteria. Mingle in the hallways. Information is your best armor.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is isolation dangerous for someone in power?', options: [{text: 'It cuts you off from information and makes you an easy, visible target.', isCorrect: true}, {text: 'It makes you lonely.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_19', domain: 'eq', emoji: '🎯', title: 'Law 19: Know Who You Are Dealing With – Do Not Offend the Wrong Person', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Varieties of Opponents', content: 'There are many different kinds of people in the world, and you can never assume that everyone will react to your strategies in the same way.' },
            { type: 'explain', title: 'The Arrogant Pride', content: 'Deceive or outmaneuver some people and they will spend the rest of their lives seeking revenge. They are wolves in sheep\'s clothing. Study your mark before you act.' },
            { type: 'realworld', title: 'Application', content: 'Before pulling a power move on someone, research their past. Have they been slighted before? How did they react? Never insult a "Vindictive Narcissist".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary warning of Law 19?', options: [{text: 'Always be polite to everyone.', isCorrect: false}, {text: 'Be extremely careful about who you cross; some people will never forgive or forget.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_20', domain: 'manipulation', emoji: '⚖️', title: 'Law 20: Do Not Commit to Anyone', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Power of Independence', content: 'It is the fool who always rushes to take a side. Do not commit to any side or cause but yourself. By maintaining your independence, you become the master of others.' },
            { type: 'explain', title: 'Playing Both Sides', content: 'When you stay neutral, both sides will court you to join them. You gain power as the "Kingmaker" or the decisive factor while remaining untouched by the conflict.' },
            { type: 'realworld', title: 'Application', content: 'In an office feud, don\'t take a side. Be the helpful mediator for both. When one side wins, you are still their friend. When they lose, you were never their enemy.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the benefit of refusing to commit to a side?', options: [{text: 'You maintain your independence and force others to compete for your favor.', isCorrect: true}, {text: 'You avoid doing work.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_21', domain: 'manipulation', emoji: '🤡', title: 'Law 21: Play a Sucker to Catch a Sucker – Seem Dumber Than Your Mark', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Ego Trap', content: 'No one likes feeling stupider than the next person. The trick, then, is to make your victims feel smart — and not just smart, but smarter than you are.' },
            { type: 'explain', title: 'Disarming Intelligence', content: 'Once they believe they are superior to you, they will never suspect you of having ulterior motives. They will lower their guard, allowing you to manipulate them with ease.' },
            { type: 'realworld', title: 'Application', content: 'When entering a new environment, don\'t show off your IQ. Ask "dumb" questions. Let the experts explain things to you. They will love you for making them feel brilliant, and you will learn all their secrets.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why should you "play a sucker"?', options: [{text: 'To make your mark feel superior and lower their suspicion of your true intentions.', isCorrect: true}, {text: 'Because it is easier than being smart.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_22', domain: 'manipulation', emoji: '🏳️', title: 'Law 22: Use the Surrender Tactic: Transform Weakness into Power', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Power of Giving In', content: 'When you are weaker, never fight for honor’s sake; choose surrender instead. Surrender gives you time to recover, time to torment your conqueror, time to wait for his power to wane.' },
            { type: 'explain', title: 'The Passive Aggressor', content: 'By surrendering, you deny the enemy the satisfaction of a victory. You stay alive to fight another day, often from within their own organization.' },
            { type: 'realworld', title: 'Application', content: 'If a boss is relentlessly attacking your project, don\'t defend it. Say: "You\'re right, I see the flaws now. How would you fix it?" You\'ve just turned your enemy into your consultant.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is surrender sometimes better than fighting?', options: [{text: 'It buys you time and prevents the enemy from crushing you completely.', isCorrect: true}, {text: 'It shows you are a nice person.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_23', domain: 'manipulation', emoji: '✊', title: 'Law 23: Concentrate Your Forces', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Power of Focus', content: 'Conserve your forces and energies by keeping them concentrated at their strongest point. You gain more by finding a rich mine and mining it deeper, than by flitting from one shallow mine to another.' },
            { type: 'explain', title: 'Depth vs Breadth', content: 'Intensity always beats extensivity. Find the one person or the one strategy that yields the most power and commit to it fully. Stop scattering your influence.' },
            { type: 'realworld', title: 'Application', content: 'Identify your 20% of efforts that produce 80% of results. Double down on that 20%. Ignore everything else. Power is a laser, not a floodlight.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does Law 23 suggest regarding your energy and resources?', options: [{text: 'Concentrate them at a single, powerful point for maximum impact.', isCorrect: true}, {text: 'Spread them as widely as possible to cover all bases.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_24', domain: 'cultural', emoji: '🤵', title: 'Law 24: Play the Perfect Courtier', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Art of the Court', content: 'The perfect courtier thrives in a world where everything revolves around power and political dexterity. He has mastered the art of oblique influence.' },
            { type: 'explain', title: 'Flattery without Fawning', content: 'Never be obvious. Praise the master\'s taste rather than their person. Be the person everyone likes, but no one fears — until it is too late.' },
            { type: 'realworld', title: 'Application', content: 'In a corporate environment, be the "facilitator". Be the person who knows everyone and makes things run smoothly. Your power will be invisible but absolute.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Perfect Courtier"?', options: [{text: 'Someone who is exceptionally good at navigating power dynamics and social hierarchies subtly.', isCorrect: true}, {text: 'The King\'s best friend.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_25', domain: 'mindset', emoji: '🎭', title: 'Law 25: Re-Create Yourself', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Master of the Mask', content: 'Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience.' },
            { type: 'explain', title: 'Self-Dramatization', content: 'Be the master of your own image rather than letting others define it for you. Incorporate dramatic devices into your public gestures and actions — your power will be enhanced and your character will seem larger than life.' },
            { type: 'realworld', title: 'Application', content: 'Change your style, your vocabulary, or your "origin story" to fit your current goals. You are an actor on a stage; the audience only knows what you show them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core message of Law 25?', options: [{text: 'You should always be your "authentic" self.', isCorrect: false}, {text: 'You have the power to consciously design and project your own identity.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_26', domain: 'manipulation', emoji: '👐', title: 'Law 26: Keep Your Hands Clean', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Scapegoat', content: 'You must seem a paragon of civility and efficiency: Your hands are never soiled by mistakes and nasty deeds. Maintain such a spotless appearance by using others as cat’s-paws and scapegoats.' },
            { type: 'explain', title: 'The Cat\'s Paw', content: 'Find a third party to do the dirty work. If it succeeds, you take the credit. If it fails, they take the blame. You remain untainted.' },
            { type: 'realworld', title: 'Application', content: 'Never deliver bad news or fire someone yourself if you can help it. Have a "hatchet man" do it. You remain the "Good Cop" in the eyes of the organization.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you "keep your hands clean"?', options: [{text: 'By using others to execute necessary but unpleasant or risky actions.', isCorrect: true}, {text: 'By never doing anything wrong.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_27', domain: 'cultural', emoji: '🙌', title: 'Law 27: Play on People’s Need to Believe to Create a Cult-like Following', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Human Void', content: 'People have an overwhelming desire to believe in something. Become the focal point of such desire by offering them a cause, a new faith to follow.' },
            { type: 'explain', title: 'The Recipe for a Cult', content: '1. Keep it vague but promising. 2. Emphasize the visual over the intellectual. 3. Use the structure of organized religion. 4. Disguise your source of income. 5. Set up an "Us vs Them" dynamic.' },
            { type: 'realworld', title: 'Application', content: 'In your personal brand or business, don\'t just sell a product; sell a "movement". Give your followers a shared enemy (e.g., "The Status Quo") and a shared ritual.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it powerful to create a "cult-like following"?', options: [{text: 'Because followers will support you regardless of logic or cost.', isCorrect: true}, {text: 'Because it is fun to be famous.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_28', domain: 'mindset', emoji: '🦁', title: 'Law 28: Enter Action with Boldness', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Weakness of Hesitation', content: 'If you are unsure of a course of action, do not attempt it. Your timidity will infect your execution. Hesitation is dangerous; boldness is magnificent.' },
            { type: 'explain', title: 'The Lion\'s Aura', content: 'Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.' },
            { type: 'realworld', title: 'Application', content: 'When making a request, ask for the maximum. When making a move, do it with 100% conviction. Even if you are wrong, your boldness will often cow others into following you.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is boldness better than caution in the pursuit of power?', options: [{text: 'Boldness intimidates others and covers up your flaws, while hesitation exposes your weaknesses.', isCorrect: true}, {text: 'Boldness is always safer.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_29', domain: 'iq', emoji: '🏁', title: 'Law 29: Plan All the Way to the End', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Vision of the End', content: 'The ending is everything. Plan all the way to it, taking into account all the possible consequences, obstacles, and twists of fortune that might reverse your hard work.' },
            { type: 'explain', title: 'Resisting the Impulse', content: 'By planning to the end you will not be overwhelmed by circumstances and you will know when to stop. Gently guide fortune and help determine the future by thinking far ahead.' },
            { type: 'realworld', title: 'Application', content: 'Before starting a project, write the "Success Script" and the "Failure Script" all the way to the 12-month mark. If the end state isn\'t perfect, don\'t take the first step.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why must you plan all the way to the end?', options: [{text: 'To avoid being surprised by obstacles and to know exactly when to stop once you\'ve won.', isCorrect: true}, {text: 'To impress your boss with your detail-oriented nature.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_30', domain: 'eloquence', emoji: '🪄', title: 'Law 30: Make Your Accomplishments Seem Effortless', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Art of Sprezzatura', content: 'Your actions must seem natural and executed with ease. All the toil and practice that go into them, and also all the clever tricks, must be concealed.' },
            { type: 'explain', title: 'The Illusion of Magic', content: 'When you act effortlessly, you appear to have a godlike power. If you show how hard you work, you appear as just another common laborer. Never reveal your methods.' },
            { type: 'realworld', title: 'Application', content: 'Deliver a massive project ahead of schedule and act like it was "no big deal". Do not talk about the late nights or the stress. Let them wonder how you did it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why should you hide the effort behind your successes?', options: [{text: 'Because effort revealed is power diminished; it makes you look common instead of gifted.', isCorrect: true}, {text: 'Because people will think you are lazy.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_31', domain: 'manipulation', emoji: '🗳️', title: 'Law 31: Control the Options: Get Others to Play with the Cards You Deal', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Illusion of Choice', content: 'The best deceptions are the ones that seem to give the other person a choice: Your victims feel they are in control, but are actually your puppets.' },
            { type: 'explain', title: 'The Double Bind', content: 'Give people options that come out in your favor whichever one they choose. Force them to make choices between the lesser of two evils, both of which serve your purpose.' },
            { type: 'realworld', title: 'Application', content: 'When asking for a deadline, say: "Would you prefer to have the report by Friday afternoon or Monday morning?" Either way, you get the time you need, but they feel they decided it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of "Controlling the Options"?', options: [{text: 'To make people feel they have a choice while ensuring every outcome benefits you.', isCorrect: true}, {text: 'To be a democratic leader.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_32', domain: 'cultural', emoji: '🌈', title: 'Law 32: Play to People’s Fantasies', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Harsh Truth', content: 'The truth is often avoided because it is ugly and unpleasant. Never appeal to truth and reality unless you are prepared for the anger that comes from disenchantment.' },
            { type: 'explain', title: 'The Power of the Dream', content: 'Life is so harsh and distressing that people who can manufacture romance or conjure up fantasy are like oases in the desert: Everyone flocks to them.' },
            { type: 'realworld', title: 'Application', content: 'In marketing or leadership, don\'t sell the process; sell the dream. Don\'t talk about "hard work"; talk about "transformation" and "legacy".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it more effective to play to fantasies than to reality?', options: [{text: 'Because reality is often boring or painful, and people prefer a comforting, grand illusion.', isCorrect: true}, {text: 'Because fantasies are cheaper.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_33', domain: 'eq', emoji: '🗝️', title: 'Law 33: Discover Each Man’s Thumbscrew', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Finding the Weakness', content: 'Everyone has a weakness, a gap in the castle wall. That weakness is usually an insecurity, an uncontrollable emotion or need; it can also be a small secret pleasure.' },
            { type: 'explain', title: 'The Thumbscrew', content: 'Once found, it is a thumbscrew you can turn to your advantage. It is the one thing they cannot resist. Use it to gain leverage.' },
            { type: 'realworld', title: 'Application', content: 'Observe people when they are off-guard. What makes them angry? What makes them brag? That is their thumbscrew. Anchor your requests to that specific need.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is a "Thumbscrew"?', options: [{text: 'A physical tool for torture.', isCorrect: false}, {text: 'A psychological weakness or vulnerability that can be used to influence a person.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 'law_34', domain: 'mindset', emoji: '👑', title: 'Law 34: Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Self-Fulfilling Prophecy', content: 'The way you carry yourself will often determine how you are treated: A vulgar or common appearance will make people disrespect you.' },
            { type: 'explain', title: 'The Dignity of the Crown', content: 'By acting regally and confident of your powers, you make it seem as if you are destined to wear a crown. Radiate confidence and high self-worth.' },
            { type: 'realworld', title: 'Application', content: 'Walk into every room as if you own it. Speak with the assumption that your time is the most valuable. If you treat yourself as a king, others will eventually follow suit.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the core principle of Law 34?', options: [{text: 'Your internal state and external projection of self-worth dictate how the world perceives and treats you.', isCorrect: true}, {text: 'You should buy expensive clothes.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_35', domain: 'iq', emoji: '⌚', title: 'Law 35: Master the Art of Timing', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Rhythm of the World', content: 'Never seem to be in a hurry — hurrying betrays a lack of control over yourself, and over time. Always seem patient, as if you know that everything will come to you eventually.' },
            { type: 'explain', title: 'Three Types of Time', content: '1. Long time (the wait). 2. Forced time (making others rush). 3. End time (the execution). Master all three.' },
            { type: 'realworld', title: 'Application', content: 'When you are anxious to hear back on an offer, wait an extra day before following up. Your patience communicates that you have other options and are not desperate.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is hurrying a sign of weakness?', options: [{text: 'It signals that you are not in control of your environment or yourself.', isCorrect: true}, {text: 'It is bad for your heart.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_36', domain: 'mindset', emoji: '💎', title: 'Law 36: Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Power of Indifference', content: 'By acknowledging a petty problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him; and a small mistake is often made worse and more visible when you try to fix it.' },
            { type: 'explain', title: 'The Freeze-Out', content: 'If there is something you want but cannot have, show contempt for it. If you act like it is beneath you, you maintain your status. If you chase it, you appear weak.' },
            { type: 'realworld', title: 'Application', content: 'If a rival insults you, ignore them completely. Don\'t even look at them. Your total indifference is more damaging to their ego than any comeback could be.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How should you handle a minor problem or an unreachable goal?', options: [{text: 'Ignore it and show it contempt to minimize its importance and preserve your power.', isCorrect: true}, {text: 'Obsess over it until it is solved.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_37', domain: 'cultural', emoji: '🎆', title: 'Law 37: Create Compelling Spectacles', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Visual Over the Verbal', content: 'Striking imagery and grand symbolic gestures create the aura of power — everyone is dazzled by them.' },
            { type: 'explain', title: 'The Theater of Power', content: 'Dazzle the eyes with symbols and grand gestures. They prevent people from seeing what you are actually doing. Stage your life as a series of unforgettable scenes.' },
            { type: 'realworld', title: 'Application', content: 'When launching a new project, don\'t just send an email. Host a dramatic event. Use high-quality visuals. Make it an experience, not just a message.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why are spectacles effective for gaining power?', options: [{text: 'They overwhelm the senses and distract people from analyzing your actual motives or actions.', isCorrect: true}, {text: 'They are cheap to produce.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_38', domain: 'cultural', emoji: '🐑', title: 'Law 38: Think as You Like but Behave Like Others', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Danger of Uniqueness', content: 'If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them.' },
            { type: 'explain', title: 'The Social Camouflage', content: 'It is much safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness.' },
            { type: 'realworld', title: 'Application', content: 'If you work in a conservative office, dress conservatively and use their jargon. Keep your radical "Architect" mindset hidden. Influence from within the herd.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it dangerous to flaunt your unconventionality?', options: [{text: 'It makes others feel judged and inferior, causing them to isolate or attack you.', isCorrect: true}, {text: 'It is illegal.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_39', domain: 'eq', emoji: '🌊', title: 'Law 39: Stir Up Waters to Catch Fish', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Power of Chaos', content: 'Anger and emotion are strategically counterproductive. You must always stay calm and objective. But if you can make your enemies angry while staying calm yourself, you gain a decided advantage.' },
            { type: 'explain', title: 'The Emotional Pivot', content: 'Stir up your opponents; find the chink in their vanity through which you can rattle them and you hold the strings.' },
            { type: 'realworld', title: 'Application', content: 'In a debate, remain perfectly polite and detached while making points that you know will infuriate your opponent. When they lose their temper, they lose the audience.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of "Stirring Up the Waters"?', options: [{text: 'To make your enemy lose their emotional control and make mistakes while you remain calm.', isCorrect: true}, {text: 'To clear the air.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_40', domain: 'manipulation', emoji: '🧀', title: 'Law 40: Despise the Free Lunch', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Hidden Cost', content: 'What is offered for free is dangerous — it usually involves either a trick or a hidden obligation.' },
            { type: 'explain', title: 'The Value of Payment', content: 'What has worth is worth paying for. By paying your own way you stay clear of gratitude, guilt, and deceit. It is also often wise to pay the full price — there is no excellence that is a bargain.' },
            { type: 'realworld', title: 'Application', content: 'If a rival offers you a "free" favor or resource, politely decline. Pay for it yourself or find another source. Maintain your total independence.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why should you "despise the free lunch"?', options: [{text: 'Because free gifts usually come with psychological strings or hidden agendas.', isCorrect: true}, {text: 'Because you are rich.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_41', domain: 'cultural', emoji: '👣', title: 'Law 41: Avoid Stepping into a Great Man’s Shoes', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Shadow of the Predecessor', content: 'What happens first always appears better and more original than what comes after. If you succeed a great man or have a famous parent, you will have to accomplish double their achievements to outshine them.' },
            { type: 'explain', title: 'Creating Your Own Path', content: 'Establish your own name and identity by changing course. Slay the overbearing father, disparage the past, and gain power by shining in your own way.' },
            { type: 'realworld', title: 'Application', content: 'If you take over a successful team, don\'t try to replicate the old boss. Change the systems, change the goals, change the branding. Make it YOUR team.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the danger of following a "Great Man"?', options: [{text: 'You will always be compared to them and will struggle to establish your own legacy.', isCorrect: true}, {text: 'They will come back to haunt you.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_42', domain: 'manipulation', emoji: '🐏', title: 'Law 42: Strike the Shepherd and the Sheep Will Scatter', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Source of Trouble', content: 'Trouble can often be traced to a single strong individual — the stirrer, the arrogant underling, the poisoner of goodwill.' },
            { type: 'explain', title: 'Neutralizing the Core', content: 'Do not wait for the troubles they cause to multiply, do not try to negotiate with them — they are irredeemable. Neutralize their influence by isolating or banishing them. Strike at the source of the trouble and the sheep will scatter.' },
            { type: 'realworld', title: 'Application', content: 'If a group is resisting your leadership, identify the one "informal leader" who is inciting the others. Move that person to a different project. The resistance will collapse.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How do you handle a group of troublemakers?', options: [{text: 'Identify and neutralize the single person who is leading or inciting them.', isCorrect: true}, {text: 'Try to win over every single member.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_43', domain: 'manipulation', emoji: '❤️', title: 'Law 43: Work on the Hearts and Minds of Others', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Soft Power', content: 'Coercion creates a reaction that will eventually work against you. You must seduce others into wanting to move in your direction.' },
            { type: 'explain', title: 'The Art of Seduction', content: 'A person you have seduced becomes your loyal pawn. And the way to seduce others is to operate on their individual psychologies and their weaknesses.' },
            { type: 'realworld', title: 'Application', content: 'Instead of ordering someone to work late, tell them how their specific contribution is the only thing that can save the project. Appeal to their pride and heart.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is seduction better than coercion?', options: [{text: 'Seduction creates willing followers, whereas coercion creates hidden resentment and future rebellion.', isCorrect: true}, {text: 'Seduction is faster.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_44', domain: 'manipulation', emoji: '🪞', title: 'Law 44: Disarm and Infuriate with the Mirror Effect', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Reflection of Reality', content: 'The mirror reflects reality, but it is also the perfect tool for deception.' },
            { type: 'explain', title: 'The Mirror Strategy', content: 'When you mirror your enemies, doing exactly as they do, they cannot figure out your strategy. The Mirror Effect mocks and humiliates them, making them overreact. By holding up a mirror to their psyches, you distract them.' },
            { type: 'realworld', title: 'Application', content: 'If someone is being passive-aggressive, respond with the exact same level of passive-aggression. It will drive them insane and reveal their own behavior to them.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does the Mirror Effect work against an enemy?', options: [{text: 'It confuses them and makes them emotional, as they see their own behavior reflected back at them.', isCorrect: true}, {text: 'It makes them like you.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_45', domain: 'cultural', emoji: '🏗️', title: 'Law 45: Preach the Need for Change, but Never Reform Too Much at Once', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Comfort of the Old', content: 'Everyone understands the need for change in the abstract, but on the day-to-day level people are creatures of habit. Too much innovation is traumatic, and will lead to revolt.' },
            { type: 'explain', title: 'The Illusion of Tradition', content: 'If you are new to a position of power, or an outsider trying to build a power base, make a show of respecting the old way of doing things. If change is necessary, make it feel like a gentle improvement on the past.' },
            { type: 'realworld', title: 'Application', content: 'When taking over a company, keep the old logos and names for a year. Change the systems behind the scenes first. People fear the NEW; they love the BETTER version of the OLD.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why should you avoid rapid, massive reform?', options: [{text: 'Because people are naturally resistant to change and will revolt if their habits are disrupted too quickly.', isCorrect: true}, {text: 'Because it is too expensive.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_46', domain: 'mindset', emoji: '😇', title: 'Law 46: Never Appear Too Perfect', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Danger of Envy', content: 'Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses.' },
            { type: 'explain', title: 'Humanizing Your Power', content: 'Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable.' },
            { type: 'realworld', title: 'Application', content: 'If you are high-achieving, mention a silly mistake you made or a minor struggle you have. It makes you relatable. Perfection is a wall; vulnerability is a bridge.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is it dangerous to appear "too perfect"?', options: [{text: 'It triggers envy in others, which leads to secret plots and resentment.', isCorrect: true}, {text: 'It is boring.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_47', domain: 'mindset', emoji: '🏹', title: 'Law 47: Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Trap of Momentum', content: 'The moment of victory is often the moment of greatest peril. In the heat of victory, arrogance and overconfidence can push you past the goal you had aimed for.' },
            { type: 'explain', title: 'The Overreach', content: 'By going too far, you make more enemies than you defeat. Do not allow success to go to your head. Set a goal, and when you reach it, stop.' },
            { type: 'realworld', title: 'Application', content: 'In a negotiation, if you get everything you wanted, STOP. Don\'t try to squeeze out one more tiny concession. You risk the whole deal and create an enemy who will wait for revenge.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is the moment of victory so dangerous?', options: [{text: 'Because arrogance can lead to overreaching and creating new enemies or losing what you\'ve gained.', isCorrect: true}, {text: 'Because people will stop liking you.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 'law_48', domain: 'manipulation', emoji: '💧', title: 'Law 48: Assume Formlessness', duration: '12 min',
        slides: [
            { type: 'intro', title: 'The Adaptability of Water', content: 'By taking a shape, by having a visible plan, you open yourself to attack. Instead of taking a form that your enemy can grasp, keep yourself adaptable and on the move.' },
            { type: 'explain', title: 'The Power of Chaos', content: 'Accept the fact that nothing is certain and no law is fixed. The best way to protect yourself is to be as fluid and formless as water; never bet on stability or lasting order. Everything changes.' },
            { type: 'realworld', title: 'Application', content: 'Never be "the guy who does X". Be the person who solves problems using whatever means necessary. Your lack of a fixed style makes you impossible to predict or counter.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the ultimate protection for a person in power?', options: [{text: 'Formlessness—staying adaptable and never becoming a fixed, predictable target.', isCorrect: true}, {text: 'Having a large army.', isCorrect: false}] }
            ]}
        ]
    }
];

window.LAWS_48 = LAWS_48;
