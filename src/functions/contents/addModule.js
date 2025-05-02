import api from "../../server/api"
import getModules from "./getModules"

const addModule = async (e, name, setModules) => {
    e.preventDefault()
    try {
        const new_module = await api.post('/add/a/module', { name })
        if (new_module.status === 200) {
            await getModules(setModules)
        }
    } catch (error) {
        console.log('Um erro ocorrido, ', error)
    }
}
export default addModule