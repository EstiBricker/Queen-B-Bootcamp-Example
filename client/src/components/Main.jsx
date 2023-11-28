import React from "react";
import { useState, useEffect } from "react";
//import teachersData from "../teachers.js";
import Card from "./Card.jsx";

export default function Main({ props }) {
  // const teachers = teachersData;
  const numTeachers = teachers.length;

  const [teachers, setTeachers] = useState([]);
  //console.log(port);
  useEffect(() => {
    fetch(`http://localhost:${props.port}/teachers`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => {
        console.error("error fatching data: ", error);
      });
  }, []);

  return (
    <main className="main">
      <h2>Our teachers:</h2>

      {numTeachers > 0 ? (
        <>
          <p>
            view our amazing teachers, each with their own unique style, for
            more details click on the teacher.
          </p>

          <ul className="teachers">
            {teachers.map((teacher) => (
              <Card teacherObj={teacher} key={teacher.id} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still recruiting. Please come back later :)</p>
      )}
    </main>
  );
}
