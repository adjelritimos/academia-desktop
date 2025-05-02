import { useState } from "react"
import addLemma from "../../functions/lemmas/addlemmas"

const AddLemmas = (props) => {

    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState('')

    const IsError = () => {
        if (!isCheck())
            setError('Preecha o formulario devidamente')
        setTimeout(() => {
            setError('')
        }, 3000)
    }


    const isCheck = () => {
        const validQuestion = typeof question === 'string' && question.trim().length > 0
        const validAnswer = typeof answer === 'string' && answer.trim().length > 0

        return validQuestion && validAnswer
    }

    return (
        <div className="modal fade" id="addlemma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => addLemma(e, question, answer, props.setLemmas, props.setLemmasCopy, props.setLemmaSelected)} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Novo lema</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Pergunta</label>
                            <input maxLength={60} required value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Qual a pergunta do lema" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="answer">Resposta</label>
                            <textarea required maxLength={500} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5" />
                        </div>

                        <div className="mb-2 border border-info rounded p-2">
                            <label htmlFor="answer">Carregue ou grava um audio</label>
                            <input type="file" placeholder="carrege audio" className="form-control border-info" />
                        </div>

                    </div>
                    <div className="modal-footer text-center border-white mt-0 pb-0 mb-0 pt-0">
                        <button onClick={IsError} type={isCheck() ? "submit" : "button"} className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss={isCheck() ? "modal" : ""}>adicionar</button>
                    </div>
                    <small className="text-center fw-bold mb-2 text-danger">{error}</small>
                </form>
            </div>
        </div>
    )
}

export default AddLemmas