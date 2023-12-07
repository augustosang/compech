import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';
import { Curso } from '../../models/Curso';

export async function createAluno(req: Request, res: Response) {
  try {
    const { nome, rm, curso, sala, fingerprint } = req.body;
    const imagem = req.file?.filename;

    const cursoAluno = await Curso.findById(curso);

    const aluno = await Aluno.create({
      nome,
      imagem,
      rm,
      curso: cursoAluno?.nome,
      sala,
      fingerprint
    });

    res.send(aluno);
  } catch (error) {
    console.log(error);
  }
}
