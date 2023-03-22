// ? make rows line up when the mouse hovers over them
// ? create a section where the next token follows your mouse
// ? create Tokens
// ? make Tokens slide into the slots
// ? make the Tokens occupie slots
// ? make the Tokens change color/ player each turn
// ? make a function that searches for 4 in a row
// ? make a winning screen

import style from "@/styles/fourWins.module.scss";
import { useState, useEffect, useRef } from "react";
import throttle from "@/functions/throttle";

// const [allSlots, setAllSlots] = useState([]);
export default function FourWins() {
  const [hoveredRow, setHoveredRow] = useState(1);
  const [allSlots, setAllSlots] = useState([]);
  const token = useRef<HTMLDivElement>(null);
  const oneField = useRef<HTMLDivElement>(null);
  const playingField = useRef<HTMLDivElement>(null);

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
    // console.log(token.current.getBoundingClientRect());
    // console.log(e);
    // console.log(playingField.current.getBoundingClientRect());

    let mouseX = e.clientX;
    let playingFieldX = playingField.current.getBoundingClientRect().x;
    let playingFieldWidth = playingField.current.getBoundingClientRect().width;
    let mouseY = e.clientY;
    let playingFieldY = playingField.current.getBoundingClientRect().y;
    let playingFieldHeight =
      playingField.current.getBoundingClientRect().height;
    // * if the mouse enters the field
    if (
      mouseX >= playingFieldX &&
      mouseX <= playingFieldX + playingFieldWidth &&
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

      console.log("the mouse has entered");
    }
  };

  // console.log(token.current);
  //   circle.style.left = e.pageX + 'px';

  useEffect(() => {
    allSlotsInitial();
    document.addEventListener("mousemove", throttle(onMouseMove, 100));
  }, []);

  // * Hover selected Row function

  const hoverFunction = (row: number) => {
    setHoveredRow(row);
    // console.log(row);
  };

  // * Component for one field

  const OneField = ({ column, row, player, occupied }: OneFieldProps) => {
    return (
      <div
        onMouseEnter={() => hoverFunction(row)}
        onClick={() => {
          onClickFunction(row);
        }}
        ref={oneField}
        className={`${style.oneField} ${
          occupied && player == "one" && style.occupiedByOne
        }  ${occupied && player == "two" && style.occupiedByTwo} ${
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

  // * On Click functions
  function onClickFunction(row: number) {
    console.log(row);
  }

  return (
    <div className={style.mainContainer}>
      <h1 className={style.headline}>Vier Gewinnt</h1>
      <h2 className={style.subHeadline}>Spiele gegen eine*n Freund*in</h2>
      <div className={style.gameContainer}>
        <div className={style.background} />
        <div className={style.foreground} />
        <div ref={playingField} className={style.fieldsContainer}>
          <div ref={token} className={style.token} />
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
