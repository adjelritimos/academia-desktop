import { useState } from "react"
import addcommand from "../../functions/commands/addcommand"
import AudioRecorder from "../recordsounds/records"

const AddCommand = (props) => {

    const [name, setname] = useState('')
    const [description, setDescription] = useState('')
    const [demontration, setDemonstration] = useState(null)
    const [audioURL, setAudioURL] = useState(null)
    const [error, setError] = useState('')
    const [preview, setPreview] = useState(null)

    const handleFileChange = (e) => {
        
        const file = e.target.files[0]

        if (file) {
            setDemonstration(file)
            const objectUrl = URL.createObjectURL(file)
            setPreview(objectUrl)
        }
    }


    const IsError = () => {
        if (!isCheck())
            setError('Preecha o formulario devidamente')
        setTimeout(() => {
            setError('')
        }, 3000)
    }


    const isCheck = () => {
        const validname = typeof name === 'string' && name.trim().length > 0
        const validdescription = typeof description === 'string' && description.trim().length > 0


        return validname && validdescription && demontration !== null
    }


    return (
        <div className="modal fade" id="addcommand" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => addcommand(e, name, description, demontration, audioURL, props.setCommands, props.setCommandsCopy, props.setCommandSelected)} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Novo comandos de voz</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="name">Nome do comando</label>
                            <input value={name} maxLength={40} onChange={(e) => setname(e.target.value)} type="text" placeholder="Qual a pergunta do lema" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-0">
                            <label htmlFor="answer">Descrição</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5"></textarea>
                        </div>

                        <div className="mb-0">
                            <label htmlFor="answer">Demosntração</label>
                            {
                                preview ?
                                    (
                                        <div className="position-relative text-center">
                                            <button onClick={() =>{ setDemonstration(null); setPreview(null)} } type="button" aria-label="Close" className='btn btn-close bg-danger rounded-circle position-absolute top-0 start-100 translate-middle'></button>
                                            <img className="w-75 rounded" src={preview} alt="demonstration" />
                                        </div>
                                    )
                                    :
                                    (
                                        <input className="form-control" onChange={handleFileChange} accept="image/*" type="file" />
                                    )
                            }

                        </div>

                        <label className="mt-2" htmlFor="answer">Carregue ou grava um audio</label>
                        <div className="mb-2 border border-info rounded p-2">
                            <AudioRecorder question={name} audioURL={audioURL} setAudioURL={setAudioURL} />
                        </div>

                    </div>
                    <div className="modal-footer border-white mt-0 mb-0 pb-0 pt-0">
                        <button onClick={IsError} type={isCheck() ? "submit" : "button"} className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss={isCheck() ? "modal" : ""}>adicionar</button>
                    </div>
                    <small className="text-center text-danger fw-bold mb-2">{error}</small>
                </form>
            </div>
        </div>
    )
}

export default AddCommand