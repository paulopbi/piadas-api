import { type Request, type Response } from "express";

export const getHelp = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "Bem vindo a rota de ajuda, abaixo estão os endpoints disponíveis",
    ajuda: {
      "/api/piadas": "Irá mostrar todas as piadas (GET)",
      "/piadas/criar": "Permite criar uma nova piada (POST)",
      "/piadas/atualizar/:id": "Permite atualizar uma piada pelo ID (PUT)",
      "/piadas/deletar/:id": "Permite deletar uma piada pelo ID (DELETE)",
    },
  });
};
