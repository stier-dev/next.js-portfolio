import FlipAllCards from "@/components/memory/FlipAllCards";
import cardsArray from "@/components/memory/cardsArray";
import { useState, useEffect } from "react";
import shuffleArray from "@/components/functions/shuffleArray";
import deepCopyArray from "../functions/deepCopyArray";

export default function MemoryGame() {
  // * card variables
  const [cards, setCards] = useState(shuffleArray(deepCopyArray(cardsArray())));
  const [openCards, setOpenCards] = useState([]);

  const [canPlay, setCanPlay] = useState(true);

  const [guessedCards, setGuessedCards] = useState(0);
  const [winningScreen, setWinningScreen] = useState(false);
  // * attempts
  const [attempts, setAttempts] = useState(0);
  // * counter variables
  const [timerOn, setTimerOn] = useState(false);
  const [neededTime, setNeededTime] = useState(0);
  // * previous Values
  const [previousTime, setPreviousTime] = useState(0);
  const [previousAttempts, setPreviousAttempts] = useState(0);

  // * <--------------------------- Reset functions  --------------------------- >

  // * creates a smooth card turn and resets variables
  const flipThenReset = (array, delay) => {
    setOpenCards([]);
    setGuessedCards(0);
    setTimeout(() => {
      FlipAllCards(array);
      setTimeout(() => {
        setCards(array);
        setTimeout(() => {
          setCards(shuffleArray(deepCopyArray(cardsArray())));
        }, delay);
      }, delay);
    }, delay * 2);
  };
  // * happens if you click the: play again btn
  const playAgain = () => {
    flipThenReset([...cards], 100);
    setWinningScreen(false);
    setCanPlay(false);
    setTimeout(() => {
      setPreviousTime(neededTime);
      setPreviousAttempts(attempts);
      setAttempts(0);
      setNeededTime(0);
      setCanPlay(true);
    }, 500);
  };

  const resetBtn = () => {
    setAttempts(0);
    setNeededTime(0);
    setTimerOn(false);
    flipThenReset([...cards], 0);
  };
  // * winning scenario:
  useEffect(() => {
    if (guessedCards === 12) {
      // ! just for test purpose!
      setTimerOn(false);
      setWinningScreen(true);
      // flipThenReset([...cards], 500);
    }
  }, [guessedCards]);

  // * starts to count the Attempts
  useEffect(() => {
    if (attempts === 1) {
      setTimerOn(true);
    }
  }, [attempts]);

  // * <------------------------ counter ------------------------ >
  useEffect(() => {
    // the interval variable has to be declared outside the if to work!!!

    let interval = undefined;
    if (timerOn) {
      interval = setInterval(() => {
        setNeededTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  // * <------------------------ selection function ------------------------ >
  const selectCard = (id) => {
    if (!canPlay) return;
    let clonedCards = [...cards];
    const cardIndex = clonedCards.findIndex((element) => element.id === id);
    //  if clicked twice || or card is already open!: return
    if (clonedCards[cardIndex].guessed || !clonedCards[cardIndex].closed) {
      return;
    }
    setAttempts((prevState) => prevState + 1);
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
        setGuessedCards((prevState) => prevState + 2);
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
  return {
    cards,
    selectCard,
    winningScreen,
    playAgain,
    attempts,
    neededTime,
    resetBtn,
    previousTime,
    previousAttempts,
  };
}
