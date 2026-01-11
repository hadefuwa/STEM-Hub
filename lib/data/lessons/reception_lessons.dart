import '../../models/lesson.dart';

List<Lesson> getReceptionLessons(int startLessonId, int startQuizId) {
  int lessonId = startLessonId;
  int quizId = startQuizId;

  return [
    Lesson(

      id: lessonId++,

      yearId: 'reception',

      subjectId: 'maths',

      lessonNumber: 1,

      title: 'Recognising Numbers',

      emoji: '🔢',

      content: '''

# Recognising Numbers



Let's learn to recognise numbers!



## Numbers 1-5



1️⃣ One

2️⃣ Two

3️⃣ Three

4️⃣ Four

5️⃣ Five



## Practice



Point to the number 3!

      ''',

      quizId: quizId++,

      assessmentType: 'challenge',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'reception',

      subjectId: 'english',

      lessonNumber: 1,

      title: 'Phonics: Letter Sounds',

      emoji: '🔊',

      content: '''

# Phonics: Letter Sounds 🔤



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

- Practice every day!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'reception',

      subjectId: 'english',

      lessonNumber: 2,

      title: 'Reading Simple Sentences',

      emoji: '📖',

      content: '''

# Reading Simple Sentences 📖



Let's read simple sentences together!



## Simple Sentences



The cat sat. 🐱

The dog ran. 🐶

I can hop. 🦘

We like to play. 🎮



## More Sentences



I see a sun. ☀️

The hat is red. 🎩

We go to school. 🏫

I like my toy. 🧸



## Reading Tips



1. Look at each word

2. Sound out the letters

3. Blend the sounds together

4. Read the whole sentence



## Fun Activities



- Read sentences together

- Draw pictures for sentences

- Make your own sentences

- Read simple storybooks



## Remember



- Sentences start with a capital letter

- Sentences end with a full stop

- Reading is fun!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

    Lesson(

      id: lessonId++,

      yearId: 'reception',

      subjectId: 'english',

      lessonNumber: 3,

      title: 'Writing My Name',

      emoji: '✏️',

      content: '''

# Writing My Name ✏️



Let's learn to write your name!



## Your Name is Special



Your name is unique - it belongs to you!



## How to Write Your Name



1. Start with a capital letter

2. Write the rest in lowercase

3. Take your time

4. Practice makes perfect!



## Practice Writing



- Trace your name

- Copy your name

- Write your name from memory

- Write your name in different colors



## Fun Activities



- Write your name on paper

- Write your name in sand or playdough

- Make name cards

- Write your name on drawings



## Remember



- Your name is important

- Practice writing every day

- You can do it!

      ''',

      quizId: quizId++,

      assessmentType: 'quiz',

    ),

  ];
}
