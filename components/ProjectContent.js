import React from 'react'
import styles from '../styles/ProjectContent.module.css'
import ProjectContainer from './ProjectContainer'

function ProjectContent() {
    return (
        <section className={styles.projectContent} id="projects">
            <div className="fake_big">
                Projects
            </div>
            <div className="headerText highlightText">&lt; I make stuff /&gt;</div>
            <h1>Here are some of my projects.</h1>
            <ProjectContainer/>
        </section>
    )
}

export default ProjectContent
