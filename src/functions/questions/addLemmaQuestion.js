import api from "../../server/api"
import getLemmaQuestions from "./getLemmaQuestions"



const addLemmaQuestion = async (e, question, correct_answer, lemmaId, options,setQuestionsGroups, setQuestionsGroupsCopy,  setLemmaSelected) => {
    e.preventDefault()
    try {
        const new_lemma = await api.post('/add/a/lemma/question', { question, correct_answer, lemmaId, options })
        if (new_lemma.status === 200) {
            await getLemmaQuestions(setQuestionsGroups, setQuestionsGroupsCopy)
            setLemmaSelected(new_lemma.data)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemmaQuestion