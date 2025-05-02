import api from "../../server/api"
import getModules from "./getModules"

const remModule = async (moduleId, setModules) => {
    try {

        const removed_module = await api.delete(`/delete/a/module/${moduleId}`)
        if (removed_module.status === 200)
            await getModules(setModules)

    } catch (error) {
        console.log('Erro: ', error)
    }
}

export default remModule