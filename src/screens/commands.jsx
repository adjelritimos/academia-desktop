import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AddCommand from "../components/commands/addcommand"
import RemCommand from "../components/commands/remcommand"
import getCommands from "../functions/commands/getCommands"
import EditCommand from "../components/commands/editcommand"
import filter from "../functions/outhers/filter"


const Commands = () => {

    const [commands, setCommands] = useState([])
    const [commandsCopy, setCommandsCopy] = useState([])
    const [commandSelected, setCommandSelected] = useState(null)

    useEffect(() => {
        getCommands(setCommands, setCommandsCopy)
    }, [])

    return (
        <div className="d-flex gap-1 p-4 vh-100">
            <div className="rounded-2 border border-1 border-info p-2 bg-white w-25">
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <div className="d-flex gap-2 w-100">
                            <Link to={'/home'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white"><i className="fas fa-arrow-left"></i></Link>
                            <h1 className="fs-4 display-6 m-0 p-0 mt-auto mb-auto w-100">Comando de voz</h1>
                        </div>

                        <button className="btn btn-info text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addcommand">
                            <i className="fas fa-plus"></i>
                        </button>
                        <AddCommand setCommandSelected={setCommandSelected} setCommands={setCommands} setCommandsCopy={setCommandsCopy} />
                    </div>
                    <input onChange={(e) => filter(e.target.value, commands, setCommandsCopy, false)} type="text" placeholder="busque comandos pelo nome..." className="form-control mt-2 border-info" />
                    <div className="overflow-auto mt-3 lesson-list">
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
                                        <i class="fas fa-inbox text-info"></i>
                                        <h1 className="display-5 fs-5">Em comandos para listar</h1>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="rounded-2 border border-1 border-info p-2 bg-white w-75">
                <div className="d-flex gap-2">
                    <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Comando de voz selecionado</h2>
                    {
                        commandSelected &&
                        (
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editcommand"> <i className="fas fa-edit"></i></button>
                                <EditCommand commandId={commandSelected?.id} commandSelected={commandSelected} setCommandSelected={setCommandSelected} setCommandsCopy={setCommandsCopy} setCommands={setCommands} />
                                <button className="btn btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remcommand"> <i className="fas fa-trash"></i></button>
                                <RemCommand commandId={commandSelected?.id} setCommandSelected={setCommandSelected} setCommandsCopy={setCommandsCopy} setCommands={setCommands} />
                            </div>
                        )
                    }
                </div>

                <div>
                    {
                        commandSelected ?
                            (
                                <div className="d-flex gap-2">
                                    <div className="w-75 position-relative">
                                        <h2 className="text-break w-75">{commandSelected.name}</h2>
                                        <textarea className="form-control display-4 textarea textarea-height lemma-list border-white" readOnly value={commandSelected.description} />
                                        <audio className="position-absolute bottom-0 start-50 translate-middle-x w-100" controls src={`http://localhost:5349/admin${commandSelected.sound}`} />
                                    </div>
                                    {
                                        commandSelected.demonstration ?
                                            (
                                                <img className="w-50 border mt-4 rounded-4 image-demonstration" src={`http://localhost:5349/admin${commandSelected.demonstration}`} alt="Prévia" />
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

            </div>
        </div>
    )
}

export default Commands