import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import ticketTracker from "../../assets/image/ticket-project.png";
import flagle from "../../assets/image/flagle.png";
import punkApi from "../../assets/image/punk-api.png";

const CardList = () => {
  return (
    <div className="card-list">
      <Card
        cardClass="card card__1"
        cardTitle="TICKET TRACKER"
        cardStack="REACT"
        cardImage={ticketTracker}
        cardContent="Ticket tracker with an add user function."
        codeLink="https://github.com/isobelleanna/ticket-tracker"
        liveLink="https://isobelleanna.github.io/ticket-tracker/"
      />
      <Card
        cardClass="card card__2"
        cardTitle="PUNK API"
        cardStack="REACT"
        cardImage={punkApi}
        cardContent="A catalogue of beers and a taster menu generating. Built using the punk api."
        codeLink="https://github.com/isobelleanna/punk-app"
        liveLink="https://isobelleanna.github.io/punk-app/"
      />
      <Card
        cardClass="card card__3"
        cardTitle="FLAG GAME"
        cardStack="VANILLA JAVASCRIPT"
        cardImage={flagle}
        cardContent="Guess the flags of countries around the world in a wordle style
            game."
        codeLink="https://github.com/isobelleanna/flag-game"
        liveLink="https://isobelleanna.github.io/flag-game/"
      />
      <Card
        cardClass="card card__4"
        cardTitle="TO DO LIST"
        cardStack="REACT"
        cardImage={ticketTracker}
        cardContent="To do list app with a delete card function."
        codeLink="https://github.com/isobelleanna/todo-list-project"
        liveLink="https://github.com/isobelleanna/todo-list-project"
      />
      <Card
        cardClass="card card__5"
        cardTitle="FULLSTACK COURSE DIRECTORY"
        cardStack="REACT SPRING BOOT JAVA MYSQL"
        cardImage={ticketTracker}
        cardContent="A course directory built using the CRUD methodology."
        codeLink="https://github.com/isobelleanna/fullstack-course-app"
        liveLink="https://github.com/isobelleanna/fullstack-course-app"
      />
      <Card
        cardClass="card card__6"
        cardTitle="CLIENT PROJECT"
        cardStack="REACT"
        cardImage={ticketTracker}
        cardContent="Frontend developed for the early careers foundation."
        codeLink="https://github.com/nology-tech/niue-ecf"
        liveLink="https://ecf-future-hub.web.app/"
      />
    </div>
  );
};

export default CardList;
