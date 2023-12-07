import { Request, Response } from 'express';
import { Sala } from '../../models/Sala';

export async function listSalas(req: Request, res: Response) {
  try {
    const salas = await Sala.find();

    res.status(200).json(salas);
  } catch (error) {
    res.sendStatus(500);
  }
}
