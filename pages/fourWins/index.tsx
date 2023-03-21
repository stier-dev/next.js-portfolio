// ? make rows line up when the mouse hovers over them
// ? create a section where the next token follows your mouse
// ? create Tokens
// ? make Tokens slide into the slots
// ? make the Tokens occupie slots
// ? make the Tokens change color/ player each turn
// ? make a function that searches for 4 in a row
// ? make a winning screen

import style from "@/styles/fourWins.module.scss";
import { useState, useEffect } from "react";

// const [allSlots, setAllSlots] = useState([]);
export default function FourWins() {
  const [hoveredRow, setHoveredRow] = useState(1);
  const [allSlots, setAllSlots] = useState([]);
  // useEffect(() => {
  //   // const firstRow = document.querySelector("oneField");
  //   // console.log(firstRow);
  //   console.log(firstRow.current);
  // }, []);
  // ! event listener for marking the selected rows
  // addEventListener("mouseover", (event) => {
  //   console.log(event);
  // });
  // onmouseover = (event) => {};

  interface OneFieldProps {
    column: number;
    row: number;
    player: string;
    occupied: boolean;
  }

  function allSlotsInitial() {
    const allInitialSlots = [];
    for (let col = 1; col <= 7; col++) {
      for (let row = 1; row <= 7; row++) {
        allInitialSlots.push({
          column: col,
          row: row,
          occupied: false,
          player: "none",
        });
      }
      setAllSlots(allInitialSlots);
    }
  }

  useEffect(() => {
    allSlotsInitial();
  }, []);

  const hoverFunction = (row) => {
    setHoveredRow(row);
  };

  const OneField = ({ column, row, player, occupied }: OneFieldProps) => {
    return (
      <div
        onMouseEnter={() => hoverFunction(row)}
        className={`${style.oneField} ${
          occupied && player == "one" && style.occupiedByOne
        }  ${occupied && player == "two" && style.occupiedByTwo} ${
          row == hoveredRow && style.hoveredRow
        }`}
      >
        <p className={style.placeText}>
          {column}
          {row}
        </p>{" "}
      </div>
    );
  };

  return (
    <div>
      <h1 className={style.headline}>Vier Gewinnt</h1>
      <h2 className={style.subHeadline}>Spiele gegen eine*n Freund*in</h2>
      <div className={style.gameContainer}>
        <div className={style.background} />
        <div className={style.foreground} />
        <div className={style.fieldsContainer}>
          {allSlots.map(({ key, column, row, player, occupied }) => {
            return (
              <OneField
                key={key}
                column={column}
                row={row}
                player={player}
                occupied={occupied}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
