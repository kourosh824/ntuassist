import React, { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import Course from './Course';

const Semester = ({ semesterIndex, courses }) => {
    const coursesTitle = [];
    const numCourses = courses.length;
    const [coursesScore, setCoursesScore] = useState(Array(numCourses).fill(0));
    const [GPA, setGPA] = useState(0);

    courses.forEach(crs => {
        if(Array.isArray(crs)) {
            coursesTitle.push('Μάθημα Επιλογής');
        } else {
            coursesTitle.push(crs);
        }
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
        <div>
            <h1>Semester {semesterIndex + 1}</h1>
            <div>
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
                <Bar
                data={{
                    labels: coursesTitle,
                    datasets: [{
                            label: 'Scores',
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: coursesScore,
                    }]
                }} />
                <div>
                    {GPA}
                </div>
            </div>
        </div>
    );
};

export default Semester;