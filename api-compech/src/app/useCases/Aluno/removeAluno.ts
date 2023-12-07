import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';

export async function removeAluno(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Aluno.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
}
