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
import { LoadingProvider } from './contexts/contextLoading'



const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lemmas" element={<Lemmas />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="/lessons/:module/:moduleId" element={<Lessons />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/questions/:what/:about" element={<QuestionManagemant />} />
      </Routes>
    </Router>
  )
}


const App = () => {

  return (
    <LoadingProvider>
      <Routers />
    </LoadingProvider>
  )

}

export default App
