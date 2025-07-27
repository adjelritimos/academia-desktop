import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLessons from "./getLessons"


const editLesson = async (e, lessonId, content, body,  setLesson, setLessons, setLoading) => {
    setLoading(true)
    e.preventDefault()
    try {
        const lesson_edited = await api.put(`/edit/a/lesson/${lessonId}`, { content, body })
        if (lesson_edited.status === 200) {
            await getLessons(setLessons, setLoading)
            setLesson(lesson_edited.data)
        }
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, a lição não foi editado')
        else
            errorMessage('Ocorreu um erro ao tentar edita a lição.')
        console.log('Um erro ocorrido, ', error)
    }
}
export default editLesson