import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { useContext } from "react";
import UserContext from "./userContext";


function CardList({ getAllUsers }) {

    const [listOfCards, setListOfCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentCard, setCurrentCard] = useState(0);

    const { currentUser } = useContext(UserContext);

    useEffect(function fetchAllusersOnFirstLoad() {
        async function fetchAllUsers() {
            const users = await getAllUsers();
            const filteredUsers = users.filter(user => currentUser.username !== user.username);
            console.log("LIST FILTERED", filteredUsers);
            setListOfCards(filteredUsers);
            setIsLoading(false);
        }
        fetchAllUsers();
    }, [])

    useEffect(function pickFirstCardOnLoad() {
        if (listOfCards.length > 0) {
            setCurrentCard(listOfCards.length - 1);
            console.log("Current Card set");
        }
    }, [listOfCards])

    function onDislike() {
        //this is on click of liking or dislinking
        setCurrentCard(currentCard - 1);
    }

    function onLike(){
        setCurrentCard(currentCard - 1);
    }

    if (isLoading) return <h1>Loading FRIENDS!!!</h1>

    const showCard = listOfCards.length > 0;
    
    return (
        <div>
            <h2>Cardlist</h2>
            <p>Shows one card at a time from list</p>
            {showCard && <Card friend={listOfCards[currentCard]} />}
            <span>
                <button onClick={onDislike}>Dislike</button>
                <button onClick={onLike}>Like</button>
            </span>
        </div>
    )
}

export default CardList;