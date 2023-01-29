import MemoryGame from "@/components/memory/MemoryLogic.js";
import SingleCard from "@/components/memory/SingleCard";
import style from "@/styles/components/Memory.module.scss";
import btnStyle from "@/styles/components/buttons.module.scss";
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
      return style.visibleWinningScreen;
    } else {
      return style.invisibleWinningScreen;
    }
  };
  // * makes the memoryboard transarent
  // to avoid the Safari Bug where the rotation is visible
  const transparentClass = () => {
    if (winningScreen) {
      return style.transparent;
    } else {
      return style.visible;
    }
  };
  // * in case of winnig: show Winning Screen
  return (
    <div id="memory" className={style.mainContainer}>
      <div className={`${winningClass()} ${style.winningScreen}`}>
        <div className={style.winningContent}>
          <h1 className={style.winningHeadline}>
            {
              winningText(neededTime, attempts, previousTime, previousAttempts)
                .headline
            }
          </h1>
          <div className={style.winningSubContainer}>
            <h1 className={style.winningSub}>
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
            className={`${btnStyle.transparentBtn} ${style.gleichNochmalBtn}`}
          >
            Gleich Nochmal
          </button>
        </div>
      </div>
      <div className={`${style.textAndGameContainer} ${transparentClass()}`}>
        <div className={style.textContainer}>
          <div className={style.headlineContainer}>
            <h1 className={style.memoryHeadline}>Magic Memory</h1>
          </div>
          <div className={style.statsContainer}>
            <h3 className={`${style.stats} ${style.statsFont}`}>
              Zeit: {neededTime}
            </h3>
            <button
              onClick={resetBtn}
              className={`${style.resetBtn}  ${style.statsFont}  ${btnStyle.transparentBtn}`}
            >
              Neustart
            </button>
            <h3 className={`${style.stats} ${style.statsFont}`}>
              Versuche: {attempts}
            </h3>
          </div>
          <div className={style.statsContainer}>
            <h3
              className={`${style.stats}  ${style.statsFont}  ${style.prevStats}`}
            >
              Zeit: {previousTime}
            </h3>
            <h3
              className={`${style.stats}  ${style.statsFont}  ${style.prevHeadline}`}
            >
              Letzter Versuch
            </h3>
            <h3
              className={`${style.stats}  ${style.statsFont}  ${style.prevStats}`}
            >
              Versuche: {previousAttempts}
            </h3>
          </div>
        </div>
        <div className={style.memoryContainer}>
          <div className={style.allCards}>
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
