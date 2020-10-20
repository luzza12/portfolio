import React from 'react'
import Api from "../assets/icons/api.svg"
import SkillCard from './SkillCard'

const skills = [
    {
        icon: Api,
        title: "Lorem ipsum, dolor sit amet",
        about: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quisquam!"
    },
    {
        icon: Api,
        title: "Lorem ipsum, dolor sit amet",
        about: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quisquam!"
    },
    {
        icon: Api,
        title: "Lorem ipsum, dolor sit amet",
        about: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quisquam!"
    },
    {
        icon: Api,
        title: "Lorem ipsum, dolor sit amet",
        about: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quisquam!"
    },
]

const About = () => {
    return (
        <div className="about">
            <h6 className="about-intro">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, quisquam!
            </h6>
            <div className="container about-container">
                <h6 className="about-heading">What I Offer</h6>
                <div className="row">
                    {
                        skills.map((skill, index) => {
                            return (
                                <SkillCard key={index} skill={skill} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
