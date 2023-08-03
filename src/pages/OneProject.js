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
              <p><b>Inspiration:</b> {p.inspo}</p>
              <p><b>Details:</b> {p.details}</p>
              <p><b>Languages:</b> {p.languages}</p>

              {p.deployed_link.length === 0 ?
              <p>
                <b>GitHub: </b>
                <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="project-links">{p.github_link}</a> 
              </p>
              :
              <span>
                <p>
                  <b>GitHub: </b>
                  <a href={p.github_link} target="_blank" rel="noopener noreferrer" className="project-links">{p.github_link}</a>
                </p>
                <p>
                  <b>Deployed Link: </b>
                  <a href={p.deployed_link} target="_blank" rel="noopener noreferrer" className="project-links">{p.deployed_link}</a>
                </p>
              </span>
              }

            </div>
          </div>
          <div className="bts-column">
            <h2>Wireframe</h2>
            <hr></hr>

            {p.wireframe_image.length === 0 ?
              <div className="bts-no-img">
                <h3>None available for this project</h3>
              </div>
              :
              <div className="bts-img">
                <img src={p.wireframe_image} alt="" />
              </div>
            }

          </div>
          <div>
            <h2>Demo</h2>
            <hr></hr>
            <div className="snapshot">
              <img src={p.gif_image} alt=""/>
            </div>
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