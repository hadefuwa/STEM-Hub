import { Lesson } from '../../models/Lesson.js';

/**
 * Year 6 Lessons
 */
export function getYear6Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Algebra Introduction",
      emoji: '🔢',
      content: `# Algebra Introduction 🔢



Let's learn about algebra!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Algebra?



Algebra uses letters (like x, y) to represent unknown numbers!



## Examples



- x + 5 = 10 → x = 5

- y - 3 = 7 → y = 10



## Fun Activities



- Practice solving equations

- Play the algebra game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Statistics and Data",
      emoji: '📊',
      content: `# Statistics and Data 📊



Let's learn about statistics!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Statistics?



Statistics is collecting, organizing, and analyzing data!



## Mean, Median, Mode



- **Mean (Average)** - Add all numbers, divide by count

- **Median** - Middle number when ordered

- **Mode** - Most common number



## Fun Activities



- Calculate mean, median, mode

- Play the statistics game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Advanced Problem Solving",
      emoji: '🧩',
      content: `# Advanced Problem Solving 🧩



Let's solve more complex problems!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## Multi-Step Problems



Problems that need more than one step!



## Example



"Sarah has £20. She buys 3 books at £4 each. How much money does she have left?"



Steps:

1. Find cost: 3 × £4 = £12

2. Find remaining: £20 - £12 = £8



## Problem-Solving Strategies



- Draw a diagram

- Make a table

- Work backwards

- Try different approaches



## Fun Activities



- Solve complex problems

- Play the problem-solving game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Negative Numbers",
      emoji: '🔢',
      content: `# Negative Numbers 🔢

Let's learn about negative numbers!

## What are Negative Numbers?

Numbers less than zero!

## Examples

- -5 is less than 0
- -10 is less than -5
- 0 is neither positive nor negative

## Number Line

... -3, -2, -1, 0, 1, 2, 3 ...

## Comparing

- -5 < -2 (negative 5 is less than negative 2)
- -1 > -5 (negative 1 is greater than negative 5)

## How to Play

Drag on number line and type comparisons! 🎮`,
      quizId: quizId++,
      assessmentType: 'number-line-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "BODMAS/BIDMAS",
      emoji: '🔢',
      content: `# BODMAS/BIDMAS 🔢

Let's learn the order of operations!

## What is BODMAS?

Brackets, Orders, Division, Multiplication, Addition, Subtraction

## Order of Operations

1. Brackets first
2. Orders (powers)
3. Division and Multiplication (left to right)
4. Addition and Subtraction (left to right)

## Examples

- 2 + 3 × 4 = 2 + 12 = 14 (not 20!)
- (2 + 3) × 4 = 5 × 4 = 20
- 10 - 2 × 3 = 10 - 6 = 4

## How to Play

Type order of operations and click steps! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Ratio and Proportion",
      emoji: '⚖️',
      content: `# Ratio and Proportion ⚖️

Let's learn about ratios!

## What is a Ratio?

A ratio compares two amounts!

## Examples

- 2:3 means 2 parts to 3 parts
- If there are 4 apples and 6 oranges, the ratio is 4:6 or 2:3

## Simplifying Ratios

- 4:6 = 2:3 (divide both by 2)
- 8:12 = 2:3 (divide both by 4)

## Proportion

If 2:3 = 4:?, then ? = 6

## How to Play

Drag ratios and type proportions! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Percentages of Amounts",
      emoji: '📊',
      content: `# Percentages of Amounts 📊

Let's learn to find percentages of amounts!

## Finding Percentages

- 50% of 100 = 50
- 25% of 80 = 20
- 10% of 50 = 5

## Methods

- 10% = divide by 10
- 25% = divide by 4
- 50% = divide by 2
- 75% = 3 × 25%

## Examples

- 20% of 60 = 12
- 15% of 40 = 6

## How to Play

Type calculations and click answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Area of Rectangles/Triangles",
      emoji: '📐',
      content: `# Area of Rectangles/Triangles 📐

Let's learn area formulas!

## Area of Rectangle

Area = length × width

Example: 5 × 3 = 15 square units

## Area of Triangle

Area = (base × height) ÷ 2

Example: (6 × 4) ÷ 2 = 12 square units

## Examples

- Rectangle 8 × 5 = 40 square units
- Triangle base 10, height 6 = 30 square units

## How to Play

Type formulas and drag measurements! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "Pie Charts",
      emoji: '🥧',
      content: `# Pie Charts 🥧

Let's learn about pie charts!

## What is a Pie Chart?

A pie chart shows data as slices of a circle!

## Reading Pie Charts

- Each slice represents part of the whole
- Bigger slice = more data
- All slices add up to 100%

## Examples

- Favorite colors
- Survey results
- Data distribution

## How to Play

Click segments and drag to create charts! 🎮`,
      quizId: quizId++,
      assessmentType: 'graph-builder-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "Algebra: Solving Equations",
      emoji: '🔢',
      content: `# Algebra: Solving Equations 🔢

Let's learn to solve equations!

## What is an Equation?

An equation has an equals sign!

## Solving Equations

Find the value of the variable!

## Examples

- x + 5 = 10 → x = 5
- y - 3 = 7 → y = 10
- 2z = 8 → z = 4

## Steps

1. Do the same to both sides
2. Simplify
3. Find the answer

## How to Play

Type solutions and drag variables! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 11,
      title: "Converting Fractions/Decimals/Percentages",
      emoji: '🔄',
      content: `# Converting Fractions/Decimals/Percentages 🔄

Let's learn to convert between forms!

## Conversions

- 1/2 = 0.5 = 50%
- 1/4 = 0.25 = 25%
- 3/4 = 0.75 = 75%
- 1/10 = 0.1 = 10%

## Converting Fractions to Decimals

Divide numerator by denominator!

## Converting Decimals to Percentages

Multiply by 100!

## Examples

- 1/5 = 0.2 = 20%
- 2/5 = 0.4 = 40%

## How to Play

Drag conversions and type answers! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 12,
      title: "Scale and Maps",
      emoji: '🗺️',
      content: `# Scale and Maps 🗺️

Let's learn about scale!

## What is Scale?

Scale shows how much smaller a map is than real life!

## Reading Scale

- 1 cm on map = 100 m in real life
- 1:100 means 1 unit = 100 units

## Examples

- If 1 cm = 5 km, then 3 cm = 15 km
- If scale is 1:1000, then 2 cm = 2000 cm = 20 m

## Using Scale

Measure on map, then multiply by scale!

## How to Play

Click map points and type distances! 🎮`,
      quizId: quizId++,
      assessmentType: 'coordinate-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'maths',
      lessonNumber: 13,
      title: "Multi-Step Word Problems",
      emoji: '🧩',
      content: `# Multi-Step Word Problems 🧩

Let's solve complex word problems!

## Multi-Step Problems

Problems that need more than one calculation!

## Steps to Solve

1. Read carefully
2. Find all the numbers
3. Decide what operations to use
4. Solve step by step
5. Check your answer

## Example

"Tom has £50. He buys 3 books at £8 each and 2 pens at £3 each. How much money does he have left?"

Steps:
1. Cost of books: 3 × £8 = £24
2. Cost of pens: 2 × £3 = £6
3. Total spent: £24 + £6 = £30
4. Money left: £50 - £30 = £20

## How to Play

Type solutions and click operations! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 1,
      title: "World War I - The Great War",
      emoji: '🌍',
      content: `# World War I - The Great War 🌍



Let's learn about World War I!



## When Did It Happen?



World War I lasted from 1914 to 1918.



## Why Did It Start?



- Tensions between countries

- Alliances between nations

- Assassination of Archduke Franz Ferdinand

- Many countries got involved



## Who Fought?



**Allied Powers:**

- Britain

- France

- Russia

- United States (joined later)

- Many others



**Central Powers:**

- Germany

- Austria-Hungary

- Ottoman Empire



## Life in the Trenches



- Soldiers lived in trenches (ditches)

- Very difficult conditions

- Mud, rats, and disease

- Dangerous and scary

- They fought for years



## New Weapons



- Machine guns

- Tanks (first used)

- Poison gas

- Airplanes (for war)

- Submarines



## The End



- War ended in 1918

- Many people died

- Countries changed

- Led to World War II

- Peace treaties were signed



## Fun Activities



- Research the war

- Make a timeline

- Write about soldiers' experiences

- Learn about the impact



## Remember



- War lasted 1914-1918

- Many countries involved

- Very difficult time

- Important to remember!



## Practice Questions



<!-- QUESTION_START -->
When did World War I happen?
<!-- OPTIONS -->
1910-1914|1914-1918|1918-1922|1920-1924
<!-- CORRECT -->
1
<!-- EXPLANATION -->
World War I lasted from 1914 to 1918! It was a very difficult time with many countries involved!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What were soldiers' living conditions like in the trenches?
<!-- OPTIONS -->
Comfortable|Very difficult with mud, rats, and disease|Easy|Fun
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Soldiers lived in trenches (ditches) with very difficult conditions - mud, rats, and disease. It was dangerous and scary!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which countries were in the Allied Powers?
<!-- OPTIONS -->
Germany, Austria-Hungary|Britain, France, Russia, United States|Only Germany|Only Britain
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Allied Powers included Britain, France, Russia, and the United States (who joined later), plus many others!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What new weapons were used in World War I?
<!-- OPTIONS -->
Only swords|Machine guns, tanks, poison gas, airplanes, and submarines|Only guns|Only knives
<!-- CORRECT -->
1
<!-- EXPLANATION -->
New weapons included machine guns, tanks (first used), poison gas, airplanes (for war), and submarines!
<!-- QUESTION_END -->`,
      quizId: 82,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Between the Wars - 1920s and 1930s",
      emoji: '📅',
      content: `# Between the Wars - 1920s and 1930s 📅



Let's learn about the time between the world wars!



## The 1920s - The Roaring Twenties



- After World War I ended

- People wanted to have fun

- New music and dancing

- Women got more rights

- Economic boom in some places



## The Great Depression



- Started in 1929

- Stock market crashed

- Many people lost jobs

- Very hard times

- Poverty increased



## Rise of Dictators



- Some countries got dictators

- They had all the power

- People lost freedoms

- This led to problems

- It caused World War II



## New Technologies



- Cars became common

- Radio became popular

- Movies became big

- Technology advanced

- Life changed



## Art and Culture



- New art styles

- Jazz music

- Literature flourished

- Culture changed

- New ideas



## Fun Activities



- Learn about the 1920s

- Study the Great Depression

- Make a timeline

- Write about this period



## Remember



- 1920s were exciting

- Great Depression was hard

- Dictators rose to power

- It led to World War II!



## Practice Questions



<!-- QUESTION_START -->
What was the 1920s called?
<!-- OPTIONS -->
The Sad Twenties|The Roaring Twenties|The Quiet Twenties|The Boring Twenties
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The 1920s were called "The Roaring Twenties"! After World War I, people wanted to have fun, there was new music and dancing, and women got more rights!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
When did the Great Depression start?
<!-- OPTIONS -->
1925|1929|1930|1935
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Great Depression started in 1929 when the stock market crashed! Many people lost jobs, and it was very hard times!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened because of the rise of dictators?
<!-- OPTIONS -->
Peace|People lost freedoms and it led to World War II|Nothing|Happiness
<!-- CORRECT -->
1
<!-- EXPLANATION -->
When dictators rose to power, people lost freedoms, and this led to problems that caused World War II!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What new technologies became popular in the 1920s-1930s?
<!-- OPTIONS -->
Nothing|Cars, radio, and movies|Only computers|Only phones
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Cars became common, radio became popular, movies became big, technology advanced, and life changed!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 3,
      title: "World War II - Global Conflict",
      emoji: '🌍',
      content: `# World War II - Global Conflict 🌍



Let's learn about World War II!



## When Did It Happen?



World War II lasted from 1939 to 1945.



## Why Did It Start?



- Germany wanted more land

- Adolf Hitler and the Nazis

- Invasion of Poland

- Many countries got involved

- It became a world war



## Who Fought?



**Allied Powers:**

- Britain

- United States

- Soviet Union

- France

- Many others



**Axis Powers:**

- Germany

- Italy

- Japan



## The Holocaust



- A terrible time

- Millions of people were killed

- It was a genocide

- We must never forget

- We must learn from it



## The Blitz



- German bombing of British cities

- People hid in air raid shelters

- Many buildings destroyed

- People showed great courage

- Britain stood strong



## D-Day and Victory



- June 6, 1944 - D-Day

- Allied invasion of France

- Very important battle

- Helped end the war

- War ended in 1945



## Fun Activities



- Research the war

- Learn about the Blitz

- Write about the Home Front

- Make a timeline



## Remember



- War lasted 1939-1945

- Affected everyone

- People showed courage

- Important to remember!



## Practice Questions



<!-- QUESTION_START -->
When did World War II happen?
<!-- OPTIONS -->
1935-1939|1939-1945|1940-1946|1930-1940
<!-- CORRECT -->
1
<!-- EXPLANATION -->
World War II lasted from 1939 to 1945! It affected everyone, and people showed great courage!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was the Holocaust?
<!-- OPTIONS -->
A celebration|A terrible time when millions of people were killed|A war|A party
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Holocaust was a terrible time when millions of people were killed. It was a genocide, and we must never forget and learn from it!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was the Blitz?
<!-- OPTIONS -->
A celebration|German bombing of British cities|A dance|A song
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Blitz was German bombing of British cities! People hid in air raid shelters, many buildings were destroyed, but people showed great courage and Britain stood strong!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was D-Day?
<!-- OPTIONS -->
June 6, 1944 - Allied invasion of France|A holiday|A celebration|A dance
<!-- CORRECT -->
0
<!-- EXPLANATION -->
D-Day was June 6, 1944 - the Allied invasion of France! It was a very important battle that helped end the war!
<!-- QUESTION_END -->`,
      quizId: 83,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 4,
      title: "The Cold War",
      emoji: '❄️',
      content: `# The Cold War ❄️



Let's learn about the Cold War!



## What Was the Cold War?



- A conflict between the USA and Soviet Union

- It lasted from 1945 to 1991

- It was called "cold" because they didn't fight directly

- But there was tension



## The Two Sides



**United States and Allies**

- Believed in democracy

- Believed in capitalism

- Wanted freedom

- Western countries



**Soviet Union and Allies**

- Believed in communism

- Controlled by government

- Eastern countries

- Different system



## The Iron Curtain



- A division in Europe

- East and West separated

- Berlin Wall was built

- People couldn't travel freely

- It was a symbol of division



## The Space Race



- Both sides raced to space

- First satellite (Sputnik)

- First man in space

- First moon landing

- It was a competition



## Nuclear Weapons



- Both sides had nuclear weapons

- Very dangerous

- Could destroy the world

- People were afraid

- It was called "mutual destruction"



## The End



- The Cold War ended in 1991

- Soviet Union broke apart

- Berlin Wall came down

- People were free

- It was a time of change



## Fun Activities



- Learn about the Cold War

- Study the Space Race

- Make a timeline

- Write about the effects



## Remember



- Cold War was 1945-1991

- USA vs Soviet Union

- It was tense

- It ended peacefully!



## Practice Questions



<!-- QUESTION_START -->
When did the Cold War happen?
<!-- OPTIONS -->
1940-1950|1945-1991|1950-2000|1939-1945
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Cold War lasted from 1945 to 1991! It was a conflict between the USA and Soviet Union!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why was it called the "Cold" War?
<!-- OPTIONS -->
It was cold outside|They didn't fight directly|It was in winter|It was about ice
<!-- CORRECT -->
1
<!-- EXPLANATION -->
It was called "cold" because the USA and Soviet Union didn't fight directly, but there was tension!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was the Berlin Wall?
<!-- OPTIONS -->
A decoration|A symbol of division between East and West|A bridge|A road
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Berlin Wall was built as part of the Iron Curtain - a division in Europe where East and West were separated, and people couldn't travel freely!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was the Space Race?
<!-- OPTIONS -->
A running race|Both sides racing to space|A swimming race|A car race
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Space Race was when both sides raced to space! There was the first satellite (Sputnik), first man in space, and first moon landing!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 5,
      title: "Civil Rights Movement",
      emoji: '✊',
      content: `# Civil Rights Movement ✊



Let's learn about the fight for civil rights!



## What Were Civil Rights?



- Rights for all people

- Equal treatment

- No discrimination

- Fairness for everyone

- Important freedoms



## Segregation



- People were separated by race

- Different schools

- Different places

- It was unfair

- It was wrong



## Martin Luther King Jr.



- A great leader

- Fought for civil rights

- Gave famous speeches

- Led peaceful protests

- He was assassinated



## Rosa Parks



- Refused to give up her seat

- Started a bus boycott

- She was brave

- She inspired others

- She made a difference



## The Fight for Rights



- People protested

- They marched

- They boycotted

- They fought peacefully

- They won rights



## Changes



- Laws changed

- Segregation ended

- People got equal rights

- It was progress

- But there's still work to do



## Fun Activities



- Learn about civil rights leaders

- Study the movement

- Make a timeline

- Write about the impact



## Remember



- Civil rights are important

- People fought for equality

- They made progress

- We must continue the fight!



## Practice Questions



<!-- QUESTION_START -->
What were civil rights?
<!-- OPTIONS -->
Rights for some people|Rights for all people, equal treatment, no discrimination|Rights for only rich people|Rights for only men
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Civil rights were rights for all people - equal treatment, no discrimination, fairness for everyone, and important freedoms!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What was segregation?
<!-- OPTIONS -->
A celebration|People separated by race with different schools and places|A dance|A song
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Segregation was when people were separated by race - different schools, different places. It was unfair and wrong!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Rosa Parks do?
<!-- OPTIONS -->
Nothing|Refused to give up her seat and started a bus boycott|Only sat|Only stood
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Rosa Parks refused to give up her seat! She was brave, started a bus boycott, inspired others, and made a difference!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Martin Luther King Jr. do?
<!-- OPTIONS -->
Nothing|Fought for civil rights, gave famous speeches, and led peaceful protests|Only fought|Only wrote
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Martin Luther King Jr. was a great leader who fought for civil rights, gave famous speeches, and led peaceful protests!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 6,
      title: "Modern World - 1960s to 1990s",
      emoji: '🌐',
      content: `# Modern World - 1960s to 1990s 🌐



Let's learn about the modern world!



## The 1960s



- A time of change

- Young people protested

- Music changed

- Fashion changed

- Society changed



## The 1970s



- More changes

- Technology advanced

- Computers started

- Space exploration continued

- World events happened



## The 1980s



- Computers became common

- Technology grew

- Music and culture changed

- World events

- Life was different



## The 1990s



- Internet became popular

- Computers everywhere

- Communication changed

- World became connected

- Technology advanced



## Important Events



- Fall of Berlin Wall (1989)

- End of Cold War (1991)

- Internet revolution

- Globalization

- Many changes



## Fun Activities



- Learn about each decade

- Study important events

- Make a timeline

- Write about changes



## Remember



- 1960s-1990s had many changes

- Technology advanced

- World became connected

- Life changed a lot!



## Practice Questions



<!-- QUESTION_START -->
What happened in the 1960s?
<!-- OPTIONS -->
Nothing|A time of change with young people protesting, music and fashion changing|Only war|Only peace
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The 1960s were a time of change! Young people protested, music changed, fashion changed, and society changed!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What became popular in the 1990s?
<!-- OPTIONS -->
Nothing|The Internet became popular|Only TV|Only radio
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In the 1990s, the Internet became popular! Computers were everywhere, communication changed, the world became connected, and technology advanced!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What important event happened in 1989?
<!-- OPTIONS -->
Nothing|Fall of Berlin Wall|World War II|Cold War started
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Fall of Berlin Wall happened in 1989! The Cold War ended in 1991, and there was an Internet revolution!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What happened to technology from 1960s to 1990s?
<!-- OPTIONS -->
Nothing|Technology advanced - computers started, became common, and Internet became popular|It stayed the same|It got worse
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Technology advanced greatly! Computers started in the 1970s, became common in the 1980s, and the Internet became popular in the 1990s!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 7,
      title: "Modern World - 2000s to Today",
      emoji: '📱',
      content: `# Modern World - 2000s to Today 📱



Let's learn about recent history!



## The 2000s



- New millennium

- Technology advanced

- Internet grew

- Social media started

- World changed



## The 2010s



- Smartphones became common

- Social media grew

- Technology everywhere

- World became more connected

- Many changes



## Today (2020s)



- We live in this time!

- Technology is everywhere

- Internet connects us all

- We're making history now

- Future is ahead



## Recent Events



- COVID-19 pandemic

- Climate change awareness

- Technology advances

- Social movements

- World events



## Technology Today



- Smartphones

- Internet

- Social media

- Artificial Intelligence

- Many new things



## Making History



- We're living in history

- Our actions matter

- We can make a difference

- We're part of the story

- History continues



## Fun Activities



- Learn about recent events

- Study current issues

- Think about the future

- Write about today



## Remember



- We're living in history

- Technology changed everything

- We're making history now

- The future is ahead!



## Practice Questions



<!-- QUESTION_START -->
What became common in the 2010s?
<!-- OPTIONS -->
Nothing|Smartphones became common|Only computers|Only TV
<!-- CORRECT -->
1
<!-- EXPLANATION -->
In the 2010s, smartphones became common! Social media grew, technology was everywhere, and the world became more connected!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What technology do we have today?
<!-- OPTIONS -->
Nothing|Smartphones, Internet, social media, and Artificial Intelligence|Only phones|Only computers
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Today we have smartphones, Internet, social media, Artificial Intelligence, and many new things! Technology is everywhere!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What recent events have happened?
<!-- OPTIONS -->
Nothing|COVID-19 pandemic, climate change awareness, technology advances, and social movements|Only good things|Only bad things
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Recent events include the COVID-19 pandemic, climate change awareness, technology advances, social movements, and world events!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to know we're making history?
<!-- OPTIONS -->
It's not important|Our actions matter, we can make a difference, and we're part of the story|It doesn't matter|We can't do anything
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We're living in history! Our actions matter, we can make a difference, we're part of the story, and history continues!
<!-- QUESTION_END -->`,
      quizId: 84,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 8,
      title: "Historical Sources and Evidence",
      emoji: '📜',
      content: `# Historical Sources and Evidence 📜



Let's learn about historical sources!



## What are Historical Sources?



Historical sources are evidence from the past that help us understand history.



## Types of Sources



**Primary Sources**

- Created at the time

- Letters, diaries, photos

- Official documents

- Artifacts

- First-hand accounts



**Secondary Sources**

- Created later

- History books

- Documentaries

- Articles

- Interpretations



## Primary Sources



**Written Sources**

- Letters and diaries

- Official records

- Newspapers

- Books from the time

- Speeches



**Visual Sources**

- Paintings

- Photographs

- Maps

- Drawings

- Videos



**Artifacts**

- Objects from the past

- Tools, weapons, clothing

- Buildings

- Coins

- Technology



## Using Sources



**Questions to Ask:**

- Who created it?

- When was it created?

- Why was it created?

- Is it reliable?

- What does it tell us?

- What perspective does it show?



## Evaluating Sources



- Is it primary or secondary?

- Is it reliable?

- What is the perspective?

- What is missing?

- How does it compare to other sources?

- What biases might exist?



## Fun Activities



- Examine primary sources

- Compare different sources

- Write about what sources tell us

- Create your own sources

- Evaluate sources critically



## Remember



- Sources are evidence

- Primary sources are from the time

- Evaluate sources carefully

- Sources help us understand history!



## Practice Questions



<!-- QUESTION_START -->
What are primary sources?
<!-- OPTIONS -->
Sources created later|Sources created at the time like letters, diaries, photos, and artifacts|Only books|Only videos
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Primary sources are created at the time - letters, diaries, photos, official documents, artifacts, and first-hand accounts!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What are secondary sources?
<!-- OPTIONS -->
Sources from the time|Sources created later like history books, documentaries, and articles|Only photos|Only letters
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Secondary sources are created later - history books, documentaries, articles, and interpretations!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What questions should we ask about sources?
<!-- OPTIONS -->
Nothing|Who created it, when, why, is it reliable, what does it tell us|Only who|Only when
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We should ask: Who created it? When was it created? Why was it created? Is it reliable? What does it tell us? What perspective does it show?
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to evaluate sources?
<!-- OPTIONS -->
It's not important|To understand if they're reliable, what perspective they show, and what might be missing|It doesn't matter|We can't learn anything
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We evaluate sources to see if they're reliable, understand the perspective, see what's missing, compare to other sources, and check for biases!
<!-- QUESTION_END -->`,
      quizId: 96,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 9,
      title: "Making History - How We Study the Past",
      emoji: '🔍',
      content: `# Making History - How We Study the Past 🔍



Let's learn how historians study the past!



## What Do Historians Do?



- Historians study the past

- They research events

- They analyze sources

- They write about history

- They help us understand



## Research Methods



- Read primary sources

- Study artifacts

- Visit historical places

- Talk to experts

- Compare different sources



## Historical Thinking



- Ask questions

- Look for evidence

- Consider different perspectives

- Think critically

- Make connections



## Writing History



- Organize information

- Tell a story

- Use evidence

- Explain events

- Help others understand



## Why History Matters



- Learn from the past

- Understand the present

- Prepare for the future

- Learn about people

- Understand change



## Fun Activities



- Do historical research

- Write about history

- Visit museums

- Interview people

- Create timelines



## Remember



- Historians study the past

- They use evidence

- They think critically

- History helps us understand!



## Practice Questions



<!-- QUESTION_START -->
What do historians do?
<!-- OPTIONS -->
Nothing|Study the past, research events, analyze sources, and write about history|Only write|Only read
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Historians study the past, research events, analyze sources, write about history, and help us understand!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What research methods do historians use?
<!-- OPTIONS -->
Nothing|Read primary sources, study artifacts, visit historical places, talk to experts, and compare sources|Only read|Only write
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Historians read primary sources, study artifacts, visit historical places, talk to experts, and compare different sources!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is historical thinking?
<!-- OPTIONS -->
Not thinking|Ask questions, look for evidence, consider different perspectives, think critically, and make connections|Only ask questions|Only read
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Historical thinking means asking questions, looking for evidence, considering different perspectives, thinking critically, and making connections!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why does history matter?
<!-- OPTIONS -->
It doesn't|Learn from the past, understand the present, prepare for the future, learn about people, and understand change|Only for fun|Only for tests
<!-- CORRECT -->
1
<!-- EXPLANATION -->
History matters because we can learn from the past, understand the present, prepare for the future, learn about people, and understand change!
<!-- QUESTION_END -->`,
      quizId: 96,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'history',
      lessonNumber: 10,
      title: "Understanding Historical Change",
      emoji: '🔄',
      content: `# Understanding Historical Change 🔄



Let's learn about how history changes!



## How Things Change



- History shows change

- Things change over time

- People change

- Societies change

- The world changes



## Causes of Change



- New ideas

- New inventions

- Wars and conflicts

- People's actions

- Natural events



## Patterns in History



- Some things repeat

- We can see patterns

- We can learn from them

- History helps us understand

- We can predict some things



## Continuity and Change



- Some things stay the same

- Some things change

- We see both

- History shows both

- It's interesting to study



## Learning from History



- We can learn from mistakes

- We can learn from successes

- We can understand people

- We can make better choices

- History teaches us



## Your Place in History



- You're part of history

- Your actions matter

- You can make a difference

- You're making history now

- The future is yours



## Fun Activities



- Study how things changed

- Compare different times

- Think about causes

- Write about change

- Consider the future



## Remember



- History shows change

- We can learn from it

- You're part of history

- You can make a difference!



## Practice Questions



<!-- QUESTION_START -->
What causes change in history?
<!-- OPTIONS -->
Nothing|New ideas, new inventions, wars and conflicts, people's actions, and natural events|Only wars|Only inventions
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Causes of change include new ideas, new inventions, wars and conflicts, people's actions, and natural events!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What can we learn from history?
<!-- OPTIONS -->
Nothing|Learn from mistakes, learn from successes, understand people, make better choices|Only mistakes|Only successes
<!-- CORRECT -->
1
<!-- EXPLANATION -->
We can learn from mistakes, learn from successes, understand people, make better choices, and history teaches us!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is continuity and change?
<!-- OPTIONS -->
Everything changes|Some things stay the same and some things change|Nothing changes|Only change
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Continuity and change means some things stay the same and some things change! We see both in history, and it's interesting to study!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Why is it important to know you're part of history?
<!-- OPTIONS -->
It's not important|Your actions matter, you can make a difference, you're making history now, and the future is yours|It doesn't matter|You can't do anything
<!-- CORRECT -->
1
<!-- EXPLANATION -->
You're part of history! Your actions matter, you can make a difference, you're making history now, and the future is yours!
<!-- QUESTION_END -->`,
      quizId: 96,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "TapTapTap: Champion Level 1",
      emoji: '👆',
      content: `# TapTapTap: Champion Level 1 👆

The ultimate challenge! You've reached the champion level - the highest difficulty!

## How to Play

- Tap targets as they appear on screen
- Targets appear every 0.6 seconds (incredibly fast!)
- Targets are very small and require perfect precision
- 30 seconds to score as many points as possible!

## Scoring System

- **Bronze**: 30-59 points
- **Silver**: 60-89 points
- **Gold**: 90-119 points
- **Platinum**: 120+ points

You need at least **Bronze** (30 points) to progress!

## Tips

- This is the hardest level - be patient!
- Focus on accuracy over speed
- Practice makes perfect - keep trying!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year6',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "TapTapTap: Champion Level 2",
      emoji: '👆',
      content: `# TapTapTap: Champion Level 2 👆

The final challenge! You're at the top level - show what you can do!

## How to Play

- Tap targets as they appear
- Same speed as Level 1 - the ultimate test!
- 30 seconds to score points

## Scoring System

- **Bronze**: 30-59 points
- **Silver**: 60-89 points
- **Gold**: 90-119 points
- **Platinum**: 120+ points

You need at least **Bronze** (30 points) to progress!

## Challenge

You've made it to the champion level! Can you achieve Platinum? You're a true tapping champion!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

  ];
}
