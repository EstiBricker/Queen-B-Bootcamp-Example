import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../../index.css";
import "./MentorPage.cc.css";
import PersonalHeader from "../mentorPersonalPage/PersonalHeder";
import Contacts from "../mentorPersonalPage/Contacts";
import DetailsList from "../mentorPersonalPage/DitailsList";

/*
function MentorProfile({ mentorData }) {
  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <MDBTypography tag="h5">{mentorData.name}</MDBTypography>
                  <MDBCardText>{mentorData.location}</MDBCardText>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      mentorData.mentis
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Mentis
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      mentorData.likes
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Likes
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Following
                    </MDBCardText>
                  </div>
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      Web Developer
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-1">
                      Lives in New York
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Photographer
                    </MDBCardText>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">Life Philosophy</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <MDBCardText className="font-italic mb-1">
                      mentorData.philosophy
                    </MDBCardText>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">
                    Contacts
                  </MDBCardText>
                </div>
                <MDBRow>
                  <MDBCol className="mb-2">
                    <i className="bi bi-whatsapp"></i>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <i className="bi bi-envelope"></i>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <i className="bi bi-linkedin"></i>
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <i className="bi bi-telephone"></i>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
} */

// export default KitchenSinkExample;

export default function MentorPage({ port }) {
  const [mentorData, setMentorData] = useState(null);
  const [_, setId] = useState(0);
  const location = useLocation();
  const check_null = location.state === null;
  let { from } = check_null === true ? null : location.state;

  //useEffect(() => {
  //  setId(from);
  //}, [check_null, from]);

  // useEffect(() => {
  //     fetch(`http://localhost:${port}/teachers/:${from}`)
  //         .then(response => {
  //              return response.json()
  //         })
  //         .then(data => {
  //             setMentorData(data);
  //         })
  //         .catch((error) => {
  //             console.error("error fatching data: ", error);
  //         });
  // }, [])
  useEffect(() => {
    fetch(`http://localhost:${port}/teachers/${from}`)
      .then((response) => response.json())
      .then((data) => {
        setMentorData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [from, port]);

  return (
    <div>
      {from == null ? (
        <h1>the mentor is not exist</h1>
      ) : (
        <div>
          {/*<h1>this is the mentor page!</h1>*/}
          {/*<h4>mentor data: {JSON.stringify(mentorData)}</h4>*/}
          {/*<h4>mentor data type: {typeof (mentorData)}</h4>*/}
          {/*<h4>mentor id: {id}</h4>*/}
          <PersonalHeader name={mentorData.name} />
          {/*<Person teacherData={mentorData}/>*/}
          <DetailsList data={mentorData} />
          <Contacts />
          {/*<MentorProfile mentorData={mentorData}/>*/}
        </div>
      )}
      <Link style={{ fontSize: "2rem" }} to="/">
        To Home Page
      </Link>
      {/*    add your components here :) */}
    </div>
  );
}
