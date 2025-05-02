import api from "../../server/api"

const getLemmas = async (setLemmas, setLemmasCopy) => {

    try {
        
        const lemmas = await api.get('/get/all/lemmas')
        if(lemmas.status === 200){
            setLemmas(lemmas.data)
            setLemmasCopy(lemmas.data)
        }

        else{
            setLemmas([])
            setLemmasCopy([])
        }
           
    } catch (error) {
        setLemmas([])
        setLemmasCopy([])
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getLemmas