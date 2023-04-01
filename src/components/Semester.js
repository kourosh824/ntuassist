import React from "react";
import { useState } from "react";

import Course from './Course';

const Semester = ({ semesterIndex, courses }) => {
    const [numRegCourses, setNumRegCourses] = useState(0);

    const handleAddCourse = () => {
        setNumRegCourses(numRegCourses + 1);
    };

    const handleRemoveCourse = () => {
        setNumRegCourses(numRegCourses - 1);
    };

    return (
        <div>
            <h1>Semester {semesterIndex + 1}</h1>
            <div>
                {courses.map((crs, crsIndex) => {
                    return (
                        <Course
                        index={crsIndex}
                        courseName={crs}
                        addCourse={handleAddCourse}
                        removeCourse={handleRemoveCourse} />
                    )
                })}
                <p>{numRegCourses}</p>
            </div>
        </div>
    );
};

export default Semester;