import { useLocation } from "react-router";

type Props = {
 
}
export const UseLocation = ({}: Props) => {
    const location = useLocation()

    console.log(location)
    return ( 
        <div>
            
        </div>
    );
}