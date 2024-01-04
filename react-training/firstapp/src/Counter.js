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