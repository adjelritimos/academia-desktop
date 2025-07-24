import Calendary from '../components/others/calendar'
import HeaderDashBoard from '../components/others/headerdash'
import MessageRotator from '../components/others/message'
import getMessages from '../functions/outhers/getMessages'

const DashboardAlyssa = () => {
  return (
    <div className="">
      <div className="p-4 rounded-4 mb-4 d-flex align-items-center justify-content-between" style={{ background: '#ECF2F5' }}>
        <div>
          <h3 className="fw-bold">Academia de Treinamento Evangelístico</h3>
          <p className="text-muted">Departamento de Evangelização</p>
        </div>
        <div>
          <img src="/logo.png" alt="Illustration" style={{ width: 150 }} />
        </div>
      </div>

      {/* Overview */}
      <div className="row text-center mb-4">
        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100" style={{ backgroundColor: '#f1c40f' }}>
            83% <br /> Open Rate
          </div>
        </div>
        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100" style={{ backgroundColor: '#6c5ce7' }}>
            77% <br /> Complete
          </div>
        </div>
        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100" style={{ backgroundColor: '#e84393' }}>
            91 <br /> Unique Views
          </div>
        </div>
        <div className="col card-altura">
          <div className="p-2 rounded-4 text-white fw-bold h-100" style={{ backgroundColor: '#a29bfe' }}>
            126 <br /> Total Views
          </div>
        </div>
      </div>

      {/* Slides List */}
      <div className="mb-3 p-3 bg-white rounded-4 shadow-sm border border-info message-altura">
        <MessageRotator messages={getMessages()} />
      </div>

    </div>
  )
}


const Home = () => {

  return (
    <div className="container-fluid rounded-start-4 bg-white">
      <HeaderDashBoard />
      <div className='d-flex gap-2 overflow-auto div-home'>
        <div className='w-75 h-100'>
          <DashboardAlyssa />
        </div>
        <div className='w-25 h-100'>
          <Calendary />
        </div>
      </div>
    </div>
  )
}

export default Home
