import { useEffect, useState } from "react";

export default function useDebouse(value: any, daley: number = 400) {
    const [debousedValue, setDebousedValue] = useState<any>(value)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebousedValue(value)
        }, daley)

        return clearTimeout(timeOut)
    }, [value])

    return debousedValue;
}