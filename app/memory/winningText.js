export default function winningText(
  actualTime,
  actualAttempts,
  previousTime,
  previousAttempts
) {
  let message = {
    headline: "",
    subhead: "",
  };
  if (previousTime === 0 || previousAttempts === 0) {
    message.headline = "Zauberhaft";
    message.subhead =
      "Meinst du, du schaffst das noch schneller, mit weniger Versuchen?";
    return message;
  }

  if (actualTime === previousTime && actualAttempts === previousAttempts) {
    message.headline = "Stabil";
    message.subhead =
      "Du warst gleich schnell und hast genau so viele Versuche gebraucht, wie beim letzten Mal";
    return message;
  }
  if (actualTime < previousTime && actualAttempts < previousAttempts) {
    message.headline = "Gratuliere!";
    message.subhead =
      "Weiter so, du bist schneller geworden und brauchst weniger Versuche!";
    return message;
  }
  if (actualTime < previousTime && actualAttempts > previousAttempts) {
    message.headline = "Gut!";
    message.subhead =
      "Du wirst schneller... hast aber mehr Versuche gebraucht, versuchs nochmal!";
    return message;
  }
  if (actualTime > previousTime && actualAttempts < previousAttempts) {
    message.headline = "Gut!";
    message.subhead =
      "Du hast weniger Versuche gebraucht... aber dafür mehr Zeit, versuchs nochmal!";
    return message;
  }
  if (actualTime > previousTime && actualAttempts > previousAttempts) {
    message.headline = "buuh...";
    message.subhead =
      "Du hast diesmal mehr Versuche gebraucht und warst langsamer... das kannst du besser!";
    return message;
  }
  if (actualTime === previousTime && actualAttempts < previousAttempts) {
    message.headline = "Fündig";
    message.subhead =
      "Du warst genau so schnell, hast aber weniger Versuche gebraucht";
    return message;
  }
  if (actualTime === previousTime && actualAttempts > previousAttempts) {
    message.headline = "Naja...";
    message.subhead =
      "Du warst zwar genau so schnell, hast aber leider mehr Versuche gebraucht... versuchs nochmal!";
    return message;
  }
  if (actualTime < previousTime && actualAttempts === previousAttempts) {
    message.headline = "Flink";
    message.subhead =
      "Du warst schneller, aber Versuche hast du genau so viele gebraucht";
    return message;
  }
  if (actualTime > previousTime && actualAttempts === previousAttempts) {
    message.headline = "Naja...";
    message.subhead =
      "Du hast zwar genau so viele Versuche gebraucht, warst aber leider langsamer... versuchs nochmal!";
    return message;
  }
  return "something went wrong :(";
}
