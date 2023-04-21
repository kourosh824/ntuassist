import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../database/firebase";

import logo from '../images/ntua-logo.svg';
import signInStyles from '../styles/signInPage.module.css';
import Alert from "../components/Alert";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [alerts, setAlerts] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
        .then((userCred) => {
            navigate('/home')
        })
        .catch((error) => {
            setAlerts(old => [
                ...old,
                <Alert
                type='error'
                message='invalid credentials' 
                delay={3000} />
            ])
        })
    };

    return (
        <div>
            <div
            className={signInStyles['signin']}>
                <div
                className={signInStyles['signin__header']}>
                    <img
                    className={signInStyles['signin__logo']}
                    alt="Εθνικό Μετσόβιο Πολυτεχνείο"
                    src={logo} />
                    <p
                    className={signInStyles['signin__title']}>
                        NTUAssist
                    </p>
                </div>
                <input
                className={signInStyles['signin__input']}
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)} />
                <input
                className={signInStyles['signin__input']}
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => setPass(e.target.value)} />
                <button
                className={signInStyles['signin__submit']}
                onClick={handleSubmit}>
                    Submit
                </button>
            </div>
            {alerts}    
        </div>
    );
};

export default SignInPage;