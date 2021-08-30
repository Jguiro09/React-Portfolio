import '../styles/Intro.css'
import { Container, Row, Col } from 'react-bootstrap'

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
            </Row>
        </Container>
    )
}