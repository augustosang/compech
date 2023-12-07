import { Request, Response } from 'express';
import { Sala } from '../../models/Sala';

export async function listSala(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const sala = await Sala.findById(id);

    res.status(200).json(sala);
  } catch (error) {
    res.sendStatus(500);
  }
}
