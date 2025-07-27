import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getActivities from "./getativity"


const addActivity = async (title, descricao, data, setActivities, setLoading) => {
    setLoading(true)
    try {
        const response = await api.post('/add/an/activity', {
            title,
            descricao,
            data
        })

        if (response.status === 200) {
            await getActivities(setActivities, setLoading)
        }
        setLoading(false)
    } catch (error) {
        errorMessage('Erro ao adicionar atividade.')
        setLoading(false)
        console.log('Erro: ', error)
    }
}

export default addActivity
