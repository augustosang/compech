import { Schema, model } from 'mongoose';

export const Aluno = model('Aluno', new Schema({
  nome: {
    type: String,
    required: true,
  },

  imagem: {
    type: String,
    required: true,
  },

  rm: {
    type: String,
    required: true,
  },

  curso: {
    type: String,
    required: true,
  },
  
  fingerprint: {
    type: String,
    required: true,
  },

  sala: {
    type: Schema.Types.ObjectId,
    ref: 'Sala',
    required: true,
  },
}));
