import Link from "next/link"
import { useState } from "react"
import { FaGoogle, FaFacebook } from "react-icons/fa";


import Input from "@/components/atoms/Input"
import { Container } from "@/components/molecules/Container"
import { Button } from "@/components/atoms/Button";

const Signin = () => {
  const [value, setValue] = useState('')

  return (
    <Container title="Sign In" >


      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className='transition-all bg-white   rounded-2xl p-10 flex flex-col xl:flex-row items-center justify-around w-full xl:p-10 h-full xl:w-6/12 xl:h-96'>

          <form action="javascript:alert('salve')" className="flex flex-col w-full space-y-4 xl:w-5/12">
            <div className="flex flex-col space-y-3">
              <Input name='email' label='E-mail' value={value} />
              <Input label='Senha' name='senha' value={value} />
            </div>
            <button className='transition-all bg-cGreen-100 p-3 rounded-xl text-sm text-center text-white shadow-xl opacity-70 hover:opacity-100' type="submit">
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
              icon={<FaGoogle color='white' />}
              onClick={() => alert('GOOGLE')}
            />

            <Button
              text="Entrar com o Facebook"
              icon={<FaFacebook color='white' />}
              onClick={() => alert('FACEBOOK')}
            />


          </div>

        </div>
      </div>

    </Container>
  )
}


export default Signin