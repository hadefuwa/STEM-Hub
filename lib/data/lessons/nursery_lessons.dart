import '../../models/lesson.dart';

List<Lesson> getNurseryLessons(int startLessonId, int startQuizId) {
  int lessonId = startLessonId;
  int quizId = startQuizId;

  return [
    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'maths',

      lessonNumber: 1,

      title: 'Counting to 10',

      emoji: '🔢',

      content: '''

# Counting to 10



Let's learn to count from 1 to 10!



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



## Practice Counting



Count along with me:

- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!



## Fun Activities



- Count your fingers! How many do you have?

- Count your toes! How many are there?

- Count objects around you: toys, books, crayons!



## Remember



- Numbers help us count things

- We start counting from 1

- 10 is the biggest number we're learning today

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'maths',

      lessonNumber: 2,

      title: 'Counting to 20',

      emoji: '🔢',

      content: '''

# Counting to 20



Now let's learn to count even higher - from 1 to 20!



## Numbers 1-20



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

1️⃣1️⃣ Eleven

1️⃣2️⃣ Twelve

1️⃣3️⃣ Thirteen

1️⃣4️⃣ Fourteen

1️⃣5️⃣ Fifteen

1️⃣6️⃣ Sixteen

1️⃣7️⃣ Seventeen

1️⃣8️⃣ Eighteen

1️⃣9️⃣ Nineteen

2️⃣0️⃣ Twenty



## Practice Counting



Count along with me:

- 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20!



## Fun Activities



- Count all your fingers and toes together! (That's 20!)

- Count steps as you walk

- Count blocks as you build a tower

- Count animals in a picture book



## Remember



- After 10, we have 11, 12, 13, and so on

- 20 is a big number!

- Practice counting every day to get better

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'technology',

      lessonNumber: 1,

      title: 'Clicking Game',

      emoji: '🎯',

      content: '''

# Clicking Game 🎯



Welcome to the Accuracy Clicking Game!



## How to Play



- Click on the red circles as they appear on the screen

- The circles start large and get smaller and faster as time goes on

- You have 30 seconds to score as many points as possible

- Each circle you click gives you 10 points



## Scoring System



- **Bronze**: 0-99 points

- **Silver**: 100-199 points

- **Gold**: 200-299 points

- **Platinum**: 300+ points



## Ready to Play?



Click the button below to start the game!

      ''',

      quizId: null,

      assessmentType: null,

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'technology',

      lessonNumber: 2,

      title: 'Keyboard Game',

      emoji: '⌨️',

      content: '''

# Keyboard Game ⌨️



Welcome to the Keyboard Game!



## How to Play



- Watch for arrows that appear on the screen ⬆️⬇️⬅️➡️

- Press the matching key on your keyboard

- Use **WASD** keys or **Arrow Keys**

- You have 45 seconds to score as many points as possible!

- Each correct key press gives you 10 points



## Controls



- **⬆️ Up Arrow** = Press **↑** or **W**

- **⬇️ Down Arrow** = Press **↓** or **S**

- **⬅️ Left Arrow** = Press **←** or **A**

- **➡️ Right Arrow** = Press **→** or **D**



## Scoring System



- **Bronze**: 0-99 points

- **Silver**: 100-149 points

- **Gold**: 150-199 points

- **Platinum**: 200+ points



## Ready to Play?



Click the button below to start the game!

      ''',

      quizId: null,

      assessmentType: null,

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'english',

      lessonNumber: 1,

      title: 'Learning the Alphabet',

      emoji: '🔤',

      content: '''

# Learning the Alphabet 🔤



Let's learn our ABCs!



## The Alphabet Song



A, B, C, D, E, F, G

H, I, J, K, L, M, N, O, P

Q, R, S, T, U, V

W, X, Y, and Z



## Letters A-E



A is for Apple 🍎

B is for Ball ⚽

C is for Cat 🐱

D is for Dog 🐶

E is for Elephant 🐘



## Fun Activities



- Sing the alphabet song together!

- Point to letters in books

- Find letters around the house

- Trace letters with your finger



## Remember



- There are 26 letters in the alphabet

- Each letter has a name and a sound

- We use letters to make words!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'english',

      lessonNumber: 2,

      title: 'Learning Letter Sounds',

      emoji: '🔊',

      content: '''

# Learning Letter Sounds 🔊



Letters make sounds! Let's learn some!



## Letter Sounds



A says "ah" like in Apple 🍎

B says "buh" like in Ball ⚽

C says "cuh" like in Cat 🐱

D says "duh" like in Dog 🐶

E says "eh" like in Elephant 🐘



## More Sounds



F says "fuh" like in Fish 🐟

G says "guh" like in Goat 🐐

H says "huh" like in Hat 🎩

I says "ih" like in Igloo 🧊

J says "juh" like in Jam 🍓



## Practice



- Make the sound for each letter

- Find things that start with each sound

- Play "I spy" with letter sounds!



## Remember



- Every letter has a sound

- Sounds help us read words

- Practice makes perfect!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'english',

      lessonNumber: 3,

      title: 'Simple Words',

      emoji: '📖',

      content: '''

# Simple Words 📖



Let's learn some simple words!



## Three-Letter Words



Cat 🐱 - C-A-T

Dog 🐶 - D-O-G

Hat 🎩 - H-A-T

Sun ☀️ - S-U-N

Car 🚗 - C-A-R



## More Words



Ball ⚽ - B-A-L-L

Book 📚 - B-O-O-K

Cup ☕ - C-U-P

Pen ✏️ - P-E-N

Toy 🧸 - T-O-Y



## Fun Activities



- Read simple words together

- Point to words in picture books

- Make words with letter blocks

- Draw pictures of words



## Remember



- Words are made of letters

- Letters make sounds

- Sounds make words!

- Reading is fun!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'history',

      lessonNumber: 1,

      title: 'My Family History',

      emoji: '👨‍👩‍👧‍👦',

      content: '''

# My Family History 👨‍👩‍👧‍👦



Everyone has a family! Let's learn about yours!



## What is a Family?



A family is people who love and care for each other!



- Mummy and Daddy 👨‍👩‍👧‍👦

- Brothers and Sisters 👫

- Grandparents 👴👵

- Aunts and Uncles 👨‍👨‍👧

- Cousins 👨‍👩‍👦



## Family Photos



Look at old family photos together!

- Who is in the picture?

- What were they doing?

- How old were they?



## Fun Activities



- Draw a picture of your family

- Ask grown-ups about when they were little

- Look at baby photos

- Make a family tree with pictures



## Remember



- Families are special

- Everyone has a family history

- Stories from the past are important!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'history',

      lessonNumber: 2,

      title: 'Growing Up',

      emoji: '📸',

      content: '''

# Growing Up 📸



You are growing bigger every day!



## When You Were a Baby



- You were very small 👶

- You couldn't walk yet

- You needed help with everything

- You learned to crawl, then walk!



## Now You Are Bigger



- You can walk and run! 🏃

- You can talk and sing! 🎵

- You can play and learn! 🎮

- You are getting smarter every day!



## Fun Activities



- Look at your baby photos

- See how much you've grown!

- Draw a picture of yourself as a baby

- Draw a picture of yourself now



## Remember



- Everyone grows and changes

- You learn new things every day

- Growing up is exciting!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'nursery',

      subjectId: 'history',

      lessonNumber: 3,

      title: 'Days of the Week',

      emoji: '📅',

      content: '''

# Days of the Week 📅



There are seven days in a week!



## The Seven Days



1. Monday - Start of the week! 🌟

2. Tuesday - Keep going! 💪

3. Wednesday - Middle of the week! 🎯

4. Thursday - Almost there! ⏰

5. Friday - Fun day! 🎉

6. Saturday - Weekend! 🎊

7. Sunday - Rest day! 😴



## What We Do Each Day



- Monday: School starts! 📚

- Tuesday: Learning new things! 🎓

- Wednesday: Mid-week fun! 🎨

- Thursday: More learning! ✏️

- Friday: End of school week! 🎈

- Saturday: Play time! 🧸

- Sunday: Family time! 👨‍👩‍👧‍👦



## Fun Activities



- Sing the days of the week song

- Point to today on a calendar

- Draw what you do each day

- Count the days until the weekend!



## Remember



- There are 7 days in a week

- Each day has a name

- Days help us know what to do!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

  ];
}
