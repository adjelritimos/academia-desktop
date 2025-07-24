import { useEffect, useState } from 'react'


const MessageRotator = ({ messages }) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % messages.length)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [messages.length])

    const currentMessage = messages[index]

    return (
        <div className="w-100 h-100">
            <button className="p-2 text-white fw-bold bg-info rounded-pill">{currentMessage.versiculo}</button>
            <p className='p-1 mt-2'>{currentMessage.texto}</p>
            <small className="text-muted mt-auto">{currentMessage.categoria}</small>
        </div>
    )
}

export default MessageRotator