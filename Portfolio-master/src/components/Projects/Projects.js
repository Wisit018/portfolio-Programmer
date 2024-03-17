import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// cer
import cer1 from "../../Assets/Projects/cer/cer1.png";
import cer2 from "../../Assets/Projects/cer/cer2.png";
import cer3 from "../../Assets/Projects/cer/cer3.png";
import cer4 from "../../Assets/Projects/cer/cer4.png";
import cer5 from "../../Assets/Projects/cer/cer5.png";
import cer6 from "../../Assets/Projects/cer/cer6.png";
import cer7 from "../../Assets/Projects/cer/cer7.png";
import cer8 from "../../Assets/Projects/cer/cer8.png";
import cer9 from "../../Assets/Projects/cer/cer9.png";
import cer10 from "../../Assets/Projects/cer/cer10.png";
import cer11 from "../../Assets/Projects/cer/cer11.png";
import cer12 from "../../Assets/Projects/cer/cer12.jpg";
import cer13 from "../../Assets/Projects/cer/cer13.jpg";

// project
import project1 from "../../Assets/Projects/project/Accordion-learnReact.png";
import atlux168 from "../../Assets/Projects/project/atlux168.png";
import atluxerp from "../../Assets/Projects/project/atlux-erp.png";
import BlogApp from "../../Assets/Projects/project/Blog-App.png";
import bmijs from "../../Assets/Projects/project/BMI-Javascript.png";
import BMINode from "../../Assets/Projects/project/BMI-Nodejs-1.png";
import calcultorApp from "../../Assets/Projects/project/calcultor-app.png";
import Currency from "../../Assets/Projects/project/Currency-converter-API.png";
import denfah from "../../Assets/Projects/project/denfah.png";
import denfah1 from "../../Assets/Projects/project/denfah-1.png";
import denfah2 from "../../Assets/Projects/project/denfah-2.png";
import denfah3 from "../../Assets/Projects/project/denfah-3.png";
import denfahnoti from "../../Assets/Projects/project/denfah-line-noti.png";
import Dynamic from "../../Assets/Projects/project/Dynamic-dropdown-app.png";
import validation from "../../Assets/Projects/project/Form-validation-app.png";
import Learn from "../../Assets/Projects/project/html-css-javascript-LearnBorntodev.png";
import Learn1 from "../../Assets/Projects/project/html-css-js-api.png";
import hybridsport from "../../Assets/Projects/project/hybrid_sport.png";
import Carousel from "../../Assets/Projects/project/Image-Carousel-React.png";
import scroll from "../../Assets/Projects/project/Infinite-scroll-app.png";
import Learn2 from "../../Assets/Projects/project/Learn NodeJS,Express,EJS.png";
import Learn3 from "../../Assets/Projects/project/Light-Dark-Mode.png";
import Learn4 from "../../Assets/Projects/project/Light-Dark-Mode-2.png";
import Linebot from "../../Assets/Projects/project/line-chatbot.png";
import mixprint from "../../Assets/Projects/project/mixprint.png";
import Navigationapp from "../../Assets/Projects/project/Navigation-app.png";
import Paginationapp from "../../Assets/Projects/project/Pagination-app.png";
import polonext from "../../Assets/Projects/project/polonext.png";
import QuizApp from "../../Assets/Projects/project/Quiz-App.png";
import ReactVite from "../../Assets/Projects/project/React+Vite.png";
import ReactBasic from "../../Assets/Projects/project/React-Basic-1.png";
import Searchfilter from "../../Assets/Projects/project/Search-filter-app.png";
import ShoppingApp from "../../Assets/Projects/project/Shopping-app.png";
import taskApp from "../../Assets/Projects/project/task-app.png";
import TodolistApp from "../../Assets/Projects/project/Todolist-App.png";
import ViteSearch from "../../Assets/Projects/project/Vite-Search-Img-API.png";
import WeatherAPI from "../../Assets/Projects/project/Weather-API-App.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My 
          <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer1}
              isBlog={false}
              title="Basic computer skills"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer2}
              isBlog={false}
              title="Intro to Expert Programming"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer3}
              isBlog={false}
              title="ChatGPT for Developers"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer4}
              isBlog={false}
              title="Modern store chatbot with Kaojao"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer5}
              isBlog={false}
              title="Fundamental Web Dev with HTML5 & CSS3"
              //description="In the Fundamental Web Dev with HTML5 & CSS3 course, you will learn the basics of HTML5 and CSS3, including basic use of Bootstrap."
              ghLink="https://github.com/Wisit018?tab=repositories"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer6}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer7}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              //description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              //Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer8}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer9}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer10}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer11}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer12}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer13}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Accordion-learnReact"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atlux168}
              isBlog={false}
              title="Website for atlux168 " 
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atluxerp}
              isBlog={false}
              title="Atlux168-ERP"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogApp}
              isBlog={false}
              title="BlogApp-LearnReact"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmijs}
              isBlog={false}
              title="Website Calculator BMI-Learn Html CSS JS"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMINode}
              isBlog={false}
              title="Website Calculator BMI-Learn NodeJS ExpressJS"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcultorApp}
              isBlog={false}
              title="Website Calculator App React"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Currency}
              isBlog={false}
              title="Website Currency-converter-API"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah}
              isBlog={false}
              title="Website Denfah Printing"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah1}
              isBlog={false}
              title="App Sheet : Equipment disbursement  "
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah2}
              isBlog={false}
              title="
              System for calculating the amount of leave, remaining leave days"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah3}
              isBlog={false}
              title="App Sheet : Equipment disbursement"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfahnoti}
              isBlog={false}
              title="AppScript : Notification job application form "
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dynamic}
              isBlog={false}
              title="Learn React : Dynamic-dropdown-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={validation}
              isBlog={false}
              title="Learn-React : Form-validation-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn}
              isBlog={false}
              title="Learn : HTML CSS JavaScipt"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn1}
              isBlog={false}
              title="Learn : HTML CSS JavaScipt Search With API"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hybridsport}
              isBlog={false}
              title="Website : Hybrid Sport"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Carousel}
              isBlog={false}
              title="Learn React : Image-Carousel-React"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scroll}
              isBlog={false}
              title="Learn React : Infinite-scroll-API"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn2}
              isBlog={false}
              title="Learn : NodeJS,Express,EJS"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn3}
              isBlog={false}
              title="Learn React : Light-Dark-Mode"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn4}
              isBlog={false}
              title="Learn React : Light-Dark-Mode"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Linebot}
              isBlog={false}
              title="Line Chatbot : With Dialogflow"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mixprint}
              isBlog={false}
              title="Website : MixPrint"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Navigationapp}
              isBlog={false}
              title="Learn React : Navigation-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paginationapp}
              isBlog={false}
              title="Learn React : Pagination-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polonext}
              isBlog={false}
              title="Website : Polonext"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Learn React : Quiz-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactVite}
              isBlog={false}
              title="Learn : React+Vite"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactBasic}
              isBlog={false}
              title="Learn React : Basic-React"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Searchfilter}
              isBlog={false}
              title="Learn React : Search-filter With API"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingApp}
              isBlog={false}
              title="Learn React : Shopping-App"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskApp}
              isBlog={false}
              title="Learn React : Task-app"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodolistApp}
              isBlog={false}
              title="Learn React : Todolist-App"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ViteSearch}
              isBlog={false}
              title="Learn React+Vite : Search-Img-With API"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherAPI}
              isBlog={false}
              title="Learn React : Weather-API-App"
              ghLink="https://github.com/Wisit018?tab=repositories"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
