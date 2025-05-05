import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getLemmaQuestions = async (setQuestionsGroups, setQuestionsGroupsCopy,  setLoading) => {
    
    setLoading(true)

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

        setLoading(false)

    } catch (error) {
        setQuestionsGroups([])
        setQuestionsGroupsCopy([])
        setLoading(false)
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLemmaQuestions