import React from 'react'
import styles from '../styles/ProjectContainer.module.css'
import ProjectItem from './ProjectItem'

function ProjectContainer() {

    const projectlist = [
        {
            name:"Companion for Fortnite",
            img:"/project/fc.jpg",
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9NR9PX55K522"
        },
        {
            name:"Companion for Valorant",
            img:"/project/vc.jpg",
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9N0XGX7KBFNL"
        },
        {
            name:"IndiClassroom",
            img:"/project/indi.jpg",
            tech:"MEAN Stack",
            url:"https://github.com/TusharRaj13/IndiClassroom"
        },
        {
            name:"Unofficial Windows Central",
            img:"/project/wc.jpg",
            tech:"UWP C#",
            url:"https://www.microsoft.com/store/apps/9MV981LVC2RH"
        },
        {
            name:"Wordcamp Calendar",
            img:"/project/wordcamp.jpeg",
            tech:"ReactJS & Redux",
            url:"https://tusharraj13.github.io/Wordcamp-React-App/"
        },
        {
            name:"HTML Editor",
            img:"/project/html.jpeg",
            tech:"ReactJS & Redux",
            url:"https://tusharraj13.github.io/HTML-Editor/"
        }
    ]

    return (
        <div>
            <div className={styles.projectContainer}>
                {projectlist.map((project, index)=>(
                    <ProjectItem key={index} value={project}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer
