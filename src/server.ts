import jokesRouter from "./routes/jokes.route";
import { getHelp } from "./controllers/help.controller";
import { databaseConnection } from "./config/mongodb";
import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", jokesRouter);
app.get("/", getHelp);

//start the mongoDB connection
databaseConnection();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
