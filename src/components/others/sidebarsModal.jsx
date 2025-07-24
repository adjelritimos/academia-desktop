import { GrHomeRounded } from "react-icons/gr"
import { LuUsers, LuFileMinus, LuFileQuestion } from "react-icons/lu"
import { RiBookShelfLine } from "react-icons/ri"
import { LiaPraySolid } from "react-icons/lia"
import { IoMdMenu } from "react-icons/io"
import { MdOutlineRecordVoiceOver, MdOutlineClass } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const SidebarModal = ( {tab} ) => {

    const navigate = useNavigate()

    const navigateTo = (route)=> {

        navigate(route)
    }



    return (
        <div className="rounded-end-4" data-bs-dismiss="offcanvas">
            <div className="offcanvas h-100 slideBar rounded-end-4" id="sidebar">
                <div className="gap-2 d-flex p-2">
                    <img className="logo" src="/logo.png" alt="academia" />
                    <h1 className="display-6 fs-5 mt-auto mb-auto">Academia Evangelística</h1>
                </div>
                <div className="offcanvas-body p-1">
                    <div className="d-flex flex-column gap-2">

                        <button data-bs-toggle="offcanvas" data-bs-target="#sidebar" className="btn text-start">
                            <IoMdMenu className="mt-auto mb-auto" /> Menu
                        </button>

                        <button onClick={()=> navigateTo('dashboards')} data-bs-dismiss="offcanvas" className={tab === 1 ? "btn bg-white text-start" : "btn text-start"}>
                            <GrHomeRounded className="mt-auto mb-auto"  /> Painel administrativo
                        </button>

                        <button onClick={()=> navigateTo('members')} data-bs-dismiss="offcanvas" className={tab === 2 ? "btn bg-white text-start" : "btn text-start"}>
                            <LuUsers /> Membros
                        </button>

                        <button onClick={()=> navigateTo('commands')} data-bs-dismiss="offcanvas" className={tab === 3 ? "btn bg-white text-start" : "btn text-start"}>
                            <MdOutlineRecordVoiceOver /> Comando de voz
                        </button>

                        <button onClick={()=> navigateTo('lemmas')} data-bs-dismiss="offcanvas" className={tab === 4 ? "btn bg-white text-start" : "btn text-start"}>
                            <LuFileMinus /> Lemas
                        </button>

                        <button onClick={()=> navigateTo('ativities')} data-bs-dismiss="offcanvas" className={tab === 5 ? "btn bg-white text-start" : "btn text-start"}>
                            <LiaPraySolid /> Atividades
                        </button>

                        <button onClick={()=> navigateTo('contents')} data-bs-dismiss="offcanvas" className={tab === 6 ? "btn bg-white text-start" : "btn text-start"}>
                            <RiBookShelfLine /> Módulos das lições
                        </button>

                        <button onClick={()=> navigateTo('classes')} data-bs-dismiss="offcanvas" className={tab === 7 ? "btn bg-white text-start" : "btn text-start"}>
                            <MdOutlineClass /> Aulas
                        </button>

                        <button onClick={()=> navigateTo('questions')} data-bs-dismiss="offcanvas" className={tab === 8 ? "btn bg-white text-start" : "btn text-start"}>
                            <LuFileQuestion /> Perguntas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarModal