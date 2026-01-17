import { Lesson } from '../../models/Lesson.js';

/**
 * Year 4 Lessons
 */
export function getYear4Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Long Multiplication",
      emoji: '✖️',
      content: `# Long Multiplication ✖️



Let's learn to multiply larger numbers!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Long Multiplication?



Long multiplication helps us multiply numbers with more than one digit!



## Example



23 × 4 = 92

45 × 6 = 270



## Fun Activities



- Practice long multiplication

- Check your answers

- Play the multiplication game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Fractions and Decimals",
      emoji: '🔢',
      content: `# Fractions and Decimals 🔢



Let's learn about fractions and decimals!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What are Fractions and Decimals?



Fractions and decimals show parts of a whole!



## Examples



- 1/2 = 0.5 (half)

- 1/4 = 0.25 (quarter)

- 3/4 = 0.75 (three quarters)



## Fun Activities



- Practice converting fractions to decimals

- Play the fractions and decimals game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Measurement and Units",
      emoji: '📏',
      content: `# Measurement and Units 📏



Let's learn about measuring things!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## Units of Measurement



- Length: cm, m (100 cm = 1 m)

- Weight: g, kg (1000 g = 1 kg)

- Capacity: mL, L (1000 mL = 1 L)



## Fun Activities



- Measure objects around you

- Convert between units

- Play the measurement game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Place Value to 10,000",
      emoji: '🔢',
      content: `# Place Value to 10,000 🔢

Let's learn about place value up to 10,000!

## Place Value Positions

In the number 3,456:
- The 3 is in the thousands place (worth 3,000)
- The 4 is in the hundreds place (worth 400)
- The 5 is in the tens place (worth 50)
- The 6 is in the ones place (worth 6)

## Examples

- 2,345 = 2 thousands + 3 hundreds + 4 tens + 5 ones
- 7,890 = 7 thousands + 8 hundreds + 9 tens + 0 ones
- 1,234 = one thousand, two hundred thirty-four

## How to Play

Drag digits and type in words! 🎮`,
      quizId: quizId++,
      assessmentType: 'place-value-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Multiplication Tables 3, 4, 6, 7, 8, 9",
      emoji: '✖️',
      content: `# Multiplication Tables 3, 4, 6, 7, 8, 9 ✖️

Let's learn more times tables!

## Times Tables

- 3 times table: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30
- 4 times table: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40
- 6 times table: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60
- 7 times table: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70
- 8 times table: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80
- 9 times table: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90

## How to Play

Click answers and type tables! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Division with Remainders",
      emoji: '➗',
      content: `# Division with Remainders ➗

Let's learn division with remainders!

## What is a Remainder?

Sometimes division doesn't divide evenly - we get a remainder!

## Examples

- 17 ÷ 5 = 3 remainder 2
- 23 ÷ 4 = 5 remainder 3
- 19 ÷ 6 = 3 remainder 1

## How to Play

Type answers and drag remainders! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Equivalent Fractions",
      emoji: '🍕',
      content: `# Equivalent Fractions 🍕

Let's learn about equivalent fractions!

## What are Equivalent Fractions?

Fractions that are equal but look different!

## Examples

- 1/2 = 2/4 = 3/6 = 4/8
- 1/3 = 2/6 = 3/9
- 2/3 = 4/6 = 6/9

## How to Find Equivalents

Multiply or divide both top and bottom by the same number!

## How to Play

Drag fractions to match and click pairs! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Decimals to 2 Places",
      emoji: '🔢',
      content: `# Decimals to 2 Places 🔢

Let's learn about decimals!

## What are Decimals?

Decimals are numbers with a decimal point!

## Decimal Places

- 0.5 = five tenths
- 0.25 = twenty-five hundredths
- 0.75 = seventy-five hundredths
- 1.50 = one and fifty hundredths

## Examples

- 0.5 = 1/2
- 0.25 = 1/4
- 0.75 = 3/4

## How to Play

Drag decimal points and type values! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "Angles",
      emoji: '📐',
      content: `# Angles 📐

Let's learn about angles!

## Types of Angles

- Acute angle - less than 90°
- Right angle - exactly 90°
- Obtuse angle - more than 90° but less than 180°
- Straight angle - exactly 180°

## Measuring Angles

Use a protractor to measure angles!

## Examples

- A square corner = 90° (right angle)
- A straight line = 180° (straight angle)

## How to Play

Click angle types and drag to measure! 🎮`,
      quizId: quizId++,
      assessmentType: 'angle-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "Area by Counting Squares",
      emoji: '📏',
      content: `# Area by Counting Squares 📏

Let's learn about area!

## What is Area?

Area is the space inside a shape!

## Finding Area

Count the squares inside the shape!

## Examples

- A square with 3 squares on each side = 9 square units
- A rectangle with 4 by 5 squares = 20 square units

## How to Play

Click squares and type the area! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 11,
      title: "Time: 24-Hour Clock",
      emoji: '🕐',
      content: `# Time: 24-Hour Clock 🕐

Let's learn the 24-hour clock!

## 24-Hour Clock

Instead of 12 hours, we use 24 hours!

## Converting Times

- 1:00 PM = 13:00
- 2:30 PM = 14:30
- 3:45 PM = 15:45
- 12:00 PM = 12:00 (noon)
- 12:00 AM = 00:00 (midnight)

## Examples

- Morning: 09:00 (9 AM)
- Afternoon: 15:00 (3 PM)
- Evening: 20:00 (8 PM)

## How to Play

Type times and drag conversions! 🎮`,
      quizId: quizId++,
      assessmentType: 'clock-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 12,
      title: "Money: Pounds and Pence",
      emoji: '💰',
      content: `# Money: Pounds and Pence 💰

Let's learn about pounds and pence!

## UK Money

- 100 pence (p) = 1 pound (£)
- Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2
- Notes: £5, £10, £20, £50

## Examples

- £2.50 = 250p
- 150p = £1.50
- £5.75 = 575p

## How to Play

Drag coins/notes and type amounts! 🎮`,
      quizId: quizId++,
      assessmentType: 'money-drag-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'maths',
      lessonNumber: 13,
      title: "Line Graphs",
      emoji: '📈',
      content: `# Line Graphs 📈

Let's learn about line graphs!

## What is a Line Graph?

A line graph shows how data changes over time!

## Reading Line Graphs

- The line goes up = increase
- The line goes down = decrease
- The line is flat = no change

## Making Line Graphs

- Plot points for each time
- Connect the points with a line
- Label the axes

## How to Play

Click points and drag to create graphs! 🎮`,
      quizId: quizId++,
      assessmentType: 'graph-builder-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 1,
      title: "The Dark Ages - After Rome",
      emoji: '🌑',
      content: `# The Dark Ages - After Rome 🌑



Let's learn about life after the Roman Empire!



## What Were the Dark Ages?



- The Dark Ages came after Rome fell

- It was a difficult time

- Learning decreased

- Life was harder



## Vikings



- Vikings came from Scandinavia

- They were skilled sailors

- They raided and explored

- They settled in many places



## Anglo-Saxons



- Anglo-Saxons came to Britain

- They settled in England

- They created kingdoms

- They had their own culture



## Monasteries



- Monasteries were important places

- Monks lived there

- They copied books

- They kept learning alive



## Learning and Books



- Books were very rare

- Monks copied them by hand

- Learning was mostly in monasteries

- Books were very valuable



## Fun Activities



- Learn about the Dark Ages

- Draw monasteries

- Make a timeline

- Write about this period



## Remember



- Dark Ages came after Rome

- Life was difficult

- Monasteries kept learning alive

- It was a time of change!



## Practice Questions



<!-- QUESTION_START -->
What came after the Roman Empire fell?
<!-- OPTIONS -->
The Renaissance|The Dark Ages|Modern times|The Stone Age
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Dark Ages came after Rome fell! It was a difficult time when learning decreased and life was harder!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did Vikings come from?
<!-- OPTIONS -->
Britain|Scandinavia|France|Italy
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Vikings came from Scandinavia! They were skilled sailors who raided, explored, and settled in many places!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who kept learning alive during the Dark Ages?
<!-- OPTIONS -->
Kings|Monks in monasteries|Soldiers|Farmers
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Monks in monasteries kept learning alive! They copied books by hand, and learning was mostly in monasteries!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Anglo-Saxons do in Britain?
<!-- OPTIONS -->
Nothing|Settled in England and created kingdoms|Only fought|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Anglo-Saxons came to Britain, settled in England, created kingdoms, and had their own culture!
<!-- QUESTION_END -->`,
      quizId: 62,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Biblical History - Jesus and Early Christianity",
      emoji: '✝️',
      content: `# Biblical History - Jesus and Early Christianity ✝️



Let's learn about Jesus and the early Christians!



## The Life of Jesus



- Jesus was born in Bethlehem

- He grew up in Nazareth

- He taught people about God

- He performed miracles



## The Disciples



- Jesus had 12 disciples

- They were his followers

- They learned from him

- They spread his message



## Early Christians



- After Jesus, people became Christians

- They followed his teachings

- They met together

- They helped each other



## Spread of Christianity



- Christianity spread quickly

- It went to many countries

- People became Christians

- It changed the world



## The Bible



- The Bible tells Jesus' story

- It has the Old and New Testaments

- It's an important book

- Many people read it today



## Fun Activities



- Learn about Jesus' life

- Learn about the disciples

- Draw scenes from the Bible

- Write about early Christianity



## Remember



- Jesus was an important person

- His teachings spread

- Christianity grew

- It influenced history!



## Practice Questions



<!-- QUESTION_START -->
Where was Jesus born?
<!-- OPTIONS -->
Nazareth|Bethlehem|Jerusalem|Egypt
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Jesus was born in Bethlehem! He grew up in Nazareth, taught people about God, and performed miracles!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How many disciples did Jesus have?
<!-- OPTIONS -->
10|11|12|13
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Jesus had 12 disciples! They were his followers, learned from him, and spread his message!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did early Christians do?
<!-- OPTIONS -->
Fought wars|Followed Jesus' teachings, met together, and helped each other|Stayed alone|Did nothing
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Early Christians followed Jesus' teachings, met together, and helped each other! Christianity spread quickly and changed the world!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What does the Bible contain?
<!-- OPTIONS -->
Only stories|The Old and New Testaments telling Jesus' story|Only laws|Only poems
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Bible has the Old and New Testaments and tells Jesus' story! It's an important book that many people read today!
<!-- QUESTION_END -->`,
      quizId: 70,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Medieval Times - Castles and Knights",
      emoji: '🏰',
      content: `# Medieval Times - Castles and Knights 🏰



Let's learn about medieval times!



## When Were Medieval Times?



- Medieval times were from about AD 500 to 1500

- That's the Middle Ages

- It was after the Dark Ages

- Before modern times



## Medieval Castles



- Castles were strong buildings

- They protected people

- They had thick walls

- They had towers and moats



## Knights and Armor



- Knights were warriors

- They wore armor

- They fought on horses

- They protected the kingdom



## Feudalism



- Feudalism was a system

- Lords owned land

- Knights served lords

- Serfs worked the land



## Lords and Serfs



- Lords were powerful

- They owned land

- Serfs were workers

- They worked for lords



## Fun Activities



- Draw castles

- Learn about knights

- Make a timeline

- Write about medieval times



## Remember



- Medieval times were long ago

- Castles were important

- Knights were warriors

- Feudalism was the system!



## Practice Questions



<!-- QUESTION_START -->
When were medieval times?
<!-- OPTIONS -->
AD 100-500|AD 500-1500|AD 1500-2000|BC 500-AD 500
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Medieval times were from about AD 500 to 1500! That's the Middle Ages, after the Dark Ages and before modern times!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were castles used for?
<!-- OPTIONS -->
Decoration|Protecting people|Housing animals|Storing food
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Castles were strong buildings that protected people! They had thick walls, towers, and moats!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was feudalism?
<!-- OPTIONS -->
A type of castle|A system where lords owned land, knights served lords, and serfs worked|A type of weapon|A type of food
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Feudalism was a system where lords owned land, knights served lords, and serfs worked the land!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did knights do?
<!-- OPTIONS -->
Only farmed|Were warriors who wore armor, fought on horses, and protected the kingdom|Only built castles|Only wrote books
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Knights were warriors who wore armor, fought on horses, and protected the kingdom! They were an important part of medieval society!
<!-- QUESTION_END -->`,
      quizId: 63,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 4,
      title: "Medieval Times - Daily Life",
      emoji: '🏘️',
      content: `# Medieval Times - Daily Life 🏘️



Let's learn about how people lived in medieval times!



## Medieval Villages



- Most people lived in villages

- Villages were small

- People worked together

- They farmed the land



## Medieval Farming



- Most people were farmers

- They grew crops

- They raised animals

- They worked hard



## Medieval Crafts



- Some people were craftspeople

- They made things by hand

- Blacksmiths made tools

- Weavers made cloth



## Medieval Markets



- People went to markets

- They bought and sold things

- Markets were important

- They were social places



## Medieval Homes



- Homes were simple

- Made of wood and mud

- Had thatched roofs

- Were small and dark



## Fun Activities



- Draw medieval villages

- Learn about farming

- Draw medieval homes

- Write about daily life



## Remember



- Most people were farmers

- Life was hard

- People worked together

- Villages were important!



## Practice Questions



<!-- QUESTION_START -->
Where did most people live in medieval times?
<!-- OPTIONS -->
In castles|In villages|In cities|In caves
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Most people lived in villages! Villages were small, people worked together, and they farmed the land!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did most people do for work?
<!-- OPTIONS -->
Were soldiers|Were farmers|Were kings|Were priests
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Most people were farmers! They grew crops, raised animals, and worked very hard!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did blacksmiths and weavers do?
<!-- OPTIONS -->
Farmed|Made things by hand - blacksmiths made tools, weavers made cloth|Fought|Wrote books
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Craftspeople made things by hand! Blacksmiths made tools, and weavers made cloth! They were important in medieval villages!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were medieval homes like?
<!-- OPTIONS -->
Big and modern|Simple, made of wood and mud, with thatched roofs, small and dark|Made of stone|Made of metal
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Medieval homes were simple, made of wood and mud, had thatched roofs, and were small and dark! Life was very different then!
<!-- QUESTION_END -->`,
      quizId: 62,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 5,
      title: "The Crusades",
      emoji: '⚔️',
      content: `# The Crusades ⚔️



Let's learn about the Crusades!



## What Were the Crusades?



- The Crusades were wars

- They happened in the Middle Ages

- Christians fought Muslims

- They wanted control of the Holy Land



## Why They Happened



- The Holy Land was important

- Both sides wanted it

- They went to war

- Many crusades happened



## Knights Going to the Holy Land



- Knights traveled far

- They went to the Middle East

- They fought in battles

- It was a long journey



## Effects of the Crusades



- Many people died

- Countries changed

- People learned about other places

- Trade increased



## Fun Activities



- Learn about the Crusades

- Draw knights traveling

- Make a timeline

- Write about the effects



## Remember



- Crusades were wars

- They happened long ago

- They had big effects

- They changed history!



## Practice Questions



<!-- QUESTION_START -->
What were the Crusades?
<!-- OPTIONS -->
Peaceful meetings|Wars between Christians and Muslims for control of the Holy Land|Trade agreements|Religious ceremonies
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Crusades were wars that happened in the Middle Ages! Christians fought Muslims, and they wanted control of the Holy Land!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why did the Crusades happen?
<!-- OPTIONS -->
For fun|The Holy Land was important and both sides wanted it|For trade|For exploration
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Holy Land was important, and both sides wanted it! They went to war, and many crusades happened!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did knights do during the Crusades?
<!-- OPTIONS -->
Stayed home|Traveled far to the Middle East and fought in battles|Only traded|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Knights traveled far to the Middle East, went to the Holy Land, fought in battles, and it was a long journey!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were effects of the Crusades?
<!-- OPTIONS -->
Nothing changed|Many people died, countries changed, people learned about other places, and trade increased|Only trade increased|Only people died
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Crusades had big effects: many people died, countries changed, people learned about other places, and trade increased!
<!-- QUESTION_END -->`,
      quizId: 71,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 6,
      title: "The Renaissance - A New Beginning",
      emoji: '🎨',
      content: `# The Renaissance - A New Beginning 🎨



Let's learn about the Renaissance!



## What Was the Renaissance?



- Renaissance means "rebirth"

- It was a time of new ideas

- It started in Italy

- It spread across Europe



## Renaissance Art



- Art became more realistic

- Artists used perspective

- Leonardo da Vinci was famous

- Michelangelo was famous too



## New Ideas and Learning



- People studied ancient texts

- They asked questions

- They made discoveries

- Learning increased



## Famous People



- Leonardo da Vinci - Artist and inventor

- Michelangelo - Artist and sculptor

- They created amazing art

- They were very talented



## Fun Activities



- Study Renaissance art

- Learn about famous people

- Make a timeline

- Write about the Renaissance



## Remember



- Renaissance was a rebirth

- Art and learning flourished

- Many famous people

- It changed the world!



## Practice Questions



<!-- QUESTION_START -->
What does "Renaissance" mean?
<!-- OPTIONS -->
Darkness|Rebirth|War|End
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Renaissance means "rebirth"! It was a time of new ideas that started in Italy and spread across Europe!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened to art during the Renaissance?
<!-- OPTIONS -->
It disappeared|It became more realistic, artists used perspective|It stayed the same|It got worse
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Art became more realistic during the Renaissance! Artists used perspective, and Leonardo da Vinci and Michelangelo were famous!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did people do during the Renaissance?
<!-- OPTIONS -->
Nothing|Studied ancient texts, asked questions, made discoveries, and learning increased|Only fought|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
People studied ancient texts, asked questions, made discoveries, and learning increased! It was a time of new ideas!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who were famous Renaissance artists?
<!-- OPTIONS -->
No one|Leonardo da Vinci and Michelangelo|Only soldiers|Only kings
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Leonardo da Vinci and Michelangelo were famous Renaissance artists! They created amazing art and were very talented!
<!-- QUESTION_END -->`,
      quizId: 95,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 7,
      title: "Age of Exploration",
      emoji: '🚢',
      content: `# Age of Exploration 🚢



Let's learn about explorers and their journeys!



## Explorers



- Explorers traveled to new places

- They discovered new lands

- They were very brave

- They sailed across oceans



## Christopher Columbus



- Columbus sailed from Spain

- He wanted to reach Asia

- He found America instead

- He made important journeys



## Discovering New Lands



- Explorers found new continents

- They found new countries

- They met new people

- They changed the world



## Trade Routes



- Explorers found new trade routes

- They could trade with new places

- Trade increased

- Countries became richer



## New Foods



- Explorers brought new foods

- Potatoes came from America

- Tomatoes came from America

- Foods spread around the world



## Fun Activities



- Learn about explorers

- Draw their journeys

- Make a map

- Write about exploration



## Remember



- Explorers were brave

- They discovered new places

- They changed trade

- They changed the world!



## Practice Questions



<!-- QUESTION_START -->
What did explorers do?
<!-- OPTIONS -->
Stayed home|Traveled to new places, discovered new lands, and sailed across oceans|Only traded|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Explorers traveled to new places, discovered new lands, were very brave, and sailed across oceans!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Christopher Columbus do?
<!-- OPTIONS -->
Stayed in Spain|Sailed from Spain, wanted to reach Asia, but found America instead|Only traded|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Christopher Columbus sailed from Spain, wanted to reach Asia, but found America instead! He made important journeys!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did explorers find?
<!-- OPTIONS -->
Nothing|New continents, new countries, and met new people|Only gold|Only animals
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Explorers found new continents, new countries, met new people, and changed the world!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What foods came from America?
<!-- OPTIONS -->
Rice and wheat|Potatoes and tomatoes|Bananas and oranges|Apples and pears
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Potatoes and tomatoes came from America! Explorers brought new foods, and foods spread around the world!
<!-- QUESTION_END -->`,
      quizId: 72,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'history',
      lessonNumber: 8,
      title: "The Reformation",
      emoji: '📖',
      content: `# The Reformation 📖



Let's learn about the Reformation!



## What Was the Reformation?



- The Reformation was a change

- It changed the church

- It started in the 1500s

- It was very important



## Martin Luther



- Martin Luther was a monk

- He questioned the church

- He wrote 95 theses

- He started the Reformation



## Changes in the Church



- The church split

- New churches formed

- People had different beliefs

- It changed religion



## Printing Press



- The printing press was invented

- Books could be made faster

- Ideas spread quickly

- It helped the Reformation



## New Ideas About Religion



- People questioned old ideas

- They read the Bible themselves

- They had new beliefs

- Religion changed



## Fun Activities



- Learn about Martin Luther

- Learn about the printing press

- Make a timeline

- Write about the Reformation



## Remember



- Reformation changed the church

- Martin Luther was important

- Printing press helped

- It was a time of change!



## Practice Questions



<!-- QUESTION_START -->
What was the Reformation?
<!-- OPTIONS -->
A war|A change that changed the church|A type of art|A type of building
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Reformation was a change that changed the church! It started in the 1500s and was very important!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who started the Reformation?
<!-- OPTIONS -->
A king|Martin Luther, a monk|A soldier|A farmer
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Martin Luther was a monk who questioned the church, wrote 95 theses, and started the Reformation!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What helped the Reformation spread?
<!-- OPTIONS -->
Horses|The printing press|Ships|Weapons
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The printing press was invented and helped the Reformation! Books could be made faster, ideas spread quickly!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did people do during the Reformation?
<!-- OPTIONS -->
Nothing|Questioned old ideas, read the Bible themselves, and had new beliefs|Only fought|Only farmed
<!-- CORRECT -->
1
<!-- EXPLANATION -->
People questioned old ideas, read the Bible themselves, had new beliefs, and religion changed!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Python Lesson 1: Getting Started",
      emoji: '🐍',
      content: `# Python Lesson 1: Getting Started 🐍

## What is Python?

Python is a programming language that is easy to learn and fun to use! It's named after the Monty Python comedy group, not the snake (though the snake emoji is fun!).

## Why Learn Python?

- **Easy to Read**: Python code looks almost like English
- **Powerful**: Used by professionals to build websites, games, and apps
- **Fun**: You can create games, draw pictures, and solve puzzles
- **Popular**: Many companies use Python

## Installing Python

Before you can write Python code, you need to install Python on your computer.

### Steps:

1. Go to python.org
2. Download Python (version 3.x)
3. Run the installer
4. Make sure to check "Add Python to PATH"
5. Click "Install Now"

## Running Python Code

There are different ways to run Python:

### Method 1: Python Shell (Interactive)

1. Open "Python" or "IDLE" from your programs
2. Type code directly
3. Press Enter to run

### Method 2: Python Files

1. Open a text editor (like Notepad or VS Code)
2. Write your code
3. Save as \`.py\` file (e.g., \`my_program.py\`)
4. Run it from the command line or double-click

## Your First Program

Let's write your very first Python program!

\`\`\`python
print("Hello, World!")
\`\`\`

**What does this do?**
- \`print()\` is a function that displays text
- The text in quotes is what gets shown
- Run this and you'll see: Hello, World!

## Try It Yourself

1. Open Python or a text editor
2. Type: \`print("Hello, World!")\`
3. Run it
4. Change the message to say hello to yourself!

<!-- EXERCISE_START -->
{
  "instruction": "Write a program that prints 'Hello, World!'",
  "expectedOutput": "Hello, World!",
  "expectedContains": "Hello, World!",
  "codePattern": null
}
<!-- EXERCISE_END -->

## Important Notes

- Python is case-sensitive (capital letters matter)
- Use quotes around text (strings)
- Save your work often
- Don't be afraid to experiment!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Python Lesson 2: Printing & Text",
      emoji: '📝',
      content: `# Python Lesson 2: Printing & Text 📝

## The Print Function

The \`print()\` function is one of the most important tools in Python. It displays messages on the screen.

## Basic Printing

\`\`\`python
print("Hello!")
print("I am learning Python")
print("This is fun!")
\`\`\`

**Output:**
\`\`\`
Hello!
I am learning Python
This is fun!
\`\`\`

## Printing Multiple Things

You can print multiple things at once:

\`\`\`python
print("Hello", "World")
print("My", "name", "is", "Python")
\`\`\`

**Output:**
\`\`\`
Hello World
My name is Python
\`\`\`

## Printing Numbers

You can print numbers without quotes:

\`\`\`python
print(5)
print(10)
print(3 + 2)
\`\`\`

**Output:**
\`\`\`
5
10
5
\`\`\`

## Combining Text and Numbers

\`\`\`python
print("I am", 8, "years old")
print("2 + 2 =", 2 + 2)
\`\`\`

**Output:**
\`\`\`
I am 8 years old
2 + 2 = 4
\`\`\`

## Special Characters

### New Line

Use \`\\n\` to start a new line:

\`\`\`python
print("Line 1\\nLine 2\\nLine 3")
\`\`\`

**Output:**
\`\`\`
Line 1
Line 2
Line 3
\`\`\`

### Tabs

Use \`\\t\` to add a tab (spacing):

\`\`\`python
print("Name:\\tAlice")
print("Age:\\t8")
\`\`\`

**Output:**
\`\`\`
Name:    Alice
Age:     8
\`\`\`

## Practice Examples

### Example 1: Greeting

\`\`\`python
print("Welcome to Python!")
print("Let's learn together")
print("Have fun coding!")
\`\`\`

### Example 2: Math Display

\`\`\`python
print("5 + 3 =", 5 + 3)
print("10 - 4 =", 10 - 4)
print("2 * 6 =", 2 * 6)
\`\`\`

### Example 3: Story

\`\`\`python
print("Once upon a time...")
print("There was a young programmer")
print("Who learned Python")
print("And created amazing things!")
\`\`\`

## Try It Yourself

1. Print your name
2. Print your favorite color
3. Print some math problems
4. Write a short story using print statements

## Important Notes

- Text must be in quotes (single or double)
- Numbers don't need quotes
- \`print()\` can display text, numbers, and calculations
- Use commas to separate multiple items`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Python Lesson 3: Variables & Data",
      emoji: '📦',
      content: `# Python Lesson 3: Variables & Data 📦

## What is a Variable?

A variable is like a box where you store information. You give the box a name and put something inside it.

## Creating Variables

\`\`\`python
name = "Alice"
age = 8
favorite_color = "blue"
\`\`\`

**What's happening?**
- \`name\` is the variable name
- \`=\` assigns a value
- \`"Alice"\` is the value stored

## Types of Data

### Strings (Text)

Text in quotes:

\`\`\`python
name = "Python"
greeting = "Hello"
message = "I love coding!"
\`\`\`

### Numbers (Integers)

Whole numbers:

\`\`\`python
age = 8
score = 100
count = 5
\`\`\`

### Numbers (Floats)

Decimal numbers:

\`\`\`python
height = 1.25
temperature = 36.5
price = 9.99
\`\`\`

## Using Variables

Once you create a variable, you can use it:

\`\`\`python
name = "Alice"
print("Hello,", name)
print(name, "is learning Python")
\`\`\`

**Output:**
\`\`\`
Hello, Alice
Alice is learning Python
\`\`\`

## Math with Variables

\`\`\`python
apples = 5
oranges = 3
total = apples + oranges

print("I have", total, "fruits")
\`\`\`

**Output:**
\`\`\`
I have 8 fruits
\`\`\`

## Changing Variables

You can change what's stored in a variable:

\`\`\`python
score = 10
print("Score:", score)

score = 20
print("New score:", score)
\`\`\`

**Output:**
\`\`\`
Score: 10
New score: 20
\`\`\`

## Variable Names

Good variable names:
- Use lowercase letters
- Use underscores for spaces
- Be descriptive

**Good examples:**
\`\`\`python
student_name = "Alice"
number_of_apples = 5
total_score = 100
\`\`\`

**Bad examples:**
\`\`\`python
x = "Alice"  # Not clear what x means
n = 5        # Not descriptive
\`\`\`

## Practice Examples

### Example 1: Personal Info

\`\`\`python
my_name = "Python Learner"
my_age = 8
my_school = "Code Academy"

print("Name:", my_name)
print("Age:", my_age)
print("School:", my_school)
\`\`\`

### Example 2: Shopping

\`\`\`python
apples = 3
bananas = 5
oranges = 2

total_fruits = apples + bananas + oranges
print("Total fruits:", total_fruits)
\`\`\`

### Example 3: Calculations

\`\`\`python
length = 10
width = 5
area = length * width

print("Length:", length)
print("Width:", width)
print("Area:", area)
\`\`\`

## Try It Yourself

1. Create variables for your name, age, and favorite color
2. Print them all
3. Create variables for two numbers and add them
4. Change a variable's value and print it again

## Important Notes

- Variables store information
- Use \`=\` to assign values
- Variable names should be clear and descriptive
- You can change variable values anytime
- Text needs quotes, numbers don't`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Python Lesson 4: Input & Interaction",
      emoji: '⌨️',
      content: `# Python Lesson 4: Input & Interaction ⌨️

## Making Programs Interactive

So far, our programs just display messages. Now let's make them interactive by getting input from the user!

## The Input Function

The \`input()\` function lets users type information into your program.

## Basic Input

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`

**What happens:**
1. Program asks: "What is your name? "
2. User types their name
3. Program says hello

## Getting Different Types of Input

### Text Input

\`\`\`python
favorite_color = input("What is your favorite color? ")
print("I like", favorite_color, "too!")
\`\`\`

### Number Input

**Important:** \`input()\` always returns text, even for numbers!

\`\`\`python
age = input("How old are you? ")
print("You are", age, "years old")
\`\`\`

To do math with numbers, convert them:

\`\`\`python
age = int(input("How old are you? "))
next_year = age + 1
print("Next year you will be", next_year)
\`\`\`

**Important:** Make sure the user enters a number! If they type text instead of a number, the program will show an error. For now, just remember to enter numbers when asked.

## Converting Input Types

### String to Integer

\`\`\`python
number = int(input("Enter a number: "))
double = number * 2
print("Double is", double)
\`\`\`

### String to Float

\`\`\`python
price = float(input("Enter a price: "))
tax = price * 0.1
print("Tax is", tax)
\`\`\`

## Building Interactive Programs

### Example 1: Greeting Program

\`\`\`python
name = input("What is your name? ")
age = input("How old are you? ")

print("Hello,", name)
print("You are", age, "years old")
print("Nice to meet you!")
\`\`\`

### Example 2: Calculator

\`\`\`python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

total = num1 + num2
print("The sum is", total)
\`\`\`

### Example 3: Story Maker

\`\`\`python
name = input("Enter a name: ")
place = input("Enter a place: ")
animal = input("Enter an animal: ")

print("Once upon a time,", name)
print("went to", place)
print("and met a", animal)
\`\`\`

## Combining Input and Variables

\`\`\`python
# Get information
name = input("What is your name? ")
favorite_food = input("What is your favorite food? ")
times_per_week = int(input("How many times per week do you eat it? "))

# Calculate
times_per_month = times_per_week * 4

# Display results
print(name, "eats", favorite_food, times_per_month, "times per month!")
\`\`\`

## Practice Examples

### Example: Personal Quiz

\`\`\`python
print("Let's learn about you!")

name = input("What is your name? ")
age = int(input("How old are you? "))
favorite_subject = input("What is your favorite subject? ")

print("\\nHere's what I learned:")
print("Name:", name)
print("Age:", age)
print("Favorite subject:", favorite_subject)
\`\`\`

## Try It Yourself

1. Create a program that asks for your name and says hello
2. Make a simple calculator that adds two numbers
3. Create a story maker that asks for words and makes a story
4. Build a quiz about yourself

## Important Notes

- \`input()\` always returns text (strings)
- Use \`int()\` to convert to whole numbers
- Use \`float()\` to convert to decimal numbers
- Always provide clear prompts for users
- Test your programs with different inputs`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Python Lesson 5: Decisions (if statements)",
      emoji: '🤔',
      content: `# Python Lesson 5: Decisions (if statements) 🤔

## Making Choices

Programs need to make decisions, just like we do! Python uses \`if\` statements to make choices.

## Basic If Statement

\`\`\`python
age = 8

if age >= 8:
    print("You can ride the roller coaster!")
\`\`\`

**What's happening?**
- \`if\` checks a condition
- \`age >= 8\` means "age is 8 or more"
- If true, the code inside runs
- Notice the colon \`:\` and indentation!

## Comparison Operators

- \`==\` equals (is the same)
- \`!=\` not equals (is different)
- \`>\` greater than
- \`<\` less than
- \`>=\` greater than or equal
- \`<=\` less than or equal

## Examples

### Checking Numbers

\`\`\`python
score = 85

if score >= 80:
    print("Great job!")
\`\`\`

### Checking Text

\`\`\`python
color = input("What is your favorite color? ")

if color == "blue":
    print("Blue is a great color!")
\`\`\`

## If-Else Statements

Use \`else\` for when the condition is false:

\`\`\`python
age = 7

if age >= 8:
    print("You can ride!")
else:
    print("Sorry, you're too young")
\`\`\`

## If-Elif-Else

Use \`elif\` (else-if) for multiple conditions:

\`\`\`python
score = 85

if score >= 90:
    print("Excellent!")
elif score >= 80:
    print("Great job!")
elif score >= 70:
    print("Good work!")
else:
    print("Keep practicing!")
\`\`\`

## Multiple Conditions

### Using \`and\`

Both conditions must be true:

\`\`\`python
age = 10
has_ticket = True  # True means yes, False means no

if age >= 8 and has_ticket:
    print("You can enter!")
\`\`\`

**Note:** \`True\` and \`False\` are special values in Python. They represent yes/no or on/off states.

### Using \`or\`

Either condition can be true:

\`\`\`python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
\`\`\`

## Practice Examples

### Example 1: Age Checker

\`\`\`python
age = int(input("How old are you? "))

if age >= 13:
    print("You are a teenager")
elif age >= 8:
    print("You are a child")
else:
    print("You are very young!")
\`\`\`

### Example 2: Grade Calculator

\`\`\`python
score = int(input("Enter your score: "))

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "Keep trying!"

print("Your grade is", grade)
\`\`\`

### Example 3: Password Checker

\`\`\`python
password = input("Enter password: ")

if password == "python123":
    print("Access granted!")
else:
    print("Access denied!")
\`\`\`

## Try It Yourself

1. Create a program that checks if a number is positive or negative
2. Make a weather program that gives advice based on temperature
3. Build a simple password checker
4. Create a program that checks if you can vote (age 18+)

## Important Notes

- Always use a colon \`:\` after \`if\`, \`elif\`, and \`else\`
- Indent code inside if statements (use 4 spaces)
- \`==\` checks if equal, \`=\` assigns a value
- Use \`and\` for both conditions, \`or\` for either condition
- Test your conditions with different values`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 6,
      title: "Python Lesson 6: Loops",
      emoji: '🔄',
      content: `# Python Lesson 6: Loops 🔄

## What are Loops?

Loops let you repeat code without typing it over and over. They make programs efficient and powerful!

## For Loops

A \`for\` loop repeats code a specific number of times.

### Counting

\`\`\`python
for i in range(5):
    print("Hello!")
\`\`\`

**Output:**
\`\`\`
Hello!
Hello!
Hello!
Hello!
Hello!
\`\`\`

### Using Range

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

**Output:**
\`\`\`
0
1
2
3
4
\`\`\`

**Note:** \`range(5)\` goes from 0 to 4 (5 numbers total)

### Range with Start and End

\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

**Output:**
\`\`\`
1
2
3
4
5
\`\`\`

### Range with Steps

\`\`\`python
for i in range(0, 10, 2):
    print(i)
\`\`\`

**Output:**
\`\`\`
0
2
4
6
8
\`\`\`

## Looping Through Lists

\`\`\`python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print("I like", fruit)
\`\`\`

**Output:**
\`\`\`
I like apple
I like banana
I like orange
\`\`\`

## While Loops

A \`while\` loop repeats as long as a condition is true.

### Basic While Loop

\`\`\`python
count = 0

while count < 5:
    print("Count is", count)
    count = count + 1
\`\`\`

**Output:**
\`\`\`
Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
\`\`\`

### User Input Loop

\`\`\`python
answer = ""

while answer != "yes":
    answer = input("Do you want to continue? (yes/no): ")
    print("You said:", answer)
\`\`\`

## Nested Loops

Loops inside loops:

\`\`\`python
for i in range(3):
    for j in range(2):
        print(i, j)
\`\`\`

**Output:**
\`\`\`
0 0
0 1
1 0
1 1
2 0
2 1
\`\`\`

## Practice Examples

### Example 1: Countdown

\`\`\`python
for i in range(10, 0, -1):
    print(i)
print("Blast off!")
\`\`\`

### Example 2: Multiplication Table

\`\`\`python
number = 5

for i in range(1, 11):
    result = number * i
    print(number, "x", i, "=", result)
\`\`\`

### Example 3: Sum Numbers

\`\`\`python
total = 0

for i in range(1, 6):
    total = total + i
    print("Adding", i, "Total is now", total)

print("Final total:", total)
\`\`\`

### Example 4: Guessing Game

\`\`\`python
secret = 7
guess = 0

while guess != secret:
    guess = int(input("Guess the number (1-10): "))
    if guess < secret:
        print("Too low!")
    elif guess > secret:
        print("Too high!")

print("You got it!")
\`\`\`

## Try It Yourself

1. Print numbers from 1 to 10
2. Print the 5 times table
3. Create a program that counts from 10 down to 1
4. Make a guessing game
5. Print your name 5 times using a loop

## Important Notes

- \`for\` loops repeat a specific number of times
- \`while\` loops repeat while a condition is true
- Always indent code inside loops
- Be careful with \`while\` loops - make sure they can end! (Otherwise you'll get an infinite loop that never stops)
- Use \`range()\` to control how many times a loop runs`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 7,
      title: "Python Lesson 7: Functions",
      emoji: '⚙️',
      content: `# Python Lesson 7: Functions ⚙️

## What are Functions?

Functions are reusable pieces of code. Instead of writing the same code over and over, you write it once in a function and use it whenever you need it!

## Why Use Functions?

- **Reuse code**: Write once, use many times
- **Organize code**: Break problems into smaller pieces
- **Easier to fix**: Change code in one place
- **Cleaner programs**: Makes code easier to read

## Creating Functions

### Basic Function

\`\`\`python
def greet():
    print("Hello!")
    print("Welcome to Python")

greet()
\`\`\`

**Output:**
\`\`\`
Hello!
Welcome to Python
\`\`\`

### Function with Parameters

Parameters are information you give to the function:

\`\`\`python
def greet(name):
    print("Hello,", name)
    print("Nice to meet you!")

greet("Alice")
greet("Bob")
\`\`\`

**Output:**
\`\`\`
Hello, Alice
Nice to meet you!
Hello, Bob
Nice to meet you!
\`\`\`

### Function with Return

Functions can give back (return) a value:

\`\`\`python
def add(a, b):
    result = a + b
    return result

sum = add(5, 3)
print("The sum is", sum)
\`\`\`

**Output:**
\`\`\`
The sum is 8
\`\`\`

## Function Examples

### Example 1: Calculator Functions

\`\`\`python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

# Use the functions
result1 = add(10, 5)
result2 = subtract(10, 5)
result3 = multiply(10, 5)

print("10 + 5 =", result1)
print("10 - 5 =", result2)
print("10 * 5 =", result3)
\`\`\`

### Example 2: Greeting Function

\`\`\`python
def greet(name, age):
    print("Hello,", name)
    print("You are", age, "years old")
    print("Have a great day!")

greet("Alice", 8)
greet("Bob", 10)
\`\`\`

### Example 3: Area Calculator

\`\`\`python
def rectangle_area(length, width):
    area = length * width
    return area

def circle_area(radius):
    area = 3.14 * radius * radius
    return area

# Calculate areas
rect = rectangle_area(5, 3)
circle = circle_area(4)

print("Rectangle area:", rect)
print("Circle area:", circle)
\`\`\`

## Built-in Functions

Python has many built-in functions you can use:

\`\`\`python
# len() - get length
name = "Python"
print(len(name))  # Output: 6

# max() - get maximum
numbers = [5, 2, 8, 1]
print(max(numbers))  # Output: 8

# min() - get minimum
print(min(numbers))  # Output: 1

# abs() - absolute value
print(abs(-5))  # Output: 5
\`\`\`

## Practice Examples

### Example: Grade Calculator

\`\`\`python
def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

# Use the function
grade1 = calculate_grade(95)
grade2 = calculate_grade(75)

print("Score 95 gets grade", grade1)
print("Score 75 gets grade", grade2)
\`\`\`

## Try It Yourself

1. Create a function that prints your name
2. Make a function that adds two numbers
3. Write a function that calculates the area of a square
4. Create a function that greets someone by name
5. Build a function that checks if a number is even

## Important Notes

- Use \`def\` to define a function
- Function names should be descriptive
- Use parameters to pass information to functions
- Use \`return\` to give back a value
- Call functions by writing their name with parentheses
- Functions help organize and reuse code`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 8,
      title: "Python Lesson 8: Graphics & Turtle",
      emoji: '🎨',
      content: `# Python Lesson 8: Graphics & Turtle 🎨

## What is Turtle Graphics?

Turtle graphics lets you draw pictures using Python! You control a "turtle" that moves around and draws lines.

## Getting Started

First, you need to import the turtle module:

\`\`\`python
import turtle
\`\`\`

## Creating a Turtle

\`\`\`python
import turtle

t = turtle.Turtle()
\`\`\`

## Basic Drawing Commands

### Moving the Turtle

\`\`\`python
import turtle

t = turtle.Turtle()

t.forward(100)  # Move forward 100 steps
t.backward(50)  # Move backward 50 steps
\`\`\`

### Turning

\`\`\`python
t.left(90)   # Turn left 90 degrees
t.right(45)  # Turn right 45 degrees
\`\`\`

### Drawing a Square

\`\`\`python
import turtle

t = turtle.Turtle()

t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
t.left(90)
t.forward(100)
\`\`\`

## Using Loops with Turtle

Drawing a square with a loop:

\`\`\`python
import turtle

t = turtle.Turtle()

for i in range(4):
    t.forward(100)
    t.left(90)
\`\`\`

## Changing Colors

\`\`\`python
import turtle

t = turtle.Turtle()

t.color("red")
t.forward(100)

t.color("blue")
t.forward(100)
\`\`\`

## Drawing Shapes

### Circle

\`\`\`python
import turtle

t = turtle.Turtle()
t.circle(50)  # Draw circle with radius 50
\`\`\`

### Star

\`\`\`python
import turtle

t = turtle.Turtle()

for i in range(5):
    t.forward(100)
    t.right(144)  # 180 - (360/5) = 144
\`\`\`

## Pen Control

### Lifting the Pen

\`\`\`python
t.penup()    # Stop drawing
t.forward(50)
t.pendown()  # Start drawing again
t.forward(50)
\`\`\`

### Pen Size

\`\`\`python
t.pensize(5)  # Make line thicker
t.forward(100)
\`\`\`

## Filling Shapes

\`\`\`python
import turtle

t = turtle.Turtle()

t.begin_fill()
t.color("red")

for i in range(4):
    t.forward(100)
    t.left(90)

t.end_fill()
\`\`\`

## Practice Examples

### Example 1: House

\`\`\`python
import turtle

t = turtle.Turtle()

# Draw square (house)
for i in range(4):
    t.forward(100)
    t.left(90)

# Draw triangle (roof)
t.left(45)
t.forward(70)
t.right(90)
t.forward(70)
\`\`\`

### Example 2: Flower

\`\`\`python
import turtle

t = turtle.Turtle()
t.color("red")

for i in range(8):
    t.circle(30)
    t.left(45)
\`\`\`

### Example 3: Spiral

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(10)  # Make it faster

for i in range(50):
    t.forward(i * 2)
    t.left(90)
\`\`\`

## Try It Yourself

1. Draw a square
2. Draw a triangle
3. Draw a circle
4. Create a colorful pattern
5. Draw a simple house
6. Make a spiral pattern

## Important Notes

- Always \`import turtle\` first
- Create a turtle with \`turtle.Turtle()\`
- \`forward()\` moves forward
- \`left()\` and \`right()\` turn the turtle
- Use loops to repeat drawing commands
- Experiment with colors and sizes!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 9,
      title: "Python Lesson 9: Projects",
      emoji: '🎯',
      content: `# Python Lesson 9: Projects 🎯

## Building Real Projects

Now that you've learned the basics, let's combine everything to build fun projects!

## Project 1: Number Guessing Game

**Note:** We use \`import random\` to get access to Python's random number functions. This lets us generate random numbers for our game!

\`\`\`python
import random

secret_number = random.randint(1, 100)
guesses = 0

print("I'm thinking of a number between 1 and 100!")

while True:
    guess = int(input("Guess the number: "))
    guesses = guesses + 1
    
    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
        print("Congratulations! You got it in", guesses, "guesses!")
        break
\`\`\`

## Project 2: Simple Calculator

\`\`\`python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

print("Simple Calculator")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Choose an operation (1-4): ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if choice == "1":
    result = add(num1, num2)
elif choice == "2":
    result = subtract(num1, num2)
elif choice == "3":
    result = multiply(num1, num2)
elif choice == "4":
    result = divide(num1, num2)
else:
    result = "Invalid choice"

print("Result:", result)
\`\`\`

## Project 3: Quiz Game

\`\`\`python
score = 0

print("Welcome to the Python Quiz!")

# Question 1
answer1 = input("What is 5 + 3? ")
if answer1 == "8":
    print("Correct!")
    score = score + 1
else:
    print("Wrong! The answer is 8")

# Question 2
answer2 = input("What is the capital of France? ")
# .lower() converts the answer to lowercase so "Paris", "PARIS", and "paris" all work
if answer2.lower() == "paris":
    print("Correct!")
    score = score + 1
else:
    print("Wrong! The answer is Paris")

# Question 3
answer3 = input("What is 10 * 2? ")
if answer3 == "20":
    print("Correct!")
    score = score + 1
else:
    print("Wrong! The answer is 20")

print("\\nYour score:", score, "out of 3")
\`\`\`

## Project 4: Drawing a Pattern

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(10)

colors = ["red", "blue", "green", "yellow", "purple"]

for i in range(36):
    t.color(colors[i % 5])
    for j in range(4):
        t.forward(50)
        t.left(90)
    t.left(10)

turtle.done()  # Keeps the window open so you can see your drawing
\`\`\`

## Project 5: Story Generator

\`\`\`python
print("Let's create a story!")

name = input("Enter a name: ")
place = input("Enter a place: ")
animal = input("Enter an animal: ")
verb = input("Enter an action (like 'run'): ")

print("\\nHere's your story:")
print("Once upon a time,", name)
print("went to", place)
print("and saw a", animal)
print("that liked to", verb)
print("The end!")
\`\`\`

## Project Ideas

### Easy Projects
- Name generator
- Simple calculator
- Mad libs story
- Number guessing game
- Drawing patterns with turtle

### Medium Projects
- Quiz game with multiple questions
- Grade calculator
- Password generator
- Drawing a house with turtle
- Temperature converter

### Advanced Projects
- Rock, paper, scissors game
- Hangman game
- Tic-tac-toe game
- Drawing app with turtle
- Math practice program

## Tips for Building Projects

1. **Start Simple**: Begin with basic features
2. **Test Often**: Run your code frequently
3. **Fix Errors**: Don't give up when you see errors
4. **Add Features**: Once it works, add more!
5. **Have Fun**: Programming should be enjoyable!

## Try It Yourself

1. Build a number guessing game
2. Create a simple quiz
3. Make a calculator
4. Draw something cool with turtle
5. Combine ideas to make something new!

## Important Notes

- Projects combine all the concepts you've learned
- Start with simple projects and build up
- Don't be afraid to experiment
- Ask for help when you need it
- Most importantly - have fun coding!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 10,
      title: "Python Lesson 10: Next Steps",
      emoji: '🚀',
      content: `# Python Lesson 10: Next Steps 🚀

## Congratulations!

You've learned the fundamentals of Python programming! You can now:
- Print messages and work with text
- Use variables to store information
- Get input from users
- Make decisions with if statements
- Repeat code with loops
- Create reusable functions
- Draw graphics with turtle
- Build complete projects

## What You've Accomplished

You've learned:
- ✅ Basic Python syntax
- ✅ Variables and data types
- ✅ User input and interaction
- ✅ Conditional statements
- ✅ Loops (for and while)
- ✅ Functions
- ✅ Turtle graphics
- ✅ Building projects

## Continuing Your Journey

### Practice Regularly

The best way to get better is to practice:
- Code every day, even if just for 10 minutes
- Try to solve problems
- Build small projects
- Experiment and explore

### Learn More Python Topics

**Lists and Dictionaries:**
\`\`\`python
# Lists
fruits = ["apple", "banana", "orange"]

# Dictionaries
person = {"name": "Alice", "age": 8}
\`\`\`

**File Handling:**
\`\`\`python
# Reading files
file = open("data.txt", "r")
content = file.read()
file.close()
\`\`\`

**Classes and Objects:**
\`\`\`python
class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print("Woof!")
\`\`\`

## Resources for Learning

### Online Resources
- **Python.org**: Official Python documentation
- **Codecademy**: Interactive Python courses
- **Khan Academy**: Free programming courses
- **Scratch**: Visual programming (great for beginners)

### Books
- "Python for Kids" by Jason Briggs
- "Automate the Boring Stuff with Python"
- "Python Crash Course"

### Practice Websites
- **CodingBat**: Practice problems
- **Project Euler**: Math and programming challenges
- **LeetCode**: Coding challenges

## Project Ideas to Try

### Beginner Projects
1. **Calculator**: Build a full calculator
2. **To-Do List**: Track tasks
3. **Password Generator**: Create secure passwords
4. **Number Guessing Game**: With hints
5. **Rock Paper Scissors**: Full game

### Intermediate Projects
1. **Hangman Game**: Word guessing game
2. **Tic-Tac-Toe**: Two-player game
3. **Drawing App**: Using turtle graphics
4. **Quiz Application**: Multiple choice quiz
5. **Weather App**: Using APIs (advanced)

### Advanced Projects
1. **Web Scraper**: Extract data from websites
2. **Game Development**: Using Pygame
3. **Data Analysis**: Working with data
4. **Web Application**: Using Flask or Django
5. **Machine Learning**: Simple AI projects

## Joining the Community

### Coding Clubs
- Join a local coding club
- Find online communities
- Participate in coding challenges
- Share your projects

### Competitions
- Coding competitions for kids
- Hackathons
- Project showcases
- Science fairs

## Remember

- **Mistakes are OK**: Everyone makes errors
- **Ask Questions**: Don't be afraid to ask
- **Keep Learning**: There's always more to learn
- **Have Fun**: Programming should be enjoyable
- **Be Patient**: Learning takes time

## Your Future in Coding

Programming opens many doors:
- **Game Development**: Create your own games
- **Web Development**: Build websites
- **Data Science**: Analyze information
- **Robotics**: Control robots
- **AI and Machine Learning**: Build smart programs

## Final Thoughts

You've taken your first steps into the world of programming! Python is a powerful language used by professionals worldwide. Keep practicing, keep learning, and most importantly - keep coding!

## Next Steps Checklist

- [ ] Practice coding every day
- [ ] Build at least one project per week
- [ ] Try new Python features
- [ ] Join a coding community
- [ ] Help others learn
- [ ] Explore different programming areas
- [ ] Have fun!

## Keep Going!

Remember: Every expert was once a beginner. You're on an amazing journey. Keep coding, keep learning, and keep creating!

**Happy Coding! 🐍✨**`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'python',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 11,
      title: "Fusion 360 Step 1: User Interface",
      emoji: '🖥️',
      content: `# Fusion 360 Step 1: User Interface

## Learn Autodesk Fusion - User Interface (2025/2026)

**Topic**: Introduction to the canvas, toolbar, data panel, and navigation.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=zxfOqjqIZfc&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=1&pp=iAQB)

This lesson introduces you to the Fusion 360 interface and navigation.



## The Canvas

The Canvas is the main central area where your model is displayed and where you will do most of your work. You can right-click in this space to access a menu of frequently used tools or context-sensitive functions.



## The View Cube

Located within the canvas area, the View Cube allows you to rotate your model to view it from different angles. Clicking the "home" icon on the cube returns the model to the standard view. Right-clicking the cube offers additional options like changing perspective.



<!-- QUESTION_START -->
What is the main purpose of the View Cube in Fusion 360?
<!-- OPTIONS -->
To save your designs|To rotate your model and view it from different angles|To access file operations|To organize your projects
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The View Cube is located within the canvas area and allows you to rotate your model to view it from different angles. Clicking the "home" icon returns the model to the standard view.
<!-- QUESTION_END -->



## The Data Panel

Accessed via a button in the top left, the Data Panel is used to organize files and create new projects. Since Fusion is cloud-based, all files saved here are stored in the cloud. It includes refresh and search functions.



<!-- QUESTION_START -->
Where are files stored when you save them in Fusion 360's Data Panel?
<!-- OPTIONS -->
On your local computer only|In the cloud|On an external hard drive|In a separate application
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Since Fusion 360 is cloud-based, all files saved in the Data Panel are stored in the cloud, allowing you to access your designs from anywhere.
<!-- QUESTION_END -->



## The Application Bar

The Application Bar is the top bar that contains standard file operations like save, export, undo, and redo. It functions similarly to a web browser, allowing you to open multiple designs in different tabs. On the far right, you can access your Autodesk profile to change preferences or sign out.



<!-- QUESTION_START -->
What can you do with the Application Bar in Fusion 360?
<!-- OPTIONS -->
Only view your model|Save, export, undo, and redo operations|Only create new projects|Only access the toolbar
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Application Bar contains standard file operations like save, export, undo, and redo. It functions similarly to a web browser, allowing you to open multiple designs in different tabs.
<!-- QUESTION_END -->



## The Toolbar

The Toolbar is the primary location for accessing tools. It features various tabs for different workflows, such as Solid modeling, Surface modeling, Mesh, Sheet Metal, and Utilities. The toolbar is dynamic; for example, entering "sketch mode" will display additional, relevant options.



<!-- QUESTION_START -->
What happens to the Toolbar when you enter sketch mode in Fusion 360?
<!-- OPTIONS -->
It disappears|It displays additional, relevant options|It becomes locked|It changes color
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The toolbar is dynamic and context-sensitive. When you enter sketch mode, it will display additional, relevant options for sketching.
<!-- QUESTION_END -->



## The Navigation Bar

Located below the canvas, the Navigation Bar provides options for viewing the model (like panning or zooming). While useful for trackpad users, mouse users often prefer using the scroll wheel for these actions. The right side of this bar contains display settings to change visual styles.



<!-- QUESTION_START -->
Where is the Navigation Bar located in Fusion 360?
<!-- OPTIONS -->
At the top of the screen|Below the canvas|On the left side|On the right side
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Navigation Bar is located below the canvas and provides options for viewing the model, such as panning or zooming.
<!-- QUESTION_END -->



## The Browser

Found on the left side of the screen, the Browser displays the hierarchy of your assembly, including all components, bodies, and sketches. You can toggle the visibility of any item here by clicking the "eye" icon.



<!-- QUESTION_START -->
How can you toggle the visibility of items in the Browser?
<!-- OPTIONS -->
By double-clicking them|By clicking the "eye" icon|By right-clicking them|By dragging them
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Browser displays the hierarchy of your assembly. You can toggle the visibility of any item by clicking the "eye" icon next to it.
<!-- QUESTION_END -->



## The Timeline

Located at the bottom, the Timeline tracks the history of your design. You can play back the creation process or step backward and forward to modify specific elements or features created earlier in the workflow.



<!-- QUESTION_START -->
What does the Timeline in Fusion 360 allow you to do?
<!-- OPTIONS -->
Only view your current design|Track the history of your design and modify previous features|Only save your work|Only export your files
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Timeline tracks the history of your design. You can play back the creation process or step backward and forward to modify specific elements or features created earlier in the workflow.
<!-- QUESTION_END -->



## What is Fusion 360?

Fusion 360 is a cloud-based 3D CAD (Computer-Aided Design), CAM (Computer-Aided Manufacturing), and CAE (Computer-Aided Engineering) software platform. It's used to design, test, and manufacture products.



## Key Features

- **3D Modeling**: Create complex 3D models and assemblies

- **Cloud-Based**: Access your designs from anywhere

- **Collaboration**: Share and collaborate with team members

- **Simulation**: Test your designs before manufacturing

- **Manufacturing**: Generate toolpaths for CNC machines and 3D printers



## Workspaces

Fusion 360 has different workspaces for different tasks:

- **Design**: Create 3D models

- **Render**: Create photorealistic images

- **Animation**: Create animations of your designs

- **Simulation**: Test structural and thermal properties

- **Manufacture**: Create toolpaths for manufacturing



## Basic Navigation

- **Orbit**: Middle mouse button (or Shift + Right-click)

- **Pan**: Shift + Middle mouse button (or Middle mouse button)

- **Zoom**: Scroll wheel (or Ctrl + Right-click and drag)

- **Fit**: Press 'F' to fit all objects in view



## Creating Your First Project

1. Click "New Project" in the Data Panel

2. Name your project

3. Start creating your first design!



## Important Notes

- Fusion 360 is free for students and hobbyists

- Your designs are saved to the cloud automatically

- You can work offline, but need internet to sync

- The interface adapts to your current task`,
      quizId: quizId++,
      assessmentType: 'history-game',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 12,
      title: "Fusion 360 Step 1: Sketching",
      emoji: '✏️',
      content: `# Fusion 360 Step 1: Sketching

## Learn Autodesk Fusion in 10 Easy Steps - Step 1 (2025/2026)

**Topic**: Creating a simple smartphone model using 2D sketches, extrusion, and fillets.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=YVSURhX8Qu0&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=2&pp=iAQB)

This tutorial guides beginners through creating a simple smartphone model using 2D sketches, extrusion, and fillets.



## Initial Setup

Before starting, restore default settings via the user profile icon (top right) > Preferences > Restore Defaults. The unit of measurement is set to millimeters using the Document Settings in the browser.



<!-- QUESTION_START -->
How do you restore default settings in Fusion 360?
<!-- OPTIONS -->
Through the Data Panel|Through the user profile icon (top right) > Preferences > Restore Defaults|Through the Timeline|Through the Browser
<!-- CORRECT -->
1
<!-- EXPLANATION -->
You restore default settings via the user profile icon in the top right, then go to Preferences > Restore Defaults.
<!-- QUESTION_END -->



## Saving and Project Management

Fusion is cloud-based. You start by opening the Data Panel, creating a new project named "smartphone," and entering that folder.



### Components

A new component named "smartphone" is created to contain the design. Components help organize your work and keep related parts together.



### Saving

The file is explicitly saved as "smartphone" to ensure progress is stored in the cloud.



<!-- QUESTION_START -->
Where are Fusion 360 files stored?
<!-- OPTIONS -->
Only on your local computer|In the cloud|On an external drive|In a separate folder on your desktop
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Fusion 360 is cloud-based, so all files are stored in the cloud, allowing you to access your designs from anywhere.
<!-- QUESTION_END -->



## Creating the Base Shape (Sketching)

A sketch is created on the XY plane (blue plane). A Center Rectangle is used, starting from the origin to constrain the model. Dimensions are typed in directly: 145 mm length and 70 mm width (using the Tab key to switch between dimensions).



<!-- QUESTION_START -->
What tool is used to create the base rectangle for the smartphone?
<!-- OPTIONS -->
2-Point Rectangle|Center Rectangle|3-Point Rectangle|Line Tool
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Center Rectangle is used, starting from the origin to constrain the model. This helps keep the design centered and properly positioned.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do you switch between dimension fields when entering values?
<!-- OPTIONS -->
Click with the mouse|Use the Tab key|Use the Enter key|Use the Space key
<!-- CORRECT -->
1
<!-- EXPLANATION -->
You use the Tab key to switch between dimension fields when entering values directly.
<!-- QUESTION_END -->



## 3D Extrusion

The Extrude tool turns the 2D rectangle into a 3D body. A thickness of 7 mm is applied. This action creates "Body 1" in the browser and hides the original sketch. The timeline at the bottom records this history.



<!-- QUESTION_START -->
What happens to the original sketch when you extrude it?
<!-- OPTIONS -->
It is deleted|It is hidden|It remains visible|It is moved to a different location
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When you extrude a sketch, the original sketch is hidden. The timeline records this action, and "Body 1" is created in the browser.
<!-- QUESTION_END -->



## Adding Fillets (Rounding Edges)

The Fillet tool creates curved edges. All side edges of the smartphone body are selected. A radius of 2 mm is applied to round off the phone's corners.



<!-- QUESTION_START -->
What radius is used for the fillets on the smartphone edges?
<!-- OPTIONS -->
1 mm|2 mm|3 mm|5 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A radius of 2 mm is applied to round off the phone's corners, creating smooth, curved edges.
<!-- QUESTION_END -->



## Creating the Camera Bump

A new sketch is added to the back face of the phone body. A Center Diameter Circle of 10 mm is drawn. Sketch Dimensions are used to position the circle 10 mm from the top edge and 10 mm from the side edge. The circle is extruded outwards by 2 mm to create the bump.



<!-- QUESTION_START -->
How far from the edges is the camera circle positioned?
<!-- OPTIONS -->
5 mm|10 mm|15 mm|20 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The camera circle is positioned 10 mm from the top edge and 10 mm from the side edge using Sketch Dimensions.
<!-- QUESTION_END -->



## Creating Patterns

Instead of drawing multiple cameras manually, the Rectangular Pattern tool is used. The Object Type is changed to "Features" to select just the camera bump extrusion. The X-axis (red) is selected for direction. A spacing of 25 mm creates a row of three camera bumps.



<!-- QUESTION_START -->
What tool is used to create multiple camera bumps instead of drawing them manually?
<!-- OPTIONS -->
Circular Pattern|Rectangular Pattern|Mirror Tool|Copy Tool
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Rectangular Pattern tool is used to create multiple camera bumps efficiently. The Object Type is changed to "Features" to select just the camera bump extrusion.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What spacing is used between the camera bumps in the pattern?
<!-- OPTIONS -->
20 mm|25 mm|30 mm|35 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A spacing of 25 mm creates a row of three camera bumps using the Rectangular Pattern tool.
<!-- QUESTION_END -->



## Finishing Touches

Small fillets of 0.3 mm are applied to the edges of the camera bumps to smooth them out. The design is saved to complete the tutorial.



<!-- QUESTION_START -->
What size fillets are applied to the camera bump edges?
<!-- OPTIONS -->
0.1 mm|0.3 mm|0.5 mm|1 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Small fillets of 0.3 mm are applied to the edges of the camera bumps to smooth them out as a finishing touch.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Sketching**: Creating 2D shapes on planes
- **Extrusion**: Turning 2D sketches into 3D bodies
- **Fillets**: Rounding edges for a smoother appearance
- **Patterns**: Creating multiple copies of features efficiently
- **Dimensions**: Precise measurements for accurate modeling

## Important Notes

- Always save your work regularly
- Use the Tab key to switch between dimension fields
- The Timeline records all your design history
- Patterns save time compared to manual copying
- Small fillets add professional finishing touches`,
      quizId: quizId++,
      assessmentType: 'history-game',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 13,
      title: "Fusion 360 Step 2: Coat Hanger (Sweeps)",
      emoji: '👔',
      content: `# Fusion 360 Step 2: Coat Hanger (Sweeps)

## Learn Autodesk Fusion in 10 Easy Steps - Step 2 (2025/2026)

**Topic**: Creating a coat hanger using sketching, curves, construction lines, and sweeping.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=YVSURhX8Qu0&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=2&pp=iAQB)

This tutorial guides you through creating a coat hanger using the Sweep tool, which extrudes a profile along a path.



## Project Setup and Saving

The video starts by saving the new file. A new project folder named "coat hanger" is created via the drop-down menu, or by selecting "New Project" in the Data Panel. A new component named "coat hanger" is also created to contain the design.



<!-- QUESTION_START -->
How do you create a new project in Fusion 360?
<!-- OPTIONS -->
Through the Timeline|Through the Data Panel by selecting "New Project"|Through the Browser|Through the Toolbar
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A new project folder can be created via the drop-down menu in the Data Panel, or by selecting "New Project" in the Data Panel. This helps organize your designs.
<!-- QUESTION_END -->



## Sketching the Path

A new sketch is started on the ZX plane. The Line Tool is used to draw the profile of the coat hanger.



### Creating the Path Lines

- A vertical line is drawn up from the center point, constrained to 90 degrees, and set to 60 mm in length. The line turns black, indicating it is fully defined/constrained.

- A horizontal line is drawn at a right angle, 50 mm long.

- A vertical line is drawn downwards, 140 mm long.

- Another horizontal line is drawn outwards, 50 mm long.

- A final vertical line is drawn upwards, 20 mm long.



<!-- QUESTION_START -->
What does it mean when a line turns black in a Fusion 360 sketch?
<!-- OPTIONS -->
The line is selected|The line is fully defined/constrained|The line is locked|The line is hidden
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When a line turns black in Fusion 360, it means the line is fully defined/constrained. This indicates that all dimensions and constraints have been applied, and the line cannot move.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the length of the first vertical line in the coat hanger path?
<!-- OPTIONS -->
50 mm|60 mm|140 mm|20 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The first vertical line is drawn up from the center point and set to 60 mm in length. This forms the top part of the coat hanger.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the length of the longest vertical line in the coat hanger path?
<!-- OPTIONS -->
60 mm|50 mm|140 mm|20 mm
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The longest vertical line in the path is 140 mm long, drawn downwards to form the main body of the coat hanger.
<!-- QUESTION_END -->



## Sketch Fillets

The Sketch Fillet tool is used to round the sharp corners of the path. A 10 mm radius is applied to each corner. The presenter notes that while modeling fillets are generally preferred, sketch fillets are used here for the path.



<!-- QUESTION_START -->
What radius is used for the sketch fillets on the coat hanger path?
<!-- OPTIONS -->
5 mm|10 mm|15 mm|20 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 10 mm radius is applied to each corner using the Sketch Fillet tool. This rounds the sharp corners of the path to create smoother transitions.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why are sketch fillets used instead of modeling fillets for the path?
<!-- OPTIONS -->
Sketch fillets are faster|Sketch fillets are used here for the path, though modeling fillets are generally preferred|Sketch fillets are more accurate|Sketch fillets are required
<!-- CORRECT -->
1
<!-- EXPLANATION -->
While modeling fillets are generally preferred, sketch fillets are used here for the path. This is a design choice for this particular tutorial.
<!-- QUESTION_END -->



## Sketching the Profile

A second sketch is created, this time on the XY plane. A Center Rectangle is drawn starting from the center point. The dimensions are set to 60 mm width and 5 mm height (using Tab to switch between fields).



The sketches are renamed in the browser for clarity: "Path" for the first sketch and "Profile" for the second.



<!-- QUESTION_START -->
What plane is used for the profile sketch?
<!-- OPTIONS -->
ZX plane|XY plane|YZ plane|Any plane
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The profile sketch is created on the XY plane, while the path sketch was created on the ZX plane. This allows the profile to be swept along the path.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What tool is used to create the profile rectangle?
<!-- OPTIONS -->
2-Point Rectangle|Center Rectangle|3-Point Rectangle|Line Tool
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Center Rectangle is drawn starting from the center point. This ensures the profile is centered and properly positioned for the sweep operation.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the dimensions of the profile rectangle?
<!-- OPTIONS -->
50 mm width and 5 mm height|60 mm width and 5 mm height|60 mm width and 10 mm height|50 mm width and 10 mm height
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The profile rectangle dimensions are set to 60 mm width and 5 mm height. The Tab key is used to switch between dimension fields when entering values.
<!-- QUESTION_END -->



## Sweeping the Profile

The Sweep tool is selected from the Create menu. The rectangle (Profile sketch) is selected as the profile, and the line drawing (Path sketch) is selected as the path. This action extrudes the rectangle shape along the line path to create the 3D hanger shape.



<!-- QUESTION_START -->
What tool is used to create the 3D coat hanger shape?
<!-- OPTIONS -->
Extrude|Revolve|Sweep|Loft
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The Sweep tool is used to extrude the rectangle profile along the line path, creating the 3D coat hanger shape. This is the key operation that turns the 2D sketches into a 3D object.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is selected first when using the Sweep tool?
<!-- OPTIONS -->
The path|The profile|Either one|The plane
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When using the Sweep tool, the profile (the rectangle) is selected first, then the path (the line drawing) is selected. This tells Fusion 360 to move the profile along the path.
<!-- QUESTION_END -->



## Finishing Touches

The resulting body is renamed to "hanger" in the browser. Fillets of 0.5 mm are added to the end faces of the hanger to round off the sharp edges. The project is saved to complete the tutorial.



<!-- QUESTION_START -->
What size fillets are added to the end faces of the hanger?
<!-- OPTIONS -->
0.3 mm|0.5 mm|1 mm|2 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Fillets of 0.5 mm are added to the end faces of the hanger to round off the sharp edges, giving it a more finished appearance.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Sketching on Different Planes**: Creating sketches on ZX and XY planes for different purposes
- **Line Tool**: Drawing connected lines to create a path
- **Constraints**: Fully constraining sketches so lines turn black
- **Sketch Fillets**: Rounding corners in 2D sketches
- **Center Rectangle**: Creating centered profiles for sweeping
- **Sweep Tool**: Extruding a profile along a path to create 3D shapes
- **Modeling Fillets**: Adding finishing touches to 3D bodies
- **Naming Sketches**: Organizing your work by renaming sketches in the browser



## Important Notes

- Always save your work regularly
- Use the Tab key to switch between dimension fields
- Fully constrain your sketches (lines should turn black)
- Rename sketches and bodies for better organization
- Sketch fillets can be used, but modeling fillets are generally preferred
- The Sweep tool requires both a profile and a path`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 14,
      title: "Fusion 360 Step 3: Greek Vase (Revolve & Splines)",
      emoji: '🏺',
      content: `# Fusion 360 Step 3: Greek Vase (Revolve & Splines)

## Learn Autodesk Fusion in 10 Easy Steps - Step 3 (2025/2026)

**Topic**: Creating a 3D model of a Greek vase using reference images, splines, and the revolve tool.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=RN41OedpMJ4&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=4&pp=iAQB)

This tutorial guides you through creating a Greek vase using reference images, splines for smooth curves, and the Revolve tool to create the 3D shape.



## Setup and Saving

The project is saved as "Greek vase" and a new component with the same name is created to house the design.



<!-- QUESTION_START -->
What is the project name for this tutorial?
<!-- OPTIONS -->
Vase|Greek vase|Ancient vase|Ceramic vase
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The project is saved as "Greek vase" and a new component with the same name is created to house the design. This helps organize your work.
<!-- QUESTION_END -->



## Inserting and Calibrating a Canvas

An image of a Greek vase is inserted from the computer onto the ZX plane. This reference image helps guide the modeling process.



### Calibration

To ensure the model is the correct size, the canvas is calibrated. By right-clicking the canvas in the browser and selecting "Calibrate," two points (top and bottom of the vase) are clicked, and the distance is set to 300 mm.



### Positioning

The canvas is edited to align the center of the vase image with the vertical axis. This ensures the model will be centered correctly when revolved.



<!-- QUESTION_START -->
What plane is the canvas image inserted onto?
<!-- OPTIONS -->
XY plane|ZX plane|YZ plane|Any plane
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The image of the Greek vase is inserted onto the ZX plane. This plane is used because the vase profile will be revolved around a vertical axis.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How do you calibrate a canvas in Fusion 360?
<!-- OPTIONS -->
Through the Toolbar|By right-clicking the canvas in the browser and selecting "Calibrate"|Through the Timeline|Through the Data Panel
<!-- CORRECT -->
1
<!-- EXPLANATION -->
To calibrate a canvas, you right-click the canvas in the browser and select "Calibrate." Then you click two points (top and bottom of the vase) and set the distance.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What distance is set when calibrating the vase canvas?
<!-- OPTIONS -->
200 mm|250 mm|300 mm|350 mm
<!-- CORRECT -->
2
<!-- EXPLANATION -->
When calibrating the canvas, the distance between the top and bottom of the vase is set to 300 mm. This ensures the model will be the correct size.
<!-- QUESTION_END -->



## Sketching the Profile

A new sketch is started on the same plane as the canvas. The profile of the vase is traced using different tools.



### Line Tool

Used for the straight sections at the base and top of the vase. These straight lines help create the flat surfaces.



### Fit Point Spline

Used to trace the curved outer edge of the vase. This tool creates smooth curves using control points, which can be adjusted with "handles" to match the reference image closely. Splines are perfect for creating organic, flowing curves.



<!-- QUESTION_START -->
What tool is used to trace the curved outer edge of the vase?
<!-- OPTIONS -->
Line Tool|Arc Tool|Fit Point Spline|Circle Tool
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The Fit Point Spline tool is used to trace the curved outer edge of the vase. This tool creates smooth curves using control points that can be adjusted with "handles" to match the reference image.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the control points on a spline called?
<!-- OPTIONS -->
Nodes|Handles|Points|Vertices
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The control points on a spline can be adjusted with "handles" to match the reference image closely. These handles allow you to fine-tune the curve shape.
<!-- QUESTION_END -->



### Closing the Sketch

Straight lines are drawn up the center axis (300 mm) and across the top and bottom to connect the profile. The shape turns blue, indicating it is a closed profile. A closed profile is required for the Revolve tool to work.



<!-- QUESTION_START -->
What does it mean when a sketch shape turns blue?
<!-- OPTIONS -->
The shape is selected|The shape is a closed profile|The shape is locked|The shape is hidden
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When a sketch shape turns blue, it indicates it is a closed profile. A closed profile is required for operations like Revolve to create a solid 3D body.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the length of the center axis line?
<!-- OPTIONS -->
250 mm|300 mm|350 mm|400 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The center axis line is drawn 300 mm long, matching the calibrated height of the vase. This line will serve as the axis of revolution.
<!-- QUESTION_END -->



## Revolving the Profile

The Revolve tool is selected from the Create menu. This tool rotates a 2D profile around an axis to create a 3D object.



### Profile Selection

The closed sketch region is selected as the profile to be revolved.



### Axis Selection

The vertical center line is selected as the axis of revolution. This is the line that was drawn up the center (300 mm long).



### Revolution

The profile is rotated 360 degrees to create the full 3D body of the vase. This creates a symmetrical, round object from the 2D profile.



<!-- QUESTION_START -->
What tool is used to create the 3D vase shape from the 2D profile?
<!-- OPTIONS -->
Extrude|Revolve|Sweep|Loft
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Revolve tool is used to rotate the 2D profile around an axis to create the 3D vase shape. This is perfect for creating symmetrical, round objects.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is selected as the axis of revolution?
<!-- OPTIONS -->
A horizontal line|The vertical center line|Any line|The top edge
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The vertical center line (the 300 mm line drawn up the center) is selected as the axis of revolution. This line determines how the profile will be rotated.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How many degrees is the profile rotated?
<!-- OPTIONS -->
180 degrees|270 degrees|360 degrees|90 degrees
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The profile is rotated 360 degrees to create the full 3D body of the vase. This creates a complete, symmetrical object.
<!-- QUESTION_END -->



## Hollowing and Finishing

After creating the solid vase, it needs to be hollowed out and finished with fillets.



### Shell Tool

The Shell tool is selected to hollow out the solid body. The top face of the vase is clicked, and a thickness of 3 mm is applied. This creates a hollow interior while maintaining the outer shape.



<!-- QUESTION_START -->
What tool is used to hollow out the vase?
<!-- OPTIONS -->
Extrude|Revolve|Shell|Cut
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The Shell tool is used to hollow out the solid body. The top face is selected, and a thickness of 3 mm is applied to create the hollow interior.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What thickness is applied when using the Shell tool?
<!-- OPTIONS -->
2 mm|3 mm|4 mm|5 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A thickness of 3 mm is applied when using the Shell tool. This creates the wall thickness of the hollow vase.
<!-- QUESTION_END -->



### Fillets

Small fillets (e.g., 0.3 mm) are added to the edges to smooth them out. This gives the vase a more polished, finished appearance.



<!-- QUESTION_START -->
What size fillets are typically added to the edges?
<!-- OPTIONS -->
0.1 mm|0.3 mm|0.5 mm|1 mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Small fillets of 0.3 mm are added to the edges to smooth them out. This gives the vase a more polished, finished appearance.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Canvas/Reference Images**: Using images as guides for modeling
- **Canvas Calibration**: Setting the correct scale for reference images
- **Line Tool**: Creating straight sections of a profile
- **Fit Point Spline**: Creating smooth, organic curves
- **Closed Profiles**: Ensuring sketches are closed for 3D operations
- **Revolve Tool**: Rotating a 2D profile around an axis to create 3D objects
- **Shell Tool**: Hollowing out solid bodies
- **Fillets**: Adding finishing touches to smooth edges



## Important Notes

- Always calibrate reference images to ensure correct scale
- Splines are perfect for creating organic, flowing curves
- A closed profile is required for the Revolve tool
- The axis of revolution determines how the profile rotates
- Shell tool creates hollow objects with specified wall thickness
- Small fillets add professional finishing touches
- The Revolve tool is ideal for creating symmetrical, round objects`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 15,
      title: "Fusion 360 Step 4: Engine Block (Extruded Cuts & Patterns)",
      emoji: '🔧',
      content: `# Fusion 360 Step 4: Engine Block (Extruded Cuts & Patterns)

## Learn Autodesk Fusion in 10 Easy Steps - Step 4 (2025/2026)

**Topic**: Creating an engine block shape using extruded cuts and pattern tools.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=jlJNlLaslrk&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=5&pp=iAQB)

This tutorial demonstrates how to "sculpt" by removing material, creating an engine block using extruded cuts and pattern tools.



## Setup and Base Shape

The file is saved as "block" and a new component named "block" is created to house the design.



### Sketch

A Center Rectangle is drawn on the XY plane with dimensions 430mm x 600mm. This creates the base shape for the engine block.



### Extrude

The rectangle is extruded by 300mm to create a 3D block. This solid block will serve as the base material that will be "sculpted" by removing material.



<!-- QUESTION_START -->
What are the dimensions of the base rectangle?
<!-- OPTIONS -->
400mm x 600mm|430mm x 600mm|430mm x 650mm|450mm x 600mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Center Rectangle is drawn on the XY plane with dimensions 430mm x 600mm. This creates the base shape for the engine block.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How much is the rectangle extruded to create the 3D block?
<!-- OPTIONS -->
250mm|300mm|350mm|400mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle is extruded by 300mm to create a 3D block. This solid block will serve as the base material for the engine block.
<!-- QUESTION_END -->



## Creating the First Cut (Extruded Cut)

A sketch is created on the top surface of the block to begin removing material.



### Construction Line

A line is drawn from the center point to the top edge (90 degrees). Pressing 'X' toggles it to a dotted construction line, meaning it aids drawing but isn't part of the final geometry. Construction lines help position other sketch elements but don't create features.



<!-- QUESTION_START -->
How do you toggle a line to a construction line in Fusion 360?
<!-- OPTIONS -->
Press 'X'|Press 'C'|Press 'L'|Right-click and select "Construction"
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Pressing 'X' toggles a line to a dotted construction line. Construction lines aid drawing but aren't part of the final geometry - they help position other elements.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the purpose of a construction line?
<!-- OPTIONS -->
It creates a feature|It aids drawing but isn't part of the final geometry|It cuts material|It adds material
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Construction lines aid drawing but aren't part of the final geometry. They help position other sketch elements but don't create features when you finish the sketch.
<!-- QUESTION_END -->



### Circle

A 120mm circle is drawn at the center point of the construction line. This circle will be used to cut a hole in the block.



<!-- QUESTION_START -->
What is the diameter of the circle drawn for the first cut?
<!-- OPTIONS -->
100mm|120mm|140mm|160mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 120mm circle is drawn at the center point of the construction line. This circle will be used to create the first cut in the engine block.
<!-- QUESTION_END -->



### Extrude Cut

The Extrude tool is used on the circle profile. Dragging the handle downwards into the block turns the operation red, indicating a "Cut" operation. The cut is confirmed by clicking OK. This removes material from the block, creating the first hole.



<!-- QUESTION_START -->
What color does the extrude operation turn when it becomes a Cut operation?
<!-- OPTIONS -->
Blue|Red|Green|Yellow
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When you drag the extrude handle downwards into the block, the operation turns red, indicating a "Cut" operation. This removes material instead of adding it.
<!-- QUESTION_END -->



## Rectangular Pattern

To create multiple holes efficiently, the Rectangular Pattern tool is used instead of manually creating each hole.



### Object Type

Set to "Features" to select the cut extrusion from the timeline. This tells Fusion 360 to pattern the cut feature, not just the sketch.



### Directions

The axis is selected (edge of the block). The direction type is set to Symmetrical to pattern in both directions from the center. This creates a balanced pattern.



### Configuration

- **Axis 1**: Quantity 3 (total 3 in this row)

- **Axis 2**: Quantity 2 (creates a second row)

- **Distance**: Adjusted (e.g., 200mm) to space the holes evenly

This creates a 3x2 grid of holes (3 columns, 2 rows).



<!-- QUESTION_START -->
What is the Object Type set to when using Rectangular Pattern?
<!-- OPTIONS -->
Bodies|Features|Sketches|Components
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Object Type is set to "Features" to select the cut extrusion from the timeline. This patterns the cut feature, creating multiple holes efficiently.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What direction type is used for the Rectangular Pattern?
<!-- OPTIONS -->
One Direction|Symmetrical|Asymmetric|Circular
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The direction type is set to Symmetrical to pattern in both directions from the center. This creates a balanced pattern of holes.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How many holes are created in the rectangular pattern?
<!-- OPTIONS -->
4 holes (2x2)|6 holes (3x2)|8 holes (4x2)|9 holes (3x3)
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The pattern creates a 3x2 grid of holes - 3 columns (Axis 1: Quantity 3) and 2 rows (Axis 2: Quantity 2), resulting in 6 total holes.
<!-- QUESTION_END -->



## Circular Pattern

A new sketch is started on the surface to create a circular pattern of smaller holes around the larger ones.



### Setup

A construction line is drawn 90mm from the center, and a small 25mm circle is drawn at its end. This creates one small hole that will be patterned.



<!-- QUESTION_START -->
How far from the center is the construction line drawn for the circular pattern?
<!-- OPTIONS -->
80mm|90mm|100mm|110mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A construction line is drawn 90mm from the center, and a small 25mm circle is drawn at its end. This positions the first small hole for the circular pattern.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the diameter of the small circles in the circular pattern?
<!-- OPTIONS -->
20mm|25mm|30mm|35mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A small 25mm circle is drawn at the end of the construction line. This circle will be patterned around the larger hole.
<!-- QUESTION_END -->



### Circular Pattern Tool

- **Object**: The small 25mm circle is selected

- **Center Point**: The center of the previous large circle is selected

- **Quantity**: Set to 7 to create a ring of 7 small circles around the larger one

This creates a decorative pattern of small holes around each large hole.



<!-- QUESTION_START -->
How many small circles are created in the circular pattern?
<!-- OPTIONS -->
5|6|7|8
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The quantity is set to 7 to create a ring of 7 small circles around the larger hole. This creates a decorative pattern.
<!-- QUESTION_END -->



### Extrude Cut

The new pattern of circles is selected and extruded downwards to cut them into the block. This creates the final pattern of holes in the engine block.



## Finishing

The model represents a rough engine block concept, demonstrating how to "sculpt" by removing material. The project is saved to finish the tutorial.



## Key Concepts Learned

- **Extruded Cuts**: Removing material from a solid body
- **Construction Lines**: Helper lines that aid positioning but don't create features
- **Rectangular Pattern**: Creating multiple copies in a grid pattern
- **Circular Pattern**: Creating multiple copies arranged in a circle
- **Sculpting by Subtraction**: Building complex shapes by removing material
- **Feature Patterning**: Repeating features efficiently instead of manual copying
- **Symmetrical Patterns**: Creating balanced designs



## Important Notes

- Press 'X' to toggle lines to construction lines
- Red color indicates a Cut operation when extruding
- Rectangular Pattern can create grids of features
- Circular Pattern arranges features in a circle
- Patterns save time compared to manual copying
- The Object Type must be set to "Features" to pattern cuts
- Symmetrical patterns create balanced designs
- Construction lines help position elements but don't create features`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 16,
      title: "Fusion 360 Step 5: Bottle (Lofts & Offset Planes)",
      emoji: '🍾',
      content: `# Fusion 360 Step 5: Bottle (Lofts & Offset Planes)

## Learn Autodesk Fusion in 10 Easy Steps - Step 5 (2025/2026)

**Topic**: Creating a bottle shape using offset planes, lofts, and guide rails.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=E-fs6jrdct0&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=6&pp=iAQB)

This tutorial demonstrates creating a complex bottle shape by blending multiple profiles together using the Loft tool with guide rails.



## Setup and Saving

The file is saved as "bottle" and a new component named "bottle" is created to contain the design.



<!-- QUESTION_START -->
What is the project name for this tutorial?
<!-- OPTIONS -->
Container|Bottle|bottle|Vessel
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The file is saved as "bottle" and a new component named "bottle" is created to contain the design. This helps organize your work.
<!-- QUESTION_END -->



## Creating the Base Profiles (Offset Planes)

The bottle is created using multiple profiles at different heights, connected by a loft. Offset planes are used to create these profiles at different levels.



### Bottom Profile

A Center Rectangle (60mm x 75mm) is drawn on the base plane. Sketch Fillets of 10mm are added to the corners to create rounded edges. This forms the base of the bottle.



<!-- QUESTION_START -->
What are the dimensions of the bottom rectangle?
<!-- OPTIONS -->
50mm x 75mm|60mm x 75mm|60mm x 80mm|70mm x 75mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Center Rectangle (60mm x 75mm) is drawn on the base plane. This forms the base profile of the bottle.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What size sketch fillets are added to the bottom rectangle corners?
<!-- OPTIONS -->
5mm|10mm|15mm|20mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Sketch Fillets of 10mm are added to the corners of the bottom rectangle. This creates rounded edges at the base of the bottle.
<!-- QUESTION_END -->



### Middle Profile (Offset Plane)

An Offset Plane is created 75mm above the base plane. On this new plane, a smaller Center Rectangle (40mm x 60mm) is drawn, also with fillets. This creates the middle section of the bottle, which is narrower than the base.



<!-- QUESTION_START -->
How high is the middle offset plane created?
<!-- OPTIONS -->
60mm|75mm|90mm|100mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
An Offset Plane is created 75mm above the base plane. This positions the middle profile at the correct height for the bottle shape.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the dimensions of the middle rectangle?
<!-- OPTIONS -->
35mm x 60mm|40mm x 60mm|40mm x 65mm|45mm x 60mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A smaller Center Rectangle (40mm x 60mm) is drawn on the middle offset plane. This creates a narrower middle section compared to the base.
<!-- QUESTION_END -->



### Top Profile (Offset Plane)

Another Offset Plane is created at 140mm height. A Circle with a diameter of 35mm is drawn on this plane. This creates the top opening of the bottle, which transitions from rectangular to circular.



<!-- QUESTION_START -->
How high is the top offset plane created?
<!-- OPTIONS -->
120mm|140mm|160mm|180mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Another Offset Plane is created at 140mm height. This positions the top profile at the correct height for the bottle neck.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the diameter of the top circle?
<!-- OPTIONS -->
30mm|35mm|40mm|45mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Circle with a diameter of 35mm is drawn on the top offset plane. This creates the circular opening at the top of the bottle.
<!-- QUESTION_END -->



## Creating Guide Rails

A new sketch is started on a vertical plane (perpendicular to the profiles) to draw the side shape of the bottle. Guide rails control how the loft transitions between profiles.



### Project Intersect

The Project > Intersect tool is used to create reference points (purple dots) where the previous sketches (rectangles and circle) intersect with the current sketch plane. This ensures the rails connect perfectly to the profiles at the correct points.



<!-- QUESTION_START -->
What tool is used to create reference points where sketches intersect with the current plane?
<!-- OPTIONS -->
Project > Project|Project > Intersect|Project > Include|Project > Offset
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Project > Intersect tool is used to create reference points (purple dots) where the previous sketches intersect with the current sketch plane. This ensures perfect alignment.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What color are the reference points created by Project Intersect?
<!-- OPTIONS -->
Blue|Purple|Red|Green
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Project > Intersect tool creates reference points shown as purple dots. These points mark where the previous sketches intersect with the current sketch plane.
<!-- QUESTION_END -->



### Fit Point Spline

A spline is drawn connecting these points to define the curved side of the bottle. Handles are adjusted to shape it like a shampoo bottle, creating a smooth, organic curve.



<!-- QUESTION_START -->
What tool is used to create the curved side shape of the bottle?
<!-- OPTIONS -->
Line Tool|Arc Tool|Fit Point Spline|Circle Tool
<!-- CORRECT -->
2
<!-- EXPLANATION -->
A Fit Point Spline is drawn connecting the reference points to define the curved side of the bottle. Handles are adjusted to create a smooth, organic curve.
<!-- QUESTION_END -->



### Mirroring

A vertical construction line is drawn. The spline is then mirrored across this line to create an identical rail on the opposite side. This ensures the bottle is symmetrical.



<!-- QUESTION_START -->
Why is the spline mirrored?
<!-- OPTIONS -->
To create a different shape|To create an identical rail on the opposite side|To delete the original|To rotate it
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The spline is mirrored across a vertical construction line to create an identical rail on the opposite side. This ensures the bottle is symmetrical.
<!-- QUESTION_END -->



## Lofting the Shape

The Loft tool is selected to blend the profiles together. The loft creates a smooth transition between the different shapes.



### Profiles

The bottom rectangle, middle rectangle, and top circle are selected in order from bottom to top. These are the cross-sections that will be blended together.



### Rails

The two mirrored spline curves are selected as rails. This forces the loft to follow the specific side curvature defined by the splines, rather than just connecting straight between profiles. The rails control the shape of the transition.



<!-- QUESTION_START -->
What tool is used to blend the profiles together?
<!-- OPTIONS -->
Extrude|Revolve|Sweep|Loft
<!-- CORRECT -->
3
<!-- EXPLANATION -->
The Loft tool is used to blend the bottom rectangle, middle rectangle, and top circle together. This creates a smooth transition between the different shapes.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
In what order are the profiles selected for the loft?
<!-- OPTIONS -->
Top to bottom|Bottom to top|Any order|Random order
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The bottom rectangle, middle rectangle, and top circle are selected in order from bottom to top. This ensures the loft transitions correctly.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the purpose of guide rails in a loft?
<!-- OPTIONS -->
To add material|To force the loft to follow specific curvature|To delete features|To create patterns
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The guide rails (the two mirrored splines) force the loft to follow the specific side curvature defined by the splines, rather than just connecting straight between profiles.
<!-- QUESTION_END -->



## Finishing Touches

After creating the basic bottle shape, finishing touches are added to complete the design.



### Fillet

A 5mm fillet is added to the bottom edge. This rounds the bottom corner for a more finished appearance.



<!-- QUESTION_START -->
What size fillet is added to the bottom edge?
<!-- OPTIONS -->
3mm|5mm|7mm|10mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 5mm fillet is added to the bottom edge. This rounds the bottom corner for a more finished appearance.
<!-- QUESTION_END -->



### Shell

The Shell tool is used on the top face with a 2mm thickness to hollow out the bottle. This creates the interior cavity of the bottle.



<!-- QUESTION_START -->
What thickness is used when shelling the bottle?
<!-- OPTIONS -->
1mm|2mm|3mm|4mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Shell tool is used on the top face with a 2mm thickness to hollow out the bottle. This creates the interior cavity.
<!-- QUESTION_END -->



### Top Fillets

Small 0.5mm fillets are added to the top edges for a smooth finish. This gives the bottle opening a polished appearance.



<!-- QUESTION_START -->
What size fillets are added to the top edges?
<!-- OPTIONS -->
0.3mm|0.5mm|0.7mm|1mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Small 0.5mm fillets are added to the top edges for a smooth finish. This gives the bottle opening a polished appearance.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Offset Planes**: Creating work planes at different heights
- **Multiple Profiles**: Using different shapes at different levels
- **Project Intersect**: Creating reference points from other sketches
- **Fit Point Spline**: Creating smooth, organic curves
- **Mirroring**: Creating symmetrical shapes
- **Loft Tool**: Blending multiple profiles together
- **Guide Rails**: Controlling the shape of loft transitions
- **Shell Tool**: Hollowing out solid bodies
- **Fillets**: Adding finishing touches to edges



## Important Notes

- Offset planes allow you to create profiles at different heights
- Project Intersect creates reference points for alignment
- Guide rails control how lofts transition between profiles
- Profiles must be selected in order (bottom to top)
- Lofts create smooth transitions between different shapes
- Shell tool creates hollow objects with specified wall thickness
- Multiple fillets can be applied for different finishing effects
- The Loft tool is ideal for creating complex, organic shapes`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 17,
      title: "Fusion 360 Step 6: Emboss & Deboss",
      emoji: '📝',
      content: `# Fusion 360 Step 6: Emboss & Deboss

## Learn Autodesk Fusion in 10 Easy Steps - Step 6 (2025/2026)

**Topic**: Using the emboss and deboss features, including on curved surfaces.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=qKZBlH22-gY&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=7&pp=iAQB0gcJCU0KAYcqIYzv)

This tutorial demonstrates how to add text and designs to both flat and curved surfaces using the Emboss and Deboss tools.



## Setup and Base Shape (Shape 1)

The file is saved as "emboss". A new component named "shape 1" is created to contain the design.



### Sketch

A Two Point Rectangle (instead of center) is drawn on the XY plane. This gives more control over the rectangle's position.



### Dimensions

The rectangle dimensions are set to 80mm width and 100mm height (using Tab to switch between fields). This creates the base block for the emboss examples.



### Extrude

The rectangle is extruded by 10mm to create a 3D block.



### Taper Angle

The presenter demonstrates tapering. A value of -5 degrees is used to taper the extrusion inwards. This creates a slightly narrower top than bottom, useful for certain manufacturing processes.



<!-- QUESTION_START -->
What type of rectangle is used for the base shape?
<!-- OPTIONS -->
Center Rectangle|Two Point Rectangle|3-Point Rectangle|Square
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Two Point Rectangle (instead of center) is drawn on the XY plane. This gives more control over the rectangle's position.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the dimensions of the base rectangle?
<!-- OPTIONS -->
70mm x 100mm|80mm x 100mm|80mm x 110mm|90mm x 100mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle dimensions are set to 80mm width and 100mm height. The Tab key is used to switch between dimension fields.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How much is the rectangle extruded?
<!-- OPTIONS -->
8mm|10mm|12mm|15mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle is extruded by 10mm to create a 3D block. This provides a flat surface for embossing text.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What taper angle is used for the extrusion?
<!-- OPTIONS -->
-3 degrees|-5 degrees|-7 degrees|-10 degrees
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A value of -5 degrees is used to taper the extrusion inwards. This creates a slightly narrower top than bottom.
<!-- QUESTION_END -->



## Embossing Text on a Flat Surface

Text can be added to flat surfaces using the Emboss tool, which raises the text above the surface.



### Text Sketch

A sketch is created on the top surface. The Text tool is used to create a text box, and "HELLO" is typed in capitals. Alignment tools center the text, and the height is set to 10mm.



<!-- QUESTION_START -->
What text is used in the tutorial?
<!-- OPTIONS -->
HELLO|FUSION|DESIGN|TEXT
<!-- CORRECT -->
0
<!-- EXPLANATION -->
"HELLO" is typed in capitals using the Text tool. Alignment tools are used to center the text on the surface.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the height of the text?
<!-- OPTIONS -->
8mm|10mm|12mm|15mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The text height is set to 10mm. This determines the size of the letters when embossed.
<!-- QUESTION_END -->



### Emboss Tool

The Emboss tool is found under the "Create" menu. It can raise (emboss) or cut (deboss) text or shapes into surfaces.



### Emboss Settings

- **Profile**: The "HELLO" text is selected

- **Face**: The top surface of the block is selected

- **Depth**: 2mm is set to raise the text (Emboss). This creates raised letters on the surface.



<!-- QUESTION_START -->
Where is the Emboss tool located?
<!-- OPTIONS -->
Modify menu|Create menu|Sketch menu|Assemble menu
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Emboss tool is found under the "Create" menu. It can raise (emboss) or cut (deboss) text or shapes into surfaces.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What depth is used for embossing the text?
<!-- OPTIONS -->
1mm|2mm|3mm|4mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A depth of 2mm is set to raise the text (Emboss). This creates raised letters that stand out from the surface.
<!-- QUESTION_END -->



### Fillet

A 0.5mm fillet is added to the top face of the letters and the base face to smooth the connection. This gives the embossed text a more polished appearance.



<!-- QUESTION_START -->
What size fillet is added to the embossed text?
<!-- OPTIONS -->
0.3mm|0.5mm|0.7mm|1mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 0.5mm fillet is added to the top face of the letters and the base face to smooth the connection. This gives the text a more polished appearance.
<!-- QUESTION_END -->



## Embossing Text on a Curved Path

Text can also follow a curved path, wrapping around curves instead of staying flat.



### Path Sketch

The previous features are deleted from the timeline to reset the block. A construction line (20mm) is drawn 90 degrees from the center. A Fit Point Spline connects the sides through the top of this construction line to create a curve. This curve will serve as the path for the text.



<!-- QUESTION_START -->
How long is the construction line for the curved path?
<!-- OPTIONS -->
15mm|20mm|25mm|30mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A construction line (20mm) is drawn 90 degrees from the center. A Fit Point Spline connects the sides through the top of this construction line to create a curve.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What tool is used to create the curved path?
<!-- OPTIONS -->
Line Tool|Arc Tool|Fit Point Spline|Circle Tool
<!-- CORRECT -->
2
<!-- EXPLANATION -->
A Fit Point Spline connects the sides through the top of the construction line to create a curve. This curve will serve as the path for the text.
<!-- QUESTION_END -->



### Text on Path

The Text tool is used with "Text on Path" selected. The text wraps around the spline curve, following its shape instead of staying straight.



<!-- QUESTION_START -->
What option is selected to make text follow a curve?
<!-- OPTIONS -->
Text on Line|Text on Path|Text on Curve|Text on Spline
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Text tool is used with "Text on Path" selected. This makes the text wrap around the spline curve, following its shape.
<!-- QUESTION_END -->



### Deboss

The Emboss tool is used again, but this time "Deboss" is selected to cut the text 2mm into the model. Deboss creates recessed text instead of raised text.



<!-- QUESTION_START -->
What is the difference between Emboss and Deboss?
<!-- OPTIONS -->
Emboss raises text, Deboss cuts text|Emboss cuts text, Deboss raises text|They are the same|Emboss is for flat surfaces only
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Emboss raises text above the surface, while Deboss cuts text into the surface. Both use the same tool, just with different settings.
<!-- QUESTION_END -->



## Embossing on a Curved Surface (Shape 2)

A new component "shape 2" is created, and "shape 1" is hidden. This demonstrates embossing on a curved surface like a cylinder.



### Cylinder

A 60mm diameter circle is drawn and extruded by 100mm to create a cylinder. This provides a curved surface for embossing.



<!-- QUESTION_START -->
What is the diameter of the cylinder?
<!-- OPTIONS -->
50mm|60mm|70mm|80mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 60mm diameter circle is drawn and extruded by 100mm to create a cylinder. This provides a curved surface for embossing.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How tall is the cylinder?
<!-- OPTIONS -->
80mm|100mm|120mm|150mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The circle is extruded by 100mm to create the cylinder. This provides enough height for the text to wrap around.
<!-- QUESTION_END -->



### Tangent Text

A sketch is created on a plane tangent/perpendicular to the cylinder (likely the origin plane slicing through it). This ensures the text is properly oriented for wrapping around the curved surface.



### Text

"HELLO" is typed. The presenter notes that sometimes text must be mirrored/flipped in the sketch to appear correctly when wrapped around a curved surface.



<!-- QUESTION_START -->
Why might text need to be mirrored when embossing on a curved surface?
<!-- OPTIONS -->
To make it larger|To make it appear correctly when wrapped|To change the font|To add effects
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Sometimes text must be mirrored/flipped in the sketch to appear correctly when wrapped around a curved surface. This ensures the letters face the right direction.
<!-- QUESTION_END -->



### Emboss on Cylinder

- **Profile**: The text is selected

- **Face**: The curved surface of the cylinder is selected

The text wraps around the curvature of the cylinder, embossed by 2mm. This demonstrates how emboss works on non-flat surfaces.



<!-- QUESTION_START -->
What depth is used when embossing on the cylinder?
<!-- OPTIONS -->
1mm|2mm|3mm|4mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The text is embossed by 2mm on the curved surface of the cylinder. The text wraps around the curvature, following the surface shape.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Emboss Tool**: Raising text or shapes above a surface
- **Deboss Tool**: Cutting text or shapes into a surface
- **Text Tool**: Creating text in sketches
- **Text on Path**: Making text follow a curved path
- **Fit Point Spline**: Creating curved paths for text
- **Taper Angle**: Angling extrusions for manufacturing
- **Curved Surface Embossing**: Applying text to non-flat surfaces
- **Fillets on Text**: Smoothing the edges of embossed text
- **Mirroring Text**: Flipping text for correct orientation on curves



## Important Notes

- Emboss raises material, Deboss cuts material
- Text can follow curved paths using "Text on Path"
- The Emboss tool works on both flat and curved surfaces
- Text may need to be mirrored when wrapping around curves
- Fillets can be added to embossed text for a polished look
- The depth setting controls how much the text is raised or cut
- Construction lines help position curved paths
- Splines create smooth curves for text to follow
- The Emboss tool is found in the Create menu`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 18,
      title: "Fusion 360 Step 7: Import/Export, Holes & Fasteners",
      emoji: '📎',
      content: `# Fusion 360 Step 7: Import/Export, Holes & Fasteners

## Learn Autodesk Fusion in 10 Easy Steps - Step 7 (2025/2026)

**Topic**: Using import/export, the hole tool, and inserting fasteners.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=SG8GD8De6xA&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=8&pp=iAQB)

This tutorial demonstrates how to export and import files, create holes for fasteners, and insert screws and bolts from the fastener library.



## Create Base Box

The user creates a new component called "box" and sketches a center rectangle on a plane, setting dimensions to 50mm x 50mm. This rectangle is extruded by 50mm to create a cube. This cube will be used to demonstrate holes and fasteners.



<!-- QUESTION_START -->
What are the dimensions of the base rectangle?
<!-- OPTIONS -->
40mm x 40mm|50mm x 50mm|60mm x 60mm|50mm x 60mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A center rectangle is sketched on a plane with dimensions set to 50mm x 50mm. This creates a square base for the box.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How much is the rectangle extruded to create the cube?
<!-- OPTIONS -->
40mm|50mm|60mm|70mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle is extruded by 50mm to create a cube. This provides a solid block for demonstrating holes and fasteners.
<!-- QUESTION_END -->



## Exporting Files

The video explains how to export the design by going to File > Export. Different file types are used for different purposes.



### File Types

- **.f3d**: Best for reopening in Fusion to keep design history. This is Fusion 360's native format.

- **.fbx / .obj**: Best for rendering or animation (e.g., Blender). These formats preserve geometry for 3D graphics software.

- **.step**: Best for other CAD programs (e.g., SolidWorks). This is a standard CAD exchange format.

- **.stl**: Best for 3D printing. This format is used by most 3D printers and slicing software.

The user demonstrates exporting as an STL file to the desktop.



<!-- QUESTION_START -->
Which file format is best for reopening in Fusion 360 to keep design history?
<!-- OPTIONS -->
.f3d|.stl|.step|.obj
<!-- CORRECT -->
0
<!-- EXPLANATION -->
The .f3d format is Fusion 360's native format and is best for reopening in Fusion to keep design history. Other formats may lose parametric features.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which file format is best for 3D printing?
<!-- OPTIONS -->
.f3d|.stl|.step|.fbx
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The .stl format is best for 3D printing. This format is used by most 3D printers and slicing software to create the layers for printing.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which file format is best for other CAD programs like SolidWorks?
<!-- OPTIONS -->
.f3d|.stl|.step|.obj
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The .step format is best for other CAD programs (e.g., SolidWorks). This is a standard CAD exchange format that preserves geometry between different CAD systems.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which file formats are best for rendering or animation (e.g., Blender)?
<!-- OPTIONS -->
.f3d and .stl|.fbx and .obj|.step and .stl|.f3d and .step
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The .fbx and .obj formats are best for rendering or animation (e.g., Blender). These formats preserve geometry for 3D graphics software.
<!-- QUESTION_END -->



## Importing Files

To import, go to Insert > Insert Mesh and select the STL file. The imported mesh is moved to the side to compare with the original solid body.



### Difference Between Solid and Mesh

The solid body is filled (solid geometry), while the mesh is hollow (surface only). This is verified using Section Analysis, which cuts through the model to show the interior. The mesh is then deleted.



<!-- QUESTION_START -->
How do you import a mesh file in Fusion 360?
<!-- OPTIONS -->
File > Import|Insert > Insert Mesh|Create > Import|Tools > Import
<!-- CORRECT -->
1
<!-- EXPLANATION -->
To import a mesh file, go to Insert > Insert Mesh and select the file. This allows you to bring in STL or other mesh formats.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the difference between a solid body and a mesh?
<!-- OPTIONS -->
Solid is hollow, mesh is filled|Solid is filled, mesh is surface only|They are the same|Solid is 2D, mesh is 3D
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The solid body is filled (solid geometry), while the mesh is hollow (surface only). A mesh is just the outer surface, while a solid has volume.
<!-- QUESTION_END -->



## Using the Hole Tool

The Hole tool is selected from the Create menu and placed on the top surface of the box. The Hole tool creates precise holes for fasteners with various options.



### Hole Settings

- **Hole Type**: Options include Simple, Counterbore, and Countersink (allows screw heads to sit flush). Counterbore creates a larger diameter at the top for the screw head, while countersink creates an angled recess.

- **Tap Type**: Options include Simple, Clearance, and Tapped (adds threads). Tapped holes have internal threads for screws.

- **Drill Point**: Flat or Angled. Flat creates a flat bottom, while angled creates a pointed bottom like a drill bit.

- **Modeled checkbox**: Must be selected for 3D printing threads; otherwise, they are just visual textures. This is important for 3D printing threaded parts.



<!-- QUESTION_START -->
Where is the Hole tool located?
<!-- OPTIONS -->
Modify menu|Create menu|Sketch menu|Assemble menu
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Hole tool is selected from the Create menu. It creates precise holes for fasteners with various options for different hole types.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which hole type allows screw heads to sit flush?
<!-- OPTIONS -->
Simple|Counterbore|Countersink|Both Counterbore and Countersink
<!-- CORRECT -->
3
<!-- EXPLANATION -->
Both Counterbore and Countersink allow screw heads to sit flush. Counterbore creates a larger diameter at the top, while countersink creates an angled recess.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What does the "Tapped" tap type do?
<!-- OPTIONS -->
Creates a larger hole|Adds threads to the hole|Creates a flat bottom|Creates an angled bottom
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Tapped option adds threads to the hole. This creates internal threads that match standard screw sizes.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What must be selected for 3D printing threads?
<!-- OPTIONS -->
The "threaded" checkbox|The "modeled" checkbox|The "printed" checkbox|The "solid" checkbox
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The "modeled" checkbox must be selected for 3D printing threads; otherwise, they are just visual textures. This ensures the threads are actually created in the geometry.
<!-- QUESTION_END -->



## Inserting Fasteners

Go to Insert > Fastener to access a library of bolts, screws, nuts, etc. This provides standard fasteners that can be inserted into your design.



### Selecting a Fastener

The user selects a countersunk screw with size M3 and length 6mm. M3 refers to a metric screw with a 3mm diameter. The Hole Tool is adjusted to match: M3 size, countersunk type. This ensures the hole matches the fastener.



<!-- QUESTION_START -->
Where do you find the fastener library?
<!-- OPTIONS -->
File > Fastener|Insert > Fastener|Create > Fastener|Tools > Fastener
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Go to Insert > Fastener to access a library of bolts, screws, nuts, etc. This provides standard fasteners that can be inserted into your design.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What does M3 refer to in fastener sizing?
<!-- OPTIONS -->
3mm length|3mm diameter|3mm thread pitch|3mm head size
<!-- CORRECT -->
1
<!-- EXPLANATION -->
M3 refers to a metric screw with a 3mm diameter. The "M" stands for metric, and the number indicates the diameter in millimeters.
<!-- QUESTION_END -->



### Placing the Fastener

The screw is inserted into the hole. Even if it doesn't fit perfectly (indicated by red highlighting), it can still be placed. A Joint is automatically created to position the screw within the assembly. This joint helps align and position the fastener correctly.



<!-- QUESTION_START -->
What color indicates that a fastener doesn't fit perfectly?
<!-- OPTIONS -->
Blue|Red|Green|Yellow
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Red highlighting indicates that a fastener doesn't fit perfectly. However, it can still be placed even with this warning.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is automatically created when inserting a fastener?
<!-- OPTIONS -->
A hole|A joint|A pattern|A sketch
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Joint is automatically created to position the screw within the assembly. This joint helps align and position the fastener correctly.
<!-- QUESTION_END -->



## Key Concepts Learned

- **File Export**: Saving designs in different formats for different purposes
- **File Import**: Bringing mesh files into Fusion 360
- **Solid vs Mesh**: Understanding the difference between filled and surface-only geometry
- **Hole Tool**: Creating precise holes with various types and options
- **Hole Types**: Simple, Counterbore, and Countersink
- **Tap Types**: Simple, Clearance, and Tapped (threaded)
- **Fastener Library**: Accessing standard screws, bolts, and nuts
- **Metric Sizing**: Understanding M3, M4, etc. fastener sizes
- **Automatic Joints**: Fasteners automatically create joints for positioning
- **3D Printing Threads**: Using the "modeled" checkbox for printable threads



## Important Notes

- Different file formats serve different purposes (.f3d for Fusion, .stl for 3D printing, .step for CAD exchange)
- Meshes are surface-only, while solids have volume
- The Hole tool offers many options for different fastener types
- Counterbore and Countersink allow screw heads to sit flush
- Tapped holes have internal threads for screws
- The "modeled" checkbox is essential for 3D printing threads
- Fasteners can be inserted even if they don't fit perfectly (red highlighting)
- Joints are automatically created when inserting fasteners
- Metric sizing (M3, M4, etc.) refers to the diameter in millimeters
- The fastener library provides standard sizes for common fasteners`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 19,
      title: "Fusion 360 Step 8: Hinged Box (Components & Joints)",
      emoji: '📦',
      content: `# Fusion 360 Step 8: Hinged Box (Components & Joints)

## Learn Autodesk Fusion in 10 Easy Steps - Step 8 (2025/2026)

**Topic**: Creating a box with a hinged lid using components and joints.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=AbC3d1x0R48&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=8&pp=iAQB)

This tutorial demonstrates how to create an assembly with moving parts by building a box with a hinged lid using components and joints.



## Setting Up Components

The file is saved as "fixings box". A new component named "box" is created to hold the base geometry. Later, the main assembly ("fixings box") is reactivated to create a separate "lid" component. This ensures the lid is not inside the box component, allowing them to move independently.



<!-- QUESTION_START -->
What is the project name for this tutorial?
<!-- OPTIONS -->
Box|fixings box|Hinged Box|Storage Box
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The file is saved as "fixings box". This helps organize the project and identify the design.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is the lid created as a separate component?
<!-- OPTIONS -->
To make it larger|To allow it to move independently|To change its color|To delete it easily
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The lid is created as a separate component to ensure it is not inside the box component, allowing them to move independently. This is essential for creating joints.
<!-- QUESTION_END -->



## Creating the Box Base

The box base is created first, including the main body and hinge extension.



### Sketch

A center rectangle (90mm x 140mm) is drawn on the base plane. This creates the footprint of the box.



### Extrude

The rectangle is extruded by 50mm to create the main box body.



### Shell

The top surface is selected and shelled by 3mm to hollow out the box. This creates the interior cavity while maintaining the outer walls.



<!-- QUESTION_START -->
What are the dimensions of the base rectangle?
<!-- OPTIONS -->
80mm x 130mm|90mm x 140mm|100mm x 150mm|90mm x 150mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A center rectangle (90mm x 140mm) is drawn on the base plane. This creates the footprint of the box.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How much is the rectangle extruded?
<!-- OPTIONS -->
40mm|50mm|60mm|70mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle is extruded by 50mm to create the main box body. This provides the height of the box.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What thickness is used when shelling the box?
<!-- OPTIONS -->
2mm|3mm|4mm|5mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The top surface is selected and shelled by 3mm to hollow out the box. This creates the interior cavity while maintaining the outer walls.
<!-- QUESTION_END -->



### Hinge Extension

A sketch is created on the back face. A 5mm line is drawn down from the top edge, converted to a construction line, and used to create a profile that is extruded out by 5mm (Join operation) to form the hinge base. This creates the attachment point for the hinge.



<!-- QUESTION_START -->
How long is the line drawn for the hinge extension?
<!-- OPTIONS -->
3mm|5mm|7mm|10mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 5mm line is drawn down from the top edge, converted to a construction line, and used to create a profile that is extruded out by 5mm to form the hinge base.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What operation is used to create the hinge extension?
<!-- OPTIONS -->
New Body|Join|Cut|Intersect
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The profile is extruded out by 5mm using the Join operation. This adds the hinge base to the existing box body.
<!-- QUESTION_END -->



## Creating the Lid

With the "lid" component active, the lid is created separately from the box.



### Sketch

A Two Point Rectangle is sketched on top of the box. This creates the lid profile that will cover the box opening.



### Extrude

The lid profile is extruded by 3mm as a "New Body". This creates a separate body for the lid component.



<!-- QUESTION_START -->
What type of rectangle is used for the lid?
<!-- OPTIONS -->
Center Rectangle|Two Point Rectangle|3-Point Rectangle|Square
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A Two Point Rectangle is sketched on top of the box. This gives more control over the lid's position.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How thick is the lid?
<!-- OPTIONS -->
2mm|3mm|4mm|5mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The lid profile is extruded by 3mm as a "New Body". This creates a separate body for the lid component.
<!-- QUESTION_END -->



### Hinge Part

A sketch on the side of the lid draws a rectangle connecting the lid to the hinge base. This is extruded by 3mm (Join) to create the lid's part of the hinge mechanism.



<!-- QUESTION_START -->
How thick is the lid's hinge part?
<!-- OPTIONS -->
2mm|3mm|4mm|5mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The rectangle connecting the lid to the hinge base is extruded by 3mm (Join) to create the lid's part of the hinge mechanism.
<!-- QUESTION_END -->



## Creating the Hinge Pin/Hole

A sketch is created on the side of the hinge area to create the hole for the hinge pin.



### Positioning

Construction lines are used to find the center (2.5mm in, 2.5mm up). This positions the hole precisely in the center of the hinge.



### Hole

A 1mm circle is drawn at this center point. This will be the hole for the hinge pin.



### Extrude Cut

This circle is extruded (cut) by -4mm through both the lid and box hinge parts. The negative value cuts through the material, creating the pin hole.



<!-- QUESTION_START -->
How far in and up is the hole positioned?
<!-- OPTIONS -->
2mm in, 2mm up|2.5mm in, 2.5mm up|3mm in, 3mm up|2.5mm in, 3mm up
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Construction lines are used to find the center (2.5mm in, 2.5mm up). This positions the hole precisely in the center of the hinge.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the diameter of the hinge pin hole?
<!-- OPTIONS -->
0.5mm|1mm|1.5mm|2mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A 1mm circle is drawn at the center point. This will be the hole for the hinge pin.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How deep is the hole cut?
<!-- OPTIONS -->
-3mm|-4mm|-5mm|-6mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The circle is extruded (cut) by -4mm through both the lid and box hinge parts. The negative value cuts through the material, creating the pin hole.
<!-- QUESTION_END -->



## Adding the Joint

The main assembly component is activated. The Joint Tool is selected from the menu to create a connection between the lid and box that allows rotation.



### Snap Points

- The outer edge of the hole on the lid (lid is active/visible, box is hidden)

- The corresponding outer edge of the hole on the box (lid is hidden, box is active/visible)

These snap points align the two components at the hinge axis.



<!-- QUESTION_START -->
What tool is used to create the connection between lid and box?
<!-- OPTIONS -->
Fastener Tool|Joint Tool|Align Tool|Connect Tool
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Joint Tool is selected from the menu to create a connection between the lid and box that allows rotation.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are selected as snap points for the joint?
<!-- OPTIONS -->
The faces|The outer edges of the holes|The centers|The corners
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The outer edge of the hole on the lid and the corresponding outer edge of the hole on the box are selected as snap points. These align the two components at the hinge axis.
<!-- QUESTION_END -->



### Motion

The motion type is set to Revolute to allow rotation. This creates a hinge joint that allows the lid to rotate around the hinge axis.



<!-- QUESTION_START -->
What motion type is used for the hinge joint?
<!-- OPTIONS -->
Rigid|Revolute|Slider|Cylindrical
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The motion type is set to Revolute to allow rotation. This creates a hinge joint that allows the lid to rotate around the hinge axis.
<!-- QUESTION_END -->



### Limits

Joint limits are set to prevent clashing. Minimum is set to 0 degrees (closed) and Maximum to 180 degrees (fully open). This prevents the lid from rotating too far and colliding with other parts.



<!-- QUESTION_START -->
What is the minimum joint limit (closed position)?
<!-- OPTIONS -->
-90 degrees|0 degrees|90 degrees|180 degrees
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The minimum joint limit is set to 0 degrees (closed). This defines the closed position of the lid.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the maximum joint limit (fully open position)?
<!-- OPTIONS -->
90 degrees|120 degrees|150 degrees|180 degrees
<!-- CORRECT -->
3
<!-- EXPLANATION -->
The maximum joint limit is set to 180 degrees (fully open). This prevents the lid from rotating too far and colliding with other parts.
<!-- QUESTION_END -->



### Testing the Joint

The user can now double-click the flag icon on the joint to manually open and close the lid. This allows testing the joint motion and verifying it works correctly.



<!-- QUESTION_START -->
How do you test the joint motion?
<!-- OPTIONS -->
Right-click the joint|Double-click the flag icon on the joint|Press the spacebar|Use the timeline
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The user can double-click the flag icon on the joint to manually open and close the lid. This allows testing the joint motion and verifying it works correctly.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Components**: Creating separate parts that can move independently
- **Component Activation**: Switching between components to work on different parts
- **Shell Tool**: Hollowing out solid bodies
- **Join Operation**: Adding material to existing bodies
- **New Body Operation**: Creating separate bodies
- **Construction Lines**: Positioning elements precisely
- **Extrude Cut**: Removing material to create holes
- **Joint Tool**: Creating connections between components
- **Revolute Joint**: Allowing rotation around an axis
- **Joint Limits**: Controlling the range of motion
- **Snap Points**: Aligning components precisely



## Important Notes

- Components must be separate to create joints
- The main assembly component must be activated to create joints
- Snap points align components at the joint axis
- Revolute joints allow rotation around one axis
- Joint limits prevent unwanted movement and collisions
- Construction lines help position holes precisely
- Negative extrude values cut through material
- The flag icon on joints allows manual testing
- Shell tool creates hollow interiors
- Join operation adds material to existing bodies
- New Body operation creates separate bodies for different components`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 20,
      title: "Fusion 360 Step 9: Aftershave Bottle (Primitives & Appearances)",
      emoji: '🧴',
      content: `# Fusion 360 Step 9: Aftershave Bottle (Primitives & Appearances)

## Learn Autodesk Fusion in 10 Easy Steps - Step 9 (2025/2026)

**Topic**: Creating an aftershave bottle using primitive shapes and appearances.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=qlxM26qKBJI&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=9&pp=iAQB)

This tutorial demonstrates using primitive shapes (Box and Cylinder) instead of sketches, and applying materials/appearances to create a realistic product design.



## Setup and Saving

The file is saved as "after shave". A new component named "after shave" is created to contain the design. This helps organize the project.



<!-- QUESTION_START -->
What is the project name for this tutorial?
<!-- OPTIONS -->
Bottle|after shave|Aftershave|Container
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The file is saved as "after shave". A new component named "after shave" is created to contain the design.
<!-- QUESTION_END -->



## Using Primitives (The Box)

Instead of sketching and extruding, the Primitive Box tool is used. Primitives are pre-made 3D shapes that can be created quickly without sketching.



### Drawback Note

The video highlights that primitives don't create sketches, which can make future editing harder compared to sketch-based modeling. However, they are faster for simple shapes.



### Creation

A box is drawn on the base plane using the Primitive Box tool. This creates a 3D box directly without needing to sketch a rectangle first.



### Dimensions

Length 25mm, Width 50mm, Height 70mm. The body is renamed to "bottle" for clarity.



<!-- QUESTION_START -->
What tool is used instead of sketching and extruding?
<!-- OPTIONS -->
Extrude Tool|Primitive Box tool|Revolve Tool|Sweep Tool
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Primitive Box tool is used instead of sketching and extruding. Primitives are pre-made 3D shapes that can be created quickly.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is a drawback of using primitives?
<!-- OPTIONS -->
They are slower|They don't create sketches, making future editing harder|They are more complex|They use more memory
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Primitives don't create sketches, which can make future editing harder compared to sketch-based modeling. However, they are faster for simple shapes.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the dimensions of the box?
<!-- OPTIONS -->
20mm x 50mm x 70mm|25mm x 50mm x 70mm|25mm x 45mm x 70mm|30mm x 50mm x 70mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The box dimensions are Length 25mm, Width 50mm, Height 70mm. The body is renamed to "bottle" for clarity.
<!-- QUESTION_END -->



## Adding the Neck (Cylinder Primitive)

The Primitive Cylinder tool is used on the top surface of the box to create the bottle neck.



### Positioning

The center point is found by hovering to infer the center. This uses Fusion 360's inference system to automatically snap to the center of the face.



### Dimensions

Diameter 20mm, Height 4mm. This creates a short neck section.



### Operation

Important change to New Body (instead of Join) so it remains separate. This keeps the neck as a separate body from the bottle, which is useful for applying different materials later.



The body is renamed to "neck".



<!-- QUESTION_START -->
How is the center point found for the cylinder?
<!-- OPTIONS -->
By measuring|By hovering to infer the center|By drawing construction lines|By guessing
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The center point is found by hovering to infer the center. This uses Fusion 360's inference system to automatically snap to the center of the face.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are the dimensions of the neck cylinder?
<!-- OPTIONS -->
Diameter 18mm, Height 4mm|Diameter 20mm, Height 4mm|Diameter 20mm, Height 5mm|Diameter 22mm, Height 4mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The neck cylinder has a diameter of 20mm and height of 4mm. This creates a short neck section for the bottle.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What operation is used for the neck cylinder?
<!-- OPTIONS -->
Join|New Body|Cut|Intersect
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The operation is set to New Body (instead of Join) so it remains separate. This keeps the neck as a separate body from the bottle.
<!-- QUESTION_END -->



## Adding the Lid (Cylinder Primitive)

Another Primitive Cylinder is created on top of the neck to form the lid.



### Dimensions

Diameter 22mm, Height 24mm. The lid is slightly larger in diameter than the neck to fit over it.



### Operation

Set to New Body. The body is renamed to "lid".



<!-- QUESTION_START -->
What are the dimensions of the lid cylinder?
<!-- OPTIONS -->
Diameter 20mm, Height 24mm|Diameter 22mm, Height 24mm|Diameter 22mm, Height 20mm|Diameter 24mm, Height 24mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The lid cylinder has a diameter of 22mm and height of 24mm. The lid is slightly larger in diameter than the neck to fit over it.
<!-- QUESTION_END -->



## Filleting

Fillets are added to round the sharp edges and give the bottle a more polished appearance.



### Side Edges

The four vertical edges of the bottle are filleted by 5mm. This rounds the corners of the main body.



### Top/Bottom Faces

The top and bottom faces of the main bottle body are filleted by 2mm. This creates rounded edges on the top and bottom.



### Lid

The top edge of the lid is filleted by 3mm. This rounds the top of the lid for a finished look.



<!-- QUESTION_START -->
What size fillet is applied to the four vertical edges of the bottle?
<!-- OPTIONS -->
3mm|5mm|7mm|10mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The four vertical edges of the bottle are filleted by 5mm. This rounds the corners of the main body.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What size fillet is applied to the top and bottom faces of the bottle?
<!-- OPTIONS -->
1mm|2mm|3mm|4mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The top and bottom faces of the main bottle body are filleted by 2mm. This creates rounded edges on the top and bottom.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What size fillet is applied to the top edge of the lid?
<!-- OPTIONS -->
2mm|3mm|4mm|5mm
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The top edge of the lid is filleted by 3mm. This rounds the top of the lid for a finished look.
<!-- QUESTION_END -->



## Appearances and Materials

The Appearance menu is opened (Shortcut: A) to change the visual appearance of the bottle. This allows you to apply different materials and colors.



### Applying Material

The library is browsed to find Paint > Enamel Gloss Black. The material is dragged onto the bottle to change its visual appearance from the default steel gray to black. This gives the bottle a glossy black finish.



<!-- QUESTION_START -->
What is the shortcut key to open the Appearance menu?
<!-- OPTIONS -->
A|M|P|S
<!-- CORRECT -->
0
<!-- EXPLANATION -->
The Appearance menu is opened using the shortcut key A. This provides quick access to materials and appearances.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What material is applied to the bottle?
<!-- OPTIONS -->
Paint > Enamel Gloss Black|Paint > Matte Black|Metal > Steel|Plastic > ABS
<!-- CORRECT -->
0
<!-- EXPLANATION -->
The library is browsed to find Paint > Enamel Gloss Black. The material is dragged onto the bottle to change its appearance from the default steel gray to black.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the default material color in Fusion 360?
<!-- OPTIONS -->
White|Black|Steel gray|Blue
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The default material in Fusion 360 is steel gray. Materials can be changed using the Appearance menu to apply different colors and finishes.
<!-- QUESTION_END -->



## Render Workspace Introduction

The user switches from the Design workspace to the Render workspace. This view shows the material properties (like glossiness) more realistically, demonstrating how to create high-quality images of the product. The user switches back to Design and saves the file.



<!-- QUESTION_START -->
What workspace shows material properties more realistically?
<!-- OPTIONS -->
Design workspace|Render workspace|Animation workspace|Simulation workspace
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Render workspace shows the material properties (like glossiness) more realistically, demonstrating how to create high-quality images of the product.
<!-- QUESTION_END -->



## Key Concepts Learned

- **Primitive Shapes**: Pre-made 3D shapes (Box, Cylinder) that don't require sketching
- **Primitive Box**: Creating boxes directly without sketching rectangles
- **Primitive Cylinder**: Creating cylinders directly without sketching circles
- **Inference System**: Using hover to automatically find center points
- **New Body Operation**: Keeping parts separate for different materials
- **Fillets**: Rounding edges for a polished appearance
- **Appearance Menu**: Changing materials and colors (Shortcut: A)
- **Material Library**: Browsing and applying different materials
- **Render Workspace**: Viewing materials realistically for high-quality images
- **Naming Bodies**: Organizing your design by renaming bodies



## Important Notes

- Primitives are faster but don't create sketches, making editing harder
- Use New Body operation to keep parts separate for different materials
- The inference system helps find center points automatically
- Fillets add a polished, professional appearance
- The Appearance menu (Shortcut: A) allows quick material changes
- Materials can be dragged directly onto bodies
- The Render workspace shows materials more realistically
- Naming bodies helps organize complex designs
- Primitives are great for quick prototyping but sketches offer more control
- Different fillet sizes can be applied to different edges for varied effects`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 21,
      title: "Fusion 360 Step 10: Exporting & Manufacturing",
      emoji: '📤',
      content: `# Fusion 360 Step 10: Exporting & Manufacturing

## Learn Autodesk Fusion in 10 Easy Steps - Step 10 (2025/2026)

**Topic**: Exporting your designs for 3D printing, manufacturing, and sharing.

**YouTube Video**: [Watch on YouTube](https://www.youtube.com/watch?v=iUbGPrUilno&list=PLc_LgFscXJeVnF7K_CwavgPwL_siJWMv7&index=11&pp=iAQB)



## Exporting Your Designs

Once your design is complete, you need to export it for manufacturing, sharing, or 3D printing.



## File Formats



### STL (Stereolithography)

Most common for 3D printing.



- **Mesh format**: Converts solid to triangles

- **Universal**: Works with all 3D printers

- **No color/texture**: Geometry only



<!-- QUESTION_START -->
What file format is most common for 3D printing?
<!-- OPTIONS -->
STEP|STL|OBJ|DXF
<!-- CORRECT -->
1
<!-- EXPLANATION -->
STL (Stereolithography) is the most common format for 3D printing. It converts solid geometry to triangles and works with all 3D printers.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What does STL format contain?
<!-- OPTIONS -->
Geometry only|Colors and textures|Materials|Dimensions
<!-- CORRECT -->
0
<!-- EXPLANATION -->
STL format contains geometry only - no color or texture information. It converts solid models to triangles for 3D printing.
<!-- QUESTION_END -->



### STEP

For manufacturing and CAD exchange.



- **Precise geometry**: Maintains exact dimensions

- **Industry standard**: Works with other CAD software

- **Assembly support**: Can export entire assemblies



<!-- QUESTION_START -->
What file format is best for manufacturing and CAD exchange?
<!-- OPTIONS -->
STL|STEP|OBJ|DXF
<!-- CORRECT -->
1
<!-- EXPLANATION -->
STEP format is best for manufacturing and CAD exchange. It maintains precise geometry and is an industry standard that works with other CAD software.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What advantage does STEP format have over STL?
<!-- OPTIONS -->
Smaller file size|Maintains exact dimensions|Includes colors|Works with all printers
<!-- CORRECT -->
1
<!-- EXPLANATION -->
STEP format maintains precise geometry and exact dimensions, making it better for manufacturing than STL, which converts to triangles.
<!-- QUESTION_END -->



### OBJ

For rendering and visualization.



- **Mesh format**: Like STL but with materials

- **Texture support**: Can include colors

- **Common in graphics**: Used in animation software



<!-- QUESTION_START -->
What file format is best for rendering and visualization?
<!-- OPTIONS -->
STL|STEP|OBJ|DXF
<!-- CORRECT -->
2
<!-- EXPLANATION -->
OBJ format is best for rendering and visualization. It's like STL but with materials and texture support, making it common in animation software.
<!-- QUESTION_END -->



### DXF/DWG

For 2D drawings and laser cutting.



- **2D format**: Flat drawings

- **Laser cutting**: Perfect for CNC laser cutters

- **Drawing views**: Technical drawings



<!-- QUESTION_START -->
What file format is best for laser cutting?
<!-- OPTIONS -->
STL|STEP|OBJ|DXF/DWG
<!-- CORRECT -->
3
<!-- EXPLANATION -->
DXF/DWG format is best for 2D drawings and laser cutting. It's a 2D format that's perfect for CNC laser cutters and technical drawings.
<!-- QUESTION_END -->



## Exporting for 3D Printing



### Steps:

1. Select the body or component

2. Right-click → "Save As STL"

3. Choose settings:

 - **Refinement**: Higher = smoother but larger file

 - **Units**: Millimeters (mm) is standard

4. Click OK and save



### Important Considerations:

- **Watertight**: Model must be solid (no gaps)

- **Manifold**: All surfaces must connect properly

- **Orientation**: Consider how it will print

- **Supports**: May need support material



<!-- QUESTION_START -->
What does "watertight" mean for 3D printing?
<!-- OPTIONS -->
The model is waterproof|The model must be solid with no gaps|The model floats|The model is transparent
<!-- CORRECT -->
1
<!-- EXPLANATION -->
"Watertight" means the model must be solid with no gaps. This is essential for 3D printing because gaps can cause printing failures.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What does "manifold" mean for 3D printing?
<!-- OPTIONS -->
The model is round|All surfaces must connect properly|The model is flat|The model has multiple parts
<!-- CORRECT -->
1
<!-- EXPLANATION -->
"Manifold" means all surfaces must connect properly. This ensures the 3D printer can create a valid solid object without errors.
<!-- QUESTION_END -->



## Exporting for Manufacturing



### STEP Files:

1. Select component or body

2. File → Export → STEP

3. Choose options

4. Save



### DXF for Laser Cutting:

1. Create a sketch of the flat pattern

2. File → Export → DXF

3. Select the sketch

4. Save



## Manufacturing Workspace

Fusion 360 includes CAM (Computer-Aided Manufacturing) tools:



- **2D Milling**: Flat cutting operations

- **3D Milling**: Complex 3D shapes

- **Turning**: For lathe operations

- **Additive**: For 3D printing toolpaths



<!-- QUESTION_START -->
What does CAM stand for?
<!-- OPTIONS -->
Computer-Aided Manufacturing|Computer-Aided Modeling|Computer-Aided Machining|Computer-Aided Materials
<!-- CORRECT -->
0
<!-- EXPLANATION -->
CAM stands for Computer-Aided Manufacturing. Fusion 360 includes CAM tools for creating toolpaths for manufacturing machines.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What CAM operation is used for lathe operations?
<!-- OPTIONS -->
2D Milling|3D Milling|Turning|Additive
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Turning is used for lathe operations. This creates toolpaths for machines that rotate the workpiece while cutting.
<!-- QUESTION_END -->



## Creating Toolpaths



1. Switch to Manufacture workspace

2. Set up your machine

3. Define stock (raw material)

4. Create operations:

 - **2D Pocket**: Remove material from inside

 - **2D Contour**: Cut around edges

 - **3D Adaptive**: Efficient material removal

5. Generate toolpaths

6. Simulate the toolpath

7. Post-process for your machine



## Post-Processing

Converts toolpaths to machine code (G-code):



1. Select operations

2. Click "Post Process"

3. Choose your machine/controller

4. Generate G-code file

5. Send to machine



<!-- QUESTION_START -->
What does post-processing convert toolpaths into?
<!-- OPTIONS -->
STL files|G-code|STEP files|DXF files
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Post-processing converts toolpaths to machine code (G-code). This is the language that manufacturing machines understand.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is the first step in post-processing?
<!-- OPTIONS -->
Choose your machine|Select operations|Generate G-code|Send to machine
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The first step in post-processing is to select the operations you want to convert. Then you click "Post Process" and choose your machine/controller.
<!-- QUESTION_END -->



## Best Practices



### For 3D Printing:

- Check model is watertight

- Consider print orientation

- Add supports if needed

- Export at appropriate resolution



<!-- QUESTION_START -->
What should you check before exporting for 3D printing?
<!-- OPTIONS -->
File size|Model is watertight|Colors|Materials
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Before exporting for 3D printing, you should check that the model is watertight (solid with no gaps). This prevents printing failures.
<!-- QUESTION_END -->



### For Manufacturing:

- Choose correct file format

- Include all necessary dimensions

- Consider material properties

- Test toolpaths before running



## Common Export Issues



- **Missing geometry**: Not all bodies selected

- **Wrong units**: Check unit settings

- **File too large**: Reduce refinement/quality

- **Import errors**: Use standard formats (STEP, STL)



## Important Notes



- Always save your Fusion 360 file first

- Export formats depend on your use case

- STL for 3D printing, STEP for manufacturing

- Test exports before sending to machines

- Keep original Fusion 360 files for editing



<!-- QUESTION_START -->
What should you always do before exporting?
<!-- OPTIONS -->
Check file size|Save your Fusion 360 file first|Close other programs|Restart Fusion 360
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Always save your Fusion 360 file first before exporting. This ensures you have a backup of your work in case something goes wrong.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What format should you use for 3D printing?
<!-- OPTIONS -->
STEP|STL|OBJ|DXF
<!-- CORRECT -->
1
<!-- EXPLANATION -->
STL format should be used for 3D printing. STEP format is better for manufacturing and CAD exchange.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What format should you use for manufacturing?
<!-- OPTIONS -->
STL|STEP|OBJ|DXF
<!-- CORRECT -->
1
<!-- EXPLANATION -->
STEP format should be used for manufacturing. It maintains precise geometry and is an industry standard for CAD exchange.
<!-- QUESTION_END -->`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: 'fusion360',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 22,
      title: "TapTapTap: Expert Level 1",
      emoji: '👆',
      content: `# TapTapTap: Expert Level 1 👆

You're getting really good! This expert level will challenge your skills even more.

## How to Play

- Tap targets as they appear on screen
- Targets appear every 1 second (very fast!)
- Targets are smaller and more challenging
- 30 seconds to score as many points as possible!

## Scoring System

- **Bronze**: 20-39 points
- **Silver**: 40-59 points
- **Gold**: 60-79 points
- **Platinum**: 80+ points

You need at least **Bronze** (20 points) to progress!

## Tips

- Stay calm and focused
- Practice makes perfect
- Challenge yourself to beat your best score!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 23,
      title: "TapTapTap: Expert Level 2",
      emoji: '👆',
      content: `# TapTapTap: Expert Level 2 👆

Continue mastering your tapping skills at the expert level!

## How to Play

- Tap targets as they appear
- Same speed as Level 1 - keep practicing!
- 30 seconds to score points

## Scoring System

- **Bronze**: 20-39 points
- **Silver**: 40-59 points
- **Gold**: 60-79 points
- **Platinum**: 80+ points

You need at least **Bronze** (20 points) to progress!

## Challenge

Can you improve your score? Aim for Platinum!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

  ];
}
