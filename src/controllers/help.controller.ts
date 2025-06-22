import { type Request, type Response } from "express";

export const getHelp = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      ok: true,
      message:
        "Bem vindo a API de piadas, abaixo estão os endpoints disponíveis",
      endpoints: {
        "/api/piadas": "Irá mostrar todas as piadas (GET)",
        "/api/piadas/criar": "Permite criar uma nova piada (POST)",
        "/api/piadas/atualizar/:id":
          "Permite atualizar uma piada pelo ID (PUT)",
        "/api/piadas/deletar/:id": "Permite deletar uma piada pelo ID (DELETE)",
      },
      ajuda: {
        documentação: "https://github.com/paulopbi/piadas-api",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message, ok: false });
      return;
    }
    res.status(500).json({ message: "Erro interno do servidor", ok: false });
  }
};
