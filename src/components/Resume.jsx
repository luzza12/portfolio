import React from 'react'
import react from "../assets/icons/react.svg"
import Bar from "./Bar"

const languages = [
    {
        icon: react,
        name: 'React',
        level: '45'
    },
    {
        icon: react,
        name: 'React',
        level: '50'
    },
    {
        icon: react,
        name: 'React',
        level: '80'
    },
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '53'
    },
    {
        icon: react,
        name: 'Figma',
        level: '65'
    },
    {
        icon: react,
        name: 'Figma',
        level: '88'
    },
]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-heading">Education</h4>
                    <div className="resume-body">
                        <h5 className="resume-title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-name">
                            Academy of Technology
                        </p>
                        <p className="resume-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, animi!
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-heading">Experience</h4>
                    <div className="resume-body">
                        <h5 className="resume-title">
                            Lorem ipsum dolor sit amet.
                        </h5>
                        <p className="resume-name">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <p className="resume-details">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, animi!
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-heading">
                        Language and Framework
                    </h5>
                    <div className="resume-body">
                        {
                            languages.map(language => {
                                return (
                                    <Bar value={language} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages mt-3">
                    <h5 className="resume-heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-body">
                        {
                            tools.map(tool => {
                                return (
                                    <Bar value={tool} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
