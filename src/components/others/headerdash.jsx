import { BsQrCodeScan } from "react-icons/bs"

const HeaderDashBoard = () => {

    const getDate = () => {
        return new Date().toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    }

    return (
        <div className="d-flex pt-3 rounded-start-4 justify-content-between align-items-center mb-4">
            <div className="">
                <h3 className="fw-bold text-info">Painel Administrativo</h3>
                <p className="text-muted">{ getDate() }</p>
            </div>
            <div className="d-flex gap-2">
                <div className="mt-auto mb-auto d-flex bg-secondary-subtle p-1 gap-2 rounded-pill">
                    <p className="mt-auto mb-auto display-6 fw-bold fs-6 ms-2">Presenças</p>
                    <button className="btn btn-light rounded-circle">
                        <BsQrCodeScan />
                    </button>
                </div>
                <div className="mt-auto mb-auto d-flex bg-secondary-subtle p-1 gap-2 rounded-pill">
                    <p className="mt-auto mb-auto display-6 fw-bold fs-6 ms-2">conteúdos</p>
                    <button className="btn btn-light rounded-circle">
                        <BsQrCodeScan />
                    </button>
                </div>
                <img src="/logo.png" alt="Logo" className="mt-auto mb-auto rounded-circle logo border border-info shadow-sm" />
            </div>
        </div>
    )
}

export default HeaderDashBoard