import React from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Card(prop) {
    return (
        <section>
            <div className="container">
                <img className="image" src={prop.item.imageUrl} width="300px" alt="" />
                <div className="container-text">
                    <div className="container-place">
                        <FaLocationDot className="location-icon"/>
                        <h2 className="txt location">{prop.item.location}</h2>
                        <a  className="txt maps" href={prop.item.googleMapsUrl} target="_blank" >View on google maps</a>
                    </div>
                    <h1 className="txt title">{prop.item.title}</h1>
                    <h3 className="txt date">{prop.item.startDate} - {prop.item.endDate}</h3>
                    <p className="txt desc"> {prop.item.description}</p>
                </div>
            </div>
        </section>
        )
}