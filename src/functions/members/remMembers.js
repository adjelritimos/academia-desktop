import api from "../../server/api"
import errorMessage from "../feedbacks/errormessage"
import getMembers from "./getMembers"

const remMember = async (memberId, setMemberSeleted, setMembers, setLoading) => {
    setLoading(true)
    try {

        const removed_member = await api.delete(`/delete/a/users/${memberId}`)
        if (removed_member.status === 200) {
            setMemberSeleted(null)
            await getMembers(setMembers, setLoading)
        }


    } catch (error) {
        setLoading(false)
        if (error.message.includes("Network Error"))
            errorMessage('Sem conexão a internet, o módulo não foi adicionado')
        else
            errorMessage('Ocorreu um erro ao tentar remover o módulo.')
        console.log('Erro: ', error)
    }
}

export default remMember