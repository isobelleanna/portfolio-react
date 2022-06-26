import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";
import ticketTracker from "../../assets/image/ticket-project.png";

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
    </div>
  );
};

export default CardList;
