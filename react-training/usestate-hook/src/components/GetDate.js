
import React, { useState } from "react";


function GetDate() {
    setInterval(getCurrentTime, 1000);
    const now = new Date().toLocaleTimeString();
    console.log(now)

    const [time, timeNow] = useState(now);

    function getCurrentTime() {
        const currTime = new Date().toLocaleTimeString();
        timeNow(currTime);
    }
    return (
        <div className="getdate-container">
            <h1 className="dateHeaders">Current Time: {time}</h1>
            <button onClick={getCurrentTime}>GET TIME</button>
        </div>
        
    );

}

export default GetDate;