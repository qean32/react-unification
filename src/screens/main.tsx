import { useAppDispatch, useAppSelector } from "../CustomHooks/ReduxHooks";
import { fetchUsers } from "../Redux/Reducers/ActionCreators";

interface props_ {

}

const Main = ({}: props_) => {
    const zxc = useAppSelector(state => state.todos.count)
    const dispatch = useAppDispatch()

    dispatch(fetchUsers)

    return (
        <>
            <div style={{margin: '20px'}}>{zxc}</div>
        </>
    );
}

export default Main;