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

function getTodoList(date, classes, ativities) {
  if (!date) return []

  const selectedDate = date.toLocaleDateString('en-CA')

  const classList = Array.isArray(classes)
    ? classes
        .filter(c => c.data?.startsWith(selectedDate))
        .map(c => ({
          time: '',
          title: `${c.title} (aula ${c.tytpes})`,
          type: 'class'
        }))
    : []

  const ativityList = Array.isArray(ativities)
    ? ativities
        .filter(a => a.data?.startsWith(selectedDate))
        .map(a => ({
          time: '',
          title: `${a.title} - ${a.descricao}`,
          type: 'ativity'
        }))
    : []

  return [...classList, ...ativityList]
}

const Calendary = () => {
  const { classes, ativities } = useContext(AppContext)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelect = date => {
    setSelectedDate(date)
  }

  const renderCell = date => {

    const list = getTodoList(date, classes, ativities)

    const hasClass = list.some(item => item.type === 'class')
    const hasAtivity = list.some(item => item.type === 'ativity')

    return (
      <div className="d-flex gap-1 justify-content-center">
        {hasClass && <Badge color="yellow" />}
        {hasAtivity && <Badge color="red" />}
      </div>
    )
  }

  return (
    <div className="d-flex flex-column gap-1">
      <div className="w-100 rounded-4 border">
        <Calendar compact renderCell={renderCell} onSelect={handleSelect} locale={pt_formats} />
      </div>
      <div className="w-100 p-2 border rounded">
        <TodoList date={selectedDate} classes={classes} ativities={ativities} />
      </div>
    </div>
  )
}

const TodoList = ({ date, classes, ativities }) => {
  const list = getTodoList(date, classes, ativities)

  if (!list.length) {
    return (
      <div className="text-center">
        <small className="text-center w-100">Nada para listar</small>
      </div>
    )
  }

  return (
    <div className="list-altura overflow-auto ssh">
      {list.map((item, index) => (
        <div key={index} className={`rounded bg-custom p-2 mb-1 ${item.type === 'class' ? 'border border-start-warning border-start-4' : 'border border-start-danger border-start-4'}`}>
          <div>{item.time}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Calendary
