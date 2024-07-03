import { useAuthContext } from "./userAuthContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()

    const Logout = () => {
        // remove user from local storage
        localStorage.removeItem('user')
        // dispatch logout action
        dispatch({type: 'LOGOUT'})
    }

    return {Logout}

}