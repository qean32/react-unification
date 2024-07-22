import { BrowserRouter, Route, Routes } from "react-router-dom";
import SomeContext from "./Hooks/useContext";

const Router = () => {
    return (
        <BrowserRouter>
            <SomeContext>
                <Routes>
                    <Route path="/" element={<h1></h1>} />
                </Routes>
            </SomeContext>
        </BrowserRouter>
    );
}

export default Router;