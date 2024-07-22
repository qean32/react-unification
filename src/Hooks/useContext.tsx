import { createContext } from "react";

const SomeContext: any = createContext('zxc')

export default SomeContext

export const Context = ({children}: {children: any}) => {
    const appData: any = {

    }

    return <SomeContext.Provider value={appData}> {children} </SomeContext.Provider>
}

// const { zxc } = useContext(SomeContext)