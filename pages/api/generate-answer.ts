import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

type ResponseData = {
  answer: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const prompt = req.body.prompt;

  // ? console log to find errors
  console.log("--------- start api debugging -----------");
  console.log("req.body", req.body);
  console.log("--------- end api debugging -----------");

  if (!prompt || prompt === "") {
    return new Response("Please send your Prompt", { status: 400 });
  }

  const aiResult = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}}`,
    temperature: 0.9, // makes it take higher risks
    max_tokens: 500, // max number of tokens (1000 Tokens = 0.0002 €)
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  const response =
    aiResult.data.choices[0].text?.trim() ||
    "ups, irgendwas ist schief gelaufen";
  res.status(200).json({ answer: response });
  // const response
}
