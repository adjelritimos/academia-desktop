import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getModules from "./getModules"

const remModule = async (moduleId, setModules,  setLoading) => {
    setLoading(true)
    try {

        const removed_module = await api.delete(`/delete/a/module/${moduleId}`)
        if (removed_module.status === 200)
            await getModules(setModules, setLoading)

    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o módulo não foi adicionado')
        else
            errorMessage('Ocorreu um erro ao tentar remover o módulo.')
        console.log('Erro: ', error)
    }
}

export default remModule