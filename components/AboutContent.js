import React from 'react'
import styles from '../styles/AboutContent.module.css'
import Image from 'next/image'

function AboutContent() {
    return (
        <section className={styles.aboutContent} id="about">
                <div className="fake_big">
                    About
                </div>
                <div className="headerText highlightText">&lt; I love making stuffs /&gt;</div>
                {/* <img src="/profile_img.jpg"  style={{marginTop: "1rem"}} height="150" width="150" alt="profile_img"/> */}
                <Image src="/profile_img.jpg" style={{marginTop: "1rem"}} height="150" width="150" alt="Tushar Raj Gupta"/>
                <div className={styles.infoContent}>
                    <h2>
                        Hi, I&#39;m Tushar, nice to meet you. Please take a look around!
                    </h2>
                    <p>
                        I&#39;m passionate about building execellent software that improves the live of those around me. I specialize in creating UWP applications and web apps.
                    </p>                    
                </div>
                <br/>
                <a target="_black" rel="noreferrer" href="https://tusharrajgupta.blob.core.windows.net/docs/TusharRajGupta-%20CV.pdf" className="btn">Download Resume</a>
            </section>
    )
}

export default AboutContent
