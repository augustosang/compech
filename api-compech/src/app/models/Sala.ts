import { Schema, model } from 'mongoose';

export const Sala = model('Sala', new Schema({
  nome: {
    type: String,
    required: true
  },

  curso: {
    type: Schema.Types.ObjectId,
    ref: 'Curso',
    required: true
  },

  gradesHorario: [
    {
      nome: { type: String, required:  true },
      diaSemana: { type: String, required:  true },
      aulas: [
        {
          aula: {
            type: Schema.Types.ObjectId,
            ref: 'Aula'
          },
          group: {
            type: String,
            required: false
          }
        }
      ]
    }
  ],
}));
