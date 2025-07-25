import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLemmas from "./getLemmas"


const addLemma = async (e, question, answer, sound, setLemmas, setLemmaSelected, setLoading) => {
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
            await getLemmas(setLemmas, setLoading)
            setLemmaSelected(new_lemma.data)
        }
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o lema não foi adicionado')
        else
            errorMessage('Ocorreu um erro ao tentar adicionar o lema.')
        console.log('Um erro ocorrido, ', error)
    }
}
export default addLemma