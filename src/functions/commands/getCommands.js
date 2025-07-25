import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getCommands = async (setCommands, setLoading) => {

    setLoading(true)

    try {

        const commands = await api.get('/get/all/commands')
        if (commands.status === 200) {
            setCommands(commands.data)
            localStorage.setItem('commands', JSON.stringify(commands.data))
        }

        else {
            setCommands([])
        }


        setLoading(false)
    } catch (error) {
        setLoading(false)
        const commands = localStorage.getItem('commands')
        if (commands) {
            setCommands(JSON.parse(commands))
        }
        else {
            setCommands([])
        }
        errorMessage('falha no carregamento de dados, pode ser que não tenha conexão com a internet')
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getCommands