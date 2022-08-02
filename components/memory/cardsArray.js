// has to be installed first with: npm install uniqid
import uniqid from "uniqid";

const cardsArray = [
  {
    id: uniqid(),
    url: "/img/memory/bearDog.jpg",
    closed: true,
    guessed: false,
  },
  {
    id: uniqid(),
    url: "/img/memory/cat.jpg",
    closed: true,
    guessed: false,
  },
  {
    id: uniqid(),
    url: "/img/memory/husky.jpg",
    closed: true,
    guessed: false,
  },
  {
    id: uniqid(),
    url: "/img/memory/owel.jpg",
    closed: true,
    guessed: false,
  },
  {
    id: uniqid(),
    url: "/img/memory/unicornDog.jpg",
    closed: true,
    guessed: false,
  },
  {
    id: uniqid(),
    url: "/img/memory/headDog.jpg",
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

export default cardsArray;
