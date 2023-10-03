import React from "react";
import { Events } from "../../testData"
import "./events-posting.css";

export default function EventDisplay() {
    return (
        <div className="testEvents">
            <div className="eventsBox">{Events.eventDate}</div>
            <div className="eventsBox">{Events.eventDate}</div>
            <div className="eventsBox">{Events.eventDate}</div>
        </div>
    )
}