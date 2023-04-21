import React, { useEffect, useState } from 'react';
import { storage } from '../database/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

const DownloaderPage = () => {
    const [defSem, setDefSem] = useState('');
    const [defCrs, setDefCrs] = useState('');
    const [defDwn, setDefDwn] = useState('');
    const [semesters, setSemesters] = useState([]);
    const [courses, setCourses] = useState([]);
    const [downloads, setDownloads] = useState([]);
    
    const handleSemesterChange = (e) => {
        e.preventDefault();
        setDefSem(e.target.value);
        const listRef = ref(storage, `${e.target.value}/`);
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

    const handleCourseChange = (e) => {
        e.preventDefault();
        const listRef = ref(storage, `${defSem}/${e.target.value}`);
        setDefCrs(e.target.value);
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

    const handleDownloadChange = (e) => {
        e.preventDefault();
        setDefDwn(e.target.value);
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
        <div>
            <select
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
            </button>
        </div>
    );
};

export default DownloaderPage;