import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";
import CardList from "./CardList";
import FrienderApi from './api';

/**
 * Home Page component for users
 *  - Displays login prompt for users not logged in
 *  - Displays welcome prompt for logged in users
 * 
 * Props: none
 * 
 * State: none
 * 
 * Context: user
 * 
 * App -> Routes -> HomePage
 */
function HomePage() {
    const { currentUser } = useContext(UserContext);

    async function getAllUsers() {
        const allUsers = await FrienderApi.getAllUsers();
        return allUsers;
    }

    async function getAllLikesForCurrentUser() {
        const allLikesForCurrentUser = await FrienderApi.getAllLikesForCurrentUser(currentUser.username);
        return allLikesForCurrentUser;
    }

    async function getAllDislikesForCurrentUser() {
        const allDislikesForCurrentUser = await FrienderApi.getAllDislikesForCurrentUser(currentUser.username);
        return allDislikesForCurrentUser;
    }

    return (
        <>
            {currentUser &&
                <div>
                    <h1>Welcome to Friendler {currentUser.firstname}</h1>
                    <CardList getAllUsers={getAllUsers}
                        getAllLikes={getAllLikesForCurrentUser}
                        getAllDislikes={getAllDislikesForCurrentUser} />
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