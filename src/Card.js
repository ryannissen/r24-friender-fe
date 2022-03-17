
function Card({ friend }) {
    console.log("friend", friend);
    return (
        <div>
            <h4>This is a card object</h4>
            <p>{friend.firstname}</p>
        </div>
    )

}

export default Card;