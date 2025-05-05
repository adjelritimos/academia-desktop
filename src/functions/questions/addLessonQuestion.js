import api from "../../server/api"
import getLessonQuestion from "./getLessonQuestion"



const addLessonQuestion = async (e, question, correct_answer, lessonId, lesson, options,setQuestionsGroups, setQuestionsGroupsCopy, setLessonSelected, setQuestionSelected, setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_question = await api.post('/add/a/lesson/question', { question, correct_answer, lessonId, options })
        if (new_question.status === 200) {
            await getLessonQuestion(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
            setQuestionSelected(new_question.data)
            setLessonSelected(lesson)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLessonQuestion