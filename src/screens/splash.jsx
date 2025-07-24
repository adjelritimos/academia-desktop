import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../style/splash'

const Splash = () => {

  const navigate = useNavigate()

  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const progressInterval = setInterval(() => {

      setProgress(prev => {

        if (prev >= 100) {

          clearInterval(progressInterval)

          return 100

        }

        return prev + 1

      })

    }, 30)

    const timer = setTimeout(() => {

      navigate('/home/dashboards')

    }, 3000)


    return () => {

      clearTimeout(timer)

      clearInterval(progressInterval)

    }
  }, [navigate])

  return (

    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">

      <div className="text-center mb-4">

        <div className="position-relative d-inline-block">

          <div role='status' className="position-absolute top-50 start-50 translate-middle rounded-circle spinner-grow spinner-grow-sm text-info" style={styles.rounded_image}></div>

          <img className="rounded-circle splash-image" src="/logo.png" alt="Logo" style={styles.image} />

        </div>

      </div>

      <div className='text-center'>

        <p className="mb-1 text-muted">Carregando...</p>

        <div className="progress" style={styles.progress}>

          <div className="progress-bar text-center progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>

        </div>

        <small className="text-muted mt-1 d-block">{progress}%</small>

      </div>
    </div>
  )
}

export default Splash