import React from "react";

// export let Counter = () => {
//     // static cnt = 0;  static will not work here so we use class
// }


export class Counter extends React.Component {

    static cnt = 0;
    
    //has a mandatory function. Must override this function 
    render() {
        return(<strong>Counter Value: {++Counter.cnt}</strong>); //We are using render method so that we can return jsx from class
    }
}

export class StateCounter extends React.Component {
    constructor() {
        super();
        this.state = {counter:0, store:localStorage.getItem("sessionStore")}; //initial state
    }
    increment() {
        this.setState((prev) => {return {counter: prev.counter+1}})
    }

    incrementStore() {
        localStorage.setItem('sessionStore', Number(this.state.store) + 1);
        this.setState({store:localStorage.getItem("sessionStore")}); //update react state object
    }
    render() {
        return (
            <>
            <button className="btn btn-primary" onClick={() => this.increment()}>{this.state.counter} 👍</button>
            <button className="btn btn-primary" onClick={() => this.incrementStore()}>{this.state.store} 😍</button>
            </>
        )
    }
}