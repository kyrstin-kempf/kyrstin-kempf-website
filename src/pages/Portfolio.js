import React from "react";
import OnePortfolioTile from "../components/OnePortfolioTile";

function Portfolio({ projects }) {

  const newestProjectsFirst = [...projects].sort((a, b) => b.id - a.id);
  const allProjects = newestProjectsFirst.map((p) => <OnePortfolioTile key={ p.id } project={p} /> )

  return (
    <div className="body-container"> 
        <h1 className="page-title">Portfolio</h1>
        <div className="all-tiles-container">
          {allProjects}
        </div>
    </div>
  );
}
export default Portfolio;