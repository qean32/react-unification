import { useEffect, useLayoutEffect, useState } from "react";

const UseState = () => {
    const [state, setState] = useState<any>('zxc')

    useEffect(() => {
        setState('zxc_')
    },[])

    useLayoutEffect(() => {
        console.log(state)
        setState('zxc_')
    },[])

    return ( 
        <></>
     );
}
 
export default UseState;