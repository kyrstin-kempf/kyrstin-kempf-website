import React from "react";

function OnePortfolioTile({ project }) {
  return (
    <div>
      <div className="portfolio-title">
        <h1>{project.title}</h1>
      </div>
      <div className="portfolio-image">
        <img src={project.tile_image} alt="" />
      </div>
    </div>
  );
}
export default OnePortfolioTile;