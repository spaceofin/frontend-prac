import React from 'react';

function User(props) {
    return (
        <div>
            <h1>{`이름은 ${props.name}입니다.`}</h1>
            <h2>{`나이는 ${props.age}세이고, 취미는 ${props.hobby}입니다.`}</h2>
            <br />
        </div>
    );
}

export default User;