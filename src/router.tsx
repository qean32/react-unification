import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Hooks/useContext";
// import Main from "./screens/main";
import { RQMain } from "./screens/RQ/main";

const Router = () => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route path="/" element={<><RQMain /></>} />
                </Routes>
            </Context>
        </BrowserRouter>
    );
}

export default Router;