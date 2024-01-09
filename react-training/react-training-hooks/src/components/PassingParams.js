import { useParams } from "react-router-dom"

export let Params = () => {
    let {name, place, animal, thing} = useParams();
    return (
        <>
            <h3>Printing all route params</h3>
            <div>Name param value :{name}</div>
            <div>Place param value :{place}</div>
            <div>Animal param value :{animal}</div>
            <div>Thing param value :{thing}</div>
        </>
    )
}