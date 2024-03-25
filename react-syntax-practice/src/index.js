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
    const [addListVisible, setAddListVisible] = useState(false);
    const [buttonName, setButtonName] = useState('Add List');
    const [toDoList, setToDoList] = useState([]);

    const handleAddListClick = () => {
        setButtonName(buttonName === 'Add List' ? 'Close' : 'Add List');
        setAddListVisible(prevState => !prevState);
    }

    const handleAddClick = () => {
        const newItem = { id: uuidv4(), item: inputValue };
        setToDoList([...toDoList, newItem]);
        setInputValue('');
        handleAddListClick();
    }

    const handleDelClick = (id) => {
        const updatedList = toDoList.filter(item => item.id !== id);
        setToDoList(updatedList);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={addListVisible ? "add-list-container" : "container"}>
            <button className="btn-add-list" onClick={handleAddListClick}>{buttonName}</button>
            <h1 className="title">{addListVisible ? 'Add List' : 'To Do List'}</h1>
            {addListVisible ? (
                <div>
                    <input value={inputValue} onChange={handleChange} />
                    <button className="btn-add-item" onClick={handleAddClick}>Add</button>
                </div>
            ) : <div className="cardzone">
                {toDoList.map((card, index) => (
                    <div key={index}><Card item={card.item} onClick={() => handleDelClick(card.id)} /></div>
                ))}
            </div>}
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
