import React from 'react';
import '../../assets/css/sideBar.css';

function SideBar() {
    return (
        <aside className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashbord</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="bi bi-book"></i>
                        <span>Bookings</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse">
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Documents</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul className="nav-content collapse" id="components-nav" data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Lorem.</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;