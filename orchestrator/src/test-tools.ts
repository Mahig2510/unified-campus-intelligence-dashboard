import dotenv from "dotenv";
dotenv.config();

import { getTools } from "./services/ai.service";

const test = async () => {

  console.log(
    await getTools(
      "Recommend a book for tomorrow's AI workshop"
    )
  );

};

test();
