import { auth } from "../auth.js";
import { fromNodeHeaders } from "better-auth/node"; // <-- Add this
import type { Request, Response, NextFunction } from "express";
import { APIError } from "better-auth/api";
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}
export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = session.user;
    next();
  } catch (error) {
    if (error instanceof APIError) {
      console.log(error.message, error.status);
      return res.status(500).json({ message: "Auth error" });
    }
  }
};
