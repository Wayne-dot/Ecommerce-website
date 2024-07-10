import { useState } from "react";
import { useAuthContext } from "./userAuthContext";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(null)
    const {user, dispatch} = useAuthContext()
    const navigate = useNavigate();
    
    const login = async(email, password) => {
        setloading(true)
        setError(null)

        const token = user?.token

        const response = await fetch('/account/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
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
            navigate('/')
            
        }
        
    }


    return {login, loading, error}
}   