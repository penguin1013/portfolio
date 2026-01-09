import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id="header" className={isOpen ? 'open' : ''}>
            <div className="header-wrap">
                <h1>
                    <a href="#section1" onClick={(e) => handleNavClick(e, '#section1')}>
                        JJIN<br />NYANG
                    </a>
                </h1>
                <a href="#!" className="btn-menu" onClick={toggleMenu}>
                    <img src={`${import.meta.env.BASE_URL}image/common/btn_menu_off.png`} alt="" className="off" />
                    <img src={`${import.meta.env.BASE_URL}image/common/btn_menu_on.png`} alt="" className="on" />
                </a>
                <p className="bg"><span></span></p>
            </div>
            <nav id="gnb">
                <div className="gnb-wrap">
                    <ul>
                        <li><a href="#section1" onClick={(e) => handleNavClick(e, '#section1')}>HOME</a></li>
                        <li><a href="#section2" onClick={(e) => handleNavClick(e, '#section2')}>ABOUT</a></li>
                        <li><a href="#section3" onClick={(e) => handleNavClick(e, '#section3')}>AWARDS</a></li>
                        <li><a href="#section4" onClick={(e) => handleNavClick(e, '#section4')}>RESUME</a></li>
                        <li><a href="#section5" onClick={(e) => handleNavClick(e, '#section5')}>WORK</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
