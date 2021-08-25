import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/AboutMe.css'

export default function AboutMe() {
    return (
    <Container fluid>
        <Row>
            <Col lg={1}></Col>
            <Col lg={11} className="mainText">
                <span>&lt;02&gt;</span><br></br>
            </Col>
        </Row>
        <Row id = "main">
            <Col lg = {2}></Col>
            <Col lg = {5}>INSERT IMAGE HERE</Col>
            <Col lg = {5}>
                <Row>
                    <Col lg = {12} className = "aboutMeText">About Me</Col>
                    <Col lg = {12} id = "talkAboutText">Lets talk About Myself</Col>
                    <Col lg = {12} className = "aboutMeText"> <br></br> My name is Jacob Guiro, I am a Jersey-Born full-stack engineer now located in Houston, Texas. When I am not coding, you can find me socializing among friends or trying to learn a new talent/skill.</Col>
                    <Col lg = {12}><br></br><Button>Contact Me</Button><Button id = "CV">Download CV</Button></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}