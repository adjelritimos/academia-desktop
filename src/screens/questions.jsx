import { Link } from "react-router-dom"



const Question = () => {



    return (
        <div className="p-3 d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="d-flex mt-3 justify-content-between w-100 gap-2 bg-white p-2 rounded">
                <div className="d-flex gap-2">
                    <Link to={'/home'} className="btn btn-outline-info mt-auto mb-auto rounded-circle border-white"><i className="fas fa-arrow-left"></i></Link>
                    <h1 className="fs-4 display-3 mt-auto mb-auto">As perguntas organizadas em categorias</h1>
                </div>

            </div>

            <div className="d-flex flex-column w-100 h-100 gap-2 mt-2">
                <div className="d-flex gap-2 w-100 h-100">
                    <Link to={'/questions/sobre lemas/lemas'} role="button" className="w-50 question p-3 btn d-flex justify-content-center align-items-center btn-height-2 btn-outline-info bg-white">
                        <h1>Lemas</h1>
                    </Link>

                    <Link to={'/questions/sobre comandos de voz/comandos'} role="button" className="w-50 question p-3 btn d-flex justify-content-center align-items-center btn-height-2 btn-outline-info bg-white">
                        <h1>Comandos de voz</h1>
                    </Link>
                </div>

                <Link to={'/questions/sobre conteúdos/conteúdos'} role="button" className="w-100 h-100 question btn d-flex justify-content-center align-items-center btn-height-3 btn-outline-info bg-white">
                    <h1>Sobre os conteúdos</h1>
                </Link>
            </div>

        </div>
    )

}

export default Question