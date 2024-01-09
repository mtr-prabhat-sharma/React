import { useState, useEffect, useContext, useRef, createContext } from "react";

//useeffect: side operations happeining on my component state
//fetch data from backend
//async operations


export function HooksCounter() {
    let [counter, setCounter] = useState(0);
    useEffect(() => {
        setTimeout(() => setCounter(counter + 1), 3000)
    });
    return (<h3>Total Visitors: {counter}</h3>)
}

export let HttpCall = () => {
    let [data, setdata]  = useState([]); //assigned whatever fetch to data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(content => content.json())
            .then(json => setdata(data => data = json));
    });

    return (
        <div>
            {data.map((item) => {
                return (<div><ul><li>{item.name}</li></ul></div>)
            })}
        </div>
    );
}


//useRef: Minimize re-renders
//Acts as reference to state /html dom Elements
//track changes 

export let UseRefCounter = () => {
    let [input, setInput] = useState("");
    let counter = useRef(0);
    useEffect(() => {
        counter.current = counter.current + 1;
    });

    function setTextboxValue(e) {
        setInput(input => input = e.target.value);
    }

    return(
        <>
            Type Something: <input type="text" placeholder="Type Something" value={input} onChange={(e) => setTextboxValue(e)}/>
            <h3>Total Visitors: {counter.current}</h3>
        </>
    );
}

//use of DOM Referencing
export let DomRef = () => {
    let [email, setmail] = useState('');
    let [status, setStatus] = useState('');
    const userEmail = useRef();

    function handleClick() {
        userEmail.current.focus();
        setmail(userEmail.current.value);
        if(userEmail.current.value === 'abc@gmail.com') {
            setStatus('Email is valid');
        } else {
            setStatus('Email does not exits');
        }
    }

    return (
        <>
            <input type="email" placeholder="Enter email" ref={userEmail} />
            <input type="password" placeholder="password" />
            <button className="btn btn-success" onClick={() => handleClick()}>Login</button>
            <div className="alert alert-success">{status}</div>
            <strong>email state value: {email}</strong>

        </>
    );
}



