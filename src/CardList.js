import React, { useState, useEffect } from 'react';
import FrienderApi from './api';
import Card from "./Card";

function CardList({ getAllUsers }) {

    const [listOfCards, setListOfCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(function fetchAllusersOnFirstLoad() {
        async function fetchAllUsers() {
            const users = await getAllUsers();
            setListOfCards(users);
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

    function onLikeDislike() {
        //this is on click of liking or dislinking
        setCurrentCard()
    }

    if (isLoading) return <h1>Loading FRIENDS!!!</h1>

    const showCard = listOfCards.length > 0;
    
    return (
        <div>
            <h2>Cardlist</h2>
            <p>Shows one card at a time from list</p>
            {showCard && <Card friend={listOfCards[currentCard]} />}
            <span>
                <button>Dislike</button>
                <button>Like</button>
            </span>
        </div>
    )
}

export default CardList;