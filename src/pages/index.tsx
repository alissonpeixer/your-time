import React from 'react';
import Head from 'next/head'
import { useRouter } from "next/router"

import { Container } from '@/components/molecules/Container'
import Link from 'next/link';



export default function Home() {
  const router = useRouter()
  return (

    <Container title='Your Time'>

      <div className='flex  gap-6 p-4   flex-col items-center justify-center h-[70vh] text-cGray-100'>
        <div className='transition-all bg-white space-y-10  rounded-2xl p-10 flex flex-col justify-around lg:p-10  lg:h-96'>
          <div className='text-center'>
            <h3 className='text-2xl'>Bem-Vindo ao</h3>
            <h1 className='font-bold text-4xl lg:text-6xl'>Your Time⌚</h1>
          </div>
          <p className='text-base lg:text-1xl'>
            Your Time foi criado com o proposito de estar facilitando
            sua vida na hora de agendar um horario para seu neócio,
            assim você não perde mais tempo com agenda de papel.
            You Time da muito mais praticidade ao seu dia-a-dia!
          </p>
          <div className='w-full flex flex-col'>
            <Link href='' className='transition-all bg-cGreen-100 p-3 rounded-xl text-sm text-center text-white shadow-lg opacity-70 hover:opacity-100'>
              Logar
            </Link>
          </div>
        </div>
      </div>

    </Container>

  )
}
