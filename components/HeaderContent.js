import React from 'react'
import styles from '../styles/HeaderContent.module.css'

function HeaderContent() {
    return (
        <section className={styles.homeContent} id="home" >
            <div className={styles.contentContainer}>
                <div className={styles.flex}>
                    <div className="headerText">
                        Hello, I&#39;m <span className="highlightText">TUSHAR RAJ GUPTA</span>.<br/>I&#39;m a full stack web and UWP developer.<br/>
                        <br/><a href="#projects" className="btn">View My Work</a>
                    </div>
                </div>
            </div>                
        </section>
    )
}

export default HeaderContent
