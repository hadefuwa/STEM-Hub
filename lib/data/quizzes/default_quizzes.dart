import '../../models/quiz.dart';
import '../../models/question.dart';

List<Quiz> getDefaultQuizzes(int startQuizId, int startQuestionId) {
  int quizId = startQuizId;
  int questionId = startQuestionId;

  return [
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

    Quiz(

      id: quizId++,

      title: 'Learning the Alphabet Quiz',

      category: 'English',

      ageGroup: 3,

      questions: [

        Question(

          id: questionId++,

          quizId: 26,

          questionText: 'How many letters are in the alphabet?',

          options: ['20', '24', '26', '30'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 26,

          questionText: 'What letter comes after A?',

          options: ['B', 'C', 'D', 'E'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Learning Letter Sounds Quiz',

      category: 'English',

      ageGroup: 3,

      questions: [

        Question(

          id: questionId++,

          quizId: 27,

          questionText: 'What sound does the letter B make?',

          options: ['buh', 'duh', 'fuh', 'guh'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 27,

          questionText: 'What sound does the letter C make?',

          options: ['cuh', 'duh', 'eh', 'fuh'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Simple Words Quiz',

      category: 'English',

      ageGroup: 3,

      questions: [

        Question(

          id: questionId++,

          quizId: 28,

          questionText: 'How do you spell CAT?',

          options: ['C-A-T', 'C-A-R', 'D-O-G', 'H-A-T'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 28,

          questionText: 'What word is D-O-G?',

          options: ['Cat', 'Dog', 'Hat', 'Sun'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Phonics: Letter Sounds Quiz',

      category: 'English',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 32,

          questionText: 'What sound does A make?',

          options: ['/a/ like apple', '/b/ like ball', '/c/ like cat', '/d/ like dog'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 32,

          questionText: 'What word do you get when you blend C-A-T?',

          options: ['Dog', 'Cat', 'Hat', 'Bat'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Reading Simple Sentences Quiz',

      category: 'English',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 33,

          questionText: 'What should a sentence start with?',

          options: ['A small letter', 'A capital letter', 'A number', 'A picture'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 33,

          questionText: 'What should a sentence end with?',

          options: ['A comma', 'A full stop', 'A question mark', 'Both B and C'],

          correctAnswerIndex: 3,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Writing My Name Quiz',

      category: 'English',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 34,

          questionText: 'What should the first letter of your name be?',

          options: ['Small letter', 'Capital letter', 'Number', 'Symbol'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 34,

          questionText: 'What helps you get better at writing?',

          options: ['Watching TV', 'Practice', 'Sleeping', 'Eating'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Using a Computer Quiz',

      category: 'Technology',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 38,

          questionText: 'What should you do before using a computer?',

          options: ['Just start using it', 'Ask a grown-up', 'Turn it off', 'Unplug it'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 38,

          questionText: 'What helps us click on things?',

          options: ['Keyboard', 'Mouse', 'Screen', 'Speaker'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Digital Drawing Quiz',

      category: 'Technology',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 39,

          questionText: 'What can you use to draw on a computer?',

          options: ['Paintbrush tool', 'Colors', 'Shapes', 'All of the above'],

          correctAnswerIndex: 3,

        ),

        Question(

          id: questionId++,

          quizId: 39,

          questionText: 'What should you do with your artwork?',

          options: ['Delete it', 'Save it', 'Ignore it', 'Hide it'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Staying Safe Online Quiz',

      category: 'Technology',

      ageGroup: 4,

      questions: [

        Question(

          id: questionId++,

          quizId: 40,

          questionText: 'What should you do if something makes you feel uncomfortable online?',

          options: ['Keep looking', 'Tell a grown-up', 'Ignore it', 'Click on it'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 40,

          questionText: 'Should you share your name with strangers online?',

          options: ['Yes, always', 'No, never', 'Sometimes', 'Only if they ask'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Famous People from History Quiz',

      category: 'History',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 41,

          questionText: 'Who was Queen Elizabeth I?',

          options: ['A nurse', 'Queen of England', 'A writer', 'A scientist'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 41,

          questionText: 'What was Florence Nightingale known for?',

          options: ['Being a queen', 'Being a nurse', 'Writing plays', 'Being a soldier'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Life Long Ago Quiz',

      category: 'History',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 42,

          questionText: 'How did people travel long ago?',

          options: ['By car', 'By walking or horses', 'By airplane', 'By train only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 42,

          questionText: 'Did people have electricity long ago?',

          options: ['Yes, always', 'No, not at first', 'Only in cities', 'Only at night'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Local History Quiz',

      category: 'History',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 43,

          questionText: 'What can old buildings tell us?',

          options: ['About the future', 'About the past', 'About space', 'About animals'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 43,

          questionText: 'Where can we find local history?',

          options: ['Only in books', 'All around us', 'Only in museums', 'Only online'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Introduction to Coding Quiz',

      category: 'Technology',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 44,

          questionText: 'What is coding?',

          options: ['Drawing pictures', 'Giving instructions to computers', 'Playing games', 'Watching videos'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 44,

          questionText: 'What do computers do with code?',

          options: ['Ignore it', 'Follow it exactly', 'Change it', 'Delete it'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Using a Mouse and Keyboard Quiz',

      category: 'Technology',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 45,

          questionText: 'What does left click do?',

          options: ['Nothing', 'Select and open things', 'Close programs', 'Turn off computer'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 45,

          questionText: 'What key makes spaces between words?',

          options: ['Enter', 'Space Bar', 'Shift', 'Tab'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Creating Digital Stories Quiz',

      category: 'Technology',

      ageGroup: 5,

      questions: [

        Question(

          id: questionId++,

          quizId: 46,

          questionText: 'What are the parts of a story?',

          options: ['Only beginning', 'Beginning, middle, end', 'Only end', 'Only middle'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 46,

          questionText: 'What makes digital stories fun?',

          options: ['Only words', 'Only pictures', 'Words and pictures together', 'Nothing'],

          correctAnswerIndex: 2,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Reading Comprehension Quiz',

      category: 'English',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 47,

          questionText: 'What does comprehension mean?',

          options: ['Reading fast', 'Understanding what you read', 'Reading out loud', 'Reading silently'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 47,

          questionText: 'What questions should you ask when reading?',

          options: ['Only who', 'Who, what, where, when, why', 'Only what', 'Only when'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Writing Sentences Quiz',

      category: 'English',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 48,

          questionText: 'What should a sentence start with?',

          options: ['A small letter', 'A capital letter', 'A number', 'A symbol'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 48,

          questionText: 'What ends a statement?',

          options: ['A comma', 'A full stop', 'A question mark', 'Nothing'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Grammar Basics Quiz',

      category: 'English',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 49,

          questionText: 'What is a noun?',

          options: ['An action word', 'A word for a person, place, or thing', 'A describing word', 'A connecting word'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 49,

          questionText: 'What is a verb?',

          options: ['A person, place, or thing', 'An action word', 'A describing word', 'A type of sentence'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Great Fire of London Quiz',

      category: 'History',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 50,

          questionText: 'When did the Great Fire of London happen?',

          options: ['1665', '1666', '1667', '1668'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 50,

          questionText: 'Where did the fire start?',

          options: ['A house', 'A bakery', 'A church', 'A school'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Ancient Egypt Quiz',

      category: 'History',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 51,

          questionText: 'What river was important to ancient Egypt?',

          options: ['Thames', 'Nile', 'Amazon', 'Mississippi'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 51,

          questionText: 'What were pyramids used for?',

          options: ['Houses', 'Tombs for pharaohs', 'Markets', 'Schools'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Romans in Britain Quiz',

      category: 'History',

      ageGroup: 6,

      questions: [

        Question(

          id: questionId++,

          quizId: 52,

          questionText: 'When did the Romans come to Britain?',

          options: ['AD 30', 'AD 43', 'AD 60', 'AD 100'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 52,

          questionText: 'What did the Romans build?',

          options: ['Only houses', 'Roads, walls, and towns', 'Only walls', 'Only roads'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Multiplication Tables Quiz',

      category: 'Maths',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 53,

          questionText: 'What is 2 × 5?',

          options: ['7', '10', '12', '15'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 53,

          questionText: 'What is 5 × 4?',

          options: ['15', '18', '20', '25'],

          correctAnswerIndex: 2,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Division Basics Quiz',

      category: 'Maths',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 54,

          questionText: 'What is 12 ÷ 3?',

          options: ['3', '4', '5', '6'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 54,

          questionText: 'What is 20 ÷ 4?',

          options: ['4', '5', '6', '7'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Fractions Introduction Quiz',

      category: 'Maths',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 55,

          questionText: 'What does ½ mean?',

          options: ['One quarter', 'One half', 'One third', 'One whole'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 55,

          questionText: 'What does ¼ mean?',

          options: ['One half', 'One quarter', 'One third', 'One whole'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Writing Paragraphs Quiz',

      category: 'English',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 56,

          questionText: 'What is a paragraph?',

          options: ['One sentence', 'A group of sentences about one idea', 'A whole story', 'A list'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 56,

          questionText: 'What should a paragraph start with?',

          options: ['A closing sentence', 'A topic sentence', 'A question', 'A number'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Reading Comprehension Skills Quiz',

      category: 'English',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 57,

          questionText: 'What is the main idea?',

          options: ['A detail', 'What the text is mostly about', 'A character', 'A setting'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 57,

          questionText: 'What helps you understand a text?',

          options: ['Reading fast', 'Asking questions as you read', 'Skipping parts', 'Only reading once'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Spelling and Vocabulary Quiz',

      category: 'English',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 58,

          questionText: 'What do you add to "play" to make "playing"?',

          options: ['-ed', '-ing', '-s', '-er'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 58,

          questionText: 'How do you get better at spelling?',

          options: ['Never practice', 'Practice regularly', 'Only read', 'Only write'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Stone Age Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 59,

          questionText: 'What were Stone Age tools made from?',

          options: ['Metal', 'Plastic', 'Stone', 'Wood only'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 59,

          questionText: 'How did Stone Age people get food?',

          options: ['From shops', 'By hunting and gathering', 'By farming only', 'By ordering'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Vikings Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 60,

          questionText: 'Where did the Vikings come from?',

          options: ['Britain', 'Scandinavia', 'France', 'Spain'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 60,

          questionText: 'What were Vikings known for?',

          options: ['Farming only', 'Sailing and exploring', 'Writing books', 'Building cities'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Tudors Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 61,

          questionText: 'When did the Tudors rule England?',

          options: ['1485-1603', '1400-1500', '1600-1700', '1300-1400'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 61,

          questionText: 'Who was a famous Tudor monarch?',

          options: ['King Arthur', 'Henry VIII', 'William the Conqueror', 'Alfred the Great'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Long Multiplication Quiz',

      category: 'Maths',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 62,

          questionText: 'What is 23 × 4?',

          options: ['87', '90', '92', '95'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 62,

          questionText: 'What is 34 × 2?',

          options: ['66', '68', '70', '72'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Fractions and Decimals Quiz',

      category: 'Maths',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 63,

          questionText: 'What is ½ as a decimal?',

          options: ['0.25', '0.5', '0.75', '1.0'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 63,

          questionText: 'What is ¼ as a decimal?',

          options: ['0.2', '0.25', '0.3', '0.4'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Measurement and Units Quiz',

      category: 'Maths',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 64,

          questionText: 'How many centimeters in a meter?',

          options: ['10', '50', '100', '1000'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 64,

          questionText: 'How many grams in a kilogram?',

          options: ['10', '100', '500', '1000'],

          correctAnswerIndex: 3,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Creative Writing Quiz',

      category: 'English',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 65,

          questionText: 'What are the parts of a story?',

          options: ['Only beginning', 'Beginning, middle, end', 'Only end', 'Only middle'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 65,

          questionText: 'What should you use in creative writing?',

          options: ['Only facts', 'Your imagination', 'Only numbers', 'Only questions'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Poetry and Rhyme Quiz',

      category: 'English',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 66,

          questionText: 'What are rhyming words?',

          options: ['Words that look the same', 'Words that sound the same at the end', 'Words that mean the same', 'Words that start the same'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 66,

          questionText: 'What rhymes with "cat"?',

          options: ['Dog', 'Hat', 'Sun', 'Tree'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Grammar: Verbs and Tenses Quiz',

      category: 'English',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 67,

          questionText: 'What does past tense show?',

          options: ['What is happening now', 'What happened before', 'What will happen', 'What might happen'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 67,

          questionText: 'What is the past tense of "walk"?',

          options: ['Walking', 'Walked', 'Will walk', 'Walks'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Ancient Greece Quiz',

      category: 'History',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 68,

          questionText: 'What did ancient Greece create?',

          options: ['Only art', 'Democracy', 'Only buildings', 'Only stories'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 68,

          questionText: 'What started in ancient Greece?',

          options: ['The internet', 'The Olympics', 'Cars', 'Computers'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Anglo-Saxons Quiz',

      category: 'History',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 69,

          questionText: 'When did the Anglo-Saxons come to Britain?',

          options: ['After the Romans left', 'Before the Romans', 'With the Romans', 'During Roman times'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 69,

          questionText: 'Who was King Alfred the Great?',

          options: ['A Roman', 'King of Wessex', 'A Viking', 'A Norman'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Battle of Hastings Quiz',

      category: 'History',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 70,

          questionText: 'When did the Battle of Hastings happen?',

          options: ['October 14, 1065', 'October 14, 1066', 'October 14, 1067', 'October 14, 1068'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 70,

          questionText: 'Who won the Battle of Hastings?',

          options: ['Harold Godwinson', 'William the Conqueror', 'King Alfred', 'A Viking'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Scratch Programming Basics Quiz',

      category: 'Technology',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 71,

          questionText: 'What is Scratch?',

          options: ['A game', 'A visual programming language', 'A website', 'A book'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 71,

          questionText: 'What do you use in Scratch to create programs?',

          options: ['Words only', 'Blocks', 'Numbers only', 'Pictures only'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Digital Design Quiz',

      category: 'Technology',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 72,

          questionText: 'What is digital design?',

          options: ['Drawing on paper', 'Creating graphics on computers', 'Writing stories', 'Playing games'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 72,

          questionText: 'What should you consider in design?',

          options: ['Only color', 'Color, layout, and balance', 'Only layout', 'Only balance'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Internet Safety Quiz',

      category: 'Technology',

      ageGroup: 8,

      questions: [

        Question(

          id: questionId++,

          quizId: 73,

          questionText: 'Should you share personal information online?',

          options: ['Yes, always', 'No, never', 'Sometimes', 'Only with friends'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 73,

          questionText: 'What should you do if someone is mean online?',

          options: ['Be mean back', 'Tell a grown-up', 'Ignore it completely', 'Share it with everyone'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Percentages Quiz',

      category: 'Maths',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 74,

          questionText: 'What does 50% mean?',

          options: ['50 out of 100', '50 out of 50', '50 out of 10', '50 out of 1000'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 74,

          questionText: 'What is 50% of 100?',

          options: ['25', '50', '75', '100'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Geometry: Shapes and Angles Quiz',

      category: 'Maths',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 75,

          questionText: 'How many degrees in a right angle?',

          options: ['45°', '90°', '180°', '360°'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 75,

          questionText: 'What shape has 4 equal sides and 4 right angles?',

          options: ['Rectangle', 'Square', 'Triangle', 'Circle'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Problem Solving Quiz',

      category: 'Maths',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 76,

          questionText: 'What is the first step in solving a problem?',

          options: ['Guess the answer', 'Read carefully and understand', 'Skip it', 'Ask someone else'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 76,

          questionText: 'What should you do after solving a problem?',

          options: ['Forget about it', 'Check your answer', 'Show everyone', 'Hide it'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Writing Essays Quiz',

      category: 'English',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 77,

          questionText: 'What are the parts of an essay?',

          options: ['Only introduction', 'Introduction, body, conclusion', 'Only body', 'Only conclusion'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 77,

          questionText: 'What should the introduction do?',

          options: ['End the essay', 'Introduce the topic and hook the reader', 'Give all the details', 'Ask questions only'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Literature Analysis Quiz',

      category: 'English',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 78,

          questionText: 'What is analysis?',

          options: ['Reading fast', 'Looking closely to understand better', 'Only reading', 'Only writing'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 78,

          questionText: 'What should you use to support your analysis?',

          options: ['Only your opinion', 'Evidence from the text', 'Only guesses', 'Only pictures'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Advanced Grammar Quiz',

      category: 'English',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 79,

          questionText: 'What is a complex sentence?',

          options: ['One simple sentence', 'A sentence with a main clause and subordinate clause', 'Only questions', 'Only statements'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 79,

          questionText: 'What is active voice?',

          options: ['Subject receives action', 'Subject does the action', 'No action', 'Only past tense'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'World War I Quiz',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 80,

          questionText: 'When did World War I happen?',

          options: ['1912-1916', '1914-1918', '1916-1920', '1918-1922'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 80,

          questionText: 'Where did soldiers live during the war?',

          options: ['In houses', 'In trenches', 'In castles', 'In cities'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'World War II Quiz',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 81,

          questionText: 'When did World War II happen?',

          options: ['1937-1943', '1939-1945', '1941-1947', '1943-1949'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 81,

          questionText: 'What was the Blitz?',

          options: ['A battle', 'German bombing of British cities', 'A type of ship', 'A weapon'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Industrial Revolution Quiz',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 82,

          questionText: 'When did the Industrial Revolution happen?',

          options: ['1700-1750', '1760-1840', '1850-1900', '1900-1950'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 82,

          questionText: 'What changed during the Industrial Revolution?',

          options: ['Only art', 'Machines replaced hand work, factories were built', 'Only food', 'Only clothes'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Advanced Scratch Programming Quiz',

      category: 'Technology',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 83,

          questionText: 'What are variables used for?',

          options: ['Drawing pictures', 'Storing information that can change', 'Only colors', 'Only sounds'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 83,

          questionText: 'What do loops do?',

          options: ['Stop code', 'Repeat code', 'Delete code', 'Hide code'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Web Development Basics Quiz',

      category: 'Technology',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 84,

          questionText: 'What does HTML stand for?',

          options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Text Making Language', 'Happy Text Marking Language'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 84,

          questionText: 'What does CSS do?',

          options: ['Makes web pages look nice', 'Creates the structure', 'Adds interactivity', 'Deletes content'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Digital Citizenship Quiz',

      category: 'Technology',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 85,

          questionText: 'What is digital citizenship?',

          options: ['Using technology irresponsibly', 'Using technology responsibly, safely, and respectfully', 'Only playing games', 'Only watching videos'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 85,

          questionText: 'What should you do if you see cyberbullying?',

          options: ['Join in', 'Tell a grown-up', 'Ignore it completely', 'Share it'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Algebra Introduction Quiz',

      category: 'Maths',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 86,

          questionText: 'What does algebra use to represent unknown numbers?',

          options: ['Only numbers', 'Letters like x and y', 'Only pictures', 'Only words'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 86,

          questionText: 'What is x if x + 5 = 10?',

          options: ['3', '5', '7', '15'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Statistics and Data Quiz',

      category: 'Maths',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 87,

          questionText: 'What is the mean (average)?',

          options: ['The middle number', 'Add all numbers, divide by count', 'The most common number', 'The biggest number'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 87,

          questionText: 'What chart shows categories?',

          options: ['Line graph', 'Bar chart', 'Pie chart', 'All of them'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Advanced Problem Solving Quiz',

      category: 'Maths',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 88,

          questionText: 'What is a multi-step problem?',

          options: ['A problem with one step', 'A problem that needs more than one step', 'An easy problem', 'A problem with no steps'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 88,

          questionText: 'What strategy can help solve problems?',

          options: ['Only guessing', 'Drawing diagrams, making tables, working backwards', 'Only asking others', 'Only giving up'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Advanced Creative Writing Quiz',

      category: 'English',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 89,

          questionText: 'What should you develop in a story?',

          options: ['Only the ending', 'Characters, plot, and setting', 'Only the beginning', 'Only dialogue'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 89,

          questionText: 'What does "show, don\'t tell" mean?',

          options: ['Only tell everything', 'Let readers see and feel through description', 'Only show pictures', 'Only use dialogue'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Literary Analysis and Criticism Quiz',

      category: 'English',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 90,

          questionText: 'What is a theme?',

          options: ['A character', 'The main message or idea', 'A setting', 'A plot'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 90,

          questionText: 'What should you use to support your analysis?',

          options: ['Only your opinion', 'Quotes and evidence from the text', 'Only guesses', 'Only pictures'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Persuasive Writing Quiz',

      category: 'English',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 91,

          questionText: 'What is persuasive writing?',

          options: ['Just telling a story', 'Writing to convince the reader to agree', 'Only asking questions', 'Only listing facts'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 91,

          questionText: 'What should you use in persuasive writing?',

          options: ['Only emotions', 'Evidence, logic, and persuasive techniques', 'Only opinions', 'Only questions'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Ancient Civilizations Quiz',

      category: 'History',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 92,

          questionText: 'What is a civilization?',

          options: ['Just a city', 'An advanced society with cities, writing, government', 'Just people', 'Just buildings'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 92,

          questionText: 'Which ancient civilization built pyramids?',

          options: ['Ancient Greece', 'Ancient Egypt', 'Ancient China', 'All of them'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'The Renaissance Quiz',

      category: 'History',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 93,

          questionText: 'What does "Renaissance" mean?',

          options: ['End', 'Rebirth', 'Beginning', 'Middle'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 93,

          questionText: 'Who painted the Mona Lisa?',

          options: ['Michelangelo', 'Leonardo da Vinci', 'Shakespeare', 'Galileo'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Historical Sources and Evidence Quiz',

      category: 'History',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 94,

          questionText: 'What is a primary source?',

          options: ['Created later', 'Created at the time of events', 'Only books', 'Only pictures'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 94,

          questionText: 'What should you ask about sources?',

          options: ['Nothing', 'Who, when, why, and is it reliable', 'Only who', 'Only when'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Python Programming Introduction Quiz',

      category: 'Technology',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 95,

          questionText: 'What is Python?',

          options: ['A snake', 'A programming language', 'A game', 'A website'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 95,

          questionText: 'What does print() do in Python?',

          options: ['Deletes text', 'Prints text to the screen', 'Saves files', 'Opens programs'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Advanced Web Development Quiz',

      category: 'Technology',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 96,

          questionText: 'What does CSS do?',

          options: ['Creates structure', 'Styles web pages', 'Adds interactivity only', 'Deletes content'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 96,

          questionText: 'What does JavaScript add to websites?',

          options: ['Only structure', 'Interactivity', 'Only styling', 'Nothing'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Technology and Society Quiz',

      category: 'Technology',

      ageGroup: 10,

      questions: [

        Question(

          id: questionId++,

          quizId: 97,

          questionText: 'How does technology affect society?',

          options: ['It doesn\'t', 'It changes how we communicate, learn, work, and live', 'Only communication', 'Only work'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 97,

          questionText: 'What should we think about with technology?',

          options: ['Nothing', 'How it helps, problems, and how to use it responsibly', 'Only problems', 'Only good things'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Vikings Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Where did the Vikings come from?',

          options: ['The Mediterranean region', 'Scandinavia (countries like Norway and Sweden)', 'Central Europe'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'About how long ago did the Vikings live?',

          options: ['1,000 years ago', '100 years ago', '10 years ago'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What was the main job for most Vikings?',

          options: ['Merchants', 'Farmers', 'Craftsmen'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What were Viking letters and writing called?',

          options: ['Latin', 'Runes', 'Greek'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Where did Vikings usually carve their writing?',

          options: ['On parchment', 'On stones and wood', 'On clay tablets'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What did Vikings use to buy things before they had coins?',

          options: ['Gold coins', 'Silver jewelry (often cut into pieces)', 'Bartering (trading goods for goods)'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What were Viking houses called?',

          options: ['Castles', 'Longhouses', 'Cottages'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What were most Viking houses made out of?',

          options: ['Wood, stone, or turf (grass and dirt)', 'Bricks and cement', 'Clay and mud'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Where was the fire usually placed in a Viking house?',

          options: ['In the fireplace by the wall', 'In the middle of the room on the floor', 'In a separate kitchen room'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What material were Viking clothes mostly made from?',

          options: ['Cotton', 'Wool and linen', 'Leather'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What did Viking children do for fun?',

          options: ['Played with toys and dolls', 'Played board games and wrestled', 'Read books'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Which of these animals did Vikings keep on their farms?',

          options: ['Horses', 'Pigs, sheep, and chickens', 'Goats'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What did Vikings eat a lot of?',

          options: ['Bread and cheese', 'Fish and meat stew', 'Fruits and vegetables'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What were the famous Viking boats called?',

          options: ['Galleys', 'Longships', 'Skiffs'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What scary animal head was often carved on the front of a Viking ship?',

          options: ['A dragon or snake', 'A wolf', 'A bear'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Why did they put dragon heads on their ships?',

          options: ['To show which family owned the ship', 'To scare away enemies and sea monsters', 'To honor the gods'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'How did Viking ships move across the water?',

          options: ['With paddles only', 'Using sails and oars (rowing)', 'With a sail only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Vikings were great explorers. Which faraway place did they reach before Christopher Columbus?',

          options: ['North America', 'South America', 'Asia'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'How did Vikings find their way at sea?',

          options: ['They used compasses', 'They looked at the sun, stars, and birds', 'They followed other ships'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Did real Viking helmets have horns on them?',

          options: ['Yes, always', 'No, never (that is just a myth!)', 'Only for special ceremonies'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What was the Viking\'s most common weapon?',

          options: ['A sword', 'An axe or a spear', 'A bow and arrow'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What did Vikings use to protect themselves in a fight?',

          options: ['A round wooden shield', 'A metal shield', 'Armor made of chainmail'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What was a "Shield Wall"?',

          options: ['A defensive wall around a village', 'When warriors stood close together with shields overlapping', 'A formation where shields were stacked'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What were the very fierce Viking warriors called?',

          options: ['Berserkers', 'Jarls', 'Huscarls'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Who was the Viking god of thunder?',

          options: ['Loki', 'Thor', 'Odin'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What weapon did Thor carry?',

          options: ['A magic hammer', 'A sword', 'An axe'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Who was the king of all the Viking gods?',

          options: ['Odin', 'Thor', 'Tyr'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'How many eyes did Odin have?',

          options: ['Two', 'One (he traded the other for wisdom)', 'Three'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'What was the name of the place where brave warriors went after they died?',

          options: ['Valhalla', 'Asgard', 'Helheim'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 100,

          questionText: 'Which day of the week is named after the god Thor?',

          options: ['Tuesday', 'Wednesday', 'Thursday (Thor\'s Day)'],

          correctAnswerIndex: 2,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Viking Shields Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was the main material used to make Viking shields?',

          options: ['Metal', 'Wood', 'Leather'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What type of wood was most commonly used for Viking shields?',

          options: ['Oak, pine, or linden (lime wood)', 'Birch', 'Ash'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How thick were most Viking shields?',

          options: ['About 1 inch (2-3 cm) thick', 'About half an inch (1 cm) thick', 'About 2-3 inches (5-7 cm) thick'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was placed on the front of the shield to make it stronger?',

          options: ['A layer of leather', 'A metal boss (round center piece)', 'Metal strips around the edge'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was the metal boss on a Viking shield used for?',

          options: ['Just decoration', 'Protection and to hold the shield together', 'To identify the owner'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was the handle on a Viking shield usually made from?',

          options: ['Metal', 'Leather or wood', 'Rope'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How were the wooden planks for a shield usually arranged?',

          options: ['Glued together side by side', 'Planks placed together and held with glue or nails', 'Bound together with leather strips only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What shape were most Viking shields?',

          options: ['Square', 'Round', 'Oval'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How big were Viking shields usually?',

          options: ['About 2-3 feet (60-90 cm) across', 'About 4-5 feet (120-150 cm) across', 'About 1 foot (30 cm) across'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was sometimes added to the edge of a shield?',

          options: ['A leather rim to protect the edges', 'Metal studs', 'Decorative carvings'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'Why did Vikings make their shields from wood instead of metal?',

          options: ['Wood was lighter and easier to carry', 'Wood was stronger than metal', 'Metal was too expensive'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How long did it take to make a Viking shield?',

          options: ['A skilled craftsman could make one in a few days', 'A few hours', 'Several weeks'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What did Vikings use to paint their shields?',

          options: ['Oil-based paints', 'Natural paints made from plants, minerals, and animal products', 'Dyes made from berries'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What colors were commonly used on Viking shields?',

          options: ['Red, yellow, black, and white', 'Only green', 'Brown and gray'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What patterns were often painted on Viking shields?',

          options: ['Spirals, circles, and geometric shapes', 'Animals and birds', 'Straight lines and stripes'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'Why did Vikings decorate their shields?',

          options: ['To show which group they belonged to and to look impressive', 'To make them stronger', 'To honor the gods'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What symbol was sometimes painted on shields?',

          options: ['Runes (Viking letters) or family symbols', 'Crosses', 'Stars and moons'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'Were all Viking shields decorated the same way?',

          options: ['No, each shield was unique', 'Yes, they all looked the same', 'Only shields for leaders had decorations'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How did Vikings hold their shields?',

          options: ['With one hand using a handle on the back', 'With both hands', 'With a strap around the arm'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What was a "Shield Wall"?',

          options: ['A defensive wall around a village', 'Warriors standing close together with shields overlapping', 'Shields stacked in a pile'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'Could Viking shields be used to attack as well as defend?',

          options: ['Yes, the metal boss could be used to punch', 'No, they were only for blocking', 'Only the edge could be used to strike'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'What happened to shields during battle?',

          options: ['They could get damaged, broken, or lost', 'They never got damaged', 'They were always repaired immediately'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'How did Vikings carry their shields when not fighting?',

          options: ['On their back or slung over their shoulder', 'In a special bag', 'Carried by servants'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 101,

          questionText: 'Why were shields so important to Viking warriors?',

          options: ['They were the main protection in battle', 'They were required by law', 'They showed social status'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Vikings Quiz - Medium',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the Viking assembly where important decisions were made?',

          options: ['Thing', 'Meeting', 'Council'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was a Jarl in Viking society?',

          options: ['A noble or chieftain', 'A type of ship', 'A weapon'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What were Viking slaves called?',

          options: ['Thralls', 'Servants', 'Workers'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the main social class of free Viking farmers and craftsmen called?',

          options: ['Karls', 'Nobles', 'Warriors'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was a Viking law speaker responsible for?',

          options: ['Reciting laws from memory at assemblies', 'Building ships', 'Cooking food'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the Viking system of law and justice called?',

          options: ['Blood feud or compensation system', 'Trial by jury', 'King\'s law'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was outlawry in Viking society?',

          options: ['Being banished from the community with no legal protection', 'Being sent to prison', 'Being made a slave'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the trade route that connected Scandinavia to the Byzantine Empire?',

          options: ['The Varangian Route', 'The Silk Road', 'The Spice Route'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What did Vikings trade from Scandinavia?',

          options: ['Furs, amber, and slaves', 'Gold and diamonds', 'Spices and silk'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the Viking settlement in Greenland?',

          options: ['Brattahlíð', 'Oslo', 'Stockholm'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the Viking name for the area they discovered in North America?',

          options: ['Vinland', 'Newland', 'Greenland'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'Who was the famous Viking explorer who reached North America around 1000 AD?',

          options: ['Leif Erikson', 'Ragnar Lothbrok', 'Harald Hardrada'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the Viking trading center in Russia?',

          options: ['Novgorod', 'Moscow', 'Kiev'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What did Vikings call the Byzantine Empire?',

          options: ['Miklagard (Great City)', 'Rome', 'Constantinople'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the special Viking navigation tool that used the sun?',

          options: ['Sunstone', 'Compass', 'Sextant'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the difference between a longship and a knarr?',

          options: ['Knarrs were wider cargo ships, longships were for war', 'They were the same thing', 'Longships were bigger'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the keel on a Viking ship used for?',

          options: ['Stability and to prevent the ship from rolling', 'Decoration', 'To hold the sail'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'How did Vikings waterproof their ships?',

          options: ['With tar made from pine trees', 'With paint', 'With wax'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the typical speed of a Viking longship?',

          options: ['About 10-15 knots (12-17 mph) with good wind', 'As fast as a car', 'Very slow, like walking'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the steering oar on a Viking ship?',

          options: ['Steerboard (which is where "starboard" comes from)', 'Rudder', 'Paddle'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the name of the Viking art style with intricate animal patterns?',

          options: ['Ringerike or Urnes style', 'Modern art', 'Cave paintings'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What were Viking poets called?',

          options: ['Skalds', 'Bards', 'Singers'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was a saga?',

          options: ['A long story about heroes and history', 'A type of ship', 'A weapon'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the Viking board game hnefatafl?',

          options: ['A strategy game like chess, with a king and attackers', 'A dice game', 'A card game'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What were Viking burial practices often like?',

          options: ['Burial in ships or with grave goods', 'Always cremation', 'Simple ground burial only'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the Viking calendar based on?',

          options: ['Lunar months and solar years', 'Only the sun', 'Only the moon'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was a Viking "thing" used for?',

          options: ['Making laws, settling disputes, and choosing leaders', 'Trading', 'Religious ceremonies only'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 102,

          questionText: 'What was the Viking Age approximately?',

          options: ['793 AD to 1066 AD', '500 AD to 800 AD', '1200 AD to 1500 AD'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Viking Religion Quiz - Hard',

      category: 'History',

      ageGroup: 11,

      questions: [

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the great world tree that connected all the Nine Worlds?',

          options: ['Yggdrasil', 'Oak Tree', 'Tree of Life'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'How many worlds were there in Norse mythology?',

          options: ['Nine', 'Seven', 'Twelve'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the world where the gods lived?',

          options: ['Asgard', 'Midgard', 'Jotunheim'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was Midgard?',

          options: ['The world of humans (Middle Earth)', 'The world of the dead', 'The world of giants'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the world of the dead, ruled by Hel?',

          options: ['Helheim', 'Valhalla', 'Niflheim'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What creature lived at the roots of Yggdrasil and gnawed at it?',

          options: ['Nidhogg (a dragon)', 'A squirrel', 'A snake'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the well of wisdom at the roots of Yggdrasil?',

          options: ['Mímir\'s Well', 'The Well of Life', 'The Sacred Spring'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was Jotunheim?',

          options: ['The world of the giants', 'The world of the gods', 'The world of the dwarves'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of Odin\'s magical spear?',

          options: ['Gungnir', 'Mjölnir', 'Gram'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What were the names of Odin\'s two ravens?',

          options: ['Huginn (Thought) and Muninn (Memory)', 'Raven and Crow', 'Odin and Loki'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of Odin\'s eight-legged horse?',

          options: ['Sleipnir', 'Pegasus', 'Shadowfax'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of Thor\'s hammer?',

          options: ['Mjölnir', 'Gungnir', 'Excalibur'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'Who was the goddess of love, beauty, and fertility?',

          options: ['Freya', 'Frigg', 'Hel'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the hall in Asgard where warriors who died in battle went?',

          options: ['Valhalla', 'Helheim', 'Folkvangr'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'Who was the trickster god, known for causing trouble?',

          options: ['Loki', 'Odin', 'Tyr'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of Freya\'s hall where half of the warriors who died in battle went?',

          options: ['Folkvangr', 'Valhalla', 'Asgard'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was Ragnarok?',

          options: ['The final battle and end of the world in Norse mythology', 'A type of ship', 'A Viking festival'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the giant wolf that would break free during Ragnarok?',

          options: ['Fenrir', 'Garm', 'Nidhogg'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'Who was destined to kill Odin during Ragnarok?',

          options: ['Fenrir the wolf', 'Loki', 'Thor'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the giant serpent that Thor would fight during Ragnarok?',

          options: ['Jormungandr (the Midgard Serpent)', 'Nidhogg', 'Fafnir'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What would happen after Ragnarok according to Norse mythology?',

          options: ['A new world would rise, and some gods would survive', 'Everything would end forever', 'The gods would win and rule forever'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the ship made from dead men\'s fingernails that would sail during Ragnarok?',

          options: ['Naglfari', 'Longship', 'Death Ship'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'Who would sound the horn to signal the start of Ragnarok?',

          options: ['Heimdall', 'Odin', 'Loki'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was a blót?',

          options: ['A religious sacrifice ceremony to honor the gods', 'A type of weapon', 'A Viking festival'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What animals were commonly sacrificed in blóts?',

          options: ['Horses, cattle, and pigs', 'Only chickens', 'Wild animals'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was a hof?',

          options: ['A temple or sacred building for worship', 'A type of ship', 'A weapon'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the special day of the week named after Odin?',

          options: ['Wednesday (Woden\'s Day)', 'Thursday', 'Friday'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was seidr?',

          options: ['A form of magic and prophecy, often practiced by women', 'A type of weapon', 'A religious ceremony'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the afterlife for those who didn\'t die in battle?',

          options: ['Helheim (ruled by the goddess Hel)', 'Valhalla', 'Asgard'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 103,

          questionText: 'What was the name of the bridge that connected Midgard to Asgard?',

          options: ['Bifrost (the rainbow bridge)', 'The Golden Bridge', 'The Bridge of Gods'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Queen Astrid\'s Journal - Hard',

      category: 'History',

      ageGroup: 11,

      questions: [

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what was Queen Astrid\'s main concern about the upcoming winter?',

          options: ['Having enough preserved food to last through the cold months', 'The weather being too warm', 'Having too much food'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about the relationship between Queen Astrid and her husband?',

          options: ['She has no say in important matters', 'They share responsibilities and make decisions together', 'They never speak to each other'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking women\'s roles?',

          options: ['They only cooked and cleaned', 'They had important responsibilities in managing the household and community', 'They had no responsibilities'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal entry, what was the Thing used for?',

          options: ['Making important community decisions and settling disputes', 'Only for trading', 'Just a social gathering'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about how Vikings preserved food?',

          options: ['They used methods like drying, salting, and smoking', 'They used freezers', 'They didn\'t preserve food'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking children?',

          options: ['They helped with important tasks and learned skills from adults', 'They did nothing all day', 'They only played games'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what can we infer about Viking trade?',

          options: ['They traded with distant places and valued foreign goods', 'They never traded', 'They only traded locally'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about how Vikings valued items?',

          options: ['They only used paper money', 'They measured value by weight and quality, not just coins', 'They didn\'t value anything'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about Viking craftsmanship?',

          options: ['They bought everything from stores', 'They were skilled at making and repairing tools and items', 'They couldn\'t make anything'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what was important in Viking trade?',

          options: ['Fair exchange and building relationships with traders', 'Cheating people', 'Only trading with family'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking communities?',

          options: ['They worked together and supported each other', 'Everyone worked alone', 'They never helped each other'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what can we infer about Viking leadership?',

          options: ['Leaders had to earn respect and make good decisions for their people', 'Anyone could be a leader', 'Leaders didn\'t need to do anything'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about how disputes were resolved?',

          options: ['By fighting immediately', 'Through discussion and finding fair solutions at the Thing', 'They were never resolved'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about the relationship between different Viking families?',

          options: ['They formed alliances and worked together for mutual benefit', 'They were always enemies', 'They never interacted'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what was important for maintaining a good reputation?',

          options: ['Keeping promises, being fair, and treating others well', 'Being dishonest', 'Not caring about others'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking honor?',

          options: ['Honor was very important and affected how people were treated', 'Honor didn\'t matter', 'Only men had honor'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what can we infer about Viking religious practices?',

          options: ['They made offerings to the gods and believed the gods influenced their lives', 'They didn\'t believe in gods', 'They only prayed once a year'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about how Vikings viewed the future?',

          options: ['They believed in preparing for the future but also accepted fate', 'They never thought about the future', 'They believed they could control everything'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about Viking storytelling?',

          options: ['Stories were important for teaching, entertainment, and preserving history', 'They never told stories', 'Stories were only for children'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what was the role of runes?',

          options: ['They were just decorations', 'They were used for writing, magic, and marking important items', 'They were never used'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking views on nature?',

          options: ['They respected nature and understood its cycles and importance', 'They didn\'t care about nature', 'They feared all nature'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about Viking celebrations?',

          options: ['They marked important times and brought the community together', 'They never celebrated', 'Only leaders celebrated'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'Based on the journal, what was important in Viking education?',

          options: ['Teaching practical skills, stories, and values to the next generation', 'Children learned nothing', 'Only boys were educated'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What does the journal suggest about Viking views on hard work?',

          options: ['Hard work was valued and necessary for survival and success', 'They avoided work', 'Only slaves worked'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 104,

          questionText: 'What can we infer about how Vikings viewed their place in the world?',

          options: ['They saw themselves as part of a larger community and world, connected to gods and nature', 'They thought they were alone', 'They didn\'t think about it'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Ancient Egypt Quiz',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Which river was most important to Ancient Egypt?',

          options: ['The Nile River', 'The Tigris River', 'The Euphrates River'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'About how long ago did Ancient Egypt exist?',

          options: ['1,500 years ago', 'Over 3,000 years ago', '2,000 years ago'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What was the ruler of Ancient Egypt called?',

          options: ['King', 'Pharaoh', 'Sultan'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What continent is Egypt located on?',

          options: ['Africa', 'Asia', 'Middle East'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What was the main food that Ancient Egyptians grew?',

          options: ['Wheat and barley', 'Millet', 'Oats'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Why was the Nile River so important to Ancient Egyptians?',

          options: ['It flooded every year and made the soil good for farming', 'It provided the only source of water', 'It was used for transportation only'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What were pyramids built for?',

          options: ['As tombs for pharaohs', 'As temples for the gods', 'As storage buildings'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Where are the most famous pyramids located?',

          options: ['Luxor', 'Giza', 'Thebes'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What is the Great Sphinx?',

          options: ['A type of temple', 'A statue with a lion body and human head', 'A type of tomb'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What were pyramids made out of?',

          options: ['Sandstone', 'Clay bricks', 'Large stone blocks'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Why did pharaohs want to be buried in pyramids?',

          options: ['They believed it would help them in the afterlife', 'They wanted to be closer to the gods', 'It showed their power and wealth'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What shape are the sides of a pyramid?',

          options: ['Rectangles', 'Circles', 'Triangles'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians write on?',

          options: ['Papyrus (made from a plant)', 'Parchment', 'Clay tablets'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What was the Ancient Egyptian writing system called?',

          options: ['Hieroglyphics', 'Cuneiform', 'Latin'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did most Ancient Egyptian children do?',

          options: ['Went to school all day', 'Helped their parents with farming and crafts', 'Learned to read and write'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians eat a lot of?',

          options: ['Bread, fish, and vegetables', 'Meat and cheese', 'Fruits and nuts'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians use to make their clothes?',

          options: ['Linen (made from flax plants)', 'Wool', 'Silk'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians use to keep cool in the hot sun?',

          options: ['They built houses with thick walls', 'They swam all day', 'They wore light clothing and stayed in the shade'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What is a mummy?',

          options: ['A preserved dead body wrapped in cloth', 'A type of tomb', 'A type of coffin'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Why did Ancient Egyptians make mummies?',

          options: ['To honor the dead', 'They believed the body needed to be preserved for the afterlife', 'To prevent disease'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians put inside the mummy wrappings?',

          options: ['Special items and amulets for protection', 'Jewelry and gold', 'Tools and weapons'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Where were mummies usually placed?',

          options: ['In temples', 'In gardens', 'In tombs or pyramids'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians believe happened after death?',

          options: ['They would go to an afterlife if they lived a good life', 'They would become gods', 'They would be reborn as humans'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Who was the sun god in Ancient Egypt?',

          options: ['Horus', 'Anubis', 'Ra'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Which god had the head of a jackal and was the god of mummification?',

          options: ['Osiris', 'Anubis', 'Set'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'Who was the goddess of love and beauty?',

          options: ['Isis', 'Hathor', 'Sekhmet'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What animal was often associated with the goddess Bastet?',

          options: ['A lion', 'A bird', 'A cat'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 105,

          questionText: 'What did Ancient Egyptians believe their gods controlled?',

          options: ['Things like the sun, the Nile River, and the afterlife', 'Only the harvest', 'Only the afterlife'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Ancient Egypt Quiz - Medium',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Who was the first pharaoh to unite Upper and Lower Egypt?',

          options: ['Menes (also called Narmer)', 'Ramses II', 'Tutankhamun'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which female pharaoh ruled as a full pharaoh and built many monuments?',

          options: ['Cleopatra', 'Hatshepsut', 'Nefertiti'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What were the three main periods of Ancient Egyptian history called?',

          options: ['Early Period, Golden Age, and Late Period', 'First Dynasty, Second Dynasty, and Third Dynasty', 'Old Kingdom, Middle Kingdom, and New Kingdom'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which pharaoh is famous for building the Great Pyramid of Giza?',

          options: ['Ramses II', 'Tutankhamun', 'Khufu (also called Cheops)'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the boy pharaoh whose tomb was discovered almost completely intact?',

          options: ['Amenhotep III', 'Tutankhamun', 'Thutmose III'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which pharaoh tried to change Egypt\'s religion to worship only one god?',

          options: ['Ramses II', 'Cleopatra', 'Akhenaten'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What is the name of the massive stone structure with a lion body and human head near the pyramids?',

          options: ['The Colossus', 'The Great Sphinx', 'The Obelisk'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What were the tall, pointed stone monuments called that were often placed in pairs at temple entrances?',

          options: ['Stelae', 'Pylons', 'Obelisks'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the purpose of the Valley of the Kings?',

          options: ['A place where battles were fought', 'A market where goods were traded', 'A hidden valley where pharaohs were buried in tombs'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What architectural feature did Ancient Egyptians use to support heavy stone roofs?',

          options: ['Wooden beams', 'Metal supports', 'Massive stone columns'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the ancient Egyptian capital city during the Old Kingdom?',

          options: ['Thebes', 'Alexandria', 'Memphis'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What were the large stone blocks used to build pyramids called?',

          options: ['Megaliths', 'Limestone blocks', 'Granite slabs'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the ancient Egyptian book that contained spells and prayers for the afterlife?',

          options: ['The Pyramid Texts', 'The Coffin Texts', 'The Book of the Dead'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which god was the ruler of the underworld and judge of the dead?',

          options: ['Anubis', 'Set', 'Osiris'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the ceremony called where a pharaoh\'s heart was weighed against a feather?',

          options: ['The Judgment of the Dead', 'The Trial of Osiris', 'The Weighing of the Heart'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which god was depicted with the head of a falcon and was the god of the sky?',

          options: ['Thoth', 'Ra', 'Horus'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the god of wisdom and writing, often shown with the head of an ibis?',

          options: ['Ptah', 'Khnum', 'Thoth'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'Which goddess was the wife of Osiris and mother of Horus?',

          options: ['Hathor', 'Bastet', 'Isis'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the simplified form of hieroglyphics used for everyday writing called?',

          options: ['Demotic script', 'Cursive hieroglyphics', 'Hieratic script'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What famous stone helped scholars finally understand hieroglyphics?',

          options: ['The Black Stone', 'The Sphinx Stone', 'The Rosetta Stone'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What were the ancient Egyptian priests who could read and write called?',

          options: ['Scholars', 'Writers', 'Scribes'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the plant used to make papyrus?',

          options: ['Nile reed', 'Egyptian grass', 'Cyperus papyrus'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What did Ancient Egyptians use to write with on papyrus?',

          options: ['Quill pens', 'Stylus', 'Reed brushes and ink'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What were the earliest religious texts carved on pyramid walls called?',

          options: ['Temple Inscriptions', 'Royal Decrees', 'Pyramid Texts'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the social class of skilled workers like craftsmen and artists called?',

          options: ['Merchants', 'Farmers', 'Artisans'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the Ancient Egyptian unit of measurement based on the length from elbow to fingertips?',

          options: ['Palm', 'Span', 'Cubit'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the main crop that Ancient Egyptians used to make bread and beer?',

          options: ['Rice', 'Corn', 'Emmer wheat and barley'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 106,

          questionText: 'What was the name of the Ancient Egyptian calendar that had 365 days?',

          options: ['The lunar calendar', 'The solar calendar', 'The civil calendar'],

          correctAnswerIndex: 2,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Baghdad and the Abbasid Empire Quiz',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'In what year was the city of Baghdad founded?',

          options: ['762 CE', '800 CE', '900 CE'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Which Abbasid caliph founded the city of Baghdad?',

          options: ['Harun al-Rashid', 'Al-Mansur', 'Al-Ma\'mun'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was the original shape of Baghdad\'s design?',

          options: ['Square with four gates', 'Circular with concentric walls', 'Rectangular with parallel streets'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Why did the Abbasids move their capital from Damascus to Baghdad?',

          options: ['To escape the cold weather', 'To establish a new political and cultural center', 'Because Damascus was destroyed'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Which river runs through Baghdad, making it an important trading center?',

          options: ['The Nile River', 'The Tigris River', 'The Euphrates River'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was the name of Baghdad\'s original circular design?',

          options: ['The Round City', 'The Square City', 'The Triangle City'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was located at the very center of the Round City?',

          options: ['A marketplace', 'The caliph\'s palace and the main mosque', 'A garden'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'How many main gates did the original Round City have?',

          options: ['Two gates', 'Four gates', 'Six gates'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What architectural style became famous during the Abbasid period?',

          options: ['Gothic style', 'Arabesque style with geometric patterns', 'Modern style'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What were the walls of Baghdad made from?',

          options: ['Wood', 'Mud bricks and baked bricks', 'Stone only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was the House of Wisdom?',

          options: ['The caliph\'s home', 'A major library and center for learning and translation', 'A marketplace'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Which caliph is most associated with establishing the House of Wisdom?',

          options: ['Al-Mansur', 'Al-Ma\'mun', 'Harun al-Rashid'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What did scholars at the House of Wisdom translate from?',

          options: ['Only Arabic books', 'Greek, Persian, Indian, and other ancient texts', 'Only religious texts'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Why was the House of Wisdom so important?',

          options: ['It was the tallest building', 'It preserved and spread knowledge from many cultures', 'It was the biggest marketplace'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What subjects were studied at the House of Wisdom?',

          options: ['Only religion', 'Mathematics, astronomy, medicine, philosophy, and more', 'Only art'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What were the busy marketplaces in Baghdad called?',

          options: ['Malls', 'Bazaars or souks', 'Stores'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What could you find in Baghdad\'s bazaars?',

          options: ['Only food', 'Spices, silk, books, jewelry, and goods from all over the world', 'Only clothes'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was a common material for making beautiful art and decorations?',

          options: ['Plastic', 'Ceramic tiles with colorful patterns', 'Wood only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was the main language used in Baghdad during the Abbasid period?',

          options: ['English', 'Arabic', 'Greek'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What made Baghdad a great place for people from different cultures to meet?',

          options: ['It had the best weather', 'It was a center of trade and learning where people from many places came', 'It was the smallest city'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Why was Baghdad\'s location on the Tigris River so important?',

          options: ['It made the city look pretty', 'It allowed ships to bring goods from faraway places', 'It provided drinking water only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What valuable goods came to Baghdad from far away?',

          options: ['Only local products', 'Silk from China, spices from India, and goods from many lands', 'Only food'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What did merchants use to buy and sell goods?',

          options: ['Credit cards', 'Coins made of gold and silver', 'Paper money'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What made Baghdad one of the richest cities in the world?',

          options: ['It had the most people', 'It was a major trading center connecting East and West', 'It had the biggest buildings'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What was the name of the trade routes that connected Baghdad to other parts of the world?',

          options: ['The Highway', 'The Silk Road and other trade routes', 'The River Road'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What period is the Abbasid era often called?',

          options: ['The Dark Ages', 'The Islamic Golden Age', 'The Modern Age'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What important mathematical concept did scholars in Baghdad help develop?',

          options: ['Only addition', 'Algebra and the number zero', 'Only counting'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What did astronomers in Baghdad study?',

          options: ['Only the sun', 'The stars, planets, and movements in the sky', 'Only the moon'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'What did doctors in Baghdad help improve?',

          options: ['Only surgery', 'Medical knowledge, hospitals, and treatments', 'Only medicine for animals'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 107,

          questionText: 'Why is the Abbasid period so important in history?',

          options: ['It had the biggest armies', 'It was a time of great learning, science, and cultural achievements', 'It lasted the longest'],

          correctAnswerIndex: 1,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Reward Quizzes - Vikings',

      category: 'History',

      ageGroup: 7,

      questions: [

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Where did the Vikings come from?',

          options: ['The Mediterranean region', 'Scandinavia (countries like Norway and Sweden)', 'Central Europe'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'About how long ago did the Vikings live?',

          options: ['1,000 years ago', '100 years ago', '10 years ago'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the main job for most Vikings?',

          options: ['Merchants', 'Farmers', 'Craftsmen'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What were Viking letters and writing called?',

          options: ['Latin', 'Runes', 'Greek'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Where did Vikings usually carve their writing?',

          options: ['On parchment', 'On stones and wood', 'On clay tablets'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What did Vikings use to buy things before they had coins?',

          options: ['Gold coins', 'Silver jewelry (often cut into pieces)', 'Bartering (trading goods for goods)'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What were Viking houses called?',

          options: ['Castles', 'Longhouses', 'Cottages'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What were most Viking houses made out of?',

          options: ['Wood, stone, or turf (grass and dirt)', 'Bricks and cement', 'Clay and mud'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Where was the fire usually placed in a Viking house?',

          options: ['In the fireplace by the wall', 'In the middle of the room on the floor', 'In a separate kitchen room'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What material were Viking clothes mostly made from?',

          options: ['Cotton', 'Wool and linen', 'Leather'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What did Viking children do for fun?',

          options: ['Played with toys and dolls', 'Played board games and wrestled', 'Read books'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Which of these animals did Vikings keep on their farms?',

          options: ['Horses', 'Pigs, sheep, and chickens', 'Goats'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What did Vikings eat a lot of?',

          options: ['Bread and cheese', 'Fish and meat stew', 'Fruits and vegetables'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What were the famous Viking boats called?',

          options: ['Galleys', 'Longships', 'Skiffs'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What scary animal head was often carved on the front of a Viking ship?',

          options: ['A dragon or snake', 'A wolf', 'A bear'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Why did they put dragon heads on their ships?',

          options: ['To show which family owned the ship', 'To scare away enemies and sea monsters', 'To honor the gods'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How did Viking ships move across the water?',

          options: ['With paddles only', 'Using sails and oars (rowing)', 'With a sail only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Vikings were great explorers. Which faraway place did they reach before Christopher Columbus?',

          options: ['North America', 'South America', 'Asia'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How did Vikings find their way at sea?',

          options: ['They used compasses', 'They looked at the sun, stars, and birds', 'They followed other ships'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Did real Viking helmets have horns on them?',

          options: ['Yes, always', 'No, never (that is just a myth!)', 'Only for special ceremonies'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the Viking\'s most common weapon?',

          options: ['A sword', 'An axe or a spear', 'A bow and arrow'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What did Vikings use to protect themselves in a fight?',

          options: ['A round wooden shield', 'A metal shield', 'Armor made of chainmail'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was a "Shield Wall"?',

          options: ['A defensive wall around a village', 'When warriors stood close together with shields overlapping', 'A formation where shields were stacked'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What were the very fierce Viking warriors called?',

          options: ['Berserkers', 'Jarls', 'Huscarls'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Who was the Viking god of thunder?',

          options: ['Loki', 'Thor', 'Odin'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What weapon did Thor carry?',

          options: ['A magic hammer', 'A sword', 'An axe'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Who was the king of all the Viking gods?',

          options: ['Odin', 'Thor', 'Tyr'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How many eyes did Odin have?',

          options: ['Two', 'One (he traded the other for wisdom)', 'Three'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the name of the place where brave warriors went after they died?',

          options: ['Valhalla', 'Asgard', 'Helheim'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Which day of the week is named after the god Thor?',

          options: ['Tuesday', 'Wednesday', 'Thursday (Thor\'s Day)'],

          correctAnswerIndex: 2,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the main material used to make Viking shields?',

          options: ['Metal', 'Wood', 'Leather'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What type of wood was most commonly used for Viking shields?',

          options: ['Oak, pine, or linden (lime wood)', 'Birch', 'Ash'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How thick were most Viking shields?',

          options: ['About 1 inch (2-3 cm) thick', 'About half an inch (1 cm) thick', 'About 2-3 inches (5-7 cm) thick'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was placed on the front of the shield to make it stronger?',

          options: ['A layer of leather', 'A metal boss (round center piece)', 'Metal strips around the edge'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the metal boss on a Viking shield used for?',

          options: ['Just decoration', 'Protection and to hold the shield together', 'To identify the owner'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was the handle on a Viking shield usually made from?',

          options: ['Metal', 'Leather or wood', 'Rope'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How were the wooden planks for a shield usually arranged?',

          options: ['Glued together side by side', 'Planks placed together and held with glue or nails', 'Bound together with leather strips only'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What shape were most Viking shields?',

          options: ['Square', 'Round', 'Oval'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How big were Viking shields usually?',

          options: ['About 2-3 feet (60-90 cm) across', 'About 4-5 feet (120-150 cm) across', 'About 1 foot (30 cm) across'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was sometimes added to the edge of a shield?',

          options: ['A leather rim to protect the edges', 'Metal studs', 'Decorative carvings'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Why did Vikings make their shields from wood instead of metal?',

          options: ['Wood was lighter and easier to carry', 'Wood was stronger than metal', 'Metal was too expensive'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How long did it take to make a Viking shield?',

          options: ['A skilled craftsman could make one in a few days', 'A few hours', 'Several weeks'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What did Vikings use to paint their shields?',

          options: ['Oil-based paints', 'Natural paints made from plants, minerals, and animal products', 'Dyes made from berries'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What colors were commonly used on Viking shields?',

          options: ['Red, yellow, black, and white', 'Only green', 'Brown and gray'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What patterns were often painted on Viking shields?',

          options: ['Spirals, circles, and geometric shapes', 'Animals and birds', 'Straight lines and stripes'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Why did Vikings decorate their shields?',

          options: ['To show which group they belonged to and to look impressive', 'To make them stronger', 'To honor the gods'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What symbol was sometimes painted on shields?',

          options: ['Runes (Viking letters) or family symbols', 'Crosses', 'Stars and moons'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Were all Viking shields decorated the same way?',

          options: ['No, each shield was unique', 'Yes, they all looked the same', 'Only shields for leaders had decorations'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How did Vikings hold their shields?',

          options: ['With one hand using a handle on the back', 'With both hands', 'With a strap around the arm'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What was a "Shield Wall"?',

          options: ['A defensive wall around a village', 'Warriors standing close together with shields overlapping', 'Shields stacked in a pile'],

          correctAnswerIndex: 1,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Could Viking shields be used to attack as well as defend?',

          options: ['Yes, the metal boss could be used to punch', 'No, they were only for blocking', 'Only the edge could be used to strike'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'What happened to shields during battle?',

          options: ['They could get damaged, broken, or lost', 'They never got damaged', 'They were always repaired immediately'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'How did Vikings carry their shields when not fighting?',

          options: ['On their back or slung over their shoulder', 'In a special bag', 'Carried by servants'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 108,

          questionText: 'Why were shields so important to Viking warriors?',

          options: ['They were the main protection in battle', 'They were required by law', 'They showed social status'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

    Quiz(

      id: quizId++,

      title: 'Real People of Assassin\'s Creed Mirage',

      category: 'History',

      ageGroup: 9,

      questions: [

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What was Ali ibn Muhammad known for leading?',

          options: ['A rebellion of enslaved people called the Zanj', 'A trade expedition', 'A religious pilgrimage'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Which group of people followed him?',

          options: ['The Zanj (enslaved people from East Africa)', 'Merchants and traders', 'Religious scholars'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Was he part of the Abbasid government or against it?',

          options: ['Against it - he led a rebellion', 'Part of it - he was a government official', 'He worked with the government'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Where did his rebellion mainly take place?',

          options: ['In southern Iraq, near Basra', 'In Baghdad', 'In Syria'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Why do people still remember him today?',

          options: ['He led one of the largest slave revolts in history', 'He was a famous poet', 'He built great monuments'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'How many brothers were in the Banu Musa group?',

          options: ['Three brothers', 'Two brothers', 'Four brothers'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What type of work were they famous for?',

          options: ['Engineering and inventing machines', 'Writing poetry', 'Leading armies'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Did they invent machines or write stories?',

          options: ['They invented machines and mechanical devices', 'They wrote stories', 'They did both equally'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Where did they work and study?',

          options: ['In Baghdad during the Abbasid period', 'In Egypt', 'In Spain'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What is one thing they helped improve in science?',

          options: ['Mechanical engineering and automation', 'Medicine', 'Astronomy'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What was Al-Mutawakkil\'s job in the Abbasid Empire?',

          options: ['He was the Caliph (ruler)', 'He was a general', 'He was a scholar'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Was he a ruler or a soldier?',

          options: ['A ruler - he was the Caliph', 'A soldier', 'A merchant'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Where did he rule from?',

          options: ['From Samarra, the capital city', 'From Baghdad', 'From Damascus'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What big empire did he lead?',

          options: ['The Abbasid Empire', 'The Byzantine Empire', 'The Persian Empire'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What happened to him at the end of his rule?',

          options: ['He was assassinated by his own guards', 'He retired peacefully', 'He was defeated in battle'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Who was Qabiha the mother of?',

          options: ['Al-Mutawakkil, the Caliph', 'A famous general', 'A scholar'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Did she have influence in the royal court?',

          options: ['Yes, she had significant influence', 'No, she had no influence', 'She had little influence'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Was she famous for ruling directly or advising others?',

          options: ['Advising others - she was a powerful advisor', 'Ruling directly', 'Neither'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Why was her position important at the time?',

          options: ['Mothers of caliphs often had great political power', 'She was a military leader', 'She was a religious leader'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What does her story tell us about palace life?',

          options: ['Women could have significant political influence', 'Women had no power', 'Only men had power'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What was Arib famous for performing?',

          options: ['Music, singing, and poetry', 'Fighting in battles', 'Scientific experiments'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Was she known for music, fighting, or science?',

          options: ['Music - she was a famous singer and musician', 'Fighting', 'Science'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Where did she perform her work?',

          options: ['In the royal court of Baghdad', 'In public markets', 'In religious temples'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Why was she unusual for her time?',

          options: ['She was a highly educated and independent woman artist', 'She was a warrior', 'She was a ruler'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'How do people remember her today?',

          options: ['As one of the most famous female musicians and poets of the Abbasid period', 'As a military leader', 'As a religious scholar'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What type of books did Al-Jahiz write?',

          options: ['Books about animals, literature, and many topics', 'Only religious books', 'Only history books'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Was he a soldier or a scholar?',

          options: ['A scholar and writer', 'A soldier', 'A merchant'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What topics did he enjoy studying?',

          options: ['Animals, literature, philosophy, and many subjects', 'Only mathematics', 'Only religion'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Why were his writings important?',

          options: ['He wrote about many subjects and helped preserve knowledge', 'He wrote military strategies', 'He wrote only poetry'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What made his ideas different from others?',

          options: ['He wrote in a humorous and engaging style about serious topics', 'He only wrote serious books', 'He only wrote poetry'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What role did Muhammad ibn Tahir have in the empire?',

          options: ['He was a governor', 'He was a soldier', 'He was a scholar'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What city or region did he govern?',

          options: ['Khurasan (a large region in the east)', 'Baghdad', 'Egypt'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Did he work for the caliph?',

          options: ['Yes, he was appointed by the caliph', 'No, he was independent', 'He worked against the caliph'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'What was his main responsibility?',

          options: ['To govern and maintain order in his region', 'To lead armies', 'To write books'],

          correctAnswerIndex: 0,

        ),

        Question(

          id: questionId++,

          quizId: 109,

          questionText: 'Why is he remembered in history?',

          options: ['He was an important governor during a time of change in the Abbasid Empire', 'He was a famous poet', 'He was a great warrior'],

          correctAnswerIndex: 0,

        ),

      ],

    ),

  ];
}
