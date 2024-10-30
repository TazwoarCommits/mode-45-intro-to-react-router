import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="text-6xl text-red-800">Navbar</h2>
            <nav className="mr-5 text-stone-400">
                <Link className="mr-5" to='/'>Home</Link>
                <NavLink className="mr-5" to='/users'>Users</NavLink>
                {/* <Link className="mr-5" to='/users'>Users</Link> */}
                <Link className="mr-5" to='/about'>About</Link>
                <NavLink className="mr-5" to='/posts'>Posts</NavLink>
                {/* <Link className="mr-5" to='/posts'>Posts</Link> */}
                <Link className="mr-5" to='/contact'>Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;