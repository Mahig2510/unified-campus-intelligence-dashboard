import {
  askGroq,
} from "./groq.service";

export const getIntent =
  async (
    query: string
  ): Promise<string> => {

    const response =
      await askGroq(`
Classify this query into exactly one of:

library
events
cafeteria
academics

Query:
${query}

Return only the intent.
`);

    return response
      .trim()
      .toLowerCase();
  };

export const getTool =
  async (
    query: string
  ): Promise<string> => {

    const response =
      await askGroq(`
Available tools:

getBooks
getEvents
getMenu
getResources

Query:
${query}

Return only the tool name.
`);

    return response.trim();
  };

export const getTools =
  async (
    query: string
  ): Promise<string[]> => {

    const response =
      await askGroq(`
Available tools:

getBooks
getEvents
getMenu
getResources

A query may require
one or multiple tools.

Query:
${query}

Return ONLY valid JSON.

Example:

{
  "tools": ["getBooks"]
}

Example:

{
  "tools": ["getEvents", "getBooks"]
}
`);

    try {

      const cleaned =
        response
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

      const parsed =
        JSON.parse(cleaned);

      return (
        parsed.tools || []
      );

    } catch {

      return [];
    }
  };

export const askAI =
  async (
    prompt: string
  ): Promise<string> => {

    return await askGroq(
      prompt
    );
  };