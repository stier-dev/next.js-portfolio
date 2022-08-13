import MemoryGame from "@/components/memory/MemoryLogic.js";
import SingleCard from "@/components/memory/SingleCard";
import styles from "@/styles/components/Memory.module.scss";

export default function MemoryHtml() {
  const { cards, selectCard, winningScreen, playAgain, attempts, neededTime } =
    MemoryGame();

  // * makes the winning screen visible or invisible
  const winningClass = () => {
    if (winningScreen) {
      return styles.visibleWinningScreen;
    } else {
      return styles.invisibleWinningScreen;
    }
  };
  // * in case of winnig: show Winning Screen
  return (
    <div id="memory" className={styles.memoryMainContainer}>
      <audio id="cardFlipSound" src="/sounds/card_flip.mp3"></audio>
      <div className={styles.textContainer}>
        <h1>Memory</h1>
        <div>
          <h3>Zeit: {neededTime}</h3> <h3>Versuche: {attempts}</h3>
        </div>
      </div>
      <div className={styles.memoryContainer}>
        <div className={`${winningClass()} ${styles.winningScreen}`}>
          <h1>Gut Gemacht!</h1>
          <button onClick={playAgain}>Gleich Nochmal</button>
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
    </div>
  );
}
