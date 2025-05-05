import api from "../../server/api"
import getLemmas from "./getLemmas"


const addLemma = async (e, question, answer, sound, setLemmas, setLemmasCopy,  setLemmaSelected, setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const formData = new FormData()
        formData.append('question', question)
        formData.append('answer', answer)
        formData.append('sound', sound)
        
        const new_lemma = await api.post('/add/a/lemma', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (new_lemma.status === 200) {
            await getLemmas(setLemmas, setLemmasCopy, setLoading)
            setLemmaSelected(new_lemma.data)
        }
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemma