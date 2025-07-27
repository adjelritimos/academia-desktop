import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getMembers from "./getMembers"

const editMember = async (form, setSeletedMember, setMembers, setLoading) => {

    setLoading(true)

    try {
        const response = await api.put('/edit/a/users/'+form.id, {
            nbi: form.nbi,
            name: form.name,
            guardianName: form.guardianName,
            brithDate: form.brithDate.split('T')[0],
            school: form.school,
            contact: form.contact,
            isBatizado: form.isBatizado,
            batData: form?.batData?.split('T')[0],
            churchName: form.churchName,
        })

        if (response.status === 200) {
            setSeletedMember(form)
            await getMembers(setMembers, setLoading)
        }
    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error")) {
            errorMessage('Sem conexão à internet. O membro não foi adicionado.')
        } else {
            errorMessage('Ocorreu um erro ao tentar editar o membro.')
        }
        console.error('Erro ao adicionar membro:', error)
    }
}

export default editMember
