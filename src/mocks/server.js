//setup mock node server
import { setupServer } from "msv/node";
import { handlers } from "./handlers";

//This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
