import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getMembers from "./getMembers"

const addMember = async (form, setMembers, setLoading) => {

    setLoading(true)

    try {
        const response = await api.post('/registe/a/user', {
            name: form.name,
            guardianName: form.guardianName,
            brithDate: form.brithDate,
            school: form.school,
            contact: form.contact,
            isBatizado: form.isBatizado,
            batData: form.batData,
            churchName: form.churchName,
            email: form.email
        })

        if (response.status === 200) {
            await getMembers(setMembers, setLoading)
        }
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error")) {
            errorMessage('Sem conexão à internet. O membro não foi adicionado.')
        } else {
            errorMessage('Ocorreu um erro ao tentar adicionar o membro.')
        }
        console.error('Erro ao adicionar membro:', error)
    }
}

export default addMember
