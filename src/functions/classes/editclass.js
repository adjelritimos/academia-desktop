import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getClasses from "./getClass"

const editClasse = async (classeId, title, tytpes, data, setClasses, setLoading) => {
    
    setLoading(true)

    try {
        const updated_classe = await api.put(`/edit/a/class/${classeId}`, {
            title,
            tytpes,
            data
        })

        if (updated_classe.status === 200) {
            await getClasses(setClasses, setLoading)
        }

    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão à internet. A aula não foi editada.')
        else
            errorMessage('Ocorreu um erro ao tentar editar a aula.')
        console.log('Erro ao editar aula: ', error)
    }
}

export default editClasse
