import React from "react";
import Login from "./Login";
import Form from "./Form";
var isLoggedIn = true;
var userIsRegistered = true;
// function renderConditionally() {
//     if(isLoggedIn === true) {
//         return <h1>Hello User</h1>
//     } else {
//         return <Login />;
//     }
// }

// function App() {
//     return (
//         <div className="container">
//             {renderConditionally()}
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className="container">
//             { isLoggedIn ? <h1>Hello User</h1> : <Login /> } 
//         </div>
//     );
// }

function App() {
    return (
        <div className="container">
            <Form 
                isRegistered={userIsRegistered}
            />
        </div>
    );
}

export default App;