import api from "../../server/api"

const getLessonQuestion = async (setQuestionsGroups, setQuestionsGroupsCopy,  setLoading) => {

    setLoading(true)

    try {

        const lessons = await api.get('/get/all/question/group/lessons')

        if (lessons.status === 200) {
            setQuestionsGroups(lessons.data)
            setQuestionsGroupsCopy(lessons.data)
        }

        else {
            setQuestionsGroups([])
            setQuestionsGroupsCopy([])
        }

        setLoading(false)

    } catch (error) {
        setQuestionsGroups([])
        setQuestionsGroupsCopy([])
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLessonQuestion