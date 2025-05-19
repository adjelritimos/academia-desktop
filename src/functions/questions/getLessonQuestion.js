import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getLessonQuestion = async (setQuestionsGroups, setQuestionsGroupsCopy, setLoading) => {

    setLoading(true)

    try {

        const lessons = await api.get('/get/all/question/group/lessons')

        if (lessons.status === 200) {
            setQuestionsGroups(lessons.data)
            setQuestionsGroupsCopy(lessons.data)
            localStorage.setItem('lessonsQuestions', JSON.stringify(lessons.data))
        }

        else {
            setQuestionsGroups([])
            setQuestionsGroupsCopy([])
        }

        setLoading(false)

    } catch (error) {
        const lessons = localStorage.getItem('lessonsQuestions')
        if (lessons) {
            setQuestionsGroups(JSON.parse(lessons))
            setQuestionsGroupsCopy(JSON.parse(lessons))
        }
        else {
            setQuestionsGroups([])
            setQuestionsGroupsCopy([])
        }

        setLoading(false)
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLessonQuestion