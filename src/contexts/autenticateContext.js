import axios from 'axios';
import React, { useContext } from 'react'
import { useCookies } from 'react-cookie';

const AuthContext = React.createContext();

const ACCESSTOKEN = 'accessToken'

const AutenticateContext =  ({children}) => {
    const [cookies, setCookie, removeCookie] = useCookies([
        ACCESSTOKEN
    ])

    const loginAuthenticate = async (newLogin) => {
        const response = await axios.post('https://leithos-navin.herokuapp.com/login', newLogin);
        console.log(response)
        setCookie(ACCESSTOKEN, response.data.accessToken)
        console.log(cookies)
    }  
    
    return (
        <AuthContext.Provider value={{loginAuthenticate}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
export default AutenticateContext
