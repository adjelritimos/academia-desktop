import api from "../../server/api"
import getCommandQuestions from "./getCommandQuestions"
import getLemmaQuestions from "./getLemmaQuestions"
import getLessonQuestion from "./getLessonQuestion"




const editQuestion = async (e, question, correct_answer, questionId, options, setQuestionsGroups, setQuestionsGroupsCopy, questionSelected, setQuestionSelected, what ) => {

    e.preventDefault()

    try {
        const edited_question = await api.put(`/edit/a/question/${questionId}`, { question, correct_answer, options })
        if (edited_question.status === 200) {
            questionSelected.correct_answer = correct_answer
            questionSelected.question = question
            setQuestionSelected(questionSelected)
            
            if (what.includes('lema'))
                await getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            else if (what.includes('comandos'))
                await getCommandQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            else
                await getLessonQuestion(setQuestionsGroups, setQuestionsGroupsCopy)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default editQuestion