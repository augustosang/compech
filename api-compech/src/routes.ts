import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { createAluno } from './app/useCases/Aluno/createAluno';
import { createMateria } from './app/useCases/Materia/createMateria';
import { createSala } from './app/useCases/Sala/createSala';
import { createCurso } from './app/useCases/Curso/createCurso';
import { listCurso } from './app/useCases/Curso/listCurso';
import { listMaterias } from './app/useCases/Materia/listMaterias';
import { listAlunos } from './app/useCases/Aluno/listAlunos';
import { listAluno } from './app/useCases/Aluno/listAluno';
import { createAula } from './app/useCases/Aula/createAula';
import { listAulas } from './app/useCases/Aula/listAulas';
import { listCursos } from './app/useCases/Curso/listCursos';
import { listAula } from './app/useCases/Aula/listAula';
import { removeAluno } from './app/useCases/Aluno/removeAluno';
import { listSala } from './app/useCases/Sala/listSala';
import { removeSala } from './app/useCases/Sala/removeSala';
import { listSalas } from './app/useCases/Sala/listSalas';
import { removeMateria } from './app/useCases/Materia/removeMateria';
import { removeAulas } from './app/useCases/Aula/removeAula';
import { validateAluno } from './app/useCases/Aluno/validateForm';
import { getFinger } from './app/middlewares/arduino';


export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});


// Aluno
router.post('/alunos', upload.single('imagem'), createAluno);
router.post('/valid', validateAluno);
router.get('/alunos', listAlunos);
router.get('/alunos/:fingerprint', listAluno);
router.delete('/alunos/:id', removeAluno);

// Arduino
router.get('/arduino/', getFinger);

// Materias
router.post('/materias', createMateria);
router.get('/materias', listMaterias);
router.delete('/materias/:id', removeMateria);

// Cursos
router.post('/cursos', createCurso);
router.get('/cursos/:id', listCurso);
router.get('/cursos', listCursos);


// Sala
router.post('/salas', createSala);
router.get('/salas/:id', listSala);
router.get('/salas', listSalas);
router.delete('/salas/:id', removeSala);

// Aulas
router.post('/aulas', createAula);
router.get('/aulas', listAulas);
router.get('/aulas/:id', listAula);
router.delete('/aulas/:id', removeAulas);
