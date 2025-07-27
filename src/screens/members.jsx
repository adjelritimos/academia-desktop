import { useContext, useEffect, useState } from "react"
import filter from "../functions/outhers/filter"
import Loading from "../components/others/loading"
import { AppContext } from "../contexts/app_context"
import { ToastContainer } from "react-toastify"
import { CiEdit } from "react-icons/ci"
import { AiOutlineDelete } from "react-icons/ai"
import { FaPlus } from "react-icons/fa6"
import LoadingCustom from "../components/others/loadingCustom"
import AddMembers from "../components/members/addMembers"
import RemMember from "../components/members/remMember"
import EditMembers from "../components/members/editMember"

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
                        <button className="btn btn-shadow btn-info text-white p-1 rounded-circle" data-bs-toggle="modal" data-bs-target="#addmember">
                           <FaPlus className="fs-4"/>
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

                <div>
                    {
                        memberSeleted ?
                            (
                                <div className="mt-2 w-75 mx-auto">
                                    <div className="container">
                                        <h2 className="p-0 m-0 mt-auto mb-auto fs-4 display-4">Membro selecionado</h2>
                                        <div className="d-flex justify-content-between">
                                            <h2 className="mt-auto mb-auto ">Dados</h2>
                                            {
                                                memberSeleted && (
                                                    <div className="d-flex gap-2">
                                                        <button className="btn btn-shadow mt-auto mb-auto p-1 btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editmember"><CiEdit className='fs-2'/></button>
                                                        <EditMembers memberId={memberSeleted?.id} setMessage={setMessage} memberSeleted={memberSeleted} setSeletedMember={setMemberSeleted} setLoading={setLoading} setMembers={setMembers} />
                                                        <button className="btn btn-shadow mt-auto mb-auto p-1 btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remmember"><AiOutlineDelete className='fs-2'/></button>
                                                        <RemMember memberId={memberSeleted?.id} setMessage={setMessage} setMemberSeleted={setMemberSeleted} setLoading={setLoading} setMembers={setMembers} />
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <div className="d-flex gap-2">
                                            <div className="bg-danger d-flex justify-content-center align-items-center rounded foto p-2">
                                                <h1 className="fs-30 text-white">{memberSeleted?.name[0]}</h1>
                                            </div>
                                            <div className="w-100">
                                                <label htmlFor="">Nome</label>
                                                <input type="text" className="form-control mb-2 p-3" disabled readOnly value={memberSeleted?.name} />
                                                <div className="d-flex gap-2">
                                                    <div className="w-50">
                                                        <label htmlFor="">Nº BI</label>
                                                        <input type="text" className="form-control p-3" disabled value={memberSeleted?.nbi} />
                                                    </div>
                                                    <div className="w-50">
                                                        <label htmlFor="">Data de nascimento</label>
                                                        <input type="text" className="form-control p-3" disabled value={memberSeleted?.brithDate.split('T')[0]} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-2">
                                            <label htmlFor="">Nome do encarregado</label>
                                            <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.guardianName} />
                                            <label htmlFor="">Escolaridade</label>
                                            <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.school} />
                                            <label htmlFor="">Contacto</label>
                                            <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.contact} />
                                            <div className="d-flex gap-2">
                                                <div className="w-100">
                                                    <label htmlFor="">Batizado?</label>
                                                    <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.isBatizado} />
                                                </div>
                                                {
                                                    memberSeleted?.isBatizado === "Batizado" && (
                                                        <div className="w-50">
                                                            <label htmlFor="">Data do batismo</label>
                                                            <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.batData?.split('T')[0]} />
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <label htmlFor="">Congrega em</label>
                                            <input type="text" className="form-control mb-2 p-3" disabled value={memberSeleted?.churchName} />
                                        </div>
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