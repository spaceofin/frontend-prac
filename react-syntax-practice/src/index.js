import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '30px',
        width: '350px',
        padding: '15px 30px 15px 50px',
        backgroundColor: ' #FFD700',
        borderRadius: '10px',
    },
    loginButton: {
        marginLeft: '5px',
        float: 'right',
    },
    nickname: {
        fontFamily: 'Arial',
    }


}

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nickName, setNickName] = useState('');

    const handleChange = (e) => {
        setNickName(e.target.value);
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div style={styles.wrapper}>
            {isLoggedIn &&
                <div>
                    <span style={styles.nickname}>{nickName} Logged In</span>
                    <button style={styles.loginButton} onClick={handleLogout}>LOG OUT</button>
                </div>
            }
            {
                !isLoggedIn &&
                <div>
                    <span style={styles.nickname}>NICKNAME: </span>
                    <input placeholder="Enter your nickname" onChange={(e) => handleChange(e)} />
                    <button style={styles.loginButton} onClick={handleLogin}>LOG IN</button>
                </div>
            }
        </div >
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);