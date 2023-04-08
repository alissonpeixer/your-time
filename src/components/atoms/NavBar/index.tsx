import { useRouter } from "next/router"
import Link from "next/link";

export const NavBar = () => {

  const router = useRouter()

  console.log(router.pathname)
  const routers = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Calendário',
      url: '/schedule'
    },
    {
      title: 'Logar-se',
      url: '/signin'
    }
  ]

  return (
    <nav className="h-20 flex items-center justify-between w-full absolute p-10">

      <Link href='/'>
        <h1 className='font-bold text-1xl text-white xl:text-2xl'>Your Time⌚</h1>
      </Link>

      <ul className="flex gap-3 ">
        {
          routers?.map((path, id) => (
            router.pathname !== path.url &&
            <Link key={id} href={path.url} className='bg-cGreen-100 p-3 rounded-xl text-sm'>
              {path.title}
            </Link>

          ))
        }

      </ul>
    </nav>
  )
}