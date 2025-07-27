import { useEffect, useState } from "react"
import editClasse from "../../functions/classes/editclass"


const EditClasse = (props) => {

    const [title, setTitle] = useState("")
    const [tytpes, setTytpes] = useState("")
    const [data, setData] = useState("")

    useEffect(() => {
        if (props.classe) {
            setTitle(props.classe.title || "")
            setTytpes(props.classe.tytpes || "")
            setData(props.classe.data?.substring(0, 10) || "")
        }
    }, [props.classe])

    const isCheck = () => title.trim() !== "" && tytpes && data

    const submitEdit = async (e) => {
        e.preventDefault()
        await editClasse(props.classe.id, title, tytpes, data, props.setClasses, props.setLoading)
        props.setMessage("Editando aula...")
    }

    return (
        <div className="modal fade" id="editclasse" tabIndex="-1">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => submitEdit(e)} className="modal-content">
                    <div className="modal-header bg-info text-white">
                        <h5 className="modal-title">Editar aula</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <label>Tema</label>
                        <input className="form-control mb-2" value={title} onChange={e => setTitle(e.target.value)} required />

                        <label>Tipo</label>
                        <select className="form-control mb-2" value={tytpes} onChange={e => setTytpes(e.target.value)} required>
                            <option value="prática">Prática</option>
                            <option value="teórica">Teórica</option>
                        </select>

                        <label>Data</label>
                        <input className="form-control mb-2" type="date" value={data} onChange={e => setData(e.target.value)} required />
                    </div>
                    <div className="modal-footer border border-white">
                        <button type="submit" className="btn btn-info w-100 text-white" data-bs-dismiss={isCheck() ? "modal" : ""}>Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditClasse
