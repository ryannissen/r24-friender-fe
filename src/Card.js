import './Card.css';

function Card({ friend }) {
    return (
        <div className="Card">
            <h4>{friend.firstname} {friend.lastname}</h4>
            <img src={friend.image_url} alt="This is a profile"></img>
            <p>From: {friend.location}</p>
            <p>Hobbies: {friend.hobbies}</p>
            <p>Interests: {friend.interests}</p>
        </div>
    )

}

export default Card;