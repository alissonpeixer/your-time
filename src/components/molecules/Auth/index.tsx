import React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

interface Props {
    children: any;
    auth: any;
}

const Auth = ({ children, auth }: Props) => {

    const router = useRouter()
    const { data: session, status } = useSession() as any
    const isUser = !!session?.user

    React.useEffect(() => {
        if (status === 'loading') return

        if (session?.roles) {
            if (session.roles != auth.role) {
                router.push(auth.unauthorized)
            }
        }

        if (!isUser) router.push('/signin')


    }, [isUser, status])

    if (isUser) {
        return children
    }


    return <div>Loading...</div>
};



export default Auth