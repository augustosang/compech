import { Request, Response } from 'express';
import { Materia } from '../../models/Matéria';

export async function createMateria(req: Request, res: Response) {
  try {
    const { nome, numeroAulas } = req.body;

    const materia = await Materia.create({
      nome,
      numeroAulas
    });

    res.send(materia);
  } catch (error) {
    console.log(error);
  }
}
