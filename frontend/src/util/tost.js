import { toast } from 'react-toastify'

export const successtoast = (message) => {
    toast.success(message)
}

export const warningtoast = (message) => {
    toast.warning(message)
}

export const errortoast = (message) => {
    toast.error(message)
}