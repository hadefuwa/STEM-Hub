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



## Practice Questions



<!-- QUESTION_START -->
If you have 8 cookies and share them equally between 2 friends, how many cookies does each friend get?
<!-- OPTIONS -->
2 cookies|3 cookies|4 cookies|5 cookies
<!-- CORRECT -->
2
<!-- EXPLANATION -->
8 ÷ 2 = 4. Each friend gets 4 cookies!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is 10 ÷ 5?
<!-- OPTIONS -->
1|2|3|5
<!-- CORRECT -->
1
<!-- EXPLANATION -->
10 ÷ 5 = 2. When you divide 10 into 5 equal groups, each group has 2.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
If you have 12 apples and put them into 3 baskets equally, how many apples are in each basket?
<!-- OPTIONS -->
3 apples|4 apples|5 apples|6 apples
<!-- CORRECT -->
1
<!-- EXPLANATION -->
12 ÷ 3 = 4. Each basket will have 4 apples!
<!-- QUESTION_END -->



<!-- QUESTION_START -->
What is 15 ÷ 3?
<!-- OPTIONS -->
3|4|5|6
<!-- CORRECT -->
2
<!-- EXPLANATION -->
15 ÷ 3 = 5. When you divide 15 into 3 equal groups, each group has 5.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
If you have 20 stickers and share them equally between 4 friends, how many stickers does each friend get?
<!-- OPTIONS -->
3 stickers|4 stickers|5 stickers|6 stickers
<!-- CORRECT -->
2
<!-- EXPLANATION -->
20 ÷ 4 = 5. Each friend gets 5 stickers!
<!-- QUESTION_END -->



## Fun Activities



- Share objects equally with friends

- Practice division problems

- Draw pictures to help you divide!`,
      quizId: quizId++,
      assessmentType: 'interactive',
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
      assessmentType: 'interactive',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 1,
      title: "Writing Paragraphs",
      emoji: '📝',
      content: `# Writing Paragraphs 📝



Let's learn to write good paragraphs!



## What is a Paragraph?



A paragraph is a group of sentences about one main idea.



## Parts of a Paragraph



1. **Topic Sentence** - Tells what the paragraph is about

2. **Supporting Sentences** - Give details and examples

3. **Closing Sentence** - Wraps up the paragraph



## Example Paragraph



**My Favorite Animal**



My favorite animal is a dog. Dogs are friendly and loyal pets. They love to play and go for walks. Dogs can learn tricks and are great companions. I would love to have a dog one day.



## Writing Tips



- Start with a topic sentence

- Add 3-5 supporting sentences

- End with a closing sentence

- Stay on one topic



## Practice



Write a paragraph about:

- Your favorite hobby

- A place you like

- Your best friend

- Your favorite food



## Fun Activities



- Write paragraphs every day

- Share your paragraphs

- Edit and improve your writing

- Make a paragraph book



## Remember



- Paragraphs have a main idea

- Use topic and supporting sentences

- Practice makes perfect

- You're becoming a great writer!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 2,
      title: "Reading Comprehension Skills",
      emoji: '📚',
      content: `# Reading Comprehension Skills 📚



Let's improve our reading understanding!



## Reading Strategies



1. **Predict** - Guess what might happen

2. **Question** - Ask questions as you read

3. **Clarify** - Make sure you understand

4. **Summarize** - Tell the main points



## Finding Information



- **Who?** - Characters in the story

- **What?** - What happened

- **Where?** - The setting

- **When?** - The time period

- **Why?** - Reasons for events

- **How?** - How things happened



## Main Idea



The main idea is what the story or text is mostly about.



## Supporting Details



Details that support the main idea:

- Examples

- Facts

- Descriptions

- Events



## Practice



Read a story and:

- Find the main idea

- List supporting details

- Answer who, what, where, when, why, how

- Summarize in your own words



## Fun Activities



- Read and discuss stories

- Answer comprehension questions

- Write summaries

- Make story maps



## Remember



- Understanding is key

- Ask questions as you read

- Find the main idea

- Practice every day!`,
      quizId: quizId++,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'english',
      lessonNumber: 3,
      title: "Spelling and Vocabulary",
      emoji: '📖',
      content: `# Spelling and Vocabulary 📖



Let's learn new words and how to spell them!



## Learning New Words



- Read widely to find new words

- Look up words you don't know

- Use new words in sentences

- Practice spelling them



## Spelling Rules



**Adding -ing:**

- Most words: add -ing (play → playing)

- Words ending in e: drop e, add -ing (make → making)

- Short vowel + consonant: double consonant (run → running)



**Adding -ed:**

- Most words: add -ed (walk → walked)

- Words ending in e: add -d (like → liked)

- Short vowel + consonant: double consonant (stop → stopped)



## Common Words to Learn



- beautiful, because, before

- different, difficult, during

- enough, every, everyone

- friend, favorite, family



## Practice



- Spell words every day

- Use spelling patterns

- Write words in sentences

- Test yourself



## Fun Activities



- Make word lists

- Play spelling games

- Use words in stories

- Create vocabulary cards



## Remember



- Spelling takes practice

- Learn spelling patterns

- Use new words often

- You're improving every day!`,
      quizId: quizId++,
      assessmentType: 'quiz',
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

- Celtic people lived there!`,
      quizId: 61,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 2,
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

- These are important stories!`,
      quizId: 61,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 3,
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

- They influenced the world!`,
      quizId: 70,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 4,
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

- Greeks loved art and theater!`,
      quizId: 70,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 5,
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

- Rome was very powerful!`,
      quizId: 54,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 6,
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

- Life was different then!`,
      quizId: 54,
      assessmentType: 'quiz',
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year3',
      subjectId: 'history',
      lessonNumber: 7,
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

- It was the end of an era!`,
      quizId: 61,
      assessmentType: 'quiz',
      categoryId: null,
    })

  ];
}
