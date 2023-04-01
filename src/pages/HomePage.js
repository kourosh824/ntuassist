import React from "react";
import Semester from "../components/Semester";
import useSemesterData from '../hooks/useSemesterData';

const semesters = [
    ['Course A', 'Course B', 'Course C'],
    ['Course D', 'Course E', 'Course F']
];

const HomePage = () => {
    const sems = semesters.map(
        (sem, index) => {
            return (
                <Semester
                key={index}
                semesterIndex={index}
                courses={sem} />
            );
        }
    );

    return (
        <div>
            {sems}
        </div>
    );
};

export default HomePage;