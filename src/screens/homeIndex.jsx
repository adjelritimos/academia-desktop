import { Outlet } from "react-router-dom"
import Header from "../components/others/header"
import SideBars from "../components/others/sidebars"
import { useContext } from "react"
import { AppContext } from "../contexts/app_context"

const HomeIndex = () => {

    const { tabNumber } = useContext(AppContext)

    return (
        <div className="h-100" data-bs-dismiss="offcanvas">
            <Header />
            <div className="d-flex h-100">
                <SideBars tab={tabNumber} />
                <div className="border rounded-start-4 w-100 bg-white altura">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomeIndex