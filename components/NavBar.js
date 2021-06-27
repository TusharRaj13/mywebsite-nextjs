import React, { useEffect, useState } from 'react'
import styles from '../styles/NavBar.module.css'
import { FaHome, FaIdCard, FaBriefcase, FaAddressBook, FaArrowLeft, FaPaintBrush } from 'react-icons/fa'

function NavBar() {

    const [themeIndex, setthemeIndex] = useState(0);
    const theme_list = [
        {
            name : "Theme-Red",
            accent : "#f25002",
            accentDark : "#f4631b"
        },
        {
            name : "Theme-Green",
            accent : "#107b10",
            accentDark: "#0e6e0e"
        },
        {
            name : "Theme-Green2",
            accent : "#7bff00",
            accentDark: "#8ac113"
        },
        {
            name : "Theme-Blue",
            accent : "#00a4ef",
            accentDark: "#18acf1"
        },
        {
            name : "Theme-Yellow",
            accent : "#ffb900",
            accentDark: "#ffc219"
        },
        {
            name : "Theme-Pink",
            accent : "#ee206b",
            accentDark: "#ef3478"
        }
    ];

    const handleClick = () => {
        setthemeIndex(themeIndex+1);
    }

    useEffect(() => {
        var t = localStorage.getItem('theme');
        if(!t){
            t = 0;
        }
        setthemeIndex(t);
    }, [])

    useEffect(() => {
        document.documentElement.classList.add('theme-transition');
        var theme = theme_list[themeIndex%theme_list.length];
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--accent-dark', theme.accentDark)
        localStorage.setItem('theme', themeIndex%theme_list.length);
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-transition')
          }, 500)
    }, [themeIndex])

    return (
        <div>
            <nav className={styles.navbar}>
                <ul className={styles.navbar_nav}>
                    <li className={styles.logo}>
                        <a className={styles.nav_link} href="#home">
                            <span className={styles.link_text}>Tushar Raj</span>
                            <FaArrowLeft className={styles.nav_icon} />
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#home">
                            <FaHome className={styles.nav_icon} />
                            <span className={styles.link_text}>Home</span>
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#about">
                            <FaIdCard className={styles.nav_icon} />
                            <span className={styles.link_text}>About</span>
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#projects">
                            <FaBriefcase className={styles.nav_icon} />
                            <span className={styles.link_text}>Projects</span>
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <a className={styles.nav_link} href="#contact">
                            <FaAddressBook className={styles.nav_icon} />
                            <span className={styles.link_text}>Contact</span>
                        </a>
                    </li>
                    <li className={styles.nav_item}>
                        <div className={styles.nav_link} onClick={handleClick} >
                            <FaPaintBrush className={styles.nav_icon} />
                            <span className={styles.link_text}>Theme</span>
                        </div>
                    </li>
                    {/* <li className={styles.nav_item}>
                        <button className="btn" onClick={this.changeThemeHandler}>Change Theme</button>
                    </li> */}
                    {/* <li><a href="#about" className="dot" onClick={this.clickHandler("about")}><span className="number">02</span><span className="title">ABOUT</span></a></li>  
                    <li><a href="#projects" className="dot" onClick={this.clickHandler("projects")}><span className="number">03</span><span className="title">PROJECTS</span></a></li>  
                    <li><a href="#contact" className="dot" onClick={this.clickHandler("contact")}><span className="number">04</span><span className="title">CONTACT</span></a></li>   */}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
