import { Router } from "express";
import { insertData } from "../controllers/onboarding_controller.js";
import { getProfileRadar } from "../controllers/profile_controller.js";

const router = Router();

// Endpoint for Next.js to hit right after Google Auth -> Onboarding
router.post("/onboarding", insertData);

// Endpoint for the Dashboard to fetch the data formatted for Recharts
router.get("/profile/:userId/radar", getProfileRadar);

export default router;
