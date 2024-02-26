import React, { useState, useEffect, createContext, useContext } from 'react';
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
function useUserStatus(userId) {
    console.log(`useUserStatus, Id: ${userId}`);
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
    const isOnline = useContext(userIsOnlineContext);

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'Offline';
}

function HighlightedUserName(props) {
    const userName = useContext(userNameContext);
    const isOnline = useContext(userIsOnlineContext);

    return (
        <span style={{
            fontWeight: isOnline ? 'bold' : 'normal',
            color: isOnline ? 'green' : 'black'
        }}>
            {userName}
        </span>
    )
}

const userNameContext = createContext(0);
const userIsOnlineContext = createContext(null);

function UserInfo(props) {

    const isOnline = useUserStatus(props.user.id);
    return (
        <userNameContext.Provider value={props.user.userName}>
            <userIsOnlineContext.Provider value={isOnline}>
                <p>User Name: <HighlightedUserName /></p>
                {props.showUserStatus && <UserStatus />}
            </userIsOnlineContext.Provider>
        </userNameContext.Provider>
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
                < div key={user.id} >
                    <h2>User ID: {user.id}</h2>
                    <UserInfo user={user} showUserStatus={showUserStatus} />
                    {/* <p>User Name: <HighlightedUserName user={user} /></p>
                    {showUserStatus && <UserStatus user={user} />} */}
                </div>
            ))}
            <br />
            {/* button for unmounting the userStatus component. */}
            <button onClick={() => setShowUserStatus(false)}>Hide User Status</button>

        </div >
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);