import removeActivity from "../../functions/ativities/remativity"

const RemAtivity = ({ ativityId, setAtivities, setLoading, setMessage }) => {

    const remove = async () => {
        await removeActivity(ativityId, setAtivities, setLoading)
        setMessage("Removendo atividade...")
    }

    return (
        <div className="modal fade" id="remativity" tabIndex="-1">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title">Remover atividade</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>Tem certeza que deseja remover esta atividade?</p>
                    </div>
                    <div className="modal-footer border-white">
                        <button className="btn btn-outline-info" data-bs-dismiss="modal">Cancelar</button>
                        <button className="btn btn-danger" onClick={remove} data-bs-dismiss="modal">Remover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemAtivity
