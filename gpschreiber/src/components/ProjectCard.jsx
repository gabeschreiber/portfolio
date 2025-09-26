import React from 'react';

const ProjectCard = ({title, info, skills, link}) => {
    return (
        <div className="project" >
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
};

export default ProjectCard;