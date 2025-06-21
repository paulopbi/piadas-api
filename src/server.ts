import { router as jokesRouter } from "./routes/jokes.route";
import { router as helpRoute } from "./routes/help.route";
import { databaseConnection } from "./config/mongodb";
import express from "express";
import cors from "cors";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", jokesRouter);
app.use("/api", helpRoute);

//start the mongoDB connection
databaseConnection();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
