import { Lesson } from '../../models/Lesson.js';

/**
 * Year 5 Lessons
 */
export function getYear5Lessons(startLessonId, startQuizId) {
  let lessonId = startLessonId;
  let quizId = startQuizId;

  return [
    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 1,
      title: "Electronics 1: Understanding Resistance",
      emoji: '🛡️',
      content: `# Electronics 1: Understanding Resistance 🛡️

## What is Resistance?

Resistance is like a **squeeze** on a water hose - it controls how much electricity can flow through a circuit.

## The Resistor

A resistor is a component that adds resistance to slow down the flow of electricity. Think of it like speed bumps on a road - they slow down traffic!

## Why Do We Need Resistors?

- **Protect components** - Too much current can break LEDs and other parts
- **Control brightness** - Change how bright an LED shines
- **Save power** - Use only the electricity you need

## Ohm's Law

The relationship between **Voltage (V)**, **Current (I)**, and **Resistance (R)** is:

**V = I × R**

- Higher resistance = Less current
- Lower resistance = More current

## Safety First!

LEDs need the right amount of resistance:
- Too much resistance → LED won't light up
- Just right (220-1000Ω) → LED glows safely
- Too little resistance → LED burns out! 💥

## The Game

In this interactive game, you'll:
1. Start with HIGH resistance (safe but dim)
2. Slowly lower resistance to make the LED brighter
3. Find the safe zone (220-1000Ω)
4. Learn what happens if you go too low!

Can you light the LED without breaking it?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 2,
      title: "Electronics 2: Understanding Voltage",
      emoji: '⚡',
      content: `# Electronics 2: Understanding Voltage ⚡

## What is Voltage?

Voltage is the **electrical push** that makes current flow. Think of it like water pressure in a pipe:
- High voltage = Strong push
- Low voltage = Weak push
- No voltage = Nothing happens

## Measuring Voltage

Voltage is measured in **Volts (V)**:
- Small devices: 3-5V (Arduino, phones)
- House appliances: 240V (lights, TV)
- Car battery: 12V
- AA battery: 1.5V

## Different Devices Need Different Voltage

Just like you wouldn't use a fire hose to water a tiny plant, different devices need different amounts of electrical push:

### Small Electronics (5V)
- Arduino boards
- USB devices
- Small LEDs
- Sensors

### Large Appliances (240V)
- House lights
- TVs and computers
- Kitchen appliances
- Power tools

## What Happens If Voltage Is Wrong?

- **Too low** → Device won't work or will be very weak
- **Just right** → Device works perfectly ✓
- **Too high** → Device breaks or burns out! 💥

## The Game

In this two-level game, you'll:

**Level 1: Tiny LED (Arduino)**
- Target: 5V
- Learn to power small electronics safely

**Level 2: Big House Lamp**
- Target: 240V  
- See how much more push big appliances need!

Can you find the perfect voltage for each device?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),

    new Lesson({
      id: lessonId++,
      yearId: 'year5',
      subjectId: 'technology',
      lessonNumber: 3,
      title: "Electronics 3: Understanding Current",
      emoji: '🔌',
      content: `# Electronics 3: Understanding Current 🔌

## What is Current?

Current is the **flow of electricity** through a circuit. Think of it like water flowing through pipes:
- More current = More flow
- Less current = Less flow
- No current = Nothing flowing

## Measuring Current

Current is measured in **Amperes (Amps or A)**:
- Small LED: 0.02A (20 milliamps)
- Phone charger: 1-2A
- Laptop: 3-4A
- House circuits: 10-15A limit
- Electric car: 30-50A

## The Fuse - Your Safety Guardian

A **fuse** is like a safety guard that melts if too much current flows. It sacrifices itself to protect your devices and prevent fires!

When current is **too high**, the fuse wire heats up and breaks the circuit.

## Adding More Devices = More Current

When you plug in multiple devices:
- Each device draws current
- Total current = Sum of all devices
- Fuse has a LIMIT (usually 10-15A for home circuits)

## What Happens If You Exceed The Limit?

1. More devices = More total current
2. Current exceeds fuse rating
3. Fuse melts → Circuit breaks
4. Power cuts off (this is GOOD - it prevents fires!)

## The Game

In this interactive challenge, you'll:
- Have a 12V circuit with a 10A fuse
- Turn on different "toys" that draw current
- Watch electrons flow faster as current increases
- Try to stay under the 10A limit!

Each toy draws different amounts:
- 🧸 Teddy Bear: 1A
- 🏎️ RC Car: 2A  
- 🤖 Robot: 3A
- 📺 TV: 5A

Can you manage the current without blowing the fuse?`,
      quizId: null,
      assessmentType: null,
      categoryId: null,
    }),
  ];
}
