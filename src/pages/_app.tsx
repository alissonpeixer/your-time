import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from "next-auth/react"



import Auth from '@/components/molecules/Auth'
import { NavBar } from '@/components/atoms/NavBar'

import type { NextComponentType } from 'next' //Import Component type

//Add custom appProp type then use union to add it
type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean } & { role?: string } // add auth type
}


export default function App({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {



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
