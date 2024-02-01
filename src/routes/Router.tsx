import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import PrivateRouter from "./PrivateRouter";
import MainLayout from "../layouts/MainLayout";
import Ideas from "../pages/ideas/Ideas";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import ProjectDetail from "../pages/projects/ProjectDetail";

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
            {path: '/about', element: <About />},
            {path: '/projects/:id', element: <ProjectDetail />}
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