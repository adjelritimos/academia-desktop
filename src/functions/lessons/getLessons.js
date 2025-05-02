import api from "../../server/api"

const getLessons = async (moduleId, setLessons, setLessonsCopy) => {

    try {
        const lessons = await api.get(`/get/all/lessons/of/module/${moduleId}`)
        if (lessons.status === 200) {
            setLessons(lessons.data)
            setLessonsCopy(lessons.data)
        }

        else {
            setLessons([])
            setLessonsCopy([])
        }
    } catch (error) {
        setLessons([])
        setLessonsCopy([])
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLessons