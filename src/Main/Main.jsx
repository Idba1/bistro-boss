import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="container mx-auto">
            <NavBar></NavBar>
            <div className=" min-h-[calc(100vh-250px)] mt-20 ">
            <Outlet></Outlet>
            </div>
            <div className="mt-4 md:mt-6 lg:mt-12">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;