import api from "../../server/api"
import getCommands from "./getCommands"



const editCommand = async (commandId, setCommandSelected, name, description, demonstration, sound, setCommands, setCommandsCopy) => {

    try {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('demonstration', demonstration)
        formData.append('sound', sound)

        const edited_command = await api.put(`/edit/a/command/${commandId}`, formData, {

            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (edited_command.status === 200) {
            setCommandSelected(edited_command.data)
            await getCommands(setCommands, setCommandsCopy)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default editCommand