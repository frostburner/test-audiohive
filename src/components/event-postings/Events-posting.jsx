import React from "react";
import { Events } from "../../testData"
import "./events-posting.css";

export default function EventDisplay() {
    return (
        <>
        <div className="testEvents">
        {Events.map((data, item)=>{
            return(
            <div className="event" key={item}>{data.eventDate}<br/>{data.eventId}</div>
            );
        })}
        </div>
        
        </>
        
    )
}