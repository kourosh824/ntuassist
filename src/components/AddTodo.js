import React, { useState, useEffect } from "react";
import { PencilSquare } from "react-bootstrap-icons";

import addTodoStyles from '../styles/addTodo.module.css';

const AddTodo = ({ onAdd }) => {
    const [prompt, setPrompt] = useState('');

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };
    const onEnterPressed = (event) => {
        if(event.key === 'Enter') {
            onAdd(prompt);
        }
    };

    return (
        <div
        className={addTodoStyles['addtodo']}>
            <input
            onKeyDown={onEnterPressed}
            onChange={handlePromptChange}
            type="text"
            className={addTodoStyles['addtodo__input']} />
            <div
            onClick={() => onAdd(prompt)}
            className={addTodoStyles['addtodo__add']}>
                <PencilSquare
                className={addTodoStyles['addtodo__add-icon']}
                size={30} />
            </div>
        </div>
    );
};

export default AddTodo;