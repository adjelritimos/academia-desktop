import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLemmas from "./getLemmas"



const editLemma = async (e, lemmaId, setLemmaSelected, question, answer, sound, setLemmas, setLemmasCopy, setLoading) => {

    e.preventDefault()

    setLoading(true)
    try {

        if (typeof sound === 'string')
            sound = sound.split('admin')[1]

        const formData = new FormData()
        formData.append('question', question)
        formData.append('answer', answer)
        formData.append('sound', sound)

        const new_lemma = await api.put(`/edit/a/lemma/${lemmaId}`, formData, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (new_lemma.status === 200) {
            setLemmaSelected(new_lemma.data)
            await getLemmas(setLemmas, setLemmasCopy, setLoading)
        }


    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o lema não foi editado')
        else
            errorMessage('Ocorreu um erro ao tentar editar o lema.')
        console.log('Um erro ocorrido, ', error)
    }
}
export default editLemma