import { Link } from "react-router-dom"
import AddContent from "../components/contents/addcontent"
import { useContext, useEffect, useState } from "react"
import RemModule from "../components/contents/remcontent"
import { AppContext } from "../contexts/app_context"
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import LoadingCustom from "../components/others/loadingCustom"
import EditContent from "../components/contents/editecontent"


const Contents = () => {

    const { loading, setLoading, setTabNumber, modules, setModules } = useContext(AppContext)
    const [seletedModule, setSelectedModule] = useState(null)
    const [message, setMessage] = useState("")


    useEffect(() => {
        setTabNumber(6)
    }, [setLoading, setTabNumber, modules, setModules])

    return (
        <div className="p-2 d-flex flex-column justify-content-top align-items-center position-relative h-100">
            {
                message.length > 0 && <LoadingCustom message={message} loading={loading} />
            }
            <div className="d-flex justify-content-between w-100 gap-2 bg-white p-2 rounded">
                <div className="d-flex gap-2">
                    <h1 className="fs-4 display-3 mt-auto mb-auto fw-bold">Os conteúdos organizados em módulos</h1>
                </div>
                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addmodule"><i className="fas fa-plus"></i> Novo módulo</button>

                <AddContent setModules={setModules} setLoading={setLoading} setMessage={setMessage} />
            </div>

            <div className="row row-cols-4 g-2 w-100 mt-2">
                {
                    modules.length > 0 ?
                        (
                            modules.map((modulo) => (
                                <div className="col col-3">
                                    <div className="d-flex module w-100 btn btn-outline-info bg-white p-0 pe-2 border-info rounded border btn-height-1" role="button">
                                        <Link to={`/home/lessons/${modulo.name}/${modulo.id}`} key={modulo.id} role="button" className="btn border fs-3 border-white bg-white fw-bold d-flex justify-content-start align-items-center text-start text-break pt-auto pb-auto w-100">
                                            {modulo.name}
                                        </Link>
                                        <div className="d-flex gap-1">
                                            <button onClick={() => setSelectedModule(modulo)} data-bs-toggle="modal" data-bs-target="#editcontent" className="btn mt-auto mb-auto btn-outline-light text-dark p-1 rounded-circle"><CiEdit className='fs-2' /></button>
                                            <button onClick={() => setSelectedModule(modulo)} data-bs-toggle="modal" data-bs-target="#remcontent" className="btn mt-auto mb-auto btn-danger p-1 rounded-circle"><AiOutlineDelete className='fs-2' /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                        :
                        (
                            <div className="w-50 mx-auto text-center h-100 pt-5 justify-content-center">
                                {
                                    loading ?
                                        (
                                            <div>
                                                {
                                                    message.length === 0 && <Loading loading={loading} />
                                                }
                                            </div>
                                        )
                                        :
                                        (
                                            <div>
                                                <i className="fas fa-tasks text-info pt-5 mt-5 fs-1"></i>
                                                <h1 className="display-5 fs-5">Sem módulos para as lições ainda</h1>
                                                <small>Adicione módulos</small>
                                                <br />
                                                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addmodule"><i className="fas fa-plus"></i> Novo módulo</button>
                                            </div>
                                        )
                                }
                            </div>
                        )
                }
            </div>
            <EditContent setModules={setModules} setLoading={setLoading} setMessage={setMessage} moduleId={seletedModule?.id} moduleName={seletedModule?.name} />
            <RemModule moduleId={seletedModule?.id} setModules={setModules} setLoading={setLoading} setMessage={setMessage} />
            <ToastContainer position="bottom-right" />
        </div>
    )

}

export default Contents