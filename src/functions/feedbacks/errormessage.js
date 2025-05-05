import { toast } from 'react-toastify'

const errorMessage = (message) => {
    toast.error(message)
}

export default errorMessage