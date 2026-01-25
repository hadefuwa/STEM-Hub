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
      subjectId: 'history',
      lessonNumber: 1,
      title: "The Dark Ages - After Rome",
      emoji: '🌑',
      content: `# The Dark Ages - After Rome 🌑

When the Roman Empire collapsed around AD 476, Europe entered a period often called the "Dark Ages." This wasn't because the sun stopped shining, but because many of the records and learning of Rome were lost.

## The Arrival of the Anglo-Saxons
As Roman soldiers left Britain, tribes from Germany and Denmark—the **Angles, Saxons, and Jutes**—began to settle. They built small wooden villages and established kingdoms like Wessex and Mercia.

## The Viking Age
Starting around AD 793, fierce explorers and warriors from Scandinavia (the Vikings) began to raid the coasts of Britain and Europe. They were skilled sailors who traveled in "Longships" that could navigate both the open sea and shallow rivers.

## Monasteries: Libraries of the Past
In a time when few could read, monks in monasteries became the keepers of knowledge. They spent their lives copying books by hand, creating beautiful "Illuminated Manuscripts."

In the game, you will explore this era of transition. Learn about the technology of the Viking ships, the lifestyle of the Anglo-Saxons, and the legendary King Alfred the Great!`,
      quizId: null,
      assessmentType: null,
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
      quizId: null,
      assessmentType: null,
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

The Middle Ages (AD 500 – 1500) was a time of massive stone fortresses, courageous knights, and a strict social hierarchy.

## Castle Architecture: Built for Defense
Castles weren't just homes for royalty; they were military machines designed to withstand long sieges.
- **The Keep**: The inner-most stronghold, built with walls often 4 meters thick.
- **The Moat**: A deep watery barrier to stop enemies from using battering rams or ladders.
- **Machicolations**: Overhanging gaps in the walls where defenders could drop rocks or boiling oil on attackers!

## The Feudal System: A Social Ladder
Society was organized like a pyramid, with every person knowing their place.
1. **The King**: Owned all the land and gave portions to Nobles.
2. **The Nobles (Lords)**: Provided the King with military service and knights.
3. **The Knights**: Professional warriors who followed the code of **Chivalry** (bravery, honesty, and protecting the weak).
4. **The Peasants (Serfs)**: Worked the land and produced food, receiving protection in return.

In the game, you will explore the defenses of a medieval castle and then prove your knowledge by organizing the Feudal System for the King!`,
      quizId: null,
      assessmentType: null,
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

In the 13th century, life for the average person was a cycle of hard work, strong community ties, and a deep connection to the land.

## The Village Community
90% of people lived in small rural villages. Everything was done by hand. Neighbors helped each other plough the "strip fields" and gather the harvest.
- **The Church**: The center of village life, used for worship, community meetings, and even festivals.
- **The Manor House**: Where the Lord lived and where the local court was held.

## Working the Land
Peasants were either **Freemen** (who paid rent) or **Serfs** (who belonged to the land). They grew wheat for bread and barley for ale. The "Three-Field System" was used, where one field was left empty (fallow) each year to let the soil recover.

## Food and Drink
- **Pottage**: A thick stew made of peas, beans, and vegetables.
- **Black Bread**: Made from rye or barley.
- **Ale**: Safe-to-drink fermented water, as clean river water was rare.

In the game, you will step into the boots of a villager. Can you complete the tasks needed to keep the community fed and thriving?`,
      quizId: null,
      assessmentType: null,
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

The Crusades were a series of religious wars between Christians and Muslims between 1095 and 1291. They were fought primarily for control of the "Holy Land" (modern-day Israel/Palestine), which was sacred to both religions.

## Motivations for the Journey
Thousands of people—from powerful kings to poor peasants—traveled over 3,000 miles to join the Crusades.
- **Faith**: Many believed that fighting in the Crusades would guarantee them a place in heaven.
- **Adventure**: For many knights, it was a chance to see the world and win glory.
- **Land**: Younger sons of nobles who wouldn't inherit land at home hoped to win their own estates in the East.

## Consequences of the Conflict
While the wars were violent, they led to an explosion of new knowledge in Europe.
- **Mathematics & Science**: Europeans learned about algebra, decimals, and advanced medicine from the Islamic world.
- **Trade**: Ships brought back silks, cotton, and exotic spices like cinnamon and pepper.
- **Culture**: New musical instruments and philosophical ideas reached Europe for the first time.

In the game, you will navigate the decisions and difficulties of a Crusader. Can you understand the legacy of these massive world events?`,
      quizId: null,
      assessmentType: null,
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

Florence, Rome, and Venice became creative laboratories between 1400 and 1600. Artists studied mathematics to draw realistic spaces, scientists tested new ideas, and explorers carried European technology across oceans.

## The Big Ideas

- **Humanism** – Scholars revisited Greek and Roman books to understand people, not only kings.
- **Perspective** – Artists used rulers and math to make flat walls feel three-dimensional.
- **Innovation** – Printing presses, new sails, and precise maps accelerated the spread of ideas.

## How to Play – Renaissance Studio Challenge

1. **Patronage Board**
    - Click an *Idea Card* (Medici funds, marble, pigments, etc.).
    - Click the city panel that needs that resource.
    - Florence, Rome, and Venice each require two different ingredients to flourish.
2. **Perspective Timeline**
    - Once the cities are stocked, rebuild the Renaissance timeline by selecting events from the earliest year to the latest.
3. **Invention Lab**
    - Mix the exact components that created the printing press, the scientific method, and bold voyages.
    - Lock in your choices to see whether the invention works!

Earn points in every phase. A perfect run scores 100%.

## Learning Goals

- Match patrons, artists, and resources to the Italian city that needed them most.
- Explain the order of key Renaissance breakthroughs.
- Describe how combining the right tools led to new inventions.

## Vocabulary

- **Patronage** – Money or protection that allows artists to focus on their craft.
- **Perspective** – A math-based way to show depth on a flat surface.
- **Humanism** – A focus on people, their choices, and classical ideas.

## Remember

- The Renaissance was a *rebirth* powered by cities working together.
- Art, science, and exploration are connected—changing one sparks the others.
- Asking better questions and testing ideas is what launches a new era!`,
      quizId: null,
      assessmentType: null,
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

In the 15th and 16th centuries, European explorers set out into the unknown, driven by a desire for riches, fame, and a faster route to the spices of the East.

## Global Trade and Spices
During the Middle Ages, spices like cinnamon, pepper, and cloves were as valuable as gold. They were used to preserve food and make it taste better. European kings wanted to bypass the expensive land routes (the Silk Road) and find a direct sea route to Asia.

## Modern Navigation Technology
New inventions allowed explorers to sail further than ever before:
- **The Compass**: Allowed sailors to find their direction even when they couldn't see the sun or stars.
- **The Astrolabe**: Helped sailors calculate their latitude (their distance from the Equator).
- **The Caravel**: A new type of faster, more maneuverable ship with triangular sails.

## The Columbian Exchange
The voyages of Columbus and others led to a massive exchange of plants, animals, and ideas between the "Old World" (Europe, Africa, Asia) and the "New World" (The Americas).
- **To Europe**: Potatoes, tomatoes, cocoa, and corn.
- **To the Americas**: Horses, cattle, wheat, and unfortunately, many new diseases.

In the game, you will follow the paths of great explorers and test your knowledge of how the world became connected!`,
      quizId: null,
      assessmentType: null,
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

The code is already written for you! Look at the code editor below - you'll see:

\`\`\`python
print("Hello, World!")
\`\`\`

**What does this do?**
- \`print()\` is a function that displays text
- The text in quotes is what gets shown
- When you run this code, you'll see: Hello, World!

## Try It Yourself

1. Look at the code in the editor below (it's already there!)
2. Click the "Run Code" button to see what happens
3. You should see "Hello, World!" appear in the output
4. Try changing the message to say hello to yourself!

<!-- EXERCISE_START -->
{
  "instruction": "The code is already written for you! Run it to see 'Hello, World!' appear. Then try changing the message to say hello to yourself!",
  "expectedContains": "Hello",
  "codePattern": null,
  "starterCode": "print(\"Hello, World!\")\\n# TODO: change the message to greet yourself"
}
<!-- EXERCISE_END -->

## Important Notes

- Python is case-sensitive (capital letters matter)
- Use quotes around text (strings)
- Save your work often
- Don't be afraid to experiment!`,
      quizId: null,
      assessmentType: null,
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

## Example Code to Guide You

Here's some example code that shows similar patterns you can use:

\`\`\`python
# Example: Printing different types of information
print("My favorite animal is a dog")
print("I have", 3, "pets")
print("Coding is", "fun!")

# Notice how:
# - Text goes in quotes
# - Numbers don't need quotes
# - You can print multiple things with commas
\`\`\`

**Now try your own version!** Use the patterns above but with your own information.

## Try It Yourself

Now it's your turn! Write your own code in the editor below:

1. Print your name using \`print()\`
2. Print your favorite color
3. Print some math problems (like \`print("5 + 3 =", 5 + 3)\`)
4. Write a short story using multiple print statements

<!-- EXERCISE_START -->
{
  "instruction": "Write code to print your name and favorite color. Use the print() function!",
  "expectedContains": null,
  "codePattern": "print\\(.*\\)",
  "starterCode": "name = \"\"  # TODO: put your name in quotes\\ncolor = \"\"  # TODO: put your favorite color\\nprint(\"My name is\", name)\\nprint(\"My favorite color is\", color)"
}
<!-- EXERCISE_END -->

## Important Notes

- Text must be in quotes (single or double)
- Numbers don't need quotes
- \`print()\` can display text, numbers, and calculations
- Use commas to separate multiple items`,
      quizId: null,
      assessmentType: null,
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

## How to Create a Variable

Follow these steps to create your own variable:

1. **Choose a name** - Use lowercase letters and underscores (e.g., \`my_name\`, \`favorite_color\`)
2. **Use the equals sign** - Write \`=\` to assign a value
3. **Add the value** - Put text in quotes or numbers without quotes

**Example pattern:**
\`\`\`
variable_name = value
\`\`\`

## Example Code to Guide You

Here's some example code showing how to create and use variables:

\`\`\`python
# Example: Creating variables for different types of information
student_name = "Sam"
student_grade = 4
favorite_subject = "Math"

# Printing the variables
print("Student:", student_name)
print("Grade:", student_grade)
print("Favorite subject:", favorite_subject)

# Notice how:
# - Text variables use quotes: "Sam"
# - Number variables don't use quotes: 4
# - You can print variables just like text or numbers
\`\`\`

**Now try your own version!** Create variables for your name and age, then print them.

## Try It Yourself

Now write your own code in the editor below! Try these challenges:

1. **Create a variable** called \`my_name\` and set it to your name (remember: text needs quotes!)
2. **Create a variable** called \`my_age\` and set it to your age (numbers don't need quotes)
3. **Print both variables** using \`print()\`
4. **Create two number variables** and add them together, then print the result

**Hint:** Remember the pattern: \`name = "value"\` for text, and \`number = 5\` for numbers!

<!-- EXERCISE_START -->
{
  "instruction": "Create a variable called 'name' and set it to your name, then print it. Also create a variable for your age and print that too!",
  "codePattern": "name\\s*=\\s*[\"'].*[\"']|my_name\\s*=\\s*[\"'].*[\"']",
  "expectedContains": null,
  "starterCode": "name = \"\"  # TODO: put your name in quotes\\nage = 0    # TODO: put your age (number)\\nprint(\"Name:\", name)\\nprint(\"Age:\", age)"
}
<!-- EXERCISE_END -->

## Important Notes

- Variables store information
- Use \`=\` to assign values
- Variable names should be clear and descriptive
- You can change variable values anytime
- Text needs quotes, numbers don't`,
      quizId: null,
      assessmentType: null,
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

Until now, your programs have been one-way conversations - they talk to you, but you can't talk back! The \`input()\` function changes that. It's like giving your program ears so it can listen to what users type.

**Why is this important?** Real programs need to interact with users - games ask for your name, calculators ask for numbers, and apps respond to what you do. This lesson teaches you how to make your programs truly interactive!

## Understanding the Input Function

The \`input()\` function pauses your program and waits for the user to type something and press Enter. Whatever they type gets stored in a variable.

### How It Works

\`\`\`python
name = input("What is your name? ")
print("Hello,", name)
\`\`\`

**Step by step:**
1. The program displays: "What is your name? " and waits
2. User types their name (e.g., "Alice") and presses Enter
3. The text "Alice" is stored in the \`name\` variable
4. The program continues and prints: "Hello, Alice"

## The Input Prompt

The text inside \`input()\` is called a **prompt**. It tells the user what to type. Good prompts are:
- **Clear**: "Enter your age: " is better than "Age:"
- **Helpful**: "Enter a number between 1 and 10: " guides the user
- **Friendly**: "What's your favorite color? " feels more welcoming

## Working with Text Input

Text input is straightforward - whatever the user types becomes a string (text):

\`\`\`python
favorite_color = input("What is your favorite color? ")
print("I like", favorite_color, "too!")
print("That's a beautiful color!")
\`\`\`

**Try it:** The user can type anything - "blue", "red", "purple", or even "rainbow sparkle"!

## Working with Number Input

**Critical Concept:** \`input()\` always returns text, even when the user types numbers!

\`\`\`python
age = input("How old are you? ")
print("You are", age, "years old")
# age is a string like "8", not the number 8
\`\`\`

If you try to do math with this, you'll get an error:
\`\`\`python
age = input("How old are you? ")
next_year = age + 1  # ERROR! Can't add number to text
\`\`\`

## Converting Text to Numbers

You must convert text to numbers before doing math:

### Converting to Integers (Whole Numbers)

Use \`int()\` to convert text to a whole number:

\`\`\`python
age = int(input("How old are you? "))
next_year = age + 1
print("Next year you will be", next_year)
\`\`\`

**What happens:**
- User types "8" (as text)
- \`int()\` converts "8" to the number 8
- Now you can do math: 8 + 1 = 9

### Converting to Floats (Decimal Numbers)

Use \`float()\` for numbers with decimals:

\`\`\`python
height = float(input("How tall are you in meters? "))
print("You are", height, "meters tall")
\`\`\`

**Example:** User types "1.25" → becomes the number 1.25

## Real-World Applications

### Application 1: Personal Information Form

Create a program that collects information like a form:

\`\`\`python
print("=== Personal Information Form ===")
print()

name = input("Full name: ")
age = int(input("Age: "))
favorite_subject = input("Favorite subject: ")
birth_month = input("Birth month: ")

print()
print("Thank you! Here's your information:")
print("Name:", name)
print("Age:", age)
print("Favorite subject:", favorite_subject)
print("Birth month:", birth_month)
\`\`\`

### Application 2: Interactive Calculator

Build a calculator that asks for numbers:

\`\`\`python
print("=== Simple Calculator ===")

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print()
print("Results:")
print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
\`\`\`

### Application 3: Mad Libs Story Generator

Create an interactive story:

\`\`\`python
print("Let's create a story together!")
print()

name = input("Enter a character name: ")
place = input("Enter a place: ")
animal = input("Enter an animal: ")
verb = input("Enter an action (like 'run' or 'jump'): ")
number = int(input("Enter a number: "))

print()
print("=== Your Story ===")
print("Once upon a time,", name)
print("went to", place)
print("and saw", number, animal + "s")
print("that liked to", verb)
print("every day!")
print("The end!")
\`\`\`

### Application 4: Shopping Calculator

Calculate costs with user input:

\`\`\`python
print("=== Shopping Calculator ===")

item = input("What are you buying? ")
price = float(input("What's the price? £"))
quantity = int(input("How many do you want? "))

total = price * quantity

print()
print("Receipt:")
print("Item:", item)
print("Price each: £" + str(price))
print("Quantity:", quantity)
print("Total: £" + str(total))
\`\`\`

## Common Mistakes to Avoid

1. **Forgetting to convert numbers:**
   \`\`\`python
   # Wrong:
   age = input("Age: ")
   next_year = age + 1  # Error!
   
   # Right:
   age = int(input("Age: "))
   next_year = age + 1  # Works!
   \`\`\`

2. **Unclear prompts:**
   \`\`\`python
   # Bad:
   x = input("x: ")
   
   # Good:
   name = input("What is your name? ")
   \`\`\`

3. **Not handling errors:**
   If a user types text when you expect a number, the program will crash. For now, just make sure to type numbers when the program asks!

## Example Code to Guide You

Here's some example code showing how to use input() and convert to numbers:

\`\`\`python
# Example: Getting input and doing calculations
# Note: In this simulator, input() won't work, so we'll use direct values
# But in real Python, you'd use: user_age = int(input("How old are you? "))

user_age = 9  # This simulates: int(input("How old are you? "))
years_later = 3
future_age = user_age + years_later

print("You are", user_age, "years old now")
print("In", years_later, "years, you will be", future_age)

# Notice how:
# - We use int() to convert text to a number
# - We can do math with the converted number
# - We combine text and numbers in print statements
\`\`\`

**Now try your own version!** Ask for name and age, then calculate something with the age.

## Try It Yourself

Now write your own interactive programs! Try these challenges:

1. **Personal Greeting Program**
   - Ask for the user's name and age
   - Calculate how old they'll be in 5 years
   - Print a personalized message

2. **Math Quiz Helper**
   - Ask for two numbers
   - Calculate and display: sum, difference, product, and quotient
   - Format the output nicely

3. **Fun Facts Generator**
   - Ask for: name, favorite animal, favorite number
   - Create a fun fact using their answers
   - Example: "Did you know Alice's favorite number is 7, and they love elephants!"

4. **Recipe Converter**
   - Ask for number of servings
   - Ask for ingredient amounts (like cups of flour)
   - Calculate amounts for double the servings

<!-- EXERCISE_START -->
{
  "instruction": "Create an interactive program that asks for the user's name and age, then calculates and prints how old they will be in 10 years. Remember: use int() to convert the age input to a number!",
  "codePattern": "int\\(input|age\\s*=\\s*int",
  "expectedContains": null,
  "starterCode": "name = \"Ada\"  # TODO: change the name\\nage_text = \"10\"  # TODO: pretend input by changing this\\nage = int(age_text)\\nprint(name, \"will be\", age + 10, \"in 10 years\")"
}
<!-- EXERCISE_END -->

## Important Notes

- \`input()\` always returns text (strings), even for numbers
- Use \`int()\` to convert text to whole numbers
- Use \`float()\` to convert text to decimal numbers
- Write clear, helpful prompts so users know what to enter
- Test your programs with different inputs to make sure they work
- Interactive programs make coding much more fun and useful!`,
      quizId: null,
      assessmentType: null,
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

## Making Smart Decisions

Real programs need to make decisions - just like you do! Should I show this message? Can this user access this feature? Is this answer correct? Python uses \`if\` statements to make these choices based on conditions.

**Think of it like this:** If it's raining, you bring an umbrella. If it's sunny, you wear sunglasses. Programs work the same way - they check conditions and respond accordingly!

## Understanding Conditions

A **condition** is a question that can be answered with True or False:
- "Is the age 8 or more?" → True or False
- "Is the score greater than 80?" → True or False
- "Is the password correct?" → True or False

## The Basic If Statement

The simplest decision: "If this is true, do that."

\`\`\`python
age = 10

if age >= 8:
    print("You can ride the roller coaster!")
\`\`\`

**Breaking it down:**
- \`if\` - starts the decision
- \`age >= 8\` - the condition (question)
- \`:\` - colon means "here comes the action"
- Indented code - what happens if the condition is True

**Critical:** The indentation (4 spaces) is required! Python uses indentation to know which code belongs inside the if statement.

## Comparison Operators - Your Decision Tools

These operators let you compare values:

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| \`==\` | equals | \`5 == 5\` | True |
| \`!=\` | not equals | \`5 != 3\` | True |
| \`>\` | greater than | \`10 > 5\` | True |
| \`<\` | less than | \`3 < 7\` | True |
| \`>=\` | greater than or equal | \`8 >= 8\` | True |
| \`<=\` | less than or equal | \`5 <= 10\` | True |

**Common mistake:** Using \`=\` instead of \`==\`
- \`=\` assigns a value (age = 10)
- \`==\` compares values (age == 10)

## Real-World Decision Examples

### Example 1: Game Score System

\`\`\`python
score = int(input("What's your game score? "))

if score >= 100:
    print("🏆 Champion! Amazing score!")
elif score >= 50:
    print("⭐ Great job! You're doing well!")
elif score >= 20:
    print("👍 Good effort! Keep practicing!")
else:
    print("💪 Keep trying! You'll get better!")
\`\`\`

### Example 2: Weather Advisor

\`\`\`python
temperature = int(input("What's the temperature? "))

if temperature > 25:
    print("It's hot! Wear light clothes and drink water.")
elif temperature > 15:
    print("Nice weather! Perfect for playing outside.")
elif temperature > 5:
    print("It's cool. A jacket would be good.")
else:
    print("It's cold! Bundle up with warm clothes.")
\`\`\`

### Example 3: Access Control

\`\`\`python
age = int(input("How old are you? "))

if age >= 13:
    print("You can watch PG-13 movies!")
elif age >= 8:
    print("You can watch family movies!")
else:
    print("Stick to kids' movies for now!")
\`\`\`

## If-Else: Two Paths

When you have two options - do this OR do that:

\`\`\`python
password = input("Enter the password: ")

if password == "python123":
    print("✅ Access granted! Welcome!")
else:
    print("❌ Access denied! Wrong password.")
\`\`\`

**Think of it like:** If the password is correct, let them in. Otherwise, block access.

## If-Elif-Else: Multiple Paths

When you have many options, use \`elif\` (short for "else if"):

\`\`\`python
score = int(input("Enter your test score: "))

if score >= 90:
    grade = "A"
    message = "Outstanding work!"
elif score >= 80:
    grade = "B"
    message = "Great job!"
elif score >= 70:
    grade = "C"
    message = "Good work!"
elif score >= 60:
    grade = "D"
    message = "You passed, but try harder next time!"
else:
    grade = "F"
    message = "Keep studying and try again!"

print("Your grade:", grade)
print(message)
\`\`\`

**How it works:** Python checks each condition in order. As soon as one is True, it runs that code and skips the rest.

## Combining Conditions

### Using \`and\` - Both Must Be True

\`\`\`python
age = 12
has_permission = True

if age >= 10 and has_permission:
    print("You can go to the park!")
else:
    print("Sorry, you need to be 10+ AND have permission.")
\`\`\`

**Real example:** You can watch a movie if you're old enough AND have a ticket.

### Using \`or\` - Either Can Be True

\`\`\`python
day = input("What day is it? ")

if day == "Saturday" or day == "Sunday":
    print("It's the weekend! Time to relax!")
else:
    print("It's a school day. Time to learn!")
\`\`\`

**Real example:** You can sleep in if it's Saturday OR Sunday.

### Using \`not\` - Reverse the Condition

\`\`\`python
is_raining = input("Is it raining? (yes/no): ")

if not is_raining == "yes":
    print("Great! Let's go outside and play!")
else:
    print("Stay inside and read a book!")
\`\`\`

## Practical Applications

### Application 1: Smart Calculator

\`\`\`python
print("=== Smart Calculator ===")
num1 = float(input("First number: "))
operation = input("Operation (+, -, *, /): ")
num2 = float(input("Second number: "))

if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 == 0:
        result = "Error! Can't divide by zero!"
    else:
        result = num1 / num2
else:
    result = "Invalid operation!"

print("Result:", result)
\`\`\`

### Application 2: Adventure Game Choice

\`\`\`python
print("You're in a forest. You see two paths.")
choice = input("Do you go LEFT or RIGHT? ")

if choice.lower() == "left":
    print("You found a treasure chest! 🏆")
    print("You win!")
elif choice.lower() == "right":
    print("You found a friendly dragon! 🐉")
    print("The dragon gives you a magic gem!")
else:
    print("You stand still, confused. Try LEFT or RIGHT next time!")
\`\`\`

### Application 3: Study Time Advisor

\`\`\`python
time = int(input("What time is it? (0-23): "))
has_homework = input("Do you have homework? (yes/no): ")

if time >= 20 or time < 7:
    print("It's late or early! Time to rest.")
elif has_homework.lower() == "yes":
    if time < 18:
        print("Good time to do homework! Focus and get it done.")
    else:
        print("Do your homework, but don't stay up too late!")
else:
    print("Free time! Maybe read a book or play outside.")
\`\`\`

## Example Code to Guide You

Here's some example code showing how to use if/elif/else statements:

\`\`\`python
# Example: Checking a number and giving feedback
number = 15

if number > 10:
    print("The number is greater than 10")
elif number < 10:
    print("The number is less than 10")
else:
    print("The number is exactly 10")

# Example: Checking multiple conditions
score = 85
if score >= 90:
    print("Excellent!")
elif score >= 70:
    print("Good job!")
else:
    print("Keep practicing!")

# Notice how:
# - if checks the first condition
# - elif checks other conditions if the first is false
# - else handles everything else
# - You can check numbers, text, or combinations
\`\`\`

**Now try your own version!** Use if/elif/else to check different conditions.

## Try It Yourself

Create your own decision-making programs! Try these:

1. **Number Analyzer**
   - Ask for a number
   - Tell if it's positive, negative, or zero
   - Tell if it's even or odd
   - Tell if it's greater than 100

2. **Shopping Helper**
   - Ask how much money they have
   - Ask the price of an item
   - Tell them if they can afford it
   - If yes, calculate change

3. **Game Character Creator**
   - Ask for character name and age
   - Based on age, assign a character class (young = wizard, medium = warrior, old = sage)
   - Print their character info

4. **Weather-Based Activity Planner**
   - Ask about weather (sunny, rainy, snowy)
   - Suggest appropriate activities
   - Include temperature in the decision

<!-- EXERCISE_START -->
{
  "instruction": "Create a program that asks for a number, then uses if/elif/else to check if it's positive, negative, or zero, and prints an appropriate message. Also check if the number is greater than 100!",
  "codePattern": "if.*>|elif.*<|else:",
  "expectedContains": null,
  "starterCode": "number = 42  # TODO: change this number\\n# TODO: use if/elif/else to check positive/negative/zero\\nif number > 0:\\n    print(\"Positive\")\\nelif number < 0:\\n    print(\"Negative\")\\nelse:\\n    print(\"Zero\")\\n\\n# TODO: check if number is greater than 100\\nif number > 100:\\n    print(\"Greater than 100\")"
}
<!-- EXERCISE_END -->

## Important Notes

- Always use a colon \`:\` after \`if\`, \`elif\`, and \`else\`
- **Indentation is critical** - use 4 spaces for code inside if statements
- \`==\` compares (checks if equal), \`=\` assigns (gives a value)
- Use \`and\` when BOTH conditions must be true
- Use \`or\` when EITHER condition can be true
- Test your programs with different values to make sure all paths work
- Decision-making is what makes programs smart and useful!`,
      quizId: null,
      assessmentType: null,
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

## The Power of Repetition

Imagine having to write "Hello!" 100 times - that would take forever! Loops solve this problem. They let you repeat code automatically, making programs powerful and efficient.

**Why loops matter:** Real programs use loops constantly - games loop through levels, websites loop through pages, and apps loop through data. Learning loops unlocks the ability to build truly useful programs!

## Understanding For Loops

A \`for\` loop repeats code a **specific number of times**. Think of it like: "Do this 5 times" or "Repeat this for each item in a list."

### The Range Function

\`range()\` is your tool for controlling how many times a loop runs:

\`\`\`python
for i in range(5):
    print("Hello!")
\`\`\`

**What happens:**
- \`range(5)\` creates numbers: 0, 1, 2, 3, 4 (5 numbers total)
- The loop runs once for each number
- \`i\` is a variable that holds the current number
- Result: "Hello!" prints 5 times

### Using the Loop Variable

The variable \`i\` (or any name you choose) holds the current number:

\`\`\`python
for i in range(5):
    print("Count:", i)
\`\`\`

**Output:**
\`\`\`
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
\`\`\`

**Important:** \`range(5)\` starts at 0, not 1! This is because programmers often count from 0.

### Starting from a Different Number

Use \`range(start, end)\` to begin from a specific number:

\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

**Output:** 1, 2, 3, 4, 5 (starts at 1, ends before 6)

### Counting by Steps

Use \`range(start, end, step)\` to count by 2s, 3s, etc.:

\`\`\`python
for i in range(0, 10, 2):
    print(i)
\`\`\`

**Output:** 0, 2, 4, 6, 8 (counts by 2s)

### Counting Backwards

Use a negative step to count down:

\`\`\`python
for i in range(10, 0, -1):
    print(i)
print("Blast off! 🚀")
\`\`\`

**Output:** 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, then "Blast off! 🚀"

## Looping Through Lists

You can loop through items in a list (we'll learn more about lists later):

\`\`\`python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print("I like", fruit)
\`\`\`

**What happens:** The loop runs once for each item in the list, and \`fruit\` holds the current item.

## While Loops - Repeat Until...

A \`while\` loop repeats **as long as a condition is true**. Think: "Keep doing this until something changes."

### Basic While Loop

\`\`\`python
count = 0

while count < 5:
    print("Count is", count)
    count = count + 1  # Important: change the variable!
\`\`\`

**Critical:** You MUST change the variable inside the loop, or it will run forever (infinite loop)!

### Interactive While Loop

\`\`\`python
answer = ""

while answer != "yes":
    answer = input("Do you want to continue? (yes/no): ")
    print("You said:", answer)

print("Great! Let's continue!")
\`\`\`

**Use case:** Keep asking until you get the answer you want.

## When to Use For vs While

- **Use \`for\`** when you know exactly how many times to repeat
- **Use \`while\`** when you need to repeat until a condition changes

## Practical Loop Applications

### Application 1: Multiplication Table Generator

\`\`\`python
number = int(input("Which times table? (1-12): "))

print(f"=== {number} Times Table ===")
for i in range(1, 13):
    result = number * i
    print(f"{number} x {i} = {result}")
\`\`\`

### Application 2: Number Pattern Generator

\`\`\`python
print("=== Number Patterns ===")

# Pattern 1: Counting up
print("Counting 1 to 10:")
for i in range(1, 11):
    print(i, end=" ")
print()

# Pattern 2: Even numbers
print("Even numbers 0 to 20:")
for i in range(0, 21, 2):
    print(i, end=" ")
print()

# Pattern 3: Powers of 2
print("Powers of 2:")
for i in range(1, 6):
    power = 2 ** i
    print(f"2^{i} = {power}")
\`\`\`

### Application 3: Accumulator Pattern

Build up a total by adding in a loop:

\`\`\`python
total = 0
print("Enter 5 numbers to add:")

for i in range(5):
    number = int(input(f"Number {i+1}: "))
    total = total + number
    print(f"Running total: {total}")

print(f"Final sum: {total}")
\`\`\`

### Application 4: Password Retry System

\`\`\`python
correct_password = "python123"
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    password = input("Enter password: ")
    if password == correct_password:
        print("✅ Access granted!")
        break
    else:
        attempts = attempts + 1
        remaining = max_attempts - attempts
        if remaining > 0:
            print(f"❌ Wrong password! {remaining} attempts left.")
        else:
            print("❌ Access denied! Too many failed attempts.")
\`\`\`

## Nested Loops - Loops Inside Loops

Sometimes you need a loop inside another loop:

\`\`\`python
# Draw a grid pattern
for row in range(3):
    for col in range(4):
        print(f"({row},{col})", end=" ")
    print()  # New line after each row
\`\`\`

**Output:**
\`\`\`
(0,0) (0,1) (0,2) (0,3)
(1,0) (1,1) (1,2) (1,3)
(2,0) (2,1) (2,2) (2,3)
\`\`\`

**Real use:** Creating grids, tables, or patterns.

## Common Loop Patterns

### Pattern 1: Sum a Range

\`\`\`python
total = 0
for i in range(1, 101):
    total = total + i
print("Sum of 1 to 100:", total)
\`\`\`

### Pattern 2: Find Maximum

\`\`\`python
numbers = [5, 12, 3, 8, 15, 2]
maximum = numbers[0]

for num in numbers:
    if num > maximum:
        maximum = num

print("Maximum number:", maximum)
\`\`\`

### Pattern 3: Count Occurrences

\`\`\`python
text = "hello world"
count = 0

for letter in text:
    if letter == "l":
        count = count + 1

print(f"The letter 'l' appears {count} times")
\`\`\`

## Try It Yourself

Create these programs using loops:

1. **Times Table Generator**
   - Ask which number's times table to generate
   - Print the full table from 1x to 12x

2. **Number Analyzer**
   - Ask for 5 numbers
   - Calculate and display: sum, average, maximum, minimum

3. **Countdown Timer**
   - Count down from a number the user enters
   - Display each number
   - End with a special message

4. **Pattern Creator**
   - Print a pattern like: 1, 22, 333, 4444, 55555
   - Or: *, **, ***, ****, *****

5. **Interactive Quiz**
   - Ask 5 questions in a loop
   - Keep track of correct answers
   - Display final score

## Example Code to Guide You

Here's some example code showing how to use loops:

\`\`\`python
# Example: Using a for loop to count
for i in range(1, 6):
    print("Count:", i)

# Example: Using a loop to create a pattern
for i in range(1, 4):
    print("Number", i, "squared is", i * i)

# Example: Building up a total in a loop
total = 0
for i in range(1, 4):
    total = total + i
    print("Adding", i, "- Total so far:", total)
print("Final total:", total)

# Notice how:
# - range(1, 6) gives you 1, 2, 3, 4, 5
# - The loop variable (i) changes each time
# - You can do calculations inside the loop
# - You can build up values (like total) as you loop
\`\`\`

**Now try your own version!** Use loops to repeat actions and create patterns.

<!-- EXERCISE_START -->
{
  "instruction": "Create a program that uses a for loop to print numbers from 1 to 10, then uses another loop to print the 5 times table (5 x 1 = 5, 5 x 2 = 10, etc. up to 5 x 10 = 50).",
  "codePattern": "for.*range|for.*in.*range",
  "expectedContains": null,
  "starterCode": "# TODO: print numbers 1 to 10\\nfor i in range(1, 11):\\n    print(i)\\n\\n# TODO: print the 5 times table\\nfor i in range(1, 11):\\n    print(\"5 x\", i, \"=\", 5 * i)"
}
<!-- EXERCISE_END -->

## Important Notes

- \`for\` loops are perfect when you know how many times to repeat
- \`while\` loops are perfect when you need to repeat until a condition changes
- **Always indent code inside loops** (4 spaces)
- **Be careful with while loops** - make sure the condition can become False, or you'll get an infinite loop!
- \`range(start, end)\` goes from start up to (but not including) end
- \`range(5)\` gives you 0, 1, 2, 3, 4 (5 numbers, starting at 0)
- Loops make programs powerful - you can process lots of data or repeat actions easily
- Practice with different ranges and conditions to master loops!`,
      quizId: null,
      assessmentType: null,
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

Functions are like **reusable tools** in your programming toolbox. Instead of writing the same code repeatedly, you write it once as a function and use it whenever needed!

**Real-world analogy:** Think of a function like a recipe. You write the recipe once, but you can use it to cook the same dish many times. Functions work the same way - define once, use many times!

## Why Functions Are Powerful

- **Avoid repetition**: Write code once, use it everywhere
- **Organize your code**: Break big problems into smaller, manageable pieces
- **Easy to fix**: Change code in one place, and it updates everywhere
- **Readable code**: Function names describe what they do
- **Testable**: Test each function separately

## Creating Your First Function

### Basic Function Structure

\`\`\`python
def greet():
    print("Hello!")
    print("Welcome to Python programming!")

# Call (use) the function
greet()
\`\`\`

**Breaking it down:**
- \`def\` - keyword that means "define a function"
- \`greet\` - the function name (you choose this)
- \`()\` - parentheses (empty here, but can hold parameters)
- \`:\` - colon means "here comes the function code"
- Indented code - what the function does
- \`greet()\` - calling the function makes it run

### Functions with Parameters

**Parameters** are like ingredients you give to your function:

\`\`\`python
def greet(name):
    print("Hello,", name)
    print("Nice to meet you!")
    print("Have a great day!")

# Use the function with different names
greet("Alice")
greet("Bob")
greet("Charlie")
\`\`\`

**What happens:** The function receives the name as a parameter and uses it inside. You can call it with different values!

### Functions with Multiple Parameters

Functions can take multiple inputs:

\`\`\`python
def introduce(name, age, hobby):
    print(f"Hi! I'm {name}")
    print(f"I'm {age} years old")
    print(f"I love {hobby}")

introduce("Sam", 9, "coding")
introduce("Emma", 10, "drawing")
\`\`\`

## Returning Values

Functions can **return** (give back) a value using the \`return\` keyword:

\`\`\`python
def add(a, b):
    result = a + b
    return result

# Use the returned value
sum = add(5, 3)
print("The sum is", sum)

# Or use it directly
print("10 + 7 =", add(10, 7))
\`\`\`

**Key concept:** \`return\` sends a value back to where the function was called. Without \`return\`, the function does something but doesn't give back a value.

## Real-World Function Examples

### Example 1: Math Helper Functions

\`\`\`python
def square(number):
    """Calculate the square of a number"""
    return number * number

def cube(number):
    """Calculate the cube of a number"""
    return number * number * number

def power(base, exponent):
    """Calculate base raised to exponent"""
    result = 1
    for i in range(exponent):
        result = result * base
    return result

# Use the functions
print("5 squared =", square(5))
print("3 cubed =", cube(3))
print("2 to the power of 8 =", power(2, 8))
\`\`\`

### Example 2: Text Processing Functions

\`\`\`python
def create_greeting(name, time_of_day):
    """Create a personalized greeting"""
    if time_of_day == "morning":
        greeting = "Good morning"
    elif time_of_day == "afternoon":
        greeting = "Good afternoon"
    else:
        greeting = "Good evening"
    
    return f"{greeting}, {name}! How are you today?"

def count_words(text):
    """Count words in a text"""
    words = text.split()
    return len(words)

# Use the functions
message = create_greeting("Alex", "morning")
print(message)

text = "Python is fun to learn"
print(f"'{text}' has {count_words(text)} words")
\`\`\`

### Example 3: Game Helper Functions

\`\`\`python
def calculate_score(points, multiplier):
    """Calculate final score with multiplier"""
    return points * multiplier

def check_level(score):
    """Determine player level based on score"""
    if score >= 1000:
        return "Master"
    elif score >= 500:
        return "Expert"
    elif score >= 200:
        return "Advanced"
    elif score >= 100:
        return "Intermediate"
    else:
        return "Beginner"

def display_stats(name, score, multiplier):
    """Display player statistics"""
    final_score = calculate_score(score, multiplier)
    level = check_level(final_score)
    
    print(f"=== {name}'s Stats ===")
    print(f"Base points: {score}")
    print(f"Multiplier: {multiplier}x")
    print(f"Final score: {final_score}")
    print(f"Level: {level}")

# Use the functions
display_stats("Player1", 150, 2)
\`\`\`

## Combining Functions

Functions can call other functions, building complex programs from simple pieces:

\`\`\`python
def get_area(length, width):
    """Calculate rectangle area"""
    return length * width

def get_perimeter(length, width):
    """Calculate rectangle perimeter"""
    return 2 * (length + width)

def describe_rectangle(length, width):
    """Describe a rectangle with all its properties"""
    area = get_area(length, width)
    perimeter = get_perimeter(length, width)
    
    print(f"Rectangle: {length} x {width}")
    print(f"Area: {area}")
    print(f"Perimeter: {perimeter}")
    
    if length == width:
        print("This is a square!")

describe_rectangle(5, 5)
describe_rectangle(4, 7)
\`\`\`

## Built-in Python Functions

Python comes with many useful built-in functions:

\`\`\`python
# len() - get length of strings, lists, etc.
name = "Python"
print(len(name))  # Output: 6

# max() and min() - find maximum/minimum
numbers = [5, 12, 3, 8, 15, 2]
print("Maximum:", max(numbers))  # Output: 15
print("Minimum:", min(numbers))  # Output: 2

# abs() - absolute value (distance from zero)
print(abs(-10))  # Output: 10
print(abs(10))   # Output: 10

# round() - round to nearest whole number
print(round(3.7))  # Output: 4
print(round(3.2))  # Output: 3

# str() - convert to string
age = 8
message = "I am " + str(age) + " years old"
print(message)
\`\`\`

## Function Best Practices

### 1. Descriptive Names

\`\`\`python
# Good names:
def calculate_total_price():
def check_user_age():
def get_student_grade():

# Bad names:
def calc():  # Too vague
def func1():  # Not descriptive
def x():      # Meaningless
\`\`\`

### 2. Single Responsibility

Each function should do ONE thing well:

\`\`\`python
# Good: One clear purpose
def calculate_area(length, width):
    return length * width

def display_area(area):
    print(f"The area is {area}")

# Less ideal: Does multiple things
def calculate_and_display_area(length, width):
    area = length * width
    print(f"The area is {area}")
\`\`\`

### 3. Use Return Values

When a function calculates something, return it:

\`\`\`python
# Good: Returns a value
def add(a, b):
    return a + b

result = add(5, 3)

# Less useful: Just prints
def add(a, b):
    print(a + b)
\`\`\`

## Example Code to Guide You

Here's some example code showing how to create and use functions:

\`\`\`python
# Example: A simple function that takes parameters
def say_hello(name):
    print("Hello,", name)
    print("Nice to meet you!")

# Using the function
say_hello("Alice")
say_hello("Bob")

# Example: A function that returns a value
def double(number):
    result = number * 2
    return result

# Using the return value
answer = double(5)
print("Double of 5 is", answer)

# Notice how:
# - def defines the function
# - Parameters go in parentheses
# - return sends a value back
# - You call functions by writing their name with ()
\`\`\`

**Now try your own version!** Create functions that do calculations or print messages.

## Try It Yourself

Create these functions to practice:

1. **Math Functions**
   - \`multiply(a, b)\` - multiplies two numbers
   - \`is_even(number)\` - returns True if number is even, False otherwise
   - \`square(number)\` - returns number squared

2. **Text Functions**
   - \`create_greeting(name)\` - returns a personalized greeting
   - \`repeat_text(text, times)\` - returns text repeated a certain number of times

3. **Game Functions**
   - \`calculate_bonus(base_score, level)\` - calculates score with level bonus
   - \`check_win(score, target)\` - returns True if score >= target

4. **Utility Functions**
   - \`get_max(a, b, c)\` - returns the largest of three numbers
   - \`format_currency(amount)\` - returns amount formatted as currency (e.g., "£10.50")

<!-- EXERCISE_START -->
{
  "instruction": "Create a function called 'greet' that takes a name as a parameter and prints a greeting. Then create a function called 'add' that takes two numbers and returns their sum. Call both functions to test them!",
  "codePattern": "def\\s+greet|def\\s+add",
  "expectedContains": null,
  "starterCode": "def greet(name):\\n    # TODO: print a greeting with the name\\n    print(\"Hello\", name)\\n\\n\\ndef add(a, b):\\n    # TODO: return the sum\\n    return a + b\\n\\n# TODO: call the functions\\ngreet(\"Alex\")\\nprint(\"2 + 3 =\", add(2, 3))"
}
<!-- EXERCISE_END -->

## Important Notes

- Use \`def\` keyword to define a function
- Function names should be clear and descriptive (use lowercase with underscores)
- Parameters go inside the parentheses: \`def function_name(param1, param2):\`
- Use \`return\` to send a value back from the function
- Call functions by writing their name with parentheses: \`function_name()\`
- Functions make code organized, reusable, and easier to understand
- Break big problems into smaller functions - it's like building with LEGO blocks!
- Practice creating functions for common tasks you do repeatedly`,
      quizId: null,
      assessmentType: null,
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

## Creating Art with Code!

Turtle graphics lets you create drawings and art using Python! You control a virtual "turtle" that moves around the screen, drawing lines as it goes. It's like having a robot artist that follows your commands!

**Why it's awesome:** You can create beautiful patterns, shapes, and even animations - all with code! This combines programming with creativity.

## Getting Started with Turtle

### Import and Create

First, import the turtle module and create your turtle:

\`\`\`python
import turtle

t = turtle.Turtle()
\`\`\`

**What happens:** You get a turtle (usually shown as a small arrow) that starts in the center of the screen, facing right.

## Basic Movement Commands

### Moving Forward and Backward

\`\`\`python
import turtle

t = turtle.Turtle()

t.forward(100)   # Move forward 100 pixels
t.backward(50)  # Move backward 50 pixels
\`\`\`

**Think of it like:** The turtle walks forward or backward, leaving a trail (line) behind it.

### Turning Left and Right

\`\`\`python
t.left(90)   # Turn left 90 degrees (quarter turn)
t.right(45)  # Turn right 45 degrees (eighth turn)
\`\`\`

**Understanding degrees:**
- 90° = quarter turn (right angle)
- 180° = half turn (turn around)
- 360° = full circle
- 45° = eighth turn

## Drawing Your First Shapes

### Drawing a Square

\`\`\`python
import turtle

t = turtle.Turtle()

for i in range(4):
    t.forward(100)
    t.left(90)
\`\`\`

**How it works:** Move forward, turn 90°, repeat 4 times = square!

### Drawing a Triangle

\`\`\`python
import turtle

t = turtle.Turtle()

for i in range(3):
    t.forward(100)
    t.left(120)  # 360 / 3 = 120 degrees
\`\`\`

### Drawing a Hexagon

\`\`\`python
import turtle

t = turtle.Turtle()

for i in range(6):
    t.forward(80)
    t.left(60)  # 360 / 6 = 60 degrees
\`\`\`

**Pattern:** For any shape, divide 360 by the number of sides to get the turn angle!

## Adding Color and Style

### Changing Colors

\`\`\`python
import turtle

t = turtle.Turtle()

t.color("red")
t.forward(100)

t.color("blue")
t.forward(100)

t.color("green")
t.forward(100)
\`\`\`

**Available colors:** "red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", and many more!

### Changing Pen Size

\`\`\`python
t.pensize(1)   # Thin line
t.forward(50)

t.pensize(5)   # Thick line
t.forward(50)

t.pensize(10)  # Very thick line
t.forward(50)
\`\`\`

### Filling Shapes

\`\`\`python
import turtle

t = turtle.Turtle()

t.begin_fill()
t.color("red")

# Draw a filled square
for i in range(4):
    t.forward(100)
    t.left(90)

t.end_fill()
\`\`\`

## Advanced Drawing Techniques

### Drawing Circles

\`\`\`python
import turtle

t = turtle.Turtle()

t.circle(50)   # Circle with radius 50
t.circle(100)  # Larger circle with radius 100
\`\`\`

### Drawing Stars

\`\`\`python
import turtle

t = turtle.Turtle()
t.color("gold")

# 5-pointed star
for i in range(5):
    t.forward(100)
    t.right(144)  # 180 - (360/5) = 144 degrees
\`\`\`

### Creating Patterns

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(10)  # Faster drawing

# Spiral pattern
for i in range(50):
    t.forward(i * 2)
    t.left(90)
\`\`\`

## Creative Projects

### Project 1: Colorful Square Pattern

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(10)

colors = ["red", "blue", "green", "yellow", "purple"]

for i in range(20):
    t.color(colors[i % 5])  # Cycle through colors
    for j in range(4):
        t.forward(50 + i * 5)
        t.left(90)
    t.left(18)  # Turn slightly for spiral effect
\`\`\`

### Project 2: Flower Pattern

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(10)

# Draw petals
for i in range(8):
    t.color("pink")
    t.circle(30)
    t.left(45)

# Draw center
t.penup()
t.goto(0, -10)
t.pendown()
t.color("yellow")
t.begin_fill()
t.circle(10)
t.end_fill()
\`\`\`

### Project 3: House with Details

\`\`\`python
import turtle

t = turtle.Turtle()
t.speed(5)

# House base (square)
t.color("brown")
t.begin_fill()
for i in range(4):
    t.forward(100)
    t.left(90)
t.end_fill()

# Roof (triangle)
t.color("red")
t.begin_fill()
t.left(45)
t.forward(70)
t.right(90)
t.forward(70)
t.end_fill()

# Door
t.penup()
t.goto(40, -100)
t.pendown()
t.color("dark brown")
t.begin_fill()
for i in range(2):
    t.forward(20)
    t.left(90)
    t.forward(40)
    t.left(90)
t.end_fill()
\`\`\`

## Pen Control - Advanced Techniques

### Moving Without Drawing

\`\`\`python
t.penup()    # Lift pen - move without drawing
t.goto(0, 100)  # Move to position (0, 100)
t.pendown()  # Put pen down - start drawing again
t.forward(50)
\`\`\`

### Setting Position Directly

\`\`\`python
t.penup()
t.goto(-50, 50)  # Move to x=-50, y=50
t.pendown()
t.circle(25)
\`\`\`

## Example Code to Guide You

Here's some example code showing how to use turtle graphics:

\`\`\`python
import turtle

# Create a turtle
t = turtle.Turtle()

# Example: Drawing a simple shape
t.color("blue")
for i in range(4):
    t.forward(50)
    t.left(90)

# Example: Drawing multiple shapes
t.penup()
t.goto(100, 0)
t.pendown()
t.color("red")
t.circle(30)

# Notice how:
# - import turtle is needed first
# - t = turtle.Turtle() creates your turtle
# - forward() moves forward, left() turns
# - color() changes the pen color
# - penup()/pendown() control drawing
# - goto() moves to a specific position
\`\`\`

**Now try your own version!** Use turtle to draw shapes and patterns.

## Try It Yourself

Create these drawings:

1. **Geometric Art**
   - Draw a pattern of nested squares (square inside square)
   - Create a colorful polygon pattern
   - Make a spiral that changes color

2. **Nature Drawings**
   - Draw a flower with petals
   - Create a tree (trunk + branches)
   - Make a sun with rays

3. **Creative Patterns**
   - Design your own repeating pattern
   - Create a mandala-like circular pattern
   - Draw a rainbow using arcs

4. **Combined Shapes**
   - Draw a house with windows and door
   - Create a car (rectangles and circles)
   - Make a robot face

<!-- EXERCISE_START -->
{
  "instruction": "Use turtle graphics to draw a square. Then draw a triangle next to it. Use different colors for each shape! Remember to import turtle first.",
  "codePattern": "import\\s+turtle|turtle\\.Turtle|forward|left|right",
  "expectedContains": null,
  "starterCode": "import turtle\\n\\nt = turtle.Turtle()\\n# TODO: set a color and draw a square\\nt.color(\"blue\")\\nfor i in range(4):\\n    t.forward(100)\\n    t.left(90)\\n\\n# TODO: move to the right and draw a triangle\\nt.penup()\\nt.forward(150)\\nt.pendown()\\nt.color(\"red\")\\nfor i in range(3):\\n    t.forward(100)\\n    t.left(120)"
}
<!-- EXERCISE_END -->

## Important Notes

- Always start with \`import turtle\`
- Create a turtle: \`t = turtle.Turtle()\`
- \`forward(distance)\` - move forward
- \`backward(distance)\` - move backward
- \`left(degrees)\` - turn left
- \`right(degrees)\` - turn right
- \`circle(radius)\` - draw a circle
- \`color("colorname")\` - change color
- \`pensize(number)\` - change line thickness
- \`penup()\` / \`pendown()\` - lift/lower pen
- Use loops to create repeating patterns
- Combine shapes to create complex drawings
- Experiment and have fun - that's the best way to learn!`,
      quizId: null,
      assessmentType: null,
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

## Putting It All Together!

Congratulations! You've learned the fundamentals of Python. Now it's time to combine everything you know to build **real, working programs**! Projects are where programming gets exciting - you create something that actually does something useful or fun.

**Why projects matter:** Building projects teaches you to solve problems, think logically, and see how all the pieces fit together. Plus, it's incredibly satisfying to create something that works!

## Project Planning Tips

Before coding, think about:
1. **What should it do?** (The goal)
2. **What information do I need?** (Inputs)
3. **What should it show?** (Outputs)
4. **What steps are needed?** (The plan)

## Project 1: Interactive Number Guessing Game

A complete game with hints, score tracking, and multiple rounds!

\`\`\`python
import random

def play_guessing_game():
    secret = random.randint(1, 100)
    guesses = 0
    max_guesses = 7
    
    print("=== Number Guessing Game ===")
    print("I'm thinking of a number between 1 and 100!")
    print(f"You have {max_guesses} guesses. Good luck!")
    print()
    
    while guesses < max_guesses:
        guess = int(input(f"Guess #{guesses + 1}: "))
        guesses = guesses + 1
        
        if guess == secret:
            print(f"🎉 Congratulations! You got it in {guesses} guesses!")
            return True
        elif guess < secret:
            difference = secret - guess
            if difference <= 5:
                print("Close! A bit higher...")
            else:
                print("Too low! Try a higher number.")
        else:
            difference = guess - secret
            if difference <= 5:
                print("Close! A bit lower...")
            else:
                print("Too high! Try a lower number.")
    
    print(f"Game over! The number was {secret}")
    return False

# Play the game
play_guessing_game()
\`\`\`

**Features:** Random numbers, hints, guess limits, and clear feedback!

## Project 2: Advanced Calculator with History

A calculator that remembers your calculations:

\`\`\`python
history = []

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Can't divide by zero!"
    return a / b

def show_history():
    if len(history) == 0:
        print("No calculations yet!")
    else:
        print("\\n=== Calculation History ===")
        for calc in history:
            print(calc)

print("=== Advanced Calculator ===")
print("Operations: +, -, *, /")
print("Type 'history' to see past calculations")
print("Type 'quit' to exit")
print()

while True:
    operation = input("Operation (+, -, *, /, history, quit): ")
    
    if operation == "quit":
        print("Thanks for using the calculator!")
        break
    elif operation == "history":
        show_history()
        continue
    
    if operation in ["+", "-", "*", "/"]:
        num1 = float(input("First number: "))
        num2 = float(input("Second number: "))
        
        if operation == "+":
            result = add(num1, num2)
        elif operation == "-":
            result = subtract(num1, num2)
        elif operation == "*":
            result = multiply(num1, num2)
        else:
            result = divide(num1, num2)
        
        calc_string = f"{num1} {operation} {num2} = {result}"
        history.append(calc_string)
        print("Result:", result)
        print()
    else:
        print("Invalid operation!")
\`\`\`

## Project 3: Interactive Quiz System

A quiz that tracks scores and provides feedback:

\`\`\`python
def run_quiz():
    questions = [
        {
            "question": "What is 15 + 27?",
            "answer": "42",
            "points": 10
        },
        {
            "question": "What is the capital of England?",
            "answer": "london",
            "points": 15
        },
        {
            "question": "How many sides does a triangle have?",
            "answer": "3",
            "points": 5
        },
        {
            "question": "What is 8 × 7?",
            "answer": "56",
            "points": 10
        }
    ]
    
    score = 0
    total_points = sum(q["points"] for q in questions)
    
    print("=== Python Knowledge Quiz ===")
    print(f"Answer {len(questions)} questions. Good luck!\\n")
    
    for i, q in enumerate(questions, 1):
        print(f"Question {i} (worth {q['points']} points):")
        answer = input(f"{q['question']} ")
        
        if answer.lower().strip() == q["answer"].lower():
            print("✅ Correct!")
            score = score + q["points"]
        else:
            print(f"❌ Wrong! The answer is {q['answer']}")
        print()
    
    percentage = (score / total_points) * 100
    
    print("=== Quiz Results ===")
    print(f"Your score: {score} out of {total_points} points")
    print(f"Percentage: {percentage:.1f}%")
    
    if percentage >= 90:
        print("🏆 Outstanding! You're a Python master!")
    elif percentage >= 70:
        print("⭐ Great job! You know your stuff!")
    elif percentage >= 50:
        print("👍 Good effort! Keep practicing!")
    else:
        print("💪 Keep learning! You'll get better!")

run_quiz()
\`\`\`

## Project 4: Creative Turtle Art Generator

Create beautiful patterns with code:

\`\`\`python
import turtle
import random

def draw_colorful_spiral():
    t = turtle.Turtle()
    t.speed(10)
    
    colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
    
    for i in range(100):
        t.color(colors[i % len(colors)])
        t.forward(i * 2)
        t.left(91)  # Slightly more than 90 creates a spiral

def draw_flower():
    t = turtle.Turtle()
    t.speed(8)
    
    # Draw petals
    for i in range(12):
        t.color("pink")
        t.begin_fill()
        t.circle(40)
        t.end_fill()
        t.left(30)
    
    # Draw center
    t.penup()
    t.goto(0, -15)
    t.pendown()
    t.color("yellow")
    t.begin_fill()
    t.circle(15)
    t.end_fill()

def draw_geometric_pattern():
    t = turtle.Turtle()
    t.speed(10)
    
    colors = ["red", "blue", "green", "yellow"]
    
    for i in range(20):
        t.color(colors[i % 4])
        size = 20 + (i * 5)
        
        for j in range(4):
            t.forward(size)
            t.left(90)
        
        t.left(18)

# Choose which pattern to draw
print("Choose a pattern:")
print("1. Colorful Spiral")
print("2. Flower")
print("3. Geometric Pattern")

choice = input("Enter 1, 2, or 3: ")

if choice == "1":
    draw_colorful_spiral()
elif choice == "2":
    draw_flower()
elif choice == "3":
    draw_geometric_pattern()

turtle.done()
\`\`\`

## Project 5: Personal Information Manager

A program that stores and displays information:

\`\`\`python
def create_profile():
    print("=== Create Your Profile ===")
    
    name = input("Full name: ")
    age = int(input("Age: "))
    favorite_color = input("Favorite color: ")
    favorite_subject = input("Favorite subject: ")
    hobby = input("Hobby: ")
    
    profile = {
        "name": name,
        "age": age,
        "favorite_color": favorite_color,
        "favorite_subject": favorite_subject,
        "hobby": hobby
    }
    
    return profile

def display_profile(profile):
    print("\\n=== Your Profile ===")
    print(f"Name: {profile['name']}")
    print(f"Age: {profile['age']}")
    print(f"Favorite Color: {profile['favorite_color']}")
    print(f"Favorite Subject: {profile['favorite_subject']}")
    print(f"Hobby: {profile['hobby']}")
    
    # Calculate some fun facts
    years_until_teen = 13 - profile['age']
    if years_until_teen > 0:
        print(f"\\nFun fact: You'll be a teenager in {years_until_teen} years!")
    elif years_until_teen == 0:
        print("\\nFun fact: You're a teenager now!")
    else:
        print("\\nFun fact: You're already a teenager!")

# Create and display profile
my_profile = create_profile()
display_profile(my_profile)
\`\`\`

## Challenge Projects

### Challenge 1: Rock, Paper, Scissors Game

\`\`\`python
import random

def play_rps():
    choices = ["rock", "paper", "scissors"]
    player_score = 0
    computer_score = 0
    
    print("=== Rock, Paper, Scissors ===")
    print("First to 3 wins!")
    print()
    
    while player_score < 3 and computer_score < 3:
        player = input("Choose: rock, paper, or scissors: ").lower()
        computer = random.choice(choices)
        
        print(f"Computer chose: {computer}")
        
        if player == computer:
            print("Tie!")
        elif (player == "rock" and computer == "scissors") or \\
             (player == "paper" and computer == "rock") or \\
             (player == "scissors" and computer == "paper"):
            print("You win this round!")
            player_score = player_score + 1
        else:
            print("Computer wins this round!")
            computer_score = computer_score + 1
        
        print(f"Score - You: {player_score}, Computer: {computer_score}\\n")
    
    if player_score == 3:
        print("🎉 You won the game!")
    else:
        print("💻 Computer won the game!")

play_rps()
\`\`\`

### Challenge 2: Math Practice Program

\`\`\`python
import random

def math_practice():
    correct = 0
    total = 5
    
    print("=== Math Practice ===")
    print("Answer 5 math problems. Let's go!\\n")
    
    for i in range(total):
        num1 = random.randint(1, 20)
        num2 = random.randint(1, 20)
        operation = random.choice(["+", "-", "*"])
        
        if operation == "+":
            answer = num1 + num2
            symbol = "+"
        elif operation == "-":
            answer = num1 - num2
            symbol = "-"
        else:
            answer = num1 * num2
            symbol = "×"
        
        user_answer = int(input(f"Question {i+1}: {num1} {symbol} {num2} = "))
        
        if user_answer == answer:
            print("✅ Correct!")
            correct = correct + 1
        else:
            print(f"❌ Wrong! The answer is {answer}")
        print()
    
    percentage = (correct / total) * 100
    print(f"Results: {correct} out of {total} correct ({percentage}%)")
    
    if percentage == 100:
        print("🏆 Perfect score! Amazing!")
    elif percentage >= 80:
        print("⭐ Great job!")
    else:
        print("💪 Keep practicing!")

math_practice()
\`\`\`

## Project Development Workflow

1. **Plan**: Write down what you want to build
2. **Start Simple**: Get a basic version working first
3. **Test**: Run it and see what happens
4. **Fix**: Correct any errors
5. **Enhance**: Add more features
6. **Refine**: Make it better and more user-friendly

## Try It Yourself

Build your own projects! Here are ideas:

1. **Personal Projects**
   - Daily journal program
   - Habit tracker
   - Personal calculator for your needs

2. **Game Projects**
   - Number guessing game with difficulty levels
   - Word scramble game
   - Simple adventure text game

3. **Utility Projects**
   - Unit converter (meters to feet, etc.)
   - Tip calculator
   - Study timer with breaks

4. **Art Projects**
   - Draw your name with turtle
   - Create a pattern generator
   - Make animated drawings

## Example Code to Guide You

Here's some example code showing how to combine different concepts:

\`\`\`python
# Example: Combining variables, input, if statements, and loops
# Note: In this simulator, we'll use direct values instead of input()

user_name = "Alex"  # This simulates: input("What's your name? ")
user_age = 9       # This simulates: int(input("How old are you? "))

# Using if statements
if user_age < 10:
    message = "You're a young coder!"
elif user_age < 15:
    message = "You're a growing programmer!"
else:
    message = "You're an experienced learner!"

# Using a loop to repeat
print("Hello,", user_name)
for i in range(3):
    print(message)

# Notice how:
# - We combine variables, conditions, and loops
# - Each part does something different
# - Together they create a complete program
\`\`\`

**Now try your own version!** Combine what you've learned to build something creative!

<!-- EXERCISE_START -->
{
  "instruction": "Create a simple project that combines what you've learned! Build a program that asks for the user's name and age, then uses if statements to give personalized advice based on their age, and uses a loop to print a fun message multiple times. Be creative!",
  "codePattern": "input|if|for|while",
  "expectedContains": null,
  "starterCode": "try:\\n    user_name = input(\"What is your name? \")\\n    user_age = int(input(\"How old are you? \"))\\nexcept Exception:\\n    user_name = \"Alex\"  # TODO: change the name\\n    user_age = 10        # TODO: change the age\\n\\n# TODO: customize the message based on age\\nif user_age < 8:\\n    message = \"You're just getting started!\"\\nelif user_age < 12:\\n    message = \"You're a growing programmer!\"\\nelse:\\n    message = \"You're an experienced learner!\"\\n\\nprint(\"Hello\", user_name)\\nfor i in range(3):\\n    print(message)"
}
<!-- EXERCISE_END -->

## Important Notes

- Projects combine all concepts: variables, input, decisions, loops, and functions
- Start simple, then add features gradually
- Test your code frequently as you build
- Don't be afraid to experiment and try new things
- When stuck, break the problem into smaller pieces
- Read error messages carefully - they tell you what's wrong
- Most importantly: **Have fun and be creative!**`,
      quizId: null,
      assessmentType: null,
      categoryId: 'python',
    }),



    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 12,
      title: "3D Modeling Step 1: Sketching",
      emoji: '✏️',
      content: `# 3D Modeling Step 1: Sketching

## What Is 3D Modeling?

3D modeling is building a digital object in three dimensions: width, height, and depth. You start with simple pieces and shape them into something complex, like digital LEGO.

**The Geometry Trinity**

- **Vertex**: a single point in space (X, Y, Z)
- **Edge**: a straight line between two vertices
- **Face**: a flat surface made by connecting edges

Together, vertices, edges, and faces make a **mesh**, which is the "skin" of a 3D model.


## How Do Shapes Make Things?

Most models begin as **basic shapes**:

- **Cube** (boxy objects)
- **Cylinder** (tubes, bottles)
- **Sphere** (balls, wheels)

Designers **add**, **subtract**, and **stretch** these shapes to make new forms.


## What Is a Sketch?

A **sketch** is a 2D drawing on a flat plane. Think of it as a blueprint.

- **XY plane**: top view
- **XZ plane**: front view
- **YZ plane**: side view

You sketch in 2D first, then turn it into 3D.


## From Sketch to 3D

The most common way to turn a sketch into a 3D object is **extrude**:

1. Draw a 2D shape (rectangle, circle, triangle)
2. Pull it out to give it **depth**

That simple idea builds almost everything.


**Interactive 3D Viewer**: Explore the model below and spot points, lines, and faces.

<!-- MODEL_VIEWER src="/models/Astronaut.glb" alt="Astronaut model" auto-rotate="true" camera-controls="true" -->


### Mini Mission

- Find a **flat face** on the model.
- Trace where two faces meet (that line is an **edge**).
- Point to one tiny corner (that point is a **vertex**).


## Try It (No Software Needed)

1. Draw a **square** on paper.
2. Imagine pulling it upward to make a **cube**.
3. Draw a **circle** on paper.
4. Imagine pulling it upward to make a **cylinder**.

These are sketches becoming 3D.


<!-- QUESTION_START -->
What is a **vertex** in 3D modeling?
<!-- OPTIONS -->
A flat surface|A straight line|A single point in space|A finished 3D object
<!-- CORRECT -->
2
<!-- EXPLANATION -->
A vertex is a single point in 3D space, defined by X, Y, and Z coordinates.
<!-- QUESTION_END -->


<!-- QUESTION_START -->
What is a **sketch**?
<!-- OPTIONS -->
A 3D model|A 2D drawing on a plane|A color palette|A saved file
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A sketch is a 2D drawing on a flat plane that you can later turn into 3D.
<!-- QUESTION_END -->


<!-- QUESTION_START -->
Which action turns a 2D sketch into a 3D form?
<!-- OPTIONS -->
Rotate|Extrude|Zoom|Pan
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Extrude pulls a 2D shape into the third dimension to create depth.
<!-- QUESTION_END -->


## Key Concepts Learned

- **Vertex, Edge, Face**: the building blocks of 3D models
- **Sketch**: a 2D blueprint on a plane
- **Extrude**: turning 2D into 3D by adding depth
- **Primitives**: basic shapes that combine into complex models

## Important Notes

- Start simple: a clean sketch makes a clean model
- Every 3D object is made from vertices, edges, and faces
- If you can sketch it, you can model it`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 13,
      title: "3D Modeling Step 2: Planes and Sketching",
      emoji: '👔',
      content: `# 3D Modeling Step 2: Planes and Sketching

## Big Idea
A **sketch** is a 2D drawing on a plane. Planes are like invisible sheets you draw on.

**Planes**
- **XY** = top view
- **XZ** = front view
- **YZ** = side view

## Why It Matters
If you choose the wrong plane, your model is rotated or misplaced.

## Mini Mission
- Point to the **top view** plane.
- Point to the **front view** plane.
- Which plane would you use to draw a face?

## Key Concepts
- Sketch = 2D blueprint
- Planes set the direction of your model
- Good sketches are centered and simple

<!-- QUESTION_START -->
Which plane shows the **top view**?
<!-- OPTIONS -->
XY|XZ|YZ|Any plane
<!-- CORRECT -->
0
<!-- EXPLANATION -->
The XY plane is the top view.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
A sketch is best described as:
<!-- OPTIONS -->
A 3D object|A 2D drawing on a plane|A camera|A texture
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A sketch is a 2D drawing on a plane.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
If your model looks rotated, what did you likely pick wrong?
<!-- OPTIONS -->
The plane|The color|The zoom|The save file
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Choosing the wrong plane rotates the model.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 14,
      title: "3D Modeling Step 3: 2D to 3D (Extrude)",
      emoji: '🏺',
      content: `# 3D Modeling Step 3: 2D Shapes to 3D (Extrude)

## Big Idea
Most 3D models start as **2D shapes** that are pulled into the third dimension.

**Examples**
- Square -> Cube
- Circle -> Cylinder
- Triangle -> Prism

## Mini Mission
- Sketch a square and **extrude** it into a cube.
- Sketch a circle and **extrude** it into a cylinder.

## Key Concepts
- **Extrude** adds depth
- Simple shapes build complex objects

<!-- QUESTION_START -->
What 3D shape comes from extruding a circle?
<!-- OPTIONS -->
Cube|Sphere|Cylinder|Pyramid
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Extruding a circle creates a cylinder.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Extrude means:
<!-- OPTIONS -->
Rotate|Add depth|Shrink|Color
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Extrude pulls a 2D sketch into 3D.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Which starts most 3D models?
<!-- OPTIONS -->
A sketch|A texture|A camera|A light
<!-- CORRECT -->
0
<!-- EXPLANATION -->
A sketch is the usual starting point.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 15,
      title: "3D Modeling Step 4: Add and Subtract",
      emoji: '🔧',
      content: `# 3D Modeling Step 4: Add and Subtract (Combine)

## Big Idea
You can **add** shapes together or **cut** shapes away to make new forms.

**Additive** = join parts
**Subtractive** = remove holes or slots

## Mini Mission
- Add a small cylinder to a block.
- Cut a hole through the block.

## Key Concepts
- Combine = join
- Cut = remove
- Modeling is shape + shape - shape

<!-- QUESTION_START -->
What does a **cut** do?
<!-- OPTIONS -->
Adds a new part|Removes material|Changes color|Saves the file
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Cut removes material from the model.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Which action is **additive**?
<!-- OPTIONS -->
Union|Cut|Hide|Zoom
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Union is an additive combine.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Why use subtraction?
<!-- OPTIONS -->
To add texture|To make holes|To rotate|To rename
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Subtraction is used to create holes and openings.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 16,
      title: "3D Modeling Step 5: Move, Rotate, Scale",
      emoji: '🍾',
      content: `# 3D Modeling Step 5: Move, Rotate, Scale

## Big Idea
You can **move**, **rotate**, and **scale** shapes to position them perfectly.

- **Move**: slide along X, Y, or Z
- **Rotate**: spin around an axis
- **Scale**: resize

## Mini Mission
- Move a cube to the right.
- Rotate it 90 degrees.
- Scale it to be taller.

## Key Concepts
- X, Y, Z axes control direction
- Small changes make big differences

<!-- QUESTION_START -->
Which tool changes **size**?
<!-- OPTIONS -->
Rotate|Move|Scale|Pan
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Scale changes size.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Rotate means:
<!-- OPTIONS -->
Slide|Spin|Stretch|Copy
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Rotate spins an object around an axis.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Move uses which directions?
<!-- OPTIONS -->
X, Y, Z axes|Only left/right|Only up/down|Zoom
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Move uses the X, Y, Z axes.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 17,
      title: "3D Modeling Step 6: Symmetry and Mirror",
      emoji: '📝',
      content: `# 3D Modeling Step 6: Symmetry and Mirroring

## Big Idea
Many objects are **symmetrical**. You can model half and **mirror** it.

## Mini Mission
- Model half a shape.
- Mirror it across the middle plane.

## Key Concepts
- Symmetry saves time
- Mirror creates a perfect opposite

<!-- QUESTION_START -->
Why use mirror?
<!-- OPTIONS -->
To add color|To save time|To zoom|To delete
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Mirror lets you build half and copy the other half.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Symmetry means:
<!-- OPTIONS -->
Both halves match|Different sizes|Rotated parts|Hidden parts
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Symmetry means both halves match.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Mirror uses which reference?
<!-- OPTIONS -->
A plane|A color|A file|A texture
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Mirror reflects across a plane.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 18,
      title: "3D Modeling Step 7: Fillet and Chamfer",
      emoji: '📎',
      content: `# 3D Modeling Step 7: Edge Control (Fillet and Chamfer)

## Big Idea
Edges can be **sharp** or **rounded**.

- **Fillet** = rounded edge
- **Chamfer** = angled edge

## Mini Mission
- Round the edges of a cube.
- Try a chamfer instead.

## Key Concepts
- Fillets make models feel safe and real
- Chamfers look crisp and engineered

<!-- QUESTION_START -->
A fillet makes an edge:
<!-- OPTIONS -->
Sharp|Rounded|Hidden|Longer
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A fillet rounds an edge.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
A chamfer creates:
<!-- OPTIONS -->
A curve|An angle|A hole|A mirror
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A chamfer cuts the edge into an angled face.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Why add fillets?
<!-- OPTIONS -->
To color|To smooth edges|To rename|To rotate
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Fillets smooth edges.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 19,
      title: "3D Modeling Step 8: Components and Parts",
      emoji: '📦',
      content: `# 3D Modeling Step 8: Components and Parts

## Big Idea
Complex models are made of **parts** grouped into **components**.

## Mini Mission
- Separate a model into 3 parts.
- Name each part.

## Key Concepts
- Components keep designs organized
- Names help you find parts fast

<!-- QUESTION_START -->
Why use components?
<!-- OPTIONS -->
To organize parts|To change color|To zoom|To delete
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Components organize your model.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
A component is:
<!-- OPTIONS -->
A random shape|A named group of parts|A texture|A plane
<!-- CORRECT -->
1
<!-- EXPLANATION -->
A component is a named group of parts.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Good naming helps you:
<!-- OPTIONS -->
Move faster|Lose files|Shrink models|Render less
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Good naming speeds up your work.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 20,
      title: "3D Modeling Step 9: Dimensions and Constraints",
      emoji: '🧴',
      content: `# 3D Modeling Step 9: Dimensions and Constraints

## Big Idea
Dimensions and constraints keep sketches accurate and stable.

- **Dimension** = exact size
- **Constraint** = rule (parallel, perpendicular, equal)

## Mini Mission
- Make a rectangle exactly 50 mm wide.
- Constrain two lines to be parallel.

## Key Concepts
- Fully constrained sketches are predictable
- Unconstrained sketches move by accident

<!-- QUESTION_START -->
What does a dimension control?
<!-- OPTIONS -->
Color|Size|Camera|Light
<!-- CORRECT -->
1
<!-- EXPLANATION -->
Dimensions set the size.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
A constraint is:
<!-- OPTIONS -->
A rule|A texture|A file|A mesh
<!-- CORRECT -->
0
<!-- EXPLANATION -->
A constraint is a rule on the sketch.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Why constrain sketches?
<!-- OPTIONS -->
To keep shapes stable|To change color|To rotate|To delete
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Constraints stop sketches from moving by accident.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year4',
      subjectId: 'technology',
      lessonNumber: 21,
      title: "3D Modeling Step 10: Exporting & Manufacturing",
      emoji: '📤',
      content: `# 3D Modeling Step 10: Mini Project (Capstone)

## Big Idea
Use your skills to build a simple object from start to finish.

## Project
Create a **key tag**:
1. Sketch a rectangle.
2. Extrude to make it 3D.
3. Cut a small hole.
4. Round the edges.

## Checklist
- Sketch on the correct plane
- Use dimensions
- Extrude to thickness
- Add a hole
- Apply fillets

<!-- QUESTION_START -->
Which step gives a sketch **depth**?
<!-- OPTIONS -->
Extrude|Rotate|Mirror|Zoom
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Extrude pulls a sketch into 3D.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Which tool makes smooth edges?
<!-- OPTIONS -->
Fillet|Scale|Pan|Hide
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Fillet rounds edges.
<!-- QUESTION_END -->

<!-- QUESTION_START -->
Why use dimensions in a project?
<!-- OPTIONS -->
For accuracy|For color|For sound|For speed only
<!-- CORRECT -->
0
<!-- EXPLANATION -->
Dimensions make sizes accurate.
<!-- QUESTION_END -->
`,
      quizId: null,
      assessmentType: null,
      categoryId: '3d-modeling',
    }),

    

    
  ];
}

