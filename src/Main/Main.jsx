import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')

    return (
        <div className="container mx-auto">
                {
                    noHeaderFooter || <NavBar></NavBar>
                }

            <div className=" min-h-[calc(100vh-250px)]  ">
                <Outlet></Outlet>
            </div>

            <div className="mt-4 md:mt-6 lg:mt-12">
                {
                    noHeaderFooter || <Footer></Footer>
                }
            </div>
        </div>
    );
};

export default Main;