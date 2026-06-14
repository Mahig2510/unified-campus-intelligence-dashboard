import { api } from "./api";

export const getBooks = () =>
  api.get("/library/books");

export const getEvents = () =>
  api.get("/events");

export const getMenu = () =>
  api.get("/menu");

export const getResources = () =>
  api.get("/resources");

export const askAssistant = (
  query: string
) => {
  return api.post(
    "/assistant",
    {
      query,
    }
  );
};
