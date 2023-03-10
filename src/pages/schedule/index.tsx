import { Container } from "@/components/molecules/Container"
import { useState } from "react";
import Calendar from "@/components/atoms/Calendar";



const Schedule = () => {



    const hors = ['10:00', '11:00', '13:00', '14:00', '15:00'] || ''
    const [daySelect, setDaySelect] = useState<number | string>()
    const [hoursSelect, setCurrentHours] = useState<number | any>()
    const [inputValue, setInputValue] = useState<string>('')


    const body = {
        daySelect,
        hoursSelect,
        inputValue
    }


    const service = () => {
        if (!daySelect || !hoursSelect
        ) return
        setInputValue('')
        setCurrentHours('')
        setDaySelect('')
    }

    return (
        <Container>
            <span>Dia selecionado {daySelect} as {hoursSelect}</span>
            <Calendar setDaySelect={setDaySelect} daySelect={daySelect} />




            <div className=" flex flex-col gap-4">
                {
                    daySelect && (
                        <>
                            <div className="flex gap-3 text-white">
                                {hors.map((hours, index) => (
                                    <button
                                        key={index}
                                        className={`
                                            transition-all p-4 rounded-xl
                                            border
                                            hover:bg-slate-900
                                            ${hours === hoursSelect ?
                                                'bg-slate-900'
                                                :
                                                'bg-slate-400/[0.4]'
                                            }


                                        `}
                                        onClick={() => setCurrentHours(hours)}
                                    >
                                        {hours}
                                    </button>
                                ))}
                            </div>
                            <textarea
                                className="p-2"
                                placeholder="Observação"
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                            <button
                                className="border p-4 hover:border-red-200"
                                onClick={() => service()}
                            >
                                SUBMIT
                            </button>
                        </>
                    )
                }


            </div>
        </Container>
    )
}

export default Schedule