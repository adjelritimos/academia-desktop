import api from "../../server/api"

const getLemmaQuestions = async (setQuestionsGroups, setQuestionsGroupsCopy) => {

    try {

        const lemmas = await api.get('/get/all/question/group/lemmas')

        if (lemmas.status === 200) {
            setQuestionsGroups(lemmas.data)
            setQuestionsGroupsCopy(lemmas.data)
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

export default getLemmaQuestions