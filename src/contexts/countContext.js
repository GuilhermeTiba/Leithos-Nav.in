import React, {useContext, useState} from 'react'

const CounterContext = React.createContext()

const CountContext = ({children}) => {

    const [countDispo, setCountDispo] = useState(0);
    const [countOcup, setCountOcup] = useState(0);
    const [countEmLimp, setCountEmLimp] = useState(0);
    const [countEmManu, setCountEmManu] = useState(0);
    const [countAguardLimp, setCountAguardLimp] = useState(0);
    const [countAguardManu, setCountAguardManu] = useState(0);

    return (
        <CounterContext.Provider value ={{
            countDispo, 
            setCountDispo, 
            countOcup, 
            setCountOcup,
            countEmLimp,
            setCountEmLimp,
            countEmManu, setCountEmManu,
            countAguardLimp, setCountAguardLimp,
            countAguardManu, setCountAguardManu
        }}>
                {children}
        </CounterContext.Provider>
    )
}
export const useCount = () => useContext(CounterContext)
export default CountContext
