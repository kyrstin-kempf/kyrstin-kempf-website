import React from "react";
import { Link } from "react-router-dom"

function OnePortfolioTile({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className="project-tile">
      <div>
        <div className="portfolio-title">
          <h1>{project.title}</h1>
        </div>
        <div className="portfolio-image">
          <img src={project.tile_image} alt="" />
        </div>
      </div>
    </Link>
  );
}
export default OnePortfolioTile;