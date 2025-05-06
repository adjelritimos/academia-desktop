import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getModules from "./getModules"

const addModule = async (e, name, setModules, setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_module = await api.post('/add/a/module', { name })
        if (new_module.status === 200) {
            await getModules(setModules, setLoading)
        }
        
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o módulo não foi adicionado')
        else
            errorMessage('Ocorreu um erro ao tentar adicionar um módulo.')
        console.log('Um erro ocorrido, ', error)
    }
}
export default addModule