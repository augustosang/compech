import { Request, Response } from 'express';
import { Aula } from '../../models/Aula';

export async function listAulas(req: Request, res: Response) {
  try {
    const aulas = await Aula.find();

    res.status(200).json(aulas);
  } catch (error) {
    res.sendStatus(500);
  }
}
