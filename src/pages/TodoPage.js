import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Todo from '../components/Todo';

import todoStyles from '../styles/todoPage.module.css';
import AddTodo from "../components/AddTodo";

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [todoIndex, setTodoIndex] = useState(0);
    const addTodo = (text) => {
        if(text) {
            const date = new Date();
            setTodos(old => [...old, {
                index: todoIndex,
                prompt: text,
                day: date.getDay(),
                month: date.getMonth(),
                year: date.getFullYear(),
            }]);
            setTodoIndex(todoIndex+1);
        }
    };
    const removeTodo = (index) => {
        setTodos(old => old.filter(item => item.index !== index));
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
                        key={todo.index}
                        index={todo.index}
                        prompt={todo.prompt}
                        day={todo.day}
                        month={todo.month}
                        year={todo.year}
                        onRemove={removeTodo} />
                    )
                })}
            </div>
        </div>
    );
};

export default TodoPage;