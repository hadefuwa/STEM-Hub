# Guide: Adding Custom Interactive Lessons

This guide explains how to add custom HTML-based interactive lessons (like Blockly tutorials or HTML games) to the Teaching Hub app.

## Table of Contents
1. [File Structure](#file-structure)
2. [Creating the HTML Lesson File](#creating-the-html-lesson-file)
3. [Integrating into Year Lessons](#integrating-into-year-lessons)
4. [Updating LessonViewScreen](#updating-lessonviewscreen)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## File Structure

### Where to Place HTML Files
- **Location**: `public/html-games/`
- **Naming**: Use lowercase with hyphens (e.g., `blockly-lesson-1-hello-world.html`)
- **⚠️ Important**: Files MUST be in `public/html-games/` NOT `html games/` folder

### Example Structure
```
teaching-hub/
├── public/
│   └── html-games/
│       ├── blockly-lesson-1-hello-world.html
│       ├── blockly-lesson-2-simple-math.html
│       ├── ancient-egypt-pyramids-pharaohs.html
│       └── ...
├── src/
│   ├── data/
│   │   └── lessons/
│   │       ├── year1Lessons.js
│   │       ├── year2Lessons.js
│   │       └── ...
│   └── screens/
│       └── LessonViewScreen.jsx
```

---

## Creating the HTML Lesson File

### 1. Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Your Lesson Title</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { 
      height: 100%; 
      overflow: hidden; 
      font-family: 'Segoe UI', sans-serif; 
    }
    body { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      display: flex; 
      flex-direction: column; 
    }
    
    /* Your custom styles here */
  </style>
</head>
<body>
  <!-- Your lesson content here -->
  
  <script>
    // Your lesson logic here
  </script>
</body>
</html>
```

### 2. Interactive Game-Style Features

#### Essential UI Components
- **Top Bar**: Progress bar, stars, lesson title
- **Main Content Area**: Interactive workspace (Blockly, canvas, etc.)
- **Challenge Card**: Floating overlay with instructions
- **Bottom Controls**: Navigation buttons (Previous, Next, Run, Check, etc.)
- **Feedback Popups**: Animated success/error messages

#### Example Top Bar
```html
<div class="top-bar">
  <div class="lesson-title">👋 Lesson Title</div>
  <div class="progress-bar">
    <div class="progress-fill" id="progressBar">0%</div>
  </div>
  <div class="stars" id="starsDisplay">⭐⭐⭐</div>
</div>
```

#### Example Bottom Controls
```html
<div class="bottom-controls">
  <button class="btn-nav" id="prevBtn" onclick="previousChallenge()" disabled>◀ Previous</button>
  <button class="btn-secondary" onclick="resetWorkspace()">🔄 Reset</button>
  <button class="btn-secondary" onclick="showHint()">💡 Hint</button>
  <button class="btn-primary" onclick="runCode()">▶ Run Code</button>
  <button class="btn-success" onclick="checkSolution()">✓ Check Answer</button>
  <button class="btn-nav" id="nextBtn" onclick="nextChallenge()">Next ▶</button>
</div>
```

### 3. Challenge Navigation System

```javascript
let currentChallenge = 0;
let completedChallenges = [false, false, false];

const challenges = [
  {
    title: "Challenge 1",
    description: "Do something",
    expected: "Expected output",
    hint: "Helpful hint",
    validate: (output) => output.trim() === 'expected'
  },
  // More challenges...
];

function updateUI() {
  const challenge = challenges[currentChallenge];
  document.getElementById('challengeNumber').textContent = `Challenge ${currentChallenge + 1} of ${challenges.length}`;
  document.getElementById('challengeTitle').textContent = challenge.title;
  document.getElementById('challengeDescription').textContent = challenge.description;
  document.getElementById('expectedOutput').textContent = `Expected: ${challenge.expected}`;
  document.getElementById('prevBtn').disabled = currentChallenge === 0;
  document.getElementById('nextBtn').disabled = currentChallenge === challenges.length - 1;
  updateProgress();
}

function nextChallenge() {
  if (currentChallenge < challenges.length - 1) {
    currentChallenge++;
    updateUI();
  }
}

function previousChallenge() {
  if (currentChallenge > 0) {
    currentChallenge--;
    updateUI();
  }
}

function updateProgress() {
  const completed = completedChallenges.filter(c => c).length;
  const percent = Math.round((completed / challenges.length) * 100);
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = percent + '%';
  progressBar.textContent = percent + '%';
  
  const stars = Array(challenges.length).fill('⭐').map((s, i) => i < completed ? '⭐' : '☆').join('');
  document.getElementById('starsDisplay').textContent = stars;
}
```

### 4. **CRITICAL**: Completion Notification

Add this code to notify the parent app when the lesson is complete:

```javascript
function checkSolution() {
  // Your validation logic...
  
  if (challenges[currentChallenge].validate(result)) {
    completedChallenges[currentChallenge] = true;
    updateProgress();
    
    if (currentChallenge < challenges.length - 1) {
      showFeedback('🎉', 'Correct!', 'Moving to next challenge...', 'success');
      setTimeout(() => {
        currentChallenge++;
        updateUI();
      }, 2000);
    } else {
      showFeedback('🏆', 'Lesson Complete!', 'Amazing work!', 'success');
      
      // ⚠️ REQUIRED: Notify parent app of completion
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: 'html-game-complete',
          game: 'your-lesson-name'  // Unique identifier
        }, '*');
      }
    }
  }
}
```

**Without this postMessage, you will NOT receive:**
- Medal/trophy
- Points
- Progress tracking
- "Next Lesson" button

### 5. Responsive Design Requirements

```css
/* Ensure no scrolling issues */
html, body {
  height: 100%;
  overflow: hidden;
}

/* Full-screen layout */
body {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .challenge-overlay { 
    right: 10px; 
    top: 10px; 
    max-width: 300px; 
    padding: 15px; 
  }
  .lesson-title { 
    font-size: 1.2em; 
  }
  button { 
    padding: 10px 18px; 
    font-size: 14px; 
  }
}
```

---

## Integrating into Year Lessons

### 1. Choose the Year and Subject

Navigate to: `src/data/lessons/yearXLessons.js`

Example: For Year 1, edit `year1Lessons.js`

### 2. Add Lesson Object

```javascript
export const year1Lessons = [
  // ... existing lessons ...
  
  new Lesson({
    id: 'y1-technology-8',               // Unique ID
    yearId: 'year1',                     // Year identifier
    subjectId: 'technology',             // Subject identifier
    lessonNumber: 8,                     // Sequential number
    categoryId: null,                    // Use null for HTML games
    title: 'Blockly Lesson 1: Hello World',  // Must match LessonViewScreen condition
    content: `
# Blockly Lesson 1: Hello World

Learn the basics of coding with visual blocks!

In this lesson, you'll learn how to:
- Print text to the screen
- Display your name
- Work with numbers
    `,
    assessmentType: null,                // ⚠️ IMPORTANT: Use null, not 'html-game'
    externalUrl: null,
  }),
  
  // Remember to update subsequent lesson numbers if inserting!
];
```

### 3. **Important Notes**

- **assessmentType**: MUST be `null` for HTML games loaded via title matching
- **categoryId**: Set to `null` for custom HTML games
- **title**: Must exactly match the condition you'll add to LessonViewScreen.jsx
- **lessonNumber**: Must be sequential within the subject

### 4. Renumber Subsequent Lessons

If you inserted lessons, update the numbers:

```javascript
// Before:
new Lesson({ lessonNumber: 8, title: 'TapTapTap Level 1' }),
new Lesson({ lessonNumber: 9, title: 'TapTapTap Level 2' }),

// After inserting 3 new lessons (8, 9, 10):
new Lesson({ lessonNumber: 11, title: 'TapTapTap Level 1' }),
new Lesson({ lessonNumber: 12, title: 'TapTapTap Level 2' }),
```

---

## Updating LessonViewScreen

### 1. Locate the File

`src/screens/LessonViewScreen.jsx`

### 2. Add Conditional Rendering

Find the section with HTML game conditionals and add yours **BEFORE** the general Blockly check:

```javascript
// Your custom lessons (add BEFORE general Blockly check)
if (lesson.title === 'Blockly Lesson 1: Hello World' || 
    lesson.title === 'Blockly Lesson 2: Simple Math' || 
    lesson.title === 'Blockly Lesson 3: Sequences & Patterns') {
  return (
    <ErrorBoundary>
      <HTMLGameEmbed 
        url={`/html-games/blockly-lesson-${lesson.title.includes('1') ? '1' : lesson.title.includes('2') ? '2' : '3'}-${lesson.title.includes('Hello') ? 'hello-world' : lesson.title.includes('Math') ? 'simple-math' : 'sequences'}.html`}
        height="100%"
        lesson={lesson}
      />
    </ErrorBoundary>
  );
}

// General Blockly Games check comes AFTER
if (lesson.title.startsWith('Blockly')) {
  return <BlocklyEmbed lesson={lesson} />;
}
```

### 3. **Order Matters!**

The conditions are checked top-to-bottom. Place specific checks before general checks:

```javascript
// ✅ CORRECT: Specific before general
if (lesson.title === 'Blockly Lesson 1: Hello World') { ... }
if (lesson.title.startsWith('Blockly')) { ... }

// ❌ WRONG: General before specific (specific will never be reached)
if (lesson.title.startsWith('Blockly')) { ... }
if (lesson.title === 'Blockly Lesson 1: Hello World') { ... }
```

### 4. Alternative: Pattern Matching

For cleaner code with multiple lessons:

```javascript
const blocklyLessonMatch = lesson.title.match(/Blockly Lesson (\d+): (.+)/);
if (blocklyLessonMatch) {
  const lessonNum = blocklyLessonMatch[1];
  const lessonSlug = lesson.title
    .toLowerCase()
    .replace(/blockly lesson \d+: /, '')
    .replace(/ & /g, '-')
    .replace(/ /g, '-');
  
  return (
    <ErrorBoundary>
      <HTMLGameEmbed 
        url={`/html-games/blockly-lesson-${lessonNum}-${lessonSlug}.html`}
        height="100%"
        lesson={lesson}
      />
    </ErrorBoundary>
  );
}
```

---

## Testing

### 1. Verify File Location
```bash
# In PowerShell
Test-Path "public/html-games/your-lesson.html"
# Should return: True
```

### 2. Test HTML File Standalone
1. Open the HTML file directly in a browser
2. Verify all challenges work
3. Check console for errors
4. Test on mobile viewport

### 3. Test in App
1. Run `npm start`
2. Navigate to the year/subject
3. Open your lesson
4. Verify:
   - ✅ Lesson loads without blank screen
   - ✅ All interactive elements work
   - ✅ Navigation buttons (Previous/Next) function
   - ✅ Progress bar updates
   - ✅ Completion shows medal and points
   - ✅ "Next Lesson" button appears
   - ✅ No scrolling issues
   - ✅ Responsive on different screen sizes

### 4. Check Completion Flow
1. Complete all challenges
2. Verify "Great Job!" overlay appears
3. Check medal appears in lesson list
4. Verify points are awarded
5. Click "Next Lesson" button
6. Confirm overlay disappears on next lesson

---

## Troubleshooting

### Problem: Lesson loads Blockly Games Puzzle instead of custom content
**Cause**: File in wrong location or wrong conditional in LessonViewScreen  
**Solution**:
- Move file to `public/html-games/`
- Add specific title check in LessonViewScreen BEFORE general Blockly check

### Problem: Blank white screen
**Cause**: Wrong assessmentType in lesson definition  
**Solution**: Change `assessmentType: 'html-game'` to `assessmentType: null`

### Problem: Blockly editor not visible
**Cause**: Insufficient height on Blockly div  
**Solution**: Add CSS:
```css
#blocklyDiv {
  flex: 1;
  height: 100%;
  min-height: 400px;
}
```

### Problem: No medal or points after completion
**Cause**: Missing postMessage notification  
**Solution**: Add completion code:
```javascript
if (window.parent && window.parent !== window) {
  window.parent.postMessage({
    type: 'html-game-complete',
    game: 'your-lesson-name'
  }, '*');
}
```

### Problem: Completion overlay stays on next lesson
**Cause**: Fixed in HTMLGameEmbed.jsx (already patched)  
**Verify**: Check that HTMLGameEmbed has useEffect cleanup for lesson changes

### Problem: Challenge validation not working
**Cause**: Checking wrong output index  
**Solution**: For single-output challenges, use `output[0]` not `output[currentChallenge]`

### Problem: Can't navigate between challenges
**Cause**: Buttons disabled incorrectly  
**Solution**: Update button state in updateUI():
```javascript
document.getElementById('prevBtn').disabled = currentChallenge === 0;
document.getElementById('nextBtn').disabled = currentChallenge === challenges.length - 1;
```

---

## Best Practices

### 1. User Experience
- ✅ Auto-advance on correct answers with 2-second delay
- ✅ Show celebratory animations (🎉, 🏆)
- ✅ Provide hints for each challenge
- ✅ Allow manual navigation between challenges
- ✅ Clear visual feedback (progress bar, stars)
- ✅ Responsive design for tablets/phones

### 2. Validation
- ✅ Provide specific error messages
- ✅ Allow case-insensitive matching where appropriate
- ✅ Trim whitespace from user input
- ✅ Show expected output clearly

### 3. Accessibility
- ✅ Use semantic HTML
- ✅ Ensure sufficient color contrast
- ✅ Make buttons large and touch-friendly
- ✅ Test with keyboard navigation

### 4. Performance
- ✅ Minimize external dependencies
- ✅ Use CDN for libraries (Blockly, etc.)
- ✅ Optimize animations (use CSS transforms)
- ✅ Avoid memory leaks (cleanup intervals/timeouts)

### 5. Code Organization
- ✅ Separate concerns (UI update, validation, state management)
- ✅ Use descriptive variable names
- ✅ Comment complex logic
- ✅ Keep challenge data in arrays
- ✅ Use functions for reusable code

---

## Example: Complete Blockly Lesson Template

See existing files for complete examples:
- `public/html-games/blockly-lesson-1-hello-world.html`
- `public/html-games/blockly-lesson-2-simple-math.html`
- `public/html-games/blockly-lesson-3-sequences.html`

Key features demonstrated:
- Interactive game-style UI with gradients
- Challenge navigation system (Previous/Next)
- Progress bar with percentage
- Star tracking system
- Animated feedback popups
- Hint system with auto-hide
- Workspace reset confirmation
- Completion notification to parent app
- Responsive mobile design
- No-scroll full-screen layout

---

## Quick Checklist

Before deploying a new lesson:

- [ ] HTML file in `public/html-games/`
- [ ] Lesson added to appropriate yearXLessons.js
- [ ] assessmentType set to `null`
- [ ] Title exactly matches LessonViewScreen condition
- [ ] Conditional added to LessonViewScreen.jsx (before general checks)
- [ ] Subsequent lesson numbers updated if needed
- [ ] All challenges have validation functions
- [ ] postMessage sent on completion
- [ ] Progress bar updates correctly
- [ ] Stars display correctly
- [ ] Navigation buttons work (Previous/Next)
- [ ] Hints display and auto-hide
- [ ] Reset button with confirmation
- [ ] Responsive design tested
- [ ] No scrolling issues
- [ ] Completion awards medal and points
- [ ] "Next Lesson" button appears
- [ ] Overlay disappears on navigation
- [ ] Tested on mobile viewport

---

## Need Help?

Common questions:
1. **What files do I need to edit?** 
   - Create: `public/html-games/your-lesson.html`
   - Edit: `src/data/lessons/yearXLessons.js`
   - Edit: `src/screens/LessonViewScreen.jsx`

2. **Why isn't my lesson showing up?**
   - Check file location (`public/html-games/`)
   - Verify lesson title matches LessonViewScreen condition
   - Ensure assessmentType is `null`
   - Check browser console for errors

3. **How do I add multiple challenges?**
   - Use the challenge array pattern shown above
   - Implement Previous/Next navigation
   - Track completion in array: `completedChallenges[currentChallenge] = true`

4. **Can I use external libraries?**
   - Yes! Load via CDN in the HTML file
   - Example: Blockly, p5.js, Three.js, etc.
   - Keep dependencies minimal for performance

---

**Happy teaching! 🎓**
