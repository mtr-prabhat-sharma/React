import { useState } from "react";

let Likes = () => {
    let [likes, setLikesFn] = useState(0);

    let addLike = () => {
        setLikesFn(++likes);
    }
    return(
        <button onClick={() => {addLike()}}>{likes}Like</button>
    )
}

export default Likes;