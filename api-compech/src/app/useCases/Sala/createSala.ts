import { Request, Response } from 'express';
import { Sala } from '../../models/Sala';

export async function createSala(req: Request, res: Response) {
  try {
    const { nome, curso, gradesHorario } = req.body;

    const sala = await Sala.create({
      nome,
      curso,
      gradesHorario
    });

    res.send(sala);
  } catch (error) {
    console.log(error);
  }
}
