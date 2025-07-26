import api from "../../server/api"

const getMembers = async (setMembers, setLoading) => {

    setLoading(true)

    try {

        const response = await api.get('/get/all/users')

        if (response.status === 200) {
            setMembers(response.data)
            localStorage.setItem('members', JSON.stringify(response.data))
        }

        setLoading(false)

    } catch (error) {
        console.log("", error)
        const members = localStorage.getItem('members')
        if (members)
            setMembers(JSON.parse(members))
        else
            setMembers([])
        setLoading(false)
    }
}
export default getMembers