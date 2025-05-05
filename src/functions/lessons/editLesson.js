import api from "../../server/api"
import getLessons from "./getLessons"


const editLesson = async (e, lessonId, content, body,  setLesson, setLessons, setLessonsCopy, moduleId,  setLoading) => {
    setLoading(true)
    e.preventDefault()
    try {
        const lesson_edited = await api.put(`/edit/a/lesson/${lessonId}`, { content, body })
        if (lesson_edited.status === 200) {
            await getLessons(moduleId, setLessons, setLessonsCopy, setLoading)
            setLesson(lesson_edited.data)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default editLesson