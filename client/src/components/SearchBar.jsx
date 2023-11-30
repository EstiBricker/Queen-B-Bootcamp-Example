import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card.jsx";
import {Link} from "react-router-dom";


export default function SearchBar({mentors}) {
    const [SearchTerm, SetSearchTerm] = useState('')
    return (
        <Container>
                 <input
                        type="text"
                        placeholder="Search.."
                        onChange={(event)=>{ SetSearchTerm(event.target.value); }}
                    />

            <Row style={{flexWrap: "wrap"}}>
                {mentors.filter((value)=>{
                    if(SearchTerm === ""){
                        return value
                    }else { if(value.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                return value
                            }
                        else { if(value.location.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                    return value   
                                }{/*
                                else if(value.ingredients.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                                    return value   
                                }*/}
                            }
                    }
                }).map(mentor =>
                    <Container style={{border: 3, borderColor: "black", background: "#FFE5D9", width: "28%", borderRadius: 10, padding: "0.5rem", margin: "0.5rem", display: "flex", justifyContent: "center"}}>
                         <Link to="../teachers" state={{from: mentor.id}}>
                            <Card teacherObj={mentor} key={mentor.id} />
                         </Link>
                    </Container>
                )}

            </Row>
        </Container>
    );
}