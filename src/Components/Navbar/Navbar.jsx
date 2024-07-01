import React, { useRef, useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    };

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
            <ul className="nav-menu" ref={menuRef}>
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
                <li>
                    <AnchorLink className="anchor-link" href="#home">
                        <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
                        {menu === "home" ? <img src={underline} alt='underline' /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" href="#about">
                        <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
                        {menu === "about" ? <img src={underline} alt='underline' /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" href="#services">
                        <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
                        {menu === "services" ? <img src={underline} alt='underline' /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" href="#work">
                        <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
                        {menu === "work" ? <img src={underline} alt='underline' /> : null}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className="anchor-link" href="#contact">
                        <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
                        {menu === "contact" ? <img src={underline} alt='underline' /> : null}
                    </AnchorLink>
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
