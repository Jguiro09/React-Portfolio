import '../styles/Intro.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Intro() {
    return(
        <div>
        <Container fluid>
            <Row>
                <Col lg = {1}></Col>
                <Col lg = {6} className = "mainText">
                    <span>&lt;01&gt;</span><br></br>
                    Hello. <br></br>
                    I'm <br></br>
                    Jacob Guiro
                    <div className = "subText">
                    Developer
                    </div>
                </Col>
                <Col lg = {5} className = "buttons">
                    <Button className = "introButton">About Me</Button><br></br>
                    <Button className = "introButton">Skills</Button><br></br>
                    <Button className = "introButton">Recent Work</Button><br></br>
                    <Button className = "introButton">Contact Me</Button><br></br>
                </Col>
            </Row>
            {/* <div>
                Hello. <br></br>
                I'm <br></br>
                Jacob Guiro
            </div>
            <div className = "subText">
                Developer
            </div> */}
        </Container>
        </div>
    )
}