import React, { ButtonHTMLAttributes } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: any;
    text: string;
    customStyle?: string;
}


export const Button: React.FC<Props> = ({ icon, text, customStyle, ...props }) => {
    return (
        <button
            className={`transition-all bg-cGreen-100/70  rounded-xl flex items-center text justify-center gap-6 hover:bg-cGreen-100 text-white ${customStyle}`}
            {...props}
        >
            {icon}
            <span>
                {text}
            </span>
        </button>
    )
}