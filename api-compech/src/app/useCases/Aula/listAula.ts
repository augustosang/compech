import { Request, Response } from 'express';
import { Aula } from '../../models/Aula';

export async function listAula(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const aula = await Aula.findById(id);

    res.status(200).json(aula);
  } catch (error) {
    res.sendStatus(500);
  }
}
