import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getActivities from "./getativity"

const removeActivity = async (id, setActivities, setLoading) => {
    setLoading(true)
    try {
        const response = await api.delete(`/delete/an/activity/${id}`)

        if (response.status === 200) {
            await getActivities(setActivities, setLoading)
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        errorMessage('Erro ao remover atividade.')
        console.log('Erro: ', error)
    }
}

export default removeActivity
