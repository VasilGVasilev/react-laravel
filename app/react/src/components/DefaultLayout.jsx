import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <div>
            <div>default</div>
            <Outlet />
        </div>
    )
}

export default DefaultLayout
