import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {Main} from "./components/Main/Main.tsx";
import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} ></Route>
            </Routes>
        </BrowserRouter>
    );
};