import {
  getAllJokes,
  createJoke,
  deleteJoke,
  updateJoke,
} from "../controllers/jokes.controller";
import { Router } from "express";

export const router = Router();

router.get("/piadas", getAllJokes);
router.post("/criar", createJoke);
router.delete("/deletar/:id", deleteJoke);
router.put("/atualizar/:id", updateJoke);
