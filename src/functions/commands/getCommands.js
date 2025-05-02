import api from "../../server/api"

const getCommands = async (setCommands, setCommandsCopy) => {

    try {
        
        const commands = await api.get('/get/all/commands')
        if(commands.status === 200){
            setCommands(commands.data)
            setCommandsCopy(commands.data)
        }
          
        else
            setCommands([])
    } catch (error) {
        setCommands([])
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getCommands