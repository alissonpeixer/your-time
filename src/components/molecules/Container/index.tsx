import { Inter } from '@next/font/google'
const inter = Inter({
  variable: "--display-font",
  subsets: ['latin']
})


export const Container  = ({children} : React.PropsWithChildren<{}>) => {
    return(
        <main 
        className={
            `
            min-h-screen ${inter.variable} 
            font-display 
            flex flex-col 
            items-center 
            p-4 
            justify-center 
            gap-2
            container
            mx-auto
            `
        }
        >
            {children}
        </main>
    )
}