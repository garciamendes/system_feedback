// Local
import { ISubmitFeedbackUseCaseRequest } from './types'

// Project
import { IFeedbacksRepository } from '../repositories/feedbacks_repository'
import { IMailAdapter } from '../adapters/mail_adapter'

export class SubmitFeedbackUseCase {
  constructor (
    private feedbacksRepository: IFeedbacksRepository,
    private sendMailAdapter: IMailAdapter
  ) { }

  async execute(request: ISubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot} = request

    if (!type)
      throw new Error('Type is required')

    if (!comment)
      throw new Error('Comment is required')

    if (screenshot && !screenshot.startsWith('data:image;png;base64'))
      throw new Error('Invalid screeshot format.')

    this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    this.sendMailAdapter.sendMail({
      subject: 'Novo ooooooo feedback',
      body: [
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`
      ].join('\n')
    })
  }
}