import api from "../../server/api"

const getCommandQuestions = async (setQuestionsGroups, setQuestionsGroupsCopy,  setLoading) => {

    setLoading(true)

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

        setLoading(false)
    } catch (error) {
        setQuestionsGroups([])
        setQuestionsGroupsCopy([])
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getCommandQuestions