import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import generateQRCode from '../../functions/outhers/qrcode_generate'
import { useRef } from 'react'

const ModalQrCode = (props) => {

    const qrPhoto = useRef(null)

    const handleDownloadQRCode = () => {
        const node = qrPhoto.current

        if (!node) {
            alert('QR Code não encontrado!')
            return
        }

        html2canvas(node).then(canvas => {
            const link = document.createElement('a')
            link.download = 'qrcode.png'
            link.href = canvas.toDataURL('image/png')
            link.click()
        }).catch(err => {
            console.error('Erro ao gerar imagem:', err)
            alert('Erro ao gerar imagem do QR Code.')
        })
    }

    return (
        <div className="modal fade" id="qrcode" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered w-25">
                <div className="modal-content">
                    <div className="modal-header mb-0 border-white text-start">
                        <h1 className="modal-title fs-6">Código QR para sincronização</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body border-white mt-0">
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
                                        <div className='p-3' ref={qrPhoto}>
                                            <QRCode value={props.qrcode || 'Esse é um texte de qrcode'} />
                                        </div>
                                        <div className='d-flex gap-1 p-2 justify-content-end'>
                                            <button onClick={() => generateQRCode(props.setIsGenerating, props.setQrCode, true)} className='btn btn-outline-info rounded-pill p-1'>Atualizar</button>
                                            <button onClick={handleDownloadQRCode} type="button" className="btn btn-info text-white rounded-pill" data-bs-dismiss="modal">
                                                salvar
                                            </button>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalQrCode