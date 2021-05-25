import React from "react";
import { Link } from "react-router-dom";

function RouterPanel() {
  return (
    <div className="router-panel">
      <Link className="router-panel__links" to="/header">
        <button type="button" className="btn btn-outline-primary btn-sm">
          Header
        </button>
      </Link>

      <Link className="router-panel__links" to="/exper">
        <button type="button" className="btn btn-outline-primary btn-sm">
          Experience
        </button>
      </Link>

      <Link className="router-panel__links" to="/qualif">
        <button type="button" className="btn btn-outline-primary btn-sm">
          Qualification
        </button>
      </Link>

      <Link className="router-panel__links" to="/skills">
        <button type="button" className="btn btn-outline-primary btn-sm">
          Skills
        </button>
      </Link>
    </div>
  );
}

export default RouterPanel;
