import { useEffect, useState } from "react";

export default function useLocalStorege(key: string, defaultValue: any) {
    const [value, setValue] = useState<any>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        return defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}