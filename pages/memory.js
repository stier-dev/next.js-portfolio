import MemoryGame from "@/components/memory/MemoryLogic.js";
import SingleCard from "@/components/memory/SingleCard";
import styles from "@/styles/components/Memory.module.scss";
import btnStyles from "@/styles/components/buttons.module.scss";
import winningText from "@/components/memory/winningText";

export default function MemoryHtml() {
  const {
    cards,
    selectCard,
    winningScreen,
    playAgain,
    attempts,
    neededTime,
    resetBtn,
    previousTime,
    previousAttempts,
    // ! a function that calculates how fast and how many attempts
  } = MemoryGame();

  // * makes the winning screen visible or invisible
  const winningClass = () => {
    if (winningScreen) {
      return styles.visibleWinningScreen;
    } else {
      return styles.invisibleWinningScreen;
    }
  };
  // * makes the memoryboard transarent
  // to avoid the Safari Bug where the rotation is visible
  const transparentClass = () => {
    if (winningScreen) {
      return styles.transparent;
    } else {
      return styles.visible;
    }
  };
  // * in case of winnig: show Winning Screen
  return (
    <div id="memory" className={styles.mainContainer}>
      <div className={`${winningClass()} ${styles.winningScreen}`}>
        <div className={styles.winningContent}>
          <h1 className={styles.winningHeadline}>
            {
              winningText(neededTime, attempts, previousTime, previousAttempts)
                .headline
            }
          </h1>
          <div className={styles.winningSubContainer}>
            <h1 className={styles.winningSub}>
              {
                winningText(
                  neededTime,
                  attempts,
                  previousTime,
                  previousAttempts
                ).subhead
              }
            </h1>
          </div>

          <button
            onClick={playAgain}
            className={`${btnStyles.transparentBtn} ${styles.gleichNochmalBtn}`}
          >
            Gleich Nochmal
          </button>
        </div>
      </div>
      <div className={`${styles.textAndGameContainer} ${transparentClass()}`}>
        <audio id="cardFlipSound" src="/sounds/card_flip.mp3"></audio>
        <audio id="cardFlipSound2" src="/sounds/card_flip.mp3"></audio>
        <div className={styles.textContainer}>
          <div className={styles.headlineContainer}>
            <h1 className={styles.memoryHeadline}>Magic Memory</h1>
          </div>
          <div className={styles.statsContainer}>
            <h3 className={styles.stats}>Zeit: {neededTime}</h3>
            <button
              onClick={resetBtn}
              className={`${styles.resetBtn} ${btnStyles.transparentBtn}`}
            >
              Neustart
            </button>
            <h3 className={styles.stats}>Versuche: {attempts}</h3>
          </div>
          <div className={styles.statsContainer}>
            <h3 className={`${styles.stats} ${styles.prevStats}`}>
              Zeit: {previousTime}
            </h3>
            <h3 className={`${styles.stats} ${styles.prevHeadline}`}>
              Letzter Versuch
            </h3>
            <h3 className={`${styles.stats} ${styles.prevStats}`}>
              Versuche: {previousAttempts}
            </h3>
          </div>
        </div>
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
      </div>
    </div>
  );
}
