import React from "react";
import { useParams } from "react-router-dom";


function OneProject({ projects }) {
  const { id } = useParams();

  const project = projects.filter(project => project.id == id)
  // console.log(p)

  return (
    <div className="body-container">
      {project.map(p => (
        <div key={p.id} className="one-project-container">
          <div>
            <h2 className="about-h2">Summary</h2>
            <hr></hr>
            <div className="summary-box">
              <h2>{p.title}</h2>
              <p>{p.details}</p>
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
            <img src={p.gif} alt="" className="bts-img"/>
          </div>
        </div>
      ))} 
    </div>
  );
}
export default OneProject;