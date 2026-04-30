const STAGE6_LESSONS = [
    {
        id: 's6_l1_cultural', domain: 'cultural', emoji: '🎨', title: 'The Artisan\'s Eye', duration: '9 min',
        slides: [
            { type: 'intro', title: 'Stage 6: The Artisan', content: 'We move from the raw utility of survival to the refinement of taste. The Architect must be able to navigate high society with absolute ease.' },
            { type: 'explain', title: 'Aesthetics as a Weapon', content: 'In high-status environments, you are judged by your "Artisan\'s Eye". Your choice of clothing, your appreciation of art, and your knowledge of history are the signals of your rank.' },
            { type: 'realworld', title: 'Application', content: 'Identify one area of culture you know nothing about (e.g., Opera, Fine Wine, Modern Architecture). Spend 30 minutes studying its "M.O.". Knowledge is the only barrier to entry.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is cultural knowledge important for the Architect?', options: [{text: 'It acts as a high-status signal that opens doors to elite systems.', isCorrect: true}, {text: 'It makes you a better artist.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l2_cultural', domain: 'cultural', emoji: '🍷', title: 'Culinary Psychology', duration: '10 min',
        slides: [
            { type: 'intro', title: 'The Table as a Board', content: 'More deals are closed over dinner than in boardrooms. You must understand the psychology of the meal.' },
            { type: 'explain', title: 'The Pacing of Trust', content: 'Sharing food is an ancient tribal ritual of trust. By controlling the pacing of the meal, you control the emotional state of your target. A slow, heavy meal leads to relaxation and lower defenses.' },
            { type: 'realworld', title: 'Application', content: 'Next time you eat with a target, mirror their eating pace. If they are slow, you are slow. This "Mirroring" creates a deep, subconscious bond of "Sameness".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does mirroring a target\'s eating pace affect them?', options: [{text: 'It makes them feel rushed.', isCorrect: false}, {text: 'It creates a subconscious sense of rapport and trust.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l3_philosophy', domain: 'philosophy', emoji: '🏛️', title: 'The Aesthetics of Power', duration: '8 min',
        slides: [
            { type: 'intro', title: 'The Architecture of Awe', content: 'How do you design a space that communicates absolute authority without saying a word?' },
            { type: 'explain', title: 'The Verticality Principle', content: 'High ceilings, large doors, and elevated platforms. The human brain equates "Height" with "Power". The Artisan uses space to make others feel small and insignificant.' },
            { type: 'realworld', title: 'Application', content: 'Look at the buildings of government or religion. Observe how they use height to signal dominance. Incorporate this "Verticality" into your own presence—stand tall, occupy space.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Verticality Principle"?', options: [{text: 'The use of height and scale in architecture to signal power and dominance.', isCorrect: true}, {text: 'A method for building skyscrapers.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l4_manipulation', domain: 'manipulation', emoji: '🎨', title: 'Color Psychology', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Silent Command', content: 'Colors are not just aesthetic; they are biological triggers. The Artisan uses them to prime a target\'s mood.' },
            { type: 'explain', title: 'The Palette of Control', content: 'Navy Blue = Trust and Authority. Red = Urgency and Aggression. Green = Growth and Safety. White = Purity or Emptiness. Choose your "Uniform" based on the reaction you want to trigger.' },
            { type: 'realworld', title: 'Application', content: 'If you need to deliver bad news, wear Navy Blue. If you need to lead a charge, wear a splash of Red. Control the room before you even speak.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Which color is most associated with trust and authority in professional settings?', options: [{text: 'Yellow', isCorrect: false}, {text: 'Navy Blue', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l5_cultural', domain: 'cultural', emoji: '👃', title: 'Olfactory Influence', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Scent of the Architect', content: 'Smell is the only sense that bypasses the logical brain and goes directly to the emotional center (the limbic system).' },
            { type: 'explain', title: 'Scent Memory', content: 'The brain anchors scents to memories more strongly than images. A unique, subtle scent becomes your "Biological Signature". When people smell it later, they will immediately recall your presence and your power.' },
            { type: 'realworld', title: 'Application', content: 'Choose a signature scent—nothing overwhelming. Use it consistently. You are literally "branding" their subconscious mind.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is smell such a powerful tool for influence?', options: [{text: 'Because it goes directly to the brain\'s emotional center, bypassing the logical filter.', isCorrect: true}, {text: 'Because everyone has a favorite smell.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l6_cultural', domain: 'cultural', emoji: '📐', title: 'The Golden Ratio of Style', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Mathematical Beauty', content: 'The Golden Ratio (1.618) is found in nature, art, and high-end design. It is the definition of "Correctness".' },
            { type: 'explain', title: 'Proportion as Power', content: 'The Artisan applies the ratio to their own silhouette. The width of the shoulders vs the waist. The length of the jacket vs the legs. A person who is "in proportion" is subconsciously perceived as more competent and higher-status.' },
            { type: 'realworld', title: 'Application', content: 'Get your clothes tailored. A 10/10 fit on a 5/10 garment is more powerful than a 5/10 fit on a 10/10 garment. Precision is the mark of the Artisan.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Golden Ratio"?', options: [{text: 'A mathematical ratio found in nature and art that is perceived as universally beautiful.', isCorrect: true}, {text: 'A rule for saving money.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l7_eloquence', domain: 'eloquence', emoji: '🎻', title: 'The "Melodic" Voice', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Instrument of Speech', content: 'The voice is a musical instrument. The Artisan does not just speak; they perform a "Sonata of Influence".' },
            { type: 'explain', title: 'Vocal Tonality', content: 'Lower your pitch at the end of a sentence to signal authority (The Command). Raise it to signal uncertainty or an invitation (The Question). Most people accidentally raise their pitch when they are nervous—the Artisan never does.' },
            { type: 'realworld', title: 'Application', content: 'Record yourself speaking. Do you sound "Breathy" or "Resonant"? Practice speaking from the chest, not the throat. A resonant voice commands the air around it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What does a falling pitch at the end of a sentence typically signal?', options: [{text: 'Authority and finality.', isCorrect: true}, {text: 'A request for permission.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l8_cultural', domain: 'cultural', emoji: '🏛️', title: 'The Architectural Anchor', duration: '7 min',
        slides: [
            { type: 'intro', title: 'Power through Space', content: 'The environment you choose for an interaction determines the power dynamic. The Artisan never meets on "Neutral Ground".' },
            { type: 'explain', title: 'The Cathedral Effect', content: 'Meeting in high-ceilinged, grand spaces triggers a sense of abstract, long-term thinking and awe. Meeting in tight, low-ceilinged rooms triggers detail-oriented, high-stress thinking. Choose the room to fit the goal.' },
            { type: 'realworld', title: 'Application', content: 'If you want to propose a grand vision, meet in a gallery or a grand hall. If you want to negotiate a contract, meet in a small, intense office.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'How does high ceiling height affect a target\'s thinking?', options: [{text: 'It encourages more abstract and creative thought.', isCorrect: true}, {text: 'It makes them focus on small errors.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l9_cultural', domain: 'cultural', emoji: '🖼️', title: 'The Curator\'s Filter', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Status through Exclusion', content: 'High status is not defined by what you include, but by what you exclude. The Artisan is a curator of their own life.' },
            { type: 'explain', title: 'Via Negativa of Taste', content: 'True elegance is the absence of the unnecessary. Remove "Clutter" (physical, digital, and social). A minimalist, high-quality existence is a powerful signal of discipline and wealth.' },
            { type: 'realworld', title: 'Application', content: 'Look at your desk or your phone. Remove 50% of the items. The remaining 50% will immediately look more intentional and valuable.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Via Negativa of Taste"?', options: [{text: 'Improving your aesthetic by removing anything that isn\'t high-quality or essential.', isCorrect: true}, {text: 'Buying more expensive things.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l10_cultural', domain: 'cultural', emoji: '🍸', title: 'Social Lubrication', duration: '7 min',
        slides: [
            { type: 'intro', title: 'The Chemistry of Rapport', content: 'Alcohol and food are tools of the Artisan. Use them to lower social friction, not to lose control.' },
            { type: 'explain', title: 'The Asymmetric Intake', content: 'Ensure your target drinks more than you do. You remain the Architect; they become the "Participant". A slightly loosened tongue reveals the true M.O. of the target.' },
            { type: 'realworld', title: 'Application', content: 'Order a "Mocktail" that looks like a real drink. You maintain 100% cognitive clarity while appearing to participate in the "Ritual".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of "Social Lubrication" for the Artisan?', options: [{text: 'To get drunk and have fun.', isCorrect: false}, {text: 'To lower the target\'s inhibitions and gather information while maintaining personal control.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l11_cultural', domain: 'cultural', emoji: '🎭', title: 'Social Camouflage', duration: '9 min',
        slides: [
            { type: 'intro', title: 'The Master of Disguise', content: 'The Artisan can walk into any room—a biker bar or a billionaire\'s gala—and belong perfectly.' },
            { type: 'explain', title: 'The Chameleon Shift', content: 'Observe the "Dialect" (slang, cadence) and the "Uniform" of the room. Adopt it subtly. Don\'t overdo it—just match the frequency. When you belong, you are trusted. When you are trusted, you have utility.' },
            { type: 'realworld', title: 'Application', content: 'Next time you enter a new environment, wait 5 minutes before speaking. Observe the "Baseline" of the room. Then, match it.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the goal of Social Camouflage?', options: [{text: 'To blend in so perfectly that you are accepted as a "peer" by any group.', isCorrect: true}, {text: 'To stand out as the leader.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l12_cultural', domain: 'cultural', emoji: '🏺', title: 'The Appreciation of Age', duration: '8 min',
        slides: [
            { type: 'intro', title: 'Wabi-Sabi and Status', content: 'In high-level aesthetics, perfection is for amateurs. The Artisan appreciates the "imperfection of age".' },
            { type: 'explain', title: 'The Signal of Permanence', content: 'An old, well-worn leather bag is a higher status signal than a brand-new plastic one. It signals "Generational Wealth" and "Permanence". Newness is for those who just arrived; Age is for those who have always been here.' },
            { type: 'realworld', title: 'Application', content: 'Value things that "Age well". Avoid "Fast Culture". Build a life that looks better with time, not worse.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is an aged, high-quality item often a higher status signal than a new one?', options: [{text: 'It signals permanence, history, and a lack of need to follow current trends.', isCorrect: true}, {text: 'Because it is cheaper.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l13_cultural', domain: 'cultural', emoji: '🤐', title: 'The Artisan\'s Silence', duration: '6 min',
        slides: [
            { type: 'intro', title: 'The Void of Mystery', content: 'The more you speak, the more ordinary you appear. The less you speak, the more people project their own fears and respect onto you.' },
            { type: 'explain', title: 'Strategic Omission', content: 'When asked about your background or your plans, be vague. "I have several interests." "We are exploring options." Let their imagination fill the void. An enigma is much harder to manipulate than a known quantity.' },
            { type: 'realworld', title: 'Application', content: 'Practice the "Enigma". Answer a personal question with a short, polite, but totally uninformative sentence. Watch how they try to fill the silence.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the effect of "Strategic Omission" in conversation?', options: [{text: 'It makes you look boring.', isCorrect: false}, {text: 'It creates mystery and forces the other person to fill the void with their own assumptions.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l14_cultural', domain: 'cultural', emoji: '🖋️', title: 'The Signature Style', duration: '10 min',
        slides: [
            { type: 'intro', title: 'Visual Anchoring', content: 'The Artisan has one or two "Signature" elements that never change. It is their visual "M.O.".' },
            { type: 'explain', title: 'The Iconography of the Self', content: 'Steve Jobs\' black turtleneck. Churchill\'s cigar. The signature element makes you "Iconic" and predictable in a way that is comforting to others, while allowing you to change everything else behind the scenes.' },
            { type: 'realworld', title: 'Application', content: 'Identify your signature. A specific watch? A color? A way of sitting? Make it a consistent part of your "Brand".' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the benefit of a "Signature Style"?', options: [{text: 'It makes you easily recognizable and creates a sense of consistent identity.', isCorrect: true}, {text: 'It saves you money on clothes.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l15_perception', domain: 'perception', emoji: '🔍', title: 'The Deconstruction of Taste', duration: '14 min',
        slides: [
            { type: 'intro', title: 'Taste is not Objective', content: 'What we consider "good taste" is a highly engineered set of social signals. The Artisan does not possess taste organically; they acquire it mathematically to signal belonging.' },
            { type: 'explain', title: 'The Sociology of Luxury', content: 'Luxury is not about comfort. It is about exclusion. The harder a signal is to fake (cost, required knowledge, required time), the more effectively it separates the elite from the masses.' },
            { type: 'explain', title: 'Quiet Luxury vs Loud Luxury', content: 'Loud luxury (massive logos) signals new money and insecurity. Quiet luxury (unbranded cashmere, bespoke tailoring) signals entrenched, old money. The true predator operates in quiet luxury.' },
            { type: 'realworld', title: 'Application', content: 'Audit your wardrobe and accessories. Remove anything with a visible logo larger than a coin. Let the fabric and the fit do the talking.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the primary function of "Quiet Luxury" in elite social circles?', options: [{text: 'To save money by avoiding designer brands.', isCorrect: false}, {text: 'To signal entrenched wealth and taste to insiders without alerting the general public.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l16_eloquence', domain: 'eloquence', emoji: '🎙️', title: 'The Vocal Frame', duration: '12 min',
        slides: [
            { type: 'intro', title: 'Controlling the Acoustic Space', content: 'You can dominate a room without saying anything profound, simply by controlling the acoustic properties of your voice. Resonance is perceived as authority.' },
            { type: 'explain', title: 'Diaphragmatic Speech', content: 'Most people speak from their throat, especially when stressed. This thins the voice. The Artisan speaks from the diaphragm, producing a deep, resonant tone that physically vibrates in the listener\'s chest.' },
            { type: 'explain', title: 'The Tempo of Control', content: 'Never rush. Speed implies you fear being interrupted. Speaking slowly and deliberately implies you own the time and the space. Let them wait for your next word.' },
            { type: 'realworld', title: 'Application', content: 'Read a paragraph of text out loud. Record it. Then take a deep breath into your stomach, slow your reading speed by 30%, and read it again. Compare the authority of the two recordings.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is speaking slowly perceived as a dominant behavior?', options: [{text: 'It implies you own the time and are unconcerned with being interrupted.', isCorrect: true}, {text: 'It makes the listener fall asleep so you can manipulate them.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l17_mindset', domain: 'mindset', emoji: '🎭', title: 'The Psychopathy of Aesthetics', duration: '15 min',
        slides: [
            { type: 'intro', title: 'Aesthetics as Armor', content: 'Beauty is a form of armor. If you are perfectly presented, people will subconsciously project positive traits onto you. This is the "Halo Effect".' },
            { type: 'explain', title: 'The Halo Effect', content: 'A cognitive bias where our overall impression of a person influences how we feel and think about their character. If you look sharp, you are assumed to be smart, competent, and trustworthy.' },
            { type: 'explain', title: 'Weaponizing the Halo', content: 'The Artisan uses the Halo Effect to mask their true intentions. A beautifully tailored suit is the perfect camouflage for a ruthless strategic maneuver.' },
            { type: 'realworld', title: 'Application', content: 'When preparing for a hostile negotiation or a difficult confrontation, over-dress slightly. Your impeccable presentation will create subconscious hesitation in your opponent.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the "Halo Effect"?', options: [{text: 'A lighting technique used by photographers.', isCorrect: false}, {text: 'A cognitive bias where a person\'s attractive presentation leads others to assume they have positive internal traits.', isCorrect: true}] }
            ]}
        ]
    },
    {
        id: 's6_l18_cultural', domain: 'cultural', emoji: '🍷', title: 'The Rituals of Power', duration: '11 min',
        slides: [
            { type: 'intro', title: 'Mastering the Unspoken Rules', content: 'Every elite subculture has rituals. Knowing them proves you belong; ignoring them marks you as an outsider.' },
            { type: 'explain', title: 'The Sommelier Test', content: 'How a person interacts with service staff—especially sommeliers or maitre d\'s—reveals their actual social calibration. The amateur is arrogant; the master is collaborative but firmly in charge.' },
            { type: 'explain', title: 'The Power of the Check', content: 'Never argue over a bill. If you invite, you pay. The act of seamlessly handling the financial transaction without making it a spectacle is a massive display of covert power.' },
            { type: 'realworld', title: 'Application', content: 'Next time you host a dinner, arrange the payment with the restaurant in advance. When the meal ends, simply stand up and leave. The psychological impact on your guests will be profound.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'Why is seamlessly handling a dinner bill considered a display of covert power?', options: [{text: 'Because it avoids awkwardness and demonstrates financial abundance without bragging.', isCorrect: true}, {text: 'Because it proves you are rich.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l19_perception', domain: 'perception', emoji: '🖼️', title: 'The Architecture of Envy', duration: '13 min',
        slides: [
            { type: 'intro', title: 'Manufacturing Desire', content: 'The highest level of aesthetic control is not making people admire you; it is making them envy you, while simultaneously wanting to be close to you.' },
            { type: 'explain', title: 'The Core of Envy', content: 'We only envy those who possess something we believe we *could* or *should* have. You do not envy the King; you envy your neighbor who bought a sports car.' },
            { type: 'explain', title: 'The Benign Envy Trap', content: 'Malignant envy causes sabotage. Benign envy causes emulation. The Artisan cultivates benign envy by presenting a curated lifestyle that seems *just* within reach of the target, making the target subservient in their quest to learn the "secret".' },
            { type: 'realworld', title: 'Application', content: 'When someone asks about your success or aesthetic, do not give them the full truth. Give them a tantalizing, half-complete philosophical answer. Let them chase the rest.' },
            { type: 'quiz', title: 'Check', questions: [
                { text: 'What is the strategic difference between malignant and benign envy?', options: [{text: 'Malignant envy causes others to try and destroy you; benign envy causes them to try and emulate and serve you.', isCorrect: true}, {text: 'Malignant envy is a medical condition.', isCorrect: false}] }
            ]}
        ]
    },
    {
        id: 's6_l20_cultural', domain: 'cultural', emoji: '🎭', title: 'The Stage 6 Final Exam', duration: '15 min',
        slides: [
            { type: 'intro', title: 'The Refined Monster', content: 'You have completed Stage 6. You are no longer just a predator; you are an Artisan of influence.' },
            { type: 'explain', title: 'The Synthesis of Taste', content: 'You can navigate any system, blend into any room, and use aesthetics to prime any target. You understand that "Culture" is just another operating system to be mastered.' },
            { type: 'explain', title: 'The Path Forward', content: 'Stage 7: The Persuader. We move from visual and cultural signals to the power of the word. Hypnotic language patterns and conversational dominance. You have the look; now you gain the Voice.' },
            { type: 'realworld', title: 'Application', content: 'Attend a cultural event (museum, theater, high-end lounge). Use your "Artisan\'s Eye" to deconstruct the power signals of the people there. Who is the real Architect in the room? Is it you?' },
            { type: 'quiz', title: 'Final Knowledge Check', questions: [
                { text: 'What is the core message of Stage 6?', options: [{text: 'That aesthetics and culture are powerful tools for signaling status and manipulating social systems.', isCorrect: true}, {text: 'That you should become an artist.', isCorrect: false}] }
            ]}
        ]
    }
];

window.STAGE6_LESSONS = STAGE6_LESSONS;

