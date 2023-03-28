// ? make rows line up when the mouse hovers over them

// ? make event listener disappear if of screen

import style from "@/styles/fourWins.module.scss";
import btnStyle from "@/styles/components/buttons.module.scss";
import { useState, useEffect, useRef } from "react";
import throttle from "@/functions/throttle";
import Image from "next/image";

// const [allSlots, setAllSlots] = useState([]);
export default function FourWins() {
  const [hoveredRow, setHoveredRow] = useState(1);
  const [allSlots, setAllSlots] = useState([]);
  const [currentPlayer, setActivePlayer] = useState("blau");

  const token = useRef<HTMLDivElement>(null);
  const oneField = useRef<HTMLDivElement>(null);
  const playingField = useRef<HTMLDivElement>(null);
  const numberOfRows: number = 7;
  // the first column is for the token!
  const numberOfColumns: number = 7;
  const [winningScreen, setWinningScreen] = useState(false);
  const [winner, setWinner] = useState("peter");

  interface OneFieldProps {
    key: string;
    column: number;
    row: number;
    player: string;
    occupied: boolean;
  }

  // * Set initial Slots

  function allSlotsInitial() {
    const initialSlots = [];
    for (let col = 1; col <= 7; col++) {
      for (let row = 1; row <= 7; row++) {
        initialSlots.push({
          key: row.toString() + col.toString(),
          column: col,
          row: row,
          occupied: false,
          player: "none",
        });
      }
      setAllSlots(initialSlots);
    }
  }

  //  * Make Token follow Mouse

  const onMouseMove = (e) => {
    if (playingField.current && oneField.current) {
      let offset = 100;
      let mouseX = e.clientX;
      let playingFieldX = playingField.current.getBoundingClientRect().x;
      let playingFieldWidth =
        playingField.current.getBoundingClientRect().width;
      let mouseY = e.clientY;
      let playingFieldY = playingField.current.getBoundingClientRect().y;
      let playingFieldHeight =
        playingField.current.getBoundingClientRect().height;
      // * if the mouse enters the field
      if (
        mouseX >= playingFieldX - offset &&
        mouseX <= playingFieldX + playingFieldWidth + offset &&
        mouseY >= playingFieldY &&
        mouseY <= playingFieldY + playingFieldHeight
      ) {
        if (oneField.current) {
          token.current.style.left =
            mouseX - oneField.current.clientWidth / 2 + "px";
        }
        if (mouseX <= playingFieldX + oneField.current.clientWidth / 2) {
          token.current.style.left = playingFieldX + "px";
        }
        if (
          mouseX >=
          playingFieldX + playingFieldWidth - oneField.current.clientWidth / 2
        ) {
          token.current.style.left =
            playingFieldX +
            playingFieldWidth -
            oneField.current.clientWidth +
            "px";
        }
      }
    }
  };

  // * On Mount functions: set initial Slots and add Mouse event listener
  useEffect(() => {
    allSlotsInitial();
    document.addEventListener("mousemove", throttle(onMouseMove, 100));
  }, [playingField]);

  // * Component for one field
  const OneField = ({ row, player, occupied }: OneFieldProps) => {
    return (
      <div
        onMouseEnter={() => hoverFunction(row)}
        onClick={() => {
          onClickFunction(row);
        }}
        ref={oneField}
        className={`${style.oneField} ${!occupied && style.empty} ${
          occupied && player == "blau" && style.occupiedByBlue
        }  ${occupied && player == "gelb" && style.occupiedByRed} ${
          row == hoveredRow && style.hoveredRow
        }`}
      ></div>
    );
  };

  // * Hover selected Row function

  const hoverFunction = (row: number) => {
    setHoveredRow(row);
  };

  // * is there is Space for a Token?

  function findFreeSlotIndex(row: number) {
    for (let i = allSlots.length - 1; i >= 0; i--) {
      if (allSlots[i].row === row) {
        if (!allSlots[i].occupied) {
          return i;
        }
      }
    }
  }

  function togglePlayer() {
    if (currentPlayer == "blau") {
      setActivePlayer("gelb");
    } else if (currentPlayer == "gelb") {
      setActivePlayer("blau");
    }
  }
  // * set the Token of the player to the selected row

  function insertToken(row: number) {
    let freeColumnIndex = findFreeSlotIndex(row);
    if (!freeColumnIndex) {
      return;
    }
    let newAllSlots = [...allSlots];
    newAllSlots[freeColumnIndex].occupied = true;
    newAllSlots[freeColumnIndex].player = currentPlayer;
  }

  // * winning function
  function winningFunction() {
    setWinningScreen(true);
  }
  // **** Check for a winner

  // * winner in a row

  function checkForWinnerRow(player: string) {
    let inARow = 0;
    // loop threw all rows and check for four in a row
    for (let row = 1; row <= numberOfRows; row++) {
      for (let i = 0; i < allSlots.length; i++) {
        if (allSlots[i].row === row && allSlots[i].column >= 2) {
          if (allSlots[i].player == player) {
            inARow++;
            if (inARow == 4) {
              setWinner(player);
              winningFunction();
              return;
            }
          } else {
            inARow = 0;
          }
        }
      }
    }
  }

  // * winner in a column

  function checkForWinnerColumn(player: string) {
    let inAColumn = 0;
    // loop threw all rows and check for four in a row
    for (let column = 1; column <= numberOfColumns; column++) {
      for (let i = 0; i < allSlots.length; i++) {
        if (allSlots[i].column === column) {
          if (allSlots[i].player == player) {
            inAColumn++;
            if (inAColumn == 4) {
              setWinner(player);
              winningFunction();
              return;
            }
          } else {
            inAColumn = 0;
          }
        }
      }
    }
  }
  function checkForWinnerDiagonalDown(player: string) {
    // if it is in the last row, return (except for when you check for the 4th)
    // let nextField = 8;
    let nextI = 0;
    for (let i = 7; i < 25; i++) {
      nextI = 0;
      if (allSlots[i].player == player && allSlots[nextI].row != 7) {
        nextI = i + 8;
        if (allSlots[nextI].player == player && allSlots[nextI].row != 7) {
          nextI = nextI + 8;
          if (allSlots[nextI].player == player && allSlots[nextI].row != 7) {
            nextI = nextI + 8;
            if (allSlots[nextI].player == player) {
              setWinner(player);
              winningFunction();
              return;
            }
          }
        }
      }
    }
  }

  function checkForWinnerDiagonalUp(player: string) {
    // let nextField = 8;
    let nextI = 0;
    for (let i = 10; i < 28; i++) {
      nextI = 0;
      if (allSlots[i].player == player) {
        nextI = i + 6;
        // if it is in the first row, return (except for when you check for the 4th)
        if (allSlots[nextI].player == player && allSlots[nextI].row != 1) {
          nextI = nextI + 6;
          if (allSlots[nextI].player == player && allSlots[nextI].row != 1) {
            nextI = nextI + 6;
            if (allSlots[nextI].player == player) {
              setWinner(player);
              winningFunction();
              return;
            }
          }
        }
      }
    }
  }

  function checkForWinner(player: string) {
    checkForWinnerRow(player);
    checkForWinnerColumn(player);
    checkForWinnerDiagonalUp(player);
    checkForWinnerDiagonalDown(player);
  }

  // * All Functions in one on Click function
  function onClickFunction(row: number) {
    console.log("yo");
    insertToken(row);
    checkForWinner(currentPlayer);
    togglePlayer();
  }

  // * winning screen

  function playAgain() {
    allSlotsInitial();
    setWinningScreen(false);
  }

  return (
    <div className={style.mainContainer}>
      <h1 className={style.headline}>Vier Gewinnt</h1>
      <h2 className={style.subHeadline}>Spiele gegen eine*n Freund*in</h2>
      <div
        className={`${style.winningScreen} ${
          winningScreen && style.visibleWinningScreen
        } ${!winningScreen && style.hideWinningScreen}`}
      >
        <h1 className={style.headline}>{winner} gewinnt!</h1>

        <div className={btnStyle.slideBtn} onClick={playAgain}>
          <span data-letter="R">R</span>
          <span data-letter="E">E</span>
          <span data-letter="V">V</span>
          <span data-letter="A">A</span>
          <span data-letter="N">N</span>
          <span data-letter="C">C</span>
          <span data-letter="H">H</span>
          <span data-letter="E">E</span>
        </div>
      </div>
      <div className={style.gameContainer}>
        <div className={style.background} />
        <div className={style.foreground} />
        <div ref={playingField} className={style.fieldsContainer}>
          <div
            ref={token}
            className={`${style.token} ${
              currentPlayer == "blau" && style.tokenBlue
            }  ${currentPlayer == "gelb" && style.tokenRed}`}
          >
            <div className={style.tokenImage}>
              <Image
                fill
                alt="Token Desgin"
                src={"/img/four_wins/inner_circle_transparent.svg"}
              />
            </div>
          </div>
          {allSlots.map(({ key, column, row, player, occupied }) => {
            if (column > 1) {
              return (
                <div key={key} className={style.oneFieldContainer}>
                  <div className={style.oneFieldImage}>
                    <Image
                      fill
                      alt="Token Desgin"
                      src={"/img/four_wins/outer_circle.svg"}
                      className={style.outerCircle}
                    />
                  </div>
                  <OneField
                    key={key}
                    column={column}
                    row={row}
                    player={player}
                    occupied={occupied}
                  />
                </div>
              );
            } else {
              return (
                <div
                  onMouseEnter={() => hoverFunction(row)}
                  key={key}
                  className={style.startingField}
                  onClick={() => {
                    onClickFunction(row);
                  }}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
