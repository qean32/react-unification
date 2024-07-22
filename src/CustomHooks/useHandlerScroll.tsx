import { useEffect, useState } from "react";

export default function useHandlerScroll(ref: any, daley: number = 100) {
    const [boolean, setBoolean] = useState<boolean>(false)

    const on = () => setBoolean(true)
    const off = () => setBoolean(false)

    useEffect(() => {
        const node: HTMLElement = ref.current

        const fn = () => {
            if (node.getBoundingClientRect().top < window.innerHeight - daley) {
                on()
            } else {
                off()
            }
        }

        window.addEventListener('scroll', fn)

        return function () {
            window.removeEventListener('scroll', fn)
        }

    }, [])

    return boolean;
}