import React from "react";
import Semester from "../components/Semester";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useSemesterData from '../hooks/useSemesterData';

const semesters = [
    [
        'Γραμμική Άλγεβρα',
        'ΛΣΨΣ',
        'Μαθηματική Ανάλυση',
        'Προγραμματισμός',
        'Φυσική',
        [
            'Ιστορία των Επιστημονικών και Φιλοσοφικών Ιδεών',
            'Κοινωνιολογία της Επιστήμης και της Τεχνολογίας',
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
            <Sidebar />
            <Header
            title={'NTUAssist'} />
            {sems}
        </div>
    );
};

export default HomePage;