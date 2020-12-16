import React from "react";
import "./Job.css";

function Job(props) {
  return (
    <div className={"job_item " + props.className}>
      <h2 className="job_title">{props.title}</h2>
      <p className="job_text">
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
}
export default Job;
