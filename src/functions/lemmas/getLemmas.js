import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getLemmas = async (setLemmas, setLoading) => {

    try {
        setLoading(true)
        const lemmas = await api.get('/get/all/lemmas')
        if (lemmas.status === 200) {
            setLemmas(lemmas.data)
            localStorage.setItem('lemmas', JSON.stringify(lemmas.data))
        }

        else {
            setLemmas([])
        }
        setLoading(false)

    } catch (error) {
        const lemmas = localStorage.getItem('lemmas')
        if (lemmas) {
            setLemmas(JSON.parse(lemmas))
        }
        else {
            setLemmas([])
        }
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLemmas