import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let renderCountA = 0;
let renderCountB = 0;

function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        console.log(`A: ${++renderCountA}`);
        console.log(`userID ${props.user.id} component rendered`);
        return () => {
            console.log(`___userID ${props.user.id} component unmounted___`);
        }

    })

    useEffect(() => {
        console.log(`B: ${++renderCountB}`);
        setIsOnline(false);
        console.log(`userID ${props.user.id}'s isOnline status: ${isOnline}`);
    })

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

function App() {
    const users = [
        {
            id: 1,
            userName: 'AAA',
        },
        {
            id: 2,
            userName: 'BBB',
        },
        {
            id: 3,
            userName: 'CCC',
        }
    ]
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h2>User ID: {user.id}</h2>
                    <p>User Name: {user.userName}</p>
                    <UserStatus user={user} />
                </div>
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());