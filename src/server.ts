import express from "express";
import cors from "cors";
import { router as jokesRouter } from "./routes/jokes.routes";
import { databaseConnection } from "./config/mongodb";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", jokesRouter);

//start the mongoDB connection
databaseConnection();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
