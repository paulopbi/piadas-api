import { Router } from "express";
import {
  getAllJokes,
  createJoke,
  deleteJoke,
} from "../controllers/jokes.controller";

export const router = Router();

router.get("/piadas", getAllJokes);
router.post("/criar", createJoke);
router.delete("/deletar/:id", deleteJoke);
