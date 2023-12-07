import { Request, Response } from 'express';
import { Curso } from '../../models/Curso';

export async function removeCurso(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const curso = await Curso.findByIdAndDelete(id);

    res.status(204).json(curso);
  } catch (error) {
    res.sendStatus(500);
  }
}
