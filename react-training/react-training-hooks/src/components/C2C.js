import { useState } from "react";

export let A1 = () => {
    let [color, setColor] = useState('yellow');
    return (
        <>
            <h1>In A1</h1>
            <A2 highlight={color} />
        </>
    );
}

export let A2 = (props) => {
    return (
        <>
            <h2 style={{background:props.highlight}}>In A2</h2>
            <A3 />
        </>
    );
}

export let A3 = () => {
    return (
        <h3>In A3</h3>
    );
}