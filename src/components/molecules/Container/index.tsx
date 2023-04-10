import { NavBar } from '@/components/atoms/NavBar'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'
import Box from '../Box'
import { useSession } from 'next-auth/react'

const inter = Inter({
    variable: "--display-font",
    subsets: ['latin']
})


interface Props {
    children?: ReactNode,
    title: string
    className?: string
}

export const Container: React.FC<Props> = (props: Props) => {
    const { data: session, status } = useSession()
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <main
                className={`
                    ${inter.variable}
                    ${props.className}
                    bg-cBlack-100
                    min-h-screen
                `}
            >
                <Box>
                    {props.children}
                </Box>

            </main>
        </>
    )
}