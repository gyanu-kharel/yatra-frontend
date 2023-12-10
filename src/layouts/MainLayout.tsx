import React from "react";
import Navbar from "./Navbar";
import '../index.css';
import { Outlet } from "react-router";


const MainLayout: React.FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <section id="main_content">
                    <Outlet />
                </section>
            </div>
        </>
    )
};

export default MainLayout;