import { Routes, Route, Redirect } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "./userContext";
import HomePage from './HomePage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

/** Routes Component
 * 
 * State- none
 * 
 * Props-
 * handleSignup: Fn to sign up a new user in app
 * passes to signup component
 * 
 * handleLogin: Fn to login an existing user in app
 * passes to login component
 * 
 * App -> Routes
 */

function RoutesComp({handleSignup, handleLogin}) {
    
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginForm handleLogin={handleLogin}/>} />
            <Route exact path="/signup" element={<SignupForm handleSignup={handleSignup} />} />
            <Route exact path="/profile" element={<ProfileForm />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    )

}

export default RoutesComp;