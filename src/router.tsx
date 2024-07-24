import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Hooks/useContext";

const Router = () => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    <Route path="/" element={<h1>zxc</h1>} />
                </Routes>
            </Context>
        </BrowserRouter>
    );
}

export default Router;