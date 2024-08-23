import { useNavigate } from "react-router";

type Props = {

}
export const UseNavigation = ({ }: Props) => {
    const navigate = useNavigate()

    return (
        <>
            <div onClick={() => navigate(-1)}>        </div>
            <div onClick={() => navigate('/home')}>        </div>
            <div onClick={() => navigate('homeroom')}>        </div>
        </>
    );
}