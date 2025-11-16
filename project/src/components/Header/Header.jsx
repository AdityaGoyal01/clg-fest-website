import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAdmin } from '../Hooks/useAdmin';



export default function Header() {
    const { isLoggedIn, logout } = useAdmin();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className=" top-0">
            <nav className="bg-white border-white px-3 lg:px-2 h-16 w-full flex items-center">
                <div className="flex justify-between items-center mx-auto w-full max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://lnct.ac.in/wp-content/uploads/2024/03/Universe-logo-3_page-0001.jpg"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center lg:order-2 space-x-2">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/admin-dashboard"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/admin-login"
                                className="text-gray-800 border-2 border-gray-150 hover:bg-gray-50 hover:text-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 "
                            >
                                Get Started
                            </Link>
                        )}
                    </div>

                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-yellow-500' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-yellow-500' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Event
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? 'text-yellow-500' : 'text-gray-700'
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
