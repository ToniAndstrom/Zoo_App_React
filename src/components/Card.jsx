import { Link } from "react-router-dom"

const Card = ({name,likes, removeCard, addLikes, removeLikes}) => {
  return (
  
        
          <div className="Card">
    <button onClick={removeCard} id="x">
          <span className="material-symbols-outlined">
          cancel </span>
        </button><br />
        <h2>{name}</h2>

        <img src={`https://source.unsplash.com/400x400/?${name}`} />

        <button onClick={addLikes} id="like">
          <span className="material-symbols-outlined">
          thumb_up</span>
        </button>
        
        <span  className="material-icons">
        <p>{likes }</p>
        </span>
        
        <button onClick={removeLikes} id="dislike"><span className="material-symbols-outlined">
          thumb_down</span>
          </button> <br />

        <Link to = {name}>See More</Link>
    </div>
  
  )
}

export default Card