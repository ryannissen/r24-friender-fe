import { Routes, Route, Redirect } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "./userContext";
import HomePage from './HomePage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

/** 
 * Routes Component
 * 
 * State: none
 * 
 * Props: 
 *  handleSignup: function to sign up a new user in app
 *  passes to signup component
 * 
 *  handleLogin: function to login an existing user in app
 *  passes to login component
 * 
 *  handleUpdate: function to update an existing user in app
 *  passes to profile component
 * 
 * App -> Routes {homepage, signup, login, profile}
 */

function RoutesComp({handleSignup, handleLogin, handleUpdate}) {
    
    const { currentUser } = useContext(UserContext);

    // let showCards = true;

    // for (let prop in currentUser) {
    //     if (currentUser[prop] === null || currentUser[prop] === ""){
    //         showCards = false;
    //     }
    // }

    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
            <Route exact path="/signup" element={<SignupForm handleSignup={handleSignup} />} />
            <Route exact path="/profile" element={<ProfileForm handleUpdate={handleUpdate} />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    )

}

export default RoutesComp;