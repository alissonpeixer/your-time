import React, { ButtonHTMLAttributes } from "react";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: any;
    text: string;
}


export const Button: React.FC<Props> = ({ icon, text, ...props }) => {
    return (
        <button
            className="transition-all bg-cGreen-100/70  p-4 rounded-xl flex items-center gap-6 hover:bg-cGreen-100"
            {...props}
        >
            {icon}
            <span className="text-white text-lg">
                {text}
            </span>
        </button>
    )
}