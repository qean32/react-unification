import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
    const [state, setState] = useState<string>('zxc')

    useEffect(() => {
        console.log(state)
    }, [])

    useLayoutEffect(() => {
        console.log(state)
        
        setState('zxc_')
    }, [])

    return (
        <></>
    );
}

export default UseLayoutEffect;