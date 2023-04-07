import React, { Children } from "react";


interface Props {
    children: React.ReactNode;
}


const Box: React.FC<Props> = ({ children }) => {
    return (
        <section className="pt-20">
            {children}
        </section>
    )
}



export default Box