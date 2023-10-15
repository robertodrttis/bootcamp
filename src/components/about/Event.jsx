import React, { useState, useEffect } from "react";
import "./about.css";
import AboutImg from "../../assets/eu.jpg";
import CV from "../../assets/Smith-Cv.pdf";
import Info from "./Info";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, Stack } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import backgroundMusic from "../../assets/backgroundMusic.mp3";

const Event = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

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

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleDateClick = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(date);

    const allEventsForDate = events[formattedDate] || [];
    const filteredEvents = selectedCategory
      ? allEventsForDate.filter((event) => event.category === selectedCategory)
      : allEventsForDate;

    setSelectedEvents(filteredEvents);
  };

  useEffect(() => {
    const formattedDate = selectedDate?.toISOString().split("T")[0];
    const allEventsForDate = events[formattedDate] || [];
    const filteredEvents = selectedCategory 
      ? allEventsForDate.filter(event => event.category === selectedCategory) 
      : allEventsForDate;
  
    setSelectedEvents(filteredEvents);
  }, [selectedDate, selectedCategory]);

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
        <Col md={5}>
          <Calendar className="about-calendar" onClickDay={handleDateClick} />
          <h5 className="text-center mt-5">Filtrar por Categoria:</h5>
          <div className="filtros text-center">
            <Button
              variant="primary btn-insta space"
              onClick={() => {
                if (selectedCategory === "Lugares Familia e Amigos") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory("Lugares Familia e Amigos");
                }
              }}
              className="mb-2"
            >
              Lugares Familia e Amigos
            </Button>
            <Button
              variant="primary btn-insta space"
              onClick={() => {
                if (selectedCategory === "Lugares para Casais") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory("Lugares para Casais");
                }
              }}
              className="mb-2"
            >
             Lugares para Casais
            </Button>
            <Button
              variant="primary btn-insta space"
              onClick={() => {
                if (selectedCategory === "Lugares Samba e Pagode") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory("Lugares Samba e Pagode");
                }
              }}
              className="mb-2"
            >
          Lugares Samba e Pagode
            </Button>
            <Button
              variant="primary btn-insta space"
              onClick={() => {
                if (selectedCategory === "Lugares com Funk e Dj") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory("Lugares com Funk e Dj");
                }
              }}
              className="mb-2"
            >
          Lugares com Funk e Dj
            </Button>
          </div>
        </Col>

        <Col md={7} className="col-event">
          <Carousel data-bs-theme="dark" key={selectedDate}>
            {groupedEvents.map((group, groupIndex) => (
              <Carousel.Item
                key={groupIndex}
                interval={10000}
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
                        <ListGroup.Item>{event.info}</ListGroup.Item>
                        <ListGroup.Item>{event.time}</ListGroup.Item>
                        <ListGroup.Item>{event.endereco}</ListGroup.Item>
                      </ListGroup>
                      {event.instagram && (
                        <Button
                          variant="primary btn-insta"
                          href={event.instagram}
                          target="_blank"
                          className="mb-2"
                        >
                          Visitar Instagram
                        </Button>
                      )}
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
