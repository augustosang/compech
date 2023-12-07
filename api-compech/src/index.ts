import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';
import path from 'node:path';
import cors from 'cors';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    app.use(cors());
    app.use('/files', express.static('uploads'));

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());

    app.use(router);
    app.listen(3000, () => console.log('Server is runnig in http://localhost:3000'));
    console.log('Conectado ao banco');
  })
  .catch(() => console.log('Erro ao conectar no banco'));


