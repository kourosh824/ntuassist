import React, { useEffect } from "react";
import Semester from "../components/Semester";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import homeStyles from '../styles/homePage.module.css';
import { useNavigate } from "react-router-dom";

const semesters = [
    [
        'Γραμμική Άλγεβρα',
        'ΛΣΨΣ',
        'Μαθηματική Ανάλυση',
        'Προγραμματισμός',
        'Φυσική',
        [
            'Ιστορία',
            'Κοινωνιολογία',
            'Φιλοσοφία'
        ]
    ],
    [
        'Ανάλυση Γραμμικών Κυκλωμάτων',
        'Διαφορικές Εξισώσεις',
        'Δομή και Ηλεκτρικές Ιδιότητες',
        'Μαθηματική Ανάλυση',
        'Προγραμματιστικές Τεχνικές',
        [
            'Μηχανική',
            'Tεχνική Μηχανική'
        ]
    ],
];

const HomePage = () => {
    const navigate = useNavigate();
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
        <div
        className={homeStyles['homepage']}>
            <Sidebar />
            <Header
            title={'NTUAssist'} />
            <div
            className={homeStyles['homepage__content']}>
                {sems}
            </div>
        </div>
    );
};

export default HomePage;