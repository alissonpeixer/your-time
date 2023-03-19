interface Props {
    label: String;
    value: String;
    name: String;
    className?: String;
}



const Input = (props: Props, { ...more} : React.HTMLProps<Input> ) => {
    return (
        <div className="flex flex-col text-white ">
            <label htmlFor={props.name}>{props.label}</label>
            <input {...more} type="text" name={props.name} className="bg-transparent outline-none border border-white rounded-lg p-2" />
        </div>
    )
}



export default Input