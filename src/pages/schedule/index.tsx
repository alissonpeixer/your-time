import { Container } from "@/components/molecules/Container"
import { useState } from "react";
import Calendar from "@/components/atoms/Calendar";



const Schedule = () => {
    const hors = ['10:00', '11:00', '13:00', '14:00', '15:00'] || ''
    const [daySelect, setDaySelect] = useState<number | string>()
    const [hoursSelect, setCurrentHours] = useState<number | string>()


    return (
        <Container>
            <span>Dia selecionado {daySelect} as {hoursSelect}</span>
            <Calendar setDaySelect={setDaySelect} daySelect={daySelect} />




            <div className="h-28 flex flex-col gap-4">
                {
                    daySelect && (
                        <>
                            <div className="flex gap-3 text-white">
                                {hors.map((hours, index) => (
                                    <button
                                        key={index}
                                        className="
                                            transition-all bg-slate-900/[0.4]
                                            p-4 rounded-xl hover:bg-slate-900
                                        "
                                        onClick={() => setCurrentHours(hours)}
                                    >
                                        {hours}
                                    </button>
                                ))}
                            </div>
                            <textarea className="p-2" placeholder="Observação" />

                        </>
                    )
                }


            </div>
        </Container>
    )
}

export default Schedule