import { NavLink } from "react-router-dom";

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
function NavBar() {
    return (
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
        <NavLink to="/profile">
            Profile
        </NavLink>
    </nav>
    )
}

export default NavBar;