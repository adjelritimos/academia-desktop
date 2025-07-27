import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLessons from "./getLessons"


const addLesson = async (e, content, body, moduleId, setLessons, setLessonSelecetd,  setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_lesson = await api.post('/add/a/lesson', { content, body, moduleId })
        if (new_lesson.status === 200) {
            await getLessons(setLessons, setLoading)
            setLessonSelecetd(new_lesson.data)
        }
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, a lição não foi adicionado')
        else
            errorMessage('Ocorreu um erro ao tentar adicionar a lição.')
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLesson