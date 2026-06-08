import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: "Say hello",
    });

    return Response.json({
      success: true,
      result: response.output_text,
    });
  } catch (error: any) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
