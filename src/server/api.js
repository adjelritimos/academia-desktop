import axios from 'axios'

const api = axios.create({
    baseURL: 'https://academia-ev.onrender.com/admin/'
})

export default api