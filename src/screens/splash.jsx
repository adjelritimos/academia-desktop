import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {

  const navigate = useNavigate()

   useEffect(() => {

        const timer = setTimeout(() => {
            navigate('/home')
        }, 3000)


        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <div className='spinner-grow position-relative text-white'>
                    <img className="position-absolute top-50 start-50 translate-middle splash-image m-0" role="status" src="/logo.png" alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Splash