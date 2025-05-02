import api from "../../server/api"
import getCommands from "./getCommands"

const addCommand = async (e, name, description, demonstration, setCommands, setCommandsCopy, setCommandSelected) => {

    e.preventDefault()
    
    try {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('demonstration', demonstration)

        const new_command = await api.post('/add/a/command', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (new_command.status === 200) {
            await getCommands(setCommands, setCommandsCopy)
            setCommandSelected(new_command.data)
        }

    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

export default addCommand