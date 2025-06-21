import type { Request, Response } from "express";
import Jokes from "../models/jokes.model";

export const getAllJokes = async (req: Request, res: Response) => {
  try {
    const allJokes = await Jokes.find();

    if (allJokes.length === 0) {
      res.status(404).json({ message: "Nenhuma piada encontrada" });
      return;
    }

    res.status(200).json(allJokes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const createJoke = async (req: Request, res: Response) => {
  try {
    const newJoke = await Jokes.create(req.body);
    res
      .status(201)
      .json({ message: "Piada criada com sucesso!", data: newJoke });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const deleteJoke = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedJoke = await Jokes.findByIdAndDelete(id);
    if (!deletedJoke) {
      res.status(404).json({ message: "Piada não encontrada!" });
    }
    res.status(200).json({ message: "Piada deletada com sucesso!" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

export const updateJoke = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID da piada é obrigatório" });
    return;
  }

  try {
    const updatedJoke = await Jokes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Piada atualizada com sucesso!", data: updatedJoke });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
