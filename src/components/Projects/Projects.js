import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calender from "../../Assets/Projects/calender.png";
import stopwatch from "../../Assets/Projects/stopwatch.png";
import matchgame from "../../Assets/Projects/matchgame.png";
import clock from "../../Assets/Projects/clock.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import jobshub from "../../Assets/Projects/jobshub.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

    





        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App"
              description="Introducing our cutting-edge Weather App – your ultimate companion for staying informed about weather conditions wherever you are! With sleek design and powerful features, our app provides you with accurate and up-to-date weather forecasts to help you plan your day effectively."
              ghLink="https://github.com/varsilsuvagiya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calender}
              isBlog={false}
              title="Calender App"
              description="
              Elevate your productivity with our dynamic JavaScript Calendar App. Seamlessly organize tasks, events, and appointments. Enjoy intuitive navigation, customizable views, and real-time syncing. Effortlessly manage your schedule, boost efficiency, and never miss a beat. Streamline your days with our empowering Calendar App."
              ghLink="https://github.com/varsilsuvagiya/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="Experience time in elegance with our Digital Clock. A sleek display of accurate time, it graces any space with modern simplicity. Clear visibility, 24/7. Perfect for desks, bedside tables, or walls. Embrace the future of timekeeping with this minimalist marvel."
              ghLink="https://github.com/varsilsuvagiya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stopwatch}
              isBlog={false}
              title="Stop Watch"
              description="Unleash precision with our Stopwatch. Master time with split-second accuracy for sports, fitness, and more. User-friendly interface, tactile controls. Count up or down effortlessly, track laps, and achieve goals. Elevate your timing game with this essential tool for measurement and progress."
              ghLink="https://github.com/varsilsuvagiya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobshub}
              isBlog={false}
              title="Job's Hub"
              description="Job'sHub is company which provide online platform for you if you need any job or you want to hire someone for your work."
              ghLink="https://github.com/varsilsuvagiya"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matchgame}
              isBlog={false}
              title="Matching Game"
              description="
              Engage your mind with our captivating object matching game. Sharpen memory and concentration as you pair identical objects within a thrilling timeframe. Diverse levels challenge all ages. Vibrant visuals and intuitive gameplay offer hours of entertainment. Elevate fun and cognitive skills – play now and conquer the match!"
              ghLink="https://github.com/varsilsuvagiya"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
