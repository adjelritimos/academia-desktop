import api from "../../server/api"

const getModules = async (setModules) => {

    try {
        const modules = await api.get('/get/all/modules')
        if(modules.status === 200)
            setModules(modules.data)
        else
            setModules([])
    } catch (error) {
        setModules([])
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getModules