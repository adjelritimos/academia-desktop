import api from "../../server/api"
import getCommandQuestions from "./getCommandQuestions"
import getLemmaQuestions from "./getLemmaQuestions"
import getLessonQuestion from "./getLessonQuestion"




const editQuestion = async (e, question, correct_answer, questionId, options, setQuestionsGroups, setQuestionsGroupsCopy, questionSelected, setQuestionSelected, what, setLoading ) => {

    e.preventDefault()
    setLoading(true)

    try {
        const edited_question = await api.put(`/edit/a/question/${questionId}`, { question, correct_answer, options })
        if (edited_question.status === 200) {
           
            setQuestionSelected(edited_question.data)
            
            if (what.includes('lema'))
                await getLemmaQuestions(setQuestionsGroups,  setQuestionsGroupsCopy, setLoading)
            else if (what.includes('comandos'))
                await getCommandQuestions(setQuestionsGroups,  setQuestionsGroupsCopy, setLoading)
            else
                await getLessonQuestion(setQuestionsGroups,  setQuestionsGroupsCopy, setLoading)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default editQuestion