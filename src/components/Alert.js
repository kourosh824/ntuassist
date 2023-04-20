import React from "react";
import alertStyles from '../styles/alert.module.css';
import { ExclamationCircle, InfoCircle, Bug, CheckCircle } from "react-bootstrap-icons";
import Expire from "./Expire";
/**
 * @param message the message to be shown by the alert
 * @param type the type of the alert message: error, warning, info, success
 * @param size icon size, default set to 35
 * @param delay time to wait for the alert to disappear
 */
const Alert = ({ message, type, size, delay }) => {
    if(!size) size = 35;
    const backColors = [
        '#fdeded', // error
        '#fff4e5', // warning
        '#e5f6fd', // information
        '#edf7ed', // success
    ];
    const iconColors = [
        '#e27575', // error
        '#f08226', // warning
        '#3fa5dc', // information
        '#59995c', // success
    ];
    let content; let index;
    switch(type) {
        case 'error':
            index = 0;
            content =
            <Bug
            size={size}
            className={alertStyles['alert__icon']}
            color={iconColors[index]} />
            break;
        case 'warning':
            index = 1;
            content =
            <ExclamationCircle
            size={size}
            className={alertStyles['alert__icon']}
            color={iconColors[index]} />
            break;
        case 'info':
            index = 2;
            content =
            <InfoCircle
            size={size}
            className={alertStyles['alert__icon']}
            color={iconColors[index]} />
            break;
        case 'success':
            index = 3;
            content =
            <CheckCircle
            size={size}
            className={alertStyles['alert__icon']}
            color={iconColors[index]} />
            break;
        default:
            break;
    };
    return (
        <Expire
        delay={2000}>
            <div
            style={{
                backgroundColor: `${backColors[index]}`,
            }}
            className={alertStyles['alert']}>
                {content}
                <div
                style={{
                    color: `${iconColors[index]}`,
                }}
                className={alertStyles['alert__text']}>
                    {message}
                </div>
            </div>
        </Expire>
    );
};

export default Alert;