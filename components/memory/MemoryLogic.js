import FlipAllCards from "@/components/memory/FlipAllCards";
import cardsArray from "@/components/memory/cardsArray";
import { useState, useEffect } from "react";
import shuffleArray from "@/components/functions/shuffleArray";
import deepCopyArray from "../functions/deepCopyArray";
// import uniqid from "uniqid";
// import cardFlipSound from "../../public/sounds/card_flip.mp3";

export default function MemoryGame() {
  // const cardsArray = [
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/1.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/2.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/3.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/4.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/5.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  //   {
  //     id: uniqid(),
  //     url: "/img/memory/6.svg",
  //     closed: true,
  //     guessed: false,
  //   },
  // ];
  // cardsArray.forEach((el) => {
  //   cardsArray.push({
  //     ...el,
  //     id: uniqid(),
  //   });
  // });

  // * card variables
  const [cards, setCards] = useState(shuffleArray(deepCopyArray(cardsArray())));
  const [openCards, setOpenCards] = useState([]);

  const [guessedCards, setGuessedCards] = useState(0);
  const [winningScreen, setWinningScreen] = useState(false);
  // * attempts
  const [attempts, setAttempts] = useState(0);
  // * counter variables
  const [timerOn, setTimerOn] = useState(false);
  const [neededTime, setNeededTime] = useState(0);

  // * <--------------------------- Reset functions  --------------------------- >

  // * creates a smooth card turn and resets variables
  const flipThenReset = (array) => {
    setOpenCards([]);
    setGuessedCards(0);
    setTimeout(() => {
      FlipAllCards(array);
      setTimeout(() => {
        setCards(array);
        setTimeout(() => {
          setCards(shuffleArray(deepCopyArray(cardsArray)));
        }, 500);
      }, 500);
    }, 1000);
  };
  // * happens if you click the: play again btn
  const playAgain = () => {
    setWinningScreen(false);
    setAttempts(0);
    setNeededTime(0);
  };
  // * winning scenario:
  useEffect(() => {
    if (guessedCards === 12) {
      setTimerOn(false);
      setWinningScreen(true);
      flipThenReset([...cards]);
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

  // * <------------------------ sound function ------------------------ >

  const playCardFlipSound = () => {
    let cardFlipSound = document.getElementById("cardFlipSound");

    cardFlipSound.volume = 0.3;
    cardFlipSound.play();
    console.log("hi");
    console.log(cardFlipSound);
  };
  // * <------------------------ selection function ------------------------ >
  const selectCard = (id) => {
    let clonedCards = [...cards];
    const cardIndex = clonedCards.findIndex((element) => element.id === id);
    //  if clicked twice || or card is already open!: return
    if (clonedCards[cardIndex].guessed || !clonedCards[cardIndex].closed) {
      return;
    }
    // playing flipping sound
    playCardFlipSound();
    setAttempts((prevState) => prevState + 1);
    if (openCards.length === 0) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);
    } else if (openCards.length === 1) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);
      // setAttempts((prevState) => prevState + 1);

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
  };
}
