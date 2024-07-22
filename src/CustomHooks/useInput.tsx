import { ChangeEvent, useCallback, useState } from "react";

export default function useInput(value: string | number) {
    const [inputValue, setInputValue] = useState<string | number>(value)

    const onChange_ = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }, [])

    return {
        inputValue,
        onChange: onChange_
    }
}