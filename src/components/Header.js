import React from "react";
import logo from '../images/ntua-logo.svg';

import headerStyles from '../styles/header.module.css';

const Header = ({ title, hasMenu }) => {
    return (
        <div
        className={headerStyles['header']}>
            <img
            className={headerStyles['header__logo']}
            alt="Εθνικό Μετσόβιο Πολυτεχνείο"
            src={logo} />
            <p
            className={headerStyles['header__title']}>
                {title}
            </p>
        </div>
    );
};

export default Header;