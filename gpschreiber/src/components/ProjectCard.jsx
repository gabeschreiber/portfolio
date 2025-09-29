import React from 'react';

const ProjectCard = ({title, info, skills, link}) => {
    return (
        <div className="project">
            <h3 
                className="link" 
                onClick={() => { if (link) window.open(link, '_blank'); }}>
                    {title}
            </h3>
            <p className="project-skills">
                {skills.map((skill, index) => (
                    <span className="skill-badge" key={index}>{skill}</span>
                ))}
            </p>
            <p className='project-info'>{info}</p>
        </div>
    );
};

export default ProjectCard;