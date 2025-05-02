import api from "../../server/api"
import getLemmas from "./getLemmas"


const remLemma = async (lemmaId, setLemmaSelected, setLemmas, setLemmasCopy) => {
    try {

        const removed_lemma = await api.delete(`/delete/a/lemma/${lemmaId}`)
        
        if (removed_lemma.status === 200){
            await getLemmas(setLemmas, setLemmasCopy)
            setLemmaSelected(null)
        }

    } catch (error) {
        console.log('Erro: ', error)
    }
}

export default remLemma