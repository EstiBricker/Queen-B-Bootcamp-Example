import React from "react";
// import teachersData from "../teachers.js";
import Card from "./Card.jsx";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";

export default function Main({teachersList}) {
  // const teachers = teachersData;
  const numTeachers = teachersList.length;

  return (
    <main className="main">
      <h2>Our teachers:</h2>

      {numTeachers > 0 ? (
        <>
          <h3>
            view our amazing teachers, each with their own unique style, for
            more details click on the teacher.
          </h3>

          <ul className="teachers">
            {teachersList.map((teacher) => (
                <Col xs={6} md={4} style={{display: "flex", flexDirection: "column", alignItems: "center", flexWrap: "wrap"}}>
                    <Link to="../teachers" state={{from: teacher.id}}>
                        <Card teacherObj={teacher} key={teacher.id} />
                    </Link>
                </Col>

            ))}
          </ul>
        </>
      ) : (
        <p>We're still recruiting. Please come back later :)</p>
      )}
    </main>
  );
}
