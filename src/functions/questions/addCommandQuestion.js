import api from "../../server/api"
import getCommandQuestions from "./getCommandQuestions"



const addCommandQuestion = async (e, question, correct_answer, commandId, options,setQuestionsGroups, setQuestionsGroupsCopy,  setCommandSelected) => {
    e.preventDefault()
    try {
        const new_question = await api.post('/add/a/command/question', { question, correct_answer, commandId, options })
        if (new_question.status === 200) {
            await getCommandQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            setCommandSelected(new_question.data)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addCommandQuestion