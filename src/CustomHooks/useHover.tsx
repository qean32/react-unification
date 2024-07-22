import { useEffect, useState } from "react";

export default function useHover(ref: any) {
    const [boolean, setBoolean] = useState<boolean>(false)

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: HTMLElement = ref.current

        if (node) {
            node.addEventListener('mouseenter', on)
            node.addEventListener('mouseleave', off)
        }

        return function () {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mouseleave', off)
        }
    }, [])

    return boolean;
}