// has to be installed first with: npm install uniqid
import uniqid from "uniqid";
export default function () {
  const cardsArray = [
    {
      id: uniqid(),
      url: "/img/memory/1.svg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/2.svg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/3.svg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/4.svg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/5.svg",
      closed: true,
      guessed: false,
    },
    {
      id: uniqid(),
      url: "/img/memory/6.svg",
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
