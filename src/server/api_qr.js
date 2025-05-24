import axios from 'axios'

const api_qr = axios.create({
    baseURL: 'http://localhost:5349/'
})

export default api_qr