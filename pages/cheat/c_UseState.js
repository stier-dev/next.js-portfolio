import { useState } from "react";

// ! Dont use Objects
// * Dont use Objects

export default function UseState() {
  //! complex calculatioms have to be wrapped in a function (performance!)
  // so that they dont run every time the component will be rerendered (on each button click!)
  const [count, setCount] = useState(() => {
    return 4; // insert complex calculation
  });
  const [color, setColor] = useState(() => {
    return "orange"; // insert complex calculation
  });

  // ! to update "count"-> use an Argument like: "prevCount" istead of "count" directy !
  // because "count" will only be updated once per render!
  // so that the following code would not work with "count"!
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  // !!! _____WRONG WAY______________________  !!!
  // !!! DONT use objects! for multiple hooks! !!!
  // * Dont use Objects! for multiple hooks!
  //  Use seperate hooks!!! its unnecessary complicated and bug affine!
  const [state, setState] = useState({ countTwo: 30, theme: "orange" });
  const countTwo = state.countTwo;
  const theme = state.theme;

  function decrementCountTwo() {
    setState((prevState) => {
      // * destructure the ...Object (automaticly passed threw as argument)
      // otherwise all unlisted values will be overwritten / deleated :(
      return { ...prevState, countTwo: prevState.countTwo - 1 };
    });
  }

  function incrementCountTwo() {
    setState((prevState) => {
      return { ...prevState, countTwo: prevState.countTwo + 1 };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
      <h1>counterTwo</h1>
      <button onClick={decrementCountTwo}>-</button>
      <span> count2 = {countTwo} </span>
      <button onClick={incrementCountTwo}>+</button>
      <p> color: {color} </p>
      <p> theme: {theme} </p>
    </div>
  );
}
