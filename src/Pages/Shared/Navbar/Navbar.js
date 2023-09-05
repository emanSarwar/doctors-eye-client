import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
// import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <button  className="btn btn-outline btn-accent normal-case text-xl"><Link to="/">Home</Link></button>
        <li><Link className="btn btn-outline btn-accent normal-case text-xl" to="/appointment">Appointment</Link></li>
        <li><Link className="btn btn-outline btn-accent normal-case text-xl" to="/about">About</Link></li>
        {user?.uid ?
            <>
                <li><Link className="btn btn-outline btn-accent normal-case text-xl" to="/dashboard">Dashboard</Link></li>
                <li><button className="btn btn-outline btn-accent normal-case text-xl" onClick={handleLogOut}>Sign out</button></li>
            </>
            : <button className="btn btn-outline btn-accent normal-case text-xl"><Link to="/login">Login</Link></button>}
    </React.Fragment>

    return (
        <div style={{color: 'white', backgroundColor: 'mediumaquamarine'}} className="navbarcss navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-outline btn-accent normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;