import api from "../../server/api"
import getLessons from "./getLessons"


const remLesson = async (lessonId, setLesson, setLessons, setLessonsCopy, moduleId) => {
    try {

        const removed_lesson = await api.delete(`/delete/a/lesson/${lessonId}`)
        if (removed_lesson.status === 200){
            await getLessons(moduleId, setLessons, setLessonsCopy)
            setLesson(null)
        }

    } catch (error) {
        console.log('Erro: ', error)
    }
}

export default remLesson