import React from "react";

interface Props {
    label: string;
    value: string;
    name: string;
    className?: string;
}



const Input = (props: Props, { ...more }: React.HTMLProps<HTMLInputElement>) => {
    return (
        <div className="flex flex-col ">
            <label className="" htmlFor={props.name}>{props.label}</label>
            <input {...more} type="text" name={props.name} className="bg-transparent outline-none border-2 border-cGray-200 rounded-lg p-2" />
        </div>
    )
}



export default Input