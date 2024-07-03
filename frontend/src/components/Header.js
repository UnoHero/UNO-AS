import React from 'react';

import Logo from "../img/unoAsLogo.png";

const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="UNO AS LOGO" className="logo" />
            <nav className="nav">
                <a href="" className="nav-link">Tjenester</a>
                <a href="" className="nav-link">Kontakt oss</a>
                <a href="" className="nav-link">Ring oss: +47...</a>
            </nav>
        </header>
    );
}

export default Header;
