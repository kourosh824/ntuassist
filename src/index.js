import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import SignInPage from './pages/SignInPage';
import DownPage from './pages/DownPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route
            path="/"
            element={<Navigate to="/home" />} /> 
            <Route
            path="/home"
            element={<DownPage />} />
            <Route
            path="/todo"
            element={<TodoPage />} />
            <Route
            path="/signin"
            element={<SignInPage />} />
        </Routes>
    </BrowserRouter>
);