import Input from "@/components/atoms/Input"
import { Container } from "@/components/molecules/Container"
import Link from "next/link"
import { useState } from "react"


const Signin = () => {
  const [value, setValue] = useState('')

  return (
    <Container title="Sign In" >


      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className='transition-all bg-white   rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-around w-full xl:p-10 h-full lg:w-6/12 lg:h-96'>
          <form action="" className="flex flex-col w-full space-y-4 lg:w-5/12">
            <div className="flex flex-col space-y-3">
              <Input name='email' label='E-mail' value={value} />
              <Input label='Senha' name='senha' value={value} />
            </div>
            <Link href='' className='transition-all bg-cGreen-100 p-3 rounded-xl text-sm text-center text-white shadow-lg opacity-70 hover:opacity-100'>
              Logar
            </Link>
          </form>
          <form action="" className="flex flex-col w-full lg:w-5/12">
            <Input name='email' label='E-mail' value={value} />
            <Input label='Senha' name='senha' value={value} />
          </form>
        </div>
      </div>

    </Container>
  )
}


export default Signin