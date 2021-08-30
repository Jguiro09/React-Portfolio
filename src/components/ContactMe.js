import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdEmail } from 'react-icons/md';
import { AiOutlineGithub, AiOutlineNumber } from "react-icons/ai";
import '../styles/ContactMe.css'

export default function ContactMe() {
    return (
    <Container fluid id = "Contact">
        <Row>
            <Col lg={1}></Col>
            <Col lg={11} className="mainText">
                <span>&lt;05&gt;</span><br></br>
            </Col>
        </Row>
        <Row>
            <Row id = "header">Contact Me</Row>
            <Row id = "subheader">Lets Have A Chat!</Row>
            <Row>
                <Col id = "ContactSubHeader">
                    <MdEmail /> 
                    <a href="mailto:jguiro09@gmail.com"><h3 id = "ContactHeader"> Jguiro09@gmail.com</h3></a>
                    <AiOutlineGithub />
                    <a href = "https://github.com/jguiro09"><h3 id = "ContactHeader">Jguiro09</h3></a>
                    <AiOutlineNumber />
                    <h3 id = "ContactHeader">732-857-7444</h3>
                    </Col>
                </Row>
        </Row>
    </Container>
    )
}