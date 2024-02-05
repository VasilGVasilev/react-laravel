import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider.hook"

const GuestLayout = () => {
    const {user, token} = useStateContext()
    // custom protected route
    if(token){
        return <Navigate to="/" />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout
