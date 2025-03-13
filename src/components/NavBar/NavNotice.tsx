import React from 'react';

function NavNotice() {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">6</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    You have 6 new notifications
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View All
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>2 hours ago</p>
                    </div>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                    <a href="#">Show all notifications</a>
                </li>
            </ul>
        </li>
    );
}

export default NavNotice;
