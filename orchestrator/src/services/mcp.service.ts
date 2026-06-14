import axios from "axios";

const LIBRARY =
  process.env.LIBRARY_MCP;

const EVENTS =
  process.env.EVENTS_MCP;

const CAFETERIA =
  process.env.CAFETERIA_MCP;

const ACADEMICS =
  process.env.ACADEMICS_MCP;

console.log("MCP URLs:");
console.log({
  LIBRARY,
  EVENTS,
  CAFETERIA,
  ACADEMICS,
});

export const checkAllMCPs =
  async () => {
    const result = {
      library: "offline",
      events: "offline",
      cafeteria: "offline",
      academics: "offline",
    };

   try {
  await axios.get(`${LIBRARY}`);
  result.library = "online";
} catch (error: any) {
  console.log(
    "Library Error:",
    error?.message
  );

  console.log(
    "Library Response:",
    error?.response?.data
  );
}

try {
  await axios.get(`${EVENTS}`);
  result.events = "online";
} catch (error: any) {
  console.log(
    "Events Error:",
    error?.message
  );

  console.log(
    "Events Response:",
    error?.response?.data
  );
}

try {
  await axios.get(`${CAFETERIA}`);
  result.cafeteria = "online";
} catch (error: any) {
  console.log(
    "Cafeteria Error:",
    error?.message
  );

  console.log(
    "Cafeteria Response:",
    error?.response?.data
  );
}

try {
  await axios.get(`${ACADEMICS}`);
  result.academics = "online";
} catch (error: any) {
  console.log(
    "Academics Error:",
    error?.message
  );

  console.log(
    "Academics Response:",
    error?.response?.data
  );
}

    return result;
  };

  export const getBooks = async () => {
  const response = await axios.get(
    `${LIBRARY}/api/books`
  );

  return response.data;
};

export const getEvents = async () => {
  const response = await axios.get(
    `${EVENTS}/api/events`
  );

  return response.data;
};

export const getMenuItems = async () => {
  const response = await axios.get(
    `${CAFETERIA}/api/menu`
  );

  return response.data;
};

export const getResources =
  async () => {
    const response =
      await axios.get(
        `${ACADEMICS}/api/resources`
      );

    return response.data;
  };