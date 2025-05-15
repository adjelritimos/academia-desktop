import errorMessage from "../feedbacks/errormessage"

const generateQRCode = (setIsGenerating, setQrCode, hasValidQrCode) => {


    if (hasValidQrCode) {
        return
    }

    try {

        setIsGenerating(true)

        const link = 'xkjqbztrmfapldcohwnsigyveauoxkjqbztrmfapldcohwnsigyveauoxkjqbztrmfapldcohwnsigyveauoxkjqbztrmfapldcohwnsigyveauoxkjqbztrmfapldcohwnsigyveauo'

        const expiresAt = new Date()

        expiresAt.setHours(expiresAt.getHours() + 24)

        const qr_data = JSON.stringify({ link, expiresAt })

        localStorage.setItem('qr_data', qr_data)

        setQrCode(qr_data)

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

export default generateQRCode