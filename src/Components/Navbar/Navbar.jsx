import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="mt-5">
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="https://i.ibb.co/6nXtNMd/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu md:menu-horizontal px-1">
                        <li className="mr-2"><NavLink to="/">Home</NavLink></li>
                        <li className="mr-2"><NavLink to="/donation">Donation</NavLink></li>
                        <li className="mr-2"><NavLink to="/stat">Statistics</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;