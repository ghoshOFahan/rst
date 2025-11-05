import dotenv from "dotenv";
import { io } from "socket.io-client";
dotenv.config({ path: "../../.env" });
const backend_url = process.env.BACKEND_URL ?? undefined;
if (typeof backend_url === "undefined") {
  console.log("error in finding backend url");
}
io(backend_url, { autoConnect: false });
