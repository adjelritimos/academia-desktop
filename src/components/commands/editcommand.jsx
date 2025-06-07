import { useEffect, useState } from "react"
import editCommand from "../../functions/commands/editcommand"
import AudioRecorder from "../recordsounds/records"
import api_midia from "../../server/api_midia"


const EditCommand = (props) => {

    const [name, setname] = useState(props.commandSelected?.name)
    const [description, setDescription] = useState(props.commandSelected?.description)
    const [demonstration, setDemonstration] = useState(`http://localhost:5349/admin${props.commandSelected?.demonstration}`)
    const [audioURL, setAudioURL] = useState(`http://localhost:5349/admin${props.commandSelected?.sound}`)
    const [preview, setPreview] = useState(props.commandSelected.demonstration ? `http://localhost:5349/admin${props.commandSelected?.demonstration}` : '/noImage.png')
    const [isRecording, setIsRecording] = useState(false)

    const handleFileChange = (e) => {

        const file = e.target.files[0]
        if (file) {
            setDemonstration(file)
            const objectUrl = URL.createObjectURL(file)
            setPreview(objectUrl)
        }

    }

    useEffect(() => {

        setname(props.commandSelected?.name)
        setDescription(props.commandSelected?.description)
        setDemonstration(api_midia(props.commandSelected?.demonstration))
        setPreview(props.commandSelected?.demonstration ? api_midia(props.commandSelected?.demonstration) : '/noImage.png')
        setAudioURL(api_midia(props.commandSelected?.sound))

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
                            <div >
                                {
                                    demonstration && preview ?
                                        (
                                            <div className="position-relative text-center">
                                                <button onClick={() => {setDemonstration(null); setPreview(null)}} type="button" aria-label="Close" className='btn btn-close bg-danger rounded-circle position-absolute top-0 start-100 translate-middle'></button>
                                                <img className="w-75 rounded" src={preview} alt="demonstration" />
                                            </div>
                                        )
                                        :
                                        (
                                            <input className="form-control" onChange={handleFileChange} accept="image/*" type="file" />
                                        )
                                }
                            </div>
                        </div>

                        <label className="mt-2" htmlFor="answer">Carregue ou grava um audio</label>
                        <div className="mb-2 border border-info rounded p-2">
                            <AudioRecorder setIsRecording={setIsRecording} question={name} audioURL={audioURL} setAudioURL={setAudioURL} />
                        </div>

                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button disabled={isRecording} onClick={() => {editCommand(props.commandId, props.setCommandSelected, name, description, demonstration, audioURL, props.setCommands, props.setCommandsCopy,  props.setLoading); props.setMessage("o comando está sendo editado")}} type="button" className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss="modal">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCommand