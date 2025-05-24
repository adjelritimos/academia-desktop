import api_qr from "../../server/api_qr"
import errorMessage from "../feedbacks/errormessage"

function generate_word() {

    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'

    let word = ''

    for (let i = 0; i < 30; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        word += chars[randomIndex]
    }

    return word
}

const generateQRCode = async (setIsGenerating, setQrCode, hasValidQrCode) => {

    if (hasValidQrCode) {
       
        try {

            setIsGenerating(true)

            const word = generate_word()

            const date = new Date()

            date.setHours(date.getHours() + 24)

            const response = await api_qr.post('/save/a/word/and/date/for/qrcode', { word, date })
            if (response.status === 200) {
                const qr_data = JSON.stringify({ word, date })
                localStorage.setItem('qr_data', qr_data)
                setQrCode(qr_data)
            }

            setTimeout(() => {
                setIsGenerating(false)
            }, 3000)

        } catch (error) {
            setIsGenerating(false)
            setQrCode(null)
            errorMessage('Ocorreu um erro na geração do QR Code')
            console.error("Erreur lors de la génération du QR code :", error)
        }
    }
    else {
        console.log('Já tens um qrcode...')
    }

}

export default generateQRCode