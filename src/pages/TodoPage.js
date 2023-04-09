import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Todo from '../components/Todo';

import todoStyles from '../styles/todoPage.module.css';
import AddTodo from "../components/AddTodo";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [todoIndex, setTodoIndex] = useState(0);
    const addTodo = (prompt) => {
        setTodos(old => [...old, [todoIndex, prompt]]);
        setTodoIndex(todoIndex+1);
    };
    const removeTodo = (index) => {
        setTodos(old => old.filter(item => item[0] !== index));
    };
    return (
        <div
        className={todoStyles['todopage']}>
            <Sidebar />
            <Header
            title={'NTUAssist'} />
            <div
            className={todoStyles['todopage__content']}>
                <AddTodo
                onAdd={addTodo} />
                {todos.map((todo) => {
                    return (
                        <Todo
                        key={todo[0]}
                        index={todo[0]}
                        prompt={todo[1]}
                        onRemove={removeTodo} />
                    )
                })}
            </div>
        </div>
    );
};

export default TodoPage;