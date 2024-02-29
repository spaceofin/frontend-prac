import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

const MAX_CAPACITY = 5;

function RoomEntry(props) {
    const [isFull, setIsFull] = useState(false);
    const [occupancy, increaseOccupancy, decreaseOccupancy] = useCounter(props.room.occupancy);

    useEffect(() => {
        setIsFull(occupancy >= MAX_CAPACITY);
        console.log(`Room${props.room.id} occupancy: ${occupancy}`);
    }, [occupancy, props.room.id]);

    return (
        <div className="room">
            <p className="room-title">Room {props.room.id}</p>
            <p className="room-occupancy">occupancy: {occupancy}/5</p>
            <div className="check-buttons">
                <button onClick={increaseOccupancy} disabled={isFull}>CHECK-IN</button>
                <button onClick={decreaseOccupancy} disabled={occupancy === 0}>CHECK-OUT</button>
            </div>
            {occupancy === 0 && <p>Room {props.room.id} is Empty</p>}
            {isFull && <p>Room {props.room.id} is Full</p>}
        </div >
    )

}

const App = () => {

    const rooms = [
        { id: 1, occupancy: 0, isFull: false },
        { id: 2, occupancy: 0, isFull: false },
        { id: 3, occupancy: 0, isFull: false },
    ];

    return (
        <div className="rooms">
            {rooms.map(room => (
                <RoomEntry key={room.id} room={room} />
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

