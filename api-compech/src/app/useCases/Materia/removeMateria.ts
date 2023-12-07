import { Request, Response } from 'express';
import { Materia } from '../../models/Matéria';

export async function removeMateria(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Materia.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
