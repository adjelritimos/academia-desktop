import api from "../../server/api"
import getLemmas from "./getLemmas"


const addLemma = async (e, question, answer, setLemmas, setLemmasCopy,  setLemmaSelected) => {
    e.preventDefault()
    try {
        const new_lemma = await api.post('/add/a/lemma', { question, answer })
        if (new_lemma.status === 200) {
            await getLemmas(setLemmas, setLemmasCopy)
            setLemmaSelected(new_lemma.data)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemma