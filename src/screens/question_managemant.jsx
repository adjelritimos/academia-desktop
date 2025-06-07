import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import AddQuestion from "../components/questions/addquestions"
import getLemmaQuestions from "../functions/questions/getLemmaQuestions"
import RemQuestion from "../components/questions/remquestion"
import EditQuestion from "../components/questions/editquestion"
import filter from "../functions/outhers/filter"
import getCommandQuestions from "../functions/questions/getCommandQuestions"
import getLessonQuestion from "../functions/questions/getLessonQuestion"
import filterLessons from "../functions/outhers/filterlesson"
import { LoadingContext } from "../contexts/contextLoading"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import goBack from "../functions/outhers/goBack"

const QuestionManagemant = () => {

    const { what } = useParams()
    const [questionsGroups, setQuestionsGroups] = useState([])
    const [questionsGroupsCopy, setQuestionsGroupsCopy] = useState([])
    const [lessonSelected, setLessonSelected] = useState(null)
    const [questionSelected, setQuestionSelected] = useState(null)
    const { loading, setLoading } = useContext(LoadingContext)


    useEffect(() => {
        if (what.includes('lema'))
            getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
        else if (what.includes('comandos'))
            getCommandQuestions(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
        else
            getLessonQuestion(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
    }, [what, setLoading])

    return (
        <div className="d-flex gap-2 flex-column p-4 vh-100" >

            <div className="d-flex gap-2 bg-white rounded p-2">
                <button onClick={goBack} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white" role="button"><i className="fas fa-arrow-left"></i></button>
                <h1>Perguntas {what}</h1>
            </div>

            <div className="d-flex gap-1">
                <div className="rounded-2 border border-1 border-info p-2 bg-white w-25 h-100">
                    <div className="d-flex flex-column">
                        <div className="d-flex">
                            <h1 className="fs-4 display-6 m-0 p-0 w-100">Perguntas</h1>
                            {
                                questionsGroups.length > 0 &&
                                (
                                    <div className="dropdown">
                                        <button className="btn btn-info text-white rounded-circle" data-bs-toggle={lessonSelected ? "modal" : "dropdown"} data-bs-target="#addquestion">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                        <ul className={lessonSelected ? "visually-hidden" : "dropdown-menu alert alert-danger p-0"}>
                                            <li><p className="dropdown-item p-1 alert alert-danger fw-bold m-0">Deves selecionar {what.includes('lema') ? "um lema" : what.includes('comandos') ? 'um comando' : 'uma lição'} para assossiar uma pergunta</p></li>
                                        </ul>
                                        <AddQuestion setLoading={setLoading} what={what} id={lessonSelected?.id} elementSelected={lessonSelected} setQuestionSelected={setQuestionSelected} setLessonSelected={setLessonSelected} setQuestionsGroups={setQuestionsGroups} setQuestionsGroupsCopy={setQuestionsGroupsCopy} />
                                    </div>
                                )
                            }
                        </div>
                        <input onChange={(e) => { what.includes('lema') ? filter(e.target.value, questionsGroups, setQuestionsGroupsCopy, what.includes('lema')) : what.includes('comandos') ? filter(e.target.value, questionsGroups, setQuestionsGroupsCopy, what.includes('lema')) : filterLessons(e.target.value, questionsGroups, setQuestionsGroupsCopy) }} type="text" placeholder="busque perguntas" className="form-control mt-2 border-info" />
                        <div className="overflow-auto accordion accordion-flush mt-3 lesson-list">
                            {
                                questionsGroupsCopy.length > 0 ?
                                    (
                                        questionsGroupsCopy.map((values) => (
                                            <div onClick={() => setLessonSelected(values)} key={values.id} className={lessonSelected?.id === values.id ? "btn p-0 rounded bg-white border border-info text-start mb-1 w-100" : "btn p-0 btn-outline-light border-info border-1 text-start mb-1 w-100"}>
                                                <button className={lessonSelected?.id === values.id ? "accordion-button text-break rounded btn collapsed p-1 bg-info text-white fw-bold  btn-info text-start mb-1 w-100" : "accordion-button text-break p-1 rounded btn collapsed btn-outline-info text-start mb-1 w-100"} type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseOne" + values.id} aria-expanded="false" aria-controls="flush-collapseOne">
                                                    {values.question || values.name || values.content}
                                                </button>

                                                <div id={"flush-collapseOne" + values.id} className="accordion-collapse p-1 collapse" data-bs-parent="#accordionFlushExample">
                                                    {
                                                        values.questions.map((question) => (
                                                            <div onClick={() => setQuestionSelected(question)} className={questionSelected?.id === question.id ? "btn p-1 rounded btn-info text-white fw-bold text-start mb-1 w-100" : "btn p-1 btn-outline-info text-start mb-1 w-100"}> {question.question} </div>
                                                        ))
                                                    }

                                                </div>

                                            </div>
                                        ))
                                    )
                                    :
                                    (
                                        <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
                                            {
                                                loading ?
                                                    (
                                                        <Loading loading={loading} />
                                                    ) :
                                                    (
                                                        <div>
                                                            <i class="fas fa-inbox text-info"></i>
                                                            <h1 className="display-5 fs-5">Nada para listar</h1>
                                                            <small> {what.includes('lema') ? "Precisas de adicionar pelo menos um lema" : what.includes('comandos') ? "Precisas de adicionar pelo menos um comando de voz" : "Precisas de adicionar pelo menos uma lição"} </small>
                                                        </div>
                                                    )}

                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className="rounded-2 border border-1 border-info p-2 bg-white w-75">
                    <div className="d-flex gap-2">
                        <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Pergunta selecionada</h2>
                        {
                            questionSelected &&
                            (
                                <div className="d-flex gap-2">
                                    <button className="btn btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editquestion"> <i className="fas fa-edit"></i></button>
                                    <EditQuestion setLoading={setLoading} what={what} questionId={questionSelected?.id} questionSelected={questionSelected} setQuestionsGroups={setQuestionsGroups} setQuestionsGroupsCopy={setQuestionsGroupsCopy} setQuestionSelected={setQuestionSelected} />
                                    <button className="btn btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remquestion"> <i className="fas fa-trash"></i></button>
                                    <RemQuestion setLoading={setLoading} what={what} questionId={questionSelected?.id} setQuestionsGroups={setQuestionsGroups} setQuestionsGroupsCopy={setQuestionsGroupsCopy} setQuestionSelected={setQuestionSelected} />
                                </div>
                            )
                        }
                    </div>

                    <div className="questionarea-height overflow-auto">
                        {
                            questionSelected ?
                                (
                                    <div className="mx-auto p-2 rounded">
                                        <h2>{questionSelected.question}</h2>

                                        <label htmlFor="alert">Resposta correta</label>
                                        <div className="alert text-break alert-success" role="alert">
                                            {questionSelected.correct_answer}
                                        </div>

                                        <label htmlFor="alert">Respostas alternativas erradas</label>
                                        <div className="alert alert-danger" role="alert">
                                            {questionSelected.answers.map((option) => (<p className="text-break" key={option.id}>{option.answer}</p>))}
                                        </div>

                                    </div>
                                )
                                :
                                (
                                    <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
                                        <i class="fas fa-tasks text-info fs-1"></i>
                                        <h1 className="display-5 fs-5">Nenhuma pergunta selecionada ainda</h1>
                                    </div>
                                )
                        }
                    </div>

                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default QuestionManagemant