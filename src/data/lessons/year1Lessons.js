import { Lesson } from '../../models/Lesson.js';

/**
 * Year 1 Lessons
 */
export function getYear1Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Dinosaurs - When They Lived",
      emoji: '🦕',
      assessmentType: 'html-game',
      content: `# Dinosaurs - When They Lived 🦕



Let's learn about when dinosaurs lived!



## When Dinosaurs Lived



- Dinosaurs lived millions of years ago

- That's a very, very long time!

- Before people existed

- Long before your grandparents were born



## Different Periods



**Triassic Period**

- The first dinosaurs

- Started about 250 million years ago

- Dinosaurs were smaller then



**Jurassic Period**

- Dinosaurs got bigger

- Famous dinosaurs like Brachiosaurus

- Many different types



**Cretaceous Period**

- Last period of dinosaurs

- T-Rex lived then

- Dinosaurs disappeared at the end



## Dinosaur Fossils



- Fossils are what's left of dinosaurs

- Bones turned to stone

- Scientists find them

- They tell us about dinosaurs



## How We Know About Dinosaurs



- Scientists study fossils

- They put bones together

- They learn how dinosaurs lived

- They teach us about the past



## Fun Activities



- Learn about different periods

- Draw dinosaurs from each period

- Make a timeline

- Learn about fossils



## Remember



- Dinosaurs lived millions of years ago

- There were different periods

- Fossils tell us about them

- We can learn from the past!



## Practice Questions



<!-- QUESTION_START -->
When did dinosaurs live?
<!-- OPTIONS -->
A few years ago|Hundreds of years ago|Millions of years ago|Last year
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Dinosaurs lived millions of years ago! That's a very, very long time - before people existed!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What period did T-Rex live in?
<!-- OPTIONS -->
Triassic Period|Jurassic Period|Cretaceous Period|Modern Period
<!-- CORRECT -->
2
<!-- EXPLANATION -->
T-Rex lived in the Cretaceous Period, which was the last period of dinosaurs before they disappeared!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are fossils?
<!-- OPTIONS -->
Living dinosaurs|Bones that turned to stone|Modern animals|Rocks
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Fossils are what's left of dinosaurs - bones that turned to stone! Scientists find them and learn about dinosaurs!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What do scientists do with fossils?
<!-- OPTIONS -->
Nothing|Study them and put bones together|Throw them away|Hide them
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Scientists study fossils, put bones together, and learn how dinosaurs lived. They teach us about the past!
<!-- QUESTION_END -->`,
      quizId: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Ancient Egypt - Pyramids and Pharaohs",
      emoji: '🏺',
      content: `# Ancient Egypt - Pyramids and Pharaohs 🏺

## Welcome to the Pharaoh's Tomb! 🐪

Long ago in Ancient Egypt, powerful kings called **Pharaohs** ruled the land. When they died, they were buried in magnificent **pyramids** with all their treasures!

### Your Mission:
🔍 Explore the tomb and find **3 hidden treasures**
👑 Tap on different containers to see what's inside
💎 Look for jewels, crowns, and golden artifacts
⚠️ Be careful - not everything in the tomb is treasure!

Listen carefully as each item is revealed. Can you find all the Pharaoh's treasures?

**Tap the containers below to start your adventure!**`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Life Long Ago vs. Life Now",
      emoji: '🏰',
      content: `# Life Long Ago vs. Life Now 🏰



Let's compare life in the past and life today!



## Homes Then and Now



**Long Ago:**

- Smaller houses

- No electricity

- Fireplaces for warmth

- Simple furniture



**Now:**

- Bigger houses

- Electricity everywhere

- Central heating

- Modern furniture



## Transport Then and Now



**Long Ago:**

- People walked 🚶

- Used horses 🐴

- Carriages

- Very slow



**Now:**

- Cars 🚗

- Trains 🚂

- Planes ✈️

- Very fast!



## Schools Then and Now



**Long Ago:**

- Wrote on slates ✏️

- Very strict teachers

- Not all children went

- Different lessons



**Now:**

- Use computers 💻

- Friendly teachers

- All children go

- Many subjects



## Technology Changes



**Long Ago:**

- No phones

- No computers

- No TV

- Letters for communication



**Now:**

- Smartphones 📱

- Computers everywhere

- TV and internet

- Instant communication



## Fun Activities



- Compare old and new homes

- Draw "then and now" pictures

- Write about changes

- Make a comparison chart



## Remember



- Life has changed a lot

- Technology changed everything

- We can learn from the past

- History shows us change!



## Practice Questions



<!-- QUESTION_START -->
How did people travel long ago?
<!-- OPTIONS -->
By car|By walking and using horses|By plane|By train
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Long ago, people walked and used horses! They had carriages, but travel was very slow compared to today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did children write on in school long ago?
<!-- OPTIONS -->
Computers|Tablets|Slates|Paper
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Long ago, children wrote on slates! Now we use computers. Schools have changed a lot!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did homes have long ago for warmth?
<!-- OPTIONS -->
Central heating|Fireplaces|Electric heaters|Air conditioning
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Long ago, homes had fireplaces for warmth! There was no electricity, so they used fire to keep warm!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do we communicate now compared to long ago?
<!-- OPTIONS -->
By letters only|By instant communication with phones and internet|By shouting|By smoke signals
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Now we have instant communication with smartphones, computers, and the internet! Long ago, people sent letters which took a long time!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Famous People from History",
      emoji: '👑',
      content: `# Famous People from History 👑



Let's learn about important people from the past!



## Queen Elizabeth I



- She was Queen of England 👑

- She lived a long time ago

- She was very brave and clever

- She helped make England strong



## Florence Nightingale



- She was a nurse 🏥

- She helped sick and injured people

- She made hospitals better places

- She is called "The Lady with the Lamp"



## William Shakespeare



- He wrote amazing plays and poems 📚

- He lived in England long ago

- People still read his stories today

- He is one of the most famous writers ever



## What Made Them Special



- They did important things

- They helped others

- They changed the world

- We remember them today



## Fun Activities



- Draw pictures of famous people

- Act out stories about them

- Write about your favorite

- Make a timeline of when they lived



## Remember



- Famous people did important things

- We can learn from their stories

- History is full of interesting people

- They inspire us today!



## Practice Questions



<!-- QUESTION_START -->
Who was Queen Elizabeth I?
<!-- OPTIONS -->
A nurse|A writer|Queen of England|A scientist
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Queen Elizabeth I was Queen of England! She lived a long time ago, was very brave and clever, and helped make England strong!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was Florence Nightingale known for?
<!-- OPTIONS -->
Being a queen|Being a nurse who helped people|Being a writer|Being a soldier
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Florence Nightingale was a nurse who helped sick and injured people! She made hospitals better places and is called "The Lady with the Lamp"!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did William Shakespeare do?
<!-- OPTIONS -->
Was a king|Wrote amazing plays and poems|Was a nurse|Was a soldier
<!-- CORRECT -->
1
<!-- EXPLANATION -->
William Shakespeare wrote amazing plays and poems! He lived in England long ago, and people still read his stories today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why do we remember famous people from history?
<!-- OPTIONS -->
They were rich|They did important things and helped others|They were tall|They were old
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We remember famous people because they did important things, helped others, changed the world, and inspire us today!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'html-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Local History",
      emoji: '🏘️',
      content: `# Local History 🏘️



Let's learn about the history of where we live!



## Your Local Area



- Every place has a history

- Buildings tell stories

- Streets have names with meanings

- Parks and places have pasts



## What to Look For



- Old buildings 🏛️

- Statues and monuments 🗿

- Historical markers 📍

- Old photos of your area 📷



## Famous Places



- Your local library might be old 📚

- Your school might have history 🏫

- Parks might have stories 🌳

- Shops might be in old buildings 🏪



## How to Learn About Local History



- Ask grown-ups

- Visit local museums

- Look at old photos

- Read about your area



## Fun Activities



- Take a walk and look for old buildings

- Ask grown-ups about local history

- Draw a map of your area

- Write about your favorite local place



## Remember



- History is all around us

- Your local area has stories

- We can learn from the past

- History is everywhere!



## Practice Questions



<!-- QUESTION_START -->
What can tell us about local history?
<!-- OPTIONS -->
Only new buildings|Old buildings, statues, monuments, and old photos|Only trees|Only cars
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Old buildings, statues, monuments, and old photos can tell us about local history! Every place has a history!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where can you learn about local history?
<!-- OPTIONS -->
Only at home|At local museums, by asking grown-ups, and looking at old photos|Only at school|Only in books
<!-- CORRECT -->
1
<!-- EXPLANATION -->
You can learn about local history at local museums, by asking grown-ups, looking at old photos, and reading about your area!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What might have history in your local area?
<!-- OPTIONS -->
Only new buildings|Your library, school, parks, and shops in old buildings|Only cars|Only trees
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Your local library, school, parks, and shops in old buildings might have history! History is all around us!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to learn about local history?
<!-- OPTIONS -->
It's not important|It helps us understand our area and learn from the past|It's boring|It's too hard
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Learning about local history helps us understand our area and learn from the past! History is everywhere and full of interesting stories!
<!-- QUESTION_END -->`,
      quizId: 45,
      assessmentType: 'local-history-game',
      categoryId: null,
    }),















    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Blockly Lesson 1: Hello World",
      emoji: '👋',
      content: `# Blockly Lesson 1: Hello World 👋

Learn to print messages and numbers with code blocks!

This is your first coding lesson! You'll learn how to:
- Print text messages
- Print numbers
- Create your first programs

## Instructions

1. Read each challenge carefully
2. Drag print blocks from the left toolbox
3. Connect them like puzzle pieces
4. Change the text inside the blocks
5. Click "Run My Code" to test your program
6. Click "Check Answer" when you think it's right!

Complete all 3 challenges to earn your stars!

Have fun learning to code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Blockly Lesson 2: Simple Math",
      emoji: '🔢',
      content: `# Blockly Lesson 2: Simple Math 🔢

Learn to solve math problems using code!

Now you'll learn how to:
- Use math blocks with different operations
- Add, subtract, multiply, and divide
- Combine print blocks with math blocks

## Instructions

1. Look at each math problem
2. Use a print block from the left
3. Put a math block inside the print block
4. Set the correct numbers and operation (+, -, ×, ÷)
5. Run your code and check your answer!

Complete all 4 math challenges to master coding math!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Blockly Lesson 3: Sequences & Patterns",
      emoji: '🔄',
      content: `# Blockly Lesson 3: Sequences & Patterns 🔄

Learn to create patterns and sequences with multiple blocks!

In this lesson you'll learn:
- How to stack blocks together
- Create number sequences (1, 2, 3)
- Create letter patterns (A, B, C)
- Make countdowns and patterns

## Instructions

1. Look at the pattern you need to create
2. Stack multiple print blocks together (one under another)
3. Each print block makes one line of output
4. Match the pattern exactly!

Complete all 4 pattern challenges to become a pattern master!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Blockly Lesson 4: Repeat Loops",
      emoji: '🔁',
      content: `# Blockly Lesson 4: Repeat Loops 🔁

Learn to use loops to repeat actions multiple times!

In this lesson you'll learn:
- How to use repeat blocks
- Make code repeat 3, 5, or 10 times
- Save time by not writing the same code over and over
- Create patterns with loops

## Instructions

1. Drag a "repeat" block from the Loops category
2. Set how many times to repeat
3. Put blocks inside the repeat block
4. Watch your code run multiple times!

Master loops to become a more efficient coder!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Blockly Lesson 5: Variables",
      emoji: '📦',
      content: `# Blockly Lesson 5: Variables 📦

Learn to store and use information with variables!

In this lesson you'll learn:
- What variables are (boxes that hold information)
- How to create a variable
- How to store numbers and text
- How to change variable values
- How to use variables in math

## Instructions

1. Click the "Variables" category
2. Create a new variable with a name
3. Use "set variable to" blocks
4. Store numbers or text in your variables
5. Print or use your variables!

Variables help you remember and reuse information!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Blockly Lesson 6: Logic & Conditionals",
      emoji: '🤔',
      content: `# Blockly Lesson 6: Logic & Conditionals 🤔

Learn to make decisions in your code with if/else blocks!

In this lesson you'll learn:
- How to compare numbers (>, <, =)
- If/else statements (if this, then that)
- Making your code "think"
- Conditional logic

## Instructions

1. Use "if" blocks from the Logic category
2. Add comparison blocks (>, <, =)
3. Put actions inside the if block
4. Add "else" for what happens when false
5. Watch your code make decisions!

Logic makes your programs smart and interactive!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Blockly Lesson 7: Counting Loops",
      emoji: '🔢',
      content: `# Blockly Lesson 7: Counting Loops 🔢

Learn to use counting loops to repeat code a specific number of times!

In this lesson you'll learn:
- Using "count with" loops
- Counting forward and backward
- Counting by different amounts
- Using the counter variable

## Instructions

1. Use "count with" loops from Loops category
2. Set FROM, TO, and BY values
3. Use the counter variable (like i)
4. Print the counter to see it change
5. Create different counting patterns!

Counting loops are perfect for numbers and sequences!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 8,
      title: "Blockly Lesson 8: Text Joining",
      emoji: '🔗',
      content: `# Blockly Lesson 8: Text Joining 🔗

Learn to join words and sentences together!

In this lesson you'll learn:
- Joining multiple text pieces
- Adding spaces between words
- Creating sentences from parts
- Combining text with variables

## Instructions

1. Use "create text with" from Text category
2. Add multiple text slots
3. Join words with spaces
4. Combine with variables
5. Build complete sentences!

Text joining lets you create dynamic messages!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 9,
      title: "Blockly Lesson 9: Functions",
      emoji: '⚙️',
      content: `# Blockly Lesson 9: Functions ⚙️

Learn to create reusable blocks of code called functions!

In this lesson you'll learn:
- Creating your own functions
- Calling functions multiple times
- Making code more organized
- Reusing code without repeating

## Instructions

1. Click Functions category and create a function
2. Give it a name (like "sayHello")
3. Put blocks inside your function
4. Call your function to run it
5. Call it multiple times to reuse!

Functions make your code cleaner and easier to manage!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),





    new Lesson({
      id: lessonId++,
      yearId: 'year1',
      subjectId: 'technology',
      lessonNumber: 10,
      title: "Flappy Bird Game",
      emoji: '🐦',
      assessmentType: 'flappy-bird-game',
      categoryId: null,
    }),
  ];
}