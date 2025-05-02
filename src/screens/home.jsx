import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

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
                </div>
            </div>
        </div>
    )
}

export default Home