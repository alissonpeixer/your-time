import { createTransport } from "nodemailer"

export  const transport = createTransport({
  host: process.env.ENV_EMAIL_HOST,
  port: Number(process.env.ENV_EMAIL_PORT),
  secure: true, // use SSL
  auth: {
    user: process.env.ENV_EMAIL_USER,
    pass: process.env.ENV_EMAIL_PASS,
  },
});