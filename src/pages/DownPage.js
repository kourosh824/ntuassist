import React, { useEffect, useState } from 'react';
import { storage } from '../database/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import downStyles from '../styles/downPage.module.css'
import Dropdown from '../components/Dropdown';

const DownPage = () => {
    const [defSem, setDefSem] = useState('');
    const [defCrs, setDefCrs] = useState('');
    const [defDwn, setDefDwn] = useState('');
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);
    const [downloads, setDownloads] = useState([]);
    
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
        className={downStyles['downpage']}>
            <Header
            title={'να διαβάσουμε κι λίγο :)'} />
            <Sidebar />
            <div
            className={downStyles['downpage__content']}>
                {/* <select
                onChange={handleSemesterChange}>
                    {semesters.map((sem, index) => {
                        return (
                            <option
                            key={index}
                            value={sem}>
                                {sem}
                            </option>
                        );
                    })}
                </select>
                <select
                onChange={handleCourseChange}>
                    {courses.map((crs, index) => {
                        return (
                            <option
                            key={index}
                            value={crs}>
                                {crs}
                            </option>
                        );
                    })}
                </select>
                <select
                onChange={handleDownloadChange}>
                    {downloads.map((dnl, index) => {
                        return (
                            <option
                            key={index}
                            value={dnl}>
                                {dnl}
                            </option>
                        );
                    })}
                </select>
                <button
                onClick={handleDownload}>
                    Download
                </button> */}
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
                <button
                onClick={handleDownload}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default DownPage;