import { Request, Response } from 'express';
import { Curso } from '../../models/Curso';

export async function createCurso(req: Request, res: Response) {
  try {
    const { nome } = req.body;

    const createCurso = await Curso.create({
      nome
    });

    const curso = await Curso.create(createCurso);

    res.send(curso);
  } catch (error) {
    console.log(error);
  }
}
