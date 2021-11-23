import React, {useState} from 'react'

export const toggleContext = React.createContext()

const ToggleContext = ({children}) => {
    const [active, toggle] = useState(false)

    const providerValue = {
        active: active,
        toggle: toggle
    }

    return (
        <toggleContext.Provider value={providerValue}>
            {children}
        </toggleContext.Provider>
    )
}

export default ToggleContext
