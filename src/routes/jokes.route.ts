import {
  getAllJokes,
  createJoke,
  deleteJoke,
  updateJoke,
} from "../controllers/jokes.controller";
import { Router } from "express";

export const router = Router();

router.get("/piadas", getAllJokes);
router.post("/piadas/criar", createJoke);
router.delete("/piadas/deletar/:id", deleteJoke);
router.put("/piadas/atualizar/:id", updateJoke);
