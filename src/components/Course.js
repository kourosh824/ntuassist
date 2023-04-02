import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

import courseStyles from '../styles/course.module.css';

const Course = ({ index, title, optional, changeScore }) => {
    const [score, setScore] = useState(0);

    // const handleCheckboxClick = (e) => {
    //     if(crsReg) {
    //         removeCourse(courseName);
    //         setCrsReg(false);
    //         setScore(0);
    //     } else {
    //         addCourse(courseName, score);
    //         setCrsReg(true);
    //     }
    // };

    // const handleScoreChange = (e) => {
    //     let val;
    //     if(parseInt(e.target.value) < 0) {
    //         val = 0;
    //     } else if(parseInt(e.target.value) <= 10) {
    //         val = parseInt(e.target.value);
    //     } else {
    //         val = 10;
    //     }
    //     setScore(val);
    //     addScore(courseName, score);
    // };
    const handleScoreChange = (e) => {
        let val = parseInt(e.target.value);
        setScore(val);
        changeScore(index, val);
    };

    return (
        <div
        className={courseStyles['course']}>
            {!optional &&
            <p
            className={courseStyles['course__title']}>
                {index + 1} - {title}
            </p>}
            {optional &&
            <select
            className={courseStyles['course__select']}>
                {title.map(t =>
                    <option>{index + 1} - {' '} {t}</option>
                )}
            </select>}
            <select
            onChange={handleScoreChange}
            className={courseStyles['course__select']}>
                {
                    Array.from(Array(11).keys()).map((num) => 
                        <option>{num}</option>
                    )
                }
            </select>
        </div>
    );
};

export default Course;