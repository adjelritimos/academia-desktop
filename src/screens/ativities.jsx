import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/app_context"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import LoadingCustom from "../components/others/loadingCustom"
import AtivityCard from "../components/ativities/cardsAtivity"
import AddAtivity from "../components/ativities/addativity"


const Ativities = () => {

    const { loading, setLoading, setTabNumber, ativities, setAtivities } = useContext(AppContext)
    const [ativitiesCopy, setAtivitiesCopy] = useState([])
    const [seletedAtivity, setSeletedAtivity] = useState(null)
    const [message, setMessage] = useState("")


    useEffect(() => {
        setAtivitiesCopy(ativities)
        setTabNumber(5)
    }, [setLoading, setTabNumber, ativities, setAtivities])

    return (
        <div className="p-2 d-flex flex-column justify-content-top align-items-center position-relative h-100">
            {
                message.length > 0 && <LoadingCustom message={message} loading={loading} />
            }
            <div className="d-flex justify-content-between w-100 gap-2 bg-white p-2 rounded">
                <div className="d-flex gap-2">
                    <h1 className="fs-4 display-3 mt-auto mb-auto fw-bold">Atividades</h1>
                </div>
                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addativity"><i className="fas fa-plus"></i> Nova atividade</button>
                <AddAtivity ativities={ativities} setMessage={setMessage} setLoading={setLoading} setAtivities={setAtivities} />
            </div>

            <div className="row row-cols-4 w-100 mt-2 overflow-auto ativity-altura">
                {
                    ativitiesCopy.length > 0 ?
                        (
                            ativitiesCopy.map((ativity) => (
                                <div className="col p-1">
                                    <AtivityCard ativity={ativity} setSeletedAtivity={setSeletedAtivity} seletedAtivity={seletedAtivity} setAtivities={setAtivities} setLoading={setLoading} setMessage={setMessage} />
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
                                                <h1 className="display-5 fs-5">Sem atividades ainda</h1>
                                                <small>Adicione uma atividade</small>
                                                <br />
                                                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addativity"><i className="fas fa-plus"></i> Nova atividade</button>
                                            </div>
                                        )
                                }
                            </div>
                        )
                }
            </div>

            <ToastContainer position="bottom-right" />
        </div>
    )

}

export default Ativities