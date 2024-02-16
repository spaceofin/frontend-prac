import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getHobby(user) {
    return <h1>{getFullName(user)}'s hobby is {user.hobby}!</h1>;
}

const user = {
    firstName: 'A',
    lastName: 'a',
    hobby: 'coding',
}


const app = (
    <div>
        {getHobby(user)}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);