import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';

export async function listAlunos(req: Request, res: Response) {
  try {
    const alunos = await Aluno.find();

    res.json(alunos);
  } catch (error) {
    res.sendStatus(500);
  }
}
