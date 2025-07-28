import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getClasses from "./getClass"

const addClasse = async (title, tytpes, data, setClasses, setLoading) => {
    
    setLoading(true)

    try {
        const new_classe = await api.post('/add/a/class', {
            title,
            tytpes,
            data
        })

        if (new_classe.status === 200) {
            await getClasses(setClasses, setLoading)
        }

    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão à internet. A aula não foi adicionada.')
        else
            errorMessage('Ocorreu um erro ao tentar adicionar a aula.')
        console.log('Erro ao adicionar aula: ', error)
    }
}

export default addClasse
