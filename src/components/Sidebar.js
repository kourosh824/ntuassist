import React from "react";
import { FileEarmark, Journals, People } from "react-bootstrap-icons";
import sidebarStyles from '../styles/sidebar.module.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const changePage = (to) => {
        navigate(to);
    };

    return (
        <div
        className={sidebarStyles['sidebar']}>
            <FileEarmark
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <Journals
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <People
            size={30}
            className={sidebarStyles['sidebar__item']} />
        </div>
    )
};

export default Sidebar;