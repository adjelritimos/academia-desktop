import { createContext, useState } from 'react'

export const LoadingContext = createContext()

export function LoadingProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [ tabNumber, setTabNumber ] = useState(1)

    return (
        <LoadingContext.Provider value={{ loading, setLoading, tabNumber, setTabNumber }}>
            {children}
        </LoadingContext.Provider>
    )

}