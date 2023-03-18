"use client";

export default function Chat() {
  // const prompt = "how high is method man?";

  const callApi = async (prompt: string) => {
    const response = await fetch("/api/generate-answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    console.log("api call with data.text: ", data.text);
    return data.text;
  };

  const joke = callApi("tell me a joke");
  console.log("joke: ", joke);
  return (
    <div>
      <h1>Chat</h1>
      {/* <button onClick={callApi();}>Like</button> */}
      <p>Question</p>
      <h2>Answer</h2>
      {/* <p> {joke}</p> */}
      {/* <p>{callApi("ho")}</p> */}
    </div>
  );
}
