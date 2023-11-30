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
                            <Card teacherObj={mentor} key={mentor.id} />
                         </Link>
                    </Container>
                )}

            </Row>
        </Container>
    );
}