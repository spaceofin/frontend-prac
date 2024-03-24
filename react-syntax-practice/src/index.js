import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';


const Card = (props) => {
    return (
        <div>
            <span className="todo-item">{props.item}</span>
        </div>
    )
}

const Container = () => {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleClick = () => {
        setToDoList([...toDoList, <Card item={inputValue} />]);
        setInputValue('');
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="container">
            <h1 className="title">To Do List</h1>
            <div>
                <input value={inputValue} onChange={handleChange} />
                <button className="btn-addtodolist" onClick={handleClick}>Add List</button>
            </div>
            <div className="cardzone">
                {toDoList.map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
            </div>

        </div>
    );
}

const App = () => {
    return (
        <div>
            <Container />
        </div >
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
