import { Schema, model } from 'mongoose';

export const Aula = model('Aula', new Schema({
  nome: {
    required: true,
    type: String
  },

  materia: {
    type: Schema.Types.ObjectId,
    ref: 'Materia',
  },

  group: {
    type: String,
    required: false,
  },

  numeroAulas: {
    type: Number,
    required: true,
  },

  horario: {
    type: String,
    required: true,
  },

  horarioLimite: {
    type: Number,
    required: true,
  },

  diaSemana: {
    type: String,
    required: true,
  },

  alunos: [
    {
      aluno: {
        type: String,
        required: true,
      },
      numeroPresenca: {
        type: Number,
        default: 0
      },
    }
  ],
}));
