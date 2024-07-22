import { useCallback, useState } from "react";

export default function useBoolean(defaultValue: boolean) {
    const [toggle, setToggle] = useState<boolean>(defaultValue)

    const toggleFn = useCallback(() => {
        setToggle(!toggle)
    }, [])

    return [toggle, toggleFn]
}

// const [view, toddle] = useBoolean(false)