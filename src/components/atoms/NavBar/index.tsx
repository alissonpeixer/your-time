import { useRouter } from "next/router"
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../Button";
import { useState } from "react";

export const NavBar = ({ auth }: any) => {


  const router = useRouter();
  const [onEvent, setEvent] = useState() as any;

  const sections = [
    {
      title: 'Home',
      customStyle: 'w-24 p-2',
      action: "",
      showLogin: true
    },
    {
      title: 'Calendário',
      customStyle: 'w-24',
      action: "/schedule",
      showLogin: true
    },
    {
      title: 'Sair',
      customStyle: 'w-24 p-2',
      action: "/signout",
      showLogin: true
    }
  ]


  const click = (action: string) => {
    if (action === '/schedule') {
      router.push('/schedule')
      return
    }
    if (action === '/signout') {
      signOut()
      return
    }



    return router.push('/')
  }

  return (
    <nav className="h-20 flex items-center justify-between w-full absolute p-10">

      <Link href='/'>
        <h1 className='font-bold text-1xl text-white xl:text-2xl'>Your Time⌚</h1>
      </Link>

      <ul className="flex gap-3">

        {
          sections?.map((item, id) => (
            auth && item.showLogin && router.asPath !== item.action &&
            < Button text={item.title} key={id} customStyle={item.customStyle} onClick={() => click(item.action)} />
          ))
        }

      </ul>
    </nav>
  )
}