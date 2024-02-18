import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class CountNumber extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             i: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.i} times`;
//     }
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.i} times`;
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={() => this.setState({
//                     i: this.state.i + 1
//                 })}>
//                     클릭하세요
//                 </button>
//                 <div>클릭 수: {this.state.i}</div>
//             </div >
//         );
//     }
// }

// function CountNumber(props) {
//     const [i, setI] = useState(0);

//     useEffect(() => {
//         document.title = `You cliked ${i} times`;
//     });

//     return (
//         <div>
//             <button onClick={() => setI(i + 1)}>
//                 클릭하세요
//             </button>
//             <div>클릭 수: {i}</div>
//         </div>
//     );
// }

const OnlineAPI = {
    subscribeUserStatus: (id, callback) => {
        const isOnline = Math.random() < 0.5;
        callback({ id, isOnline });
    },
    unsubscribeUserStatus: (id) => {
        console.log(`Unsubscribed from user ${id}'s status`)
    }
}

function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        OnlineAPI.subscribeUserStatus(props.user.id, handleStatusChange);
        return () => {
            OnlineAPI.unsubscribeUserStatus(props.user.id);
        };
    });

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