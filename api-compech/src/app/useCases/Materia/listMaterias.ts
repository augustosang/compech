import { Request, Response } from 'express';
import { Materia } from '../../models/Matéria';

export async function listMaterias(req: Request, res: Response) {
  try {
    const materias = await Materia.find();

    res.status(200).json(materias);
  } catch (error) {
    res.sendStatus(500);
  }
}
