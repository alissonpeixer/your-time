import React from 'react';
import Head from 'next/head'
import { useRouter } from "next/router"

import { Container } from '@/components/molecules/Container'



export default function Home()  {
  const router = useRouter()
  return (
    <>
      <Container title='Your Time'>
          <div className='flex flex-col items-center gap-6 border p-4 rounded-xl'>
            <div className='text-white'>
              <h3 className='text-2xl'>Bem-Vindo ao</h3>
              <h1 className='font-bold text-4xl'>Your Time⌚</h1>
            </div>
            <p className='text-slate-300'>
              You Time foi criado com o proposito de estar facilitando 
              sua vida na hora de agendar um horario para seu neócio, 
              assim você não perde mais tempo com agenda de papel.
              You Time da muito mais praticidade ao seu dia-a-dia!
            </p>
          </div>
          <button onClick={() => router.push('/schedule')}>CALENDARIO</button>
      </Container>
    </>
  )
}
