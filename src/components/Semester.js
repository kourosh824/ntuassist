import React, { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import Course from './Course';

import semesterStyles from '../styles/semester.module.css';

const Semester = ({ semesterIndex, courses }) => {
    const coursesTitle = [];
    const numCourses = courses.length;
    const [coursesScore, setCoursesScore] = useState(Array(numCourses).fill(0));
    const [GPA, setGPA] = useState(0);

    courses.forEach((crs, index) => {
        coursesTitle.push(index + 1);
    });

    const calculateGPA = () => {
        let val = 0;
        coursesScore.forEach((score) => {
            val += score;
        });
        setGPA((val / numCourses).toFixed(2));
    }
    
    const handleGetCourseScore = (index, score) => {
        let s = [...coursesScore];
        s[index] = score;
        setCoursesScore(s);
    };

    useEffect(calculateGPA);

    return (
        <div
        className={semesterStyles['semester']}>
            <div
            className={semesterStyles['semester__left']}>
                <h1
                className={semesterStyles['semester__left-title']}>
                    {semesterIndex + 1}
                    <sup>
                        o
                    </sup>
                    {' '}Εξάημνο
                </h1>
                {courses.map((title, crsIndex) => {
                    let isOptional = false;
                    if(Array.isArray(title)) {
                        isOptional = true;
                    }
                    return (
                        <Course
                        key={crsIndex}
                        index={crsIndex}
                        title={title}
                        optional={isOptional}
                        changeScore={handleGetCourseScore} />
                    );
                })}
            </div>
            <div
            className={semesterStyles['semester__right']}>
                <Bar
                className={semesterStyles['semester__right-chart']}
                data={{
                    labels: coursesTitle.map((t) => (`(${t})`)),
                    datasets: [{
                            label: 'Scores',
                            backgroundColor: 'rgba(99, 110, 114, 100)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: coursesScore,
                    }]
                }} />
                <div>
                    Μ.Ο: {GPA}
                </div>
            </div>
        </div>
    );
};

export default Semester;