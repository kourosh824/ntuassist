import React from "react";
import { House, Speedometer2, Calendar2Event, People } from "react-bootstrap-icons";
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
            <House
            onClick={() => changePage('/home')}
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <Speedometer2
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <Calendar2Event
            onClick={() => changePage('/todo')}
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <People
            size={30}
            className={sidebarStyles['sidebar__item']} />
        </div>
    )
};

export default Sidebar;