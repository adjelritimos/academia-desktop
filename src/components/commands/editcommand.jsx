import { useEffect, useState } from "react"
import editCommand from "../../functions/commands/editcommand"


const EditCommand = (props) => {

    const [name, setname] = useState(props.commandSelected?.name)
    const [description, setDescription] = useState(props.commandSelected?.description)


    useEffect(() => {
        setname(props.commandSelected?.name)
        setDescription(props.commandSelected?.description)
    }, [props.commandSelected])


    return (
        <div className="modal fade" id="editcommand" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Editar comandos de voz</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Nome do comando</label>
                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Qual a pergunta do lema" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-0">
                            <label htmlFor="answer">Descrição</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5"></textarea>
                        </div>

                        <div className="mb-0">
                            <label htmlFor="answer">Demosntração</label>
                            <textarea placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5"></textarea>
                        </div>

                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button onClick={() => editCommand(props.commandId, props.commandSelected, props.setCommandSelected, name, description, props.setCommands, props.setCommandsCopy)} type="button" className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss="modal">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCommand