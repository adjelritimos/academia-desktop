import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../contexts/app_context"
import Loading from "../components/others/loading"
import { ToastContainer } from "react-toastify"
import LoadingCustom from "../components/others/loadingCustom"
import CardClass from "../components/classes/cardsClass"
import AddClasse from "../components/classes/addclass"



const Classes = () => {

    const { loading, setLoading, setTabNumber, classes, setClasses } = useContext(AppContext)

    const [classesCopy, setClasseCopy] = useState([])

    const [seletedClass, setSeletedClass] = useState(null)

    const [message, setMessage] = useState("")


    useEffect(() => {

        setClasseCopy(classes)

        setTabNumber(7)

    }, [setLoading, setTabNumber, classes, setClasses])

    return (

        <div className="p-2 d-flex flex-column justify-content-top align-items-center position-relative h-100">

            {
                message.length > 0 && <LoadingCustom message={message} loading={loading} />
            }

            <div className="d-flex justify-content-between w-100 gap-2 bg-white p-2 rounded">

                <div className="d-flex gap-2">

                    <h1 className="fs-4 display-3 mt-auto mb-auto fw-bold">Aulas</h1>

                </div>

                <button className="btn btn-shadow btn-info text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addclasse"><i className="fas fa-plus"></i> Nova aula</button>
                <AddClasse setClasses={setClasses} setLoading={setLoading} />
            </div>

            <div className="row row-cols-4 w-100 mt-2 overflow-auto ativity-altura">

                {
                    classesCopy.length > 0 ?

                        (

                            classesCopy.map((classe) => (
                                <div className="col p-1">
                                    <CardClass setMessage={setMessage} setClasses={setClasses} setLoading={setLoading} setSeletedClass={setSeletedClass} classe={classe} seletedClass={seletedClass}/>
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

                                                <h1 className="display-5 fs-5">Sem aulas ainda</h1>

                                                <small>Adicione uma aula</small>

                                                <br />

                                                <button className="btn btn-shadow btn-info mt-4 text-white mt-auto mb-auto rounded-pill" data-bs-toggle="modal" data-bs-target="#addclasse"><i className="fas fa-plus"></i> Nova aula</button>

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

export default Classes