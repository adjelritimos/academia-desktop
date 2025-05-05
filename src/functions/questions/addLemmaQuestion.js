import api from "../../server/api"
import getLemmaQuestions from "./getLemmaQuestions"



const addLemmaQuestion = async (e, question, correct_answer, lemmaId, options,setQuestionsGroups, setQuestionsGroupsCopy,  setLemmaSelected,  setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_lemma = await api.post('/add/a/lemma/question', { question, correct_answer, lemmaId, options })
        if (new_lemma.status === 200) {
            await getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy, setLoading)
            setLemmaSelected(new_lemma.data)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemmaQuestion