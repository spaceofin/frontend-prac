import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const OnlineAPI = {
    subscribeUserStatus: (id, callback) => {

        // setInterval function runs every 2 seconds
        const intervalId = setInterval(() => {
            const isOnline = Math.random() < 0.5;
            callback({ id, isOnline });
        }, 2000);

        // setInterval function stops after 10s of time
        setTimeout(() => {
            clearInterval(intervalId);
        }, 10000);
    },
    unsubscribeUserStatus: (id) => {
        console.log(`Unsubscribed from user ${id}'s status`);
    }
}

// Whenever the isOnline variable is different from the previous state, the UserStatus component is rendered
function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);
    // let prevIsOnline = null;

    function handleStatusChange(status) {
        // console.log(`id: ${props.user.id}, prevStatus: ${prevIsOnline}, curStatus: ${status.isOnline}`);
        // prevIsOnline = status.isOnline
        setIsOnline(status.isOnline);
    }

    // console.log(`userID ${props.user.id} component rendered`);

    useEffect(() => {
        console.log(`userID ${props.user.id} useEffect`);
        OnlineAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            OnlineAPI.unsubscribeUserStatus(props.user.id);
        };
    }, [props.user.id]);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

function App() {
    const [showUserStatus, setShowUserStatus] = useState(true);

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
                    {showUserStatus && <UserStatus user={user} />}
                </div>
            ))}
            <br />
            {/* button for unmounting the userStatus component. */}
            <button onClick={() => setShowUserStatus(false)}>Hide User Status</button>
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);