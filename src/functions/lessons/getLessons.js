import api from "../../server/api"

const getLessons = async (moduleId, setLessons, setLessonsCopy,  setLoading) => {
    
    setLoading(true)
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

        setLoading(false)
    } catch (error) {
        setLessons([])
        setLessonsCopy([])
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLessons