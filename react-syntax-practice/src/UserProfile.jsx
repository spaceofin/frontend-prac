import React from 'react';
import User from './User';

function UserProfile(props) {
    return (
        <div>
            <User name="Alice" hobby="hiking" age={30} />
            <User name="Bob" hobby="reading" age={28} />
            <User name="Charlie" hobby="cooking" age={33} />
        </div>
    );
}

export default UserProfile;