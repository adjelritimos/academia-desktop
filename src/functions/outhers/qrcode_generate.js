const generateQRCode = (setIsGenerating, setQrCode) => {
    setIsGenerating(true)
    try {
        const link = 'http://localhost:5349/user/get/data/to/sync'
        const expiresAt = new Date()
        expiresAt.setHours(expiresAt.getHours() + 24)

        const qr_data = JSON.stringify({ link, expiresAt })

        setQrCode(qr_data)

        setTimeout(() => {
            setIsGenerating(false)
        }, 2000)

    } catch (error) {
        setIsGenerating(false)
        console.error(error)
    }
}

export default generateQRCode