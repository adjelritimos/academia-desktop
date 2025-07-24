import { GrHomeRounded } from "react-icons/gr"
import { Tooltip, Whisper } from 'rsuite'
import { LuUsers, LuFileMinus, LuFileQuestion } from "react-icons/lu"
import { RiBookShelfLine } from "react-icons/ri"
import { LiaPraySolid } from "react-icons/lia"
import { IoMdMenu } from "react-icons/io"
import { MdOutlineRecordVoiceOver, MdOutlineClass } from "react-icons/md"
import { Link } from "react-router-dom"
import SidebarModal from "./sidebarsModal"



const SideBars = ({ tab }) => {

    return (
        <div className="d-flex flex-column gap-2 p-1">

            <SidebarModal tab={tab} />

            <button data-bs-toggle="offcanvas" data-bs-target="#sidebar" className="btn">
                <IoMdMenu />
            </button>

            <Whisper speaker={<Tooltip>Painel administrativo</Tooltip>}>
                <Link to={'dashboards'} className={tab === 1 ? "btn bg-white" : "btn"}>
                    <GrHomeRounded />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Membros</Tooltip>}>
                <Link to={'members'} className={tab === 2 ? "btn bg-white" : "btn"}>
                    <LuUsers />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Comandos</Tooltip>}>
                <Link to={'commands'} className={tab === 3 ? "btn bg-white" : "btn"}>
                    <MdOutlineRecordVoiceOver />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Lemas</Tooltip>}>
                <Link to={'lemmas'} className={tab === 4 ? "btn bg-white" : "btn"}>
                    <LuFileMinus />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Atividades</Tooltip>}>
                <Link to={'ativities'} className={tab === 5 ? "btn bg-white" : "btn"}>
                    <LiaPraySolid />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Conteúdos</Tooltip>}>
                <Link to={'contents'} className={tab === 6 ? "btn bg-white" : "btn"}>
                    <RiBookShelfLine />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Aulas</Tooltip>}>
                <Link to={'classes'} className={tab === 7 ? "btn bg-white" : "btn"}>
                    <MdOutlineClass />
                </Link>
            </Whisper>

            <Whisper speaker={<Tooltip>Perguntas</Tooltip>}>
                <Link to={'questions'} className={tab === 8 ? "btn bg-white" : "btn"}>
                    <LuFileQuestion />
                </Link>
            </Whisper>

        </div>
    )
}

export default SideBars