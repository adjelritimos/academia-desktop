import { useState } from "react"
import addLesson from "../../functions/lessons/addLesson"

const AddLesson = (props) => {

    const [content, setContet] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState('')

    const IsError = () => {
        if (!isCheck())
            setError('Preecha o formulario devidamente')
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    const isCheck = () => {

        const validcontent = typeof content === 'string' && content.trim().length > 0
        const validbody = typeof body === 'string' && body.trim().length > 0

        return validcontent && validbody
    }


    return (
        <div className="modal fade" id="addlesson" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <form onSubmit={(e) => {addLesson(e, content, body, props.moduleId, props.setLessons, props.setLessonSelected, props.setLoading); props.setMessage("adicionando a lissão"); setContet(''); setBody('')}} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Nova lição</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <small className="text-center text-danger fw-bold fs-3"> {error} </small>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Tema ou assunto</label>
                            <input type="text" value={content} onChange={(e) => setContet(e.target.value)} placeholder="Digite o tema ou o assunto" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="body">Corpo do assunto</label>

                            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Digite toda a matéria sobre o assunto" className="form-control border-info mt-1" rows="12"></textarea>
                        </div>

                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button onClick={IsError} type={ isCheck() ? "submit" : "button"} className="btn btn-info text-white rounded-pill fw-bold" data-bs-dismiss={ isCheck() ? "modal" : ""}>adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddLesson