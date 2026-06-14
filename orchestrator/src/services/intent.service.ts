export const detectIntent = (
  query: string
): string => {
  const text =
    query.toLowerCase();

  if (
    text.includes("book") ||
    text.includes("library")
  ) {
    return "library";
  }

  if (
    text.includes("event") ||
    text.includes("workshop") ||
    text.includes("seminar")
  ) {
    return "events";
  }

  if (
    text.includes("food") ||
    text.includes("menu") ||
    text.includes("meal") ||
    text.includes("lunch") ||
    text.includes("breakfast")
  ) {
    return "cafeteria";
  }

  if (
    text.includes("notes") ||
    text.includes("resource") ||
    text.includes("assignment") ||
    text.includes("semester") ||
    text.includes("pyq")
  ) {
    return "academics";
  }

  return "unknown";
};