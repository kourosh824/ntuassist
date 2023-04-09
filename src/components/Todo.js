import React from "react";
import { TrashFill } from "react-bootstrap-icons";

import todoStyles from '../styles/todo.module.css';

const Todo = ({ prompt }) => {
    return (
        <div
        className={todoStyles['todo']}>
            <div
            className={todoStyles['todo__prompt']}>
                THIS IS TODO
            </div>
            <div
            className={todoStyles['todo__delete']}>
                <TrashFill
                className={todoStyles['todo__delete-icon']}
                size={30} />
            </div>
        </div>
    );
};

export default Todo;