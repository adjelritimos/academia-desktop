import remClasse from "../../functions/classes/remclass"

const RemClasse = (props) => {

    const remmove = async () => {
        await remClasse(props.classeId, props.setClasses, props.setLoading)
        props.setMessage("Removendo aula...")
    }

    return (
        <div className="modal fade" id="remclasse" tabIndex="-1">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title">Remover aula</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p>Tem certeza que deseja remover esta aula?</p>
                    </div>
                    <div className="modal-footer border border-white">
                        <button className="btn btn-outline-info" data-bs-dismiss="modal">Cancelar</button>
                        <button className="btn btn-danger" onClick={remmove} data-bs-dismiss="modal">Remover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemClasse