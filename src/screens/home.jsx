import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModalQrCode from '../components/others/modal_qrcode'
import generateQRCode from '../functions/outhers/qrcode_generate'
import checkQrCode from '../functions/outhers/checkQrCode'
import { LoadingContext } from '../contexts/contextLoading'
import HeaderDashBoard from '../components/others/headerdash'

const Home = () => {

  const [isGenerating, setIsGenerating] = useState(false)
  const [qrCode, setQrCode] = useState(null)
  const [hasQrcodeValid, setHasQrcodeValid] = useState(checkQrCode())
  const { setTabNumber } = useContext(LoadingContext)

  useEffect(() => {

    setQrCode(localStorage.getItem('qr_data'))
    setTabNumber(1)
    const intervalId = setInterval(() => setHasQrcodeValid(checkQrCode()), 2000)
    return () => clearInterval(intervalId)
  }, [hasQrcodeValid, setTabNumber])

  return (
    <div className="container-fluid rounded-start-4 bg-white">
      <HeaderDashBoard />
    </div>
  )
}

export default Home
