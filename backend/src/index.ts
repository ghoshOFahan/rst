import "dotenv/config";
import express from "express";
import cors from "cors";
import type { Request, Response } from "express";
export const app = express();
import { createServer } from "http";
const httpServer = createServer(app);
const port: number = parseInt(process.env.PORT || "4000", 10);
const host = "0.0.0.0";
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1>hey there welcome to KnowMore!</h1>`);
});
httpServer.listen(port, host, () => {
  if (process.env.PORT) {
    console.log("service is live and listening on port %d", port);
  } else {
    console.log("you can access the page locally at http://localhost:%d", port);
  }
});
