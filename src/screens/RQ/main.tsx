import { useQuery } from "react-query";
import { USERServices } from "../../RQServices/USERServices";
import { useState } from "react";
import { ListUsers } from "./ListUsers";

type Props = {

}

export const RQMain = ({ }: Props) => {
    const [page, setPage] = useState(0)
    const data = useQuery(['users', page], () => USERServices.GETUsers(page), { keepPreviousData: true })


    // const [users, setUsers] = useState<any[]>([])

    // useEffect(() => {
    //     if (data) setUsers(prev => [...prev, ...data.data.results)
    // }, [data])

    return (
        <div style={{ margin: '20px' }}>
            <ListUsers data={data} />
            <button onClick={() => setPage(prew => prew + 4)} style={{ margin: '20px 0' }}>получить следующую пачку</button>
            <button onClick={() => setPage(prew => prew - 4)} style={{ margin: '20px 40px' }}>получить прошлую пачку</button>
        </div>
    );
}