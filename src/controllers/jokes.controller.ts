import type { Request, Response } from "express";
import Jokes from "../models/jokes.models";

export const allJokes = async (req: Request, res: Response) => {
  try {
    const jokes = await Jokes.find();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(404).json({ message: "Algo deu errado ao buscar as piadas!" });
  }
};

export const createJoke = async (req: Request, res: Response) => {
  try {
    const newJoke = await Jokes.create(req.body);
    res
      .status(201)
      .json({ message: "Piada criada com sucesso!", data: newJoke });
  } catch (error) {
    res.status(404).json({ message: "Algo deu errado ao buscar as piadas!" });
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
