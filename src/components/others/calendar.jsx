import { useContext, useState } from 'react'
import { Calendar, Badge } from 'rsuite'
import { AppContext } from '../../contexts/app_context'

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

function getTodoList(date, classes) {

  if (!date || !classes || !Array.isArray(classes)) return []

  const selectedDate = date.toISOString().split("T")[0]

  return classes.filter(classe => classe.data?.startsWith(selectedDate)).map(classe => ({ time: "", title: `${classe.title} (aula ${classe.tytpes})` }))

}

const Calendary = () => {

  const { classes } = useContext(AppContext)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelect = date => {
    setSelectedDate(date)
  }

  const renderCell = (date) => {
    const list = getTodoList(date, classes)
    return list.length ? <Badge color='yellow' className="calendar-todo-item-badge" /> : null
  }

  return (
    <div className="d-flex flex-column gap-1">
      <div className="w-100 rounded-4 border">
        <Calendar compact renderCell={renderCell} onSelect={handleSelect} locale={pt_formats} />
      </div>
      <div className="w-100 p-2 border rounded">
        <TodoList classes={classes} date={selectedDate} />
      </div>
    </div>
  )
}

const TodoList = ({ date, classes }) => {
  const list = getTodoList(date, classes)

  if (!list.length) {
    return (
      <div className='text-center'>
        <small className='text-center w-100'>Nada para listar</small>
      </div>
    )
  }

  return (
    <div className="list-altura overflow-auto ssh">
      {list.map((item, index) => (
        <div className="rounded border bg-custom p-2 mb-1" key={index}>
          <div>{item.time}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Calendary
