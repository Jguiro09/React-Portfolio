import { Container, Row, Col, Button } from 'react-bootstrap'
import '../styles/AboutMe.css'
import resume from '../img/Resume.pdf'

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
            <Col>
                <Row>
                    <Col lg = {12} className = "aboutMeText">About Me</Col>
                    <Col lg = {12} id = "talkAboutText">Lets talk About Myself</Col>
                    <Col lg = {12} className = "aboutMeText"> <br></br> My name is Jacob Guiro, I am a Jersey-Born full-stack engineer now located in Houston, Texas. Growing up, I was surrounded by technology which eventually led me to my passion for coding. I want to show the world the amazing things you can do from just your bedroom. Being only 19, some people ask "Why are you in a rush to get into the work force?" My response to this is that when you find something that makes you happy, chase it and never look back, and coding is what makes me happy.</Col>
                    <Col lg = {12}><br></br>
                    <Button className = "AboutMeButton">Contact Me</Button>
                    <a href = {resume} download><Button className = "AboutMeButton" id = "CV">Download CV</Button></a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}