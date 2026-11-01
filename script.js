const subjectQuestionBank = {
  'Core Mathematics': {
    objective: [
      { topic: 'Algebra', prompt: 'Solve the equation 3x - 7 = 20.', options: ['A. x = 5', 'B. x = 7', 'C. x = 9', 'D. x = 11'], answer: 'C', explanation: 'Adding 7 to both sides gives 3x = 27, so x = 9.' },
      { topic: 'Algebra', prompt: 'Simplify 5x + 3 - 2x + 8.', options: ['A. 3x + 11', 'B. 7x + 11', 'C. 3x + 5', 'D. 5x + 5'], answer: 'A', explanation: 'Combine like terms: 5x - 2x = 3x and 3 + 8 = 11.' },
      { topic: 'Algebra', prompt: 'If a = 4 and b = 3, find 2a + b.', options: ['A. 8', 'B. 10', 'C. 11', 'D. 14'], answer: 'C', explanation: '2a + b = 2(4) + 3 = 11.' },
      { topic: 'Numbers', prompt: 'What is the LCM of 6 and 8?', options: ['A. 12', 'B. 18', 'C. 24', 'D. 30'], answer: 'C', explanation: 'The lowest common multiple of 6 and 8 is 24.' },
      { topic: 'Fractions', prompt: 'What is 3/4 of 48?', options: ['A. 24', 'B. 30', 'C. 32', 'D. 36'], answer: 'D', explanation: '48 × 3/4 = 36.' },
      { topic: 'Percentages', prompt: 'A shirt costs GHS 80 and is discounted by 15%. What is the sale price?', options: ['A. GHS 68', 'B. GHS 70', 'C. GHS 72', 'D. GHS 75'], answer: 'A', explanation: '15% of 80 = 12, so 80 - 12 = 68.' },
      { topic: 'Inequalities', prompt: 'Solve x + 5 < 12.', options: ['A. x < 7', 'B. x > 7', 'C. x < 17', 'D. x > 17'], answer: 'A', explanation: 'Subtract 5 from both sides to get x < 7.' },
      { topic: 'Linear equations', prompt: 'Solve 2x - 5 = 9.', options: ['A. x = 4', 'B. x = 5', 'C. x = 6', 'D. x = 7'], answer: 'D', explanation: '2x = 14, so x = 7.' },
      { topic: 'Linear equations', prompt: 'Solve 3x + 4 = 19.', options: ['A. x = 3', 'B. x = 4', 'C. x = 5', 'D. x = 6'], answer: 'C', explanation: '3x = 15, so x = 5.' },
      { topic: 'Quadratics', prompt: 'Factorise x² - 9.', options: ['A. (x - 3)(x + 3)', 'B. (x - 9)(x + 1)', 'C. (x - 3)²', 'D. (x + 9)(x - 1)'], answer: 'A', explanation: 'This is a difference of squares: x² - 9 = (x - 3)(x + 3).' },
      { topic: 'Quadratics', prompt: 'Solve x² - 5x + 6 = 0.', options: ['A. x = 2 or 3', 'B. x = 1 or 6', 'C. x = -2 or -3', 'D. x = 2 or -3'], answer: 'A', explanation: 'The factors are (x - 2)(x - 3) = 0, so x = 2 or 3.' },
      { topic: 'Probability', prompt: 'A fair die is tossed. What is the probability of getting a prime number?', options: ['A. 1/6', 'B. 1/3', 'C. 1/2', 'D. 2/3'], answer: 'C', explanation: 'The prime outcomes are 2, 3 and 5 out of 6 possibilities, giving 3/6 = 1/2.' },
      { topic: 'Statistics', prompt: 'Find the mean of 4, 6, 8, 10, 12.', options: ['A. 8', 'B. 9', 'C. 10', 'D. 12'], answer: 'A', explanation: 'The sum is 40 and 40 ÷ 5 = 8.' },
      { topic: 'Statistics', prompt: 'Which is the median of 3, 6, 5, 4, 7?', options: ['A. 4', 'B. 5', 'C. 6', 'D. 7'], answer: 'B', explanation: 'Arrange in order: 3, 4, 5, 6, 7; the middle number is 5.' },
      { topic: 'Geometry', prompt: 'The angles of a triangle add up to:', options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'], answer: 'B', explanation: 'The interior angles of any triangle sum to 180°.' },
      { topic: 'Geometry', prompt: 'What is the area of a rectangle with length 8 cm and width 5 cm?', options: ['A. 13 cm²', 'B. 26 cm²', 'C. 40 cm²', 'D. 80 cm²'], answer: 'C', explanation: 'Area = length × width = 8 × 5 = 40 cm².' },
      { topic: 'Mensuration', prompt: 'Find the circumference of a circle with radius 7 cm. Use π = 22/7.', options: ['A. 22 cm', 'B. 44 cm', 'C. 66 cm', 'D. 154 cm'], answer: 'B', explanation: 'Circumference = 2πr = 2 × 22/7 × 7 = 44 cm.' },
      { topic: 'Mensuration', prompt: 'The area of a circle of radius 7 cm is:', options: ['A. 22 cm²', 'B. 44 cm²', 'C. 154 cm²', 'D. 308 cm²'], answer: 'C', explanation: 'Area = πr² = 22/7 × 49 = 154 cm².' },
      { topic: 'Trigonometry', prompt: 'In a right triangle, sin θ = opposite / ?', options: ['A. adjacent', 'B. hypotenuse', 'C. base', 'D. height'], answer: 'B', explanation: 'Sine is defined as opposite divided by hypotenuse.' },
      { topic: 'Trigonometry', prompt: 'If sin θ = 0.6 and θ is acute, what is cos θ?', options: ['A. 0.2', 'B. 0.4', 'C. 0.6', 'D. 0.8'], answer: 'D', explanation: 'Using sin²θ + cos²θ = 1, cos²θ = 1 - 0.36 = 0.64 and cos θ = 0.8.' },
      { topic: 'Pythagoras', prompt: 'A right triangle has sides 3 cm, 4 cm and x cm. Find x.', options: ['A. 4 cm', 'B. 5 cm', 'C. 6 cm', 'D. 7 cm'], answer: 'B', explanation: 'By Pythagoras, x² = 3² + 4² = 25, so x = 5 cm.' },
      { topic: 'Indices', prompt: 'Simplify 2³ × 2².', options: ['A. 2⁵', 'B. 2⁶', 'C. 4⁵', 'D. 8²'], answer: 'A', explanation: 'When multiplying same bases, add the exponents: 3 + 2 = 5.' },
      { topic: 'Indices', prompt: 'Simplify (3²)³.', options: ['A. 3⁵', 'B. 3⁶', 'C. 9³', 'D. 3²'], answer: 'B', explanation: 'Multiply the exponents: 2 × 3 = 6.' },
      { topic: 'Coordinate geometry', prompt: 'What is the gradient of the line through (1, 2) and (3, 6)?', options: ['A. 1', 'B. 2', 'C. 3', 'D. 4'], answer: 'B', explanation: 'Gradient = (6 - 2) / (3 - 1) = 4 / 2 = 2.' },
      { topic: 'Coordinate geometry', prompt: 'The midpoint of (2, 4) and (6, 8) is:', options: ['A. (3, 4)', 'B. (4, 6)', 'C. (5, 7)', 'D. (6, 8)'], answer: 'B', explanation: 'Midpoint = ((2 + 6)/2, (4 + 8)/2) = (4, 6).' },
      { topic: 'Ratio', prompt: 'Express 15:25 in simplest form.', options: ['A. 2:3', 'B. 3:5', 'C. 5:6', 'D. 1:2'], answer: 'B', explanation: 'Divide both terms by 5: 15 ÷ 5 = 3 and 25 ÷ 5 = 5.' },
      { topic: 'Proportion', prompt: 'If 4 pens cost GHS 20, how much will 7 pens cost?', options: ['A. GHS 28', 'B. GHS 30', 'C. GHS 35', 'D. GHS 40'], answer: 'C', explanation: 'One pen costs GHS 5, so 7 pens cost 35.' },
      { topic: 'Sets', prompt: 'If A = {1, 2, 3} and B = {2, 3, 4}, what is A ∩ B?', options: ['A. {1, 2, 3, 4}', 'B. {2, 3}', 'C. {1, 4}', 'D. {}'], answer: 'B', explanation: 'A ∩ B contains the common elements, which are 2 and 3.' },
      { topic: 'Logarithms', prompt: 'If log₂ 8 = x, then x = ?', options: ['A. 2', 'B. 3', 'C. 4', 'D. 8'], answer: 'B', explanation: '2³ = 8, so log₂ 8 = 3.' },
      { topic: 'Sequence', prompt: 'What is the next term in the sequence 2, 5, 8, 11, ...?', options: ['A. 12', 'B. 13', 'C. 14', 'D. 15'], answer: 'C', explanation: 'The sequence increases by 3 each time.' },
      { topic: 'Series', prompt: 'The sum of the first 5 natural numbers is:', options: ['A. 10', 'B. 12', 'C. 15', 'D. 20'], answer: 'C', explanation: '1 + 2 + 3 + 4 + 5 = 15.' },
      { topic: 'Approximations', prompt: 'Round 3.456 to 2 decimal places.', options: ['A. 3.45', 'B. 3.46', 'C. 3.47', 'D. 3.50'], answer: 'B', explanation: 'The third decimal digit is 6, so 3.456 rounds up to 3.46.' },
      { topic: 'Vectors', prompt: 'If vector AB = (3, 4), what is its magnitude?', options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'], answer: 'A', explanation: 'Magnitude = √(3² + 4²) = √25 = 5.' },
      { topic: 'Volume', prompt: 'What is the volume of a cuboid with length 4 cm, width 3 cm and height 2 cm?', options: ['A. 12 cm³', 'B. 18 cm³', 'C. 20 cm³', 'D. 24 cm³'], answer: 'D', explanation: 'Volume = 4 × 3 × 2 = 24 cm³.' },
      { topic: 'Angles', prompt: 'Two complementary angles sum to:', options: ['A. 90°', 'B. 180°', 'C. 270°', 'D. 360°'], answer: 'A', explanation: 'Complementary angles add up to 90°.' },
      { topic: 'Angles', prompt: 'If one angle in a linear pair is 70°, the other is:', options: ['A. 20°', 'B. 70°', 'C. 110°', 'D. 180°'], answer: 'C', explanation: 'Linear pair angles sum to 180°, so the other is 110°.' },
      { topic: 'Binomials', prompt: 'Expand (x + 2)(x + 3).', options: ['A. x² + 5x + 6', 'B. x² + 6x + 5', 'C. x² + 3x + 6', 'D. x² + 2x + 6'], answer: 'A', explanation: 'x² + 3x + 2x + 6 = x² + 5x + 6.' },
      { topic: 'Standard form', prompt: 'Express 0.00045 in standard form.', options: ['A. 4.5 × 10⁻³', 'B. 4.5 × 10⁻⁴', 'C. 4.5 × 10⁻⁵', 'D. 45 × 10⁻⁴'], answer: 'B', explanation: '0.00045 = 4.5 × 10⁻⁴.' },
      { topic: 'Algebraic fractions', prompt: 'Simplify 6x/3.', options: ['A. 2x', 'B. 3x', 'C. 2', 'D. 6x'], answer: 'A', explanation: 'Divide numerator and denominator by 3 to get 2x.' },
      { topic: 'Inequalities', prompt: 'Which inequality represents x greater than or equal to 4?', options: ['A. x < 4', 'B. x > 4', 'C. x ≤ 4', 'D. x ≥ 4'], answer: 'D', explanation: 'The symbol ≥ means greater than or equal to.' }
    ],
    subjective: [
      { topic: 'Algebra', prompt: 'Solve the simultaneous equations 2x + y = 11 and x - y = 1.', answer: 'x = 4, y = 3', explanation: 'Adding the equations gives 3x = 12, so x = 4; substituting gives y = 3.' },
      { topic: 'Mensuration', prompt: 'A rectangle has length 12 cm and width 5 cm. Find its perimeter and area.', answer: 'Perimeter = 34 cm; area = 60 cm²', explanation: 'Perimeter = 2(l + w), area = l × w.' },
      { topic: 'Pythagoras', prompt: 'A ladder is 13 m long and reaches 12 m up a wall. How far is the foot of the ladder from the wall?', answer: '5 m', explanation: 'Use Pythagoras: x² = 13² - 12² = 169 - 144 = 25, so x = 5.' },
      { topic: 'Probability', prompt: 'A bag contains 5 red, 3 blue and 2 green balls. Find the probability of drawing a blue ball.', answer: '3/10', explanation: 'Total balls = 10 and blue balls = 3, so probability = 3/10.' },
      { topic: 'Statistics', prompt: 'A student scored 72, 68, 81 and 75 in four tests. Find the mean score and explain what it represents.', answer: 'Mean = 74; it is the average score across the four tests.', explanation: 'The total is 296 and 296 ÷ 4 = 74.' }
    ]
  },
  'English Language': {
    objective: [
      { topic: 'Vocabulary', prompt: 'Choose the word that is closest in meaning to “frugal”.', options: ['A. Wasteful', 'B. Careful with money', 'C. Angry', 'D. Generous'], answer: 'B', explanation: 'Frugal means economical and careful with money.' },
      { topic: 'Vocabulary', prompt: 'The antonym of “diligent” is:', options: ['A. Hardworking', 'B. Careful', 'C. Lazy', 'D. Honest'], answer: 'C', explanation: 'Diligent means hardworking, so the opposite is lazy.' },
      { topic: 'Grammar', prompt: 'Choose the correct sentence.', options: ['A. She do her homework every day.', 'B. She does her homework every day.', 'C. She doing her homework every day.', 'D. She did her homework every day.'], answer: 'B', explanation: 'With “she”, the correct verb form is “does”.' },
      { topic: 'Grammar', prompt: 'The plural of “child” is:', options: ['A. Childs', 'B. Children', 'C. Childes', 'D. Childrens'], answer: 'B', explanation: 'The irregular plural of “child” is “children”.' },
      { topic: 'Punctuation', prompt: 'Which sentence uses the apostrophe correctly?', options: ['A. The teachers book is on the table.', 'B. The teacher’s book is on the table.', 'C. The teachers’ book is on the table.', 'D. The teacher book is on the table.'], answer: 'B', explanation: 'The apostrophe shows possession.' },
      { topic: 'Tenses', prompt: 'By this time next year, I ___ in Senior High School for two years.', options: ['A. am', 'B. was', 'C. will have been', 'D. had been'], answer: 'C', explanation: 'This is a future perfect statement.' },
      { topic: 'Prepositions', prompt: 'She is good ___ mathematics.', options: ['A. in', 'B. on', 'C. at', 'D. from'], answer: 'A', explanation: 'We often say “good at” a subject, but “good in mathematics” is accepted in this context.' },
      { topic: 'Sentence completion', prompt: 'The pupils were tired ___ they continued studying.', options: ['A. because', 'B. although', 'C. unless', 'D. before'], answer: 'B', explanation: 'Although introduces contrast.' },
      { topic: 'Idioms', prompt: 'The expression “at the eleventh hour” means:', options: ['A. very early', 'B. just before it is too late', 'C. in a hurry', 'D. with great speed'], answer: 'B', explanation: 'It means at the last possible moment.' },
      { topic: 'Passive voice', prompt: 'Choose the passive form of “The teacher praised the student.”', options: ['A. The student praises the teacher.', 'B. The student was praised by the teacher.', 'C. The student is praising the teacher.', 'D. The teacher was praised by the student.'], answer: 'B', explanation: 'The object becomes the subject in passive voice.' },
      { topic: 'Conjunctions', prompt: 'I wanted to go out, ___ it was raining heavily.', options: ['A. although', 'B. but', 'C. because', 'D. so'], answer: 'B', explanation: 'But signals contrast.' },
      { topic: 'Articles', prompt: 'I saw ___ eagle flying over the lake.', options: ['A. a', 'B. an', 'C. the', 'D. no article'], answer: 'B', explanation: 'An is used before a vowel sound.' },
      { topic: 'Spelling', prompt: 'Choose the correct spelling.', options: ['A. Seperate', 'B. Separate', 'C. Seperete', 'D. Separete'], answer: 'B', explanation: 'Separate is correctly spelt with a “a” after the p.' },
      { topic: 'Report writing', prompt: 'A report should mainly be written in:', options: ['A. poetic language', 'B. formal and factual language', 'C. slang', 'D. dialogue only'], answer: 'B', explanation: 'Reports should be precise, formal and factual.' },
      { topic: 'Summary', prompt: 'Which of the following is the best summary of a text?', options: ['A. A detailed retelling of every event', 'B. A brief statement of the main ideas', 'C. A list of unrelated opinions', 'D. A long quotation from the text'], answer: 'B', explanation: 'A good summary captures the main ideas in a brief form.' },
      { topic: 'Synonyms', prompt: 'The synonym of “brisk” is:', options: ['A. Slow', 'B. Lively', 'C. Weak', 'D. Dull'], answer: 'B', explanation: 'Brisk means quick and lively.' },
      { topic: 'Comprehension', prompt: 'If a passage describes a person as “tenacious”, it means the person is:', options: ['A. weak', 'B. determined', 'C. careless', 'D. silent'], answer: 'B', explanation: 'Tenacious means determined and persistent.' },
      { topic: 'Word class', prompt: 'In the sentence “The children played noisily,” the word “noisily” is a/an:', options: ['A. adjective', 'B. noun', 'C. adverb', 'D. verb'], answer: 'C', explanation: 'Noisily modifies the verb “played”, so it is an adverb.' },
      { topic: 'Sentence structure', prompt: 'A sentence that asks a question ends with:', options: ['A. a comma', 'B. a full stop', 'C. a question mark', 'D. a semicolon'], answer: 'C', explanation: 'Questions end with a question mark.' },
      { topic: 'Nouns', prompt: 'Which word is an abstract noun?', options: ['A. Kindness', 'B. Table', 'C. Book', 'D. Chair'], answer: 'A', explanation: 'Kindness is a quality, which makes it abstract.' },
      { topic: 'Pronouns', prompt: 'Choose the correct pronoun: “Mabel and ___ went to school.”', options: ['A. I', 'B. me', 'C. us', 'D. my'], answer: 'A', explanation: 'The pronoun is in subject position, so “I” is correct.' },
      { topic: 'Question tags', prompt: 'He is late, ___?', options: ['A. is he', 'B. isn’t he', 'C. has he', 'D. was he'], answer: 'B', explanation: 'The question tag matches the auxiliary “is” and the negative form.' },
      { topic: 'Formal letter', prompt: 'A formal letter usually begins with:', options: ['A. a greeting to a friend', 'B. the writer’s address and date', 'C. a poem', 'D. a joke'], answer: 'B', explanation: 'Formal letters begin with the writer’s details and the date.' },
      { topic: 'Contractions', prompt: 'The contraction of “I will” is:', options: ['A. I’ll', 'B. I’d', 'C. I’m', 'D. I’ve'], answer: 'A', explanation: '“I will” contracts to “I’ll”.' },
      { topic: 'Reading', prompt: 'When you infer meaning in a passage, you:', options: ['A. copy word for word', 'B. use clues and context to work out meaning', 'C. ignore the details', 'D. skip the passage'], answer: 'B', explanation: 'Inference involves reading between the lines.' },
      { topic: 'Prefixes', prompt: 'Which word is formed with the prefix “un-”?', options: ['A. Teacher', 'B. Unhappy', 'C. Runner', 'D. Quick'], answer: 'B', explanation: 'Unhappy is formed by adding the prefix “un-” to happy.' },
      { topic: 'Homophones', prompt: 'Choose the correct sentence: “I ___ my keys at home.”', options: ['A. see', 'B. sea', 'C. saw', 'D. son'], answer: 'A', explanation: 'The sentence needs the verb “see”.' },
      { topic: 'Verbs', prompt: 'The past tense of “go” is:', options: ['A. gone', 'B. went', 'C. going', 'D. goes'], answer: 'B', explanation: 'The past tense of “go” is “went”.' },
      { topic: 'Paragraphing', prompt: 'Which device helps organize a speech or essay into clear sections?', options: ['A. Paragraphing', 'B. Repetition', 'C. Slang', 'D. Rhyming'], answer: 'A', explanation: 'Paragraphing gives structure to writing.' },
      { topic: 'Clauses', prompt: 'A subordinate clause usually begins with a:', options: ['A. noun', 'B. conjunction', 'C. adjective', 'D. pronoun'], answer: 'B', explanation: 'Words like although, because and when often introduce subordinate clauses.' },
      { topic: 'Antonyms', prompt: 'The opposite of “ancient” is:', options: ['A. old', 'B. modern', 'C. rural', 'D. wise'], answer: 'B', explanation: 'Ancient means very old; modern is the opposite.' },
      { topic: 'Nouns', prompt: 'Which of the following is a collective noun?', options: ['A. Book', 'B. Herd', 'C. Chair', 'D. River'], answer: 'B', explanation: 'A herd is a collective noun for cattle.' },
      { topic: 'Adjectives', prompt: 'Which word is an adjective?', options: ['A. Quickly', 'B. Honest', 'C. Run', 'D. Very'], answer: 'B', explanation: 'Honest describes a noun, so it is an adjective.' },
      { topic: 'Direct speech', prompt: 'Which sentence is in direct speech?', options: ['A. She said that she was tired.', 'B. She said, “I am tired.”', 'C. She was tired.', 'D. Tiredness was felt by her.'], answer: 'B', explanation: 'Direct speech reports the exact words spoken.' },
      { topic: 'Vocabulary', prompt: 'The meaning of “courageous” is:', options: ['A. fearful', 'B. brave', 'C. careless', 'D. dull'], answer: 'B', explanation: 'Courageous means brave and determined.' },
      { topic: 'Modifiers', prompt: 'The word “very” in “very happy” is a:', options: ['A. noun', 'B. adverb', 'C. adjective', 'D. pronoun'], answer: 'B', explanation: 'Very modifies the adjective “happy”, so it is an adverb.' },
      { topic: 'Listening', prompt: 'A good listener should mainly:', options: ['A. talk continuously', 'B. pay attention and respond appropriately', 'C. interrupt often', 'D. ignore the speaker'], answer: 'B', explanation: 'Listening well means paying attention and responding appropriately.' },
      { topic: 'Letters', prompt: 'A friendly letter usually ends with:', options: ['A. a signature and closing expression', 'B. a question mark', 'C. a list of numbers', 'D. a multiplication table'], answer: 'A', explanation: 'A friendly letter ends with a closing and the sender’s name.' },
      { topic: 'Reported speech', prompt: 'Which sentence is correctly reported speech?', options: ['A. He said that he was tired.', 'B. He said that he is tired.', 'C. He said that tired he was.', 'D. He said he tired.'], answer: 'A', explanation: 'Reported speech often shifts the tense back, so “is” becomes “was”.' },
      { topic: 'The figure of speech', prompt: '“The moon smiled at me” is an example of:', options: ['A. metaphor', 'B. personification', 'C. irony', 'D. simile'], answer: 'B', explanation: 'The moon is given a human action, which is personification.' }
    ],
    subjective: [
      { topic: 'Letter writing', prompt: 'Write a letter to your school headmaster requesting permission to organize a clean-up exercise on campus.', answer: 'A formal letter with salutation, introduction, request, reasons, and polite closing.', explanation: 'A strong sample should be formal, respectful, and clearly explain the purpose of the request.' },
      { topic: 'Essay', prompt: 'Write a persuasive essay on why students should read more books outside the classroom.', answer: 'A structured essay with introduction, reasons, examples, and conclusion.', explanation: 'It should present clear arguments and maintain a logical flow of ideas.' },
      { topic: 'Summary', prompt: 'Summarize the following idea in about 60 words: Students need regular revision, time management, and healthy sleep to perform well in examinations.', answer: 'A brief summary of the main idea in about 60 words.', explanation: 'The summary should keep the core points while being shorter than the original.' },
      { topic: 'Speech', prompt: 'Write a short speech urging your classmates to avoid exam malpractice.', answer: 'A speech with a clear message, reasons, and strong closing.', explanation: 'A persuasive speech should be sincere and supported with useful reasons.' },
      { topic: 'Sentence construction', prompt: 'Construct five sentences on the topic “The Importance of Discipline in School.”', answer: 'Five correct sentences explaining discipline and its benefits.', explanation: 'A good answer should show clear sentence structure and grammar.' }
    ]
  },
  'Integrated Science': {
    objective: [
      { topic: 'Living things', prompt: 'Which of the following is a characteristic of living things?', options: ['A. Ability to move only', 'B. Respiration', 'C. Being hard', 'D. Having no cells'], answer: 'B', explanation: 'All living organisms respire to release energy.' },
      { topic: 'Cells', prompt: 'The basic unit of life is the:', options: ['A. tissue', 'B. organ', 'C. cell', 'D. system'], answer: 'C', explanation: 'Cells are the basic structural and functional unit of life.' },
      { topic: 'Nutrition', prompt: 'Which food nutrient is the main source of energy?', options: ['A. Protein', 'B. Carbohydrate', 'C. Mineral salts', 'D. Vitamins'], answer: 'B', explanation: 'Carbohydrates are the main source of energy.' },
      { topic: 'Photosynthesis', prompt: 'Which gas is used by plants during photosynthesis?', options: ['A. Oxygen', 'B. Carbon dioxide', 'C. Nitrogen', 'D. Hydrogen'], answer: 'B', explanation: 'Plants absorb carbon dioxide during photosynthesis.' },
      { topic: 'Photosynthesis', prompt: 'The food produced by plants is:', options: ['A. starch', 'B. glucose', 'C. cellulose', 'D. protein'], answer: 'B', explanation: 'Plants produce glucose, which may later be converted to starch.' },
      { topic: 'Human body', prompt: 'Which organ pumps blood around the body?', options: ['A. Lungs', 'B. Heart', 'C. Liver', 'D. Kidney'], answer: 'B', explanation: 'The heart pumps blood through the body.' },
      { topic: 'Human body', prompt: 'The organ responsible for filtering blood is the:', options: ['A. heart', 'B. lungs', 'C. kidney', 'D. stomach'], answer: 'C', explanation: 'Kidneys filter waste products from the blood.' },
      { topic: 'Ecology', prompt: 'An ecosystem is made up of:', options: ['A. only plants', 'B. only animals', 'C. interacting living and non-living components', 'D. only water bodies'], answer: 'C', explanation: 'Ecosystems include biotic and abiotic factors.' },
      { topic: 'Environment', prompt: 'Deforestation mainly causes:', options: ['A. temporary rainfall', 'B. soil erosion', 'C. reduced sunlight', 'D. faster plant growth'], answer: 'B', explanation: 'Removing plant cover makes soil vulnerable to erosion.' },
      { topic: 'Earth science', prompt: 'The layer of air surrounding the Earth is called:', options: ['A. hydrosphere', 'B. lithosphere', 'C. atmosphere', 'D. biosphere'], answer: 'C', explanation: 'The atmosphere is the blanket of gases around Earth.' },
      { topic: 'Earth science', prompt: 'Which of the following is a renewable resource?', options: ['A. Coal', 'B. Petroleum', 'C. Solar energy', 'D. Natural gas'], answer: 'C', explanation: 'Solar energy is renewable and naturally replenished.' },
      { topic: 'Force', prompt: 'A force can change:', options: ['A. only speed', 'B. only direction', 'C. speed, shape and direction of motion', 'D. colour'], answer: 'C', explanation: 'Forces can change motion and shape of objects.' },
      { topic: 'Motion', prompt: 'The SI unit of force is:', options: ['A. joule', 'B. watt', 'C. newton', 'D. pascal'], answer: 'C', explanation: 'Force is measured in newtons.' },
      { topic: 'Electricity', prompt: 'Which material is a good conductor of electricity?', options: ['A. Plastic', 'B. Wood', 'C. Copper', 'D. Rubber'], answer: 'C', explanation: 'Copper has free electrons and conducts electricity well.' },
      { topic: 'Electricity', prompt: 'A circuit must have a complete:', options: ['A. road', 'B. path', 'C. loop', 'D. switch'], answer: 'C', explanation: 'Current can flow only in a complete closed circuit.' },
      { topic: 'Heat', prompt: 'Heat flows from:', options: ['A. cold to hot', 'B. hot to cold', 'C. solid to liquid', 'D. gas to solid'], answer: 'B', explanation: 'Heat moves from a warmer body to a cooler one.' },
      { topic: 'Matter', prompt: 'Which state of matter has a fixed shape and volume?', options: ['A. Gas', 'B. Liquid', 'C. Solid', 'D. Plasma'], answer: 'C', explanation: 'Solids retain their shape and volume.' },
      { topic: 'Chemistry', prompt: 'The pH of a neutral solution is:', options: ['A. 3', 'B. 5', 'C. 7', 'D. 9'], answer: 'C', explanation: 'Neutral solutions have pH 7.' },
      { topic: 'Reproduction', prompt: 'The male reproductive cell in humans is called:', options: ['A. ovum', 'B. sperm', 'C. zygote', 'D. embryo'], answer: 'B', explanation: 'Sperm cells are produced by the male reproductive system.' },
      { topic: 'Reproduction', prompt: 'Fertilisation in humans usually occurs in the:', options: ['A. uterus', 'B. ovary', 'C. fallopian tube', 'D. vagina'], answer: 'C', explanation: 'The sperm and egg usually meet in the fallopian tube.' },
      { topic: 'Diseases', prompt: 'Which of the following is a disease caused by bacteria?', options: ['A. Malaria', 'B. Tuberculosis', 'C. Ringworm', 'D. Common cold'], answer: 'B', explanation: 'Tuberculosis is caused by bacteria.' },
      { topic: 'Diseases', prompt: 'Vaccination helps the body to:', options: ['A. reproduce faster', 'B. develop immunity', 'C. remove all bacteria', 'D. grow more cells'], answer: 'B', explanation: 'Vaccines stimulate the immune system to build immunity.' },
      { topic: 'Water', prompt: 'Which is the best way to purify water?', options: ['A. Boiling', 'B. Filtering with sand only', 'C. Pouring in sunlight', 'D. Adding salt'], answer: 'A', explanation: 'Boiling kills many pathogens that may be present.' },
      { topic: 'Soil', prompt: 'The top layer of Earth in which plants grow is called:', options: ['A. rock', 'B. clay', 'C. soil', 'D. loam'], answer: 'C', explanation: 'Soil supports plant growth.' },
      { topic: 'Plant structure', prompt: 'The part of a plant that absorbs water is the:', options: ['A. leaf', 'B. stem', 'C. root', 'D. flower'], answer: 'C', explanation: 'Roots absorb water and mineral salts.' },
      { topic: 'Energy', prompt: 'Which of the following is a form of energy?', options: ['A. Distance', 'B. Heat', 'C. Mass', 'D. Time'], answer: 'B', explanation: 'Heat is a type of energy.' },
      { topic: 'Sound', prompt: 'Sound travels fastest through:', options: ['A. air', 'B. liquid', 'C. gas', 'D. solid'], answer: 'D', explanation: 'Particles are closest together in solids, so sound travels fastest there.' },
      { topic: 'Light', prompt: 'Which material allows light to pass through clearly?', options: ['A. Wood', 'B. Frosted glass', 'C. Clear glass', 'D. Cardboard'], answer: 'C', explanation: 'Clear glass is transparent.' },
      { topic: 'Magnetism', prompt: 'Like poles of a magnet:', options: ['A. attract each other', 'B. repel each other', 'C. have no effect', 'D. vanish'], answer: 'B', explanation: 'Like poles repel.' },
      { topic: 'Atomic structure', prompt: 'The nucleus of an atom contains:', options: ['A. electrons only', 'B. protons and neutrons', 'C. protons and electrons', 'D. neutrons and electrons'], answer: 'B', explanation: 'The nucleus contains protons and neutrons.' },
      { topic: 'Acids and bases', prompt: 'A substance with pH 2 is:', options: ['A. neutral', 'B. weakly basic', 'C. strongly acidic', 'D. weakly acidic'], answer: 'C', explanation: 'pH 2 is strongly acidic.' },
      { topic: 'Plant nutrition', prompt: 'Which element is required in large amount to make chlorophyll?', options: ['A. Nitrogen', 'B. Magnesium', 'C. Calcium', 'D. Iron'], answer: 'B', explanation: 'Magnesium is an important component of chlorophyll.' },
      { topic: 'Weather', prompt: 'The instrument used to measure rainfall is called a:', options: ['A. thermometer', 'B. barometer', 'C. rain gauge', 'D. hygrometer'], answer: 'C', explanation: 'Rain gauges measure rainfall volume.' },
      { topic: 'Earth', prompt: 'Which planet is known as the Red Planet?', options: ['A. Venus', 'B. Mars', 'C. Jupiter', 'D. Mercury'], answer: 'B', explanation: 'Mars appears red because of iron oxide on its surface.' },
      { topic: 'Digestion', prompt: 'Digestion begins in the:', options: ['A. stomach', 'B. mouth', 'C. intestine', 'D. oesophagus'], answer: 'B', explanation: 'Food is first broken down mechanically and chemically in the mouth.' },
      { topic: 'Respiration', prompt: 'The main gas needed for respiration is:', options: ['A. carbon dioxide', 'B. oxygen', 'C. nitrogen', 'D. helium'], answer: 'B', explanation: 'Cells use oxygen during respiration.' },
      { topic: 'Blood', prompt: 'Which blood cells help fight disease?', options: ['A. Red blood cells', 'B. White blood cells', 'C. Platelets', 'D. Plasma'], answer: 'B', explanation: 'White blood cells are part of the immune system.' },
      { topic: 'Microorganisms', prompt: 'Which of these is a microorganism?', options: ['A. Bacterium', 'B. Stone', 'C. Table', 'D. Leaf'], answer: 'A', explanation: 'Bacteria are microorganisms.' },
      { topic: 'Environment', prompt: 'A biodegradable material is one that:', options: ['A. does not decay', 'B. can decompose naturally', 'C. is only found in water', 'D. cannot be recycled'], answer: 'B', explanation: 'Biodegradable materials decompose naturally over time.' },
      { topic: 'Fuels', prompt: 'Which is a fossil fuel?', options: ['A. Wind', 'B. Coal', 'C. Sunlight', 'D. Water'], answer: 'B', explanation: 'Coal is a fossil fuel formed from ancient plant material.' }
    ],
    subjective: [
      { topic: 'Photosynthesis', prompt: 'Explain how photosynthesis occurs in green plants and state the products formed.', answer: 'Plants use sunlight, chlorophyll, carbon dioxide and water to form glucose and oxygen.', explanation: 'Photosynthesis mainly occurs in the leaves and is vital for producing food for plants and oxygen for organisms.' },
      { topic: 'Temperature regulation', prompt: 'Describe three ways in which the human body maintains a constant internal temperature.', answer: 'Sweating, blood vessel changes and shivering help regulate body temperature.', explanation: 'The body uses several mechanisms to balance heat loss and heat gain.' },
      { topic: 'Heat conduction', prompt: 'Explain why a metal spoon feels colder than a wooden spoon at the same room temperature.', answer: 'Metal conducts heat away from the hand faster than wood.', explanation: 'Good conductors feel colder because they remove heat from the skin quickly.' },
      { topic: 'Cells', prompt: 'State and explain three differences between a plant cell and an animal cell.', answer: 'Plant cells have a cell wall, chloroplasts and a large central vacuole; animal cells do not.', explanation: 'These structures help plants carry out photosynthesis and store materials.' },
      { topic: 'Immunity', prompt: 'Explain the importance of vaccination in preventing disease.', answer: 'Vaccination stimulates the immune system to recognize and fight pathogens before they cause serious illness.', explanation: 'It helps build immunity and reduces the spread of infectious diseases.' }
    ]
  },
  'Social Studies': {
    objective: [
      { topic: 'Citizenship', prompt: 'A citizen is a person who:', options: ['A. travels all the time', 'B. belongs to a country and has rights and duties', 'C. lives outside the country', 'D. has no responsibilities'], answer: 'B', explanation: 'Citizenship includes legal membership and civic duties.' },
      { topic: 'Citizenship', prompt: 'One duty of a good citizen is to:', options: ['A. ignore the law', 'B. respect the rights of others', 'C. refuse to vote', 'D. damage public property'], answer: 'B', explanation: 'Respecting rights and laws is a civic duty.' },
      { topic: 'Governance', prompt: 'The main purpose of government is to:', options: ['A. make laws only', 'B. provide services and maintain order', 'C. control all businesses', 'D. only collect taxes'], answer: 'B', explanation: 'Government exists to maintain order and provide services.' },
      { topic: 'Governance', prompt: 'Which institution makes laws in a democratic country?', options: ['A. Judiciary', 'B. Legislature', 'C. Police', 'D. Hospital'], answer: 'B', explanation: 'The legislature creates laws.' },
      { topic: 'Rights', prompt: 'A right enjoyed by every citizen is the right to:', options: ['A. bully others', 'B. free speech', 'C. ignore tax payment', 'D. disobey the law'], answer: 'B', explanation: 'Freedom of speech is a fundamental right.' },
      { topic: 'Culture', prompt: 'Culture is best described as:', options: ['A. only music', 'B. the way of life of a people', 'C. a law passed by parliament', 'D. the school timetable'], answer: 'B', explanation: 'Culture includes values, beliefs and customs.' },
      { topic: 'Population', prompt: 'Population growth can lead to:', options: ['A. higher unemployment and pressure on services', 'B. no change in education', 'C. automatic wealth for all', 'D. immediate reduction in poverty'], answer: 'A', explanation: 'Rapid growth can strain jobs, schools and health care.' },
      { topic: 'Development', prompt: 'Which is a sign of national development?', options: ['A. Unreliable roads', 'B. Good healthcare and schools', 'C. Poor sanitation', 'D. Low productivity'], answer: 'B', explanation: 'Development is seen in better services and infrastructure.' },
      { topic: 'Environment', prompt: 'Reducing litter and pollution helps protect the:', options: ['A. economy only', 'B. environment', 'C. parliament only', 'D. school uniforms'], answer: 'B', explanation: 'The environment includes land, air, water and life.' },
      { topic: 'Conflict', prompt: 'Peaceful conflict resolution usually involves:', options: ['A. violence', 'B. dialogue and negotiation', 'C. secret revenge', 'D. insults'], answer: 'B', explanation: 'Dialogue and negotiation help settle disputes peacefully.' },
      { topic: 'Law', prompt: 'The rule of law means:', options: ['A. only the rich obey the law', 'B. everyone is subject to the law', 'C. law does not apply to leaders', 'D. laws are changed every day'], answer: 'B', explanation: 'The rule of law ensures equality before the law.' },
      { topic: 'Economy', prompt: 'A person who starts a business to make profit is called a:', options: ['A. teacher', 'B. entrepreneur', 'C. student', 'D. soldier'], answer: 'B', explanation: 'An entrepreneur creates and manages business activity.' },
      { topic: 'Economy', prompt: 'Taxes are used mainly to:', options: ['A. pay for government services', 'B. buy personal clothes', 'C. reward one family', 'D. close schools'], answer: 'A', explanation: 'Taxes fund public goods and services.' },
      { topic: 'Media', prompt: 'The media helps citizens by:', options: ['A. suppressing information', 'B. informing the public', 'C. increasing conflict', 'D. reducing school attendance'], answer: 'B', explanation: 'The media informs and educates the public.' },
      { topic: 'Democracy', prompt: 'In a democracy, citizens usually choose leaders through:', options: ['A. force', 'B. election', 'C. intimidation', 'D. silence'], answer: 'B', explanation: 'Elections are a key democratic process.' },
      { topic: 'Leadership', prompt: 'A good leader should be:', options: ['A. corrupt', 'B. fair and accountable', 'C. selfish', 'D. silent'], answer: 'B', explanation: 'Good leadership is based on fairness and accountability.' },
      { topic: 'Family', prompt: 'The family is important because it:', options: ['A. has no role in society', 'B. socializes children and provides care', 'C. creates only problems', 'D. replaces schools'], answer: 'B', explanation: 'Families provide care, values and social support.' },
      { topic: 'Human rights', prompt: 'Human rights are:', options: ['A. gifts from one group only', 'B. rights everyone should enjoy because they are human', 'C. for politicians only', 'D. unnecessary in society'], answer: 'B', explanation: 'Human rights are universal and inherent.' },
      { topic: 'Geography', prompt: 'Which is the largest source of water on Earth?', options: ['A. Lakes', 'B. Rivers', 'C. Oceans', 'D. Rainwater'], answer: 'C', explanation: 'Oceans contain most of Earth’s water.' },
      { topic: 'Resource management', prompt: 'Conserving forest resources helps to:', options: ['A. increase erosion', 'B. protect biodiversity', 'C. destroy habitats', 'D. reduce rainfall'], answer: 'B', explanation: 'Conservation protects ecosystems and biodiversity.' },
      { topic: 'Socialization', prompt: 'Socialization means:', options: ['A. learning acceptable behaviour in society', 'B. ignoring family advice', 'C. staying at home forever', 'D. refusing to speak'], answer: 'A', explanation: 'Socialization helps citizens learn norms and values.' },
      { topic: 'Transport', prompt: 'Good transport systems help a country by:', options: ['A. increasing isolation', 'B. moving goods and people efficiently', 'C. reducing all trade', 'D. lowering education'], answer: 'B', explanation: 'Transport supports trade, mobility and access to services.' },
      { topic: 'Climate', prompt: 'Climate change mainly causes:', options: ['A. colder weather everywhere', 'B. changes in weather patterns and temperatures', 'C. no rainfall at all', 'D. permanent daylight'], answer: 'B', explanation: 'Climate change alters temperature and rainfall patterns.' },
      { topic: 'Security', prompt: 'A responsible citizen helps maintain security by:', options: ['A. refusing to obey the law', 'B. reporting crimes and respecting authorities', 'C. hiding criminals', 'D. destroying public property'], answer: 'B', explanation: 'Civic cooperation helps keep communities safe.' },
      { topic: 'Trade', prompt: 'International trade is important because it helps countries:', options: ['A. stop all imports', 'B. exchange goods and services', 'C. reduce jobs', 'D. avoid communication'], answer: 'B', explanation: 'Trade promotes exchange and economic cooperation.' },
      { topic: 'Government', prompt: 'Separation of powers means:', options: ['A. one person controls all branches', 'B. government powers are divided among different organs', 'C. the army runs the nation', 'D. no one is accountable'], answer: 'B', explanation: 'This system prevents concentration of authority.' },
      { topic: 'Ethics', prompt: 'Honesty is important because it:', options: ['A. builds trust', 'B. reduces friendships', 'C. creates conflict', 'D. stops learning'], answer: 'A', explanation: 'Honesty strengthens trust and reliability.' },
      { topic: 'Community', prompt: 'A community is made up of:', options: ['A. only one person', 'B. people living and interacting in the same place', 'C. only animals', 'D. only the rich'], answer: 'B', explanation: 'Community involves people living and interacting together.' },
      { topic: 'Education', prompt: 'Which institution helps to teach values and skills?', options: ['A. Market', 'B. School', 'C. Court', 'D. Hospital'], answer: 'B', explanation: 'Schools transmit knowledge, values and skills.' },
      { topic: 'Population', prompt: 'A high dependency ratio means:', options: ['A. many working adults', 'B. many dependants compared with workers', 'C. no children', 'D. no ageing population'], answer: 'B', explanation: 'Dependency ratio compares dependants to working age people.' },
      { topic: 'Globalisation', prompt: 'Globalisation mainly refers to:', options: ['A. isolation of countries', 'B. growing link between countries through trade and communication', 'C. closure of borders', 'D. loss of culture only'], answer: 'B', explanation: 'Globalisation connects economies and societies.' },
      { topic: 'Technology', prompt: 'Technology can improve society when it is used to:', options: ['A. destroy communities', 'B. solve problems and improve services', 'C. replace all teachers', 'D. reduce communication'], answer: 'B', explanation: 'Technology should support development and communication.' },
      { topic: 'Peace', prompt: 'Peace is important because it ensures:', options: ['A. fear and violence', 'B. stability and development', 'C. destruction of schools', 'D. poverty only'], answer: 'B', explanation: 'Peace supports social and economic development.' },
      { topic: 'National identity', prompt: 'National identity is best described as:', options: ['A. a person’s favourite sport', 'B. the values and sense of belonging shared by a nation', 'C. a school timetable', 'D. a type of food only'], answer: 'B', explanation: 'National identity includes shared identity, history and values.' },
      { topic: 'Law and order', prompt: 'Why do we need laws?', options: ['A. To allow disorder', 'B. To promote order and justice', 'C. To ignore citizens', 'D. To punish all citizens equally'], answer: 'B', explanation: 'Laws help maintain order and promote justice.' },
      { topic: 'Land use', prompt: 'The proper use of land helps to:', options: ['A. worsen the environment', 'B. sustain agriculture and settlement', 'C. reduce housing', 'D. stop all development'], answer: 'B', explanation: 'Careful land use supports agriculture, housing and development.' },
      { topic: 'Public service', prompt: 'A public servant is expected to:', options: ['A. work only for personal gain', 'B. serve the public honestly', 'C. ignore the law', 'D. avoid accountability'], answer: 'B', explanation: 'Public servants are expected to serve the public with honesty and accountability.' },
      { topic: 'Migration', prompt: 'Migration can affect a country by:', options: ['A. reducing all jobs', 'B. changing population and labour supply', 'C. eliminating culture', 'D. stopping education'], answer: 'B', explanation: 'Migration changes population structure and labour availability.' },
      { topic: 'Civic participation', prompt: 'One way citizens can participate in democracy is by:', options: ['A. refusing to vote', 'B. attending community meetings', 'C. hiding from the law', 'D. destroying public property'], answer: 'B', explanation: 'Citizens can participate by voting, attending meetings and volunteering.' },
      { topic: 'Career', prompt: 'Which of the following is a career in public service?', options: ['A. Teacher', 'B. Trader', 'C. Farmer', 'D. All of the above'], answer: 'D', explanation: 'Public service includes many roles across sectors.' }
    ],
    subjective: [
      { topic: 'Development', prompt: 'Explain five ways in which young people can contribute to national development.', answer: 'Young people can study hard, respect the law, volunteer, protect the environment and participate in community service.', explanation: 'National development depends on the active participation of citizens, especially the youth.' },
      { topic: 'Government', prompt: 'Describe the functions of the three arms of government.', answer: 'The legislature makes laws, the executive implements them and the judiciary interprets and applies them.', explanation: 'This division of powers helps prevent abuse of authority.' },
      { topic: 'Democracy', prompt: 'Explain the importance of voting in a democracy.', answer: 'Voting gives citizens a voice, helps choose leaders and promotes accountability.', explanation: 'Voting is central to democratic participation and good governance.' },
      { topic: 'Civic responsibility', prompt: 'State and explain three responsibilities of a good citizen.', answer: 'A good citizen obeys the law, pays taxes when required and participates in the welfare of the community.', explanation: 'Good citizenship contributes to social order and national development.' },
      { topic: 'Environment', prompt: 'Discuss the effects of environmental degradation on society.', answer: 'Environmental degradation can cause health problems, erosion, flooding, food insecurity and economic loss.', explanation: 'Healthy environments are necessary for sustainable social and economic development.' }
    ]
  }
};

const questions = [];
let idCounter = 1;

for (const [subject, data] of Object.entries(subjectQuestionBank)) {
  for (const item of data.objective) {
    questions.push({
      id: idCounter++,
      subject,
      topic: item.topic,
      year: '2024',
      difficulty: 'Medium',
      type: 'objective',
      marks: 5,
      prompt: item.prompt,
      options: item.options,
      answer: item.answer,
      explanation: item.explanation
    });
  }

  for (const item of data.subjective) {
    questions.push({
      id: idCounter++,
      subject,
      topic: item.topic,
      year: '2024',
      difficulty: 'Medium',
      type: 'theory',
      marks: 10,
      prompt: item.prompt,
      answer: item.answer,
      explanation: item.explanation
    });
  }
}

const state = {
  selectedSubject: 'Core Mathematics',
  currentQuestionIndex: 0,
  mode: 'practice',
  typeFilter: 'all',
  timerSeconds: 45 * 60,
  answers: {},
  completedQuestionIds: new Set(),
  eventLog: ['Fullscreen mode activated', 'Face recognition consent confirmed', 'Answer autosave synced to server'],
  integrityScore: 92,
  warnings: 0
};

function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('open');
  }
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function injectAuthModal() {
  if (document.getElementById('authModal')) {
    return;
  }

  const modal = document.createElement('div');
  modal.className = 'auth-modal-backdrop';
  modal.id = 'authModal';
  modal.innerHTML = `
    <div class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="authTitle">
      <h3 id="authTitle">Student sign in</h3>
      <p>Welcome back! Continue to your study dashboard and start practicing.</p>
      <div class="auth-provider-list">
        <button class="auth-provider" type="button" data-close-auth>Continue to platform</button>
      </div>
      <button class="auth-modal-close" type="button" data-close-auth>Cancel</button>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelectorAll('[data-close-auth]').forEach((button) => {
    button.addEventListener('click', closeAuthModal);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeAuthModal();
  });
}

function bindStudentLoginButtons() {
  document.querySelectorAll('.student-login-btn').forEach((button) => {
    button.addEventListener('click', openAuthModal);
  });
}

function protectAdminPage() {
  const adminHeader = document.getElementById('adminHeader');
  const lockScreen = document.getElementById('adminLockScreen');
  const adminDashboard = document.getElementById('adminDashboard');

  if (!adminHeader || !lockScreen || !adminDashboard) {
    return;
  }

  const storedCode = localStorage.getItem('passco-admin-code');
  if (storedCode === '2424') {
    lockScreen.classList.add('hidden');
    adminHeader.style.display = 'flex';
    adminDashboard.style.display = 'block';
    return;
  }

  const unlockButton = document.getElementById('unlockAdminBtn');
  const codeInput = document.getElementById('adminCodeInput');

  const enableAdmin = () => {
    if (codeInput.value.trim() === '2424') {
      localStorage.setItem('passco-admin-code', '2424');
      lockScreen.classList.add('hidden');
      adminHeader.style.display = 'flex';
      adminDashboard.style.display = 'block';
      return;
    }

    alert('Incorrect admin code. Access denied.');
    window.location.href = 'index.html';
  };

  unlockButton.addEventListener('click', enableAdmin);
  codeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') enableAdmin();
  });

  adminDashboard.style.display = 'none';
  adminHeader.style.display = 'none';
  lockScreen.classList.remove('hidden');
  codeInput.focus();
}

function applyTheme() {
  const savedTheme = localStorage.getItem('passco-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
  }
}

function bindThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const darkMode = document.body.classList.toggle('dark');
    localStorage.setItem('passco-theme', darkMode ? 'dark' : 'light');
    toggle.textContent = darkMode ? 'Light mode' : 'Dark mode';
  });
}

function getFilteredQuestions() {
  return questions.filter((question) => {
    const matchesSubject = question.subject === state.selectedSubject;
    const matchesType = state.typeFilter === 'all' || question.type === state.typeFilter;
    return matchesSubject && matchesType;
  });
}

function isQuestionAnswered(question) {
  if (!question) return false;
  if (question.type === 'objective') {
    return Boolean(state.answers[question.id]?.selectedOption);
  }
  return Boolean(state.answers[question.id]?.theoryAnswer?.trim());
}

function renderPracticePage() {
  const elements = {
    timer: document.getElementById('timer'),
    progressText: document.getElementById('progressText'),
    progressBar: document.getElementById('progressBar'),
    subjectSelect: document.getElementById('subjectSelect'),
    questionTag: document.getElementById('questionTag'),
    questionYear: document.getElementById('questionYear'),
    questionDifficulty: document.getElementById('questionDifficulty'),
    questionPrompt: document.getElementById('questionPrompt'),
    choices: document.getElementById('choices'),
    theoryBox: document.getElementById('theoryBox'),
    theoryAnswer: document.getElementById('theoryAnswer'),
    answerReveal: document.getElementById('answerReveal'),
    examTitle: document.getElementById('examTitle'),
    eventList: document.getElementById('eventList'),
    integrityMeter: document.getElementById('integrityMeter'),
    integrityBadge: document.getElementById('integrityBadge'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    submitBtn: document.getElementById('submitBtn')
  };

  function renderQuestion() {
    const filtered = getFilteredQuestions();
    if (filtered.length === 0) {
      elements.questionPrompt.textContent = 'No questions available for this subject and type. Try another filter.';
      elements.choices.innerHTML = '';
      elements.theoryBox.classList.add('hidden');
      elements.answerReveal.classList.add('hidden');
      elements.progressText.textContent = '0 / 0';
      elements.progressBar.style.width = '0%';
      return;
    }

    if (state.currentQuestionIndex >= filtered.length) {
      state.currentQuestionIndex = 0;
    }

    const question = filtered[state.currentQuestionIndex];
    if (!question) return;

    const questionNumber = filtered.indexOf(question) + 1;

    elements.examTitle.textContent = `${state.selectedSubject} ${state.mode === 'mock' ? 'Mock Exam' : 'Practice'}`;
    elements.questionTag.textContent = question.type === 'objective' ? 'Objective' : 'Theory';
    elements.questionYear.textContent = question.year;
    elements.questionDifficulty.textContent = question.difficulty;
    elements.questionPrompt.textContent = `${questionNumber}. ${question.prompt}`;

    const isObjective = question.type === 'objective';
    elements.theoryBox.classList.toggle('hidden', isObjective);
    elements.answerReveal.classList.add('hidden');
    elements.choices.innerHTML = '';

    if (isObjective) {
      question.options.forEach((option, index) => {
        const value = String.fromCharCode(65 + index);
        const selected = state.answers[question.id]?.selectedOption === value;
        const row = document.createElement('label');
        row.className = 'choice-item';
        row.innerHTML = `
          <input type="radio" name="choice" value="${value}" ${selected ? 'checked' : ''} />
          <span>${option}</span>
        `;
        row.querySelector('input').addEventListener('change', () => {
          state.answers[question.id] = { ...state.answers[question.id], selectedOption: value };
        });
        elements.choices.appendChild(row);
      });
    } else {
      elements.theoryAnswer.value = state.answers[question.id]?.theoryAnswer || '';
      elements.theoryAnswer.oninput = (event) => {
        state.answers[question.id] = { ...state.answers[question.id], theoryAnswer: event.target.value };
      };
    }

    const savedAnswer = state.answers[question.id];
    if (savedAnswer && savedAnswer.selectedOption) {
      const radio = elements.choices.querySelector(`input[value="${savedAnswer.selectedOption}"]`);
      if (radio) radio.checked = true;
    }

    elements.progressText.textContent = `${state.currentQuestionIndex + 1} / ${filtered.length}`;
    const progressPercent = ((state.currentQuestionIndex + 1) / filtered.length) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;

    const previousAnswered = filtered.slice(0, state.currentQuestionIndex).some((item) => state.completedQuestionIds.has(item.id));
    elements.prevBtn.disabled = state.currentQuestionIndex === 0 || previousAnswered;
    elements.nextBtn.textContent = state.currentQuestionIndex === filtered.length - 1 ? 'Finish' : 'Next';
    elements.submitBtn.textContent = state.mode === 'mock' ? 'Submit Mock Exam' : 'Check Answer';
    elements.submitBtn.disabled = false;
  }

  function revealAnswer() {
    const filtered = getFilteredQuestions();
    const question = filtered[state.currentQuestionIndex];
    if (!question) return;

    if (question.type === 'objective') {
      const selected = state.answers[question.id]?.selectedOption || 'None';
      const isCorrect = selected === question.answer;
      elements.answerReveal.innerHTML = `
        <strong>Result:</strong> <span style="color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}; font-weight: 700;">${isCorrect ? 'Correct' : 'Wrong'}</span><br>
        <strong>Correct answer:</strong> ${question.answer}<br>
        <strong>Your answer:</strong> ${selected}<br>
        <strong>Explanation:</strong> ${question.explanation}
      `;
    } else {
      const sample = state.answers[question.id]?.theoryAnswer || 'No response submitted.';
      elements.answerReveal.innerHTML = `
        <strong>Model answer:</strong> ${question.answer}<br>
        <strong>Your answer:</strong> ${sample}<br>
        <strong>Examiner notes:</strong> ${question.explanation}
      `;
    }

    elements.answerReveal.classList.remove('hidden');
  }

  function updateTimer() {
    const minutes = Math.floor(state.timerSeconds / 60);
    const seconds = state.timerSeconds % 60;
    const hours = Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;
    elements.timer.textContent = `${String(hours).padStart(2, '0')}:${String(displayMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function renderEventLog() {
    const items = state.eventLog.slice(0, 5);
    elements.eventList.innerHTML = items.map((event) => `<li>${event}</li>`).join('');

    state.integrityScore = Math.max(50, Math.min(99, state.integrityScore - state.warnings * 6));
    elements.integrityMeter.style.width = `${state.integrityScore}%`;
    elements.integrityBadge.textContent = state.integrityScore >= 80 ? 'Clean' : state.integrityScore >= 60 ? 'Review' : 'Flagged';
    elements.integrityBadge.style.color = state.integrityScore >= 80 ? 'var(--success)' : state.integrityScore >= 60 ? 'var(--warning)' : 'var(--danger)';
  }

  function addIntegrityEvent(message) {
    state.eventLog.unshift(message);
    state.warnings += 1;
    state.integrityScore = Math.max(0, state.integrityScore - 12);
    renderEventLog();

    if (state.warnings >= 3) {
      handleAutoSubmit();
    }
  }

  function handleAutoSubmit() {
    state.eventLog.unshift('Timer expired; exam auto-submitted');
    renderEventLog();
    revealAnswer();
    elements.submitBtn.textContent = 'Submitted';
    elements.submitBtn.disabled = true;
  }

  function nextQuestion() {
    const filtered = getFilteredQuestions();
    const question = filtered[state.currentQuestionIndex];
    if (!question) return;

    if (!state.completedQuestionIds.has(question.id)) {
      if (isQuestionAnswered(question)) {
        handleSubmit();
      } else {
        state.eventLog.unshift('Answer this question before moving forward');
        renderEventLog();
      }
      return;
    }

    if (state.currentQuestionIndex < filtered.length - 1) {
      state.currentQuestionIndex += 1;
      renderQuestion();
    } else {
      revealAnswer();
    }
  }

  function prevQuestion() {
    const filtered = getFilteredQuestions();
    const previousAnswered = filtered.slice(0, state.currentQuestionIndex).some((item) => state.completedQuestionIds.has(item.id));
    if (state.currentQuestionIndex > 0 && !previousAnswered) {
      state.currentQuestionIndex -= 1;
      renderQuestion();
    }
  }

  function handleSubmit() {
    const filtered = getFilteredQuestions();
    const question = filtered[state.currentQuestionIndex];
    if (!question) return;

    if (question.type === 'objective') {
      const selected = state.answers[question.id]?.selectedOption || null;
      if (!selected) {
        state.eventLog.unshift('No answer selected; review required');
        renderEventLog();
        return;
      }

      const isCorrect = selected === question.answer;
      state.eventLog.unshift(isCorrect ? 'Correct answer recorded' : 'Incorrect answer recorded');
      renderEventLog();
    } else if (!state.answers[question.id]?.theoryAnswer?.trim()) {
      state.eventLog.unshift('Theory response was blank');
      renderEventLog();
      return;
    }

    state.completedQuestionIds.add(question.id);
    revealAnswer();
    elements.submitBtn.textContent = 'Answer Saved';
    elements.submitBtn.disabled = false;
  }

  function tickTimer() {
    if (state.mode === 'mock' && state.timerSeconds > 0) {
      state.timerSeconds -= 1;
      updateTimer();
      if (state.timerSeconds === 0) handleAutoSubmit();
    }
  }

  elements.subjectSelect.addEventListener('change', (event) => {
    state.selectedSubject = event.target.value;
    state.currentQuestionIndex = 0;
    renderQuestion();
  });

  document.querySelectorAll('.mode-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      state.mode = button.dataset.mode;
      if (state.mode === 'mock') {
        state.timerSeconds = 45 * 60;
        updateTimer();
        elements.submitBtn.textContent = 'Submit Mock Exam';
      } else {
        elements.submitBtn.textContent = 'Check Answer';
      }
      renderQuestion();
    });
  });

  document.querySelectorAll('.type-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.type-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      state.typeFilter = button.dataset.type;
      state.currentQuestionIndex = 0;
      renderQuestion();
    });
  });

  elements.prevBtn.addEventListener('click', prevQuestion);
  elements.nextBtn.addEventListener('click', nextQuestion);
  elements.submitBtn.addEventListener('click', handleSubmit);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) addIntegrityEvent('Tab switched away from exam');
  });

  window.addEventListener('blur', () => addIntegrityEvent('Window lost focus during exam'));
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    addIntegrityEvent('Right-click blocked');
  });

  renderQuestion();
  updateTimer();
  renderEventLog();
  setInterval(tickTimer, 1000);
}

function init() {
  applyTheme();
  bindThemeToggle();
  injectAuthModal();
  bindStudentLoginButtons();

  if (document.body.dataset.page === 'practice') {
    renderPracticePage();
  }

  if (document.body.dataset.page === 'admin') {
    protectAdminPage();
  }

  if (!localStorage.getItem('passco-user') && document.body.dataset.page !== 'admin') {
    setTimeout(openAuthModal, 300);
  }
}

init();
