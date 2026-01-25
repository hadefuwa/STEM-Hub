import { Lesson } from '../../models/Lesson.js';

/**
 * Year 7 Lessons
 */
export function getYear7Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year7',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "How the Web Works",
      emoji: '🌐',
      content: `# 🌐 How the Web Works - Network Protocol Challenge! 🏆

## Welcome to the Network Protocol Game!

**Ready to become a web protocol master?** This interactive game will guide you through the invisible journey that happens every time you visit a website!

### 🎯 Your Mission
Navigate through 6 challenging steps of the web request process. Answer questions correctly to earn points and avoid mistakes to achieve the highest medal ranking!

### 🏅 Medal System
- **🏆 Platinum**: Perfect score (95%+) with zero mistakes
- **🥇 Gold**: Excellent performance (85%+)
- **🥈 Silver**: Good understanding (75%+)
- **🥉 Bronze**: Basic knowledge achieved

### 🎮 Game Features
- **Points System**: Earn 10-20 points per correct answer
- **Speed Bonus**: Complete faster for extra points
- **Accuracy Bonus**: Fewer mistakes = higher score
- **Visual Feedback**: Watch the network request come to life!

### 🌟 What You'll Learn
1. **DNS Lookup**: How websites get their addresses
2. **TCP Handshake**: Establishing secure connections  
3. **HTTP Requests**: Asking for web content
4. **Server Response**: Getting the data back
5. **Status Codes**: Understanding success/failure
6. **Rendering**: Turning code into visual websites

**Click "Start Game" to begin your network protocol adventure!** 🚀`,
      quizId: null,
      assessmentType: 'network-request-game',
      categoryId: 'technology',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year7',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "HTML: The Skeleton of the Web",
      emoji: '💀',
      content: `# HTML: The Skeleton of the Web 💀

## What is HTML?

**HTML** (HyperText Markup Language) is the code that organizes your web page.

### Tags
Tags define elements. They usually come in pairs:
- \`<h1>Heading</h1>\`: A large title
- \`<p>Paragraph</p>\`: A block of text
- \`<button>Click Me</button>\`: A clickable button

## Your Mission
The editor below needs you to build a simple webpage.
1. Create a main heading (\`<h1>\`)
2. Add a paragraph (\`<p>\`)

<!-- EXERCISE_START -->
{
  "instruction": "Create an <h1> tag with the text 'My Favorite Hobby' and a <p> tag describing it.",
  "starterCode": "<!-- Write your HTML code here -->\n\n<h1>My Favorite Hobby</h1>\n<p>I love coding!</p>",
  "regex": "<h1>make_your_own_regex_check_if_needed_or_just_check_tags</h1>"
}
<!-- EXERCISE_END -->`,
      quizId: null,
      assessmentType: 'web-code-editor',
      categoryId: 'technology',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year7',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "CSS: Styling the Web",
      emoji: '🎨',
      content: `# CSS: Styling the Web 🎨

## What is CSS?

**CSS** (Cascading Style Sheets) makes HTML look good. It handles colors, fonts, and layout.

### How to Style
We select an HTML tag and give it rules.

\`\`\`css
h1 {
  color: blue;
  text-align: center;
}
\`\`\`

## Your Mission
The heading looks boring! Let's style it.
1. Change the \`color\` to your favorite color (e.g. \`#48e5ff\` or \`pink\`).
2. Center the text using \`text-align: center\`.

<!-- EXERCISE_START -->
{
  "instruction": "Style the h1 tag! Set the 'color' to 'cyan' (or any color you like) and 'text-align' to 'center'.",
  "starterCode": "<style>\n  h1 {\n    /* Mobile: add color: cyan; */\n    /* Mobile: add text-align: center; */\n  }\n</style>\n\n<h1>Futuristic Web</h1>\n<p>Welcome to the future.</p>",
  "regex": "color:.*[a-z0-9#]+;.*text-align:\\s*center"
}
<!-- EXERCISE_END -->`,
      quizId: null,
      assessmentType: 'web-code-editor',
      categoryId: 'technology',
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year7',
      subjectId: 'technology',
      lessonNumber: 4,
      title: "Cyber Security: Digital Defense",
      emoji: '🛡️',
      content: `# Cyber Security: Digital Defense 🛡️

## Don't Get Phished! 🎣

**Phishing** is when hackers pretend to be trustworthy companies (like Netflix, Amazon, or your School) to steal your password.

### Red Flags 🚩
1. **Urgency**: "Act now or account deleted!"
2. **Bad Grammar**: Spelling mistakes.
3. **Suspicious Sender**: \`support@netflix-security-update-123.com\` instead of \`netflix.com\`.
4. **Suspicious Links**: Asking you to click and login.

## Interactive Challenge
You work for the Cyber Defense Team. Analyze the incoming emails and decide: **Safe** or **Phishing**?`,
      quizId: null,
      assessmentType: 'phishing-game',
      categoryId: 'technology',
    }),

     new Lesson({
      id: lessonId++,
      yearId: 'year7',
      subjectId: 'technology',
      lessonNumber: 5,
      title: "Binary: The Language of Computers",
      emoji: '0️⃣',
      content: `# Binary: The Language of Computers 1️⃣0️⃣

## The Code of the Machines

Computers don't understand words or decimal numbers (0-9). They only understand **Electricity**.
- **ON** = 1
- **OFF** = 0

## How to Read Binary
Each position is worth double the last one: 8, 4, 2, 1.

| 8 | 4 | 2 | 1 | Total |
|---|---|---|---|---|
| 0 | 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 9 (8+1) |
| 1 | 1 | 1 | 1 | 15 (8+4+2+1) |

## Interactive Challenge
Toggle the switches to create the target number!`,
      quizId: null,
      assessmentType: 'binary-game',
      categoryId: 'technology',
    }),
  ];
}
