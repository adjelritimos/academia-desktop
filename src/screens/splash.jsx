import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../style/splash'

const Splash = () => {

  const navigate = useNavigate()

   useEffect(() => {

        const timer = setTimeout(() => {
            navigate('/home')
        }, 3000)


        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={styles.container}>

            <div style={styles.backgroundElements}>
                <div style={styles.bgElement1}></div>
                <div style={styles.bgElement2}></div>
                <div style={styles.bgElement3}></div>
                <div style={styles.bgElement4}></div>
            </div>

            {/* Radial gradient overlay */}
            <div style={styles.overlay}></div>

            <div className="text-center" style={styles.textCenter}>
                <div className='spinner-grow position-relative text-white' style={styles.spinnerGrow}>
                    {/* Spinning ring effect */}
                    <div style={styles.spinningRing}></div>

                    {/* Pulsing glow effect */}
                    <div style={styles.glowEffect}></div>

                    <img 
                        className="position-absolute top-50 start-50 translate-middle splash-image m-0" 
                        role="status" 
                        src="/logo.png" 
                        alt="Logo"
                        style={styles.logo}
                    />
                </div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        style={styles.particle(i)}
                    ></div>
                ))}

                <div style={styles.loadingText}>
                    Carregando...
                </div>

                <div style={styles.progressContainer}>
                    <div style={styles.progressBar}></div>
                </div>
            </div>
        </div>
    )
}

export default Splash