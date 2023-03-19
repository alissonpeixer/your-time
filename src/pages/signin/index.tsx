import Input from "@/components/atoms/Input"
import { Container } from "@/components/molecules/Container"
import { useState } from "react"


const Signin = () => {
  const [value, setValue] = useState('')

  return (
    <Container title="Sign In" >
      <div>
        <form action="" className="flex flex-col gap-4 ">
          <Input name='email' label='E-mail' value={value} />
          <Input label='Senha' name='senha' value={value} pla />
        </form>
      </div>
      <div>

      </div>
    </Container>
  )
}


export default Signin