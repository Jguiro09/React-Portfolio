import '../styles/RecentWork.css'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import Project1 from '../img/RecentWork/Project1.png'
import TechBlog from '../img/RecentWork/TechBlog.png'
import WeatherDashboard from '../img/RecentWork/WeatherDashboard.png'
import WorkDay from '../img/RecentWork/WorkDay.png'
import EM from '../img/RecentWork/Employee-Management.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function RecentWork() {
    return (
        <Container fluid className="recentWorkContainer">
            <Row>
                <Col lg={1}></Col>
                <Col lg={11} className="mainText">
                    <span>&lt;04&gt;</span><br></br>
                </Col>
            </Row>
            <Row className="justify-content-around">
                {/* <Col lg = {4}>
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
                </Col> */}
                <Col>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        containerClass="container-with-dots"
                        draggable
                        focusOnSelect={false}
                        infinite = {true}
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <Card className = "RecentWorkCard" style={{ width: '40rem' }}>
                            <Card.Img variant="top" src= {Project1} />
                            <Card.Body>
                                <Card.Header variant = "Secondary">Top Tourist</Card.Header>
                                <Card.Text variant = "Primary">
                                Website that allows users to search any city and find the closest and most popular locations ranging between food and activities.
                                </Card.Text>
                                <a href = "https://github.com/Jguiro09/TopTourist"><Button variant="success" className = "recentButton">Source Code</Button></a>
                                <a href = "https://jguiro09.github.io/TopTourist/"><Button variant="success" className = "recentDeployed recentButton">Deployed Site</Button></a>
                            </Card.Body>
                        </Card>
                        <Card className = "RecentWorkCard" style={{ width: '40rem' }}>
                            <Card.Img variant="top" src= {TechBlog} />
                            <Card.Body>
                                <Card.Header>Tech Blog</Card.Header>
                                <Card.Text>
                                A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. Utilizies Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
                                </Card.Text>
                                <a href = "https://github.com/Jguiro09/Tech-Blog"><Button variant="success" className = "recentButton">Source Code</Button></a>
                                <a href = "https://tech-blog-uta.herokuapp.com/"><Button variant="success" className = "recentDeployed recentButton">Deployed Site</Button></a>
                            </Card.Body>
                        </Card>

                        <Card className = "RecentWorkCard" style={{ width: '40rem' }}>
                            <Card.Img variant="top" src= {WeatherDashboard} />
                            <Card.Body>
                                <Card.Header>Weather Dashboard</Card.Header>
                                <Card.Text>
                                A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well. Utilizies Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
                                </Card.Text>
                                <a href = "https://github.com/Jguiro09/Weather-Dashboard"><Button variant="success" className = "recentButton">Source Code</Button></a>
                                <a href = "https://jguiro09.github.io/Weather-Dashboard/"><Button variant="success" className = "recentDeployed recentButton">Deployed Site</Button></a>
                            </Card.Body>
                        </Card>

                        <Card className = "RecentWorkCard" style={{ width: '40rem' }}>
                            <Card.Img variant="top" src= {WorkDay} />
                            <Card.Body>
                                <Card.Header>Work Day</Card.Header>
                                <Card.Text>
                                A browser-run applcation that allows a user to save events for each hour of the day. HTML/CSS created dynamically with the use of JQuery and Moment.js library to incorporate date and time.
                                </Card.Text>
                                <a href = "https://github.com/Jguiro09/Day-Planner"><Button variant="success" className = "recentButton">Source Code</Button></a>
                                <a href = "https://jguiro09.github.io/Day-Planner/"><Button variant="success" className = "recentDeployed recentButton">Deployed Site</Button></a>
                            </Card.Body>
                        </Card>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}