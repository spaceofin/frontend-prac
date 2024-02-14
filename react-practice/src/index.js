import React from 'react';
import ReactDOM from 'react-dom';

const firstName = "A";
const lastName = "B";

ReactDOM.render(
    <div>
        <h1>{firstName + " " + lastName}'s Favoriate Foods</h1>
        {/* <h1>{firstName} {lastName}'s Favoriate Foods</h1> */}
        {/* <h1>{`${firstName} ${lastName}`}'s Favoriate Foods</h1> */}
        <ul>
            <li>Bacon</li>
            <li>Jamon</li>
            <li>Noodles</li>
        </ul>
        <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>,
    document.getElementById("root")
);