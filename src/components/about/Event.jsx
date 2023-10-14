import React, { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/eu.jpg";
import CV from "../../assets/Smith-Cv.pdf";
import Info from "./Info";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import backgroundMusic from "../../assets/backgroundMusic.mp3";

const Event = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(date);
    setSelectedEvents(events[formattedDate] || []);
  };

  const chunkArray = (array, chunkSize) => {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  };

  const groupedEvents = selectedEvents.length
    ? chunkArray([...selectedEvents], 4)
    : [];

  return (
    <section className="about section" id="about">
      <audio src={backgroundMusic} autoPlay loop />

      <h2 className="section__title">
        EXPLORE <span className="text-orange">FORTALEZA 🔥</span>{" "}
      </h2>
      <p className="section__subtitle">
        Encontre Restaurantes, Eventos e todos os rolês possiveis pra vc curtir
        aqui todos os dias{" "}
      </p>

      <Row className=" align-items-start">
        <Col md={6}>
          <Calendar className="about-calendar" onClickDay={handleDateClick} />
        </Col>

        <Col md={6} className="col-event">
          <Carousel data-bs-theme="dark">
            {groupedEvents.map((group, groupIndex) => (
              <Carousel.Item
                key={groupIndex}
                interval={5000}
                className="item-layout"
              >
                <div>
                  <h3 className="event-text">
                    EVENTOS EM FORTALEZA 🍺 -{" "}
                    {selectedDate.toLocaleDateString()}
                  </h3>
                  {group.map((event, index) => (
                    <Card key={index} className="mb-3 event-position ">
                      <Card.Header>{event.title}</Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{event.description}</ListGroup.Item>
                        <ListGroup.Item>{event.time}</ListGroup.Item>
                      </ListGroup>
                    </Card>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </section>
  );
};

export default Event;
