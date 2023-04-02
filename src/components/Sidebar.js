import React from "react";
import { House, Speedometer2, Calendar2Event, People } from "react-bootstrap-icons";
import sidebarStyles from '../styles/sidebar.module.css';

const Sidebar = () => {
    const handleItemClick = (txt) => {
        alert(txt);
    };

    return (
        <div
        className={sidebarStyles['sidebar']}>
            <House
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <Speedometer2
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <Calendar2Event
            size={30}
            className={sidebarStyles['sidebar__item']} />
            <People
            size={30}
            className={sidebarStyles['sidebar__item']} />
        </div>
    )
};

export default Sidebar;