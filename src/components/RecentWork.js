import { Container, Row, Col, } from 'react-bootstrap'
import '../styles/RecentWork.css'
import Project1 from '../img/RecentWork/Project1.png'
import TechBlog from '../img/RecentWork/TechBlog.png'
import WeatherDashboard from '../img/RecentWork/WeatherDashboard.png'
import WorkDay from '../img/RecentWork/WorkDay.png'
import EM from '../img/RecentWork/Employee-Management.png'

export default function RecentWork() {
    return (
        <Container fluid id="recentWorkContainer">
            <Row>
                <Col lg={1}></Col>
                <Col lg={11} className="mainText">
                    <span>&lt;04&gt;</span><br></br>
                </Col>
            </Row>
            <Row className = "justify-content-around">
                <Col lg = {4}>
                    <h1 style = {{color: 'white'}}>TopTourist</h1>
                    <img 
                    src = {Project1}
                    style = {{width: 640 , height: 360}}
                    ></img>
                    <h4 style = {{color: 'white',  marginTop: 2 + "vh"}}>Website that allows users to search any city within the United States and find the closest and most popular locations ranging between food and activities. </h4>
                </Col>

                <Col lg = {4}>
                    <h1 style = {{color: 'white'}}>Tech Blog</h1>
                    <img 
                    src = {TechBlog}
                    style = {{width: 640 , height: 360 }}
                    ></img>
                    <h4 style = {{color: 'white',  marginTop: 2 + "vh"}}>A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. Utilizies Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</h4>
                </Col>
            </Row>
            <br>
            </br>
            <Row className = "justify-content-around">
            <Col lg = {4}>
                    <h1 style = {{color: 'white'}}>Weather Dashboard</h1>
                    <img 
                    src = {WeatherDashboard}
                    style = {{width: 640 , height: 360}}
                    ></img>
                    <h4 style = {{color: 'white',  marginTop: 2 + "vh"}}>A webpage that displays the daily (and 5 day) weather forecast for a city of your choosing. The program utilizes the OpenWeather API to retrieve weather data.</h4>
                </Col>

                <Col lg = {4}>
                    <h1 style = {{color: 'white',  marginTop: 2 + "vh"}}>Work Day Scheduler</h1>
                    <img 
                    src = {WorkDay}
                    style = {{width: 640 , height: 360 }}
                    ></img>
                    <h4 style = {{color: 'white',  marginTop: 2 + "vh"}}>A browser-run applcation that allows a user to save events for each hour of the day. HTML/CSS created dynamically with the use of JQuery and Moment.js library to incorporate date and time.</h4>
                </Col>
            </Row>
        </Container>
    )
}