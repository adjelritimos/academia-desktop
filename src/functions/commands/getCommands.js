import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getCommands = async (setCommands, setCommandsCopy,  setLoading) => {

    setLoading(true)

    try {
        
        const commands = await api.get('/get/all/commands')
        if(commands.status === 200){
            setCommands(commands.data)
            setCommandsCopy(commands.data)
        }
          
        else
            setCommands([])

            setLoading(false)
    } catch (error) {
        setLoading(false)
        setCommands([])
        errorMessage('falha no carregamento de dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getCommands