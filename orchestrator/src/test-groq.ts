import dotenv from "dotenv";

dotenv.config();

import {
  askGroq,
} from "./services/groq.service";

async function test() {

  const result =
    await askGroq(
      "Say hello in one sentence."
    );

  console.log(result);
}

test();