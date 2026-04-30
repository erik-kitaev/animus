const ASSESSMENTS = [
    {
        id: 'iq',
        title: 'Cognitive Processing (IQ)',
        emoji: '🧠',
        questions: [
            {
                text: 'If the pattern 3, 4, 7, 12, 19 continues, what is the next number, and what is the underlying polynomial degree of the sequence?',
                options: [
                    { id: 'a', text: '28, Degree 1', score: 0 },
                    { id: 'b', text: '28, Degree 2', score: 10 },
                    { id: 'c', text: '31, Degree 3', score: 0 },
                    { id: 'd', text: '31, Degree 2', score: 0 }
                ],
                correctId: 'b' 
            },
            {
                text: 'A clock shows the time as exactly 3:15. What is the angle between the hour hand and the minute hand?',
                options: [
                    { id: 'a', text: '0 degrees', score: 0 },
                    { id: 'b', text: '7.5 degrees', score: 10 },
                    { id: 'c', text: '15 degrees', score: 0 },
                    { id: 'd', text: '22.5 degrees', score: 0 }
                ],
                correctId: 'b' 
            },
            {
                text: 'You have two ropes. Each rope takes exactly 60 minutes to burn completely, but they burn at uneven rates. How do you measure exactly 45 minutes using only these two ropes and a lighter?',
                options: [
                    { id: 'a', text: 'Light one rope at both ends. When it finishes, light the second rope at both ends.', score: 0 },
                    { id: 'b', text: 'Light both ropes at one end. When one finishes, light the other end of the remaining rope.', score: 0 },
                    { id: 'c', text: 'Light one rope at both ends and the second at one end. When the first finishes, light the other end of the second.', score: 10 },
                    { id: 'd', text: 'Cut both ropes in half. Light three halves simultaneously.', score: 0 }
                ],
                correctId: 'c'
            }
        ]
    },
    {
        id: 'eq',
        title: 'Emotional Intelligence (EQ)',
        emoji: '👁',
        questions: [
            {
                text: 'A colleague constantly interrupts you during meetings. What is the most emotionally intelligent initial response?',
                options: [
                    { id: 'a', text: 'Interrupt them back to establish dominance and ensure your point is heard.', score: 0 },
                    { id: 'b', text: 'Privately express your frustration and demand they stop interrupting.', score: 3 },
                    { id: 'c', text: 'Say "I wasn\'t quite finished, please let me conclude my thought," calmly during the meeting.', score: 10 },
                    { id: 'd', text: 'Say nothing to avoid conflict, but note it in their peer review.', score: 0 }
                ],
                correctId: 'c'
            },
            {
                text: 'You observe a microexpression of asymmetrical contempt (one-sided lip raise) from a negotiation partner just after you make an offer. What does this indicate?',
                options: [
                    { id: 'a', text: 'They find your offer amusing but acceptable.', score: 0 },
                    { id: 'b', text: 'They feel morally or intellectually superior to the offer.', score: 10 },
                    { id: 'c', text: 'They are suppressing anger.', score: 0 },
                    { id: 'd', text: 'They are experiencing sudden disgust or aversion.', score: 2 }
                ],
                correctId: 'b'
            }
        ]
    },
    {
        id: 'cultural',
        title: 'Cultural Mastery',
        emoji: '🎨',
        questions: [
            {
                text: 'In Renaissance art, the technique of "Chiaroscuro" was primarily utilized to achieve what effect?',
                options: [
                    { id: 'a', text: 'The mathematical accurate depiction of perspective.', score: 0 },
                    { id: 'b', text: 'The strong contrasts between light and dark to create a sense of volume.', score: 10 },
                    { id: 'c', text: 'The blending of colors to eliminate harsh outlines (Sfumato).', score: 2 },
                    { id: 'd', text: 'The symbolic use of color to represent theological virtues.', score: 0 }
                ],
                correctId: 'b'
            },
            {
                text: 'Which piece of classical music is famous for its use of a continuous, driving snare drum ostinato beneath a slowly building crescendo?',
                options: [
                    { id: 'a', text: 'Vivaldi\'s Winter', score: 0 },
                    { id: 'b', text: 'Beethoven\'s Symphony No. 7', score: 0 },
                    { id: 'c', text: 'Ravel\'s Boléro', score: 10 },
                    { id: 'd', text: 'Wagner\'s Ride of the Valkyries', score: 0 }
                ],
                correctId: 'c'
            }
        ]
    },
    {
        id: 'criminal',
        title: 'Criminal Psychology',
        emoji: '🔍',
        questions: [
            {
                text: 'The Macdonald Triad is a set of three childhood behaviors historically theorized to be predictive of violent tendencies. Which of the following is NOT part of the triad?',
                options: [
                    { id: 'a', text: 'Enuresis (bed-wetting) past an appropriate age.', score: 0 },
                    { id: 'b', text: 'Cruelty to animals.', score: 0 },
                    { id: 'c', text: 'Pyromania (fire-setting).', score: 0 },
                    { id: 'd', text: 'Compulsive lying and theft.', score: 10 }
                ],
                correctId: 'd'
            },
            {
                text: 'In forensic profiling, an "organized" offender is most likely to:',
                options: [
                    { id: 'a', text: 'Leave a chaotic crime scene with the weapon present.', score: 0 },
                    { id: 'b', text: 'Commit crimes of opportunity near their own residence.', score: 0 },
                    { id: 'c', text: 'Target strangers, transport the body, and remove evidence.', score: 10 },
                    { id: 'd', text: 'Act under the influence of severe delusions or hallucinations.', score: 0 }
                ],
                correctId: 'c'
            }
        ]
    },
    {
        id: 'philosophy',
        title: 'Philosophy',
        emoji: '⚡',
        questions: [
            {
                text: 'Nietzsche\'s concept of the "Übermensch" (Overman) fundamentally advocates for:',
                options: [
                    { id: 'a', text: 'The biological evolution of humans into a physically superior species.', score: 0 },
                    { id: 'b', text: 'The creation of one\'s own values in a meaningless, godless universe.', score: 10 },
                    { id: 'c', text: 'The dominance of the strong over the weak through physical violence.', score: 0 },
                    { id: 'd', text: 'A return to traditional, aristocratic moral values.', score: 2 }
                ],
                correctId: 'b'
            },
            {
                text: 'In Kantian ethics, the Categorical Imperative dictates that one must:',
                options: [
                    { id: 'a', text: 'Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.', score: 10 },
                    { id: 'b', text: 'Act in a way that maximizes the greatest good for the greatest number of people.', score: 0 },
                    { id: 'c', text: 'Act based solely on the natural law dictated by divine reason.', score: 0 },
                    { id: 'd', text: 'Act in pursuit of personal happiness and flourishing.', score: 0 }
                ],
                correctId: 'a'
            }
        ]
    },
    {
        id: 'mindset',
        title: 'Mindset & Endurance',
        emoji: '🧊',
        questions: [
            {
                text: 'You are experiencing intense physical discomfort during a mandatory endurance task. What cognitive strategy best exemplifies "Stoic detachment"?',
                options: [
                    { id: 'a', text: 'Distracting yourself by vividly imagining a pleasant memory or location.', score: 0 },
                    { id: 'b', text: 'Repeating a motivational mantra to force yourself to ignore the pain.', score: 2 },
                    { id: 'c', text: 'Objectively observing the physical sensation of pain without attaching the emotional label of "suffering" to it.', score: 10 },
                    { id: 'd', text: 'Channeling the pain into aggressive anger to fuel your physical output.', score: 0 }
                ],
                correctId: 'c'
            }
        ]
    },
    {
        id: 'eloquence',
        title: 'Eloquence',
        emoji: '✍️',
        questions: [
            {
                text: 'Identify the rhetorical device used in the following sentence: "He is a man of honor, an honor that he bought with blood, a blood that now stains his legacy."',
                options: [
                    { id: 'a', text: 'Anaphora', score: 0 },
                    { id: 'b', text: 'Epizeuxis', score: 0 },
                    { id: 'c', text: 'Anadiplosis', score: 10 },
                    { id: 'd', text: 'Chiasmus', score: 0 }
                ],
                correctId: 'c' 
            }
        ]
    },
    {
        id: 'manipulation',
        title: 'Manipulation',
        emoji: '♟️',
        questions: [
            {
                text: 'MINI-GAME: You need a reluctant colleague to work over the weekend on a project you are leading. Which approach utilizes the "Benjamin Franklin Effect"?',
                options: [
                    { id: 'a', text: '"If you do this for me, I owe you a massive favor. I\'ll take your next weekend shift."', score: 0 },
                    { id: 'b', text: '"I\'m really struggling with the data analysis part. Could you do me a small favor and just look over this one spreadsheet for 5 minutes?" (Then escalate later).', score: 10 },
                    { id: 'c', text: '"The boss mentioned that whoever steps up this weekend is getting considered for the promotion."', score: 0 },
                    { id: 'd', text: '"We are a team. If you don\'t do this, we all fail. Don\'t let us down."', score: 0 }
                ],
                correctId: 'b' 
            }
        ]
    }
];

window.ANIMUS_ASSESSMENTS = ASSESSMENTS;
