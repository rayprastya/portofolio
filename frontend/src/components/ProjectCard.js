// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, onClick }) => {
  return (
    <div
      className="bg-primary-color rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <h3 className="text-xl ">{title}</h3>
      <h4 className="">{description}</h4>
    </div>
  );
};

export default ProjectCard;
