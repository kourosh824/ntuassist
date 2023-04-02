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
        if(val < 0) {
            val = 0;
        } else if (val > 10) {
            val = 10;
        }
        setScore(val);
        changeScore(index, val);
    };

    return (
        <div
        className={courseStyles['course-container']}>
            {!optional &&
            <h2>{index + 1} - {title}</h2>}
            {optional &&
            <div>
                {index + 1} + {' '}
                <select>
                    {title.map(t =>
                        <option>{t}</option>
                    )}
                </select>
            </div>}
            <div>
                <input
                type="number"
                min={0}
                max={10}
                onChange={handleScoreChange} />
            </div>
        </div>
    );
};

export default Course;