import { Link } from "react-router-dom"
import AddContent from "../components/contents/addcontent"
import { useContext, useEffect, useState } from "react"
import getModules from "../functions/contents/getModules"
import RemModule from "../components/contents/remcontent"
import { LoadingContext } from "../contexts/contextLoading"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"


const Contents = () => {

    const { loading, setLoading } = useContext(LoadingContext)
    const [modules, setModules] = useState([])


    useEffect(() => {
        getModules(setModules, setLoading)
    }, [setLoading])

    return (
        <div className="p-4 d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-between w-75 gap-2 bg-white p-2 rounded">
                <div className="d-flex gap-2">
                    <Link to={'/home'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white"><i className="fas fa-arrow-left"></i></Link>
                    <h1 className="fs-4 display-3 mt-auto mb-auto">Os conteúdos organizados em módulos</h1>
                </div>
                <Loading loading={loading} />
                <button className="btn btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addmodule"><i className="fas fa-plus"></i> Novo módulo</button>
                <AddContent setModules={setModules} setLoading={setLoading} />
            </div>

            <div className="d-flex flex-wrap gap-1 w-75 mt-2">
                {
                    modules.length > 0 ?
                        (
                            modules.map((modulo) => (
                                <div className="d-flex w-24 mb-2 btn btn-outline-info p-0 pe-2 border-info rounded border btn-height" role="button ">
                                    <Link to={`/lessons/${modulo.name}/${modulo.id}`} key={modulo.id} role="button" className="btn fw-bold d-flex justify-content-start align-items-center text-start pt-auto pb-auto w-100">
                                        {modulo.name}
                                    </Link>
                                    <button data-bs-toggle="modal" data-bs-target="#remcontent" className="btn mt-auto mb-auto btn-danger rounded-circle"><i className="fas fa-trash"></i></button>
                                    <RemModule moduleId={modulo.id} setModules={setModules} setLoading={setLoading} />
                                </div>
                            ))
                        )
                        :
                        (
                            <div className="w-50 mx-auto text-center h-100 pt-5 justify-content-center">
                                <i className="fas fa-tasks text-info pt-5 mt-5 fs-1"></i>
                                <h1 className="display-5 fs-5">Sem módulos para as lições ainda</h1>
                                <small>Adicione módulos</small>
                            </div>
                        )
                }
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )

}

export default Contents