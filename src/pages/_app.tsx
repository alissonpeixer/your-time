import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"



import Auth from '@/components/molecules/Auth'
import { NavBar } from '@/components/atoms/NavBar'



export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {



  console.log(session)
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth auth={Component.auth}>
          <NavBar auth={true} role={Component.role} />
          <Component {...pageProps} />
        </Auth>
      ) : (
        <>
          <NavBar auth={false} role={Component.role} />
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  )
}
