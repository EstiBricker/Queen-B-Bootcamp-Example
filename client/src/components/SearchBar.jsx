import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card.jsx";
import {Link} from "react-router-dom";
// import person1 from "../images/person1.svg";
// import person2 from "../images/person2.svg";
// import person3 from "../images/person3.svg";
// import person4 from "../images/person4.svg";
// import person5 from "../images/person5.svg";
// import person6 from "../images/person6.svg";
// import person7 from "../images/person7.svg";
import avatarsList from "./AvatarsList";
export default function SearchBar({mentors}) {
    const avatars = avatarsList()
    console.log(avatarsList[1])
    // const avatars = {"1": person1, "2": person2, "3": person3, "4": person4, "5": person5, "6": person6, "7": person7};
    const [SearchTerm, SetSearchTerm] = useState('')
    return (
        <Container>
                 <input
                     style={{height: "5rem", width: "35rem", fontSize: "3rem"}}
                        type="text"
                        placeholder="Search.."
                        onChange={(event)=>{ SetSearchTerm(event.target.value); }}
                    />

            <Row style={{flexWrap: "wrap"}}>
                {mentors.filter((value)=>{
                    // console.log(typeof )
                    // console.log( SearchTerm)

                    // if (typeof value !== 'string'){
                    //     return false
                    // }
                        if(SearchTerm === ""){
                            return value;
                        } else {
                            if(value.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                return value;
                            } else {
                                console.log(value)
                                if(value.city.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                    return value;
                                 }/*
                                else if(value.ingredients.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                    return value
                                }*/
                            }
                        }
                    // }

                }).map(mentor =>
                    <Container>
                         <Link to="../teachers" state={{from: mentor.id}}>
                            <Card teacherObj={mentor} key={mentor.id} img={avatars[mentor.id]}/>
                         </Link>
                    </Container>
                )}

            </Row>
        </Container>
    );
}