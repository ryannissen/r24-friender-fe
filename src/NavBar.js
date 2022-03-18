import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./userContext";
import './NavBar.css';

/**
 * NavBar component for users to navigate through the application
 * 
 * Props: none
 * 
 * State: none
 * 
 * Context: user
 * 
 * App -> NavBar - - LI - > {Home (show cards list), Profile, LogOut}
 * App -> NavBar - - NLI - >{Home (takes you to landing page with button), Login, Signup}
 */
function NavBar({handleLogout}) {

    const { currentUser } = useContext(UserContext);

    return (
        <>
            {!currentUser &&
                <nav className="NavBar">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/signup">
                        Signup
                    </NavLink>
                </nav>}

            {currentUser &&
                <nav className="NavBar">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                    <Link onClick={handleLogout} to="/">
                        Logout {currentUser.firstname}
                    </Link>
                </nav>}
        </>
    )
}

export default NavBar;