import { createContext, useEffect, useState } from 'react'
import getLemmas from '../functions/lemmas/getLemmas'
import getCommands from '../functions/commands/getCommands'
import getModules from '../functions/contents/getModules'

export const AppContext = createContext()

export function AppProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [lemmas, setLemmas] = useState([])
    const [members, setMembers] = useState([])
    const [ativities, setAtivities] = useState([])
    const [classes, setClasses] = useState([])
    const [questions, setQuestions] = useState([])
    const [commands, setCommands] = useState([])
    const [lessons, setLessons] = useState([])
    const [modules, setModules] = useState([])
    const [tabNumber, setTabNumber] = useState(1)

    const load_data = async ()=> {
        await getLemmas(setLemmas, setLoading)
        await getCommands(setCommands, setLoading)
        await getModules(setModules, setLoading)
    }

    useEffect(()=> {
        load_data()
    }, [])

    return (
        <AppContext.Provider value={{ ativities, setAtivities, classes, setClasses, loading, setLoading, tabNumber, setTabNumber, lemmas, setLemmas,  commands, setCommands, lessons, setLessons, modules, setModules, members, setMembers, questions, setQuestions}}>
            {children}
        </AppContext.Provider>
    )

}