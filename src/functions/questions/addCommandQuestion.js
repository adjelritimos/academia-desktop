import api from "../../server/api"
import getCommandQuestions from "./getCommandQuestions"



const addCommandQuestion = async (e, question, correct_answer, commandId, command, options,setQuestionsGroups, setQuestionsGroupsCopy,  setCommandSelected, setQuestionSelected,  setLoading) => {
  
    e.preventDefault()
    setLoading(true)

    try {
        const new_question = await api.post('/add/a/command/question', { question, correct_answer, commandId, options })
        if (new_question.status === 200) {
            await getCommandQuestions(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
            setQuestionSelected(new_question.data)
            setCommandSelected(command)
        }

    } catch (error) {
        
        setLoading(false)
        console.log('Um erro ocorrido, ', error)

    }
}
export default addCommandQuestion