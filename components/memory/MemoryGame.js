import SingleCard from "./SingleCard";
import cardsArray from "./cardsArray";
import { useState } from "react";
import styles from "@/styles/components/Memory.module.scss";
import shuffleArray from "@/components/functions/shuffleArray";
import deepCopyArray from "../functions/deepCopyArray";

export default function MemoryGame() {
  const [cards, setCards] = useState(shuffleArray(deepCopyArray(cardsArray)));
  const [openCards, setOpenCards] = useState([]);
  const [guessedCards, setGuessedCards] = useState(2);

  // ! 2do:
  // ? sreen to click before play: Memory spielen
  // ? winning screen! btn: nochmal spielen
  // ? stats: time and attempts
  const resetGame = () => {
    // console.log(cardsArray);
    // for (let i = 0; i <= cardsArray.length; i++) {
    //   cards[i].closed = true;
    //   cards[i].guessed = false;
    // }
    setCards(shuffleArray(deepCopyArray(cardsArray)));
    setOpenCards([]);
    setGuessedCards(2);
  };

  // ! < selection function ------------------------ >
  const selectCard = (id) => {
    console.log("original Array");
    console.log(cardsArray);
    console.log("cards State");
    console.log(cards);

    let clonedCards = [...cards];
    const cardIndex = clonedCards.findIndex((element) => element.id === id);
    if (clonedCards[cardIndex].guessed || !clonedCards[cardIndex].closed) {
      return;
    }
    // * else
    if (openCards.length === 0) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);
    } else if (openCards.length === 1) {
      clonedCards[cardIndex].closed = !cards[cardIndex].closed;
      openCards.push(cardIndex);

      // * winning scenario
      if (clonedCards[openCards[0]].url === clonedCards[openCards[1]].url) {
        clonedCards[openCards[0]].guessed = true;
        clonedCards[openCards[1]].guessed = true;
        setOpenCards([]);
        setGuessedCards(guessedCards + 2);
        // ! make a screen appear, btn: replay (resetGame())
        if (guessedCards === 4) {
          setTimeout(() => {
            alert("YOU WON!");
            resetGame();
          }, 300);
        }
        return;
      }
      // turns the cards around
      setTimeout(() => {
        clonedCards[openCards[0]].closed = true;
        clonedCards[openCards[1]].closed = true;
        setOpenCards([]);
      }, 400);
    }

    // * updates the Component
    setCards(clonedCards);
  };
  // ! </ selection function ------------------------ />

  return (
    <div className={styles.memoryContainer}>
      <div className={styles.allCards}>
        {cards.map(({ url, closed, id, guessed }) => {
          return (
            <SingleCard
              key={id}
              selectCard={selectCard}
              url={url}
              closed={closed}
              id={id}
              guessed={guessed}
            />
          );
        })}
      </div>
    </div>
  );
}
