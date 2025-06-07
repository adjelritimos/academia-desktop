const LoadingCustom = (props) => {

    return (
        <div className={props.loading ? "border bg-dark shadow p-3 bg-white rounded position-absolute top-50 start-50 translate-middle" : "visually-hidden"}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <div className="spinner-border text-info" role="status"/>
                        <p className="display-4 fs-6 mt-auto mb-auto"> {props.message} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCustom