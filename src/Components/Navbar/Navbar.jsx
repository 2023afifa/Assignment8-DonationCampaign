const Navbar = () => {
    return (
        <div className="mt-5">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="../../../Resources/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Donation</a></li>
                        <li><a>Statistics</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;