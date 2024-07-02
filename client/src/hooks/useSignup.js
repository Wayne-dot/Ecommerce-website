import { useState } from "react";
import { useAuthContext } from "./userAuthContext";

export const useSingup = () => {
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(null)
    const {dispatch} = useAuthContext()
    
    const signup = async(email, password) => {
        setloading(true)
        setError(null)

        const response = await fetch('/account/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok){
            setloading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the authContext
            dispatch({type: 'LOGIN', payload:json})

            setloading(false)
        }
        
    }


    return {signup, loading, error}
}   