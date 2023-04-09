import React from "react";
import { TrashFill } from "react-bootstrap-icons";

import todoStyles from '../styles/todo.module.css';

const Todo = ({ index, prompt, onRemove }) => {
    const handleTodoRemoved = () => {
        onRemove(index);
    };
    return (
        <div
        className={todoStyles['todo']}>
            <div
            className={todoStyles['todo__prompt']}>
                {prompt}
            </div>
            <div
            onClick={handleTodoRemoved}
            className={todoStyles['todo__delete']}>
                <TrashFill
                className={todoStyles['todo__delete-icon']}
                size={30} />
            </div>
        </div>
    );
};

export default Todo;