import React, { useState } from 'react'
import projectsdata from "./data/projectsdata"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    const [projects, setProjects] = useState(projectsdata);
    const [active, setActive] = useState('All')

    const handleFilterCategory = (name) => {
        const new_array = projectsdata.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }
    return (
        <div className="container projects">
            <div className="projects-navbar">
                <div className={`${active === 'All' && 'projects_active'} `} onClick={
                    () => {
                        setProjects(projectsdata)
                        setActive('All')
                    }
                }>All</div>
                <div className={`${active === 'react.js' && 'projects_active'} `} onClick={() => handleFilterCategory('react.js')}>React</div>
                <div className={`${active === 'mongoDB' && 'projects_active'} `} onClick={() => handleFilterCategory('mongoDB')}>MongoDB</div>
                <div className={`${active === 'node.js' && 'projects_active'} `} onClick={() => handleFilterCategory('node.js')}>Node</div>
                <div className={`${active === 'vanilla' && 'projects_active'} `} onClick={() => handleFilterCategory('vanilla')}>Vanilla</div>
            </div>
            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>
        </div >
    )
}

export default Projects
