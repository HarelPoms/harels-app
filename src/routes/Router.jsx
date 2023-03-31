import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage"
import EditCardPage from "../pages/EditCardPage"
import ReRenderPage from "../pages/Rerender_HW/ReRenderPage"
import RP1 from "../pages/RP1";
import RP2 from "../pages/RP2";
import ROUTES from "./ROUTES";
import NewCardPage from "../pages/NewCardPage";
import ProfilePage from "../pages/ProfilePage"

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path="/edit/:id" element={<EditCardPage />} />
            <Route path={ROUTES.NEWCARD} element={<NewCardPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path="/rrp" element={<ReRenderPage />} />
            <Route path="/rp1" element={<RP1 />} />
            <Route path="/rp2" element={<RP2 />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

export default Router;