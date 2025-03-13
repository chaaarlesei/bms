import React from 'react';

function NavMessage() {
    return (
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">9</span>
            </a>

            <ul className="dropdown-menu dropdowm-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                    You have 9 new messages
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img src="https://i.pinimg.com/736x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg" alt="" className="rounded-circle" />
                        <div>
                            <h4>Lorem, ipsum.</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, iure.</p>
                            <p>4 hours ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                    <a href="#">Show all messages</a>
                </li>
            </ul>
        </li>
    );
}

export default NavMessage;
