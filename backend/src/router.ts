// Node
import express, { Request, Response } from 'express'

// Third party
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer_mail_adapter';

// Local
import { PrismaFeedbacksRepository } from './repositories/Prisma/prisma_feedbacks_repository';
import { SubmitFeedbackUseCase } from './use-cases/submit_feedback_use_case';

const routes = express.Router()

routes.post('/feedbacks', async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository, nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})

export default routes