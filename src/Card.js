
function Card({ friend }) {
    console.log("friend", friend);
    return (
        <div>
            <h4>This is a card object</h4>
            <img src={friend.image_url} alt="This is a profile"></img>
            <p>Hey my name is {friend.firstname} {friend.lastname}</p>
            <p>I'm from {friend.location}</p>
        </div>
    )

}

export default Card;