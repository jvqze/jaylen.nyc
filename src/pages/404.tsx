import { useState } from "react";
import Head from "next/head";

const HUMAN = "O";
const AI = "X";

const checkWinner = (board: string[]) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.includes("") ? null : "draw";
};

const minimax = (board: string[], depth: number, isMaximizing: boolean) => {
  const winner = checkWinner(board);
  if (winner === AI) return 10 - depth;
  if (winner === HUMAN) return depth - 10;
  if (winner === "draw") return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = AI;
        const score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = HUMAN;
        const score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
};

const bestMove = (board: string[]) => {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = AI;
      const score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
};

export default function Home(): JSX.Element {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (board[index] === "" && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = HUMAN;
      setBoard(newBoard);

      const humanWinner = checkWinner(newBoard);
      if (humanWinner) {
        setWinner(humanWinner);
        setGameOver(true);
        return;
      }

      const aiMove = bestMove(newBoard);
      newBoard[aiMove] = AI;
      setBoard(newBoard);

      const aiWinner = checkWinner(newBoard);
      if (aiWinner) {
        setWinner(aiWinner);
        setGameOver(true);
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div>
      <Head>
        <title>404 | jaylen.nyc</title>
      </Head>

      <main>
        <div className="mx-auto max-w-3xl space-y-4 md:py-24">
          <div className="space-y-4 text-center">
            <span className="text-3xl font-extrabold sm:text-4xl md:text-6xl">404</span>
            <p className="opacity-90">This page does not exist... but how about a game of Tic-Tac-Toe?</p>
          </div>

          <div className="mt-8 text-center">
            <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
              {board.map((value, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`flex items-center justify-center w-24 h-24 text-4xl font-bold bg-gray-200 cursor-pointer ${
                    value === HUMAN ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {value}
                </div>
              ))}
            </div>

            {gameOver && (
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  {winner === "draw" ? "It's a draw!" : `Winner: ${winner}`}
                </p>
                <button
                  onClick={resetGame}
                  className="mt-4 bg-gray-900 text-white px-4 py-2 rounded"
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
