"use client";
import style from "@/styles/chat.module.scss";

// ? Create an Imput
// ? Create an Submit Btn

// ? Create Event handler that sends the question from the Input field to the API

// ? Create header, subheader, and an explanation
// ? Style and make responsive

// ? catch if server is buidy
// ? loding icon for response when it is pending

const prefix = "antworte in einem kurzen gedicht das sich reimt: ";

export default function Chat() {
  const callApi = async (input: string) => {
    let prompt = prefix + input;
    const response = await fetch("http://localhost:3000/api/generate-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return data.answer;
  };

  function submit() {
    const answer = callApi("was ist schön am leben?");
    console.log(answer);
  }

  // const joke = callApi("tell me a joke");
  return (
    <div>
      <h1>Chat</h1>
      <input type="text" className={style.inputField} />
      <button onClick={submit}>Fragen</button>
      <p>Question</p>
      <h2>Answer</h2>
      {/* <p> {answer}</p> */}
      {/* <p>{callApi("ho")}</p> */}
    </div>
  );
}
