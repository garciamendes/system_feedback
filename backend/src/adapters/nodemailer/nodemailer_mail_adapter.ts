// Third party
import nodemailer from 'nodemailer'

// Project
import { IMailAdapter, ISendMailData } from '../mail_adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ee99ab1c026f26',
    pass: 'f9a6be4fbed759'
  }
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData) {
    await transport.sendMail({
      from: 'Equipe G <G@feedget.com>',
      to: 'Garcia <garciaprog0101@gmail.com>',
      subject,
      html: body
    })
  }
}