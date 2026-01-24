import { Lesson } from '../../models/Lesson.js';

/**
 * Year 3 Lessons
 */
export function getYear3Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Prehistoric Britain - Stone Age to Iron Age",
      emoji: '🪨',
      content: `# Prehistoric Britain - Stone Age to Iron Age 🪨

Welcome to a journey through 10,000 years of British history! Before the Romans arrived, Britain went through three major periods of change.

## 1. The Stone Age (Early Britain)
Technically split into the Palaeolithic, Mesolithic, and Neolithic.
- **Hunter-Gatherers**: Early humans followed herds of mammoths and deer.
- **Flint Tools**: Discovering that flint could be chipped into sharp axes and spears was a turning point.
- **First Farmers**: Eventually, people learned to plant seeds and keep animals, leading to the first permanent villages like Skara Brae.

## 2. The Bronze Age (Building and Settling)
- **Metalworking**: Around 2500 BC, people learned to mix copper and tin to make **Bronze**.
- **Roundhouses**: People lived in circular wooden homes with thatched roofs.
- **Stonehenge**: Many of the great stone monuments were completed or used during this time.

## 3. The Iron Age (Forts and Warriors)
- **Stronger Metal**: Iron was much harder than bronze, allowing for better plows and sharper weapons.
- **Hill Forts**: To protect themselves from rival tribes, people built massive earthwork forts on hills (like Maiden Castle).
- **Celtic Culture**: This was the time of the Celts, known for their beautiful jewelry (torcs) and fierce warriors.

## The Evolution of Technology
In the game, you will need to find the key inventions of each age to "evolve" your civilization to the next period!`,
      quizId: 61,
      assessmentType: 'prehistoric-britain-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Genetics and Family Trees - The First Families",
      emoji: '🧬',
      content: `# Genetics and Family Trees - The First Families 🧬

Let's learn about genetics through the story of the first families!

## The Story of Twins

In the beginning, God created the first families. Some families had twins - two children who looked very similar!

In this game, you'll learn how traits like eye color, hair color, and height are passed from parents to children.

## How to Play

1. **Match the Couples**: Drag boys to girls to create married couples
2. **Explore Genetics**: See how traits combine using Punnett squares
3. **Take a Quiz**: Answer questions about what children might look like

## What You'll Learn

- **Dominant vs Recessive**: Some traits are stronger than others
- **Genotypes and Phenotypes**: The difference between genes and appearance
- **Family Trees**: How traits are passed through generations
- **Probability**: What combinations are possible in children

## The Science

Just like the Haribo genetics meme, when twins marry twins, their children can have many different combinations of traits!

**Eye Color**: Brown eyes (B) are dominant over blue eyes (b)
**Hair Shade**: Dark hair (D) is dominant over blonde hair (d)
**Height**: Tall (T) is dominant over short (t)

## Remember

Every person is unique, created by God with special combinations of traits!`,
      quizId: null,
      assessmentType: 'genetics-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Religious History - Kings and Prophets",
      emoji: '👑',
      content: `# Biblical History - Kings and Prophets 👑



Let's learn about the kings and prophets from the Bible!



## King David



- David was a shepherd boy

- He became a great king

- He was brave and wise

- He wrote many psalms (songs)



## King Solomon



- Solomon was David's son

- He was very wise

- He built a great temple

- He was known for his wisdom



## The Temple



- Solomon built a beautiful temple

- It was in Jerusalem

- It was God's house

- It was very important



## Prophets



- Prophets were messengers

- They spoke God's words

- They warned people

- They gave hope



## The Divided Kingdom



- After Solomon, the kingdom split

- There were two kingdoms

- Israel in the north

- Judah in the south



## Fun Activities



- Learn about the kings

- Draw the temple

- Learn about prophets

- Make a timeline



## Remember



- David and Solomon were great kings

- The temple was important

- Prophets were messengers

- These are important stories!



## Practice Questions



<!-- QUESTION_START -->
What was David before he became king?
<!-- OPTIONS -->
A soldier|A shepherd boy|A prince|A farmer
<!-- CORRECT -->
1
<!-- EXPLANATION -->
David was a shepherd boy before he became a great king. He was brave and wise!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who built the great temple in Jerusalem?
<!-- OPTIONS -->
David|Solomon|Moses|Abraham
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Solomon, who was David's son, built the great temple in Jerusalem. It was God's house and very important!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were prophets?
<!-- OPTIONS -->
Kings|Soldiers|Messengers|Priests
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Prophets were messengers who spoke God's words. They warned people and gave hope!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened to the kingdom after Solomon?
<!-- OPTIONS -->
It grew bigger|It split into two kingdoms|It disappeared|It moved to a new place
<!-- CORRECT -->
1
<!-- EXPLANATION -->
After Solomon, the kingdom split into two: Israel in the north and Judah in the south!
<!-- QUESTION_END -->`,
      quizId: 61,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Ancient Greece - Gods and Heroes",
      emoji: '🏛️',
      content: `# Ancient Greece - Gods and Heroes 🏛️



Let's learn about ancient Greece!



## When Was Ancient Greece?



- Ancient Greece existed from about 800 BC to 146 BC

- That's a very long time ago!

- It was in Europe

- It was a great civilization



## Greek City-States



- Greece was made of city-states

- Athens was one city-state

- Sparta was another

- Each was independent



## Greek Gods and Goddesses



- Greeks believed in many gods

- Zeus was king of the gods ⚡

- Athena was goddess of wisdom

- Poseidon was god of the sea 🌊



## The Olympics



- The Olympics started in Greece

- They were athletic competitions

- Held every four years

- Still happen today!



## Famous Greeks



- Socrates was a philosopher

- Plato was his student

- They asked important questions

- They were very wise



## Greek Architecture



- Greeks built beautiful buildings

- They used columns

- The Parthenon is famous

- Still admired today!



## Fun Activities



- Learn about Greek gods

- Draw Greek buildings

- Learn about the Olympics

- Write about ancient Greece



## Remember



- Ancient Greece was long ago

- They had many gods

- They started the Olympics

- They influenced the world!



## Practice Questions



<!-- QUESTION_START -->
Who was the king of the Greek gods?
<!-- OPTIONS -->
Poseidon|Athena|Zeus|Apollo
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Zeus was the king of the Greek gods! He was very powerful and important in Greek mythology.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did the Olympics start?
<!-- OPTIONS -->
Rome|Egypt|Greece|China
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The Olympics started in ancient Greece! They were athletic competitions held every four years, and they still happen today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were the two famous Greek city-states?
<!-- OPTIONS -->
Athens and Sparta|Rome and Athens|Sparta and Egypt|Athens and Egypt
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Athens and Sparta were two famous Greek city-states. Each was independent and had its own way of life!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What famous building did the Greeks build using columns?
<!-- OPTIONS -->
The Colosseum|The Parthenon|The Great Wall|The Pyramids
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Parthenon is a famous Greek building that used columns. Greek architecture is still admired today!
<!-- QUESTION_END -->`,
      quizId: null,
      assessmentType: 'ancient-greece-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Ancient Greece - Daily Life",
      emoji: '🏺',
      content: `# Ancient Greece - Daily Life 🏺



Let's learn about how people lived in ancient Greece!



## Greek Homes



- Greek homes were simple

- They had courtyards

- They had few windows

- They were made of mud and stone



## Greek Schools



- Boys went to school

- Girls learned at home

- They learned reading and writing

- They learned music and sports



## Greek Democracy



- Athens created democracy

- People could vote

- Citizens had a say

- This influenced many countries



## Greek Theater



- Greeks loved theater

- They watched plays

- They had comedies and tragedies

- Theater was very important



## Greek Art and Pottery



- Greeks made beautiful pottery

- They painted scenes on vases

- They made sculptures

- Their art is still admired



## Fun Activities



- Draw Greek homes

- Learn about democracy

- Draw Greek pottery

- Write about Greek life



## Remember



- Greek homes were simple

- Boys went to school

- Athens created democracy

- Greeks loved art and theater!



## Practice Questions



<!-- QUESTION_START -->
Who went to school in ancient Greece?
<!-- OPTIONS -->
Girls|Boys|Both boys and girls|Nobody
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In ancient Greece, boys went to school while girls learned at home. They learned reading, writing, music, and sports!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Athens create that influenced many countries?
<!-- OPTIONS -->
The Olympics|Democracy|Theater|Pottery
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Athens created democracy, where people could vote and citizens had a say. This influenced many countries around the world!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Greeks love to watch?
<!-- OPTIONS -->
Gladiator fights|Plays in the theater|Chariot races|Sports games
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Greeks loved theater! They watched plays, including comedies and tragedies. Theater was very important to them!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Greeks make that is still admired today?
<!-- OPTIONS -->
Pottery|Sculptures|Beautiful art|All of the above
<!-- CORRECT -->
3
<!-- EXPLANATION -->
Greeks made beautiful pottery, sculptures, and art that is still admired today! They painted scenes on vases and created amazing works of art!
<!-- QUESTION_END -->`,
      quizId: 70,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Ancient Rome - The Empire",
      emoji: '🏛️',
      content: `# Ancient Rome - The Empire 🏛️

Rome grew from a small town in Italy into one of the largest and most powerful empires the world has ever seen. This was possible because Romans were brilliant engineers and organized leaders.

## Key Roman Innovations
- **Aqueducts**: Huge stone bridges that carried fresh water for miles from the mountains into the city. Gravity did all the work!
- **Roman Roads**: They built 50,000 miles of straight, paved roads. This allowed their armies to move quickly and merchants to trade goods easily.
- **Concrete**: Romans invented a special type of concrete that was so strong it could even set underwater! This allowed them to build massive structures like the Colosseum.

## The Roman Army
The backbone of the empire was the **Roman Legions**. These were professional, highly disciplined soldiers who wore strong armor and fought in perfect formation. They didn't just fight; they also built many of the empire's roads and bridges.

## Rule and Culture
Rome was ruled by **Emperors** who held absolute power. The official language was **Latin**, which is the ancestor of Spanish, French, Italian, and many English words!

In the game, you will take on the role of an **Empire Architect**. You must choose the right Roman innovations to solve the problems of the city and help the Emperor expand our borders!`,
      quizId: null,
      assessmentType: 'ancient-rome-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 7,
      title: "Ancient Rome - Daily Life",
      emoji: '🏺',
      content: `# Ancient Rome - Daily Life 🏺

What was it like to wake up in the city of Rome 2,000 years ago? For some it was a life of luxury, but for most, it was a busy, crowded, and exciting world.

## Roman Homes: Villas vs. Insulae
- **Rich Romans** lived in beautiful houses called **Villas**. They had inner courtyards (Atriums), floor heating (Hypocausts), and even running water!
- **Poor Romans** lived in tall apartment blocks called **Insulae**. These were often made of wood and were very crowded. There were no kitchens or toilets inside!

## The Social Heart: Public Baths
The baths were more than just a place to get clean. They were a social club. Romans went there to exercise, gossip about politics, listen to poetry, and relax in different temperature pools.

## Food and Dining
Romans didn't sit at tables to eat fancy meals; they reclined on couches! Most people ate simple food like bread, porridge, and olives. They loved a salty fish sauce called **Garum**, which they put on almost everything.

## Great Entertainment
Rome was famous for "Bread and Circuses"—food and games to keep the people happy.
- **The Colosseum**: Where gladiators fought for glory.
- **Circus Maximus**: A massive track for high-speed, dangerous chariot races.

In the game, you will explore the streets of Rome and visit these famous locations to witness daily life yourself!`,
      quizId: null,
      assessmentType: 'roman-daily-life-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 8,
      title: "The Fall of Rome",
      emoji: '⚔️',
      content: `# The Fall of Rome ⚔️

No empire lasts forever. After hundreds of years of power, the Roman Empire began to decline. It didn't happen overnight; it was a slow process caused by many different problems working together.

## Why did the Giant Fall?
1. **Size**: The empire was so large it was almost impossible to defend. News traveled slowly by horse, meaning the Emperor often didn't know about an attack until it was too late.
2. **Economic Collapse**: The army was incredibly expensive to maintain. To pay for it, Rome printed more money, but this caused **Inflation**—where money loses its value and prices go up.
3. **Invasions**: Hungry and powerful tribes from outside Rome, like the **Goths**, **Vandals**, and **Huns**, began attacking the borders.

## The Final Blow
In **AD 476**, the last Roman Emperor in the West was overthrown by a tribal leader. While the Western Empire fell into the "Dark Ages," Roman influence never truly disappeared. Their laws, buildings, and language changed the world forever.

In the game, you will handle the difficult challenges of the late empire. Can you make the choices needed to try and save Rome?`,
      quizId: null,
      assessmentType: 'fall-of-rome-game',
      categoryId: null,
    }),





    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Blockly Puzzle",
      emoji: '🧩',
      content: `# Blockly Puzzle 🧩

Learn to code with Blockly Games!

In Puzzle, you'll learn the basics of programming by connecting blocks together to solve puzzles.

## Instructions

- Drag blocks from the toolbox to the workspace
- Connect blocks together to create programs
- Click "Run" to see your program in action
- Complete each puzzle to move to the next level

Have fun learning to code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Blockly Maze",
      emoji: '🗺️',
      content: `# Blockly Maze 🗺️

Navigate through mazes using code!

In Maze, you'll learn to use loops and conditionals to guide a character through mazes.

## Instructions

- Use movement blocks to navigate
- Try using loops to repeat actions
- Use conditionals to make decisions
- Complete each maze to unlock the next one

Challenge yourself to use fewer blocks!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Blockly Bird",
      emoji: '🐦',
      content: `# Blockly Bird 🐦

Help the bird catch worms!

In Bird, you'll learn about conditionals and loops by helping a bird catch worms while avoiding obstacles.

## Instructions

- Use conditionals to check for worms
- Use loops to repeat actions
- Guide the bird to catch all the worms
- Avoid obstacles and complete each level

Think carefully about your code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Blockly Turtle",
      emoji: '🐢',
      content: `# Blockly Turtle 🐢

Draw pictures with code!

In Turtle, you'll learn to draw shapes and patterns by programming a turtle to move and draw.

## Instructions

- Use movement blocks to move the turtle
- Use drawing blocks to create lines
- Try using loops to create patterns
- Experiment with angles and distances

Create beautiful art with code!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Blockly Movie",
      emoji: '🎬',
      content: `# Blockly Movie 🎬

Create animations with code!

In Movie, you'll learn to create animations by programming characters to move and interact.

## Instructions

- Use blocks to control character movement
- Create sequences of actions
- Use timing blocks to control speed
- Make your own animated stories

Bring your stories to life!

## Note

You may see console messages about "Pixel errors" or "Canvas2D" - these are normal! Blockly Movie checks your animation frame-by-frame to see if it matches the target. These messages don't affect the game.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Blockly Pond Tutor",
      emoji: '🦆',
      content: `# Blockly Pond Tutor 🦆

Learn JavaScript with visual blocks!

In Pond Tutor, you'll learn JavaScript programming concepts using visual blocks that translate to real code.

## Instructions

- Follow the tutorial to learn JavaScript
- See how blocks translate to code
- Complete exercises to practice
- Build your programming skills

Learn real programming concepts!

## Note

You may see console messages about "play() request was interrupted" - these are normal! Blockly Games preloads sound effects, which can trigger browser warnings. These messages don't affect the game and you can safely ignore them.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Blockly Pond",
      emoji: '🌊',
      content: `# Blockly Pond 🌊

Write JavaScript code to compete!

In Pond, you'll write JavaScript code to compete in a duck racing game.

## Instructions

- Write JavaScript code directly
- Use functions and variables
- Optimize your code for speed
- Compete with others or yourself

Master JavaScript programming!

## Note

You may see console messages about "play() request was interrupted" or "createRadialGradient" - these are normal! Blockly Games preloads sound effects and creates visual effects that can trigger browser warnings. These messages don't affect the game and you can safely ignore them.`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),
  ];
}