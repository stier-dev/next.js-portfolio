import MemoryGame from "./MemoryLogic.js";
import SingleCard from "./SingleCard";
import styles from "@/styles/components/Memory.module.scss";

export default function MemoryHtml() {
  const { cards, selectCard, winningScreen, playAgain } = MemoryGame();
  // * makes the winning screen visible or invisible
  // const winnigClass = () => {
  //   if (winningScreen) {
  //     return styles.visibleWinningScreen;
  //   } else {
  //     return styles.invisibleWinningScreen;
  //   }
  // };
  // const winnigClassInline = () => {
  //   if (winningScreen) {
  //     return { color: "pink" };
  //   } else {
  //     return { color: "yellow" };
  //   }
  // };

  // * in case of winnig: show Winning Screen
  return (
    <>
      <div className={styles.memoryContainer}>
        <div
          className={`${
            winningScreen
              ? styles.visibleWinningScreen
              : styles.invisibleWinningScreen
          } ${styles.winningScreen}`}
        >
          <h1>You are amazing!!!</h1>
          <button onClick={playAgain}>Play again</button>
        </div>
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
    </>
  );
}
