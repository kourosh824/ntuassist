import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import PracticeTestsPage from './pages/PracticeTestsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route
            path="/"
            element={<Navigate to="/practice" />} /> 
            <Route
            path="/practice"
            element={<PracticeTestsPage />} />
        </Routes>
    </BrowserRouter>
);