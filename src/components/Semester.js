import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import Course from './Course';

const Semester = ({ semesterIndex, courses }) => {
    const [numRegCourses, setNumRegCourses] = useState(0);
    const [courseNames, setCourseNames] = useState([]);
    const [courseScores, setCourseScores] = useState([]);

    const handleAddCourse = (crsName, crsScore) => {
        setNumRegCourses(numRegCourses + 1);
        setCourseNames([
            ...courseNames,
            crsName
        ]);
        setCourseScores([
            ...courseScores,
            crsScore
        ]);
    };

    const handleRemoveCourse = (index) => {
        setNumRegCourses(numRegCourses - 1);
        let courses = courseNames;
        let scores = courseScores;
        courses.splice(index, 1);
        scores.splice(index, 1);
        setCourseNames([...courses]);
        setCourseScores([...scores]);
    };

    const handleAddScore = (index, newScore) => {
        let scores = courseScores;
        scores[index] = newScore;
        setCourseScores([...scores]);
    };

    return (
        <div>
            <h1>Semester {semesterIndex + 1}</h1>
            <div>
                {courses.map((crs, crsIndex) => {
                    return (
                        <Course
                        key={crsIndex}
                        index={crsIndex}
                        courseName={crs}
                        addCourse={handleAddCourse}
                        addScore={handleAddScore}
                        removeCourse={handleRemoveCourse} />
                    )
                })}
                <div>
                    {courseNames}
                </div>
                <div>
                    {courseScores}
                </div>
                <Bar
                data={{
                    labels: courseNames,
                    datasets: [{
                            label: 'Scores',
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 2,
                            data: courseScores,
                    }]
                }}
                options={{
                    title: {
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend: {
                        display:true,
                        position:'right'
                    }
                }} />
            </div>
        </div>
    );
};

export default Semester;