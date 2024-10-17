import Container from "./Container";
import logo from "../assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="bg-white">
            <Container>
                <nav className="flex justify-between items-center py-5">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className="flex space-x-5">
                        <li>
                            <Link to="/" className="text-gray-700">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-700">Products</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-700">About</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-700">Contact</Link>
                        </li>
                    </ul>
                    <div className="right-part flex">
                        <div className="me-2">
                            <Link to="#"> <FaCartArrowDown /> </Link>
                        </div>
                        <div className="">
                        <Link to="#"> <IoSearchOutline /></Link>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Nav;