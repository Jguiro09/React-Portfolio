import '../styles/Intro.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Intro() {
    return(
        <Container fluid id = "introContainer">
            <Row>
                <Col lg = {1}></Col>
                <Col lg = {6} className = "mainT ext">
                    <span>&lt;01&gt;</span><br></br>
                    Hello.<br></br>
                    I'm <br></br>
                    Jacob Guiro
                    <div className = "intro-subText">
                    Developer
                    </div>
                </Col>
                <Col lg = {5} className = "intro-buttons">
                    <Button className = "introButton"><Link to = "/AboutMe">About Me </Link></Button><br></br>
                    <Button className = "introButton"><Link to = "/Skills">Skills </Link></Button><br></br>
                    <Button className = "introButton"><Link to = "/RecentWork">Recent Work</Link></Button><br></br>
                    <Button className = "introButton">Contact Me</Button><br></br>
                </Col>
            </Row>
        </Container>
    )
}