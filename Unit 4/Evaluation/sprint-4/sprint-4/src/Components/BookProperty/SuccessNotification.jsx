import { useState } from "react"


export const useSuccessNotification = () => {
    const [successAlert, setSuccesAlert] = useState(false)


    return {
        successAlert,
        setSuccesAlert
    }
}