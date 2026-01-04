const questionsDB = {
    ut1: [
        {
            question: "Which sentence uses a possessive adjective correctly?",
            options: ["This is me folder.", "This is my folder.", "This is I folder.", "This is mine folder."],
            correct: 1,
            explanation: "Possessive adjectives (my, your, his, her, its, our, their) are used before a noun to show ownership.",
            topic: "Possessive Adjectives"
        },
        {
            question: "Which expression is a polite request?",
            options: ["You send me the report.", "I want that report.", "Could you send me the report, please?", "Give me the report now."],
            correct: 2,
            explanation: "'Could you...' followed by 'please' is a standard formal and polite way to ask someone to do something.",
            topic: "Polite Requests"
        },
        {
            question: "In which sentence is the vocabulary used in a professional way?",
            options: ["The technician repaired the engine yesterday.", "The technician loves pizza.", "The technician watched TV.", "The technician played football yesterday."],
            correct: 0,
            explanation: "The verb 'repaired' and the noun 'engine' are technical/professional terms related to a job description.",
            topic: "Professional Vocabulary"
        },
        {
            question: "What does “hands-on experience” mean in a professional context?",
            options: ["Practical work-related experience", "Volunteering outside the company", "Learning through games", "Reading technical manuals"],
            correct: 0,
            explanation: "'Hands-on experience' refers to knowledge gained by actually doing something rather than just reading about it.",
            topic: "Professional Expressions"
        },
        {
            question: "Which word is a job-related verb?",
            options: ["Carefully", "Beautiful", "Deliver", "Orange"],
            correct: 2,
            explanation: "'Deliver' is an action verb commonly used in logistics and business services.",
            topic: "Vocabulary"
        },
        {
            question: "Which of these is a formal email opening?",
            options: ["Dear Mr. Johnson,", "Hi there!", "Hello buddy,", "Hey, what’s up?"],
            correct: 0,
            explanation: "'Dear [Title] [Surname]' is the most appropriate and formal way to begin professional correspondence.",
            topic: "Email Writing"
        },
        {
            question: "Choose the correct use of “should”:",
            options: ["You should to check the document.", "You shoulded check the document.", "You should check the document before sending it.", "You should checking the document."],
            correct: 2,
            explanation: "The modal verb 'should' is always followed by the base form of the verb without 'to'.",
            topic: "Modal Verbs"
        },
        {
            question: "What does “attached” mean in an email?",
            options: ["A document is included", "The message is finished", "The sender is online", "The email is urgent"],
            correct: 0,
            explanation: "An 'attachment' is a file (image, document, etc.) sent along with an email message.",
            topic: "Email Vocabulary"
        },
        {
            question: "Choose the correct sentence using a modal verb for obligation.",
            options: ["You must wear safety shoes.", "You don’t should wear safety shoes.", "You maybe wear safety shoes.", "You can’t to wear safety shoes."],
            correct: 0,
            explanation: "'Must' is used to express strong obligation or necessity in professional environments.",
            topic: "Modal Verbs"
        },
        {
            question: "What is the correct quantifier in this sentence? “There are ___ reports on the table.”",
            options: ["any", "a", "much", "many"],
            correct: 3,
            explanation: "We use 'many' with countable plural nouns like 'reports' in affirmative sentences.",
            topic: "Quantifiers"
        },
        {
            question: "Choose the correct response to: “Can I help you?”",
            options: ["I’m fine, go away.", "What are you talking about?", "Yes, I need some information.", "No problem, thank you."],
            correct: 2,
            explanation: "In a professional setting, if you need help, you should state your request clearly and politely.",
            topic: "Customer Service"
        },
        {
            question: "What is the correct preposition in this sentence? “The meeting is ___ Monday.”",
            options: ["at", "on", "by", "in"],
            correct: 1,
            explanation: "We always use the preposition 'on' before days of the week (on Monday, on Tuesday, etc.).",
            topic: "Prepositions"
        },
        {
            question: "What is the formal way to offer help?",
            options: ["I don’t care.", "What do you want?", "Do it now or not.", "Shall I help you with the order?"],
            correct: 3,
            explanation: "'Shall I...' is a formal and polite way to offer assistance to someone.",
            topic: "Polite Offers"
        },
        {
            question: "What does “confirm an appointment” mean?",
            options: ["Say that the meeting will happen", "Forget the meeting", "Cancel the meeting", "Change the meeting place"],
            correct: 0,
            explanation: "Confirming means validating that a scheduled event is still going to take place.",
            topic: "Business Vocabulary"
        },
        {
            question: "What is the correct phrase to end a formal email?",
            options: ["See ya later!", "Best regards,", "Bye bye,", "Thanks mate,"],
            correct: 1,
            explanation: "'Best regards,' or 'Sincerely,' are standard professional closings for emails.",
            topic: "Email Writing"
        },
        {
            question: "Choose the correct demonstrative pronoun: “___ files are ready to print.”",
            options: ["This", "That", "Those one", "These"],
            correct: 3,
            explanation: "We use 'these' for plural nouns that are near in space or time (like files on your desk).",
            topic: "Demonstratives"
        },
        {
            question: "Which sentence is correct for an action happening now?",
            options: ["I’m check the inventory now.", "I check the inventory now.", "I checking the inventory now.", "I’m checking the inventory now."],
            correct: 3,
            explanation: "The Present Continuous (Subject + am/is/are + verb-ing) is used for actions happening at the moment of speaking.",
            topic: "Present Continuous"
        },
        {
            question: "How do you introduce yourself in a professional conversation?",
            options: ["My name is Ana. I work in logistics.", "What’s your job again?", "Guess who I am?", "Hello! Long time no see!"],
            correct: 0,
            explanation: "A professional introduction includes your name and your department or job role.",
            topic: "Introductions"
        },
        {
            question: "What is the correct word order in this sentence?",
            options: ["Starts she at 9 o’clock work.", "At 9 o’clock she work starts.", "Work at 9 o’clock starts she.", "She starts work at 9 o’clock."],
            correct: 3,
            explanation: "The standard English sentence structure is Subject (She) + Verb (starts) + Object (work) + Complement (at 9 o'clock).",
            topic: "Sentence Structure"
        },
        {
            question: "What does “I look forward to your reply” mean in an email?",
            options: ["This message is confusing.", "I’m going to ignore your message.", "I hope you answer me soon.", "Goodbye forever."],
            correct: 2,
            explanation: "It is a polite, formal way to say that you are waiting for the other person to respond.",
            topic: "Email Phrases"
        }
    ],
    ut2: [
        {
            question: "Which sentence shows correct structure in a report?",
            options: ["The team complete the project on time.", "Project team on time complete.", "The project was time completed.", "The team completed the project on time."],
            correct: 3,
            explanation: "In professional reports, we usually use the Past Simple (Subject + verb-ed) to describe finished actions.",
            topic: "Report Writing"
        },
        {
            question: "Choose the correct sentence using a time marker:",
            options: ["I finish the checklist two hours ago.", "I finished the checklist two hours ago.", "I finish checklist two hour.", "I am finishing the checklist ago."],
            correct: 1,
            explanation: "The time marker 'ago' requires the Past Simple tense ('finished').",
            topic: "Time Markers"
        },
        {
            question: "What type of word is “finally” in this sentence: “Finally, complete the form.”?",
            options: ["Adjective", "Noun", "Preposition", "Sequencing connector"],
            correct: 3,
            explanation: "Words like First, Next, Then, and Finally are sequencing connectors used to order instructions.",
            topic: "Instructional Language"
        },
        {
            question: "Choose the correct use of a workplace verb:",
            options: ["We getted the order last Monday.", "We was received the order last Monday.", "We received the order last Monday.", "We receives the order last Monday."],
            correct: 2,
            explanation: "'Receive' is a regular verb; its past simple form is 'received'.",
            topic: "Workplace Verbs"
        },
        {
            question: "What is the past simple of the verb “send”?",
            options: ["Send", "Sent", "Sented", "Sended"],
            correct: 1,
            explanation: "'Send' is an irregular verb. Its past simple form is 'sent'.",
            topic: "Irregular Verbs"
        },
        {
            question: "Choose the correct sentence using vocabulary from the unit:",
            options: ["The technician inspection cables.", "The technician inspected the cables.", "The technician will be cables.", "The technician singing the cables."],
            correct: 1,
            explanation: "This sentence correctly uses the past tense of 'inspect' to describe a completed technical task.",
            topic: "Technical Vocabulary"
        },
        {
            question: "What is the main purpose of an instruction manual?",
            options: ["To invite someone to an event", "To explain how to complete a task", "To advertise a product", "To share personal opinions"],
            correct: 1,
            explanation: "Instruction manuals provide step-by-step guidance on how to perform specific tasks or operate machinery.",
            topic: "Document Types"
        },
        {
            question: "Choose a suitable phrase to end a professional message:",
            options: ["Cheers mate", "Kind regards", "See ya", "Luv u"],
            correct: 1,
            explanation: "'Kind regards' is a standard, professional way to close business emails or messages.",
            topic: "Email Closings"
        },
        {
            question: "What is a professional way to begin an email?",
            options: ["What’s up?", "Yo!", "Dear Mr. López,", "Hey buddy!"],
            correct: 2,
            explanation: "'Dear [Title] [Surname]' is the formal standard for professional greetings.",
            topic: "Email Greetings"
        },
        {
            question: "What does “Dear Sir or Madam” indicate?",
            options: ["Subject title", "Very informal style", "Formal greeting", "Close friendship"],
            correct: 2,
            explanation: "This greeting is used in formal letters when the name of the recipient is unknown.",
            topic: "Formal Correspondence"
        },
        {
            question: "What is the correct way to ask for clarification?",
            options: ["Repeat!", "What?", "Say again!", "Could you please repeat that?"],
            correct: 3,
            explanation: "Using 'Could you...' and 'please' makes a request for clarification professional and polite.",
            topic: "Communication Skills"
        },
        {
            question: "Which tool is best for checking vocabulary meaning in context?",
            options: ["Photoshop", "Netflix", "Cambridge Dictionary", "Instagram"],
            correct: 2,
            explanation: "Reliable dictionaries like Cambridge provide definitions, examples, and correct usage in context.",
            topic: "Learning Resources"
        },
        {
            question: "What does the word “delivery” usually refer to in a workplace context?",
            options: ["A phone call with a client", "The arrival of goods or materials", "A scheduled break", "A job interview"],
            correct: 1,
            explanation: "In business/logistics, 'delivery' refers to the process of transporting and handing over goods.",
            topic: "Business Vocabulary"
        },
        {
            question: "Which sentence is correct in past simple?",
            options: ["I am checking the report yesterday.", "I checks the report yesterday.", "I have check the report yesterday.", "I checked the report yesterday."],
            correct: 3,
            explanation: "For actions completed at a specific time in the past (yesterday), we use Past Simple ('checked').",
            topic: "Past Simple"
        },
        {
            question: "What is “scanning” in reading?",
            options: ["Searching for specific information", "Ignoring the whole text", "Reading every word slowly", "Reading aloud for fun"],
            correct: 0,
            explanation: "Scanning is a reading technique used to find specific facts or data quickly without reading everything.",
            topic: "Reading Strategies"
        },
        {
            question: "In a professional glossary, what should each entry include?",
            options: ["Translation in three languages", "Word, meaning, example", "Word only", "Word, favourite emoji, music"],
            correct: 1,
            explanation: "A complete glossary entry needs the term, its definition, and a sentence showing its use.",
            topic: "Vocabulary Management"
        },
        {
            question: "What does “shift” mean in a professional schedule?",
            options: ["The cleaning task", "The break time", "The time you start and finish work", "The training room"],
            correct: 2,
            explanation: "A 'shift' refers to the period of time a worker is scheduled to be at work.",
            topic: "Work Schedules"
        },
        {
            question: "In the sentence “They repaired the machine,” what is the verb tense?",
            options: ["Future", "Present Continuous", "Present Simple", "Past Simple"],
            correct: 3,
            explanation: "The suffix '-ed' in 'repaired' indicates the Past Simple tense.",
            topic: "Grammar"
        },
        {
            question: "What is the correct structure for a short workplace email?",
            options: ["Image – Greeting – Link", "Greeting – Message – Closing", "Title – Signature – Address", "Message – Closing – Title"],
            correct: 1,
            explanation: "Every professional email should have a greeting, the main message, and a closing sign-off.",
            topic: "Email Structure"
        },
        {
            question: "What kind of document is used to register a workplace incident?",
            options: ["Report", "Menu", "Poster", "Invitation"],
            correct: 0,
            explanation: "An incident report is the formal document used to record details of accidents or unusual events at work.",
            topic: "Documentation"
        }
    ],
    ut3: [
        {
            question: "What expression shows willingness to help in the workplace?",
            options: ["I don’t want to help.", "Ask someone else.", "I’d be happy to assist you.", "Not my job."],
            correct: 2,
            explanation: "'I'd be happy to assist you' is a professional and proactive way to offer help.",
            topic: "Professional Communication"
        },
        {
            question: "Which of these expressions is informal?",
            options: ["I would like to leave now, if that’s okay.", "I’m off now, see you later!", "May I take a short break?", "Could I step out for a moment?"],
            correct: 1,
            explanation: "'I'm off' and 'See you later' are casual expressions used with friends or close colleagues, not in formal settings.",
            topic: "Register and Tone"
        },
        {
            question: "Which sentence uses the Present Simple correctly in a workplace context?",
            options: ["She managed the customer database.", "She manages the customer database.", "She is manage the customer database.", "She managing the customer database."],
            correct: 1,
            explanation: "We use Present Simple for routine tasks. For 'She', we add '-s' to the verb ('manages').",
            topic: "Grammar - Present Simple"
        },
        {
            question: "Which is a correct passive sentence using Present Perfect?",
            options: ["The product has been delivered.", "Has been deliver the product.", "It delivers already.", "The product delivered."],
            correct: 0,
            explanation: "The Present Perfect Passive structure is: Subject + has/have + been + past participle.",
            topic: "Passive Voice"
        },
        {
            question: "Which connector best introduces the first step of a process?",
            options: ["Finally", "Then", "After that", "First"],
            correct: 3,
            explanation: "'First' or 'Firstly' are the standard connectors to begin a sequence of instructions.",
            topic: "Sequencing Connectors"
        },
        {
            question: "Choose the correct job interview answer using Present Perfect.",
            options: ["I worked logistics.", "I’ve worked in a logistics company for two years.", "I have working in logistics two years.", "I work in a logistics company two years."],
            correct: 1,
            explanation: "We use Present Perfect ('I have worked') to describe experience that started in the past and continues to the present.",
            topic: "Job Interviews"
        },
        {
            question: "Which is a polite way to ask for repetition?",
            options: ["What you say?", "Sorry, could you repeat that please?", "Repeat that!", "Say again."],
            correct: 1,
            explanation: "'Could you repeat that' is the most polite and professional way to ask someone to say something again.",
            topic: "Polite Requests"
        },
        {
            question: "Which sentence contains a passive construction?",
            options: ["Submit the report now.", "He submits the report every Friday.", "The report is submitted every Friday.", "They submitting the report."],
            correct: 2,
            explanation: "In 'The report is submitted', the focus is on the action done to the report, not who does it.",
            topic: "Passive Voice"
        },
        {
            question: "What connector best introduces a contrasting idea?",
            options: ["Because", "First", "However", "For example"],
            correct: 2,
            explanation: "'However' is used to introduce a statement that contrasts with or contradicts something just said.",
            topic: "Connectors"
        },
        {
            question: "Select the correct use of sequencing connectors.",
            options: ["Uploading is first.", "File log, then it upload.", "Upload file. Then first.", "First, log in. Then, upload the file."],
            correct: 3,
            explanation: "This sentence correctly follows the order: Connector + Action. Then + Action.",
            topic: "Sequencing Connectors"
        },
        {
            question: "Which is the best closing for a mini-presentation?",
            options: ["Okay, I’m done.", "No more to say.", "So bye.", "That’s all from me. Thank you for listening."],
            correct: 3,
            explanation: "Always end a presentation by summarizing and thanking the audience for their attention.",
            topic: "Presentations"
        },
        {
            question: "Which expression is appropriate for opening a formal meeting?",
            options: ["What’s up everyone?", "Hello, okay let’s go.", "Good morning, thank you all for coming.", "Hey guys, let’s start."],
            correct: 2,
            explanation: "In formal meetings, a professional greeting and thanking attendees is the standard protocol.",
            topic: "Meetings"
        },
        {
            question: "What is the correct polite request in a formal register?",
            options: ["Give me the report.", "Can you send report now?", "You send me the report now?", "Could you please send me the report?"],
            correct: 3,
            explanation: "'Could you please...' is the standard formal structure for requests in a business environment.",
            topic: "Polite Requests"
        },
        {
            question: "What expression shows disagreement politely?",
            options: ["I get your point, but I have a different opinion.", "No, I don’t like it.", "That’s wrong.", "You are not right."],
            correct: 0,
            explanation: "Acknowledging the other person's view before stating your own is the key to polite disagreement.",
            topic: "Negotiation"
        },
        {
            question: "Which is a correct polite offer?",
            options: ["I give you coffee?", "Take a coffee.", "Would you like a cup of coffee?", "You want coffee?"],
            correct: 2,
            explanation: "'Would you like...' is the most formal and polite way to offer something to a guest or colleague.",
            topic: "Polite Offers"
        },
        {
            question: "Choose the correct modal for polite permission.",
            options: ["Could I leave a bit earlier today?", "I must leave early.", "I leaving now.", "I have to leave early."],
            correct: 0,
            explanation: "We use 'Could I...?' to ask for permission politely in a professional setting.",
            topic: "Permission"
        },
        {
            question: "What would you say to close a professional phone call?",
            options: ["Thank you for your time. Have a nice day.", "So that’s it.", "Later!", "Okay, bye."],
            correct: 0,
            explanation: "Thanking the person for their time is the standard professional courtesy when ending a call.",
            topic: "Telephoning"
        },
        {
            question: "Choose the correct polite request using “Would you mind…?”",
            options: ["Would you mind to explain it again?", "Do you explain again please?", "Would you mind explaining it again?", "Explain it again, please."],
            correct: 2,
            explanation: "The expression 'Would you mind' must always be followed by a verb ending in '-ing'.",
            topic: "Polite Requests"
        },
        {
            question: "Which phrase is commonly used in a job interview?",
            options: ["I just here to try.", "I’m very motivated and enjoy learning.", "I don’t know what to say.", "I like stuff."],
            correct: 1,
            explanation: "Showing motivation and a positive attitude toward learning is essential in interviews.",
            topic: "Job Interviews"
        },
        {
            question: "Which phrase uses Present Continuous correctly in context?",
            options: ["I’m updating the inventory now.", "I updating now.", "I update the inventory now.", "I am update the inventory."],
            correct: 0,
            explanation: "Present Continuous requires 'am/is/are' + verb with '-ing' to describe actions in progress.",
            topic: "Grammar - Continuous Tenses"
        }
    ],
    ut4: [
        {
            question: "What connector best expresses consequence?",
            options: ["So that", "While", "Therefore", "But"],
            correct: 2,
            explanation: "'Therefore' is a formal connector used to introduce the result or consequence of something previously mentioned.",
            topic: "Connectors"
        },
        {
            question: "What’s the correct past simple sentence in a report?",
            options: ["The technician repaired the equipment yesterday.", "The technician repairs the equipment yesterday.", "The technician has repairing the equipment.", "The technician was repairing the equipment tomorrow."],
            correct: 0,
            explanation: "In reports, finished actions at a specific time (yesterday) require the Past Simple tense.",
            topic: "Past Simple"
        },
        {
            question: "What is the correct demonstrative pronoun in: “___ report is urgent”?",
            options: ["It’s", "These", "This", "That one"],
            correct: 2,
            explanation: "We use 'This' for a single item (singular) that is current or near the speaker.",
            topic: "Demonstratives"
        },
        {
            question: "Which of these is a correct use of Present Perfect?",
            options: ["The manager was approved.", "The manager had approve it.", "The manager approves the budget yesterday.", "The manager has approved the budget."],
            correct: 3,
            explanation: "Present Perfect (has/have + past participle) is used for actions that have happened at an unspecified time or have current relevance.",
            topic: "Present Perfect"
        },
        {
            question: "Which sentence correctly uses Present Perfect in a report?",
            options: ["We completed the safety inspection tomorrow.", "We completes the safety inspection.", "We are complete the safety inspection.", "We have completed the safety inspection."],
            correct: 3,
            explanation: "Present Perfect is ideal for reporting completed actions without a specific time reference.",
            topic: "Report Writing"
        },
        {
            question: "Which verb tense fits: “The client ___ a complaint this morning”?",
            options: ["Files", "Filed", "Filing", "Has file"],
            correct: 1,
            explanation: "Since the action occurred 'this morning' (a completed time period in this context), Past Simple 'filed' is correct.",
            topic: "Verb Tenses"
        },
        {
            question: "Which word fits a professional tone?",
            options: ["Request", "Want", "Get", "Ask for"],
            correct: 0,
            explanation: "'Request' is the formal equivalent of 'ask for' or 'want', making it more suitable for professional documents.",
            topic: "Professional Tone"
        },
        {
            question: "Choose the best formal request for a professional email.",
            options: ["I would appreciate it if you could send the report.", "Send me the report right now.", "Can you give me that thing soon?", "I want that report fast."],
            correct: 0,
            explanation: "Using 'I would appreciate it if you could...' is a highly professional and polite way to make a request.",
            topic: "Formal Requests"
        },
        {
            question: "What word best replaces “a lot of” in formal writing?",
            options: ["Heaps", "Numerous", "Tons", "Loads"],
            correct: 1,
            explanation: "'Numerous' is a formal quantifier, whereas 'heaps', 'tons', and 'loads' are colloquial/informal.",
            topic: "Formal Vocabulary"
        },
        {
            question: "What is the best opening for a formal message?",
            options: ["I hope this message finds you well.", "Hiya, it’s me.", "Yo! Need something from you.", "Hey! How’s it going?"],
            correct: 0,
            explanation: "'I hope this message finds you well' is a standard, polite, and formal opening for business emails.",
            topic: "Email Openings"
        },
        {
            question: "Choose the correct layout order for a delivery note.",
            options: ["Title – Reference – Text – Greetings", "Company – Subject – Contents – Closing", "Date – Client – Products – Comments – Signature", "Topic – Body – Footer – Address"],
            correct: 2,
            explanation: "A standard delivery note follows a logical order: Date, Client info, Product details, additional Comments, and a Signature.",
            topic: "Documentation"
        },
        {
            question: "Choose the correct spelling in a professional context.",
            options: ["Receved", "Recieved", "Recive", "Received"],
            correct: 3,
            explanation: "The correct spelling is 'Received' (remember the rule: 'i' before 'e' except after 'c').",
            topic: "Spelling"
        },
        {
            question: "Which sentence uses a correct sequencing connector?",
            options: ["You should checking the container label firstly.", "Firsted, check label.", "First, check the container label.", "Checking first container label."],
            correct: 2,
            explanation: "'First' is a sequencing connector used at the start of an instruction followed by the imperative verb.",
            topic: "Instructions"
        },
        {
            question: "What is the correct structure for a professional email?",
            options: ["Signature – Introduction – Link – Conclusion", "Subject – Address – Chart – Salutation", "Greeting – Purpose – Details – Closing – Signature", "Body – Signature – Title – Greeting"],
            correct: 2,
            explanation: "Professional emails must follow a standard flow: Greeting, Purpose of the email, Details, Closing, and Signature.",
            topic: "Email Structure"
        },
        {
            question: "Which pronoun is possessive?",
            options: ["These folders are their", "These folders are theirs", "These folders are them", "These folders are they"],
            correct: 1,
            explanation: "'Theirs' is a possessive pronoun used to show ownership without following it with a noun.",
            topic: "Possessive Pronouns"
        },
        {
            question: "Which is an example of a formal apology in writing?",
            options: ["Oops, didn’t mean that.", "Sorry for that.", "My bad.", "I apologise for the delay."],
            correct: 3,
            explanation: "'I apologise for...' is the formal way to express regret in professional writing.",
            topic: "Professional Tone"
        },
        {
            question: "Choose the most coherent sentence.",
            options: ["The form is completed and signed.", "Form done is.", "Form was and signed.", "It did sign and complete."],
            correct: 0,
            explanation: "This sentence follows a clear Subject + Verb + Complement structure using passive voice correctly.",
            topic: "Sentence Coherence"
        },
        {
            question: "What type of sentence is “We deliver products every day”?",
            options: ["Past Simple", "Present Simple", "Present Perfect", "Present Continuous"],
            correct: 1,
            explanation: "This is Present Simple because it describes a habit or a routine (indicated by 'every day').",
            topic: "Verb Tenses"
        },
        {
            question: "What is a professional synonym for “help”?",
            options: ["Assist", "Fix", "Hold", "Aidy"],
            correct: 0,
            explanation: "'Assist' is a more formal and professional synonym for the verb 'to help'.",
            topic: "Vocabulary"
        },
        {
            question: "Which email closing is most appropriate in formal writing?",
            options: ["Bye bye", "Cheers", "Later", "Kind regards"],
            correct: 3,
            explanation: "'Kind regards' is the standard formal closing for business correspondence.",
            topic: "Email Closings"
        }
    ],
    ut5: [
        {
            question: "You should __ a glossary with professional terms.",
            options: ["create", "to create", "creates", "creating"],
            correct: 0,
            explanation: "The modal verb 'should' is always followed by the base form of the verb without 'to'.",
            topic: "Modal Verbs"
        },
        {
            question: "I recommend __ a digital dictionary like Cambridge.",
            options: ["used", "use", "to using", "using"],
            correct: 3,
            explanation: "The verb 'recommend' is followed by a gerund (-ing form) when followed directly by another verb.",
            topic: "Verb Patterns"
        },
        {
            question: "Look at those clouds! It’s __ to rain soon.",
            options: ["will", "shall", "might", "going"],
            correct: 3,
            explanation: "We use 'be going to' for predictions when there is clear physical evidence in the present.",
            topic: "Future Forms"
        },
        {
            question: "You __ practise if you want to reach your goals.",
            options: ["should", "may", "could", "shall"],
            correct: 0,
            explanation: "We use 'should' to give advice or recommendations.",
            topic: "Modal Verbs"
        },
        {
            question: "We avoided __ long texts in the beginning.",
            options: ["to read", "reading", "read", "to reading"],
            correct: 1,
            explanation: "The verb 'avoid' is followed by a gerund (-ing form).",
            topic: "Verb Patterns"
        },
        {
            question: "If you __ every day, your grammar will improve.",
            options: ["practising", "practise", "practised", "practises"],
            correct: 1,
            explanation: "In the First Conditional, the 'if' clause uses the Present Simple.",
            topic: "Conditionals"
        },
        {
            question: "Choose the correct option: I created a list of terms with the suffix __.",
            options: ["-ment", "-ing", "-ful", "-ly"],
            correct: 0,
            explanation: "The suffix '-ment' is used to turn verbs into nouns (e.g., manage -> management).",
            topic: "Word Formation"
        },
        {
            question: "I’m __ to start an online course next week.",
            options: ["shall", "will", "going", "would"],
            correct: 2,
            explanation: "The structure 'be going to' is used to express intentions and planned actions in the future.",
            topic: "Future Forms"
        },
        {
            question: "We __ finish the task before 6 if we don’t focus.",
            options: ["won’t", "can’t", "wouldn’t", "don’t"],
            correct: 0,
            explanation: "In the First Conditional, the result clause uses 'will' or 'won't' for future consequences.",
            topic: "Conditionals"
        },
        {
            question: "They __ finish the vocabulary task on time if they focus.",
            options: ["going to", "would", "will", "shall"],
            correct: 2,
            explanation: "In the First Conditional, we use 'will' in the main clause to express a likely result.",
            topic: "Conditionals"
        },
        {
            question: "He always __ his vocabulary in a personal journal.",
            options: ["organises", "organising", "organisation", "organised"],
            correct: 0,
            explanation: "For habitual actions in the Present Simple with 'He/She/It', we add '-s' or '-es' to the verb.",
            topic: "Present Simple"
        },
        {
            question: "She __ to join the course before checking the reviews.",
            options: ["decided", "decide", "was decide", "has decide"],
            correct: 0,
            explanation: "We use the Past Simple ('decided') for actions that were completed at a specific time in the past.",
            topic: "Past Simple"
        },
        {
            question: "The instructions were not very __. I couldn’t follow them.",
            options: ["clearness", "clearly", "clarify", "clear"],
            correct: 3,
            explanation: "After the verb 'to be' (were), we use an adjective ('clear') to describe the noun (instructions).",
            topic: "Adjectives vs Adverbs"
        },
        {
            question: "Please __ the app and follow the instructions.",
            options: ["to open", "opens", "opening", "open"],
            correct: 3,
            explanation: "For instructions or imperatives, we use the base form of the verb without 'to'.",
            topic: "Imperatives"
        },
        {
            question: "I __ review my notes after dinner every day.",
            options: ["usual", "usefully", "usually", "used"],
            correct: 2,
            explanation: "We use adverbs of frequency like 'usually' to describe how often an action happens.",
            topic: "Adverbs of Frequency"
        },
        {
            question: "You __ use this planner to organise your learning routine.",
            options: ["have can", "musted", "can", "may to"],
            correct: 2,
            explanation: "'Can' is a modal verb used to express possibility or permission.",
            topic: "Modal Verbs"
        },
        {
            question: "She suggested __ the video before the quiz.",
            options: ["watching", "to watching", "watch", "to watch"],
            correct: 0,
            explanation: "The verb 'suggest' is followed by a gerund (-ing form).",
            topic: "Verb Patterns"
        },
        {
            question: "The tool you use must be __ and accurate.",
            options: ["reliance", "rely", "reliably", "reliable"],
            correct: 3,
            explanation: "We use the adjective 'reliable' to describe the qualities of a tool or person.",
            topic: "Adjectives"
        },
        {
            question: "He needs to __ his time better during the week.",
            options: ["manages", "management", "managing", "manage"],
            correct: 3,
            explanation: "The structure 'need to' is followed by the base form of the verb.",
            topic: "Infinitive of Purpose"
        },
        {
            question: "We’ll have problems understanding if we __ the audio again.",
            options: ["didn’t play", "not play", "won’t play", "don’t play"],
            correct: 3,
            explanation: "In the First Conditional, negative 'if' clauses are formed with 'don't' or 'doesn't'.",
            topic: "Conditionals"
        }
    ],
    ut6: [
        {
            question: "Which sentence is the most polite way to ask for an interview?",
            options: ["You must give me an interview.", "I would be grateful if you could consider me for an interview.", "Can I have an interview?", "Give me an interview, please."],
            correct: 1,
            explanation: "Using conditional structures like 'I would be grateful if you could...' is the standard professional way to make requests in a cover letter.",
            topic: "Formal Requests"
        },
        {
            question: "Which passive sentence is correct for a complaint?",
            options: ["A replacement promised by them.", "A replacement was promised, but not received.", "The customers promise a replacement.", "The company promised a replacement."],
            correct: 1,
            explanation: "The passive voice 'was promised' is used here to focus on the service failure rather than the person who made the promise.",
            topic: "Passive Voice"
        },
        {
            question: "She usually _______ her homework after dinner.",
            options: ["does", "did", "do", "is doing"],
            correct: 0,
            explanation: "We use Present Simple ('does') for habitual actions. With 'She', the verb 'do' takes the '-es' ending.",
            topic: "Present Simple"
        },
        {
            question: "Look at those dark clouds! It _______ rain soon.",
            options: ["is going to", "was going to", "will", "has"],
            correct: 0,
            explanation: "We use 'be going to' for predictions based on present evidence (the dark clouds).",
            topic: "Future Forms"
        },
        {
            question: "Which is the best opening sentence for a letter of application?",
            options: ["I saw your ad.", "I am writing to apply for the position of Hospital Assistant.", "I really want this job and I hope you give it to me.", "Please give me the Hospital Assistant job."],
            correct: 1,
            explanation: "A formal application should start with a clear statement of purpose using professional vocabulary.",
            topic: "Letter of Application"
        },
        {
            question: "In a complaint letter, which is the most formal request for action?",
            options: ["A refund or replacement is expected as soon as possible.", "You need to fix this quickly.", "I want my money back now.", "Please send it tomorrow."],
            correct: 0,
            explanation: "Using the passive voice ('is expected') and formal phrases like 'as soon as possible' maintains a professional but firm tone.",
            topic: "Complaint Letters"
        },
        {
            question: "Which sentence is written in a formal style suitable for a letter of application?",
            options: ["This job looks cool and I need it.", "I’m good with people and I wanna work with you.", "I’m super nice and easy to get along with.", "I have good communication skills and I enjoy working with people."],
            correct: 3,
            explanation: "Formal writing avoids slang ('wanna', 'cool') and uses precise professional terminology like 'communication skills'.",
            topic: "Formal Style"
        },
        {
            question: "I _______ in this town since I was a child.",
            options: ["live", "lived", "have lived", "am living"],
            correct: 2,
            explanation: "We use Present Perfect ('have lived') with 'since' to describe an action that started in the past and continues to the present.",
            topic: "Present Perfect"
        },
        {
            question: "Choose the best passive form: “The package _______ on time yesterday.”",
            options: ["delivered", "is delivering", "delivers", "was delivered"],
            correct: 3,
            explanation: "For a completed action in the past where the object is the focus, we use Past Simple Passive (was/were + past participle).",
            topic: "Passive Voice"
        },
        {
            question: "Why should contractions (like I’m or don’t) be avoided in a letter of application?",
            options: ["Because they are too long", "Because they are old-fashioned", "Because they are informal", "Because they are not understood"],
            correct: 2,
            explanation: "Contractions are considered informal and should be written in full (I am, do not) in formal business correspondence.",
            topic: "Formal Writing Rules"
        },
        {
            question: "I promise I _______ help you with your letter later.",
            options: ["have", "am going to", "do", "will"],
            correct: 3,
            explanation: "We use 'will' for promises and spontaneous offers made at the moment of speaking.",
            topic: "Future Forms"
        },
        {
            question: "They _______ already finished their project.",
            options: ["have", "are", "will", "did"],
            correct: 0,
            explanation: "The Present Perfect auxiliary 'have' is required here to form 'have finished'.",
            topic: "Present Perfect"
        },
        {
            question: "Which sentence is in the passive voice?",
            options: ["The shop will send the phone tomorrow.", "A confirmation email was sent to me.", "They are packing the order now.", "The company sent me an email."],
            correct: 1,
            explanation: "In 'A confirmation email was sent', the subject receives the action, which is the definition of passive voice.",
            topic: "Passive Voice"
        },
        {
            question: "Which ending is correct after “Dear Sir or Madam”?",
            options: ["Yours sincerely,", "Cheers,", "Yours faithfully,", "Best wishes,"],
            correct: 2,
            explanation: "When the recipient's name is unknown (Dear Sir/Madam), the formal closing is 'Yours faithfully'. If the name is known, use 'Yours sincerely'.",
            topic: "Letter Closings"
        },
        {
            question: "How should you begin a formal letter when you don’t know the name of the person?",
            options: ["Dear Sir or Madam,", "Dear friend,", "Hello,", "Hi there,"],
            correct: 0,
            explanation: "'Dear Sir or Madam' is the standard formal salutation when the specific contact person is unknown.",
            topic: "Formal Salutations"
        },
        {
            question: "We _______ visit my grandparents this weekend. It’s already planned.",
            options: ["have", "will", "did", "are going to"],
            correct: 3,
            explanation: "We use 'be going to' for future plans and intentions that have already been decided.",
            topic: "Future Forms"
        },
        {
            question: "Be careful! That box looks heavy. I _______ carry it for you.",
            options: ["am going to", "have", "will", "did"],
            correct: 2,
            explanation: "We use 'will' for spontaneous offers and decisions made at the time of speaking.",
            topic: "Future Forms"
        },
        {
            question: "Which sentence explains why you want a hospital job in a formal way?",
            options: ["I want to work in a hospital because I like helping people.", "Hospitals are interesting, so I’ll try.", "I want money, so this job is good.", "My parents told me to apply."],
            correct: 0,
            explanation: "Expressing a motivation based on professional interest or personal values in a clear, standard way is essential for cover letters.",
            topic: "Letter of Application"
        },
        {
            question: "Every Monday, she _______ to the hospital to volunteer.",
            options: ["is going", "goes", "go", "went"],
            correct: 1,
            explanation: "The time marker 'Every Monday' indicates a routine, which requires the Present Simple ('goes').",
            topic: "Present Simple"
        },
        {
            question: "Why is the passive voice often used in reports or complaints?",
            options: ["To write faster and shorter", "Because active voice is not allowed", "To focus on the actions instead of the person", "To make the text more personal"],
            correct: 2,
            explanation: "Passive voice provides an objective and formal tone by highlighting what happened rather than who performed the action.",
            topic: "Passive Voice"
        }
    ]
};

