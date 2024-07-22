import { useEffect, useState } from "react";

const UseState = () => {
    const [state, setState] = useState<any>('zxc')

    useEffect(() => {
        console.log(state)
        setState('zxc_')
    },[state])

    return ( 
        <></>
     );
}
 
export default UseState;