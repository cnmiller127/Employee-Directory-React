import React from "react";
import "../style.css";
const dir = "https://cnmiller127.github.io/Employee-Directory";

function EmployeeCard(props) {
   props = props.children;
   console.log(typeof(props.img))
  return (
    
    <div className="card my-3 d-flex-inline" style ={{width: "18rem"}} >
        <div className="imgWrapper my-3">
        <img className = "img m-auto" alt={props.name} src={dir + props.img} />
        </div>
      
      <div className="card-body bg-info justify-content-center">
        <ul>
          <h3 className = "name">
            {props.name}
          </h3>
          <p>
            <strong>Postion:</strong> {props.position}
          </p>
          <p>
            <strong>Email: </strong> {props.email}
          </p>
          <p>
            <strong>Office: </strong> {props.office}
          </p>
        </ul>
      </div>
    </div>
    
  );
}

export default EmployeeCard;