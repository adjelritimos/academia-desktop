import { Link, useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import AddLesson from "../components/lessons/addlesson"
import RemLesson from "../components/lessons/remlesson"
import { useContext, useEffect, useState } from "react"
import getLessons from "../functions/lessons/getLessons"
import EditLesson from "../components/lessons/editlesson"
import filterLessons from "../functions/outhers/filterlesson"
import { LoadingContext } from "../contexts/contextLoading"
import Loading from "../components/others/loading"
import LoadingCustom from "../components/others/loadingCustom"


const Lessons = () => {

    const { module, moduleId } = useParams()
    const [lessons, setLessons] = useState([])
    const [lessonsCopy, setLessonsCopy] = useState([])
    const [lessonSelected, setLessonSelected] = useState(null)
    const [message, setMessage] = useState("")
    const { loading, setLoading } = useContext(LoadingContext)


    useEffect(() => {
        getLessons(moduleId, setLessons, setLessonsCopy, setLoading)
    }, [moduleId, setLoading])

    return (
        <div className="d-flex gap-2 flex-column h-100" >

            <div className="d-flex gap-1">
                <div className="border-end rounded-start-4 border-1 border-info p-2 bg-white lemma-list-2 w-25 h-100">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-2 bg-white rounded p-2">
                                <Link to={'/home/contents'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white" role="button"><i className="fas fa-arrow-left"></i></Link>
                                <h1 className="fs-4 display-6 m-0 p-0 w-100 mt-auto mb-auto">Lições do {module}</h1>
                            </div>

                            <button className="btn btn-shadow btn-info text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addlesson">
                                <i className="fas fa-plus"></i>
                            </button>
                            <AddLesson moduleId={moduleId} setLessons={setLessons} setLessonsCopy={setLessonsCopy} setLessonSelected={setLessonSelected} setLoading={setLoading} setMessage={setMessage} />
                        </div>
                        <input onChange={(e) => filterLessons(e.target.value, lessons, setLessonsCopy)} type="text" placeholder="busque lições por tema..." className="form-control mt-2 border-info" />
                        <div className="overflow-auto position-relative mt-3 lesson-list-1">
                            {
                                lessonsCopy.length > 0 ?
                                    (
                                        lessonsCopy.map((lesson) => (
                                            <div onClick={() => setLessonSelected(lesson)} key={lesson.id} className={lessonSelected?.id === lesson.id ? "btn btn-info text-white text-start mb-1 w-100" : "btn btn-outline-info text-start mb-1 w-100"}>
                                                <h1 className="display-4 fs-4 mt-auto mb-auto text-break">{lesson.content}</h1>
                                            </div>
                                        ))
                                    )
                                    :
                                    (
                                        <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
                                            {
                                                loading ?
                                                    (
                                                        <div>
                                                            {
                                                                message.length === 0 && <Loading loading={loading} />
                                                            }
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div>
                                                            <i class="fas fa-inbox text-info"></i>
                                                            <h1 className="display-5 fs-5 m-0 p-0">Sem liçõe para listar</h1>
                                                            <small>adicione uma lição a lista</small>
                                                        </div>
                                                    )
                                            }

                                        </div>
                                    )
                            }

                            {lessons.length > 0 && (<Link to={'/questions/sobre conteúdos/conteúdos'} role="button" className="btn btn-outline-info position-absolute rounded-pill fw-bold bottom-0 end-0">Ir as perguntas</Link>)}

                        </div>
                    </div>
                </div>
                <div className="p-2 bg-white w-75 lemma-list">
                    <div className="d-flex gap-2">
                        <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Lição selecionada</h2>
                        {
                            lessonSelected &&
                            (
                                <div className="d-flex gap-2">
                                    <button className="btn btn-shadow btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editlesson"> <i className="fas fa-edit"></i></button>
                                    <EditLesson setLoading={setLoading} setLessons={setLessons} setLessonsCopy={setLessonsCopy} moduleId={moduleId} setLessonSelected={setLessonSelected} lesson={lessonSelected} setMessage={setMessage} />
                                    <button className="btn btn-shadow btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remlesson"> <i className="fas fa-trash"></i></button>
                                    <RemLesson setLoading={setLoading} setLessonSelected={setLessonSelected} setLessonsCopy={setLessonsCopy} lesson={lessonSelected} setLessons={setLessons} moduleId={moduleId} setMessage={setMessage} />
                                </div>
                            )
                        }
                    </div>

                    <div>
                        {
                            lessonSelected ?
                                (
                                    <div className="gap-2 position-relative">
                                        <h2 className="text-break">{lessonSelected.content}</h2>
                                        <textarea className="form-control display-4 textarea lesson-list border-white" readOnly value={lessonSelected.body} />
                                    </div>
                                )
                                :
                                (
                                    <div className="text-center pt-5 h-100 d-flex flex-column justify-content-center aliament-items-center">
                                        <i class="fas fa-tasks mt-5 text-info"></i>
                                        <h1 className="display-5 fs-5">Nenhuma lição selecionada ainda</h1>
                                    </div>
                                )
                        }
                    </div>
                </div>
                {
                    message.length > 0 && <LoadingCustom message={message} loading={loading} />
                }
                <ToastContainer position="bottom-right" />
            </div>
        </div>
    )
}

export default Lessons



