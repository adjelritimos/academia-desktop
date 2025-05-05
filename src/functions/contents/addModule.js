import api from "../../server/api"
import getModules from "./getModules"

const addModule = async (e, name, setModules, setLoading) => {
    e.preventDefault()
    setLoading(true)
    try {
        const new_module = await api.post('/add/a/module', { name })
        if (new_module.status === 200) {
            await getModules(setModules, setLoading)
        }
        
    } catch (error) {
        setLoading(false)
        console.log('Um erro ocorrido, ', error)
    }
}
export default addModule