const Loading = (props) => {

    return (
        <div className="modal fade show" style={{ display: props.loading ? 'block' : '' }} tabIndex="-1" aria-hidden={!props.loading}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content w-25 mx-auto shadow">
                    <div className="modal-body text-center">
                        <div className="spinner-border text-info" role="status"/>
                        <p className="display-4 fs-6 mt-auto mb-auto">Carregando...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading