import React from "react";

const indoFea = (props) => {
  return (
    <div>
      <div className="portion">
        <div className="feature">
          <span className="feature-icon-wraper">
            <img src={props.src} alt="Award" />
          </span>
          <h4>{props.name}</h4>
          <p>
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default indoFea;
