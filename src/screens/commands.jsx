import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AddCommand from "../components/commands/addcommand"
import RemCommand from "../components/commands/remcommand"
import EditCommand from "../components/commands/editcommand"
import filter from "../functions/outhers/filter"
import { AppContext } from "../contexts/app_context"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import api_midia from "../server/api_midia"
import LoadingCustom from "../components/others/loadingCustom"


const Commands = () => {

    const [commandsCopy, setCommandsCopy] = useState([])
    const [commandSelected, setCommandSelected] = useState(null)
    const [message, setMessage] = useState("")
    const { loading, setLoading, setTabNumber, commands, setCommands } = useContext(AppContext)


    useEffect(() => {
        setCommandsCopy(commands)
        setTabNumber(3)
    }, [setLoading, setTabNumber, commands, setCommands])

    return (
        <div className="d-flex h-100 position-relative">
            <div className="border-end rounded-start-4 border-1 border-info p-2 bg-white w-25">
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <div className="d-flex gap-2 w-100">
                            <h1 className="fs-4 display-6 m-0 fw-bold p-0 mt-auto mb-auto w-100">Comando de voz</h1>
                        </div>

                        <button className="btn btn-info btn-shadow text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addcommand">
                            <i className="fas fa-plus"></i>
                        </button>

                        <AddCommand setCommandSelected={setCommandSelected} setCommands={setCommands} setCommandsCopy={setCommandsCopy} setLoading={setLoading} setMessage={setMessage} />
                   
                    </div>
                    <input onChange={(e) => filter(e.target.value, commands, setCommandsCopy, false)} type="text" placeholder="busque comandos pelo nome..." className="form-control mt-2 border-info" />
                    <div className="overflow-auto mt-3 position-relative lemma-list">
                        {
                            commandsCopy.length > 0 ?
                                (
                                    commandsCopy.map((command) => (
                                        <div onClick={() => setCommandSelected(command)} key={command.id} className={commandSelected?.id === command.id ? "btn btn-info text-white text-start mb-1 w-100" : "btn btn-outline-info text-start mb-1 w-100"}>
                                            <h1 className="display-4 text-break fs-4 mt-auto mb-auto">{command.name}</h1>
                                        </div>
                                    ))
                                )
                                :
                                (
                                    <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
                                        {
                                            loading ?
                                                (
                                                    <div>
                                                        {
                                                            message.length === 0 && <Loading loading={loading} />
                                                        }
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div>
                                                        <i class="fas fa-inbox text-info"></i>
                                                        <h1 className="display-5 fs-5 p-0 m-0">Sem comandos para listar</h1>
                                                        <small>adicione um comando a lista</small>
                                                    </div>
                                                )
                                        }
                                    </div>
                                )
                        }

                        {commands.length > 0 && (<Link to={'/questions/sobre comandos de voz/comandos'} role="button" className="btn btn-outline-info position-absolute rounded-pill fw-bold bottom-0 end-0">Ir as perguntas</Link>)}

                    </div>
                </div>
            </div>
            <div className="p-2 bg-white w-75">
                <div className="d-flex gap-2">
                    <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Comando de voz selecionado</h2>
                    {
                        commandSelected &&
                        (
                            <div className="d-flex gap-2">
                                <button className="btn btn-shadow btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editcommand"> <i className="fas fa-edit"></i></button>
                                <EditCommand commandId={commandSelected?.id} commandSelected={commandSelected} setCommandSelected={setCommandSelected} setCommandsCopy={setCommandsCopy} setLoading={setLoading} setCommands={setCommands} setMessage={setMessage} />
                                <button className="btn btn-shadow btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remcommand"> <i className="fas fa-trash"></i></button>
                                <RemCommand commandId={commandSelected?.id} setCommandSelected={setCommandSelected} setCommandsCopy={setCommandsCopy} setCommands={setCommands} setLoading={setLoading} setMessage={setMessage} />
                            </div>
                        )
                    }
                </div>

                <div>
                    {
                        commandSelected ?
                            (
                                <div className="d-flex gap-2 position-relative">
                                    <div className="w-75 position-relative">
                                        <h2 className="text-break w-75">{commandSelected.name}</h2>
                                        <textarea className="form-control display-4 textarea h-75 border-white" readOnly value={commandSelected.description} />
                                        <audio className="position-absolute border-info border rounded-pill text-info bottom-0 start-50 translate-middle-x w-100" controls src={api_midia(commandSelected.sound)} />
                                    </div>
                                    {
                                        commandSelected.demonstration ?
                                            (
                                                <img className="w-50 border mt-4 rounded-4 image-demonstration" src={api_midia(commandSelected.demonstration)} alt="Prévia" />
                                            )
                                            :
                                            (
                                                <img className="w-50 border mt-4 rounded-4 image-demonstration" src='/noImage.png' alt="Prévia" />
                                            )
                                    }

                                </div>
                            )
                            :
                            (
                                <div className="d-flex h-100 flex-column pt-5 justify-content-center align-items-center">
                                    <i className="fas fa-tasks text-info pt-5 mt-5 fs-1"></i>
                                    <h1 className="display-5 fs-5">Nenhum comando selecionado ainda</h1>
                                </div>
                            )
                    }
                </div>
                {
                    message.length > 0 && <LoadingCustom message={message} loading={loading} />
                }
                <ToastContainer position="bottom-right" />
            </div>
        </div>
    )
}

export default Commands