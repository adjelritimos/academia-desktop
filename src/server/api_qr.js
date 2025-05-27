import axios from 'axios'

const api_qr = axios.create({
    baseURL: 'https://academia-ev.onrender.com/'
})

export default api_qr