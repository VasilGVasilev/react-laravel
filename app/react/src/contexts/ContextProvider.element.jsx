import { createContext, useState } from "react";

export const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
})
// init context gives autocompletion on useContext later

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token)
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }


    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken
            }}
        >
            {children}
        </StateContext.Provider>
    )
}