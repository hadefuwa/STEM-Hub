import { Lesson } from '../../models/Lesson.js';

/**
 * Reception Lessons
 */
export function getReceptionLessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Recognising Numbers",
      emoji: '🔢',
      content: `# Recognising Numbers 🔢



Let's learn to recognise numbers from 1 to 10!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## Numbers 1-10



1️⃣ One

2️⃣ Two

3️⃣ Three

4️⃣ Four

5️⃣ Five

6️⃣ Six

7️⃣ Seven

8️⃣ Eight

9️⃣ Nine

🔟 Ten



## Fun Activities



- Find numbers around you

- Count objects

- Practice recognising numbers!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Phonics: Letter Sounds",
      emoji: '🔊',
      content: `# Phonics: Letter Sounds 🔤



Let's learn how letters make sounds!



## Basic Letter Sounds



**A** says /a/ like in apple 🍎

**B** says /b/ like in ball ⚽

**C** says /c/ like in cat 🐱

**D** says /d/ like in dog 🐶

**E** says /e/ like in egg 🥚



## Blending Sounds



When we put sounds together, we make words!



- C-A-T = Cat 🐱

- D-O-G = Dog 🐶

- H-A-T = Hat 🎩

- S-U-N = Sun ☀️



## Practice



Try reading these words:

- M-A-T

- P-A-T

- B-A-T

- R-A-T



## Fun Activities



- Sound out words together

- Find objects that start with each sound

- Play phonics games

- Read simple books



## Remember



- Letters make sounds

- Sounds blend to make words

- Practice every day!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Dinosaurs - Big and Small",
      emoji: '🦖',
      assessmentType: null, // Uses HTML game instead
      content: `# Dinosaurs - Big and Small 🦖



Let's learn about different types of dinosaurs!



## Big Dinosaurs



**T-Rex** 🦖

- Very big and strong

- Had sharp teeth

- Was a meat eater

- Very scary!



**Triceratops** 🦏

- Had three horns

- Had a big frill

- Ate plants

- Was protected



**Brachiosaurus** 🦕

- Had a very long neck

- Was very tall

- Ate leaves from trees

- Was gentle



## Small Dinosaurs



- Some dinosaurs were small

- Some were as big as chickens

- They all lived together

- Long, long ago!



## Where Dinosaurs Lived



- Dinosaurs lived on land

- Some lived near water

- They lived all over the world

- They lived millions of years ago



## Why Dinosaurs Disappeared



- Something big happened

- The world changed

- Dinosaurs went away

- But we can still learn about them!



## Fun Activities



- Draw different dinosaurs

- Learn dinosaur names

- Make dinosaur sounds

- Pretend to be dinosaurs!



## Remember



- There were many types of dinosaurs

- Some were big, some were small

- They lived long ago

- We learn about them from fossils!



## Practice Questions



<!-- QUESTION_START -->
What did T-Rex eat?
<!-- OPTIONS -->
Plants|Meat|Nothing|Fruits
<!-- CORRECT -->
1
<!-- EXPLANATION -->
T-Rex was a meat eater! It was very big and strong, had sharp teeth, and was very scary!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Triceratops have?
<!-- OPTIONS -->
Sharp teeth|Three horns and a big frill|A long neck|Wings
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Triceratops had three horns and a big frill! It ate plants and was protected!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did dinosaurs live?
<!-- OPTIONS -->
In the sky|On land and some near water|Only in water|Only in caves
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Dinosaurs lived on land, some lived near water, they lived all over the world, and they lived millions of years ago!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do we learn about dinosaurs?
<!-- OPTIONS -->
We see them|From fossils|We don't|We guess
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We learn about dinosaurs from fossils! Even though they disappeared long ago, we can still learn about them!
<!-- QUESTION_END -->`,
      quizId: 37,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Noah's Ark - A Big Boat",
      emoji: '🚢',
      content: `# Noah's Ark - A Big Boat 🚢



Let's learn about Noah and his big boat!



## The Story of Noah



- Noah was a good man

- God told him to build a big boat

- The boat was called an ark

- It was very, very big!



## Building the Ark



- Noah built the ark

- It was made of wood

- It was huge!

- It had rooms for animals



## Animals Coming in Pairs



- Two of every animal came 🐘🐘

- Lions, elephants, birds, and more

- They all came to the ark

- They came in pairs - two of each!



## The Rain and the Flood



- It rained and rained

- Water covered everything

- The ark floated on the water

- Everyone was safe inside



## The Rainbow Promise



- After the rain stopped

- A beautiful rainbow appeared 🌈

- It was a promise

- A promise that it wouldn't flood again



## Fun Activities



- Draw Noah's ark

- Draw animals going into the ark

- Draw a rainbow

- Act out the story



## Remember



- Noah built a big boat

- Animals came in pairs

- The rainbow was a promise

- This is a special story!



## Practice Questions



<!-- QUESTION_START -->
What did God tell Noah to build?
<!-- OPTIONS -->
A house|A big boat called an ark|A car|A plane
<!-- CORRECT -->
1
<!-- EXPLANATION -->
God told Noah to build a big boat called an ark! Noah was a good man, and the ark was very, very big!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How many of each animal came to the ark?
<!-- OPTIONS -->
One|Two (in pairs)|Three|Four
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Two of every animal came to the ark! Lions, elephants, birds, and more - they all came in pairs, two of each!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened when it rained?
<!-- OPTIONS -->
Nothing|Water covered everything and the ark floated|Only a little rain|The ark sank
<!-- CORRECT -->
1
<!-- EXPLANATION -->
It rained and rained, water covered everything, the ark floated on the water, and everyone was safe inside!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was the rainbow?
<!-- OPTIONS -->
Just pretty|A promise that it wouldn't flood again|Nothing|Just colors
<!-- CORRECT -->
1
<!-- EXPLANATION -->
After the rain stopped, a beautiful rainbow appeared! It was a promise - a promise that it wouldn't flood again!
<!-- QUESTION_END -->`,
      quizId: 37,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Ancient Stories - The First Cities",
      emoji: '🏛️',
      assessmentType: null, // Uses HTML game instead
      content: `# Ancient Stories - The First Cities 🏛️



Long, long ago, people started living in cities!



## What is a City?



- A city is a place where many people live together

- Cities have lots of houses

- Cities have places to work

- Cities have places to play



## The First Cities



- Long, long ago, people built the first cities

- They were very different from today

- They were smaller

- But they were still cities!



## People Living Together



- In cities, people lived close together

- They helped each other

- They worked together

- They built things together



## Simple Buildings



- The first buildings were simple

- They were made of mud and stone

- They were different from today

- But they were homes!



## Fun Activities



- Draw a simple city

- Talk about what cities need

- Draw buildings

- Learn about the first cities



## Remember



- Cities are places where many people live

- The first cities were long ago

- People lived together

- Cities are important!



## Practice Questions



<!-- QUESTION_START -->
What is a city?
<!-- OPTIONS -->
A small house|A place where many people live together|A forest|A mountain
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A city is a place where many people live together! Cities have lots of houses, places to work, and places to play!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
When were the first cities built?
<!-- OPTIONS -->
Today|Long, long ago|Never|Last year
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Long, long ago, people built the first cities! They were very different from today - they were smaller, but they were still cities!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did people do in cities?
<!-- OPTIONS -->
Nothing|Lived close together, helped each other, worked together, and built things together|Only played|Only slept
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In cities, people lived close together, helped each other, worked together, and built things together!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were the first buildings made of?
<!-- OPTIONS -->
Steel|Mud and stone|Plastic|Glass
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The first buildings were simple, made of mud and stone! They were different from today, but they were homes!
<!-- QUESTION_END -->`,
      quizId: 37,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Life Long Ago",
      emoji: '🏠',
      content: `# Life Long Ago 🏠



Life was very different long ago!



## How People Lived



- People lived in different houses 🏠

- Houses were simpler

- No electricity

- No running water



## Different Houses



- Houses were made of different materials

- Some were made of wood

- Some were made of mud

- They were smaller than today



## No Electricity



- There was no electricity

- People used candles for light 🕯️

- They used fireplaces for warmth

- Life was different!



## Different Clothes



- People wore different clothes

- Clothes were simpler

- Made by hand

- Different from today



## Fun Activities



- Compare old and new houses

- Draw a house from long ago

- Talk about how life changed

- Learn about the past



## Remember



- Life was different long ago

- Houses were different

- No electricity

- We can learn about the past!



## Practice Questions



<!-- QUESTION_START -->
What was different about houses long ago?
<!-- OPTIONS -->
They were the same|They were simpler, no electricity, no running water|They were bigger|They were made of glass
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Houses were simpler long ago - no electricity, no running water! They were made of different materials like wood and mud!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did people use for light long ago?
<!-- OPTIONS -->
Electric lights|Candles|Nothing|The sun only
<!-- CORRECT -->
1
<!-- EXPLANATION -->
There was no electricity! People used candles for light and fireplaces for warmth! Life was different!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were clothes like long ago?
<!-- OPTIONS -->
The same as today|Simpler and made by hand|Better than today|Made of plastic
<!-- CORRECT -->
1
<!-- EXPLANATION -->
People wore different clothes that were simpler and made by hand! They were different from today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to learn about life long ago?
<!-- OPTIONS -->
It's not|We can learn about the past and see how things changed|It's boring|It's too hard
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We can learn about the past and see how things changed! Life was different long ago, and we can learn from it!
<!-- QUESTION_END -->`,
      quizId: 44,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Famous People from Stories",
      emoji: '👑',
      content: `# Famous People from Stories 👑



Let's learn about famous people from stories!



## Kings and Queens



- Kings and queens from stories 👑

- They were important people

- They ruled over lands

- They are in many stories



## Brave Heroes



- Brave heroes from stories ⚔️

- They did brave things

- They helped others

- They are remembered



## Kind Helpers



- Kind helpers from stories 💝

- They helped people

- They were good

- They are remembered



## People Who Did Good Things



- People who did good things 🌟

- They helped others

- They made the world better

- We remember them



## Fun Activities



- Draw famous people from stories

- Act out stories

- Write about your favorite

- Learn about brave people



## Remember



- Famous people did important things

- We can learn from their stories

- History is full of interesting people

- Stories teach us lessons!



## Practice Questions



<!-- QUESTION_START -->
What did kings and queens do in stories?
<!-- OPTIONS -->
Nothing|They were important people who ruled over lands|Only played|Only slept
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Kings and queens from stories were important people who ruled over lands! They are in many stories!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did brave heroes do?
<!-- OPTIONS -->
Nothing|Did brave things and helped others|Only fought|Only ran away
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Brave heroes from stories did brave things, helped others, and they are remembered!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did kind helpers do?
<!-- OPTIONS -->
Nothing|Helped people and were good|Only played|Only slept
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Kind helpers from stories helped people, were good, and they are remembered!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why do we remember famous people from stories?
<!-- OPTIONS -->
They were bad|They did good things, helped others, and made the world better|They were mean|They did nothing
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We remember famous people because they did good things, helped others, made the world better, and stories teach us lessons!
<!-- QUESTION_END -->`,
      quizId: 43,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw a square on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw a triangle on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw a rectangle on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw a pentagon on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw a hexagon on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Digital Drawing",
      emoji: '🎨',
      content: `# Digital Drawing 🎨

Draw an octagon on the canvas!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Flappy Bird Game",
      emoji: '🐦',
      content: `# Flappy Bird Game 🐦

Learn to use the keyboard with this fun game!

## How to Play

- Press **SPACE** to make the bird jump
- Navigate through the pipes
- Try to get as far as possible!

## Scoring System

- **Bronze**: 1-4 points
- **Silver**: 5-9 points
- **Gold**: 10-14 points
- **Platinum**: 15+ points

You need at least **Bronze** (1 point) to progress to the next lesson!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 8,
      title: "Bubble Pop Game",
      emoji: '🫧',
      content: `# Bubble Pop Game 🫧

Practice your mouse clicking skills!

## How to Play

- **Click** on the colorful bubbles to pop them
- You have 30 seconds to pop as many as you can
- Each bubble is worth 10 points

## Scoring System

- **Bronze**: 10-99 points
- **Silver**: 100-149 points
- **Gold**: 150-199 points
- **Platinum**: 200+ points

You need at least **Bronze** (10 points) to progress to the next lesson!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 9,
      title: "Snake Game",
      emoji: '🐍',
      content: `# Snake Game 🐍

Learn to use arrow keys with this classic game!

## How to Play

- Use **Arrow Keys** (↑ ↓ ← →) to move the snake
- Eat the red food to grow and score points
- Avoid hitting the walls or yourself!

## Scoring System

- **Bronze**: 10-39 points
- **Silver**: 40-69 points
- **Gold**: 70-99 points
- **Platinum**: 100+ points

You need at least **Bronze** (10 points) to progress to the next lesson!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'reception',
      subjectId: 'technology',
      lessonNumber: 10,
      title: "Target Practice Game",
      emoji: '🎯',
      content: `# Target Practice Game 🎯

Improve your mouse precision and accuracy!

## How to Play

- **Click** on the targets that appear on screen
- Smaller targets are worth more points!
- You have 30 seconds to score as many points as possible

## Scoring System

- **Bronze**: 10-49 points
- **Silver**: 50-99 points
- **Gold**: 100-149 points
- **Platinum**: 150+ points

You need at least **Bronze** (10 points) to progress to the next lesson!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    })

  ];
}
