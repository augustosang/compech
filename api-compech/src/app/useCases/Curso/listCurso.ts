import { Request, Response } from 'express';
import { Curso } from '../../models/Curso';

export async function listCurso(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const curso = await Curso.findById(id);

    res.status(200).json(curso);
  } catch (error) {
    res.sendStatus(500);
  }
}
