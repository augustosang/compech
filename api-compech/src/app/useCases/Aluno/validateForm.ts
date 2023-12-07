import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';
import { Aula } from '../../models/Aula';

export async function validateAluno(req: Request, res: Response) {
  try {
    const { nome, rm } = req.body;
    
    const aluno = await Aluno.findOne({ rm, nome });

    if (!aluno) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    const agora = new Date();
    const hour = agora.getHours();
    const diaSemanaAtual = agora.toLocaleDateString('pt-BR', { weekday: 'long' });

    const aulaAtual = await Aula.findOne({
      diaSemana: diaSemanaAtual,
      horario: hour,
      'alunos.aluno': aluno.nome
    });

    if(aulaAtual?.horario === hour.toString()) {
      if (!aulaAtual) {
        return res.status(404).json({ message: 'Aula atual não encontrada' });
      }

      // Encontre o aluno na aula atual
      const alunoPresente = aulaAtual.alunos.find((alunoAula) => alunoAula.aluno === aluno.nome);

      if (!alunoPresente) {
        return res.status(400).json({ message: 'O aluno não está inscrito nesta aula' });
      }

      // Atualize o número de presenças do aluno
      alunoPresente.numeroPresenca++;

      // Salve as alterações na aula
      await aulaAtual.save();

      res.json(aluno);
    }
  } catch (error) {
    console.log(error);
  }
}