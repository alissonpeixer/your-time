import { Container } from "@/components/molecules/Container"
import { useState } from "react";
import Calendar from "@/components/atoms/Calendar";
import moment from 'moment'



const schedule = () => {
    const hors = ['10:00', '11:00', '13:00', '14:00', '15:00']
    const [daySelect,setDaySelect] = useState<number>()
  
    return(
        <Container>
            <span>Dia selecionado {daySelect}</span>
            <Calendar setDaySelect={setDaySelect}/>




        <div className="h-28">
            {
                daySelect && (
                    <div className="flex gap-3 text-white">
                        {hors.map(hor => (
                            <button className=" transition-all bg-slate-900/[0.4] p-4 rounded-xl hover:bg-slate-900">{hor}</button>
                        ))}
                    </div>
                )
            }
        </div>
        </Container>
    )
}

export default schedule