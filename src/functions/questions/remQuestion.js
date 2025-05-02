import api from "../../server/api"
import getCommandQuestions from "./getCommandQuestions"
import getLemmaQuestions from "./getLemmaQuestions"
import getLessonQuestion from "./getLessonQuestion"


const remQuestion = async (questionId, setQuestionsGroups, setQuestionsGroupsCopy, setQuestionSelected, what) => {
    try {

        const removed_lemma = await api.delete(`/delete/a/question/${questionId}`)

        if (removed_lemma.status === 200) {
            if (what.includes('lema'))
                await getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            else if (what.includes('comandos'))
                await getCommandQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            else
                await getLessonQuestion(setQuestionsGroups, setQuestionsGroupsCopy)
            
            setQuestionSelected(null)
        }

    } catch (error) {
        console.log('Erro: ', error)
    }
}

export default remQuestion