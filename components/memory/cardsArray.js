// has to be installed first with: npm install uniqid
import uniqid from "uniqid";
export default function cardsArray() {
  const cardsArray = [
    {
      id: uniqid(),
      url: "/img/memory/1.jpg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/2.jpg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/3.jpg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/4.jpg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/5.jpg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/6.jpg",
      closed: true,
      guessed: false,
    },
  ];
  // creates a clone for each Card with a unique ID
  cardsArray.forEach((el) => {
    cardsArray.push({
      ...el,
      id: uniqid(),
    });
  });

  return cardsArray;
}
