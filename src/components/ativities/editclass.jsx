import { useState, useEffect } from "react"
import editActivity from "../../functions/ativities/editativity"


const EditAtivity = ({ seletedAtivity, setAtivities, setLoading, setMessage  }) => {

    const [title, setTitle] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")

    useEffect(() => {
        if (seletedAtivity) {
            setTitle(seletedAtivity.title || "")
            setDescricao(seletedAtivity.descricao || "")
            setData(seletedAtivity.data?.substring(0, 10) || "")
        }
    }, [seletedAtivity])

    const isValid = () => title.trim() && descricao.trim() && data

    const submitEdit = async (e) => {
        e.preventDefault()
        await editActivity(seletedAtivity.id, title, descricao, data, setAtivities, setLoading)
        setMessage("Editando atividade...")
    }

    return (
        <div className="modal fade" id="editativity" tabIndex="-1">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => submitEdit(e)} className="modal-content">
                    <div className="modal-header bg-info text-white">
                        <h5 className="modal-title">Editar atividade</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <label>Título</label>
                        <input className="form-control mb-2" value={title} onChange={e => setTitle(e.target.value)} required />

                        <label>Descrição</label>
                        <textarea className="form-control mb-2" rows="4" value={descricao} onChange={e => setDescricao(e.target.value)} required />

                        <label>Data</label>
                        <input className="form-control mb-2" type="date" value={data} onChange={e => setData(e.target.value)} required />
                    </div>
                    <div className="modal-footer border-white">
                        <button type="submit" className="btn btn-info w-100 text-white" data-bs-dismiss={isValid() ? "modal" : ""}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAtivity