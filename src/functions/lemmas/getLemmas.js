import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getLemmas = async (setLemmas, setLemmasCopy, setLoading) => {

    try {
        setLoading(true)
        const lemmas = await api.get('/get/all/lemmas')
        if (lemmas.status === 200) {
            setLemmas(lemmas.data)
            setLemmasCopy(lemmas.data)
            localStorage.setItem('lemmas', JSON.stringify(lemmas.data))
        }

        else {
            setLemmas([])
            setLemmasCopy([])
        }
        setLoading(false)

    } catch (error) {
        const lemmas = localStorage.getItem('lemmas')
        if (lemmas) {
            setLemmas(JSON.parse(lemmas))
            setLemmasCopy(JSON.parse(lemmas))
        }
        else {
            setLemmas([])
            setLemmasCopy([])
        }
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLemmas