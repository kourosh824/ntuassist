import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Todo from '../components/Todo';

import todoStyles from '../styles/todoPage.module.css';

const TodoPage = () => {
    return (
        <div
        className={todoStyles['todopage']}>
            <Sidebar />
            <Header
            title={'NTUAssist'} />
            <div
            className={todoStyles['todopage__content']}>
                <Todo
                prompt="YOUR MOM" />
            </div>
        </div>
    );
};

export default TodoPage;