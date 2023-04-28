import React from 'react';

import buttonStyles from '../styles/button.module.css';

const Button = ({ Icon, onClick, children }) => {
    return (
        <div
        className={buttonStyles['button']}
        onClick={onClick}>
            <Icon
            className={buttonStyles['button__icon']}
            size={25} />
            <p
            className={buttonStyles['button_text']}>
                {children}
            </p>
        </div>
    );
};

export default Button;