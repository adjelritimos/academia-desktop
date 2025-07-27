import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getClasses from "./getClass"

const remClasse = async (classeId, setClasses, setLoading) => {

    setLoading(true)

    try {
        const removed_classe = await api.delete(`/delete/a/class/${classeId}`)

        if (removed_classe.status === 200) {
            await getClasses(setClasses, setLoading)
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão à internet. A aula não foi removida.')
        else
            errorMessage('Ocorreu um erro ao tentar remover a aula.')
        console.log('Erro ao remover aula: ', error)
    }
}

export default remClasse
