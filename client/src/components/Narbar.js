import { Link } from 'react-router-dom';
import '../assets/home.css';
import '../assets/custom.css';
import { SlBasket } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
    const NavItem = ({ destination, children }) => {
        return (
            <div className='p-0 text-black transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 active:text-black/80 motion-reduce:transition-none lg:px-2'>
                <Link to={destination}>{children}</Link>
            </div>
        );
    };

    const toggleTheme = () => {
        // Theme toggle logic here
    };

    return (
        <header>
            <nav className="relative flex w-full items-center justify-between bg-[#ffffff] py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4" data-twe-navbar-ref>
                <div className="flex w-full items-center px-3 relative">
                    <div className="flex items-center space-x-2">
                        <NavItem destination="/" className="custom-title-font">Home</NavItem>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <h1 className="custom-title-font text-xl font-bold">Belle Âme</h1>
                    </div>
                    <div className="flex-grow hidden lg:flex justify-end items-center lg:mt-0 lg:basis-auto" id="navbarSupportedContent10" data-twe-collapse-item>
                        <ul className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row ml-auto" data-twe-navbar-nav-ref>
                            <li>
                                <NavItem destination="/about">About</NavItem>
                            </li>
                            <li>
                                <NavItem destination="/Architecture">AWS Architecture</NavItem>
                            </li>
                            <li>
                                <NavItem destination="/Checkout">Checkout</NavItem>
                            </li>
                            <li>
                                <NavItem destination="/account/login">Login</NavItem>
                            </li>
                            <li>
                                <NavItem destination="/account/signup">Signup</NavItem>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
