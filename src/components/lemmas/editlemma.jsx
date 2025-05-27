import { useEffect, useState } from "react"
import editLemma from "../../functions/lemmas/editLemma"
import AudioRecorder from "../recordsounds/records"
import api_midia from "../../server/api_midia"

const EditLemmas = (props) => {

    const [question, setQuestion] = useState(props.lemmaSelected?.question)
    const [answer, setAnswer] = useState(props.lemmaSelected?.answer)
    const [isRecording, setIsRecording] = useState(false)
    const [audioURL, setAudioURL] = useState(api_midia(props.lemmaSelected?.sound))

    const isCheck = () => {
        const validQuestion = typeof question === 'string' && question.trim().length > 0
        const validAnswer = typeof answer === 'string' && answer.trim().length > 0

        return validQuestion && validAnswer
    }

    useEffect(() => {

        setQuestion(props.lemmaSelected?.question)
        setAnswer(props.lemmaSelected?.answer)
        setAudioURL(api_midia(props.lemmaSelected?.sound))

    }, [props.lemmaSelected])

    return (
        <div className="modal fade" id="editlemma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => editLemma(e, props.lemmaSelected.id, props.setLemmaSelected, question, answer, audioURL, props.setLemmas, props.setLemmasCopy,  props.setLoading)} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Editar o lema</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Pergunta</label>
                            <input required value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Qual a pergunta do lema" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="answer">Resposta</label>
                            <textarea required value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5" />
                        </div>

                        <label htmlFor="answer">Carregue ou grava um audio</label>
                        <div className="mb-2 border border-info rounded p-2">
                            <AudioRecorder setIsRecording={setIsRecording} question={question} audioURL={audioURL} setAudioURL={setAudioURL} />
                        </div>

                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button disabled={isRecording} type="submit" className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss={isCheck() ? "modal" : ""}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditLemmas