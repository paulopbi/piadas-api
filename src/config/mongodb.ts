import mongoose from "mongoose";

export const databaseConnection = async () => {
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
};
