import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRouter from "./PrivateRouter";
import MainLayout from "../layouts/MainLayout";
import Ideas from "../pages/menu/Ideas";
import Projects from "../pages/menu/Projects";
import About from "../pages/menu/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRouter>
                <MainLayout />
            </PrivateRouter>
        ),
        children: [
            {path: '/', element: <Home />},
            {path: '/ideas', element: <Ideas />},
            {path: '/projects', element: <Projects />},
            {path: '/about', element: <About />}
        ]
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