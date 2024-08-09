import { UseQueryResult } from "react-query";

type Props = {
    data: UseQueryResult<any, unknown>
}
export const ListUsers = ({ data }: Props) => {
    console.log(data)

    if (data.isLoading) return <>zxc</>

    return (
        <>
            {data.data?.results.map((el: any) => <>{el.first_name} {el.last_name} <br /></>)}
        </>
    );

}