import { createContext, useEffect, useState } from 'react'
import getLemmas from '../functions/lemmas/getLemmas'
import getCommands from '../functions/commands/getCommands'
import getModules from '../functions/contents/getModules'
import getMembers from '../functions/members/getMembers'
import getClasses from '../functions/classes/getClass'
import getActivities from '../functions/ativities/getativity'
import getLessons from '../functions/lessons/getLessons'
import getAttendances from '../functions/attendances/getAttedances'

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
    const [attendances, setAttendances] = useState([])
    const [tabNumber, setTabNumber] = useState(1)

    const load_data = async () => {
        await getLemmas(setLemmas, setLoading)
        await getCommands(setCommands, setLoading)
        await getMembers(setMembers, setLoading)
        await getModules(setModules, setLoading)
        await getClasses(setClasses, setLoading)
        await getActivities(setAtivities, setLoading)
        await getAttendances(setAttendances, setLoading)
        await getLessons(setLessons, setLoading)
    }

    useEffect(() => {
        load_data()
    }, [])

    return (
        <AppContext.Provider value={{ ativities, setAtivities, classes, setClasses, loading, setLoading, tabNumber, setTabNumber, lemmas, setLemmas, commands, setCommands, lessons, setLessons, modules, setModules, members, setMembers, questions, setQuestions, attendances, setAttendances }}>
            {children}
        </AppContext.Provider>
    )

}