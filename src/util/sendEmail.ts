import { createTransport } from "nodemailer"

export const transport = createTransport({
    service: 'sendgrid',
    auth: {
      user: process.env.ENV_EMAIL_USER || '',
      pass: process.env.ENV_EMAIL_APIKEY || ''
    }
})