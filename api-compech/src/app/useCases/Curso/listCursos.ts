import { Request, Response } from 'express';
import { Curso } from '../../models/Curso';

export async function listCursos(req: Request, res: Response) {
  try {
    const cursos = await Curso.find();

    res.status(200).json(cursos);
  } catch (error) {
    res.sendStatus(500);
  }
}
