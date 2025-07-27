import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getActivities from "./getativity"

const editActivity = async (id, title, descricao, data, setActivities, setLoading) => {
    setLoading(true)
    try {
        const response = await api.put(`/edit/an/activity/${id}`, {
            title,
            descricao,
            data
        })

        if (response.status === 200) {
           await getActivities(setActivities, setLoading)
        }
        setLoading(false)
    } catch (error) {
        setLoading(false)
        errorMessage('Erro ao editar atividade.')
        console.log('Erro: ', error)
    }
}

export default editActivity
