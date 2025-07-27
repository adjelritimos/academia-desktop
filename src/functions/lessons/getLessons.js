import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getLessons = async (setLessons, setLoading) => {

    setLoading(true)
    try {
        const lessons = await api.get(`/get/all/lessons`)
        if (lessons.status === 200) {
            setLessons(lessons.data)
            localStorage.setItem('lessons', JSON.stringify(lessons.data))
        }

        else {
            setLessons([])
        }

        setLoading(false)
    } catch (error) {
        const _lessons = localStorage.getItem('lessons')
        if (_lessons)
            setLessons(JSON.parse(_lessons))
        else
            setLessons([])
        setLoading(false)
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLessons