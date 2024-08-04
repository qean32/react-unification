import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../CustomHooks/ReduxHooks";
import { fetchUsers } from "../Redux/Reducers/ActionCreators";
import { cashServices } from "../Redux/Services/cashServices";

interface props_ {

}

const Main = ({ }: props_) => {
    const zxc = useAppSelector(state => state.users.count)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchUsers(dispatch)
    }, [])
    const [cre, dafa] = cashServices.usePOSTUserMutation()

    const z = async () => {
        await cre({ author: 1, price: 4123, content: 'wqsad', direction: 1 })
    }

    useEffect(() => {
        z()
    }, [])

    console.log(dafa)

    return (
        <>
            <div style={{ margin: '20px' }}>{zxc}</div>
        </>
    );
}

export default Main;