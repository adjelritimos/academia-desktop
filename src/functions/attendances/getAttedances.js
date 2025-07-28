import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getAttendances = async (setAttendances, setLoading) => {

    setLoading(true)

    try {

        const response = await api.get('/get/all/attendances')

        if (response.status === 200) {
            setAttendances(response.data)
            localStorage.setItem('attendances', JSON.stringify(response.data))
        } else {
            setAttendances([])
        }

        setLoading(false)

    } catch (error) {
        const localData = localStorage.getItem('attendances')

        if (localData) {
            setAttendances(JSON.parse(localData))
        } else {
            setAttendances([])
        }

        errorMessage('Falha ao carregar aulas. Verifique a conexão com a internet.')

        console.log('Erro ao buscar aulas:', error)
        
        setLoading(false)
    }
}

export default getAttendances