import { useState, useEffect, useRef } from "react";

// ! useRef is independent from the render cycle! (it exists between renders)
// * useRef will not cause your component to update when it gets changed!!!
// this way infinate loops and performance leaks will be prevented
export default function UseRef() {
  const [name, setName] = useState("");

  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // * useRef to focus an Element
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }
  // * catch previous values
  // this will work because useRef runs between the renders
  const prevName = useRef();
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  console.log(prevName);

  return (
    <div>
      <h1>UseRef</h1>
      <input
        ref={inputRef}
        placeholder="type name here"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <h3>
        my name is {name} and it used to be {prevName.current}
      </h3>
      <button onClick={focus}>FOCUS</button>
      <p>I rendered {renderCount.current} times</p>
    </div>
  );
}
