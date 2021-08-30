import { Container, Row, Col } from 'react-bootstrap'
import '../styles/Skills.css'
import HTML from '../img/HTML.png'
import JavaScript from '../img/JavaScript.png'
import SQL from '../img/SQL.png'
import CSS from '../img/CSS.png'
import NoSQL from '../img/NoSQL.png'
import NodeJS from '../img/NodeJS.png'
import MongoDB from '../img/MongoDB.png'
import React from '../img/React.png'

export default function Skills() {
    return (
        <Container fluid id = "Skills">
            <Row>
                <Col lg={1}></Col>
                <Col lg={11} className="mainText">
                    <span>&lt;03&gt;</span><br></br>
                </Col>
            </Row>
            <Row>
                <Row id = "header">Skills</Row>
                <Row id = "subheader">What I Can Do</Row>
                <Row id = 'icons'>
                    <h1 class = "pHeader">Front-End</h1>
                    <img class = "skillsImage" src = {HTML}></img>
                    <img class = "skillsImage" src = {CSS}></img>
                    <img class = "skillsImage" src = {JavaScript}></img>
                    <img class = "skillsImage" src = {React}></img>
                    <h1 class = "pHeader">Back-End</h1>
                    <img class = "skillsImage" src = {NoSQL}></img>
                    <img class = "skillsImage" src = {SQL}></img>
                    <img class = "skillsImage" src = {NodeJS}></img>
                    <img class = "skillsImage" src = {MongoDB}></img>
                </Row>
            </Row>
        </Container>
    )
}