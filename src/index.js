import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route
            path="/"
            element={<Navigate to="/home" />} /> 
            <Route
            path="/home"
            element={<HomePage />} />
            <Route
            path="/todo"
            element={<TodoPage />} />
        </Routes>
    </BrowserRouter>
);