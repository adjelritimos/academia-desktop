import api from "../../server/api"

const getCommandQuestions = async (setQuestionsGroups, setQuestionsGroupsCopy) => {

    try {

        const commands = await api.get('/get/all/question/group/commands')

        if (commands.status === 200) {
            setQuestionsGroups(commands.data)
            setQuestionsGroupsCopy(commands.data)
        }

        else {
            setQuestionsGroups([])
            setQuestionsGroupsCopy([])
        }

    } catch (error) {
        setQuestionsGroups([])
        setQuestionsGroupsCopy([])
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getCommandQuestions