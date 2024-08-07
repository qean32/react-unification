import { useQuery } from "react-query";
import useRQRequest from "../../CustomHooks/useRQGETRequest";

type Props = {

}

export const RQMain = ({ }: Props) => {
    const data = useQuery('repoData', () => useRQRequest('https://jsonplaceholder.typicode.com/users', ''))

    console.log(data)
    return (
        <div>
            
        </div>
    );
}