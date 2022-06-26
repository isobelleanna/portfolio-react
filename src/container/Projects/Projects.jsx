import React from "react";
import "./Projects.scss";
import CardList from "../../component/CardList/CardList";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3 className="title">Projects</h3>
      <CardList />
    </div>
  );
};

export default Projects;
