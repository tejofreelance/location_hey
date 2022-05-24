import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "../scss/card.scss";

export default function MachineCard({ name_location, address, map }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <Router>
            {/* <img className="img-fluid" src={image} alt={title} /> */}
            <h3>{name_location}</h3>
          </Router>
          <p>{address}</p>
          <a href={map} target="_blank" rel="noreferrer">
            Get direction
          </a>
        </div>
      </div>
    </>
  );
}
