import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage"
import EditCardPage from "../pages/EditCardPage"
import ReRenderPage from "../pages/Rerender_HW/ReRenderPage"
import ROUTES from "./ROUTES";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path="/edit/:id" element={<EditCardPage />} />
            <Route path="/rrp" element={<ReRenderPage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default Router;