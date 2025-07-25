import Calendary from '../components/others/calendar'
import HeaderDashBoard from '../components/others/headerdash'
import MessageRotator from '../components/others/message'
import getMessages from '../functions/outhers/getMessages'
import { Avatar, Text } from 'rsuite'
import { RiBookShelfLine } from "react-icons/ri"
import { LuUsers, LuFileMinus } from "react-icons/lu"
import { MdOutlineRecordVoiceOver, MdOutlineClass } from "react-icons/md"
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const DashBoard = () => {

  const { classes, lemmas, commands, modules, members, } = useContext(AppContext)

  return (
    <div className="">
      <div className="p-4 rounded-4 mb-4 d-flex align-items-center justify-content-between" style={{ background: '#ECF2F5' }}>
        <div>
          <h3 className="fw-bold">Academia de Treinamento Evangelístico</h3>
          <p className="text-muted">Departamento de Evangelização</p>
        </div>
        <div>
          <img src="/logo.png" alt="Illustration" style={{ width: 150 }} />
        </div>
      </div>

      <div className="row text-center mb-4">
        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100 w-100" style={{ backgroundColor: '#f1c40f' }}>
            <div className="border border-white rounded-pill d-flex">
              <Avatar className='rounded-circle border me-2'><LuUsers /></Avatar>
              <p className='fw-bold mt-auto mb-auto fs-5'>Membros</p>
            </div>
            <Avatar className='bg-white text-dark mt-3' circle size="xxl">
              {members.length + ""}
            </Avatar>
          </div>
        </div>

        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100 w-100 bg-info">
            <div className="border border-white rounded-pill d-flex">
              <Avatar className='rounded-circle border me-2'><RiBookShelfLine /></Avatar>
              <p className='fw-bold mt-auto mb-auto fs-5'>Conteúdos</p>
            </div>
            <Avatar className='bg-white text-dark mt-3' circle size="xxl">
              {modules.length + ""}
            </Avatar>
          </div>
        </div>

        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100 w-100" style={{ backgroundColor: '#e84393' }}>
            <div className="border border-white rounded-pill d-flex">
              <Avatar className='rounded-circle border me-2'><LuFileMinus /></Avatar>
              <p className='fw-bold mt-auto mb-auto fs-5'>Lemas</p>
            </div>
            <Avatar className='bg-white text-dark mt-3' circle size="xxl">
              {lemmas.length + ""}
            </Avatar>
          </div>
        </div>

        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100 w-100 bg-info">
            <div className="border border-white rounded-pill d-flex">
              <Avatar className='rounded-circle p-2 border me-1'><MdOutlineRecordVoiceOver /></Avatar>
              <p className='fw-bold mt-auto mb-auto fs-5'>Comandos</p>
            </div>
            <Avatar className='bg-white text-dark mt-3' circle size="xxl">
              {commands.length + ""}
            </Avatar>
          </div>
        </div>

        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100 w-100" style={{ backgroundColor: '#f1c40f' }}>
            <div className="border border-white rounded-pill d-flex">
              <Avatar className='rounded-circle border me-1'><MdOutlineClass /></Avatar>
              <p className='fw-bold mt-auto mb-auto fs-5'>Aulas</p>
            </div>
            <Avatar className='bg-white text-dark mt-3' circle size="xxl">
              {classes.length + ""}
            </Avatar>
          </div>
        </div>
      </div>
      <div className="mb-3 p-3 bg-white rounded-4 shadow-sm border border-info message-altura">
        <MessageRotator messages={getMessages()} />
      </div>

    </div>
  )
}


const Home = () => {

  return (
    <div className="container-fluid rounded-start-4 bg-white">
      <HeaderDashBoard />
      <div className='d-flex gap-2 overflow-auto ssh div-home'>
        <div className='w-75 h-100'>
          <DashBoard />
        </div>
        <div className='w-25 h-100'>
          <Calendary />
        </div>
      </div>
    </div>
  )
}

export default Home
