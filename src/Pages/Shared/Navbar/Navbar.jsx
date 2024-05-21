import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
    const { logout, user } = useContext(AuthContext);

    const navOptions = <>
        <li><Link to={"/"}>HOME</Link></li>
        <li><Link to={"/menu"}>MENU</Link></li>
        <li><Link to={"/order/salad"}>ORDER</Link></li>
        <li><Link to={"/login"}>LOGIN</Link></li>
        <li><Link to={"/signup"}>SIGNUP</Link></li>
        <li>
            <button className="btn">
                <FaShoppingCart />
                <div className="badge badge-secondary">+0</div>
            </button>
        </li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-black lg:text-white">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn text-white btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className='flex navbar-end'>

                    {
                        user ? <div>
                            <a id="clickable">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL || "https://i.ibb.co/0GMRFss/pexels-photo-2379004.jpg"} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <button className="btn btn-sm text-black  btn-ghost">{user?.displayName || 'user'}</button>

                                        </li>
                                        <li>
                                            <button
                                                onClick={logout}
                                                className="btn btn-sm text-black btn-ghost">Logout</button>

                                        </li>
                                    </ul>
                                </div>
                            </a>
                            <Tooltip anchorSelect="#clickable" clickable>
                                <button>{user?.displayName || 'user'}</button>
                            </Tooltip>
                        </div>
                            :
                            <NavLink className="btn border-none text-white  lg:font-bold bg-orange-400" to={"/login"}>LogIn</NavLink>
                    }

                </div>
            </div>
        </>
    );
};

export default NavBar;