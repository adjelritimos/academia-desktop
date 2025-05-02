import { useEffect, useState } from "react"
import editQuestion from "../../functions/questions/editquestion"

const EditQuestion = (props) => {
    const [question, setQuestion] = useState(props.questionSelected?.question)
    const [correct_answer, setAnswer] = useState(props.questionSelected?.correct_answer)
    const [options, setOptions] = useState(props.questionSelected?.answers)
    const [error, setError] = useState('')

    const isCheck = () => {
        const validQuestion = typeof question === 'string' && question.trim().length > 0
        const validAnswer = typeof correct_answer === 'string' && correct_answer.trim().length > 0
        return validQuestion && validAnswer
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...options]
        newOptions[index].answer = value
        setOptions(newOptions)
        console.log(newOptions)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!isCheck()) {
            setError('Preencha o formulário devidamente')
            setTimeout(() => setError(''), 3000)
            return
        }

        await editQuestion(e, question, correct_answer, props.questionId, options, props.setQuestionsGroups, props.setQuestionsGroupsCopy, props.questionSelected, props.setQuestionSelected, props.what)
    }

    useEffect(()=> {
        setQuestion(props.questionSelected?.question)
        setAnswer(props.questionSelected?.correct_answer)
        setOptions(props.questionSelected?.answers)
    }, [props.questionSelected])

    return (
        <div className="modal fade" id="editquestion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form className="modal-content" onSubmit={handleSubmit}>
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Editar questão</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Pergunta</label>
                            <input maxLength={255} required value={question} onChange={(e) => setQuestion(e.target.value)} type="text" placeholder="Digite a pergunta" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="answer">Resposta correta</label>
                            <textarea required maxLength={500} value={correct_answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Digite a resposta aqui" className="form-control border-info mt-1" rows="5" />
                        </div>

                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <label className="mt-auto mb-auto">Respostas alternativas erradas</label>
                            </div>
                            <div>
                                {options.map((option, index) => (
                                    <input key={index} className="form-control border-info mt-1" value={option.answer} onChange={(e) => handleOptionChange(index, e.target.value)} placeholder={`Opção ${index + 1}`}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer text-center border-white mt-0 pb-0 mb-0 pt-0">
                        <button type="submit" data-bs-dismiss="modal" className="btn btn-info text-white w-100 rounded-pill fw-bold">Salvar</button>
                    </div>
                    <small className="text-center fw-bold mb-2 text-danger">{error}</small>
                </form>
            </div>
        </div>
    )
}

export default EditQuestion