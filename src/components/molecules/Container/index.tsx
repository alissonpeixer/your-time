import { NavBar } from '@/components/atoms/NavBar'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'
import Box from '../Box'

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
                <NavBar />
                <Box>
                    {props.children}
                </Box>

            </main>
        </>
    )
}