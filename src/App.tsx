import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {MainContent} from "./components/Main/MainContent.tsx";
import './App.css'
import {ItemPage} from "./components/Item/ItemPage.tsx";
import {MainLayout} from "./components/Main/MainLayout.tsx";
import {Cart} from "./components/Cart/Cart.tsx";
import {Privacy} from "./components/Privacy/Privacy.tsx";
import {Offer} from "./components/Offer/Offer.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<MainLayout/>}
                    >
                        <Route path="/main" element={<MainContent/>} ></Route>
                        <Route path="/item" element={<ItemPage/>} ></Route>
                        <Route path="/cart" element={<Cart/>} ></Route>
                        <Route path="/privacy" element={<Privacy/>} ></Route>
                        <Route path="/offer" element={<Offer/>} ></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};