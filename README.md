# Sudoku Solver

A small web app for solving sudoku puzzles.


## Getting Started

```bash
# Clone the repo 
npm install 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Make sure that the port 3000 is available or the app will use another port.


# Features
# Import puzzles:
You can import a puzzle as text (makes sure the text is formatted as 1,2,3,2,0,3,1,4,6,2,.........  and has 81 elements seperated by 80 commas.
You can replace zeros with empty space

## Random Puzzles:
This feature is for testing. It can produce valid, unvalid, solveable and insolvable puzzles.

## Solve using Brute Force
Loop through all possibilities and find a solution

## Solve using a greedy search
Find the best cells with the least possible moves and start with them.


The solving methodolgy is based on: 
https://lisperator.net/blog/javascript-sudoku-solver/



