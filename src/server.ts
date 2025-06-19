import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { router as jokesRouter } from "./routes/jokes.routes";

const app = express();
const PORT = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", jokesRouter);

(async () => {
  //start a mongoDB connection
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Conectado com sucesso ao banco de dados!");
  } catch (error) {
    console.error(
      "Algo deu errado ao se conectar com o banco de dados!",
      error
    );
    process.exit(1);
  }
})();

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
