import { useEffect, useState } from "react";

import roundsData from "../assets/MexicoCity/data.json";
import { image1, image2 } from "../assets/MexicoCity/images/round1";
import { image3, image4 } from "../assets/MexicoCity/images/round2";
import { image5, image6 } from "../assets/MexicoCity/images/round3";
import { image7, image8 } from "../assets/MexicoCity/images/round4";
import { image9, image10 } from "../assets/MexicoCity/images/round5";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

import "../index.css";
import Popup from "./Popup";

const Game: React.FC = () => {
  // State variables for game logic
  const [currentRound, setCurrentRound] = useState(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [_guess, setGuess] = useState(""); // State for controlled input
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Pre-load images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  });

  const answer = "Mexico City"; // Correct answer for this game.
  const maxGuesses = 3;

  // Mapping rounds data to include image references TODO: Should be replaced when database has been added.
  const rounds = roundsData.map((round) => ({
    ...round,
    images: round.images.map((image) => {
      const match = image.match(/\d+/);
      if (match) {
        const imageIndex = parseInt(match[0]) - 1;
        return images[imageIndex] || null;
      }
      return null;
    }),
  }));

  // Function to handle user's guess
  const handleGuess = (guess: string) => {
    const isCorrect = guess.toLowerCase() === answer.toLowerCase();
    setGuesses([...guesses, guess]);
    setIsCorrectGuess(isCorrect);
    setShowPopup(true);
    if (isCorrect && guesses.length <= maxGuesses) {
      const score = (5 - currentRound) * (3 - guesses.length);
      setScore(score); // Update score based on number of guesses TODO: Update to match Mange's formula
    }
    setGuess(""); // Clear the input after handling the guess
  };

  // Function to handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
    if (isCorrectGuess) {
      setShowSummary(true); // Show summary if the guess was correct
    } else if (guesses.length > maxGuesses) {
      setShowSummary(true); // Also show summary and end game if too many guesses have been made
    } else {
      setCurrentRound(currentRound + 1); // Move to the next round if the guess was incorrect
    }
  };

  return (
    <div className="p-4">
      {showPopup && (
        <Popup
          message={
            isCorrectGuess
              ? "Correct! You've guessed the right answer. "
              : "Incorrect, Better luck in the next round."
          }
          onClose={handleClosePopup}
        />
      )}
      {showSummary ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Game Summary</h1>
          <p className="text-lg">Your final score is: {score}</p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Round {currentRound + 1}</h1>
          {currentRound < rounds.length ? (
            <>
              <p className="mb-4">{rounds[currentRound].clue}</p>
              <div className="image-container mb-4">
                {rounds[currentRound].images.map(
                  (image, index) =>
                    image && (
                      <img
                        key={index}
                        src={image}
                        alt={`Clue ${index + 1}`}
                        className="w-full mb-2"
                      />
                    )
                )}
              </div>
              <input
                type="text"
                placeholder="Enter your guess"
                className="border p-2 mb-4 w-full text-black"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGuess(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </>
          ) : (
            <p className="text-lg">
              Congratulations! You've completed the game.
            </p>
          )}
          <p className="text-lg">Score: {score}</p>
        </>
      )}
    </div>
  );
};
export default Game;
