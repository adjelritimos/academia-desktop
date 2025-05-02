import api from "../../server/api"
import getLessons from "./getLessons"


const editLesson = async (e, lessonId, content, body, lesson,  setLesson, setLessons, setLessonsCopy, moduleId) => {
    e.preventDefault()
    try {
        const new_lesson = await api.put(`/edit/a/lesson/${lessonId}`, { content, body })
        if (new_lesson.status === 200) {
            lesson.content = content
            lesson.body = body
            await getLessons(moduleId, setLessons, setLessonsCopy)
            setLesson(lesson)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default editLesson