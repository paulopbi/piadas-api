import { type Request, type Response } from "express";
import Jokes from "../models/jokes.model";

export const createJoke = async (req: Request, res: Response) => {
  try {
    const newJoke = await Jokes.create(req.body);
    res
      .status(201)
      .json({ message: "Piada criada com sucesso!", ok: true, data: newJoke });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};

export const deleteJoke = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedJoke = await Jokes.findByIdAndDelete(id);
    if (!deletedJoke) {
      res.status(404).json({ message: "Piada não encontrada!", ok: false });
    }
    res.status(200).json({ message: "Piada deletada com sucesso!", ok: true });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};

export const updateJoke = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID da piada é obrigatório", ok: false });
    return;
  }

  try {
    const updatedJoke = await Jokes.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({
        message: "Piada atualizada com sucesso!",
        data: updatedJoke,
        ok: true,
      });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};

export const getAllJokes = async (req: Request, res: Response) => {
  try {
    const allJokes = await Jokes.find();
    res.status(200).json(allJokes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};

export const getJokeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: "ID da piada é obrigatório", ok: false });
    return;
  }

  try {
    const joke = await Jokes.findById(id);

    if (!joke) {
      res.status(404).json({ message: "Piada não encontrada", ok: false });
      return;
    }

    res.status(200).json(joke);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};
