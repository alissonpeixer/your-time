import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    className?: string;
}



const Input = (props: Props) => {
    return (
        <div className="flex flex-col">
            <label className="" htmlFor={props.name}>{props.label}</label>
            <input {...props} type="text" name={props.name} className="bg-transparent outline-none border-2 border-cGray-200 rounded-lg p-2" />
        </div>
    )
}



export default Input