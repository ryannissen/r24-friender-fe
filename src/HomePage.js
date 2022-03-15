import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";

/**
 * Home Page component for users
 * 
 * Props: none
 * 
 * State: none
 * 
 * Context: user
 * 
 * App -> HomePage
 */
function HomePage() {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            {currentUser &&
                <div>
                    <h1>Welcome to Friendler {currentUser.firstname}</h1>
                </div>
            }
            {!currentUser &&
                <div>
                    <h1>Please sign in</h1>
                </div>
            }
        </>
    )
}

export default HomePage;