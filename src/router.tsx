import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Hooks/useContext";
// import Main from "./screens/main";
import UseLayoutEffect from "./Hooks/useLayoutEffect";
import { RQMain } from "./screens/RQ/example";
import { UseLocation } from "./Hooks/useLocation";

const Router = () => {
    return (
        <BrowserRouter>
            <Context>
                <Routes>
                    
                    <Route path="/" element={<><RQMain /></>} />
                    <Route  path="/_/123" element={<UseLayoutEffect />}/>
                    <Route  path="/_/" element={<UseLocation />}/>


                </Routes>
            </Context>
        </BrowserRouter>
    );
}

export default Router;