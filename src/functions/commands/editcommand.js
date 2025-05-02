import api from "../../server/api"
import getCommands from "./getCommands"



const editCommand = async (commandId, commandSelected, setCommandSelected, name, description, setCommands, setCommandsCopy) => {

    try {
        const new_lesson = await api.put(`/edit/a/command/${commandId}`, { name, description })
        if (new_lesson.status === 200) {
            commandSelected.name = name
            commandSelected.description = description
            setCommandSelected(commandSelected)
            await getCommands(setCommands, setCommandsCopy)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default editCommand