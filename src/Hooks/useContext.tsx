import { createContext } from "react";

export const SomeContext: any = createContext('zxc')

export const Context = ({ children }: { children: any }) => {
    const zxc: string = 'zxc'

    const appData: any = {
        zxc: zxc
    }

    return <SomeContext.Provider value={appData}> {children} </SomeContext.Provider>
}

// const { zxc } = useContext(SomeContext)