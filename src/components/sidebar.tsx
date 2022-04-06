import { NavLink } from "react-router-dom";
import { FaUserCircle, FaClipboardList } from 'react-icons/fa';
import { GoFileDirectory } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <p className="sidebar__text">Menu</p>
      <ul className="sidebar__menu">
        <NavLink to="/dashboard/profile" className={({ isActive }) => isActive? 'sidebar__menu__item__active' : "sidebar__menu__item" }>
          <FaUserCircle className="sidebar__menu__item__icon" />
          Profile
        </NavLink>
        <NavLink to="/dashboard/appointments" className={({ isActive }) => isActive? 'sidebar__menu__item__active' : "sidebar__menu__item" }>
          <FaClipboardList className="sidebar__menu__item__icon" />
          Appointments
        </NavLink>
        <NavLink to="/dashboard/patients" className={({ isActive }) => isActive? 'sidebar__menu__item__active' : "sidebar__menu__item" }>
          <GoFileDirectory className="sidebar__menu__item__icon" />
          Patient Records
        </NavLink>
        <NavLink to="/dashboard/settings" className={({ isActive }) => isActive? 'sidebar__menu__item__active' : "sidebar__menu__item" }>
          <MdSettings className="sidebar__menu__item__icon" />
          Settings
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;