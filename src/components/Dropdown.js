import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownShort } from 'react-bootstrap-icons';

import dropStyles from '../styles/dropdown.module.css'

const Dropdown = ({ placeHolder, options, isSearchable, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        setSearchValue('');
        if(showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e) => {
            if(inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });

    const handleInputClick = (e) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if(selectedValue) {
            return selectedValue;
        };
        return placeHolder;
    };

    const OnItemClick = (option) => {
        setSelectedValue(option);
        onChange(option);
    };

    const isSelected = (option) => {
        if(!selectedValue) {
            return false;
        }

        return selectedValue === option;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if(!searchValue) {
            return options;
        }
        return options.filter((option) =>
            option
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) >= 0
        );
    };

    return (
        <div
        className={dropStyles['dropdown__container']}>
            <div
            onClick={handleInputClick}
            ref={inputRef}
            className={dropStyles['dropdown__input']}>
                <div
                className={dropStyles['dropdown__selected-value']}>
                    {getDisplay()}
                </div>
                <div
                className={dropStyles['dropdown__tools']}>
                    <div
                    className={dropStyles['dropdown__tool']}>
                        <ArrowDownShort />
                    </div>
                </div>
            </div>
            {showMenu && (
            <div
            className={dropStyles['dropdown__menu']}>
                {isSearchable && (
                    <div
                    className={dropStyles['search-box']}>
                        <input
                        onChange={onSearch}
                        value={searchValue}
                        ref={searchRef} />
                    </div>
                )}
                {getOptions().map((option) => 
                    <div
                    onClick={() => OnItemClick(option)}
                    key={option}
                    className={`${dropStyles['dropdown__item']} ${isSelected(option) && dropStyles['selected']}`}>
                        {option}
                    </div>
                )}
            </div>)}
        </div>
    )
};

export default Dropdown;