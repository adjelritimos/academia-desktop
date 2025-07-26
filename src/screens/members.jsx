import { useContext, useEffect, useState } from "react"
import filter from "../functions/outhers/filter"
import Loading from "../components/others/loading"
import { AppContext } from "../contexts/app_context"
import { ToastContainer } from "react-toastify"
import LoadingCustom from "../components/others/loadingCustom"
import AddMembers from "../components/members/addMembers"

const Members = () => {

    const [membersCopy, setMembersCopy] = useState([])
    const [memberSeleted, setMemberSeleted] = useState(null)
    const [message, setMessage] = useState("")
    const { loading, setLoading, setTabNumber, members, setMembers } = useContext(AppContext)

    useEffect(() => {
        setMembersCopy(members)
        setTabNumber(2)
    }, [setLoading, setTabNumber, members, setMembers])

    return (
        <div className="d-flex h-100 position-relative">
            <div className="border-end rounded-start-4 border-1 border-info p-2 bg-white w-25">
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <div className="d-flex gap-2 w-100">
                            <h1 className="fs-4 display-6 fw-bold m-0 p-0 mt-auto mb-auto w-100">Membros</h1>
                        </div>
                        <button className="btn btn-shadow btn-info text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addmember">
                            <i className="fas fa-plus"></i>
                        </button>
                        {
                            message.length > 0 && <LoadingCustom message={message} loading={loading} />
                        }
                        <AddMembers setMembers={setMembers} setLoading={setLoading} setMessage={setMessage} />
                    </div>
                    <input onChange={(e) => filter(e.target.value, members, setMembersCopy, true)} type="text" placeholder="busque membros polo nome" className="form-control mt-2 border-info" />
                    <div className="overflow-auto position-relative mt-3 lemma-list">
                        {
                            membersCopy.length > 0 ?
                                (
                                    membersCopy.map((lmember) => (
                                        <div onClick={() => setMemberSeleted(lmember)} key={lmember.id} className={memberSeleted?.id === lmember.id ? "btn btn-info text-white text-start mb-1 w-100" : "btn btn-outline-info text-start mb-1 w-100"}>
                                            <h1 className="display-4 text-break fs-4 mt-auto mb-auto">{lmember.name}</h1>
                                        </div>
                                    ))
                                )
                                :
                                (
                                    <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
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
                                                        <i class="fas fa-inbox text-info"></i>
                                                        <h1 className="display-5 fs-5 m-0 p-0">Sem mombros para listar</h1>
                                                        <small>adicione um membro a lista</small>
                                                    </div>
                                                )
                                        }
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="p-2 bg-white w-75">
                <div className="d-flex gap-2">
                    <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Membro selecionado</h2>
                    {
                        memberSeleted && (
                            <div className="d-flex gap-2">
                                <button className="btn btn-shadow btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editlemma"> <i className="fas fa-edit"></i></button>
                               
                                <button className="btn btn-shadow btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remlemma"> <i className="fas fa-trash"></i></button>
                               
                            </div>
                        )
                    }
                </div>

                <div>
                    {
                        memberSeleted ?
                            (
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <h2>{memberSeleted.name}</h2>
                                    </div>
                                    
                                </div>
                            )
                            :
                            (
                                <div className="d-flex h-100 flex-column pt-5 justify-content-center align-items-center">
                                    <i className="fas fa-tasks text-info pt-5 mt-5 fs-1"></i>
                                    <h1 className="display-5 fs-5">Nenhum membro selecionado ainda</h1>
                                </div>
                            )
                    }

                </div>

            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default Members