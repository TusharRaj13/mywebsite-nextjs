import React from 'react'
import styles from '../styles/ProjectItem.module.css'
import Image from 'next/image'

function ProjectItem(props) {
    return (
        <div className={styles.projectItem} key={props.id}>
            <div>
                <div className={styles.projectCard}>
                    {/* <img src={props.value.img} alt="project demo" /> */}
                    <Image className={styles.projectImg} layout='fill' src={props.value.img} alt="project image"/>
                </div>
                <div className={styles.projectInfo}>
                    <div className={styles.projectText}>
                        <h3 className={styles.boldText}>{props.value.name}</h3>
                        <p className={`highlightText ${styles.downText}`}>{props.value.tech}</p>
                    </div>
                    <div className={styles.projectButton}>
                        <br/>
                        <a target="_blank" rel="noreferrer" href={props.value.url} className="btn">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
