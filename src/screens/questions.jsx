import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { LoadingContext } from "../contexts/contextLoading"



const Question = () => {

    const { setTabNumber } = useContext(LoadingContext)

    useEffect(() => {
        setTabNumber(8)
    }, [setTabNumber])

    return (
        <div className="p-2 d-flex flex-column justify-content-center align-items-center h-100">
            <div className="d-flex justify-content-between w-100 gap-2 bg-white p-2 rounded">
                <div className="d-flex gap-2">
                    <h1 className="fs-4 display-3 mt-auto mb-auto fw-bold">As perguntas organizadas em categorias</h1>
                </div>

            </div>

            <div className="d-flex flex-column w-100 h-100 gap-2 mt-2">
                <div className="d-flex gap-2 w-100 h-100">
                    <Link to={'/home/questions/sobre lemas/lemas'} role="button" className="w-50 question p-3 btn d-flex justify-content-center align-items-center btn-height-2 btn-outline-info bg-white">
                        <h1>Lemas</h1>
                    </Link>

                    <Link to={'/home/questions/sobre comandos de voz/comandos'} role="button" className="w-50 question p-3 btn d-flex justify-content-center align-items-center btn-height-2 btn-outline-info bg-white">
                        <h1>Comandos de voz</h1>
                    </Link>
                </div>

                <Link to={'/home/questions/sobre conteúdos/conteúdos'} role="button" className="w-100 h-100 question btn d-flex justify-content-center align-items-center btn-height-3 btn-outline-info bg-white">
                    <h1>Sobre os conteúdos</h1>
                </Link>
            </div>

        </div>
    )

}

export default Question