import { Router } from "express";
import { getHelp } from "../controllers/help.controller";

export const router = Router();

router.get("/ajuda", getHelp);
