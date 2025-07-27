import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getActivities = async (setActivities, setLoading) => {
    setLoading(true)
    try {
        const response = await api.get('/get/all/activities')

        if (response.status === 200) {
            setActivities(response.data)
            localStorage.setItem('activities', JSON.stringify(response.data))
        } else {
            setActivities([])
        }

        setLoading(false)
    } catch (error) {
        const cached = localStorage.getItem('activities')
        if (cached) {
            setActivities(JSON.parse(cached))
        } else {
            setActivities([])
        }

        errorMessage('Falha ao carregar dados. Verifique sua conexão com a internet.')
        console.log('Erro ao buscar atividades: ', error)
        setLoading(false)
    }
}

export default getActivities