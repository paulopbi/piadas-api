import { Router } from "express";
import {
  allJokes,
  createJoke,
  deleteJoke,
} from "../controllers/jokes.controller";

export const router = Router();

router.get("/piadas", allJokes);
router.post("/criar", createJoke);
router.delete("/deletar/:id", deleteJoke);
