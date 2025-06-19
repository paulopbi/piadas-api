import mongoose from "mongoose";

const JokesSchema = new mongoose.Schema({
  conteudo: {
    type: String,
    required: true,
  },
  curtidas: {
    type: Number,
    default: 0,
  },
  categorias: {
    type: [String],
    default: [],
  },
  criado_em: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Jokes", JokesSchema);
