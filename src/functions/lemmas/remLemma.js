import api from "../../server/api"
import getLemmas from "./getLemmas"


const remLemma = async (lemmaId, setLemmaSelected, setLemmas, setLemmasCopy, setLoading) => {

    setLoading(true)

    try {

        const removed_lemma = await api.delete(`/delete/a/lemma/${lemmaId}`)
        
        if (removed_lemma.status === 200){
            await getLemmas(setLemmas, setLemmasCopy, setLoading)
            setLemmaSelected(null)
        }

    } catch (error) {
        setLoading(false)
        console.log('Erro: ', error)
    }
}

export default remLemma