import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Hooks/useContext";
import Main from "./components/main";

const Router = () => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Context>
        </BrowserRouter>
    );
}

export default Router;