import { Schema, model } from 'mongoose';

export const Curso = model('Curso', new Schema({
  nome: {
    type: String,
    required: true
  },
}));
