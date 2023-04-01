import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";

import courseStyles from '../styles/course.module.css';

const Course = ({ index, courseName, addCourse, removeCourse, addScore, removeSum }) => {
    const [courseReg, setCourseReg] = useState(false);
    const [score, setScore] = useState(0);

    const handleCheckboxClick = (e) => {
        if(courseReg) {
            removeCourse(index);
            setCourseReg(false);
            setScore(0);
        } else {
            addCourse(courseName, score);
            setCourseReg(true);
        }
    };

    const handleScoreChange = (e) => {
        let val;
        if(parseInt(e.target.value) < 0) {
            val = 0;
        } else if(parseInt(e.target.value) <= 10) {
            val = parseInt(e.target.value);
        } else {
            val = 10;
        }
        setScore(val);
        addScore(index, score);
    };

    return (
        <div
        className={courseStyles['course-container']}>
            <h2>{index} - {courseName}</h2>
            <div>
                <input
                type="number"
                min={0}
                max={10}
                disabled={!courseReg}
                onChange={handleScoreChange} />
                <input
                type="checkbox"
                onClick={handleCheckboxClick} />
            </div>
        </div>
    );
};

export default Course;