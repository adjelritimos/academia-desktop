import QRCode from 'react-qr-code'

const ModalQrCode = (props) => {
    
    return (
        <div className="modal fade" id="qrcode" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered w-25">
                <div className="modal-content">
                    <div className="modal-header border-white text-start">
                        <h1 className="modal-title fs-6">Código QR para sincronização</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white">
                        {
                            props.isGenerating ?
                                (
                                    <div className="d-flex gap-2 justify-content-center">
                                        <div className="spinner-border text-info" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                        <h1 className="display-4 fs-4">Gerando QR Code...</h1>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <QRCode value={props.qrcode || 'Esse é um texte de qrcode'} />
                                    </div>
                                )
                        }
                    </div>
                    <div className="modal-footer border-white">
                        <button type="button" className="btn btn-info text-white rounded-pill" data-bs-dismiss="modal">
                            Baixar para compartilhar
                        </button>
                        <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalQrCode