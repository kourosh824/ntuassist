import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../database/firebase";

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, pass)
        .then((userCred) => {
            console.log(userCred);
        })
        .catch((error) => {
            console.log("what the heck");
        })
    };

    return (
        <div>
            <div>
                <p>
                    Email
                </p>
                <input
                type="email"
                name="email"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <p>
                    Password
                </p>
                <input
                type="password"
                name="password"
                placeholder="password"
                required
                onChange={(e) => setPass(e.target.value)} />
            </div>
            <button
            onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default SignInPage;