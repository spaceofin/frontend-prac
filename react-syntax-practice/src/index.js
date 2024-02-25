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
function useUserStatus(userId, componentName) {
    console.log(`${componentName} calls useUserStatus, Id: ${userId}`);
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        console.log(`userID ${userId} useEffect`);
        OnlineAPI.subscribeUserStatus(userId, handleStatusChange);
        return () => {
            OnlineAPI.unsubscribeUserStatus(userId);
        };
    }, [userId]);

    return isOnline;
}

function UserStatus(props) {
    const isOnline = useUserStatus(props.user.id, 'UserStatus');

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

function HighlightedUserName(props) {
    const isOnline = useUserStatus(props.user.id, 'HighlightedUserName');

    return (
        <span style={{
            fontWeight: isOnline ? 'bold' : 'normal',
            color: isOnline ? 'green' : 'black'
        }}>
            {props.user.userName}
        </span>
    )
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
                    <p>User Name: <HighlightedUserName user={user} /></p>
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