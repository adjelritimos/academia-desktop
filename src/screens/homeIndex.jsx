import { Outlet } from "react-router-dom"
import Header from "../components/others/header"
import SideBars from "../components/others/sidebars"
import { useContext } from "react"
import { LoadingContext } from "../contexts/contextLoading"

const HomeIndex = () => {

    const { tabNumber } = useContext(LoadingContext)

    return (
        <div className="vh-100">
            <Header />
            <div className="d-flex h-100">
                <SideBars tab={tabNumber} />
                <div className="border rounded-start-4 w-100 bg-white">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HomeIndex