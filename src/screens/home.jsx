import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalQrCode from '../components/others/modal_qrcode'
import generateQRCode from '../functions/outhers/qrcode_generate'
import checkQrCode from '../functions/outhers/checkQrCode'


const Home = () => {

    const [isGenerating, setIsGenerating] = useState(false)
    const [qrCode, setQrCode] = useState(null)
    const [hasQrcodeValid, setHasQrcodeValid] = useState(checkQrCode())

    useEffect(()=> {
        setQrCode(localStorage.getItem('qr_data'))
        const intervalId = setInterval(setHasQrcodeValid(checkQrCode()), 2000)
        return () => clearInterval(intervalId)
    }, [hasQrcodeValid])

    return (
        <div className="d-flex justify-content-center align-items-center w-50 mx-auto vh-100">
            <div className="text-center">
                <div className=''>
                    <img className="text-light splash-image m-0" role="status" src="/logo.png" alt="Logo" />
                    <div className='d-flex gap-1 mt-3'>
                        <Link to={'/lemmas'} className='btn d-flex justify-content-center align-items-center  btn-outline-light btn-height w-50 border-info text-info fw-bold bg-white'>
                            Lemas
                        </Link>

                        <Link to={'/commands'} className='btn d-flex justify-content-center align-items-center btn-outline-light w-50 btn-height border-info text-info fw-bold bg-white'>
                            Comandos de voz
                        </Link>
                    </div>

                    <div className='mt-2'>
                        <Link to={'/contents'} className='btn d-flex justify-content-center align-items-center btn-outline-light w-100 btn-height border-info text-info fw-bold bg-white'>
                            Conteúdos
                        </Link>
                    </div>

                    <div className='mt-2'>
                        <Link to={'/questions'} className='btn d-flex justify-content-center align-items-center btn-info w-100 btn-height border-info text-white fw-bold'>
                            Perguntas para prática
                        </Link>
                    </div>

                    <div className='mt-2'>
                        <button onClick={()=> generateQRCode(setIsGenerating, setQrCode, hasQrcodeValid)} data-bs-toggle="modal" data-bs-target="#qrcode" className='btn d-flex flex-column justify-content-center align-items-center btn-outline-light w-100 border-info text-info fw-bold bg-white'>
                           <i className='fas fa-qrcode fs-1'></i>
                           <p className='display-4 fs-6'>Gerar qrcode de sincronização</p>
                        </button>
                        <ModalQrCode isGenerating={isGenerating} qrcode={qrCode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home