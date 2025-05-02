import api from "../../server/api"
import getCommands from "./getCommands"



const remCommand = async (commandId, setCommandSelected, setCommands, setCommandsCopy) => {
    try {

        const removed_command = await api.delete(`/delete/a/command/${commandId}`)
        
        if (removed_command.status === 200){
            await getCommands(setCommands, setCommandsCopy)
            setCommandSelected(null)
        }

    } catch (error) {
        console.log('Erro: ', error)
    }
}

export default remCommand