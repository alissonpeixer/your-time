import NextAuth, { Session, Theme } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import jwt from "jsonwebtoken"
import { transport } from "@/util/sendEmail";
import { htmlLogin } from "@/lib/email/loginRequest";
import { supabase } from "@/db/supabaseClient";




export const authOptions = {
  pages: {
    verifyRequest: '/auth/verify-request',
  },


  providers: [
    GithubProvider({
      clientId: process.env.ENV_GITHUB_ID || '',
      clientSecret: process.env.ENV_GITHUB_SECRET || '',
    }),
    EmailProvider({
      from: process.env.ENV_EMAIL_FROM,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {


        function text({ url, host}: { url: string; host: string }) {
          return `Sign in to ${host}\n${url}\n\n`
        }

        const { host } = new URL(url)
        const theme = {
          colorScheme: "auto"
        }

        const result = await transport.sendMail({
          from: from,
          to: email,
          subject: `Confirmação de Login`,
          text: text({ url, host }),
          html: htmlLogin({ url, host,theme }) || 'ERROR',
        })
        const failed = result.rejected.concat(result.pending).filter(Boolean)
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
        }
      },
    }),




  ],



  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  }),



  callbacks: {
    async session({ session, user } : any) {
      const signingSecret = process.env.SUPABASE_JWT_SECRET || ''

      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expires).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
          roles: user.roles
        }
        session.supabaseAccessToken = jwt.sign(payload, signingSecret)
      }
      return {
        ...session,
        roles: user.roles
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)