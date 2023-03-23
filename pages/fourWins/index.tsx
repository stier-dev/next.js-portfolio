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

// const [allSlots, setAllSlots] = useState([]);
export default function FourWins() {
  const [hoveredRow, setHoveredRow] = useState(1);
  const [allSlots, setAllSlots] = useState([]);
  const [activePlayer, setActivePlayer] = useState("blue");
  const token = useRef<HTMLDivElement>(null);
  const oneField = useRef<HTMLDivElement>(null);
  const playingField = useRef<HTMLDivElement>(null);
  const numberOfRows: number = 7;
  const numberOfColumns: number = 6;

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
      >
        <p className={style.placeText}>
          {column}
          {row}
        </p>
      </div>
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

  // * set the Token of the player to the selected row

  function insertToken(row: number) {
    let freeColumnIndex = isThereSpaceForAToken(row);
    if (!freeColumnIndex) {
      console.log("no space");
      return;
    }
    // * change the array to
    // * occupie the empty slot with the token of the player
    // * change the player

    let newAllSlots = [...allSlots];
    newAllSlots[freeColumnIndex].occupied = true;
    newAllSlots[freeColumnIndex].player = activePlayer;
    if (activePlayer == "blue") {
      setActivePlayer("red");
    } else if (activePlayer == "red") {
      setActivePlayer("blue");
    }
    console.log(newAllSlots);
  }

  // * Check for a winner

  function checkForWinner() {
    // loop threw all rows and check for four in a row
    for (let i = 0; i < allSlots.length; i++) {
      console.log("hi");
    }
  }

  // * All Functions in one on Click function
  function onClickFunction(row: number) {
    insertToken(row);
    checkForWinner();
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
          />
          {allSlots.map(({ key, column, row, player, occupied }) => {
            if (column > 1) {
              return (
                <OneField
                  key={key}
                  column={column}
                  row={row}
                  player={player}
                  occupied={occupied}
                />
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
