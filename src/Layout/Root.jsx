import { Outlet } from "react-router-dom";
import Navbar from "../Pagas/Shahed/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Root;