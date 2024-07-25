import { ChangeEvent, useCallback, useState } from "react";

export default function useInput(value: string) {
    const [inputValue, setInputValue] = useState<string>(value)

    const onChange_ = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }, [])

    return {
        inputValue,
        onChange: onChange_
    }
}