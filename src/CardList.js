import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { useContext } from "react";
import UserContext from "./userContext";
import FrienderApi from './api';
import './CardList.css';


function CardList({ getAllUsers, getAllLikes, getAllDislikes }) {

    const [listOfCards, setListOfCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentCard, setCurrentCard] = useState(0);

    const { currentUser } = useContext(UserContext);

    useEffect(function fetchAllusersOnFirstLoad() {
        async function fetchAllUsers() {
            const users = await getAllUsers();
            const usersLiked = await getAllLikes();
            const usersDisliked = await getAllDislikes();

            const usersLikedByUser = usersLiked.map(userbeingliked =>
                userbeingliked["user_being_liked"]);
            const usersDisLikedByUser = usersDisliked.map(userbeingdisliked =>
                userbeingdisliked["user_being_disliked"]);
            const likedAndDislikedUsers = usersLikedByUser.concat(usersDisLikedByUser);

            const filteredUsers = users.filter(user => currentUser.username !== user.username);
            const usersBeingShown = filteredUsers.filter(user =>
                !(likedAndDislikedUsers.includes(user.username)));

            setListOfCards(usersBeingShown);
            setIsLoading(false);
        }
        fetchAllUsers();
    }, [currentCard])

    useEffect(function pickFirstCardOnLoad() {
        if (listOfCards.length > 0) {
            setCurrentCard(listOfCards.length - 1);
        }
    }, [listOfCards])

    async function onDislike() {
        const user = {
            user_swiping: currentUser.username,
            user_being_disliked: listOfCards[currentCard].username
        }
        await FrienderApi.dislikeUser(user);
        setCurrentCard(currentCard - 1);
    }

    async function onLike() {
        const user = {
            user_swiping: currentUser.username,
            user_being_liked: listOfCards[currentCard].username
        }
        await FrienderApi.likeUser(user);
        setCurrentCard(currentCard - 1);
    }

    if (isLoading) return <h1>Loading FRIENDS!!!</h1>

    const showCard = listOfCards.length > 0;

    return (
        <div>
            <h2>Like or Dislike</h2>
            {showCard ?
                <div>
                    <Card friend={listOfCards[currentCard]} />
                    <span>
                        <button className="CardList-dislike" onClick={onDislike}>Dislike</button>
                        <button className="CardList-like" onClick={onLike}>Like</button>
                    </span>
                </div>
                :
                <p>Sorry, you don't have any more friends!</p>
            }

        </div>
    )
}

export default CardList;