// ? make rows line up when the mouse hovers over them
// ? create a section where the next token follows your mouse
// ? create Tokens
// ? make Tokens slide into the slots
// ? make the Tokens occupie slots
// ? make the Tokens change color/ player each turn
// ? make a function that searches for 4 in a row
// ? make a winning screen
// ? make event listener disappear if of screen

import style from "@/styles/fourWins.module.scss";
import { useState, useEffect, useRef } from "react";
import throttle from "@/functions/throttle";
import Image from "next/image";

// const [allSlots, setAllSlots] = useState([]);
export default function FourWins() {
  const [hoveredRow, setHoveredRow] = useState(1);
  const [allSlots, setAllSlots] = useState([]);
  const [activePlayer, setActivePlayer] = useState("blue");
  // const [winner, setWinner] = useState("notYet");
  const token = useRef<HTMLDivElement>(null);
  const oneField = useRef<HTMLDivElement>(null);
  const playingField = useRef<HTMLDivElement>(null);
  const numberOfRows: number = 7;
  // the first column is for the token!
  const numberOfColumns: number = 7;

  interface OneFieldProps {
    key: string;
    column: number;
    row: number;
    player: string;
    occupied: boolean;
  }

  // * Set initial Slots

  function allSlotsInitial() {
    const allInitialSlots = [];
    for (let col = 1; col <= 7; col++) {
      for (let row = 1; row <= 7; row++) {
        allInitialSlots.push({
          key: row.toString() + col.toString(),
          column: col,
          row: row,
          occupied: false,
          player: "none",
        });
      }
      setAllSlots(allInitialSlots);
    }
  }

  //  * Make Token follow Mouse

  const onMouseMove = (e) => {
    let offset = 100;
    let mouseX = e.clientX;
    let playingFieldX = playingField.current.getBoundingClientRect().x;
    let playingFieldWidth = playingField.current.getBoundingClientRect().width;
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
      token.current.style.left =
        mouseX - oneField.current.clientWidth / 2 + "px";

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
  };

  // * On Mount functions: set initial Slots and add Mouse event listener
  useEffect(() => {
    allSlotsInitial();
    document.addEventListener("mousemove", throttle(onMouseMove, 100));
  }, []);

  // * Component for one field
  const OneField = ({ column, row, player, occupied }: OneFieldProps) => {
    return (
      <div
        onMouseEnter={() => hoverFunction(row)}
        onClick={() => {
          onClickFunction(row);
        }}
        ref={oneField}
        className={`${style.oneField} ${!occupied && style.empty} ${
          occupied && player == "blue" && style.occupiedByBlue
        }  ${occupied && player == "red" && style.occupiedByRed} ${
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

  function isThereSpaceForAToken(row) {
    for (let i = allSlots.length - 1; i >= 0; i--) {
      if (allSlots[i].row === row) {
        if (!allSlots[i].occupied) {
          return i;
        }
      }
    }
  }

  function togglePlayer() {
    if (activePlayer == "blue") {
      setActivePlayer("red");
    } else if (activePlayer == "red") {
      setActivePlayer("blue");
    }
  }
  // * set the Token of the player to the selected row

  function insertToken(row: number) {
    let freeColumnIndex = isThereSpaceForAToken(row);
    if (!freeColumnIndex) {
      return;
    }
    let newAllSlots = [...allSlots];
    newAllSlots[freeColumnIndex].occupied = true;
    newAllSlots[freeColumnIndex].player = activePlayer;
    togglePlayer();
  }

  // * winning function
  function winningFunction(player) {
    alert(`we have a winnter! ${player}`);
    allSlotsInitial();
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
              winningFunction(player);
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
              winningFunction(player);
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
              winningFunction(player);
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
              winningFunction(player);
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
    insertToken(row);
    checkForWinner(activePlayer);
  }

  return (
    <div className={style.mainContainer}>
      <h1 className={style.headline}>Vier Gewinnt</h1>
      <h2 className={style.subHeadline}>Spiele gegen eine*n Freund*in</h2>
      <div className={style.gameContainer}>
        <div className={style.background} />
        <div className={style.foreground} />
        <div ref={playingField} className={style.fieldsContainer}>
          <div
            ref={token}
            className={`${style.token} ${
              activePlayer == "blue" && style.tokenBlue
            }  ${activePlayer == "red" && style.tokenRed}`}
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
