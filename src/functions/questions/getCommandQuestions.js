import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getCommandQuestions = async (setQuestionsGroups, setQuestionsGroupsCopy, setLoading) => {

    setLoading(true)

    try {

        const commands = await api.get('/get/all/question/group/commands')

        if (commands.status === 200) {
            setQuestionsGroups(commands.data)
            setQuestionsGroupsCopy(commands.data)
            localStorage.setItem ('commandsQuestions', JSON.stringify(commands.data))
        }

        else {
            setQuestionsGroups([])
            setQuestionsGroupsCopy([])
        }

        setLoading(false)
    } catch (error) {

        const questions = localStorage.getItem('commandsQuestions')

        if (questions) {
            setQuestionsGroups(JSON.parse(questions))
            setQuestionsGroupsCopy(JSON.parse(questions))
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

export default getCommandQuestions