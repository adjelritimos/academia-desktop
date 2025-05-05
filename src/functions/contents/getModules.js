import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getModules = async (setModules, setLoading) => {
   
    setLoading(true)

    try {
        const modules = await api.get('/get/all/modules')
        if (modules.status === 200)
            setModules(modules.data)
        else
            setModules([])

        setLoading(false)
    } catch (error) {
        setModules([])
        setLoading(false)
        errorMessage('falha ao carregar dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getModules