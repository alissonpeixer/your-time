import React, { useState } from "react";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight, HiXCircle } from "react-icons/hi";

interface Props {
  setDaySelect: (value: number | string) => void
  daySelect: number | any
}

const Calendar = ({ setDaySelect, daySelect }: Props) => {


  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const isCurrentMonth = today.getMonth() === currentMonth;

  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];


  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  const nextMonth = () => {
    setDaySelect('')
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
      if (newYear === 2024) return
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);


  };


  const prevMonth = () => {
    setDaySelect('')
    if (isCurrentMonth) return
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
      if (newYear === 2022) return
    }


    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };


  let startDay = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className="p-1 flex flex-col items-center w-96 space-y-2">

      <div className="flex justify-between text-white w-56">

        <button onClick={prevMonth}>
          {isCurrentMonth ?
            <HiXCircle color="red" size={20} />
            :
            <HiOutlineArrowCircleLeft size={20} />
          }
        </button>

        <span >{monthNames[currentMonth]} de {currentYear} </span>

        <button onClick={nextMonth}>
          <HiOutlineArrowCircleRight size={20} />
        </button>

      </div>
      <div className="w-96">
        <div className="flex justify-around text-white">
          <span>Seg</span>
          <span>Ter</span>
          <span>Qua</span>
          <span>Qui</span>
          <span>Sex</span>
          <span>Sab</span>
          <span>Dom</span>
        </div>
        <div className="gap-3 text-xl w-full">
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className='flex'>
              {Array(7).fill(null).map((_, j) => {
                let day = (i * 7) + j - startDay + 1;

                if (i === 0 && j < startDay) {

                  return <span key={j} className='w-10 h-10 m-2'></span>;

                } else if (day > monthDays[currentMonth]) {

                  return <span key={j} className='w-10 h-10 m-2'></span>;

                } else {

                  return (
                    <button key={j}
                      disabled={day < currentDay && isCurrentMonth}
                      onClick={() => setDaySelect(day)}
                      className={`
                        transition-all
                        w-10 h-10 flex items-center justify-center
                        rounded-xl ${day < currentDay && isCurrentMonth ? 'bg-red-200/[0.7] m-2 hover:bg-red-800 cursor-no-drop' :
                          'bg-gray-200/[0.7] m-2 hover:bg-gray-200'
                        } ${day === daySelect && 'bg-blue-300'}
                      `}
                    >
                      {day}
                    </button>
                  )
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;