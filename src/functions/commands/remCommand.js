import api from "../../server/api"
import getCommands from "./getCommands"



const remCommand = async (commandId, setCommandSelected, setCommands, setLoading) => {
   
    setLoading(true)

    try {

        const removed_command = await api.delete(`/delete/a/command/${commandId}`)
        
        if (removed_command.status === 200){
            await getCommands(setCommands, setLoading)
            setCommandSelected(null)
        }

    } catch (error) {
        setLoading(false)
        console.log('Erro: ', error)
    }
}

export default remCommand