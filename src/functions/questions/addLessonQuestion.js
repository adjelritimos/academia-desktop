import api from "../../server/api"
import getLessonQuestion from "./getLessonQuestion"



const addLessonQuestion = async (e, question, correct_answer, lessonId, options,setQuestionsGroups, setQuestionsGroupsCopy,  setLessonSelected,  setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_question = await api.post('/add/a/lesson/question', { question, correct_answer, lessonId, options })
        if (new_question.status === 200) {
            await getLessonQuestion(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
            setLessonSelected(new_question.data)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLessonQuestion