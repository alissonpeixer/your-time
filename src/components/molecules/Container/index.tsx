import { NavBar } from '@/components/atoms/NavBar'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { ReactNode } from 'react'

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
                className={
                    `
            min-h-screen ${inter.variable}
            font-display
            flex flex-col

            p-4
            items-center
            justify-between
            gap-2
            container
            mx-auto

            ${props.className}
            `
                }
            >
                <NavBar />
                {props.children}
            </main>
        </>
    )
}