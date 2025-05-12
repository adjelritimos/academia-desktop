import { Link, useParams } from "react-router-dom"
import AddLesson from "../components/lessons/addlesson"
import RemLesson from "../components/lessons/remlesson"
import { useContext, useEffect, useState } from "react"
import getLessons from "../functions/lessons/getLessons"
import EditLesson from "../components/lessons/editlesson"
import filterLessons from "../functions/outhers/filterlesson"
import { LoadingContext } from "../contexts/contextLoading"
import Loading from "../components/others/loading"


const Lessons = () => {

    const { module, moduleId } = useParams()
    const [lessons, setLessons] = useState([])
    const [lessonsCopy, setLessonsCopy] = useState([])
    const [lessonSelected, setLessonSelected] = useState(null)
    const { loading, setLoading } = useContext(LoadingContext)


    useEffect(() => {
        getLessons(moduleId, setLessons, setLessonsCopy, setLoading)
    }, [moduleId, setLoading])

    return (
        <div className="d-flex gap-2 flex-column p-4 vh-100" >

            <div className="d-flex gap-2 bg-white rounded p-2">
                <Link to={'/contents'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white" role="button"><i className="fas fa-arrow-left"></i></Link>
                <h1>{module}</h1>
            </div>
            <Loading loading={loading} />
            <div className="d-flex gap-1">
                <div className="rounded-2 border border-1 border-info p-2 bg-white w-25 h-100">
                    <div className="d-flex flex-column">
                        <div className="d-flex">
                            <h1 className="fs-4 display-6 m-0 p-0 w-100">Lissões</h1>
                            <button className="btn btn-info text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addlesson">
                                <i className="fas fa-plus"></i>
                            </button>
                            <AddLesson moduleId={moduleId} setLessons={setLessons} setLessonsCopy={setLessonsCopy} setLessonSelected={setLessonSelected} setLoading={setLoading} />
                        </div>
                        <input onChange={(e) => filterLessons(e.target.value, lessons, setLessonsCopy)} type="text" placeholder="busque lições por tema..." className="form-control mt-2 border-info" />
                        <div className="overflow-auto position-relative mt-3 lesson-list">
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
                                            <i class="fas fa-inbox text-info"></i>
                                            <h1 className="display-5 fs-5 m-0 p-0">Sem liçõe para listar</h1>
                                            <small>adicione uma lição a lista</small>
                                        </div>
                                    )
                            }

                            {lessons.length > 0 && (<Link to={'/questions/sobre conteúdos/conteúdos'} role="button" className="btn btn-outline-info position-absolute rounded-pill fw-bold bottom-0 end-0">Ir as perguntas</Link>)}

                        </div>
                    </div>
                </div>
                <div className="rounded-2 border border-1 border-info p-2 bg-white w-75">
                    <div className="d-flex gap-2">
                        <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Lissão selecionada</h2>
                        {
                            lessonSelected &&
                            (
                                <div className="d-flex gap-2">
                                    <button className="btn btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editlesson"> <i className="fas fa-edit"></i></button>
                                    <EditLesson setLoading={setLoading} setLessons={setLessons} setLessonsCopy={setLessonsCopy} moduleId={moduleId} setLessonSelected={setLessonSelected} lesson={lessonSelected} />
                                    <button className="btn btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remlesson"> <i className="fas fa-trash"></i></button>
                                    <RemLesson setLoading={setLoading} setLessonSelected={setLessonSelected} setLessonsCopy={setLessonsCopy} lesson={lessonSelected} setLessons={setLessons} moduleId={moduleId} />
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
                <ToastContainer position="top-center" />
            </div>
        </div>
    )
}

export default Lessons



