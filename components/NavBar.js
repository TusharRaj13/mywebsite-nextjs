import React from 'react'
import styles from '../styles/NavBar.module.css'
import { FaHome, FaIdCard, FaBriefcase, FaAddressBook, FaArrowLeft, FaPaintBrush } from 'react-icons/fa'

function NavBar() {
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
                            <div className={styles.nav_link}  >
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
