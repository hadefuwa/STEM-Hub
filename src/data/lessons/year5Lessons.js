import { Lesson } from '../../models/Lesson.js';

/**
 * Year 5 Lessons
 */
export function getYear5Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Place Value to 1,000,000",
      emoji: '🔢',
      content: `# Place Value to 1,000,000 🔢

Let's learn about place value up to millions!

## Place Value Positions

In the number 456,789:
- The 4 is in the hundred thousands place (worth 400,000)
- The 5 is in the ten thousands place (worth 50,000)
- The 6 is in the thousands place (worth 6,000)
- The 7 is in the hundreds place (worth 700)
- The 8 is in the tens place (worth 80)
- The 9 is in the ones place (worth 9)

## Examples

- 234,567 = 2 hundred thousands + 3 ten thousands + 4 thousands + 5 hundreds + 6 tens + 7 ones
- 1,000,000 = one million

## How to Play

Drag digits and type expanded form! 🎮`,
      quizId: quizId++,
      assessmentType: 'place-value-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Long Division",
      emoji: '➗',
      content: `# Long Division ➗

Let's learn long division!

## Long Division Steps

1. Divide
2. Multiply
3. Subtract
4. Bring down
5. Repeat

## Example

   __15
4 ) 60
   -4
   --
    20
   -20
   --
     0

## How to Play

Type step-by-step and drag remainders! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Multiplying Decimals",
      emoji: '✖️',
      content: `# Multiplying Decimals ✖️

Let's learn to multiply decimals!

## Multiplying Decimals

1. Multiply as if they were whole numbers
2. Count decimal places in both numbers
3. Place decimal point in answer

## Examples

- 2.5 × 3 = 7.5
- 1.2 × 4 = 4.8
- 0.5 × 0.3 = 0.15

## How to Play

Type calculations and drag decimal points! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Adding/Subtracting Fractions",
      emoji: '🍕',
      content: `# Adding/Subtracting Fractions 🍕

Let's learn to add and subtract fractions!

## Adding Fractions

Make denominators the same, then add numerators!

## Examples

- 1/4 + 2/4 = 3/4
- 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2
- 2/5 + 1/5 = 3/5

## Subtracting Fractions

Make denominators the same, then subtract numerators!

## Examples

- 3/4 - 1/4 = 2/4 = 1/2
- 5/6 - 1/6 = 4/6 = 2/3

## How to Play

Drag fractions and type answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Percentages",
      emoji: '📊',
      content: `# Percentages 📊

Let's learn about percentages!

## What are Percentages?

Percentages are parts out of 100!

## Examples

- 50% = 50 out of 100 = 1/2
- 25% = 25 out of 100 = 1/4
- 75% = 75 out of 100 = 3/4
- 100% = all of it

## Converting

- 1/2 = 50%
- 1/4 = 25%
- 3/4 = 75%

## How to Play

Click percentages and drag to fractions! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Coordinates",
      emoji: '📍',
      content: `# Coordinates 📍

Let's learn about coordinates!

## What are Coordinates?

Coordinates tell us where a point is on a grid!

## Reading Coordinates

- (3, 4) means: 3 across, 4 up
- First number = x (across)
- Second number = y (up)

## Examples

- (2, 3) = 2 across, 3 up
- (5, 1) = 5 across, 1 up
- (0, 0) = origin (starting point)

## How to Play

Click grid points and type coordinates! 🎮`,
      quizId: quizId++,
      assessmentType: 'coordinate-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Symmetry",
      emoji: '🪞',
      content: `# Symmetry 🪞

Let's learn about symmetry!

## What is Symmetry?

A shape is symmetrical if both sides match!

## Line of Symmetry

A line that divides a shape into two matching halves!

## Examples

- A square has 4 lines of symmetry
- A rectangle has 2 lines of symmetry
- A circle has many lines of symmetry

## How to Play

Click lines of symmetry and drag shapes! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Volume",
      emoji: '📦',
      content: `# Volume 📦

Let's learn about volume!

## What is Volume?

Volume is the space inside a 3D shape!

## Finding Volume

For a cube or rectangular prism:
Volume = length × width × height

## Examples

- A cube with sides of 3 = 3 × 3 × 3 = 27 cubic units
- A box 4 × 2 × 3 = 24 cubic units

## How to Play

Click cubes and type volume! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "Converting Units",
      emoji: '🔄',
      content: `# Converting Units 🔄

Let's learn to convert between units!

## Length Conversions

- 10 mm = 1 cm
- 100 cm = 1 m
- 1000 m = 1 km

## Mass Conversions

- 1000 g = 1 kg

## Capacity Conversions

- 1000 mL = 1 L

## Examples

- 500 cm = 5 m
- 2 kg = 2000 g
- 3 L = 3000 mL

## How to Play

Drag conversions and type answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "Mean, Median, Mode",
      emoji: '📊',
      content: `# Mean, Median, Mode 📊

Let's learn about averages!

## Mean (Average)

Add all numbers, then divide by how many!

Example: 5, 7, 9
Mean = (5 + 7 + 9) ÷ 3 = 21 ÷ 3 = 7

## Median

The middle number when ordered!

Example: 3, 5, 7, 9, 11
Median = 7 (middle number)

## Mode

The number that appears most often!

Example: 2, 3, 3, 4, 5
Mode = 3 (appears twice)

## How to Play

Click data and type calculations! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "TapTapTap: Master Level 1",
      emoji: '👆',
      content: `# TapTapTap: Master Level 1 👆

You've reached the master level! This is very challenging - only for the best tappers!

## How to Play

- Tap targets as they appear on screen
- Targets appear every 0.8 seconds (extremely fast!)
- Targets are small and require precision
- 30 seconds to score as many points as possible!

## Scoring System

- **Bronze**: 25-49 points
- **Silver**: 50-74 points
- **Gold**: 75-99 points
- **Platinum**: 100+ points

You need at least **Bronze** (25 points) to progress!

## Tips

- This level requires excellent hand-eye coordination
- Stay focused and don't get discouraged
- Every point counts!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "TapTapTap: Master Level 2",
      emoji: '👆',
      content: `# TapTapTap: Master Level 2 👆

Continue your master-level training! Keep pushing your limits!

## How to Play

- Tap targets as they appear
- Same speed as Level 1 - keep practicing!
- 30 seconds to score points

## Scoring System

- **Bronze**: 25-49 points
- **Silver**: 50-74 points
- **Gold**: 75-99 points
- **Platinum**: 100+ points

You need at least **Bronze** (25 points) to progress!

## Challenge

Can you reach Platinum? You're almost at the top level!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 1,
      title: "English: Advanced Grammar - Clauses and Phrases",
      emoji: '📝',
      content: `# Clauses and Phrases 📝

Learn the building blocks of complex sentences!

## Clauses
- **Independent clause**: Can stand alone as a sentence
  - Example: "She studied hard."
- **Dependent clause**: Cannot stand alone; needs an independent clause
  - Example: "Because she wanted to succeed" (needs more)

## Phrases
- Groups of words without a subject and verb
- Examples: "in the morning", "running quickly", "the big red car"

## Types of Clauses:
- **Relative clauses**: Begin with who, which, that
  - "The book that I read was interesting."
- **Adverbial clauses**: Tell when, where, why, how
  - "I'll call you when I arrive."

## Practice:
Identify clauses and phrases in complex sentences.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 2,
      title: "English: Literary Devices",
      emoji: '📚',
      content: `# Literary Devices 📚

Enhance your writing and understanding with literary techniques!

## Common Literary Devices:

**Simile**: Comparison using "like" or "as"
- "As brave as a lion" or "She sings like an angel"

**Metaphor**: Direct comparison without "like" or "as"
- "Life is a journey" or "Time is money"

**Personification**: Giving human qualities to non-human things
- "The wind whispered through the trees"

**Alliteration**: Repeated beginning sounds
- "Peter Piper picked a peck of pickled peppers"

**Onomatopoeia**: Words that sound like their meaning
- "Buzz", "crash", "hiss", "bang"

## Practice:
Identify literary devices in famous quotes and passages.
Create your own examples of each device.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 3,
      title: "English: Persuasive Writing Techniques",
      emoji: '🗣️',
      content: `# Persuasive Writing Techniques 🗣️

Learn how to convince others with your writing!

## Elements of Persuasion:

**Clear Position**: State your opinion clearly
- "School uniforms should be mandatory because..."

**Supporting Evidence**: Facts, statistics, examples
- "Studies show that 70% of teachers believe..."

**Address Counterarguments**: Acknowledge opposing views
- "Some argue that uniforms limit creativity, however..."

**Emotional Appeals**: Connect with readers' feelings
- "Think of how safer our children would be..."

**Strong Conclusion**: Restate your position
- "Therefore, we must act now to..."

## Persuasive Techniques:
- **Ethos**: Appeal to credibility
- **Logos**: Appeal to logic
- **Pathos**: Appeal to emotions

## Practice:
Write a persuasive paragraph on a topic you care about.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 4,
      title: "English: Complex Punctuation",
      emoji: '❗',
      content: `# Complex Punctuation ❗

Master advanced punctuation for clearer writing!

## Colons (:)
- Introduce lists: "You need three items: paper, pen, eraser"
- Introduce explanations: "She had only one thought: to run"

## Semicolons (;)
- Join related sentences: "I have a test tomorrow; I should study tonight"
- Separate complex list items: "We visited Paris, France; Rome, Italy; and London, England"

## Dashes (—)
- Emphasize: "The winner—the fastest runner—crossed the finish line"
- Interrupt thought: "I was going to call you—oh, never mind"

## Parentheses ()
- Add extra information: "The Eiffel Tower (built in 1889) is in Paris"

## Ellipses (...)
- Show trailing off: "Maybe we should..."
- Omit words: "To be or not to be... that is the question"

## Practice:
Correct punctuation in complex sentences.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 5,
      title: "English: Analytical Reading",
      emoji: '🔍',
      content: `# Analytical Reading 🔍

Develop skills to deeply understand and evaluate texts!

## Pre-Reading Strategies:
- Examine the title, headings, and visuals
- Predict content based on prior knowledge
- Set a purpose for reading

## During Reading:
- Identify the author's main argument
- Notice evidence used to support claims
- Question the reliability of sources
- Recognize bias and perspective

## Post-Reading Analysis:
- Summarize key points objectively
- Evaluate the strength of arguments
- Connect to other texts or experiences
- Assess the validity of conclusions

## Critical Questions:
- What is the author's purpose?
- Who is the intended audience?
- What evidence supports the main ideas?
- Are there any logical fallacies?
- How does this text compare to others on the same topic?

## Practice:
Analyze sample texts using these strategies.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 6,
      title: "Shakespeare: Meet the Bard",
      emoji: '🎭',
      content: `# Meet William Shakespeare 🎭

Learn about the most famous writer in the English language!

## Who was Shakespeare?
- Born in 1564 in England
- Wrote plays and poems
- Died in 1616
- Called "The Bard" (meaning poet)

## Why is he Important?
- He invented many words we still use
- His stories are still acted out today
- He wrote about feelings and problems that people still have

## Famous Plays:
- **Romeo and Juliet**: A love story
- **Macbeth**: A story about ambition
- **Hamlet**: A story about revenge
- **A Midsummer Night's Dream**: A magical comedy

## Fun Facts:
- He wrote 37 plays and 154 poems
- He lived in Stratford-upon-Avon
- His theater was called the Globe Theatre

## Activity:
Draw what you think Shakespeare looked like!`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 7,
      title: "Shakespeare: Famous Sayings",
      emoji: '📜',
      content: `# Famous Shakespeare Sayings 📜

Discover expressions from Shakespeare still used today!

## Well-Known Sayings:

**"Break the ice"** (from The Taming of the Shrew)
- Meaning: Do something to get people talking

**"Wild goose chase"** (from Romeo and Juliet)
- Meaning: A foolish pursuit that leads nowhere

**"Heart of gold"** (from Henry V)
- Meaning: Very kind and generous

**"Good riddance"** (from Troilus and Cressida)
- Meaning: Happy to see something go away

**"Lie low"** (from Much Ado About Nothing)
- Meaning: Stay hidden and quiet

## Why These Matter:
- Shakespeare invented many words and phrases
- We still use these expressions today
- They help us express ideas more clearly

## Examples in Daily Life:
- "Let's break the ice" when meeting new friends
- "It's a wild goose chase" when looking for something impossible

## Activity:
Try using one of these expressions in a sentence!`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 8,
      title: "Shakespeare: Story Themes",
      emoji: '💭',
      content: `# Story Themes in Shakespeare 💭

Explore the big ideas in Shakespeare's plays!

## Universal Themes:

**Love**
- True love vs. fake love
- Love at first sight
- Love between family members
- Examples: Romeo and Juliet, A Midsummer Night's Dream

**Friendship**
- Loyalty to friends
- Betrayal by friends
- True friendship vs. fake friendship
- Examples: The Merchant of Venice, Hamlet

**Power and Leadership**
- Good leaders vs. bad leaders
- What makes someone a good ruler?
- How power changes people
- Examples: Julius Caesar, King Lear

**Appearance vs. Reality**
- Things are not always as they seem
- People pretending to be someone else
- Trusting what you see vs. what's true
- Examples: Hamlet, Much Ado About Nothing

**Justice and Fairness**
- What is fair punishment?
- Revenge vs. forgiveness
- Good vs. evil
- Examples: The Merchant of Venice, Measure for Measure

## Why These Themes Matter:
- They're still important today
- We face similar situations in our lives
- They help us understand human nature

## Activity:
Think of a modern movie or book that explores one of these themes.`,
      quizId: quizId++,
      assessmentType: 'english-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 9,
      title: "Author Study: Beatrix Potter",
      emoji: '🐰',
      content: `# Beatrix Potter 🐰

Beatrix Potter (1866–1943) was a writer, illustrator, and conservationist famous for her beautiful animal stories.

## The World of Peter Rabbit
Potter's stories often feature animal characters who behave like humans but still live in their natural world. 
- **Characterization**: Peter Rabbit is "naughty" but brave. Jemima Puddle-Duck is "simple" but determined.
- **Illustration**: She painted detailed watercolors of the Lake District, which made her stories feel very real.

## Simple Narrative Structure
Her stories usually follow a clear path:
1. **The Warning**: Peter is told not to go into Mr. McGregor's garden.
2. **The Temptation**: He goes anyway because he is curious.
3. **The Danger**: He gets caught and has to escape.
4. **The Lesson**: He returns home, safe but tired.

## Practice Questions

<!-- QUESTION_START -->
What is special about Beatrix Potter's animal characters?
<!-- OPTIONS -->
They wear clothes and talk but live in nature|They are like monsters|They don't have names|They only live in cities
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Potter's characters like Peter Rabbit wear jackets and talk, but they still live in burrows and fields!
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Where did Beatrix Potter find inspiration for her settings?
<!-- OPTIONS -->
London|The Lake District|A desert|A different planet
<!-- CORRECT -->
1
<!-- EXPLANATION -->
She loved the Lake District and used her detailed paintings of its nature in her books.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Name a character Beatrix Potter created.
<!-- OPTIONS -->
Harry Potter|Peter Rabbit|Winnie the Pooh|Aslan
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Peter Rabbit is her most famous creation!
<!-- QUESTION_END -->`,
      quizId: quizId++,
      assessmentType: 'quiz',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 10,
      title: "Author Study: Roald Dahl",
      emoji: '🍫',
      content: `# Roald Dahl 🍫

Roald Dahl (1916–1990) is famous for his incredible imagination, funny characters, and invented words.

## Vocabulary and "Gobblefunk"
Dahl loved to invent words. He called this **Gobblefunk**.
- **Whizzpopping**: A funny way to say... gas!
- **Gloriumptious**: Something wonderful.
- **Snozzcumber**: A disgusting vegetable.

## Humour and Descriptive Writing
Dahl often used "exaggeration" to make things funny or scary.
- His villains (like the Twits or Miss Trunchbull) are extremely ugly or mean.
- His heroes (like Matilda or Charlie) are often small but very smart and kind.

## Character Creation
When creating a character, Dahl focused on one specific trait and "turned it up to 11". For example, Augustus Gloop is NOT just hungry—he is the hungriest boy in the world!

## Practice Questions

<!-- QUESTION_START -->
What did Roald Dahl call his invented language?
<!-- OPTIONS -->
Dahl-speak|Gobblefunk|Nonsense|Funny words
<!-- CORRECT -->
1
<!-- EXPLANATION -->
He called it Gobblefunk! You can find many of these words in *The BFG*.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Which of these is a Roald Dahl villain?
<!-- OPTIONS -->
Matilda|Miss Trunchbull|The BFG|Charlie Bucket
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Miss Trunchbull is the terrifying headmistress in *Matilda*.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Why did Dahl use exaggeration?
<!-- OPTIONS -->
To make the story boring|To make characters more memorable and funny|He didn't know how to write normally|To save time
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Exaggeration makes characters like the Twits stand out and makes the humor much stronger.
<!-- QUESTION_END -->`,
      quizId: quizId++,
      assessmentType: 'quiz',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'english',
      lessonNumber: 11,
      title: "Author Study: Enid Blyton",
      emoji: '🔍',
      content: `# Enid Blyton 🔍

Enid Blyton (1897–1968) was one of the most successful writers of all time, famous for her adventure and mystery series.

## Clear Plots and Series
Blyton's books, like **The Famous Five** and **The Secret Seven**, are popular because they have fast-moving, exciting plots. 
- **Adventure Writing**: The characters often find themselves in mysteries involving hidden tunnels, smugglers, or secret maps.
- **Dialogue**: Her characters talk a lot to each other, which helps the reader feel like part of the "gang".

## Building a Mystery
A classic Blyton story often involves:
1. **The Setting**: A lonely island or a spooky old house.
2. **The Clue**: A strange noise at night or an old map.
3. **The Team**: A group of friends (and usually a dog!) working together.

## Practice Questions

<!-- QUESTION_START -->
Which famous series did Enid Blyton write?
<!-- OPTIONS -->
Harry Potter|The Famous Five|Percy Jackson|The Chronicles of Narnia
<!-- CORRECT -->
1
<!-- EXPLANATION -->
*The Famous Five* is one of her most legendary adventure series.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
What is a common feature of Blyton's adventure writing?
<!-- OPTIONS -->
Hidden tunnels and secret maps|Spaceships and aliens|Boring school days|Cooking tutorials
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Her books are filled with mysteries involving islands, tunnels, and secrets!
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Which of these is a classic Blyton "team" member?
<!-- OPTIONS -->
A robot|A loyal dog|A wizard|A ghost
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Almost all her adventure groups, like the Famous Five (Timmy the dog), have a loyal animal companion.
<!-- QUESTION_END -->`,
      quizId: quizId++,
      assessmentType: 'quiz',
    }),

  ];
}
