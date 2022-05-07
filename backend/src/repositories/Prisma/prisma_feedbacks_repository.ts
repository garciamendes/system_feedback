// Project
import { prisma } from '../../prisma'
import { IFeedbackData, IFeedbacksRepository } from '../feedbacks_repository'

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create({ type, comment, screenshot }: IFeedbackData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}