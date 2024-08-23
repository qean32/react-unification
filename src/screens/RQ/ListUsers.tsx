import { UseQueryResult } from "react-query";

type Props = {
    data: UseQueryResult<any, unknown>
}
export const ListUsers = ({ data }: Props) => {

    if (data.isLoading) return <>Loading..</>

    return (
        <>
            {data.data?.results.map((el: any) => <li key={el.id}>{el.first_name} {el.last_name} <br /></li>)}
        </>
    );

}