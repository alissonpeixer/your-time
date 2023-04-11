import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";


import Input from "@/components/atoms/Input"
import { Container } from "@/components/molecules/Container"
import { Button } from "@/components/atoms/Button";

const Signin = () => {
  const router = useRouter()

  const { data: session, status } = useSession()
  const isUser = !!session?.user

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await signIn("email", {
      email
    }) as any;

  };

  useEffect(() => {

    if (isUser) router.push('/schedule')

    return
  }, [status])

  return !isUser && (
    <Container title="Sign In" >


      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className='transition-all bg-white   rounded-2xl p-10 flex flex-col xl:flex-row items-center justify-around w-full xl:p-10 h-full xl:w-6/12 xl:h-96'>

          <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4 xl:w-5/12">
            <div className="flex flex-col space-y-3">
              <Input label='E-mail' name='email' type="email" required />
              {/* <Input label='Senha' name='password' type="password" required /> */}
            </div>
            <button type="submit" className='transition-all bg-cGreen-100 p-3 rounded-xl text-sm text-center text-white shadow-xl opacity-70 hover:opacity-100' >
              LOGAR
            </button>
          </form>
          <div className="transition-all flex items-center justify-center bg-black/10 w-full xl:p-[0.12px] pt-[0.12px] xl:pt-0 xl:h-full xl:w-0">
            <span className="absolute bg-white border  rounded-full p-2">
              OU
            </span>
          </div>
          <div className="flex flex-col w-full xl:w-5/12 gap-10">

            <Button
              text="Entrar com o Google"
              disabled={true}
              icon={<FaGoogle color='white' />}
              onClick={() => alert('GOOGLE')}
              customStyle="p-4 bg-red-400/70  hover:bg-red-800 cursor-no-drop"
            />

            <Button
              text="Entrar com o Facebook"
              disabled={true}
              icon={<FaFacebook color='white' />}
              onClick={() => alert('FACEBOOK')}
              customStyle="p-4  bg-blue-700/70  hover:bg-red-800  cursor-no-drop"
            />

            <Button
              text="Entrar com o GitHub"
              icon={<FaGithub color='white' />}
              onClick={() => signIn('github')}
              customStyle="p-4"
            />


          </div>

        </div>
      </div>

    </Container>
  )
}


export default Signin

