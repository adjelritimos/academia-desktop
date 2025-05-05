import { useEffect, useState } from "react"
import editLesson from "../../functions/lessons/editLesson"


const EditLesson = (props) => {

    const [content, setContet] = useState(props.lesson?.content)
    const [body, setBody] = useState(props.lesson?.body)
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

    useEffect(()=> {
        setBody(props.lesson?.body)
        setContet(props.lesson?.content)
    }, [props.lesson])


    return (
        <div className="modal fade" id="editlesson" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <form onSubmit={(e)=> editLesson(e, props.lesson.id, content, body,  props.setLessonSelected, props.setLessons, props.setLessonsCopy, props.moduleId, props.setLoading)} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Editar a lissão</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <small className="text-center text-danger fw-bold fs-3"> {error} </small>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="question">Tema ou assunto</label>
                            <input type="text" value={content} onChange={(e)=> setContet(e.target.value)} placeholder="Digite o tema ou o assunto" className="form-control border-info mt-1" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="answer">Corpo do assunto</label>
                            <textarea value={body} onChange={(e)=> setBody(e.target.value)} placeholder="Digite toda a matéria sobre o assunto" className="form-control border-info mt-1" rows="12"></textarea>
                        </div>
                     
                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button onClick={IsError} type={ isCheck() ? "submit" : "button"} className="btn btn-info text-white rounded-pill fw-bold" data-bs-dismiss={ isCheck() ? "modal" : ""}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditLesson