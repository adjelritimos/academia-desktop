import { useState } from "react"
import addClasse from "../../functions/classes/addclass"

const AddClasse = (props) => {
    const [title, setTitle] = useState("")
    const [tytpes, setTytpes] = useState("prática")
    const [data, setData] = useState("")
    const [error, setError] = useState("")

    const isCheck = () => title.trim() !== "" && tytpes && data

    const showError = () => {
        if (!isCheck()) {
            setError("Preencha todos os campos corretamente.")
            setTimeout(() => setError(""), 3000)
        }
    }

    const cleanForm = () => {
        setTitle("")
        setTytpes("prática")
        setData("")
    }

    const submitAdd = async (e) => {
        e.preventDefault()
        props.setMessage("Adicionando aula...")
        await addClasse(title, tytpes, data, props.setClasses, props.setLoading)
        cleanForm()

    }

    return (
        <div className="modal fade" id="addclasse" tabIndex="-1">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => submitAdd(e)} className="modal-content">
                    <div className="modal-header bg-info text-white">
                        <h5 className="modal-title">Nova aula</h5>
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
                        <button type={isCheck() ? "submit" : "button"} onClick={showError} className="btn btn-info w-100 text-white" data-bs-dismiss={isCheck() ? "modal" : ""}>Adicionar</button>
                    </div>
                    {error && <small className="text-danger text-center">{error}</small>}
                </form>
            </div>
        </div>
    )
}

export default AddClasse