
import os

file_path = "c:/Users/Hamed/Documents/teaching-hub/src/data/lessons/year2Lessons.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the start and end markers for the specific lesson content
start_marker = 'content: `# Arduino Lesson 1: Understanding void setup()'
end_marker = '<!-- QUESTION_END -->`,'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find lesson content markers")
    exit(1)

# Include the end marker length to replace it correctly
end_idx += len(end_marker)

# The new content
new_content = """content: `# Arduino Lesson 1: Understanding void setup()



## Introduction to setup()



Every Arduino program must have a \`setup()\` function. This function runs **once** when the Arduino board is powered on or reset.



<!-- QUESTION_START -->
How many times does the setup() function execute in an Arduino program?
<!-- OPTIONS -->
Once at the start|Continuously in a loop|Only when called explicitly|Twice - once at start and once at end
<!-- CORRECT -->
0
<!-- EXPLANATION -->
The setup() function runs exactly once when the Arduino starts up, before the loop() function begins.
<!-- QUESTION_END -->



## What is void setup()?



The \`setup()\` function is where you initialize your Arduino program. It's called automatically when the sketch starts.



## Key Points



1. **Runs only once**: The setup function executes exactly once when the Arduino starts

2. **Initialization**: Use it to configure pins, initialize serial communication, or set initial values

3. **Required**: Every Arduino sketch must have a setup function, even if it's empty

4. **Void keyword**: The \`void\` keyword means this function doesn't return any value



<!-- QUESTION_START -->
What does the "void" keyword in "void setup()" indicate?
<!-- OPTIONS -->
The function returns an integer|The function returns a boolean value|The function does not return any value|The function can be called multiple times
<!-- CORRECT -->
2
<!-- EXPLANATION -->
The "void" keyword means the function doesn't return any value. It's used for functions that perform actions but don't need to send data back.
<!-- QUESTION_END -->



## Common Uses



- Setting pin modes with \`pinMode()\`

- Starting serial communication with \`Serial.begin()\`

- Initializing variables

- Setting up libraries



<!-- QUESTION_START -->
What is the primary purpose of the setup() function?
<!-- OPTIONS -->
To run the main program logic|To initialize pins and configure the Arduino|To create an infinite loop|To handle serial communication only
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The setup() function is primarily used to initialize pins, configure the Arduino, and set up any libraries or communication protocols needed for your program.
<!-- QUESTION_END -->



<!-- QUESTION_START -->
Which of the following is typically done in setup() but NOT in loop()?
<!-- OPTIONS -->
Reading sensor values|Controlling LEDs|Setting pin modes with pinMode()|Using delay() functions
<!-- CORRECT -->
2
<!-- EXPLANATION -->
Setting pin modes with pinMode() should be done in setup() because it only needs to happen once. Reading sensors, controlling LEDs, and using delays are typically done in loop().
<!-- QUESTION_END -->



## Important Notes



- Setup runs before the loop function

- If setup is missing, your code will not compile

- You can only have one setup function per sketch



<!-- QUESTION_START -->
If you forget to include setup() in your Arduino sketch, what happens?
<!-- OPTIONS -->
The program runs normally|The code will not compile|Only the loop() function runs|The Arduino resets continuously
<!-- CORRECT -->
1
<!-- EXPLANATION -->
The setup() function is required in every Arduino sketch. If it's missing, the code will not compile and you'll get an error.
<!-- QUESTION_END -->



## Syntax



\`\`\`cpp

void setup() {

// Your initialization code goes here

}

\`\`\`



## Example



\`\`\`cpp

void setup() {

pinMode(13, OUTPUT);  // Set pin 13 as output

Serial.begin(9600);   // Start serial at 9600 baud

}

\`\`\`



## Exercise



<!-- EXERCISE_START -->
{"instruction": "Write a complete Arduino sketch with a setup() function that sets pin 13 as OUTPUT. Include both setup() and loop() functions.", "codePattern": "void\\\\s+setup\\\\s*\\\\(\\\\s*\\\\)", "requiredFunctions": ["setup"], "requiredStatements": ["pinMode"]}
<!-- EXERCISE_END -->`, """

# Replace the content
updated_file_content = content[:start_idx] + new_content + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(updated_file_content)

print("Successfully updated lesson content")
