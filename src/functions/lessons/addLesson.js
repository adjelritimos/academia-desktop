import api from "../../server/api"
import getLessons from "./getLessons"


const addLesson = async (e, content, body, moduleId, setLessons, setLessonsCopy, setLessonSelecetd) => {
    e.preventDefault()
    try {
        const new_lesson = await api.post('/add/a/lesson', { content, body, moduleId })
        if (new_lesson.status === 200) {
            await getLessons(moduleId, setLessons, setLessonsCopy)
            setLessonSelecetd(new_lesson.data)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLesson