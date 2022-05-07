// Local
import { SubmitFeedbackUseCase } from './submit_feedback_use_case'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Testando',
      screenshot: 'data:image;png;base64,d2asdqwdqwdqwd'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Testando'
    })).resolves.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: ''
    })).resolves.toThrow()
  })

  it('should not be able to submit a feedback without format correct screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Testando',
      screenshot: 'tst.png'
    })).resolves.toThrow()
  })
})