import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"

const getClasses = async (setClasses, setLoading) => {
    try {
        setLoading(true)
        const response = await api.get('/get/all/classes')

        if (response.status === 200) {
            setClasses(response.data)
            localStorage.setItem('classes', JSON.stringify(response.data))
        } else {
            setClasses([])
        }

        setLoading(false)

    } catch (error) {
        const localData = localStorage.getItem('classes')

        if (localData) {
            setClasses(JSON.parse(localData))
        } else {
            setClasses([])
        }

        errorMessage('Falha ao carregar aulas. Verifique a conexão com a internet.')
        console.log('Erro ao buscar aulas:', error)
        setLoading(false)
    }
}

export default getClasses