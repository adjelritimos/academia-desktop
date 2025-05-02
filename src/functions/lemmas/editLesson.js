import api from "../../server/api"
import getLemmas from "./getLemmas"



const editLemma = async (e, lemmaId, lemmaSelected, setLemmaSelected, question, answer, setLemmas, setLemmasCopy) => {

    e.preventDefault()

    try {
        const new_lesson = await api.put(`/edit/a/lemma/${lemmaId}`, { question, answer })
        if (new_lesson.status === 200) {
            lemmaSelected.answer = answer
            lemmaSelected.question = question
            setLemmaSelected(lemmaSelected)
            await getLemmas(setLemmas, setLemmasCopy)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default editLemma