import { useCallback, useState } from "react";
import Cookies from 'js-cookie'

export default function useCookie(key: string, defaultValue: any) {
    const [value, setValue] = useState<any>(() => {
        const value_: any = Cookies.get(key)
        if (value_ != null) return Cookies.get(key)

        return defaultValue
    })

    const updateCookie = useCallback((newValue: any, options: any) => {
        Cookies.set(key, newValue, options)
        setValue(newValue)
    }, [])

    const deleteCookie = useCallback(() => {
        Cookies.remove(key)
        setValue(null)
    }, [])

    return [value, updateCookie, deleteCookie]
}
