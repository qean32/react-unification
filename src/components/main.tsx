import { useAppDispatch, useAppSelector } from "../CustomHooks/ReduxHooks";

interface props_ {

}

const Main = ({}: props_) => {
    const todos = useAppSelector(state => state.todos.todo)
    console.log(todos)
    return ( 
        <>zxc123</>
     );
}
 
export default Main;