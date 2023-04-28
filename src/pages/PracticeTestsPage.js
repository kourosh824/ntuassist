import React, { useEffect, useState } from 'react';
import { storage } from '../database/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { Download } from 'react-bootstrap-icons';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import Alert from '../components/Alert';

import practiceStyles from '../styles/practicePage.module.css'
import Dropdown from '../components/Dropdown';

const PracticeTestsPage = () => {
    const [defSem, setDefSem] = useState('');
    const [defCrs, setDefCrs] = useState('');
    const [defDwn, setDefDwn] = useState('');
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);
    const [downloads, setDownloads] = useState([]);

    const [alerts, setAlerts] = useState([]);
    
    const handleSemesterChange = (sem) => {
        setDefSem(sem);
        const listRef = ref(storage, `${sem}/`);
        listAll(listRef)
        .then((res) => {
            setCourses([]);
            res.prefixes.forEach((folder) => {
                if(!courses.includes(folder.name)) {
                    setCourses((old) => [
                        ...old,
                        folder.name
                    ]);
                };
            });
        });
    };

    const handleCourseChange = (crs) => {
        const listRef = ref(storage, `${defSem}/${crs}`);
        setDefCrs(crs);
        listAll(listRef)
        .then((res) => {
            setDownloads([]);
            res.items.forEach((item) => {
                if(!downloads.includes(item.name)) {
                    setDownloads((old) => [
                        ...old,
                        item.name
                    ]);
                };
            });
        });
    };

    const handleDownloadChange = (dwn) => {
        setDefDwn(dwn);
    };

    const handleDownload = (e) => {
        e.preventDefault();
        const defRef = `${defSem}/${defCrs}/${defDwn}`;
        
        if(defRef === '//') {
            setAlerts(old => [
                ...old,
                <Alert
                type='error'
                message='μήπως να διαλέξεις ένα παλιό θέμα?' 
                delay={3000} />
            ]);
            return;
        }

        const downloadRef = ref(storage, defRef);
        getDownloadURL(downloadRef)
        .then((url) => {
            window.open(url);
        });
    };
    
    useEffect(() => {
        const listRef = ref(storage, '');
        listAll(listRef)
        .then((res) => {
            res.prefixes.forEach((folder) => {
                if(!semesters.includes(folder.name)) {
                    setSemesters((old) => [
                        ...old,
                        folder.name
                    ])
                }
            });
        }); 
    }, []);

    return (
        <div
        className={practiceStyles['practicepage']}>
            <Header
            title={'NTUAssist'} />
            <Sidebar />
            <div
            className={practiceStyles['practicepage__content']}>
                <p
                className={practiceStyles['practicepage__title']}>
                    Παλιά Θέματα
                </p>
                <Dropdown
                onChange={handleSemesterChange}
                isSearchable
                placeHolder='Εξάμηνο'
                options={semesters} />
                <Dropdown
                onChange={handleCourseChange}
                isSearchable
                placeHolder='Μάθημα'
                options={courses} />
                <Dropdown
                onChange={handleDownloadChange}
                isSearchable
                placeHolder='Αρχείο'
                options={downloads} />
                <Button
                Icon={Download}
                onClick={handleDownload}>
                    Download
                </Button>
            </div>
            {alerts}
        </div>
    );
};

export default PracticeTestsPage;