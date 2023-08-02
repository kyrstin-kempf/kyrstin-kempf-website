import React from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";


function OneProject({ projects }) {
  const { id } = useParams();

  const project = projects.filter(project => JSON.stringify(project.id) === id)
  // console.log(project)

  return (
    <div className="body-container">
      {project.map(p => (
        <div key={p.id} className="one-project-container">
          <div>
            <h2 className="about-h2">Summary</h2>
            <hr></hr>
            <div className="summary-box">
              <h2 id="summary-h2">{p.title}</h2>
              <p>{p.details}</p>

              {p.deployed_link.length === 0 ?
              <p id="project-links-p">
                <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="project-links">GitHub</a> 
              </p>
              :
              <p id="project-links-p">
                <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="project-links">GitHub</a> | <a href={p.deployed_link} target="_blank" rel="noopener noreferrer" className="project-links">Link</a>
              </p>
              }

            </div>
          </div>
          <div className="bts-column">
            <h2>Behind The Scenes</h2>
            <hr></hr>
            <img src={p.wireframe_image} alt="" className="bts-img"/>
          </div>
          <div>
            <h2>Snapshot</h2>
            <hr></hr>
            <img src={p.gif_image} alt="" className="snapshot"/>
          </div>
        </div>
      ))}
      <div className="back-btn-container">
        <Link to={`/portfolio`} id="back-btn">⬅︎ Back</Link>
      </div>
    </div>
  );
}
export default OneProject;