# STEM Hub

A cross-platform STEM learning management application built with React, Electron, and Vite.

## Overview

STEM Hub is an educational platform designed to support families with interactive lessons, quizzes, progress tracking, and gamified learning experiences. The application provides a comprehensive solution for managing educational content, student progress, and engagement through a fun, game-like interface.

## Features

### 📚 Educational Content
- Interactive lessons across multiple subjects
- Built-in quizzes and assessments
- Age-appropriate content organized by year levels (Nursery to Year 6)
- Integration with Blockly Games for programming education
- Video resources and multimedia content

### 👤 Student Management
- Multiple student profiles with customizable avatars
- Character customization options using DiceBear avatars
- Progress tracking and analytics
- Achievement system with medals and rewards

### 🎮 Gamification
- Point-based reward system
- Virtual shop for purchasing rewards
- Art grading and submission system
- Interactive games using Phaser game engine

### 📊 Progress Tracking
- Detailed progress monitoring
- Performance analytics and reporting
- Activity logging
- Grade tracking for assignments and quizzes

### 💻 Cross-Platform Support
- Runs natively on Windows, macOS, and Linux
- Desktop application built with Electron
- Offline capability for uninterrupted learning
- Automatic update functionality

## Technology Stack

- **Frontend**: React 18 with Hooks and Context
- **Framework**: Vite for fast builds and development
- **Desktop**: Electron for cross-platform deployment
- **State Management**: Zustand
- **Routing**: React Router DOM
- **UI Components**: Custom-built with CSS
- **Game Engine**: Phaser for interactive games
- **Code Editor**: Monaco Editor integration
- **Markdown Rendering**: React Markdown
- **Audio**: Howler.js for sound management

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/hadefuwa/homeschool-hub.git
cd homeschool-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. In a separate terminal, start the Electron app:
```bash
npm run electron
```

Alternatively, you can run both simultaneously:
```bash
npm run start
```

## Building the Application

To create a production build:

```bash
# Build the web application
npm run build

# Package the Electron application
npm run package
```

The packaged application will be available in the `dist` folder.

## Development Scripts

- `npm run dev` - Start the Vite development server
- `npm run electron` - Start the Electron application
- `npm run start` - Start both Vite and Electron concurrently
- `npm run build` - Build the web application for production
- `npm run preview` - Preview the production build locally
- `npm run package` - Build and package the Electron application
- `npm run dist` - Alias for package command

## Project Structure

```
stem-hub/
├── electron/                 # Electron main process files
│   ├── main.js              # Main Electron process
│   ├── preload.js           # Preload script for security
│   └── persistence.js       # Data persistence utilities
├── public/                  # Static assets
├── src/                     # React source code
│   ├── components/          # Reusable UI components
│   ├── screens/             # Page components
│   ├── store/               # Zustand stores
│   ├── models/              # Data models
│   ├── data/                # Default data and resources
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions
│   ├── assets/              # Images and other assets
│   ├── main.jsx             # Application entry point
│   └── App.jsx              # Main application component
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies and scripts
└── README.md                # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Acknowledgments

- Built with React and Electron for cross-platform compatibility
- Uses Blockly Games for programming education
- Includes Phaser for interactive gaming experiences
- Leverages DiceBear for avatar generation
- Integrates Google TTS for accessibility features