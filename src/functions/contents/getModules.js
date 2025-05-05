import api from "../../server/api"

const getModules = async (setModules, setLoading) => {
   
    setLoading(true)

    try {
        const modules = await api.get('/get/all/modules')
        if (modules.status === 200)
            setModules(modules.data)
        else
            setModules([])

        setLoading(false)
    } catch (error) {
        setModules([])
        setLoading(false)
        console.log('Ocorreu algum erro, ', error)
    }
}

export default getModules