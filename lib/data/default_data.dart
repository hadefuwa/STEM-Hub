import 'app_data.dart';
import '../models/lesson.dart';
import '../models/quiz.dart';
import '../models/question.dart';

class DefaultData {
  static AppData getDefaultData() {
    return AppData(
      students: [],
      lessons: _getDefaultLessons(),
      quizzes: _getDefaultQuizzes(),
      progress: [],
      videoResources: [],
    );
  }

  static List<Lesson> _getDefaultLessons() {
    int lessonId = 1;
    int quizId = 1;

    return [
      // Year 1 - Maths
      Lesson(
        id: lessonId++,
        yearId: 'year1',
        subjectId: 'maths',
        lessonNumber: 1,
        title: 'Counting to 10',
        content: '''
# Counting to 10

Let's learn to count from 1 to 10!

## Numbers 1-10

1. One
2. Two
3. Three
4. Four
5. Five
6. Six
7. Seven
8. Eight
9. Nine
10. Ten

## Practice

Count your fingers! How many do you have?
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      Lesson(
        id: lessonId++,
        yearId: 'year1',
        subjectId: 'maths',
        lessonNumber: 2,
        title: 'Adding Numbers',
        content: '''
# Adding Numbers

Addition means putting numbers together!

## Examples

- 2 + 3 = 5
- 1 + 4 = 5
- 3 + 2 = 5

## Practice

Try adding: 2 + 2 = ?
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Year 1 - English
      Lesson(
        id: lessonId++,
        yearId: 'year1',
        subjectId: 'english',
        lessonNumber: 1,
        title: 'The Alphabet',
        content: '''
# The Alphabet

Let's learn the letters of the alphabet!

## A to Z

A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

## Practice

Can you say the alphabet out loud?
        ''',
        quizId: quizId++,
        assessmentType: 'test',
      ),
      // Year 2 - Maths
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'maths',
        lessonNumber: 1,
        title: 'Counting to 20',
        content: '''
# Counting to 20

Let's learn numbers from 11 to 20!

## Numbers 11-20

11, 12, 13, 14, 15, 16, 17, 18, 19, 20

## Practice

Count from 1 to 20!
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Reception - Maths
      Lesson(
        id: lessonId++,
        yearId: 'reception',
        subjectId: 'maths',
        lessonNumber: 1,
        title: 'Recognising Numbers',
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
      // Nursery - Maths Lessons
      Lesson(
        id: lessonId++,
        yearId: 'nursery',
        subjectId: 'maths',
        lessonNumber: 1,
        title: 'Counting to 10',
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
      // Nursery - Technology - Clicking Game
      Lesson(
        id: lessonId++,
        yearId: 'nursery',
        subjectId: 'technology',
        lessonNumber: 1,
        title: 'Clicking Game',
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
      // Year 2 - Technology - Arduino Lessons
      // Lesson 1: void setup()
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 1,
        title: 'Arduino Lesson 1: Understanding void setup()',
        content: '''
# Arduino Lesson 1: Understanding void setup()

## Introduction to setup()

Every Arduino program must have a `setup()` function. This function runs **once** when the Arduino board is powered on or reset.

## What is void setup()?

The `setup()` function is where you initialize your Arduino program. It's called automatically when the sketch starts.

## Syntax

```cpp
void setup() {
  // Your initialization code goes here
}
```

## Key Points

1. **Runs only once**: The setup function executes exactly once when the Arduino starts
2. **Initialization**: Use it to configure pins, initialize serial communication, or set initial values
3. **Required**: Every Arduino sketch must have a setup function, even if it's empty
4. **Void keyword**: The `void` keyword means this function doesn't return any value

## Common Uses

- Setting pin modes with `pinMode()`
- Starting serial communication with `Serial.begin()`
- Initializing variables
- Setting up libraries

## Example

```cpp
void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as output
  Serial.begin(9600);   // Start serial at 9600 baud
}
```

## Important Notes

- Setup runs before the loop function
- If setup is missing, your code will not compile
- You can only have one setup function per sketch
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 2: void loop()
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 2,
        title: 'Arduino Lesson 2: Understanding void loop()',
        content: '''
# Arduino Lesson 2: Understanding void loop()

## Introduction to loop()

The `loop()` function is the heart of an Arduino program. After `setup()` finishes, `loop()` runs continuously until the Arduino is powered off.

## What is void loop()?

The `loop()` function contains the main program logic that runs repeatedly in an infinite cycle.

## Syntax

```cpp
void loop() {
  // Your main program code goes here
  // This code runs over and over again
}
```

## Key Points

1. **Runs continuously**: The loop function executes repeatedly, creating an infinite loop
2. **Main program logic**: This is where your program's primary functionality lives
3. **Required**: Every Arduino sketch must have a loop function, even if it's empty
4. **Execution order**: Setup runs once, then loop runs forever

## How It Works

```
Power On → setup() runs once → loop() runs → loop() runs → loop() runs → ...
```

## Common Uses

- Reading sensor values
- Controlling outputs (LEDs, motors, etc.)
- Processing data
- Responding to inputs

## Example

```cpp
void loop() {
  digitalWrite(13, HIGH);   // Turn LED on
  delay(1000);              // Wait 1 second
  digitalWrite(13, LOW);    // Turn LED off
  delay(1000);              // Wait 1 second
  // This creates a blinking LED
}
```

## Important Notes

- Loop runs forever until power is removed
- Each iteration of loop should complete quickly for responsive programs
- Avoid using `delay()` for too long if you need to respond to inputs quickly
- The loop function must exist, even if empty
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 3: Semicolons
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 3,
        title: 'Arduino Lesson 3: The Importance of Semicolons',
        content: '''
# Arduino Lesson 3: The Importance of Semicolons

## Why Semicolons Matter

In Arduino programming (which uses C/C++), semicolons are **required** to mark the end of statements. Without them, your code will not compile.

## What is a Semicolon?

A semicolon (`;`) is a punctuation mark that tells the compiler "this statement is complete."

## Syntax Rules

```cpp
statement;  // Correct - semicolon marks the end
statement   // ERROR - missing semicolon!
```

## When to Use Semicolons

### Required After:
- Variable declarations: `int x = 5;`
- Function calls: `digitalWrite(13, HIGH);`
- Assignment statements: `x = 10;`
- Increment/decrement: `x++;` or `x--;`
- Return statements: `return 0;`

### NOT Required After:
- Function definitions: `void setup() { }` (no semicolon after closing brace)
- Control structures: `if (condition) { }` (no semicolon after closing brace)
- Loop structures: `for (int i = 0; i < 10; i++) { }` (no semicolon after closing brace)

## Common Mistakes

### Missing Semicolon
```cpp
int x = 5        // ERROR: missing semicolon
digitalWrite(13, HIGH)  // ERROR: missing semicolon
```

### Correct Version
```cpp
int x = 5;              // Correct
digitalWrite(13, HIGH); // Correct
```

## Why It Matters

1. **Compiler requirement**: C/C++ requires semicolons to parse code correctly
2. **Code clarity**: Semicolons make it clear where one statement ends and another begins
3. **Error prevention**: Missing semicolons cause compilation errors

## Example

```cpp
void setup() {
  pinMode(13, OUTPUT);  // Semicolon required
  Serial.begin(9600);   // Semicolon required
}

void loop() {
  digitalWrite(13, HIGH);  // Semicolon required
  delay(1000);             // Semicolon required
  digitalWrite(13, LOW);   // Semicolon required
  delay(1000);             // Semicolon required
}
```

## Debugging Tip

If you get a compilation error, check:
1. Did you forget a semicolon on the previous line?
2. Are all statements properly terminated?
3. Check the line number in the error message - the problem is often on the line before!

## Important Notes

- Semicolons are statement terminators, not separators
- One statement = one semicolon
- Missing semicolons will prevent your code from compiling
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 4: Variables and Data Types
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 4,
        title: 'Arduino Lesson 4: Variables and Data Types',
        content: '''
# Arduino Lesson 4: Variables and Data Types

## What are Variables?

Variables are containers that store data in your program. They have a name, a type, and a value.

## Data Types in Arduino

### int (Integer)
Stores whole numbers from -32,768 to 32,767.

```cpp
int count = 10;
int temperature = -5;
```

### float (Floating Point)
Stores decimal numbers with 6-7 digits of precision.

```cpp
float pi = 3.14159;
float voltage = 5.5;
```

### char (Character)
Stores a single character.

```cpp
char letter = 'A';
char symbol = '@';
```

### boolean
Stores true or false values.

```cpp
boolean isOn = true;
boolean isComplete = false;
```

### byte
Stores numbers from 0 to 255 (8 bits).

```cpp
byte brightness = 128;
```

### String
Stores text (sequence of characters).

```cpp
String message = "Hello Arduino!";
```

## Variable Declaration

```cpp
dataType variableName = value;
```

## Examples

```cpp
int ledPin = 13;           // Integer variable
float sensorValue = 0.0;   // Float variable
boolean buttonPressed = false;  // Boolean variable
String greeting = "Hi";    // String variable
```

## Variable Naming Rules

1. Must start with a letter or underscore
2. Can contain letters, numbers, and underscores
3. Cannot use reserved words (like `int`, `void`, etc.)
4. Case-sensitive (LED and led are different)

## Scope

Variables can be:
- **Global**: Declared outside functions, accessible everywhere
- **Local**: Declared inside functions, only accessible in that function

## Example Program

```cpp
int globalVar = 100;  // Global variable

void setup() {
  int localVar = 50;  // Local to setup()
  Serial.begin(9600);
  Serial.println(globalVar);  // Can access global
  Serial.println(localVar);   // Can access local
}

void loop() {
  Serial.println(globalVar);  // Can access global
  // Serial.println(localVar); // ERROR: localVar doesn't exist here
}
```

## Important Notes

- Choose the right data type for your needs
- int is most common for whole numbers
- Use float when you need decimals
- Variables must be declared before use
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 5: Digital I/O
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 5,
        title: 'Arduino Lesson 5: Digital Input and Output',
        content: '''
# Arduino Lesson 5: Digital Input and Output

## Digital Pins

Arduino has digital pins that can be configured as either INPUT or OUTPUT. Digital means the pin can only be HIGH (5V or 3.3V) or LOW (0V).

## pinMode()

Configures a pin as either INPUT or OUTPUT. Must be called in `setup()`.

```cpp
pinMode(pinNumber, mode);
```

### Modes:
- `INPUT`: Pin reads voltage (for sensors, buttons)
- `OUTPUT`: Pin provides voltage (for LEDs, motors)

## digitalWrite()

Sets a digital pin HIGH or LOW (only works on OUTPUT pins).

```cpp
digitalWrite(pin, value);
```

### Values:
- `HIGH`: Sets pin to 5V (or 3.3V on 3.3V boards)
- `LOW`: Sets pin to 0V (ground)

## digitalRead()

Reads the value from a digital pin (only works on INPUT pins).

```cpp
int value = digitalRead(pin);
```

### Returns:
- `HIGH` (1): Pin is receiving voltage
- `LOW` (0): Pin is at ground

## Example: Blinking LED

```cpp
void setup() {
  pinMode(13, OUTPUT);  // Set pin 13 as output
}

void loop() {
  digitalWrite(13, HIGH);  // Turn LED on
  delay(1000);              // Wait 1 second
  digitalWrite(13, LOW);    // Turn LED off
  delay(1000);              // Wait 1 second
}
```

## Example: Reading a Button

```cpp
void setup() {
  pinMode(2, INPUT);        // Set pin 2 as input
  pinMode(13, OUTPUT);      // Set pin 13 as output
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(2);  // Read button
  
  if (buttonState == HIGH) {
    digitalWrite(13, HIGH);  // Turn LED on
    Serial.println("Button pressed!");
  } else {
    digitalWrite(13, LOW);   // Turn LED off
  }
}
```

## Pull-up and Pull-down Resistors

Digital inputs can "float" (have uncertain values). Use:
- **Pull-up resistor**: Connects pin to HIGH when not pressed (use `INPUT_PULLUP`)
- **Pull-down resistor**: Connects pin to LOW when not pressed

```cpp
pinMode(2, INPUT_PULLUP);  // Internal pull-up resistor
```

## Important Notes

- Always set pin mode in setup() before using pins
- digitalWrite only works on OUTPUT pins
- digitalRead only works on INPUT pins
- Use INPUT_PULLUP for buttons to avoid floating values
- Digital pins can only be HIGH or LOW, nothing in between
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 6: Analog I/O
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 6,
        title: 'Arduino Lesson 6: Analog Input and Output (PWM)',
        content: '''
# Arduino Lesson 6: Analog Input and Output (PWM)

## Analog vs Digital

- **Digital**: Only HIGH or LOW (0 or 1)
- **Analog**: Continuous range of values (0 to 1023 for input, 0 to 255 for output)

## Analog Input: analogRead()

Reads analog voltage from analog pins (A0-A5). Returns a value from 0 to 1023.

```cpp
int sensorValue = analogRead(pin);
```

### How It Works:
- 0V = 0
- 5V (or 3.3V) = 1023
- Values in between are proportional

## Example: Reading a Potentiometer

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(A0);  // Read from analog pin A0
  Serial.println(potValue);       // Print value (0-1023)
  delay(100);
}
```

## Analog Output: analogWrite() and PWM

Arduino doesn't have true analog output. Instead, it uses **PWM (Pulse Width Modulation)**.

### PWM Pins
On most Arduino boards, PWM pins are marked with ~ (e.g., 3, 5, 6, 9, 10, 11)

### analogWrite()
Writes a PWM value (0 to 255) to a PWM-capable pin.

```cpp
analogWrite(pin, value);
```

- 0 = Always LOW (0% duty cycle)
- 255 = Always HIGH (100% duty cycle)
- 128 = 50% duty cycle (half brightness)

## Example: Fading LED

```cpp
void setup() {
  pinMode(9, OUTPUT);  // PWM pin
}

void loop() {
  // Fade in
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(9, brightness);
    delay(10);
  }
  
  // Fade out
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(9, brightness);
    delay(10);
  }
}
```

## Converting Analog Values

### Map Function
Converts a value from one range to another.

```cpp
int mappedValue = map(value, fromLow, fromHigh, toLow, toHigh);
```

### Example
```cpp
int sensorValue = analogRead(A0);           // 0-1023
int brightness = map(sensorValue, 0, 1023, 0, 255);  // Convert to 0-255
analogWrite(9, brightness);
```

## Important Notes

- analogRead() only works on analog pins (A0-A5)
- analogWrite() only works on PWM-capable pins
- analogRead() returns 0-1023 (10-bit resolution)
- analogWrite() accepts 0-255 (8-bit resolution)
- PWM creates a square wave, not a true analog voltage
- Use map() to convert between ranges
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 7: Control Structures
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 7,
        title: 'Arduino Lesson 7: Control Structures (if/else, loops)',
        content: '''
# Arduino Lesson 7: Control Structures

## Control Structures

Control structures allow your program to make decisions and repeat actions.

## if Statement

Executes code only if a condition is true.

```cpp
if (condition) {
  // Code here runs if condition is true
}
```

## if-else Statement

Executes one block if true, another if false.

```cpp
if (condition) {
  // Code if true
} else {
  // Code if false
}
```

## if-else if-else

Handles multiple conditions.

```cpp
if (condition1) {
  // Code for condition1
} else if (condition2) {
  // Code for condition2
} else {
  // Code if neither
}
```

## Comparison Operators

- `==` : Equal to
- `!=` : Not equal to
- `<`  : Less than
- `>`  : Greater than
- `<=` : Less than or equal
- `>=` : Greater than or equal

## Logical Operators

- `&&` : AND (both must be true)
- `||` : OR (at least one true)
- `!`  : NOT (reverses true/false)

## Example: Button Control

```cpp
void setup() {
  pinMode(2, INPUT_PULLUP);
  pinMode(13, OUTPUT);
}

void loop() {
  if (digitalRead(2) == LOW) {
    digitalWrite(13, HIGH);  // Button pressed
  } else {
    digitalWrite(13, LOW);   // Button not pressed
  }
}
```

## for Loop

Repeats code a specific number of times.

```cpp
for (initialization; condition; increment) {
  // Code to repeat
}
```

### Example
```cpp
for (int i = 0; i < 10; i++) {
  Serial.println(i);  // Prints 0 through 9
}
```

## while Loop

Repeats code while a condition is true.

```cpp
while (condition) {
  // Code to repeat
}
```

### Example
```cpp
int count = 0;
while (count < 5) {
  Serial.println(count);
  count++;
}
```

## do-while Loop

Executes at least once, then repeats while condition is true.

```cpp
do {
  // Code to repeat
} while (condition);
```

## break and continue

- `break`: Exits the loop immediately
- `continue`: Skips to next iteration

## Example: Multiple Conditions

```cpp
int sensorValue = analogRead(A0);

if (sensorValue < 300) {
  digitalWrite(13, LOW);      // Dark
} else if (sensorValue < 700) {
  analogWrite(9, 128);        // Medium
} else {
  analogWrite(9, 255);        // Bright
}
```

## Important Notes

- Use == for comparison, = for assignment
- Conditions must be in parentheses
- Use && for AND, || for OR
- Be careful with infinite loops (while(true))
- for loops are great when you know how many iterations
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 8: Functions
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 8,
        title: 'Arduino Lesson 8: Creating Custom Functions',
        content: '''
# Arduino Lesson 8: Creating Custom Functions

## What are Functions?

Functions are reusable blocks of code that perform a specific task. They help organize code and avoid repetition.

## Function Syntax

```cpp
returnType functionName(parameters) {
  // Function code
  return value;  // If returnType is not void
}
```

## Function Types

### Functions that Return a Value

```cpp
int addNumbers(int a, int b) {
  int result = a + b;
  return result;
}
```

### Functions that Don't Return a Value (void)

```cpp
void blinkLED(int pin, int times) {
  for (int i = 0; i < times; i++) {
    digitalWrite(pin, HIGH);
    delay(500);
    digitalWrite(pin, LOW);
    delay(500);
  }
}
```

## Parameters

Functions can accept input values called parameters.

```cpp
void functionName(type1 param1, type2 param2) {
  // Use param1 and param2 here
}
```

## Calling Functions

```cpp
// Function definition
int multiply(int x, int y) {
  return x * y;
}

// Function call
int result = multiply(5, 3);  // result = 15
```

## Example: LED Control Function

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  blinkLED(13, 3);  // Blink pin 13, 3 times
  delay(2000);
}

// Custom function
void blinkLED(int pin, int times) {
  for (int i = 0; i < times; i++) {
    digitalWrite(pin, HIGH);
    delay(200);
    digitalWrite(pin, LOW);
    delay(200);
  }
}
```

## Example: Sensor Reading Function

```cpp
int readTemperature() {
  int sensorValue = analogRead(A0);
  int temperature = map(sensorValue, 0, 1023, 0, 100);
  return temperature;
}

void loop() {
  int temp = readTemperature();
  Serial.println(temp);
  delay(1000);
}
```

## Function Scope

Variables inside functions are local to that function.

```cpp
void setup() {
  int x = 10;  // Local to setup
}

void loop() {
  int x = 20;  // Different x, local to loop
  // setup's x is not accessible here
}
```

## Global vs Local Variables

```cpp
int globalVar = 100;  // Global - accessible everywhere

void myFunction() {
  int localVar = 50;  // Local - only in this function
  globalVar = 200;    // Can modify global
}
```

## Benefits of Functions

1. **Code reuse**: Write once, use many times
2. **Organization**: Break complex code into manageable pieces
3. **Debugging**: Easier to test individual parts
4. **Readability**: Makes code easier to understand

## Important Notes

- Functions must be defined before they're called (or use prototypes)
- Parameters are passed by value (copies are made)
- Return type must match the function declaration
- void functions don't return anything
- Functions can call other functions
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 9: Arrays
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 9,
        title: 'Arduino Lesson 9: Working with Arrays',
        content: '''
# Arduino Lesson 9: Working with Arrays

## What are Arrays?

Arrays are collections of variables of the same type, stored in contiguous memory locations.

## Array Declaration

```cpp
dataType arrayName[size];
```

### Example
```cpp
int numbers[5];        // Array of 5 integers
float temps[10];       // Array of 10 floats
```

## Array Initialization

```cpp
int numbers[5] = {1, 2, 3, 4, 5};  // Initialize with values
int pins[] = {2, 4, 7, 8};         // Size determined automatically
```

## Accessing Array Elements

Arrays are zero-indexed (first element is at index 0).

```cpp
int numbers[5] = {10, 20, 30, 40, 50};
// Index:        0   1   2   3   4

int first = numbers[0];   // 10
int third = numbers[2];    // 30
int last = numbers[4];     // 50
```

## Modifying Array Elements

```cpp
int numbers[5] = {1, 2, 3, 4, 5};
numbers[0] = 100;  // Change first element to 100
numbers[2] = 300;  // Change third element to 300
```

## Array Length

```cpp
int arraySize = sizeof(numbers) / sizeof(numbers[0]);
```

## Example: Multiple LEDs

```cpp
int ledPins[] = {2, 4, 7, 8, 13};
int numLEDs = 5;

void setup() {
  for (int i = 0; i < numLEDs; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Turn all LEDs on
  for (int i = 0; i < numLEDs; i++) {
    digitalWrite(ledPins[i], HIGH);
  }
  delay(1000);
  
  // Turn all LEDs off
  for (int i = 0; i < numLEDs; i++) {
    digitalWrite(ledPins[i], LOW);
  }
  delay(1000);
}
```

## Example: Storing Sensor Readings

```cpp
int readings[10];
int index = 0;

void loop() {
  readings[index] = analogRead(A0);
  index++;
  
  if (index >= 10) {
    index = 0;  // Reset to beginning
  }
  
  delay(100);
}
```

## Multidimensional Arrays

Arrays can have multiple dimensions.

```cpp
int matrix[3][4];  // 3 rows, 4 columns

// Initialize
int matrix[2][3] = {
  {1, 2, 3},
  {4, 5, 6}
};
```

## Array Bounds

**Important**: Accessing elements outside array bounds causes undefined behavior!

```cpp
int numbers[5] = {1, 2, 3, 4, 5};
// numbers[5] is OUT OF BOUNDS! (valid indices are 0-4)
```

## Example: LED Chaser

```cpp
int leds[] = {2, 3, 4, 5};
int numLEDs = 4;

void setup() {
  for (int i = 0; i < numLEDs; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < numLEDs; i++) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
}
```

## Important Notes

- Arrays are zero-indexed (first element is at index 0)
- Array size must be known at compile time (or use dynamic allocation)
- Be careful not to access elements outside array bounds
- Use loops to iterate through arrays
- Arrays can be passed to functions
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 10: Libraries and Serial Communication
      Lesson(
        id: lessonId++,
        yearId: 'year2',
        subjectId: 'technology',
        lessonNumber: 10,
        title: 'Arduino Lesson 10: Libraries and Serial Communication',
        content: '''
# Arduino Lesson 10: Libraries and Serial Communication

## What are Libraries?

Libraries are collections of code that extend Arduino's functionality. They provide pre-written functions for common tasks.

## Using Libraries

```cpp
#include <LibraryName.h>  // Include the library
```

## Common Built-in Libraries

- `Servo.h`: Control servo motors
- `LiquidCrystal.h`: Control LCD displays
- `Wire.h`: I2C communication
- `SPI.h`: SPI communication
- `EEPROM.h`: Store data in EEPROM

## Example: Using Servo Library

```cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);  // Servo on pin 9
}

void loop() {
  myServo.write(90);   // Move to 90 degrees
  delay(1000);
  myServo.write(0);    // Move to 0 degrees
  delay(1000);
}
```

## Serial Communication

Serial communication allows Arduino to communicate with computers or other devices.

## Serial.begin()

Initializes serial communication. Must be called in setup().

```cpp
Serial.begin(baudRate);
```

Common baud rates: 9600, 115200

## Serial.print() and Serial.println()

Sends data to the serial monitor.

```cpp
Serial.print(value);      // Prints without newline
Serial.println(value);    // Prints with newline
```

## Example: Serial Output

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);
  Serial.print("Sensor value: ");
  Serial.println(sensorValue);
  delay(1000);
}
```

## Serial.available()

Checks if data is available to read.

```cpp
if (Serial.available() > 0) {
  // Data available
}
```

## Serial.read()

Reads incoming serial data (one byte at a time).

```cpp
int incomingByte = Serial.read();
```

## Example: Serial Input

```cpp
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    char command = Serial.read();
    
    if (command == 'H') {
      digitalWrite(13, HIGH);
      Serial.println("LED ON");
    } else if (command == 'L') {
      digitalWrite(13, LOW);
      Serial.println("LED OFF");
    }
  }
}
```

## Serial Monitor

The Serial Monitor (Tools → Serial Monitor) allows you to:
- View data sent from Arduino
- Send data to Arduino
- Set baud rate (must match Serial.begin())

## Installing External Libraries

1. Sketch → Include Library → Manage Libraries
2. Search for library name
3. Click Install

## Example: Complete Serial Program

```cpp
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  Serial.println("Arduino Ready!");
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readString();
    command.trim();  // Remove whitespace
    
    if (command == "on") {
      digitalWrite(13, HIGH);
      Serial.println("LED turned ON");
    } else if (command == "off") {
      digitalWrite(13, LOW);
      Serial.println("LED turned OFF");
    } else {
      Serial.print("Unknown command: ");
      Serial.println(command);
    }
  }
}
```

## Important Notes

- Always call Serial.begin() in setup() before using Serial
- Baud rate must match between Serial.begin() and Serial Monitor
- Serial.println() adds a newline, Serial.print() doesn't
- Serial.read() returns -1 if no data is available
- Libraries must be included at the top of your sketch
- Check library documentation for proper usage
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Year 3 - Technology - Fusion 360 Lessons
      // Lesson 1: Introduction to Fusion 360
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 1,
        title: 'Fusion 360 Lesson 1: Introduction to Fusion 360',
        content: '''
# Fusion 360 Lesson 1: Introduction to Fusion 360

## What is Fusion 360?

Fusion 360 is a cloud-based 3D CAD (Computer-Aided Design), CAM (Computer-Aided Manufacturing), and CAE (Computer-Aided Engineering) software platform. It's used to design, test, and manufacture products.

## Key Features

- **3D Modeling**: Create complex 3D models and assemblies
- **Cloud-Based**: Access your designs from anywhere
- **Collaboration**: Share and collaborate with team members
- **Simulation**: Test your designs before manufacturing
- **Manufacturing**: Generate toolpaths for CNC machines and 3D printers

## Getting Started

### Interface Overview

The Fusion 360 interface consists of:

1. **Application Bar**: Top menu with File, Tools, and Help
2. **Toolbar**: Context-sensitive tools for your current workspace
3. **Browser**: Shows your design history and components
4. **ViewCube**: Navigate and orient your view
5. **Timeline**: Shows your design history and allows you to edit past actions

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
- The interface adapts to your current task
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 2: Sketching Basics
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 2,
        title: 'Fusion 360 Lesson 2: Sketching Basics',
        content: '''
# Fusion 360 Lesson 2: Sketching Basics

## What is a Sketch?

A sketch is a 2D drawing that forms the foundation of 3D models. In Fusion 360, you create 3D objects by starting with 2D sketches and then extruding, revolving, or sweeping them.

## Creating a Sketch

1. Click "Create Sketch" in the toolbar
2. Select a plane (XY, XZ, or YZ) or a face on an existing object
3. The sketch environment activates

## Sketch Tools

### Line Tool
Creates straight lines between two points.

- Click to set start point
- Click again to set end point
- Press Escape to finish

### Rectangle Tool
Creates rectangles quickly.

- **2-Point Rectangle**: Click two opposite corners
- **3-Point Rectangle**: Define width, then height
- **Center Rectangle**: Click center, then corner

### Circle Tool
Creates circles.

- **Center Diameter**: Click center, drag to set radius
- **2-Point Circle**: Click two points on the circle
- **3-Point Circle**: Click three points

### Arc Tool
Creates curved segments.

- **3-Point Arc**: Start, end, and point on arc
- **Center Point Arc**: Center, start, end

## Constraints

Constraints define relationships between sketch elements:

- **Horizontal/Vertical**: Aligns lines to axes
- **Coincident**: Makes points touch
- **Parallel/Perpendicular**: Sets line relationships
- **Tangent**: Makes curves touch smoothly
- **Equal**: Makes dimensions the same
- **Dimension**: Sets exact measurements

## Dimensioning

Add dimensions to control sizes:

1. Click "Dimension" tool
2. Select the element to dimension
3. Click where to place the dimension
4. Enter the value

## Example: Drawing a Square

1. Create a new sketch on the XY plane
2. Use Rectangle tool to draw a rectangle
3. Add Equal constraint to make it square
4. Add Dimension to set size (e.g., 50mm)
5. Click "Finish Sketch"

## Important Notes

- Sketches must be fully constrained (black) before extruding
- Blue elements are under-constrained
- Red elements have conflicts
- Always finish your sketch before creating 3D features
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 3: Extrude and Basic 3D Features
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 3,
        title: 'Fusion 360 Lesson 3: Extrude and Basic 3D Features',
        content: '''
# Fusion 360 Lesson 3: Extrude and Basic 3D Features

## What is Extrude?

Extrude is the most fundamental 3D operation. It takes a 2D sketch and extends it into the third dimension, creating a 3D solid.

## Extrude Tool

Located in the Create menu, Extrude converts sketches into 3D objects.

## Types of Extrusion

### New Body
Creates a new separate solid body.

### Join
Adds material to an existing body.

### Cut
Removes material from an existing body.

### Intersect
Keeps only the overlapping volume.

## Extrusion Options

### Distance
Extrudes a specific distance in one direction.

- **One Side**: Extrudes in one direction only
- **Two Sides**: Extrudes equally in both directions
- **Symmetric**: Same as two sides

### To Object
Extrudes until it reaches another object or face.

### All
Extrudes through all objects in the path.

## Example: Creating a Box

1. Create a sketch with a rectangle (50mm x 30mm)
2. Finish the sketch
3. Click "Extrude"
4. Select the rectangle
5. Set distance to 20mm
6. Click OK

Result: A 50mm x 30mm x 20mm box!

## Other Basic 3D Features

### Revolve
Rotates a sketch around an axis to create cylindrical objects.

### Sweep
Moves a profile along a path.

### Loft
Creates a smooth transition between multiple profiles.

## Modifying Extrusions

After creating an extrude, you can:

- Edit it from the timeline
- Change the distance
- Switch between Join, Cut, and New Body
- Adjust the direction

## Best Practices

- Always fully constrain sketches before extruding
- Use descriptive names for your features
- Keep sketches simple - one feature per sketch when possible
- Use the timeline to edit past operations

## Important Notes

- Extrude only works on closed profiles (no gaps)
- Open profiles can be used for surfaces
- The direction arrow shows extrusion direction
- Negative distances extrude in opposite direction
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 4: Constraints and Dimensions
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 4,
        title: 'Fusion 360 Lesson 4: Constraints and Dimensions',
        content: '''
# Fusion 360 Lesson 4: Constraints and Dimensions

## Understanding Constraints

Constraints are rules that control how sketch elements relate to each other. They ensure your sketch behaves predictably when you make changes.

## Geometric Constraints

These control the shape and relationships:

### Horizontal/Vertical
Forces lines to be perfectly horizontal or vertical.

### Parallel
Makes two or more lines parallel to each other.

### Perpendicular
Makes two lines meet at a 90-degree angle.

### Tangent
Makes a line or arc touch a curve smoothly.

### Coincident
Makes points or endpoints touch.

### Midpoint
Places a point at the middle of a line.

### Concentric
Makes circles or arcs share the same center point.

### Equal
Makes selected elements the same size.

### Symmetric
Makes elements mirror each other across a line.

## Dimensional Constraints

These control the size:

### Dimension Tool
Sets exact measurements.

- **Linear Dimension**: Distance between two points
- **Angular Dimension**: Angle between two lines
- **Radial Dimension**: Radius of circles/arcs
- **Diameter Dimension**: Diameter of circles

## Constraint Colors

- **Black**: Fully constrained (locked in place)
- **Blue**: Under-constrained (can still move)
- **Red**: Over-constrained (conflicts exist)
- **Orange**: Driven dimension (calculated, not set)

## Fully Constraining Sketches

A fully constrained sketch is black and cannot move. This is ideal because:

- Prevents accidental changes
- Makes your design predictable
- Required for parametric modeling

## Example: Constraining a Rectangle

1. Draw a rectangle (currently blue - under-constrained)
2. Add Horizontal constraint to top and bottom lines
3. Add Vertical constraint to side lines
4. Add Equal constraint to make it square
5. Add Dimension to set size (50mm)
6. Sketch turns black - fully constrained!

## Over-Constraining

Too many constraints create conflicts:

- Fusion 360 shows red elements
- You must remove conflicting constraints
- Check the warning message for guidance

## Best Practices

1. Add geometric constraints first
2. Then add dimensions
3. Constrain in logical order
4. Use constraints instead of dimensions when possible
5. Keep sketches simple and organized

## Important Notes

- Constraints are essential for parametric design
- Fully constrained sketches are more reliable
- You can delete constraints from the browser
- Use "Show Constraints" to see all active constraints
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 5: Revolve and Circular Features
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 5,
        title: 'Fusion 360 Lesson 5: Revolve and Circular Features',
        content: '''
# Fusion 360 Lesson 5: Revolve and Circular Features

## What is Revolve?

Revolve rotates a 2D profile around an axis to create cylindrical, spherical, or toroidal (donut-shaped) objects.

## When to Use Revolve

Perfect for creating:
- Cylinders and tubes
- Bowls and cups
- Wheels and pulleys
- Bottles and containers
- Any rotationally symmetric object

## Revolve Tool

Located in the Create menu, similar to Extrude but creates rotational geometry.

## Creating a Revolve

1. Create a sketch with a profile (half the cross-section)
2. Draw an axis line (centerline) for rotation
3. Finish the sketch
4. Click "Revolve"
5. Select the profile
6. Select the axis
7. Set the angle (usually 360°)
8. Click OK

## Revolve Options

### Angle
- **360°**: Full rotation (most common)
- **Custom Angle**: Partial rotation (e.g., 90°, 180°)
- **To Object**: Revolve until reaching another object

### Operation Types
- **New Body**: Creates new solid
- **Join**: Adds to existing body
- **Cut**: Removes material
- **Intersect**: Keeps overlapping volume

## Example: Creating a Cylinder

1. Create sketch on XZ plane
2. Draw a rectangle (width = radius, height = cylinder height)
3. Draw a vertical line on the left as the axis
4. Finish sketch
5. Revolve the rectangle around the axis
6. Set angle to 360°
7. Result: Perfect cylinder!

## Example: Creating a Bowl

1. Create sketch on XZ plane
2. Draw the bowl profile (curved line)
3. Draw horizontal axis line at the top
4. Finish sketch
5. Revolve around the axis
6. Set angle to 360°
7. Result: Bowl shape!

## Important Rules

- The profile must not cross the axis
- Only one side of the axis should have the profile
- The axis can be a line in the sketch or an edge of the model
- Profile must be closed for solid bodies

## Combining Revolve with Other Features

You can:
- Revolve to create base shape
- Then extrude to add features
- Use Cut operation to remove material
- Create complex rotational parts

## Best Practices

- Always include the axis in your sketch
- Use construction lines for the axis
- Keep profiles simple
- Consider the final orientation of your part

## Important Notes

- Revolve creates rotationally symmetric objects
- The axis determines the center of rotation
- 360° creates complete objects
- Partial angles create segments
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 6: Fillet and Chamfer
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 6,
        title: 'Fusion 360 Lesson 6: Fillet and Chamfer',
        content: '''
# Fusion 360 Lesson 6: Fillet and Chamfer

## What are Fillets and Chamfers?

Fillets and chamfers are edge modifications that make parts safer, stronger, and easier to manufacture.

## Fillet

A fillet creates a rounded corner or edge by adding material in a curved shape.

### Uses:
- Remove sharp edges (safety)
- Strengthen corners (reduce stress)
- Improve appearance
- Make parts easier to handle

## Chamfer

A chamfer creates a beveled (angled) edge by cutting material at an angle.

### Uses:
- Remove sharp edges
- Help with assembly (easier insertion)
- Reduce stress concentrations
- Create decorative edges

## Fillet Tool

Located in the Modify menu.

### Types:
- **Constant Radius**: Same radius along entire edge
- **Variable Radius**: Different radii at different points
- **Face Fillet**: Fillets between two faces

### Selecting Edges:
- Click individual edges
- Or select a face to fillet all its edges
- Hold Shift to add more edges

## Chamfer Tool

Also in the Modify menu.

### Types:
- **Distance**: Cuts equal distance on both sides
- **Distance and Angle**: Sets distance and angle
- **Two Distances**: Different distances on each side

## Example: Adding Fillets

1. Create a box (50mm x 30mm x 20mm)
2. Click "Fillet" tool
3. Select the edges you want to round
4. Set radius (e.g., 5mm)
5. Click OK

Sharp edges become smooth and rounded!

## Example: Adding Chamfers

1. Create a box
2. Click "Chamfer" tool
3. Select the edges
4. Set distance (e.g., 3mm)
5. Click OK

Sharp edges become beveled!

## Best Practices

### Fillets:
- Use larger radii for strength
- Smaller radii for appearance
- Apply to all sharp edges for safety
- Consider manufacturing constraints

### Chamfers:
- Use for assembly features
- Smaller chamfers for appearance
- Larger chamfers for functional purposes
- Consider the angle (usually 45°)

## Common Mistakes

- Making fillets/chamfers too large (weakens part)
- Forgetting to fillet internal corners
- Applying to wrong edges
- Not considering manufacturing limits

## Order of Operations

Apply fillets and chamfers:
- After main features are created
- Before final details
- In logical order (largest to smallest)
- Consider how they interact

## Important Notes

- Fillets add material, chamfers remove material
- Both improve part safety and manufacturability
- Can be applied to edges or faces
- Can be edited from the timeline
- Radius/distance can be changed later
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 7: Patterns and Mirroring
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 7,
        title: 'Fusion 360 Lesson 7: Patterns and Mirroring',
        content: '''
# Fusion 360 Lesson 7: Patterns and Mirroring

## What are Patterns?

Patterns create multiple copies of features, bodies, or components in an organized way. This saves time and ensures consistency.

## Types of Patterns

### Rectangular Pattern
Creates copies in rows and columns.

### Circular Pattern
Creates copies arranged in a circle.

### Path Pattern
Creates copies along a curve or edge.

## Rectangular Pattern

Creates a grid of copies.

### Steps:
1. Select the feature or body to pattern
2. Click "Rectangular Pattern"
3. Choose direction 1 (first direction)
4. Set number of instances
5. Set spacing
6. Choose direction 2 (optional, for 2D grid)
7. Click OK

### Example: Creating a Grid of Holes
1. Create one hole
2. Rectangular pattern
3. Direction 1: 5 instances, 20mm spacing
4. Direction 2: 3 instances, 15mm spacing
5. Result: 15 holes in a grid!

## Circular Pattern

Creates copies arranged around a center point.

### Steps:
1. Select feature or body
2. Click "Circular Pattern"
3. Select axis (center of rotation)
4. Set number of instances
5. Set angle (usually 360°)
6. Click OK

### Example: Creating Wheel Spokes
1. Create one spoke
2. Circular pattern
3. Select center axis
4. 8 instances
5. 360° angle
6. Result: 8 evenly spaced spokes!

## Path Pattern

Creates copies along a curve.

### Steps:
1. Select feature or body
2. Click "Path Pattern"
3. Select the path (curve or edge)
4. Set spacing or number of instances
5. Click OK

## Mirror Tool

Creates a mirror copy across a plane.

### When to Use:
- Symmetric parts
- Duplicating features
- Creating left/right versions

### Steps:
1. Select feature, body, or component
2. Click "Mirror"
3. Select mirror plane
4. Click OK

## Pattern Options

### Instance Count
Number of copies to create (includes original).

### Spacing
Distance between instances.

### Suppress
Temporarily hide instances without deleting.

### Adjust
Modify spacing or count after creation.

## Best Practices

- Use patterns instead of manually copying
- Ensure pattern direction is correct
- Check spacing for manufacturing
- Use suppress to test different counts
- Patterns can be edited from timeline

## Common Uses

- **Holes**: Pattern of mounting holes
- **Ribs**: Structural supports
- **Teeth**: Gears and sprockets
- **Decorative**: Repeated features
- **Fasteners**: Multiple screw locations

## Important Notes

- Patterns maintain relationships to original
- Editing original updates all instances
- Can pattern patterns (nested patterns)
- Mirror creates independent copy
- Patterns improve design efficiency
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 8: Assemblies and Joints
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 8,
        title: 'Fusion 360 Lesson 8: Assemblies and Joints',
        content: '''
# Fusion 360 Lesson 8: Assemblies and Joints

## What is an Assembly?

An assembly is a collection of components (parts) that work together. Each component can move and interact with others.

## Components vs Bodies

- **Body**: A single solid object within a component
- **Component**: A container that can hold bodies and move independently
- **Assembly**: Multiple components working together

## Creating Components

1. Design your part
2. Right-click in browser
3. Select "Create Component"
4. Name your component
5. Move bodies into the component

## Joints

Joints define how components move relative to each other.

## Types of Joints

### Rigid Joint
Components are fixed together (no movement).

### Revolute Joint
Rotation around one axis (like a hinge).

### Slider Joint
Linear movement along one axis.

### Cylindrical Joint
Rotation and sliding along one axis.

### Pin-Slot Joint
Rotation around one axis, sliding along another.

### Planar Joint
Movement in a plane (2D movement).

### Ball Joint
Rotation in all directions (like a ball and socket).

## Creating a Joint

1. Click "Assemble" → "Joint"
2. Select first component (moving part)
3. Select second component (fixed part)
4. Choose joint type
5. Select geometry (faces, edges, points)
6. Set motion limits (optional)
7. Click OK

## Example: Hinge Assembly

1. Create two components (door and frame)
2. Create Revolute joint
3. Select door edge as rotation axis
4. Select frame edge as fixed axis
5. Door can now rotate!

## Motion Study

Test your assembly:

1. Click "Motion Study" workspace
2. Add motion to joints
3. Play animation
4. Check for collisions
5. Verify movement is correct

## As-Built Joints

For components already positioned:

1. Select components
2. Click "As-Built Joint"
3. Choose joint type
4. Fusion 360 maintains current position

## Best Practices

- Create components early in design
- Use appropriate joint types
- Test motion before finalizing
- Name components clearly
- Organize in browser

## Common Assembly Issues

- **Over-constrained**: Too many joints
- **Under-constrained**: Parts can move unexpectedly
- **Collisions**: Parts interfere with each other
- **Wrong joint type**: Movement doesn't match intent

## Important Notes

- Joints define relationships, not just position
- Components can have multiple joints
- Motion limits prevent unwanted movement
- Assemblies can be animated
- Joints can be edited from timeline
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 9: Rendering and Visualization
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 9,
        title: 'Fusion 360 Lesson 9: Rendering and Visualization',
        content: '''
# Fusion 360 Lesson 9: Rendering and Visualization

## What is Rendering?

Rendering creates photorealistic images of your 3D models. It simulates how light interacts with materials to produce realistic visuals.

## Rendering Workspace

Switch to the Render workspace to access rendering tools.

## Setting Up a Render

### 1. Scene Settings
- Choose environment (lighting setup)
- Set background
- Adjust camera angle

### 2. Apply Materials
- Select faces or bodies
- Choose material (metal, plastic, wood, etc.)
- Adjust properties (color, roughness, etc.)

### 3. Add Decals
- Apply images or logos
- Position and scale
- Adjust transparency

### 4. Set Up Lighting
- Use environment lighting
- Add additional lights if needed
- Adjust intensity and color

## Materials Library

Fusion 360 includes many materials:

- **Metals**: Steel, aluminum, brass, copper
- **Plastics**: ABS, polycarbonate, rubber
- **Wood**: Oak, pine, mahogany
- **Glass**: Clear, frosted, colored
- **Fabrics**: Canvas, leather, cloth

## Material Properties

### Base Color
The main color of the material.

### Roughness
How smooth or rough the surface is (affects reflections).

### Metallic
Whether the material is metallic (affects how light reflects).

### Specular
Controls the shininess and highlights.

## Rendering Settings

### Quality
- **Draft**: Fast, lower quality
- **Final**: Slower, high quality
- **Maximum**: Best quality, very slow

### Resolution
- Higher resolution = better quality but slower
- Common: 1920x1080 (Full HD)
- Higher: 3840x2160 (4K)

## Creating a Render

1. Switch to Render workspace
2. Apply materials to your model
3. Set up scene and lighting
4. Position camera (use ViewCube)
5. Click "Render"
6. Wait for processing
7. Save the image

## Best Practices

- Use appropriate materials for realism
- Good lighting shows details
- Multiple angles show different views
- High quality for presentations
- Draft quality for quick previews

## Environment Presets

Fusion 360 includes environment presets:

- **Studio**: Professional lighting
- **Outdoor**: Natural sunlight
- **Indoor**: Room lighting
- **Product**: Showcase lighting

## Post-Processing

After rendering, you can:

- Adjust brightness/contrast
- Add effects
- Crop the image
- Export in different formats

## Export Options

- **PNG**: Good quality, supports transparency
- **JPEG**: Smaller file size
- **TIFF**: Highest quality, large files

## Important Notes

- Rendering takes time - be patient
- Higher quality = longer render time
- Materials make a big difference
- Lighting is crucial for realism
- Practice with different settings
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
      // Lesson 10: Exporting and Manufacturing
      Lesson(
        id: lessonId++,
        yearId: 'year3',
        subjectId: 'technology',
        lessonNumber: 10,
        title: 'Fusion 360 Lesson 10: Exporting and Manufacturing',
        content: '''
# Fusion 360 Lesson 10: Exporting and Manufacturing

## Exporting Your Designs

Once your design is complete, you need to export it for manufacturing, sharing, or 3D printing.

## File Formats

### STL (Stereolithography)
Most common for 3D printing.

- **Mesh format**: Converts solid to triangles
- **Universal**: Works with all 3D printers
- **No color/texture**: Geometry only

### STEP
For manufacturing and CAD exchange.

- **Precise geometry**: Maintains exact dimensions
- **Industry standard**: Works with other CAD software
- **Assembly support**: Can export entire assemblies

### OBJ
For rendering and visualization.

- **Mesh format**: Like STL but with materials
- **Texture support**: Can include colors
- **Common in graphics**: Used in animation software

### DXF/DWG
For 2D drawings and laser cutting.

- **2D format**: Flat drawings
- **Laser cutting**: Perfect for CNC laser cutters
- **Drawing views**: Technical drawings

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

## Best Practices

### For 3D Printing:
- Check model is watertight
- Consider print orientation
- Add supports if needed
- Export at appropriate resolution

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
        ''',
        quizId: quizId++,
        assessmentType: 'quiz',
      ),
    ];
  }

  static List<Quiz> _getDefaultQuizzes() {
    int quizId = 1;
    int questionId = 1;

    return [
      // Quiz for Year 1 Maths Lesson 1
      Quiz(
        id: quizId++,
        title: 'Counting to 10 Quiz',
        category: 'Maths',
        ageGroup: 5,
        questions: [
          Question(
            id: questionId++,
            quizId: 1,
            questionText: 'What comes after 5?',
            options: ['4', '6', '7', '8'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 1,
            questionText: 'How many fingers do you have on one hand?',
            options: ['3', '4', '5', '6'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 1,
            questionText: 'What is 2 + 3?',
            options: ['4', '5', '6', '7'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Quiz for Year 1 Maths Lesson 2
      Quiz(
        id: quizId++,
        title: 'Adding Numbers Quiz',
        category: 'Maths',
        ageGroup: 5,
        questions: [
          Question(
            id: questionId++,
            quizId: 2,
            questionText: 'What is 1 + 1?',
            options: ['1', '2', '3', '4'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 2,
            questionText: 'What is 3 + 2?',
            options: ['4', '5', '6', '7'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Test for Year 1 English Lesson 1
      Quiz(
        id: quizId++,
        title: 'The Alphabet Test',
        category: 'English',
        ageGroup: 5,
        questions: [
          Question(
            id: questionId++,
            quizId: 3,
            questionText: 'What is the first letter of the alphabet?',
            options: ['A', 'B', 'C', 'D'],
            correctAnswerIndex: 0,
          ),
          Question(
            id: questionId++,
            quizId: 3,
            questionText: 'What is the last letter of the alphabet?',
            options: ['X', 'Y', 'Z', 'W'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Quiz for Year 2 Maths Lesson 1
      Quiz(
        id: quizId++,
        title: 'Counting to 20 Quiz',
        category: 'Maths',
        ageGroup: 6,
        questions: [
          Question(
            id: questionId++,
            quizId: 4,
            questionText: 'What comes after 15?',
            options: ['14', '16', '17', '18'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 4,
            questionText: 'What is 10 + 5?',
            options: ['14', '15', '16', '17'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Challenge for Reception Maths Lesson 1
      Quiz(
        id: quizId++,
        title: 'Recognising Numbers Challenge',
        category: 'Maths',
        ageGroup: 4,
        questions: [
          Question(
            id: questionId++,
            quizId: 5,
            questionText: 'Which number is three?',
            options: ['1', '2', '3', '4'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 5,
            questionText: 'How many is five?',
            options: ['3', '4', '5', '6'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Quiz for Nursery Maths Lesson 1: Counting to 10
      Quiz(
        id: quizId++,
        title: 'Counting to 10 Quiz',
        category: 'Maths',
        ageGroup: 3,
        questions: [
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'What number comes after 5?',
            options: ['4', '6', '7', '8'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'How many fingers do you have on one hand?',
            options: ['3', '4', '5', '6'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'What is the biggest number we learned in this lesson?',
            options: ['5', '8', '10', '12'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'What number comes before 7?',
            options: ['5', '6', '8', '9'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'If you count 1, 2, 3, 4, 5, what comes next?',
            options: ['4', '6', '7', '10'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Quiz for Nursery Maths Lesson 2: Counting to 20
      Quiz(
        id: quizId++,
        title: 'Counting to 20 Quiz',
        category: 'Maths',
        ageGroup: 3,
        questions: [
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'What number comes after 10?',
            options: ['9', '11', '12', '20'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'How many fingers and toes do you have altogether?',
            options: ['10', '15', '20', '25'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'What is the biggest number we learned in this lesson?',
            options: ['10', '15', '20', '25'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'What number comes after 15?',
            options: ['14', '16', '17', '18'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'If you count 10, 11, 12, 13, 14, what comes next?',
            options: ['13', '15', '16', '20'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 1 Quiz: void setup()
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 1: void setup() Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'How many times does the setup() function execute in an Arduino program?',
            options: ['Once at the start', 'Continuously in a loop', 'Only when called explicitly', 'Twice - once at start and once at end'],
            correctAnswerIndex: 0,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'What is the primary purpose of the setup() function?',
            options: ['To run the main program logic', 'To initialize pins and configure the Arduino', 'To create an infinite loop', 'To handle serial communication only'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'If you forget to include setup() in your Arduino sketch, what happens?',
            options: ['The program runs normally', 'The code will not compile', 'Only the loop() function runs', 'The Arduino resets continuously'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'Which of the following is typically done in setup() but NOT in loop()?',
            options: ['Reading sensor values', 'Controlling LEDs', 'Setting pin modes with pinMode()', 'Using delay() functions'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 6,
            questionText: 'What does the "void" keyword in "void setup()" indicate?',
            options: ['The function returns an integer', 'The function returns a boolean value', 'The function does not return any value', 'The function can be called multiple times'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Arduino Lesson 2 Quiz: void loop()
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 2: void loop() Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'After setup() completes, what happens to the loop() function?',
            options: ['It runs once and stops', 'It runs continuously until power is removed', 'It only runs when called from setup()', 'It runs exactly 100 times'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'What is the execution order in an Arduino program?',
            options: ['loop() runs first, then setup()', 'setup() and loop() run simultaneously', 'setup() runs once, then loop() runs forever', 'Only loop() runs, setup() is optional'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'If you want your Arduino to respond quickly to inputs, what should you avoid in loop()?',
            options: ['Using digitalRead()', 'Using long delay() statements', 'Using if statements', 'Using variables'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'What happens if you create an infinite loop inside loop() using while(true)?',
            options: ['The program runs normally', 'The Arduino will reset', 'The loop() function will never complete that iteration', 'The setup() function will run again'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 7,
            questionText: 'Which statement is TRUE about the loop() function?',
            options: ['It must contain at least one delay() call', 'It can be empty but must still exist', 'It only runs if setup() calls it', 'It runs before setup() executes'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 3 Quiz: Semicolons
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 3: Semicolons Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 8,
            questionText: 'Which of the following requires a semicolon?',
            options: ['void setup() { }', 'if (condition) { }', 'int x = 5;', 'for (int i = 0; i < 10; i++) { }'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 8,
            questionText: 'What happens if you forget a semicolon after a statement?',
            options: ['The program runs normally', 'The code will not compile', 'The statement is ignored', 'The Arduino resets'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 8,
            questionText: 'Which line is CORRECT?',
            options: ['digitalWrite(13, HIGH)', 'pinMode(13, OUTPUT)', 'int count = 10', 'Serial.begin(9600);'],
            correctAnswerIndex: 3,
          ),
          Question(
            id: questionId++,
            quizId: 8,
            questionText: 'Where should you NOT place a semicolon?',
            options: ['After variable declarations', 'After function calls', 'After the closing brace of a function definition', 'After assignment statements'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 8,
            questionText: 'If you get a compilation error on line 10 saying "expected \';\' before...", where is the actual problem likely to be?',
            options: ['On line 10', 'On line 9 (the previous line)', 'In the setup() function', 'In the loop() function'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 4 Quiz: Variables and Data Types
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 4: Variables and Data Types Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 9,
            questionText: 'Which data type should you use to store a decimal number like 3.14?',
            options: ['int', 'float', 'char', 'boolean'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 9,
            questionText: 'What is the range of values an int variable can store?',
            options: ['0 to 255', '-32,768 to 32,767', '-128 to 127', '0 to 1023'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 9,
            questionText: 'Which variable name is INVALID in Arduino?',
            options: ['myVariable', 'sensor_value', 'int', 'ledPin'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 9,
            questionText: 'What is the difference between a global and local variable?',
            options: ['Global variables are faster', 'Local variables can only be accessed within the function they are declared', 'Global variables use less memory', 'There is no difference'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 9,
            questionText: 'If you declare "int count = 5;" inside setup(), can you access it in loop()?',
            options: ['Yes, always', 'No, it is local to setup()', 'Only if you use the extern keyword', 'Yes, but you must initialize it again'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 5 Quiz: Digital I/O
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 5: Digital I/O Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 10,
            questionText: 'What does pinMode(13, OUTPUT) do?',
            options: ['Sets pin 13 to HIGH', 'Configures pin 13 as an output pin', 'Reads the value from pin 13', 'Turns on an LED on pin 13'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 10,
            questionText: 'What values can digitalRead() return?',
            options: ['0 to 1023', 'HIGH or LOW', 'true or false', 'Any integer value'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 10,
            questionText: 'Why would you use INPUT_PULLUP instead of INPUT?',
            options: ['To make the pin read faster', 'To prevent the pin from floating and having uncertain values', 'To increase the voltage on the pin', 'To enable analog reading'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 10,
            questionText: 'What happens if you try to use digitalWrite() on a pin configured as INPUT?',
            options: ['It works normally', 'It has no effect', 'The pin automatically switches to OUTPUT', 'The Arduino resets'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 10,
            questionText: 'If you read a button connected with INPUT_PULLUP, what value indicates the button is pressed?',
            options: ['HIGH', 'LOW', '1', 'Both HIGH and 1 are correct'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 6 Quiz: Analog I/O
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 6: Analog I/O Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 11,
            questionText: 'What is the range of values returned by analogRead()?',
            options: ['0 to 255', '0 to 1023', '-1023 to 1023', '0 to 5'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 11,
            questionText: 'Which pins can be used with analogRead()?',
            options: ['All digital pins', 'Only pins marked with ~', 'Only analog pins A0-A5', 'Pins 0-13'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 11,
            questionText: 'What does analogWrite() actually do?',
            options: ['Creates a true analog voltage', 'Uses PWM (Pulse Width Modulation) to simulate analog', 'Converts digital to analog', 'Only works with analog pins'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 11,
            questionText: 'What is the range of values for analogWrite()?',
            options: ['0 to 1023', '0 to 255', '-255 to 255', '0 to 100'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 11,
            questionText: 'If you read a sensor value of 512 with analogRead(A0), and want to control an LED brightness with analogWrite(9, value), what should the value be to get 50% brightness?',
            options: ['512', '255', '128', '1023'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Arduino Lesson 7 Quiz: Control Structures
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 7: Control Structures Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 12,
            questionText: 'What is the difference between == and = in Arduino?',
            options: ['There is no difference', '== is for comparison, = is for assignment', '= is for comparison, == is for assignment', 'Both are used for assignment'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 12,
            questionText: 'How many times will this loop execute: for (int i = 0; i < 5; i++) { }?',
            options: ['4 times', '5 times', '6 times', 'Infinite times'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 12,
            questionText: 'What does the && operator do?',
            options: ['Logical OR - at least one condition must be true', 'Logical AND - both conditions must be true', 'Logical NOT - reverses the condition', 'Performs addition'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 12,
            questionText: 'What happens if you write: while(true) { } in your loop() function?',
            options: ['The program runs normally', 'The while loop never exits, blocking the rest of loop()', 'The Arduino resets', 'The setup() function runs again'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 12,
            questionText: 'In the condition "if (sensorValue > 500 && sensorValue < 800)", when will the code execute?',
            options: ['When sensorValue is less than 500', 'When sensorValue is between 500 and 800 (exclusive)', 'When sensorValue is greater than 800', 'When sensorValue equals 500 or 800'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 8 Quiz: Functions
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 8: Functions Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 13,
            questionText: 'What does the "void" keyword in a function declaration mean?',
            options: ['The function takes no parameters', 'The function does not return a value', 'The function can only be called once', 'The function is empty'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 13,
            questionText: 'If you define a function "int add(int a, int b) { return a + b; }", what must you do when calling it?',
            options: ['Nothing special', 'Store the result in a variable of type int', 'Call it only from setup()', 'Use the void keyword'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 13,
            questionText: 'What is the scope of a variable declared inside a function?',
            options: ['Global - accessible everywhere', 'Local - only accessible within that function', 'Accessible in setup() and loop()', 'Accessible in all functions except the one it was declared in'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 13,
            questionText: 'Can a function call another function?',
            options: ['No, functions cannot call other functions', 'Yes, functions can call other functions', 'Only if both are void functions', 'Only if called from setup()'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 13,
            questionText: 'What happens if you try to return a value from a void function?',
            options: ['It works normally', 'The code will not compile', 'The return value is ignored', 'The function automatically changes to int type'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Arduino Lesson 9 Quiz: Arrays
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 9: Arrays Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 14,
            questionText: 'What is the index of the first element in an array?',
            options: ['1', '0', '-1', 'It depends on the array size'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 14,
            questionText: 'If you declare "int numbers[5];", what is the valid index range?',
            options: ['1 to 5', '0 to 4', '0 to 5', '1 to 4'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 14,
            questionText: 'What happens if you access numbers[5] when the array is declared as int numbers[5]?',
            options: ['It returns 0', 'It causes undefined behavior - could crash or return garbage', 'It automatically extends the array', 'It returns the last valid element'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 14,
            questionText: 'How do you initialize an array with values: {10, 20, 30}?',
            options: ['int arr[3] = 10, 20, 30;', 'int arr[3] = {10, 20, 30};', 'int arr = {10, 20, 30};', 'int arr[] = 10, 20, 30;'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 14,
            questionText: 'If you have "int leds[] = {2, 4, 7, 8};", what is the value of leds[2]?',
            options: ['2', '4', '7', '8'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Arduino Lesson 10 Quiz: Libraries and Serial
      Quiz(
        id: quizId++,
        title: 'Arduino Lesson 10: Libraries and Serial Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 15,
            questionText: 'Where should you call Serial.begin()?',
            options: ['In loop()', 'In setup()', 'Before including any libraries', 'It is not necessary'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 15,
            questionText: 'What is the difference between Serial.print() and Serial.println()?',
            options: ['Serial.print() is faster', 'Serial.println() adds a newline character, Serial.print() does not', 'Serial.print() only works with numbers', 'There is no difference'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 15,
            questionText: 'What does Serial.available() return?',
            options: ['The number of bytes available to read', 'true or false', 'The next byte of data', 'The baud rate'],
            correctAnswerIndex: 0,
          ),
          Question(
            id: questionId++,
            quizId: 15,
            questionText: 'If Serial.begin(9600) is set, what must the Serial Monitor baud rate be?',
            options: ['115200', '4800', '9600', 'Any value will work'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 15,
            questionText: 'What does #include <LibraryName.h> do?',
            options: ['Installs the library', 'Includes the library code so you can use its functions', 'Removes the library', 'Checks if the library exists'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 1 Quiz: Introduction
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 1: Introduction Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 16,
            questionText: 'What does CAD stand for?',
            options: ['Computer-Aided Design', 'Computer-Aided Drawing', 'Computer Application Development', 'Computer Analysis and Design'],
            correctAnswerIndex: 0,
          ),
          Question(
            id: questionId++,
            quizId: 16,
            questionText: 'Which workspace in Fusion 360 is used to create 3D models?',
            options: ['Render', 'Animation', 'Design', 'Simulation'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 16,
            questionText: 'How do you orbit (rotate) the view in Fusion 360?',
            options: ['Left mouse button', 'Right mouse button', 'Middle mouse button', 'Scroll wheel'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 16,
            questionText: 'What is the ViewCube used for?',
            options: ['Creating cubes', 'Navigating and orienting your view', 'Measuring dimensions', 'Applying materials'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 16,
            questionText: 'Where are your Fusion 360 designs stored?',
            options: ['On your local hard drive only', 'In the cloud automatically', 'On a USB drive', 'They are not saved'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 2 Quiz: Sketching
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 2: Sketching Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 17,
            questionText: 'What is a sketch in Fusion 360?',
            options: ['A 3D model', 'A 2D drawing that forms the foundation of 3D models', 'A rendered image', 'An animation'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 17,
            questionText: 'What does a fully constrained sketch look like?',
            options: ['Red', 'Blue', 'Black', 'Green'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 17,
            questionText: 'Which tool creates circles in a sketch?',
            options: ['Line tool', 'Rectangle tool', 'Circle tool', 'Arc tool'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 17,
            questionText: 'What does the Coincident constraint do?',
            options: ['Makes lines parallel', 'Makes points touch', 'Sets dimensions', 'Creates angles'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 17,
            questionText: 'What must you do before you can create 3D features from a sketch?',
            options: ['Save the file', 'Apply materials', 'Finish the sketch', 'Create a render'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Fusion 360 Lesson 3 Quiz: Extrude
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 3: Extrude Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 18,
            questionText: 'What does the Extrude tool do?',
            options: ['Rotates a sketch', 'Takes a 2D sketch and extends it into the third dimension', 'Applies materials', 'Creates animations'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 18,
            questionText: 'Which Extrude operation removes material from an existing body?',
            options: ['New Body', 'Join', 'Cut', 'Intersect'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 18,
            questionText: 'What type of profile can be extruded to create a solid?',
            options: ['Open profiles with gaps', 'Closed profiles with no gaps', 'Any profile', 'Only circles'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 18,
            questionText: 'What does the "Two Sides" extrusion option do?',
            options: ['Extrudes in one direction only', 'Extrudes equally in both directions', 'Creates two separate bodies', 'Cuts material from both sides'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 18,
            questionText: 'Where can you edit an extrude after creating it?',
            options: ['In the sketch', 'From the timeline', 'In the render workspace', 'In the animation workspace'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 4 Quiz: Constraints
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 4: Constraints Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 19,
            questionText: 'What color indicates a fully constrained sketch?',
            options: ['Blue', 'Red', 'Black', 'Orange'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 19,
            questionText: 'What does the Parallel constraint do?',
            options: ['Makes two lines meet at 90 degrees', 'Makes two or more lines parallel to each other', 'Makes points touch', 'Sets equal dimensions'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 19,
            questionText: 'What does a red sketch element indicate?',
            options: ['Fully constrained', 'Under-constrained', 'Over-constrained with conflicts', 'Driven dimension'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 19,
            questionText: 'What is the best practice for constraining sketches?',
            options: ['Add dimensions first, then geometric constraints', 'Add geometric constraints first, then dimensions', 'Only use dimensions', 'Only use geometric constraints'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 19,
            questionText: 'What does the Tangent constraint do?',
            options: ['Makes lines parallel', 'Makes a line or arc touch a curve smoothly', 'Sets dimensions', 'Creates angles'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 5 Quiz: Revolve
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 5: Revolve Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 20,
            questionText: 'What does the Revolve tool do?',
            options: ['Extrudes a profile', 'Rotates a 2D profile around an axis', 'Applies materials', 'Creates patterns'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 20,
            questionText: 'What is the most common angle for a full revolve?',
            options: ['90°', '180°', '270°', '360°'],
            correctAnswerIndex: 3,
          ),
          Question(
            id: questionId++,
            quizId: 20,
            questionText: 'Can the profile cross the axis in a revolve?',
            options: ['Yes, always', 'No, the profile must not cross the axis', 'Only for partial revolves', 'Only for 360° revolves'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 20,
            questionText: 'What type of objects is Revolve best suited for?',
            options: ['Flat rectangular parts', 'Rotationally symmetric objects like cylinders and bowls', 'Complex assemblies', '2D drawings'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 20,
            questionText: 'What should you include in your sketch for a revolve?',
            options: ['Only the profile', 'The profile and the axis line', 'Only dimensions', 'Materials'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 6 Quiz: Fillet and Chamfer
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 6: Fillet and Chamfer Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 21,
            questionText: 'What is the main difference between a fillet and a chamfer?',
            options: ['Fillet adds material, chamfer removes material', 'Fillet removes material, chamfer adds material', 'They are the same', 'Fillet is for circles, chamfer is for squares'],
            correctAnswerIndex: 0,
          ),
          Question(
            id: questionId++,
            quizId: 21,
            questionText: 'What is a fillet used for?',
            options: ['Creating sharp edges', 'Creating rounded corners for safety and strength', 'Removing material', 'Adding decorative patterns'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 21,
            questionText: 'Where is the Fillet tool located?',
            options: ['Create menu', 'Modify menu', 'Assemble menu', 'Render menu'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 21,
            questionText: 'What happens if you make a fillet radius too large?',
            options: ['Nothing', 'It strengthens the part', 'It can weaken the part or cause errors', 'It automatically adjusts'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 21,
            questionText: 'What is a chamfer commonly used for?',
            options: ['Creating rounded edges', 'Creating beveled edges for assembly and safety', 'Adding material', 'Creating patterns'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 7 Quiz: Patterns
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 7: Patterns Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 22,
            questionText: 'What is the main advantage of using patterns?',
            options: ['They make files smaller', 'They save time and ensure consistency', 'They improve rendering quality', 'They add materials automatically'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 22,
            questionText: 'Which pattern type creates copies arranged in a circle?',
            options: ['Rectangular Pattern', 'Circular Pattern', 'Path Pattern', 'Linear Pattern'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 22,
            questionText: 'What happens when you edit the original feature in a pattern?',
            options: ['Only the original changes', 'All instances in the pattern update', 'The pattern is deleted', 'Nothing happens'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 22,
            questionText: 'What does the Mirror tool create?',
            options: ['A pattern of copies', 'A mirror image copy across a plane', 'A rotated copy', 'A scaled copy'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 22,
            questionText: 'What is a Path Pattern used for?',
            options: ['Creating copies in rows and columns', 'Creating copies arranged in a circle', 'Creating copies along a curve or edge', 'Creating mirror images'],
            correctAnswerIndex: 2,
          ),
        ],
      ),
      // Fusion 360 Lesson 8 Quiz: Assemblies
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 8: Assemblies Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 23,
            questionText: 'What is the difference between a Body and a Component?',
            options: ['There is no difference', 'A Body is a single solid, a Component can hold bodies and move independently', 'A Component is a single solid, a Body can hold components', 'They are the same thing'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 23,
            questionText: 'What type of joint allows rotation around one axis?',
            options: ['Rigid Joint', 'Revolute Joint', 'Slider Joint', 'Ball Joint'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 23,
            questionText: 'What does a Rigid Joint do?',
            options: ['Allows free movement', 'Fixes components together with no movement', 'Allows rotation only', 'Allows sliding only'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 23,
            questionText: 'What workspace allows you to test assembly motion?',
            options: ['Design workspace', 'Render workspace', 'Motion Study workspace', 'Manufacture workspace'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 23,
            questionText: 'What is an As-Built Joint used for?',
            options: ['Creating new joints', 'For components already positioned correctly', 'Deleting joints', 'Editing joint properties'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 9 Quiz: Rendering
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 9: Rendering Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 24,
            questionText: 'What workspace is used for creating photorealistic images?',
            options: ['Design workspace', 'Render workspace', 'Animation workspace', 'Manufacture workspace'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 24,
            questionText: 'What does the Roughness property control?',
            options: ['The color of the material', 'How smooth or rough the surface is', 'The size of the object', 'The lighting intensity'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 24,
            questionText: 'Which render quality setting is fastest?',
            options: ['Maximum', 'Final', 'Draft', 'They are all the same speed'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 24,
            questionText: 'What is the most common resolution for high-quality renders?',
            options: ['640x480', '1280x720', '1920x1080 (Full HD)', '3840x2160 (4K)'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 24,
            questionText: 'What makes a render look realistic?',
            options: ['High polygon count', 'Appropriate materials, good lighting, and proper setup', 'Large file size', 'Complex geometry only'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
      // Fusion 360 Lesson 10 Quiz: Exporting
      Quiz(
        id: quizId++,
        title: 'Fusion 360 Lesson 10: Exporting Quiz',
        category: 'Technology',
        ageGroup: 9,
        questions: [
          Question(
            id: questionId++,
            quizId: 25,
            questionText: 'What file format is most common for 3D printing?',
            options: ['STEP', 'STL', 'OBJ', 'DXF'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 25,
            questionText: 'What does STL stand for?',
            options: ['Standard Triangle Language', 'Stereolithography', 'Simple Text Layout', 'Solid Transfer Language'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 25,
            questionText: 'What file format is best for manufacturing and CAD exchange?',
            options: ['STL', 'STEP', 'OBJ', 'JPEG'],
            correctAnswerIndex: 1,
          ),
          Question(
            id: questionId++,
            quizId: 25,
            questionText: 'What must a model be for successful 3D printing?',
            options: ['Colored', 'Rendered', 'Watertight (solid with no gaps)', 'Animated'],
            correctAnswerIndex: 2,
          ),
          Question(
            id: questionId++,
            quizId: 25,
            questionText: 'What is G-code used for?',
            options: ['Rendering images', 'Controlling manufacturing machines', 'Applying materials', 'Creating animations'],
            correctAnswerIndex: 1,
          ),
        ],
      ),
    ];
  }
}
