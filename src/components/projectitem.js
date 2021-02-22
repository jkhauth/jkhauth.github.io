import React from 'react';


const ProjectItem = ({project}) => {

    const projectimgstyle = {
        maxWidth: "250px",
        border: "1px solid white"
      };

    
return (

<div className="d-flex mb-3 flex-column align-items-center justify-content-center projectdiv mx-3 p-2">
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <img style={projectimgstyle} className="img-fluid projectimg mx-2" src={project.imagesrc} alt="project-pic"></img>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <h2 className="text-center sectionheader">{project.projecttitle}</h2>
    <div className="d-flex flex-row flex-wrap justify-content-center">
    <h3 className="mx-2">{project.languages[0]}</h3>
    <h3 className="mx-2">{project.languages[1]}</h3>
    <h3 className="mx-2">{project.languages[2]}</h3>
    <h3 className="mx-2">{project.languages[3]}</h3>
    </div>
    <div className="d-flex flex-row">
    <button><a href={project.applicationurl}>Application Url</a></button>
    <button><a href={project.githuburl}>GitHub Url</a></button>
    </div>
    <div className="d-flex projectdescription">
    <p className="text-justify mb-0">{project.projectdescription}</p>
    </div>
    </div>
    </div>
</div>

 )}

export default ProjectItem;