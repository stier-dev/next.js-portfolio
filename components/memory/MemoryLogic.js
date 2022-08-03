// ! 2do:
// ? sreen to click before play: Memory spielen
// ? winning screen! btn: nochmal spielen
// ? stats: time and attempts

import FlipAllCards from "./FlipAllCards";
import cardsArray from "./CardsArray";
import { useState } from "react";
import shuffleArray from "@/components/functions/shuffleArray";
import deepCopyArray from "../functions/deepCopyArray";

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffleArray(deepCopyArray(cardsArray)));
  const [openCards, setOpenCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState(2);
  const [winningScreen, setWinningScreen] = useState(true);

  // * <--------------------------- Reset functions  --------------------------- >
  const resetGame = () => {
    setCards(shuffleArray(deepCopyArray(cardsArray)));
    setOpenCards([]);
    setGuessedCards(2);
  };

  const flipThenReset = (array) => {
    console.log("flippin");

    setTimeout(() => {
      FlipAllCards(array);
      setTimeout(() => {
        setCards(array);
        setTimeout(() => {
          resetGame();
        }, 500);
      }, 500);
    }, 1000);
  };

  const playAgain = () => {
    setWinningScreen(false);
    console.log("play again :)");
  };

  // * <------------------------ selection function ------------------------ >
  const selectCard = (id) => {
    let clonedCards = [...cards];
    const cardIndex = clonedCards.findIndex((element) => element.id === id);
    //  * if clicked twice: return
    if (clonedCards[cardIndex].guessed || !clonedCards[cardIndex].closed) {
      return;
    }
    // * if different card: flip Card
    if (openCards.length === 0) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);
    } else if (openCards.length === 1) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);

      // * 2 cards match:
      if (clonedCards[openCards[0]].url === clonedCards[openCards[1]].url) {
        clonedCards[openCards[0]].guessed = true;
        clonedCards[openCards[1]].guessed = true;
        setOpenCards([]);
        setGuessedCards(guessedCards + 2);
        // * if all cards are open:
        // ! make a screen appear, btn: replay (resetGame())
        if (guessedCards === 4) {
          // makes the winning Screen appear
          setWinningScreen(true);
          // turns cards around smoothly
          flipThenReset(clonedCards);
        }
        return;
      }
      // * turns the cards around to the backside
      setTimeout(() => {
        clonedCards[openCards[0]].closed = true;
        clonedCards[openCards[1]].closed = true;
        setOpenCards([]);
      }, 400);
    }
    setCards(clonedCards);
  };
  return { cards, resetGame, selectCard, winningScreen, playAgain };
}
