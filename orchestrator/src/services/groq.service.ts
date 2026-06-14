import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const askGroq = async (
  prompt: string
): Promise<string> => {

  try {

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

    return (
      completion.choices[0]
        ?.message?.content || ""
    );

  } catch (error) {

    console.error(
      "Groq Error:",
      error
    );

    return "AI service unavailable.";
  }
};