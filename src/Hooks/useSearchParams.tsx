import { useSearchParams } from "react-router-dom";

const UseSearchParams = () => {
    const id = useSearchParams()

    console.log(id)
    return (
        <>
        </>
    );
}

export default UseSearchParams;