# Tic-Tac-Toe

A classic Tic-Tac-Toe game built with React. Two players can take turns, edit their names, and view a move log. The app tracks moves, checks for a winner or draw, and allows restarting the game.

## About this project

I built this app while learning React through the Udemy course:  
**"Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!"**  
by *Maximilian Schwarzmüller*.

## Features

- Play Tic-Tac-Toe with two players
- Edit player names
- See move history in a log
- Detects winner or draw automatically
- Restart the game at any time
- Responsive and simple UI

## Project Structure
```
.
├── index.html
├── package.json
└── src
    ├── App.jsx
    ├── main.jsx
    ├── components
    │   ├── Gameboard.jsx
    │   ├── GameOver.jsx
    │   ├── Log.jsx
    │   ├── Player.jsx
    │   └── winning-combinations.js
    └── assets
```

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```