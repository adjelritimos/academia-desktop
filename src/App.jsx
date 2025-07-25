import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home'
import Splash from './screens/splash'
import Lemmas from './screens/lemmas'
import Commands from './screens/commands'
import Contents from './screens/contents'
import Lessons from './screens/lessons'
import Question from './screens/questions'
import QuestionManagemant from './screens/question_managemant'
import HomeIndex from './screens/homeIndex'
import Members from './screens/members'
import Classes from './screens/classes'
import Ativities from './screens/ativities'
import { AppProvider } from './contexts/app_context'



const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<HomeIndex />}>
          <Route path="dashboards" element={<Home />} />
          <Route path="members" element={<Members />} />
          <Route path="lemmas" element={<Lemmas />} />
          <Route path="commands" element={<Commands />} />
          <Route path="contents" element={<Contents />} />
          <Route path="classes" element={<Classes />} />
          <Route path="ativities" element={<Ativities />} />
          <Route path="lessons/:module/:moduleId" element={<Lessons />} />
          <Route path="questions" element={<Question />} />
          <Route path="questions/:what/:about" element={<QuestionManagemant />} />
        </Route>
      </Routes>
    </Router>
  )
}


const App = () => {

  return (
    <AppProvider>
      <Routers />
    </AppProvider>
  )

}

export default App
