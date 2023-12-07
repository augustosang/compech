import { Schema, model } from 'mongoose';

export const Materia = model('Materia', new Schema({
  nome: {
    type: String,
    required: true,
  },
}));
