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
        <Row>
            <Col lg = {2}></Col>
            <Col lg = {5}>INSERT IMAGE HERE</Col>
            <Col lg = {5}>
                <Row>
                    <Col lg = {12}>About Me</Col>
                    <Col lg = {12}>Lets talk About Myself</Col>
                    <Col lg = {12}> <br></br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero</Col>
                    <Col lg = {12}><Button>Contact Me</Button> <Button>Download CV</Button></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}