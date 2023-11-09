import React from "react";
import { Events } from "../../testData"
import "./events-posting.css";

export default function EventDisplay() {
    return (
        <div className="testEvents">
            <div className="event">{Events.eventDate}</div>
            <div className="event">{Events.eventDate}</div>
            <div className="event">{Events.eventDate}</div>
        </div>
    )
}