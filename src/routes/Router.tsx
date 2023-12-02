import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRouter>
                <Home />
            </PrivateRouter>
        )
    },
    {
        path: "auth",
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ]
    }
]);

export default router;