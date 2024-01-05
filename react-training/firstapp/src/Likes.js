import { useState } from "react";

export let Likes = () => {
    let [likes, setLikesFn] = useState(0);

    let addLike = () => {
        setLikesFn(++likes);
    }
    return(
        <button onClick={() => {addLike()}}>{likes}Like</button>
    )
}