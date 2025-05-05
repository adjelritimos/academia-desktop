import { useState } from "react"
import addLemmaQuestion from "../../functions/questions/addLemmaQuestion"
import addCommandQuestion from "../../functions/questions/addCommandQuestion"
import addLessonQuestion from "../../functions/questions/addLessonQuestion"

const length = (options) => {

    let count = 0
    for (const answer of options) {
        if (answer.trim().length === 0) {
            count = 0
            break
        }
        else
            count++
    }
    return count
}


const AddQuestion = (props) => {
    const [question, setQuestion] = useState('')
    const [correct_answer, setAnswer] = useState('')
    const [options, setOptions] = useState([])
    const [error, setError] = useState('')

    const isCheck = () => {
        const validQuestion = typeof question === 'string' && question.trim().length > 0
        const validAnswer = typeof correct_answer === 'string' && correct_answer.trim().length > 0
        return validQuestion && validAnswer && length(options) >= 3
    }

    const handleAddOption = () => {
        setOptions([...options, ""])
    }
    const handleRemoveOption = (index) => {
        setOptions(options.filter((option, i) => i !== index))
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...options]
        newOptions[index] = value
        setOptions(newOptions)
    }

    const handleSubmit = async (e) => {

        if (props.what.includes('lema'))
            await addLemmaQuestion(e, question, correct_answer, props.id, props.elementSelected, options, props.setQuestionsGroups, props.setQuestionsGroupsCopy, props.setLessonSelected, props.setQuestionSelected, props.setLoading)
        else if (props.what.includes('comandos'))
            await addCommandQuestion(e, question, correct_answer, props.id, props.elementSelected, options, props.setQuestionsGroups, props.setQuestionsGroupsCopy, props.setLessonSelected, props.setQuestionSelected, props.setLoading)
        else
            await addLessonQuestion(e, question, correct_answer, props.id, props.elementSelected, options, props.setQuestionsGroups, props.setQuestionsGroupsCopy, props.setLessonSelected, props.setQuestionSelected, props.setLoading)

        setQuestion('')
        setAnswer('')
        setOptions([])
    }

    const feedback = () => {

        if (!isCheck()) {
            if (length(options) < 3)
                setError('Deve ter 3 ou mais respostas alternativas')
            else
                setError('Preencha a pergunta e resposta devidamente')
            setTimeout(() => setError(''), 3000)
            return
        }

    }

    return (
        <div className="modal fade" id="addquestion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form className="modal-content" onSubmit={handleSubmit}>
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Nova pergunta</h1>
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
                                <button type="button" onClick={handleAddOption} className="btn btn-info mt-auto mb-auto text-white rounded-circle"><i className="fas fa-plus"></i></button>
                            </div>
                            <div className="mt-2">
                                {options.map((opt, index) => (
                                    <div className="position-relative">
                                        <button onClick={() => handleRemoveOption(index)} type="button" className='btn btn-close bg-danger rounded-circle position-absolute top-50 start-100 translate-middle'></button>
                                        <input key={index} className="form-control border-info mt-1" value={opt} onChange={(e) => handleOptionChange(index, e.target.value)} placeholder={`Opção ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer text-center border-white mt-0 pb-0 mb-0 pt-0">
                        <button onClick={feedback} type={isCheck() ? "submit" : "button"} data-bs-dismiss={isCheck() ? "modal" : ""} className="btn btn-info text-white w-100 rounded-pill fw-bold">Adicionar</button>
                    </div>
                    <small className="text-center fw-bold mb-2 text-danger">{error}</small>
                </form>
            </div>
        </div>
    )
}

export default AddQuestion