import { io, Socket } from "socket.io-client";
const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
console.log(backend_url);
if (!backend_url) {
  console.error("Backend url is not defined");
}
const socket: Socket = io(backend_url, { transports: ["websocket"] });

export default socket;
