import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import AddLemmas from "../components/lemmas/addlemmas"
import RemLemmas from "../components/lemmas/remlemmas"
import getLemmas from "../functions/lemmas/getLemmas"
import EditLemmas from "../components/lemmas/editlemma"
import filter from "../functions/outhers/filter"
import Loading from "../components/others/loading"
import { LoadingContext } from "../contexts/contextLoading"
import { ToastContainer } from "react-toastify"
import api_midia from "../server/api_midia"
import LoadingCustom from "../components/others/loadingCustom"

const Lemmas = () => {

    const [lemmas, setLemmas] = useState([])
    const [lemmasCopy, setLemmasCopy] = useState([])
    const [lemmaSelected, setLemmaSelected] = useState(null)
    const audioRef = useRef(null)
    const [message, setMessage] = useState("")
    const { loading, setLoading } = useContext(LoadingContext)

    useEffect(() => {
        getLemmas(setLemmas, setLemmasCopy, setLoading)
    }, [setLoading])

    return (
        <div className="d-flex gap-1 p-4 vh-100">
            <div className="rounded-2 border border-1 border-info p-2 bg-white w-25">
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <div className="d-flex gap-2 w-100">
                            <Link to={'/home'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white"><i className="fas fa-arrow-left"></i></Link>
                            <h1 className="fs-4 display-6 m-0 p-0 mt-auto mb-auto w-100">Lemas</h1>
                        </div>
                        <button className="btn btn-info text-white rounded-circle" data-bs-toggle="modal" data-bs-target="#addlemma">
                            <i className="fas fa-plus"></i>
                        </button>
                        {
                            message.length > 0 && <LoadingCustom message={message} loading={loading} />
                        }
                        <AddLemmas setLemmaSelected={setLemmaSelected} setLemmasCopy={setLemmasCopy} setLemmas={setLemmas} setLoading={setLoading} setMessage={setMessage} />
                    </div>
                    <input onChange={(e) => filter(e.target.value, lemmas, setLemmasCopy, true)} type="text" placeholder="busque lemas por perguntas..." className="form-control mt-2 border-info" />
                    <div className="overflow-auto position-relative mt-3 lemma-list">
                        {
                            lemmasCopy.length > 0 ?
                                (
                                    lemmasCopy.map((lemma) => (
                                        <div onClick={() => setLemmaSelected(lemma)} key={lemma.id} className={lemmaSelected?.id === lemma.id ? "btn btn-info text-white text-start mb-1 w-100" : "btn btn-outline-info text-start mb-1 w-100"}>
                                            <h1 className="display-4 text-break fs-4 mt-auto mb-auto">{lemma.question}</h1>
                                        </div>
                                    ))
                                )
                                :
                                (
                                    <div className="text-center h-100 d-flex flex-column justify-content-center aliament-items-center">
                                        {
                                            loading ?
                                                (
                                                    <Loading loading={loading} />
                                                )
                                                :
                                                (
                                                    <div>
                                                        <i class="fas fa-inbox text-info"></i>
                                                        <h1 className="display-5 fs-5 m-0 p-0">Sem lema para listar</h1>
                                                        <small>adicione um lema a lista</small>
                                                    </div>
                                                )
                                        }
                                    </div>
                                )
                        }
                        {lemmas.length > 0 && (<Link to={'/questions/sobre lemas/lemas'} role="button" className="btn btn-outline-info position-absolute rounded-pill fw-bold bottom-0 end-0">Ir as perguntas</Link>)}
                    </div>
                </div>
            </div>
            <div className="rounded-2 border border-1 border-info p-2 bg-white w-75">
                <div className="d-flex gap-2">
                    <h2 className="w-100 p-0 m-0 mt-auto mb-auto fs-4 display-4">Lema selecionado</h2>
                    {
                        lemmaSelected && (
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-info rounded-circle" data-bs-toggle="modal" data-bs-target="#editlemma"> <i className="fas fa-edit"></i></button>
                                <EditLemmas audio={audioRef.current} lemmaId={lemmaSelected?.id} lemmaSelected={lemmaSelected} setLemmaSelected={setLemmaSelected} setLemmasCopy={setLemmasCopy} setLemmas={setLemmas} setLoading={setLoading} setMessage={setMessage} />
                                <button className="btn btn-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#remlemma"> <i className="fas fa-trash"></i></button>
                                <RemLemmas lemmaId={lemmaSelected?.id} setLemmaSelected={setLemmaSelected} setLemmasCopy={setLemmasCopy} setLemmas={setLemmas} setLoading={setLoading} setMessage={setMessage} />
                            </div>
                        )
                    }
                </div>

                <div>
                    {
                        lemmaSelected ?
                            (
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between">
                                        <h2>{lemmaSelected.question}</h2>
                                        <audio className="border border-info rounded-pill" controls src={api_midia(lemmaSelected.sound)} />
                                    </div>
                                    <textarea className="form-control display-4 textarea lemma-list border-white" readOnly value={lemmaSelected.answer} />
                                </div>
                            )
                            :
                            (
                                <div className="d-flex h-100 flex-column pt-5 justify-content-center align-items-center">
                                    <i className="fas fa-tasks text-info pt-5 mt-5 fs-1"></i>
                                    <h1 className="display-5 fs-5">Nenhum lema selecionada ainda</h1>
                                </div>
                            )
                    }

                </div>

            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default Lemmas