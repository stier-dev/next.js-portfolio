import { useState, useEffect } from "react";

// ! UseEffect listens to changes of [variables]
//  or to only mount by first render with an empty array at the end of useEffect({...},[]);

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // * [array]: listens to changes of variables stored in the [array]
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  // ----------- calculating window Width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // * an ampty array [] makes the useEffect only run on the first render after mounting the component!
  // thats why the event listener is only added once after mounting the component
  // ! return: happens first in the function | and last when the component is unmounted!!!
  // return: is used to clean up before it runs and when it gets unmounted!
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1> window width:{windowWidth}</h1>

      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        Comments
      </button>
      <h2>{resourceType}</h2>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
