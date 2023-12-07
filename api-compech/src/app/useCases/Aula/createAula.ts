import { Request, Response } from 'express';
import { Aula } from '../../models/Aula';

export async function createAula(req: Request, res: Response) {
  try {
    const { nome, materia, numeroAulas, horario, horarioLimite, diaSemana, alunos } = req.body;

    const createAula = await Aula.create({
      nome,
      materia,
      numeroAulas,
      horario,
      horarioLimite,
      diaSemana,
      alunos
    });

    const aula = await Aula.create(createAula);

    res.send(aula);
  } catch (error) {
    console.log(error);
  }
}
