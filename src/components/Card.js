import React from "react";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={props.item.imageUrl} alt="" />
      </div>

      <div className="hero-text">
        <div className="hero-text-head">
          <i class="fa-solid fa-location-dot"></i>
          <h3>{props.item.location}</h3>
          <a href={props.item.googleMapsUrl} target="_blank">
            View on Google Map
          </a>
        </div>

        <div className="hero-title">
          <h2>{props.item.title}</h2>
        </div>

        <p className="hero-date">
          {props.item.startDate} - {props.item.endDate}
        </p>

        <p className="hero-description">{props.item.description}</p>
      </div>
    </section>
  );
}
