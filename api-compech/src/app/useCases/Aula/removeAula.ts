import { Request, Response } from 'express';
import { Aula } from '../../models/Aula';

export async function removeAulas(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const aula = await Aula.findByIdAndDelete(id);

    res.status(204).json(aula);
  } catch (error) {
    res.sendStatus(500);
  }
}
