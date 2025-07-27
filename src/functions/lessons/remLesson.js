import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLessons from "./getLessons"


const remLesson = async (lessonId, setLesson, setLessons, setLoading) => {
    setLoading(true)
    try {

        const removed_lesson = await api.delete(`/delete/a/lesson/${lessonId}`)
        if (removed_lesson.status === 200){
            await getLessons(setLessons, setLoading)
            setLesson(null)
        }

    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, a lição não foi removida')
        else
            errorMessage('Ocorreu um erro ao tentar remover a lição.')
        console.log('Erro: ', error)
    }
}

export default remLesson