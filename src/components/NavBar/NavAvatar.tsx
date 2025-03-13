import React from 'react';

function NavAvatar() {
    return (
        <li className="nav-item dropdown pe-3">
            <a href="#" className="nav-link nav-profile d-flex align-items-center" data-bs-toggle="dropdown">
                <img src="https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg" alt="" className="rounded-circle" />
                <span className="d-none d-md-block dropdown-toggle ps-2">A. Taguig</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                    <h6>Taguig</h6>
                    <span>Asia Cargo Container Line, Inc</span>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center">
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </li>
    );
}

export default NavAvatar;
