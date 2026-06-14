import dotenv from "dotenv";

dotenv.config();

import {
  askAI,
} from "./services/ai.service";

async function test() {

  const response =
    await askAI(
      "What is Artificial Intelligence?"
    );

  console.log(response);
}

test();