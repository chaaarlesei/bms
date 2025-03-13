import React from 'react';
import '../assets/css/header.css';
import Logo from './NavBar/Logo';
import SearchBar from './NavBar/SearchBar';
import Nav from './NavBar/Nav';

function Header() {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            {/* logo */}
            <Logo />
            {/* search bar */}
            <SearchBar />
            {/* nav */}
            <Nav />
        </header>
    );
}

export default Header;