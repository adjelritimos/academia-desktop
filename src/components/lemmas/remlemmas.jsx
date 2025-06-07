import remLemma from "../../functions/lemmas/remLemma"

const RemLemmas = (props) => {
    return (
        <div className="modal fade" id="remlemma" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog w-25 modal-dialog-centered">
                <div className="modal-content shadow-sm">
                    <div className="modal-header bg-danger p-2 pe-3 text-white fw-bold">
                        <h1 className="modal-title display-4 fs-5" id="exampleModalLabel">Remover lema</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mb-1 mt-0 pt-0">
                        <h3 className="display-5 fs-5">Você está preste a apagar este lema. Tens mesmo certeza de que quer continuar?</h3>
                    </div>
                    <div className="modal-footer border-white mt-0 pt-0">
                        <button type="button" className="btn btn-outline-info rounded-pill fw-bold" data-bs-dismiss="modal">cancelar</button>
                        <button type="button" onClick={()=> {remLemma(props.lemmaId, props.setLemmaSelected, props.setLemmas, props.setLemmasCopy, props.setLoading); props.setMessage("Removendo lema...")}} className="btn btn-danger text-white rounded-pill fw-bold" data-bs-dismiss="modal">remover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemLemmas