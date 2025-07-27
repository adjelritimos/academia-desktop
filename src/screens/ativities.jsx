import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/app_context"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import LoadingCustom from "../components/others/loadingCustom"
import AtivityCard from "../components/ativities/cardsAtivity"


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
                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addmodule"><i className="fas fa-plus"></i> Nova atividade</button>

            </div>

            <div className="row row-cols-4 g-2 w-100 mt-2 overflow-auto ativity-altura">
                <div className="col">
                    <AtivityCard />
                </div>

                {
                    ativitiesCopy.length > 0 ?
                        (
                            ativitiesCopy.map((ativity) => (
                                <div className="col">
                                    <div className="ativity-height d-flex w-100 btn btn-outline-info bg-white p-2 border-info rounded border" role="button">
                                        <Link to={`/home/lessons/${ativity.name}/${ativity.id}`} key={ativity.id} role="button" className="btn border fs-3 border-white bg-white fw-bold d-flex justify-content-start align-items-center text-start text-break pt-auto pb-auto w-100">
                                            {ativity.name}
                                        </Link>
                                        <div className="d-flex gap-1">
                                            <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#editcontent" className="btn mt-auto mb-auto btn-outline-light text-dark p-1 rounded-circle"><i className="fas fa-edit"></i></button>
                                            <button onClick={() => setSeletedAtivity(ativity)} data-bs-toggle="modal" data-bs-target="#remcontent" className="btn mt-auto mb-auto btn-danger p-1 rounded-circle"><i className="fas fa-trash"></i></button>
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
                                                <h1 className="display-5 fs-5">Sem atividades ainda</h1>
                                                <small>Adicione uma atividade</small>
                                                <br />
                                                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addmodule"><i className="fas fa-plus"></i> Nova atividade</button>
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