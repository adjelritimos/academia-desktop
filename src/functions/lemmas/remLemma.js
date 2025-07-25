import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getLemmas from "./getLemmas"


const remLemma = async (lemmaId, setLemmaSelected, setLemmas, setLoading) => {

    setLoading(true)

    try {

        const removed_lemma = await api.delete(`/delete/a/lemma/${lemmaId}`)
        
        if (removed_lemma.status === 200){
            await getLemmas(setLemmas, setLoading)
            setLemmaSelected(null)
        }

    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o lema não foi removido')
        else
            errorMessage('Ocorreu um erro ao tentar remover o lema.')
        console.log('Erro: ', error)
    }
}

export default remLemma