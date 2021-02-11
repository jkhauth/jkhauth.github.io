import React from 'react';


const ProjectItem = ({project}) => {

    const projectimgstyle = {
        maxWidth: "250px",
        border: "1px solid white"
      };

    const buttonStyle = {
    backgroundColor: "#104166",
    color: "white",
    borderRadius: "5px",
    border: "1px solid white",
    fontSize: "20px",
    padding: "4px"
    }
    
return (

<div className="d-flex mb-3 flex-column align-items-center justify-content-center projectdiv mx-3 p-2">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <img style={projectimgstyle} className="img-fluid projectimg mx-2" src={project.imagesrc} alt="project-pic"></img>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex flex-row">
    <a style={buttonStyle} href={project.applicationurl}>Application Url</a>
    <a style={buttonStyle} href={project.githuburl}>GitHub Url</a>
    </div>
    <div className="d-flex projectdescription">
    <p className="text-justify mb-0">{project.projectdescription}</p>
    </div>

    </div>
    </div>
</div>

 )}

export default ProjectItem;