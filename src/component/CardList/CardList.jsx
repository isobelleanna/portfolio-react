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
        cardTitle="FLAG GAME"
        cardStack="VANILLA JAVASCRIPT"
        cardImage={ticketTracker}
        cardContent="Guess the flags of countries around the world in a wordle style
            game. My brief was to create a working game that would test my
            knowledge of JavaScript and push my problem solving skills."
        codeLink="https://github.com/isobelleanna/flag-game"
        liveLink="https://isobelleanna.github.io/flag-game/"
      />
      <Card
        cardClass="card card__5"
        cardTitle="FLAG GAME"
        cardStack="VANILLA JAVASCRIPT"
        cardImage={ticketTracker}
        cardContent="Guess the flags of countries around the world in a wordle style
            game. My brief was to create a working game that would test my
            knowledge of JavaScript and push my problem solving skills."
        codeLink="https://github.com/isobelleanna/flag-game"
        liveLink="https://isobelleanna.github.io/punk-app/"
      />
      <Card
        cardClass="card card__6"
        cardTitle="FLAG GAME"
        cardStack="VANILLA JAVASCRIPT"
        cardImage={ticketTracker}
        cardContent="Guess the flags of countries around the world in a wordle style
            game. My brief was to create a working game that would test my
            knowledge of JavaScript and push my problem solving skills."
        codeLink="https://github.com/isobelleanna/flag-game"
        liveLink="https://isobelleanna.github.io/punk-app/"
      />
    </div>
  );
};

export default CardList;
