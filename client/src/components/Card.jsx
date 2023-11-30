import React from "react";
import {Image} from "react-bootstrap";

export default function Card({ teacherObj, img }) {
  return (
    //add border to the card
    <div className={`teacher ${teacherObj.soldOut ? "unavalible" : ""}`}>
      <Image src={img} alt={teacherObj.img} rounded={true} height={'100rem'} width={'100rem'} style={{background: "#f8edeb", padding: "0.5rem"}} />
      <div>
        <h3>{teacherObj.name}</h3>
        <h4>{teacherObj.profession}</h4>
        <p>📍{teacherObj.city}</p>
        <span>
          {teacherObj.soldOut ? "Currently Unavailable" : teacherObj.price}
        </span>
      </div>
    </div>
  );
}
