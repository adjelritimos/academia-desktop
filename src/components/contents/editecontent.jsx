import { useEffect, useState } from "react"
import editModule from "../../functions/contents/editModule"

const EditContent = (props) => {

    const [name, setName] = useState(props.moduleName)
    const [error, setError] = useState('')

    const IsError = () => {
        if (!isCheck())
            setError('Preecha o formulario devidamente')
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    useEffect(() => {
        setName(props.moduleName)
    }, [props.moduleName])

    const isCheck = () => {
        const validname = typeof name === 'string' && name.trim().length > 0

        return validname
    }

    return (
        <div className="modal fade" id="editcontent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <form onSubmit={(e) => { editModule(e, props.moduleId, name, props.setModules, props.setLoading); props.setMessage("esditando o módulo") }} className="modal-content">
                    <div className="modal-header bg-info p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Editar o módulo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <div className="mb-2">
                            <label htmlFor="name">Nome do módulo</label>
                            <input required value={name} maxLength={40} onChange={(e) => setName(e.target.value)} type="text" placeholder="Insira o nome do módulo" className="form-control border-info mt-1" />
                        </div>
                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button type={isCheck() ? "submit" : "button"} onClick={IsError} className="btn btn-info text-white w-100 rounded-pill fw-bold" data-bs-dismiss={isCheck() ? "modal" : ""}>salvar</button>
                    </div>
                    <small className="text-center text-danger mb-2 fw-bold"> {error} </small>
                </form>
            </div>
        </div>
    )
}

export default EditContent