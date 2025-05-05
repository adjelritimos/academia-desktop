import api from "../../server/api"
import getLemmaQuestions from "./getLemmaQuestions"



const addLemmaQuestion = async (e, question, correct_answer, lemmaId, lemma, options,setQuestionsGroups, setQuestionsGroupsCopy,  setLemmaSelected, setQuestionSelected, setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_lemma = await api.post('/add/a/lemma/question', { question, correct_answer, lemmaId, options })
        if (new_lemma.status === 200) {
            await getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
            setQuestionSelected(new_lemma.data)
            setLemmaSelected(lemma)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemmaQuestion