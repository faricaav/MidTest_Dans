import { useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri"
import { HiUserGroup } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";
import { CgBox } from "react-icons/cg";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import "../styles/dashboard.css"
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const [open, setOpen] = useState(true);
    const dispatch = useDispatch()

    const out = () => {
        if (window.confirm("Are you sure to logout?")) {
            window.location = '/'
            dispatch(logout())
        }
    }

    return (
        <div className="flex">
            <div
                className={` ${
                open ? "w-72" : "w-20 "
                } bg-blue min-h-full p-5  pt-8 relative duration-300`} style={{bottom: 0}}>
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/992/992534.png"
                    className={`absolute cursor-pointer -right-3 top-12 w-7 border-blue
                    border-blue ${!open && "rotate-90"}`}
                    onClick={() => setOpen(!open)}
                    />
                <div className="flex gap-x-4 items-center">
                <figure className={`shadow-md ${
                    !open && "scale-0"
                    }`}>{userInfo?.data.nama_user.charAt(0).toUpperCase()}
                </figure>
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 mt-2 ${
                    !open && "scale-0"
                    }`}
                >
                    {userInfo?.data.nama_user}
                </h1>
                </div>
                <ul className="pt-5">
                    <li className="flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4">
                        <div className={`${!open && "mx-n3 mt-2"} text-xl`} ><Link to="/dashboard"><RiDashboardFill /></Link></div>
                            <Link to="/dashboard" className="nav-link">
                            <span className={`${!open && "hidden gap-x-4"} origin-left duration-200 text-white`}>
                                Dashboard
                            </span>
                            </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4">
                        <div className={`${!open && "mx-n3 mt-3"} text-xl`} ><Link to="/product"><CgBox /></Link></div>
                            <Link to="/product" className="nav-link"><span className={`${!open && "hidden gap-x-4"} origin-left duration-200 text-white`}>
                                Product
                            </span>
                            </Link>
                    </li>
                    <li className="flex  rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4">
                        <div className={`${!open && "mx-n3 mt-3"} text-xl`} ><a onClick={() => out()}><TbLogout /></a></div>
                            <a className="nav-link" onClick={() => out()}><span className={`${!open && "hidden gap-x-4"} origin-left duration-200 text-white`}>
                                Logout
                            </span>
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;