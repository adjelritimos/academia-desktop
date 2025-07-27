import { useState } from "react"
import addActivity from "../../functions/ativities/addativity"

const AddAtivity = ({ setAtivities, setLoading, setMessage }) => {
  const [title, setTitle] = useState("")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")

  const isValid = () => title.trim() && descricao.trim() && data

  const limpar = () => {
    setTitle("")
    setDescricao("")
    setData("")
  }

  const mostrarErro = () => {
    if (!isValid()) {
      setError("Preencha todos os campos.")
      setTimeout(() => setError(""), 3000)
    }
  }

  const submitAdd = async(e) => {
    e.preventDefault()
    await addActivity(title, descricao, data, setAtivities, setLoading)
    limpar()
    setMessage("Adicionando atividade...")
  }

  return (
    <div className="modal fade" id="addativity" tabIndex="-1">
      <div className="modal-dialog w-25 modal-dialog-centered">
        <form onSubmit={(e) => submitAdd(e)} className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Nova atividade</h5>
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
            <button type={isValid() ? "submit" : "button"} onClick={mostrarErro} className="btn btn-info w-100 text-white" data-bs-dismiss={isValid() ? "modal" : ""}>Adicionar</button>
          </div>
          {error && <small className="text-danger text-center">{error}</small>}
        </form>
      </div>
    </div>
  )
}

export default AddAtivity