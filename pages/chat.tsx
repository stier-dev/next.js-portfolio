"use client";

export default function Chat() {
  const callApi = async (prompt: string) => {
    const response = await fetch("/api/generate-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return data.answer;
  };

  // const answer = callApi("tell me a joke");

  // const joke = callApi("tell me a joke");
  return (
    <div>
      <h1>Chat</h1>
      {/* <button onClick={callApi();}>Like</button> */}
      <p>Question</p>
      <h2>Answer</h2>
      {/* <p> {answer}</p> */}
      {/* <p>{callApi("ho")}</p> */}
    </div>
  );
}
