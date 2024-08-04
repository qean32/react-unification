import { useEffect, useRef } from "react";

const UseRef = () => {
    const divRef: any = useRef()

    useEffect(() => {
        console.log(divRef)
    }, [])

    return (
        <div ref={divRef} className="zxc"></div>
    );
}

export default UseRef;

