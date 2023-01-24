import { Container } from "@/components/molecules/Container"
import { useState } from "react";
import Calendar from "@/components/atoms/Calendar";




const Schedule = () => {
    const hors = ['10:00', '11:00', '13:00', '14:00', '15:00']
    const [daySelect, setDaySelect] = useState<number>(0)
  
    return(
        <Container>
            <span>Dia selecionado {daySelect}</span>
            <Calendar setDaySelect={setDaySelect}/>




        <div className="h-28">
            {
                daySelect && (
                    <div className="flex gap-3 text-white">
                        {hors.map((hor,index) => (
                            <button  key={index} className=" transition-all bg-slate-900/[0.4] p-4 rounded-xl hover:bg-slate-900">{hor}</button>
                        ))}
                    </div>
                )
            }
        </div>
        </Container>
    )
}

export default Schedule