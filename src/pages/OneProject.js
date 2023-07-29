import React from "react";
import { useParams } from "react-router-dom";


function OneProject({ projects }) {
  const { id } = useParams();

  const project = projects.filter(project => project.id == id)
  // console.log(p)

  return (
    <div className="body-container">
      {project.map(p => (
        <div key={p.id}>
          <div>
            <h2 className="about-h2">Summary</h2>
            <hr></hr>
            <div className="summary-box">
              <h2>{p.title}</h2>
              <p>{p.details}</p>
            </div>
          </div>
          <div>
            <h2>Behind The Scenes</h2>
            <hr></hr>
            <img src={p.wireframe_image} alt="" />
          </div>
          <div>
            <h2>Snapshot</h2>
            <hr></hr>
            <img src={p.gif} alt="" />
          </div>
        </div>
      ))} 
    </div>
  );
}
export default OneProject;