import { useState } from "react";

import {
  askAssistant,
} from "../services/dashboard";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AssistantChat = () => {

  const [query, setQuery] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([]);

  const handleAsk =
    async () => {

      if (!query.trim())
        return;

      const userMessage = {
        role: "user" as const,
        content: query,
      };

      setMessages((prev) => [
        ...prev,
        userMessage,
      ]);

      const currentQuery =
        query;

      setQuery("");

      try {

        setLoading(true);

        const response =
          await askAssistant(
            currentQuery
          );

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              response.data.answer,
          },
        ]);

      } catch {

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Unable to get response.",
          },
        ]);

      } finally {

        setLoading(false);
      }
    };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-4 text-xl font-bold">
        AI Assistant
      </h2>

      <div className="mb-5">

  <p className="mb-3 text-sm font-semibold text-slate-500">
    Suggested Prompts
  </p>

  <div className="flex flex-wrap gap-2">

    <button
      onClick={() =>
        setQuery(
          "Recommend a book for tomorrow's AI workshop"
        )
      }
      className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
    >
      📚 Recommend a book
    </button>

    <button
      onClick={() =>
        setQuery(
          "Show upcoming events"
        )
      }
      className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
    >
      📅 Upcoming events
    </button>

    <button
      onClick={() =>
        setQuery(
          "What's available in cafeteria?"
        )
      }
      className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
    >
      🍔 Cafeteria menu
    </button>

    <button
      onClick={() =>
        setQuery(
          "Show resources for Signals and Systems"
        )
      }
      className="rounded-full bg-slate-100 px-4 py-2 text-sm hover:bg-slate-200"
    >
      🎓 Academic resources
    </button>

  </div>

</div>

      <div className="mb-4 h-44 overflow-y-auto rounded-2xl border bg-slate-50 p-4">

        {messages.length === 0 && (

  <div className="flex h-full flex-col items-center justify-center text-center">

    <div className="mb-3 text-5xl">
      🤖
    </div>

    <h3 className="mb-2 text-lg font-semibold">
      Campus Assistant
    </h3>

    <p className="max-w-md text-slate-500">
      Ask about library books, events,
      cafeteria menu, academic resources,
      or get personalized recommendations.
    </p>

  </div>

)}

        {messages.map(
          (message, index) => (

            <div
              key={index}
              className={`mb-4 flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border shadow-sm"
                }`}
              >
                {message.content}
              </div>

            </div>
          )
        )}

        {loading && (

  <div className="flex justify-start">

    <div className="rounded-2xl bg-white px-4 py-3 shadow">

      <div className="flex gap-1">

        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></div>

        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:0.15s]"></div>

        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:0.3s]"></div>

      </div>

    </div>

  </div>

)}

      </div>

      <div className="flex gap-3">

        <input
          disabled={loading}
          value={query}
          onChange={(e) =>
            setQuery(
              e.target.value
            )
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter"
            ) {
              handleAsk();
            }
          }}
          placeholder="Ask anything about campus..."
          className="flex-1 rounded-lg border p-3 disabled:bg-slate-100"
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-5 text-white hover:bg-blue-700"
        >
          {loading ? "..." : "Send"}
        </button>

      </div>

    </div>
  );
};

export default AssistantChat;