import api from "../../server/api"

const getLemmas = async (setLemmas, setLemmasCopy, setLoading) => {

    try {
        setLoading(true)
        const lemmas = await api.get('/get/all/lemmas')
        if(lemmas.status === 200){
            setLemmas(lemmas.data)
            setLemmasCopy(lemmas.data)
        }

        else{
            setLemmas([])
            setLemmasCopy([])
        }
        setLoading(false)
           
    } catch (error) {
        setLemmas([])
        setLemmasCopy([])
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLemmas