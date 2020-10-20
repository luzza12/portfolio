import React from 'react'

const SkillCard = ({ skill }) => {
    return (
        <div className="col-lg-6">
            <div className="skill-card">
                <img src={skill.icon} alt="icon" className="skill-icon" />
                <div className="skill-body">
                    <h6 className="skill-title">{skill.title}</h6>
                    <p className="skill-content">{skill.about}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
