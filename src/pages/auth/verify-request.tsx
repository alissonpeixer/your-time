



import React from 'react';

import { useRouter } from "next/router"

import { Container } from '@/components/molecules/Container'
import Link from 'next/link';
import { useSession } from 'next-auth/react';




const VerifyRequest = () => {
    const router = useRouter()
    const { data: session, status } = useSession() as any
    const isUser = !!session?.user
    return (

        <Container title='Your Time'>

            <div className='flex  gap-6 p-4   flex-col items-center justify-center h-[70vh] text-cGray-100'>
                <div className='transition-all bg-white space-y-10  rounded-2xl p-10 flex flex-col justify-around lg:p-10  lg:h-96'>
                    <div className='text-center'>
                        Your Time⌚
                        <h3 className='text-2xl'>E-mail enviado!</h3>
                    </div>
                    <p className='text-base lg:text-1xl'>
                        Um link de login foi enviado para o seu endereço de e-mail.
                    </p>
                </div>
            </div>

        </Container>

    )
}



export default VerifyRequest
