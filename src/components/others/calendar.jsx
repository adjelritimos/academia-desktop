import { useState } from 'react'

import { Calendar, Badge } from 'rsuite'

const pt_formats = {
  sunday: "Domingo",
  monday: "Segunda",
  tuesday: "Terça",
  wednesday: "Quarta",
  thursday: "Quinta",
  friday: "Sexta",
  saturday: "Sábado",
  ok: "OK",
  today: "Hoje",
  yesterday: "Ontem",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  formattedMonthPattern: "MMMM yyyy",
  formattedDayPattern: "dd MMM yyyy",
  shortDateFormat: "dd/MM/yyyy",
  shortTimeFormat: "HH:mm",
  last7Days: "Últimos 7 dias",
  now: "Agora"
}



function getTodoList(date) {

  if (!date) {

    return []

  }

  const day = date.getDate()

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ]
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' }
      ]
    default:
      return []
  }
}

function renderCell(date) {

  const list = getTodoList(date)

  if (list.length) {

    return <Badge className="calendar-todo-item-badge" />

  }

  return null
}

const Calendary = () => {

  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelect = date => {

    setSelectedDate(date)

  }

  return (
    <div className="d-flex flex-column gap-1">
      <div className="w-100 rounded-4 border">
        <Calendar compact renderCell={renderCell} onSelect={handleSelect} locale={pt_formats} />
      </div>
      <div className="w-100">
        <TodoList date={selectedDate} />
      </div>
    </div>
  )
}

const TodoList = ({ date }) => {

  const list = getTodoList(date)

  if (!list.length) {

    return null

  }

  return (
    <div className="list-altura overflow-auto">
      {list.map(item => (
        <div className="rounded border p-2 mb-1" key={item.time} index={item.time}>
          <div>{item.time}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Calendary
