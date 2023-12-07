import { Request, Response } from 'express';
import { Sala } from '../../models/Sala';

export async function removeSala(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Sala.findByIdAndDelete(id);

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}
