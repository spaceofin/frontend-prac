import React from "react";

function Clock(props) {
    return (
        <div className="container-time">
            <h1 className="h1-time">Current Time</h1>
            <h2>{new Date().toLocaleTimeString('en-US')}</h2>
        </div>
    );
}

export default Clock;