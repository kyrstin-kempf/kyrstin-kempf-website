import React from "react";
import OnePortfolioTile from "../OnePortfolioTile";

function Portfolio({ projects }) {

  const allProjects = projects.map((p) => <OnePortfolioTile key={ p.id } project={p} /> )

  return (
    <div className="body-container"> 
        <h1 className="page-title">Portfolio</h1>
        {allProjects}
    </div>
  );
}
export default Portfolio;