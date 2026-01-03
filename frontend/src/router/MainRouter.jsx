import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import UserAuthForm from "../pages/userAuthForm.page";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route path="signin" element={<UserAuthForm type='sign-in'/>} />
            <Route path="signup" element={<UserAuthForm type="sign-up"/>} />
        </Route>
    )
)

export default route