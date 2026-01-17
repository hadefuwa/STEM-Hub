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
      subjectId: 'maths',
      lessonNumber: 1,
      title: "Multiplication Tables",
      emoji: '✖️',
      content: `# Multiplication Tables ✖️



Let's learn our times tables!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Multiplication?



Multiplication is a quick way to add the same number many times!



2 × 3 = 2 + 2 + 2 = 6



## Practice



- Learn the 2 times table

- Learn the 5 times table

- Learn the 10 times table

- Play the multiplication game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 2,
      title: "Division Basics",
      emoji: '➗',
      content: `# Division Basics ➗



Let's learn about division!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is Division?



Division is sharing or grouping numbers!

When we divide, we split a number into equal groups.



## Examples



8 ÷ 2 = 4

This means: 8 shared equally into 2 groups = 4 in each group



10 ÷ 5 = 2

This means: 10 shared equally into 5 groups = 2 in each group



12 ÷ 3 = 4

This means: 12 shared equally into 3 groups = 4 in each group



## Practice



- Learn to divide by 2, 3, 4, and 5

- Practice sharing numbers equally

- Play the division game! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 3,
      title: "Fractions Introduction",
      emoji: '🍕',
      content: `# Fractions Introduction 🍕



Let's learn about fractions!



## How to Play



Tap the numbers to hear them! Then play the game! 🎮



## What is a Fraction?



A fraction shows part of a whole!



## Common Fractions



- Half (½) - One part out of two

- Quarter (¼) - One part out of four

- Third (⅓) - One part out of three



## Examples



- Half a pizza 🍕 = ½

- Quarter of a cake 🎂 = ¼

- Third of a chocolate bar 🍫 = ⅓



## Fun Activities



- Practice with fractions

- Draw fraction pictures

- Play the fraction game!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 4,
      title: "Subtraction Stories",
      emoji: '📖',
      content: `# Subtraction Stories 📖



Let's solve subtraction problems through fun stories with pictures!



## Story 1: The Cookie Jar 🍪



Emma had 12 cookies in her cookie jar. Her friend Tom came over and ate 5 cookies. How many cookies are left?



**Visual Representation:**



🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪  (12 cookies)



Tom ate 5 cookies: ❌ ❌ ❌ ❌ ❌



**Let's solve it step by step:**



**Start:**     🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪  = 12

**Eaten:**     ❌ ❌ ❌ ❌ ❌                      = -5

**Left:**      🍪 🍪 🍪 🍪 🍪 🍪 🍪              = 7



**Answer:** 12 - 5 = **7 cookies left!** 🎉



## Story 2: The Toy Box 🧸



Jake had 15 toy cars. He gave 8 toy cars to his little sister. How many toy cars does Jake have now?



**Visual Representation:**



🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗  (15 toy cars)



Given away: 🎁 🎁 🎁 🎁 🎁 🎁 🎁 🎁  (8 toy cars)



**Visual Calculation:**



**Start:**     🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗 🚗  = 15

**Given:**     🎁 🎁 🎁 🎁 🎁 🎁 🎁 🎁                      = -8

**Left:**      🚗 🚗 🚗 🚗 🚗 🚗 🚗                          = 7



**Answer:** 15 - 8 = **7 toy cars left!** 🎉



## Story 3: The Garden Flowers 🌸



There were 20 flowers in the garden. The wind blew away 6 flowers. How many flowers are still in the garden?



**Visual Representation:**



🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸  (20 flowers)



Blown away: 💨 💨 💨 💨 💨 💨  (6 flowers)



**Visual Calculation:**



**Start:**     🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸  = 20

**Blown:**     💨 💨 💨 💨 💨 💨                                      = -6

**Left:**      🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸            = 14



**Answer:** 20 - 6 = **14 flowers remaining!** 🌸



## Practice Questions



<!-- QUESTION_START -->
Sarah had 18 stickers. She used 9 stickers to decorate her notebook. How many stickers does Sarah have left?
<!-- OPTIONS -->
7 stickers|8 stickers|9 stickers|10 stickers
<!-- CORRECT -->
2
<!-- EXPLANATION -->
18 - 9 = 9. Sarah has 9 stickers left!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
A library had 25 books on the shelf. Students borrowed 7 books. How many books are still on the shelf?
<!-- OPTIONS -->
16 books|17 books|18 books|19 books
<!-- CORRECT -->
2
<!-- EXPLANATION -->
25 - 7 = 18. There are 18 books still on the shelf!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
There were 14 birds in a tree. 5 birds flew away. How many birds are still in the tree?
<!-- OPTIONS -->
7 birds|8 birds|9 birds|10 birds
<!-- CORRECT -->
2
<!-- EXPLANATION -->
14 - 5 = 9. There are 9 birds still in the tree!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is 16 - 8?
<!-- OPTIONS -->
6|7|8|9
<!-- CORRECT -->
2
<!-- EXPLANATION -->
16 - 8 = 8. When you take away 8 from 16, you get 8!
<!-- QUESTION_END -->



## Tips for Subtraction



- Draw pictures to help you visualize

- Count backwards if it helps

- Use your fingers to count

- Check your answer by adding: if 12 - 5 = 7, then 7 + 5 should equal 12!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 5,
      title: "Shapes and Patterns",
      emoji: '🔷',
      content: `# Shapes and Patterns 🔷



Let's explore shapes and discover patterns with visual examples!



## Common Shapes



### Square ⬜



**Visual Properties:**



⬜⬜⬜

⬜⬜⬜

⬜⬜⬜



- Has **4 equal sides** ↔️ ↔️ ↔️ ↔️

- Has **4 corners** (vertices) 📍 📍 📍 📍

- All angles are the same (90°)

- **Examples:** 🪟 windows, 🧩 tiles, 📱 picture frames



### Circle ⭕



**Visual Properties:**



    ⭕

  ⭕ ⭕ ⭕

    ⭕



- **Round shape** - perfectly curved

- **No corners** - smooth all around

- All points are the same distance from the center

- **Examples:** 🎡 wheels, 🪙 coins, 🍽️ plates



### Triangle 🔺



**Visual Properties:**



    🔺

   🔺 🔺

  🔺 🔺 🔺



- Has **3 sides** ↔️ ↙️ ↗️

- Has **3 corners** (vertices) 📍 📍 📍

- Can be different sizes: 🔺 🔺🔺 🔺🔺🔺

- **Examples:** 🏠 roof tops, 🍕 pizza slices, 🚦 road signs



### Rectangle ▬



**Visual Properties:**



▬▬▬▬▬▬

▬▬▬▬▬▬

▬▬▬▬▬▬



- Has **4 sides** ↔️ ↔️ ↕️ ↕️

- Opposite sides are equal

- Has **4 corners** 📍 📍 📍 📍

- **Examples:** 🚪 doors, 📚 books, 📱 phones



## Patterns in Shapes



### Visual Pattern 1: Shape Sequence



Look at this pattern:



🔷 ⬜ 🔷 ⬜ 🔷 ⬜ ?



**What comes next?** That's right - **🔷**!



The pattern repeats: **diamond, square, diamond, square...**



### Visual Pattern 2: Color and Shape



🔴 🔵 🔴 🔵 🔴 🔵 ?



**What comes next?** **🔴** (red circle)!



### Visual Pattern 3: Size Pattern



🔺 🔺🔺 🔺 🔺🔺 🔺 ?



**What comes next?** **🔺🔺🔺** (big triangle)!



## Number Patterns with Visuals



### Pattern 1: Counting by 2s



**Visual Representation:**



2  →  🟢🟢

4  →  🟢🟢🟢🟢

6  →  🟢🟢🟢🟢🟢🟢

8  →  🟢🟢🟢🟢🟢🟢🟢🟢

10 →  🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢



**Number pattern:** 2, 4, 6, 8, 10, 12, 14...

**Rule:** Add 2 each time! ➕2



### Pattern 2: Counting by 5s



**Visual Representation:**



5  →  ⭐⭐⭐⭐⭐

10 →  ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

15 →  ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐

20 →  ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐ ⭐⭐⭐⭐⭐



**Number pattern:** 5, 10, 15, 20, 25, 30...

**Rule:** Add 5 each time! ➕5



### Pattern 3: Counting by 10s



**Visual Representation:**



10 →  🔟

20 →  🔟🔟

30 →  🔟🔟🔟

40 →  🔟🔟🔟🔟



**Number pattern:** 10, 20, 30, 40, 50, 60...

**Rule:** Add 10 each time! ➕10



## Practice Questions



<!-- QUESTION_START -->
What shape has 3 sides and 3 corners?
<!-- OPTIONS -->
Square|Circle|Triangle|Rectangle
<!-- CORRECT -->
2
<!-- EXPLANATION -->
A triangle has 3 sides and 3 corners (vertices)!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Look at this pattern: 5, 10, 15, 20, ? What number comes next?
<!-- OPTIONS -->
21|22|25|30
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The pattern is counting by 5s. After 20 comes 25!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What shape is round with no corners?
<!-- OPTIONS -->
Square|Circle|Triangle|Rectangle
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A circle is round and has no corners!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Look at this pattern: 2, 4, 6, 8, ? What number comes next?
<!-- OPTIONS -->
9|10|11|12
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The pattern is counting by 2s. After 8 comes 10!
<!-- QUESTION_END -->



## Fun Activities



- Look for shapes around your house

- Create your own patterns

- Draw patterns with shapes and colors

- Find patterns in nature!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 6,
      title: "Money Math",
      emoji: '💰',
      content: `# Money Math 💰



Let's learn to count and use money with visual examples!



## UK Coins



### Coins We Use (Visual Guide)



**Small Coins (Copper):**

- **1p** 🪙 - Smallest coin, copper color

- **2p** 🪙🪙 - Copper color, slightly bigger



**Silver Coins:**

- **5p** ⚪ - Small silver coin

- **10p** ⚪⚪ - Silver coin

- **20p** ⚪⚪⚪⚪ - Silver coin, seven-sided

- **50p** ⚪⚪⚪⚪⚪ - Silver coin, seven-sided



**Large Coins:**

- **£1** 🟡 - Gold-colored coin (100p)

- **£2** 🟡🟡 - Silver and gold coin (200p)



## Counting Money



### Example 1: Counting Coins (Visual)



You have these coins: 10p + 10p + 5p + 2p + 1p



**Visual Representation:**



⚪⚪  +  ⚪⚪  +  ⚪  +  🪙🪙  +  🪙

10p     10p     5p      2p       1p



**Step-by-Step Calculation:**



**Step 1:** Add 10p coins

⚪⚪ + ⚪⚪ = 20p

**Step 2:** Add the rest

20p + ⚪ + 🪙🪙 + 🪙 = 20 + 5 + 2 + 1 = 28p



**Answer:** You have **28 pence (28p)** 💰



### Example 2: Making £1 (Visual)



How many 10p coins make £1?



**Visual Representation:**



£1 = 100p

We need: ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪ ⚪⚪

         10  20  30  40  50  60  70  80  90  100



**Calculation:**



**Remember:** £1 = 100p

**So:** 100p ÷ 10p = **10 coins**



**Answer:** You need **10 ten-pence coins** to make £1! 🎉



### Example 3: Buying Something (Visual)



A toy costs 45p. You have 3 coins: 20p, 20p, and 10p.



**Visual Representation:**



**Your Money:**        ⚪⚪⚪⚪  +  ⚪⚪⚪⚪  +  ⚪⚪

                   20p        20p        10p

                   = 50p total

**Toy Cost:**          45p 💸



**Step-by-Step:**



**Step 1:** Count your money

⚪⚪⚪⚪ + ⚪⚪⚪⚪ + ⚪⚪ = 20 + 20 + 10 = 50p

**Step 2:** Compare

50p > 45p ✓ (You have enough!)

**Step 3:** Calculate change

50p - 45p = 5p change



**Answer:** Yes, you can buy it! You'll get **5p change**! 🎉



## Practice Questions



<!-- QUESTION_START -->
You have 2 coins of 20p each. How much money do you have in total?
<!-- OPTIONS -->
30p|40p|50p|60p
<!-- CORRECT -->
1
<!-- EXPLANATION -->
20p + 20p = 40p. You have 40 pence in total!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
A pencil costs 15p. You have 10p and 5p. Can you buy the pencil?
<!-- OPTIONS -->
Yes, with 5p change|Yes, with no change|No, you need more money|No, you have too much
<!-- CORRECT -->
1
<!-- EXPLANATION -->
10p + 5p = 15p. You have exactly 15p, so you can buy it with no change!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
How many 5p coins do you need to make 25p?
<!-- OPTIONS -->
3 coins|4 coins|5 coins|6 coins
<!-- CORRECT -->
2
<!-- EXPLANATION -->
25p ÷ 5p = 5. You need 5 five-pence coins to make 25p!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
You want to buy a sticker that costs 30p. You have 20p, 10p, and 5p. Can you buy it?
<!-- OPTIONS -->
Yes, with 5p change|Yes, with no change|No, you need more money|No, you have too much
<!-- CORRECT -->
0
<!-- EXPLANATION -->
20p + 10p + 5p = 35p. You have 35p, which is more than 30p, so you can buy it with 5p change!
<!-- QUESTION_END -->



## Money Tips



- Always count your coins carefully

- Check if you have enough before buying

- Learn to recognize different coins

- Practice making different amounts!`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 7,
      title: "Time and Clocks",
      emoji: '🕐',
      content: `# Time and Clocks 🕐



Let's learn to tell time with visual clock faces!



## Parts of a Clock



### The Clock Face (Visual)



        12

    11      1

  10    🕐    2

9             3

  8           4

    7       5

        6



**Key Parts:**

- **Hour hand** (short hand ⏰) - Shows the hour

- **Minute hand** (long hand ⏰) - Shows the minutes

- **Numbers** - 1 through 12 around the clock

- **12** is at the top ⬆️, **6** is at the bottom ⬇️



## Reading the Time



### Step 1: Look at the Hour Hand ⏰



The hour hand points to the hour. If it's between two numbers, we use the smaller number.



### Step 2: Look at the Minute Hand ⏰



The minute hand shows minutes. Each number represents 5 minutes:

- **1** = 5 minutes ⏰

- **2** = 10 minutes ⏰⏰

- **3** = 15 minutes (quarter past) ⏰⏰⏰

- **6** = 30 minutes (half past) ⏰⏰⏰⏰⏰⏰

- **9** = 45 minutes (quarter to) ⏰⏰⏰⏰⏰⏰⏰



## Telling Time Examples (Visual)



### Example 1: 3 o'clock 🕐



**Visual Clock:**

        12

    11      1

  10         2

9      ⏰      3

  8           4

    7       5

        6



- **Hour hand:** pointing at 3 ⏰

- **Minute hand:** pointing at 12 ⏰

- **Time:** **3:00** or "three o'clock"



### Example 2: Half Past 2 🕐



**Visual Clock:**

        12

    11      1

  10         2

9             3

  8      ⏰    4

    7       5

        6



- **Hour hand:** halfway between 2 and 3 ⏰

- **Minute hand:** pointing at 6 ⏰

- **Time:** **2:30** or "half past two"



### Example 3: Quarter Past 4 🕐



**Visual Clock:**

        12

    11      1

  10         2

9             3

  8           4

    7      ⏰  5

        6



- **Hour hand:** just past 4 ⏰

- **Minute hand:** pointing at 3 ⏰

- **Time:** **4:15** or "quarter past four"



### Example 4: Quarter To 5 🕐



**Visual Clock:**

        12

    11      1

  10         2

9             3

  8           4

    7       5

        6



- **Hour hand:** almost at 5 ⏰

- **Minute hand:** pointing at 9 ⏰

- **Time:** **4:45** or "quarter to five"



## Daily Time Activities



- **Morning:** 7:00 - Wake up time

- **School:** 9:00 - School starts

- **Lunch:** 12:00 - Noon, lunch time

- **Afternoon:** 3:00 - School ends

- **Evening:** 6:00 - Dinner time

- **Night:** 8:00 - Bedtime



## Practice Questions



<!-- QUESTION_START -->
If the hour hand is at 3 and the minute hand is at 12, what time is it?
<!-- OPTIONS -->
3:00|3:15|3:30|3:45
<!-- CORRECT -->
0
<!-- EXPLANATION -->
When the hour hand is at 3 and the minute hand is at 12, it's 3:00 or "three o'clock"!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What time is "half past 5"?
<!-- OPTIONS -->
5:00|5:15|5:30|5:45
<!-- CORRECT -->
2
<!-- EXPLANATION -->
"Half past 5" means 5:30. The minute hand would be at 6 (which is 30 minutes)!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
If it's 4:15, where is the minute hand pointing?
<!-- OPTIONS -->
At 3|At 6|At 9|At 12
<!-- CORRECT -->
0
<!-- EXPLANATION -->
At 4:15 (quarter past 4), the minute hand points at 3, which represents 15 minutes!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What time is "quarter to 6"?
<!-- OPTIONS -->
5:15|5:30|5:45|6:00
<!-- CORRECT -->
2
<!-- EXPLANATION -->
"Quarter to 6" means 5:45. It's 15 minutes (a quarter) before 6 o'clock!
<!-- QUESTION_END -->



## Time Tips



- Practice reading clocks around your house

- Notice what time you do different activities

- Use both digital and analog clocks

- Remember: quarter = 15 minutes, half = 30 minutes!`,
      quizId: quizId++,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 8,
      title: "Place Value to 1000",
      emoji: '🔢',
      content: `# Place Value to 1000 🔢

Let's learn about place value up to 1000!

## What is Place Value?

Place value tells us what each digit means!

In the number 234:
- The 2 is in the hundreds place (worth 200)
- The 3 is in the tens place (worth 30)
- The 4 is in the ones place (worth 4)

## Examples

- 156 = 1 hundred + 5 tens + 6 ones
- 789 = 7 hundreds + 8 tens + 9 ones
- 305 = 3 hundreds + 0 tens + 5 ones

## How to Play

Drag digits and type expanded form! 🎮`,
      quizId: quizId++,
      assessmentType: 'place-value-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 9,
      title: "Addition with Regrouping",
      emoji: '➕',
      content: `# Addition with Regrouping ➕

Let's learn to add with carrying!

## What is Regrouping?

When we add and get 10 or more in a column, we carry to the next place!

## Example

  25
+ 17
---
  42

- 5 + 7 = 12 (write 2, carry 1)
- 2 + 1 + 1 = 4

## How to Play

Type column addition and drag carrying! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 10,
      title: "Subtraction with Regrouping",
      emoji: '➖',
      content: `# Subtraction with Regrouping ➖

Let's learn to subtract with borrowing!

## What is Borrowing?

When we subtract and need more, we borrow from the next place!

## Example

  32
- 15
---
  17

- Can't do 2 - 5, so borrow from 3
- 12 - 5 = 7
- 2 - 1 = 1

## How to Play

Type column subtraction and drag borrowing! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 11,
      title: "3D Shapes",
      emoji: '🎲',
      content: `# 3D Shapes 🎲

Let's learn about 3D shapes!

## Common 3D Shapes

- Cube 🎲 - 6 square faces
- Sphere ⚪ - round, no edges
- Cylinder 🥫 - round sides, flat ends
- Cone 🍦 - round base, pointy top

## Properties

3D shapes have:
- Faces (flat surfaces)
- Edges (where faces meet)
- Vertices (corners)

## How to Play

Click shapes and drag to match properties! 🎮`,
      quizId: quizId++,
      assessmentType: 'shape-matching-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 12,
      title: "Perimeter",
      emoji: '📐',
      content: `# Perimeter 📐

Let's learn about perimeter!

## What is Perimeter?

Perimeter is the distance around a shape!

## How to Find Perimeter

Add up all the sides!

## Examples

- Square: 4 + 4 + 4 + 4 = 16
- Rectangle: 5 + 3 + 5 + 3 = 16
- Triangle: 3 + 4 + 5 = 12

## How to Play

Click grid squares and type the perimeter! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 13,
      title: "Fractions on Number Line",
      emoji: '📏',
      content: `# Fractions on Number Line 📏

Let's learn to place fractions on a number line!

## Number Lines

A number line helps us see where numbers belong!

## Fractions on Number Line

- 1/2 is halfway between 0 and 1
- 1/4 is one quarter of the way
- 3/4 is three quarters of the way

## Examples

0 ----1/4----1/2----3/4----1

## How to Play

Drag fractions to their positions! 🎮`,
      quizId: quizId++,
      assessmentType: 'number-line-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 14,
      title: "Time: Quarter Past/To",
      emoji: '🕐',
      content: `# Time: Quarter Past/To 🕐

Let's learn quarter past and quarter to!

## Quarter Past

- 15 minutes past the hour
- Minute hand at 3
- Examples: quarter past 3, quarter past 7

## Quarter To

- 15 minutes before the hour
- Minute hand at 9
- Examples: quarter to 4, quarter to 8

## How to Play

Drag clock hands and type the time! 🎮`,
      quizId: quizId++,
      assessmentType: 'clock-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 15,
      title: "Mass and Capacity",
      emoji: '⚖️',
      content: `# Mass and Capacity ⚖️

Let's learn about mass and capacity!

## Mass (Weight)

- Grams (g) - light things
- Kilograms (kg) - heavier things
- 1 kg = 1000 g

## Capacity (Volume)

- Milliliters (mL) - small amounts
- Liters (L) - larger amounts
- 1 L = 1000 mL

## Examples

- An apple: about 150 g
- A bottle of water: 500 mL

## How to Play

Drag scales and click measurements! 🎮`,
      quizId: quizId++,
      assessmentType: 'maths-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 16,
      title: "Bar Charts",
      emoji: '📊',
      content: `# Bar Charts 📊

Let's learn to read and make bar charts!

## What is a Bar Chart?

A bar chart uses bars to show data!

## Reading Bar Charts

- Look at the height of each bar
- Compare different bars
- Find the tallest and shortest

## Making Bar Charts

- Choose categories
- Count the data
- Draw bars to show amounts

## How to Play

Click to add data and drag bars! 🎮`,
      quizId: quizId++,
      assessmentType: 'graph-builder-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'maths',
      lessonNumber: 17,
      title: "Word Problems: Addition/Subtraction",
      emoji: '📝',
      content: `# Word Problems: Addition/Subtraction 📝

Let's solve word problems!

## What are Word Problems?

Word problems are math stories that need solving!

## Steps to Solve

1. Read the problem carefully
2. Find the numbers
3. Decide: add or subtract?
4. Solve the problem
5. Check your answer

## Examples

- "Sarah has 15 stickers. She gets 8 more. How many does she have?" (Add: 15 + 8 = 23)
- "Tom has 20 toys. He gives away 7. How many are left?" (Subtract: 20 - 7 = 13)

## How to Play

Type answers and click operations! 🎮`,
      quizId: quizId++,
      assessmentType: 'typing-math-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 1,
      title: "Prehistoric Britain - Stone Age to Iron Age",
      emoji: '🪨',
      content: `# Prehistoric Britain - Stone Age to Iron Age 🪨



Let's learn about prehistoric Britain!



## Stone Age Britain



- People lived in Britain thousands of years ago

- They used stone tools

- They lived in caves and simple shelters

- They hunted and gathered food



## Bronze Age



- People learned to use bronze

- Bronze is a metal

- They made better tools

- They made weapons and jewelry



## Iron Age



- People learned to use iron

- Iron is stronger than bronze

- They made even better tools

- They built hill forts



## Hill Forts



- People built forts on hills

- They protected people

- They had walls around them

- They were safe places



## Celtic People



- Celtic people lived in Britain

- They had their own culture

- They made beautiful art

- They had their own language



## Fun Activities



- Draw prehistoric Britain

- Make a timeline

- Learn about hill forts

- Write about prehistoric life



## Remember



- Prehistoric Britain was long ago

- People used stone, bronze, and iron

- They built hill forts

- Celtic people lived there!



## Practice Questions



<!-- QUESTION_START -->
What material did people use first in prehistoric Britain?
<!-- OPTIONS -->
Stone|Bronze|Iron|Steel
<!-- CORRECT -->
0
<!-- EXPLANATION -->
People first used stone tools in the Stone Age, before learning to use bronze and then iron!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did people build on hills during the Iron Age?
<!-- OPTIONS -->
Caves|Hill forts|Temples|Bridges
<!-- CORRECT -->
1
<!-- EXPLANATION -->
People built hill forts on hills during the Iron Age to protect themselves. These were safe places with walls around them!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which metal is stronger: bronze or iron?
<!-- OPTIONS -->
Bronze|Iron|They are the same|Neither
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Iron is stronger than bronze! That's why people started using iron after the Bronze Age.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who lived in Britain during prehistoric times?
<!-- OPTIONS -->
Romans|Celtic people|Vikings|Anglo-Saxons
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Celtic people lived in Britain during prehistoric times. They had their own culture, language, and made beautiful art!
<!-- QUESTION_END -->`,
      quizId: 61,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 2,
      title: "Adam and Eve - The First People",
      emoji: '🍎',
      content: `# Adam and Eve - The First People 🍎

Let's learn about Adam and Eve through play!

## The Story

In the beginning, God created a beautiful garden called Eden. He placed Adam and Eve there to live happily.

God told them: "You may eat from ANY tree in the garden, but you must NOT eat from the Forbidden Tree."

## How to Play

Use **Arrow Keys** or **WASD** to move Adam around the Garden of Eden.

- Explore the beautiful garden
- Find the Forbidden Tree
- Learn what happens when we disobey God

## The Lesson

This story teaches us about:
- **Obedience** - Following God's instructions
- **Consequences** - What happens when we make wrong choices
- **God's Love** - Even when Adam and Eve disobeyed, God still loved them

## Remember

God always loves us, even when we make mistakes. But our choices have consequences!`,
      quizId: null,
      assessmentType: 'adam-eve-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 3,
      title: "Biblical History - Kings and Prophets",
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
      quizId: 70,
      assessmentType: 'history-game',
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



Let's learn about the Roman Empire!



## When Was Ancient Rome?



- Ancient Rome existed from about 753 BC to AD 476

- That's a very long time!

- It was a huge empire

- It covered much of Europe



## The Roman Empire



- Rome had a huge empire

- It covered many countries

- It was very powerful

- It lasted for hundreds of years



## Roman Army



- The Roman army was strong

- Soldiers were well trained

- They built roads

- They protected the empire



## Roman Roads



- Romans built amazing roads

- They were straight and strong

- They connected the empire

- Some still exist today!



## Roman Buildings



- Romans built amazing buildings

- The Colosseum is famous

- They built aqueducts for water

- They built many temples



## Roman Emperors



- Emperors ruled Rome

- They were very powerful

- Some were good, some were bad

- They controlled the empire



## Fun Activities



- Draw Roman buildings

- Learn about the army

- Make a map of the empire

- Write about ancient Rome



## Remember



- Rome had a huge empire

- The army was strong

- They built amazing things

- Rome was very powerful!



## Practice Questions



<!-- QUESTION_START -->
What was the Roman army known for?
<!-- OPTIONS -->
Being weak|Being strong and well-trained|Not building anything|Only fighting
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Roman army was strong and well-trained! Soldiers were very skilled, and they built roads and protected the empire!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What famous building did the Romans build?
<!-- OPTIONS -->
The Parthenon|The Colosseum|The Great Wall|The Pyramids
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Colosseum is a famous Roman building! Romans built amazing buildings, aqueducts for water, and many temples!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Romans build that connected their empire?
<!-- OPTIONS -->
Bridges|Roads|Tunnels|Canals
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Romans built amazing roads that were straight and strong! These roads connected the empire, and some still exist today!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who ruled the Roman Empire?
<!-- OPTIONS -->
Kings|Emperors|Presidents|Governors
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Emperors ruled Rome! They were very powerful and controlled the huge empire. Some were good, some were bad!
<!-- QUESTION_END -->`,
      quizId: 54,
      assessmentType: 'history-game',
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



Let's learn about how people lived in ancient Rome!



## Roman Homes



- Rich people: Large houses (villas)

- Poor people: Small apartments

- Houses had courtyards

- They had beautiful decorations



## Roman Baths



- Romans loved baths

- They went to public bathhouses

- They relaxed and talked

- Baths were social places



## Roman Food



- Romans ate different foods

- They ate bread and olives

- They ate fish and meat

- Rich people ate fancy meals



## Roman Entertainment



- Romans loved entertainment

- They watched gladiator fights

- They watched chariot races

- They went to the theater



## Roman Writing



- Romans wrote in Latin

- Latin was their language

- They wrote on scrolls

- Many languages come from Latin



## Fun Activities



- Draw Roman homes

- Learn about baths

- Draw Roman food

- Write about Roman life



## Remember



- Roman homes varied

- Romans loved baths

- They enjoyed entertainment

- Life was different then!



## Practice Questions



<!-- QUESTION_START -->
What did rich Romans live in?
<!-- OPTIONS -->
Small apartments|Large houses called villas|Caves|Tents
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Rich Romans lived in large houses called villas! Poor people lived in small apartments. Houses had courtyards and beautiful decorations!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Where did Romans go to relax and talk?
<!-- OPTIONS -->
The Colosseum|Public bathhouses|The market|The temple
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Romans loved baths and went to public bathhouses! They relaxed and talked there - baths were social places!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What did Romans watch for entertainment?
<!-- OPTIONS -->
Only plays|Gladiator fights and chariot races|Only sports|Nothing
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Romans loved entertainment! They watched gladiator fights, chariot races, and went to the theater!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What language did Romans write in?
<!-- OPTIONS -->
Greek|English|Latin|French
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Romans wrote in Latin! Latin was their language, and they wrote on scrolls. Many languages today come from Latin!
<!-- QUESTION_END -->`,
      quizId: 54,
      assessmentType: 'history-game',
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



Let's learn about why the Roman Empire fell!



## Why Rome Fell



- The empire was too big

- It was hard to control

- There were many problems

- It slowly fell apart



## Barbarian Invasions



- Barbarians attacked Rome

- They came from outside

- They wanted land

- They were strong warriors



## Problems in the Empire



- The empire was too large

- It was expensive to run

- There were many enemies

- It was hard to defend



## End of the Empire



- The empire split in two

- The western part fell first

- The eastern part lasted longer

- Rome fell in AD 476



## What Came After



- After Rome fell, things changed

- New kingdoms formed

- The Middle Ages began

- Europe changed forever



## Fun Activities



- Learn about the fall

- Make a timeline

- Write about what happened

- Learn about what came after



## Remember



- Rome fell for many reasons

- The empire was too big

- Barbarians attacked

- It was the end of an era!



## Practice Questions



<!-- QUESTION_START -->
Why was it hard for Rome to control its empire?
<!-- OPTIONS -->
It was too small|It was too big|It had no enemies|It had no problems
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The Roman Empire was too big! It was hard to control, expensive to run, and difficult to defend. This was one reason it fell!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Who attacked Rome from outside?
<!-- OPTIONS -->
Romans|Barbarians|Greeks|Egyptians
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Barbarians attacked Rome from outside! They were strong warriors who wanted land, and their attacks helped bring down the empire!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
When did Rome fall?
<!-- OPTIONS -->
AD 100|AD 476|AD 1000|BC 476
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Rome fell in AD 476! The western part of the empire fell first, while the eastern part lasted longer!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What began after Rome fell?
<!-- OPTIONS -->
The Renaissance|The Middle Ages|The Modern Age|The Stone Age
<!-- CORRECT -->
1
<!-- EXPLANATION -->
After Rome fell, the Middle Ages began! New kingdoms formed, and Europe changed forever!
<!-- QUESTION_END -->`,
      quizId: 61,
      assessmentType: 'history-game',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "TapTapTap: Advanced Level 1",
      emoji: '👆',
      content: `# TapTapTap: Advanced Level 1 👆

Time to step up your game! This level is faster and more challenging.

## How to Play

- Tap targets as they appear on screen
- Targets appear every 1.2 seconds (even faster!)
- Targets are smaller and move faster
- 30 seconds to score as many points as possible!

## Scoring System

- **Bronze**: 15-29 points
- **Silver**: 30-44 points
- **Gold**: 45-59 points
- **Platinum**: 60+ points

You need at least **Bronze** (15 points) to progress!

## Tips

- Stay focused - targets appear quickly
- Practice your hand-eye coordination
- Don't give up if you miss some - keep trying!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "TapTapTap: Advanced Level 2",
      emoji: '👆',
      content: `# TapTapTap: Advanced Level 2 👆

Keep challenging yourself! This level continues to build your skills.

## How to Play

- Tap targets as they appear
- Same speed as Level 1 - keep practicing!
- 30 seconds to score points

## Scoring System

- **Bronze**: 15-29 points
- **Silver**: 30-44 points
- **Gold**: 45-59 points
- **Platinum**: 60+ points

You need at least **Bronze** (15 points) to progress!

## Challenge

Can you beat your previous score? Aim for a higher medal!`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

  ];
}
