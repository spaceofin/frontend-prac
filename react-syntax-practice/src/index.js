import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ReactDOM from 'react-dom/client';
import './index.css';


const Card = (props) => {
    return (
        <div className="item">
            <span className="todo-item">{props.item}</span>
            <button className="btn-delete-item" onClick={props.onClick}>Del</button>
        </div>
    )
}

const Container = () => {
    const [inputValue, setInputValue] = useState('');
    const [toDoList, setToDoList] = useState([]);

    const handleAddListClick = () => {
        const newItem = { id: uuidv4(), item: inputValue };
        setToDoList([...toDoList, newItem]);
        setInputValue('');
    }

    const handleDelClick = (id) => {
        const updatedList = toDoList.filter(item => item.id !== id);
        setToDoList(updatedList);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="container">
            <h1 className="title">To Do List</h1>
            <div>
                <input value={inputValue} onChange={handleChange} />
                <button className="btn-add-item" onClick={handleAddListClick}>Add List</button>
            </div>
            <div className="cardzone">
                {toDoList.map((card, index) => (
                    <div key={index}><Card item={card.item} onClick={() => handleDelClick(card.id)} /></div>
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
