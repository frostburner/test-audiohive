import React from "react"
import "./events.css"
import Event from "../../components/event-postings/Events-posting"
import { Events } from "../../testData"


export default function Calendar() {
    return(
    <>
    <div className="bannerImg">
            <img className="coverImage" src="assets/events/cover-calendar.jpg" alt="cover"/>
                <h1 className="bannerText"> Find Events Near You </h1>
    </div>
    <div className="updateSquare">
        <h1 className="upcomingEvents"> Upcoming Events </h1>
    
        <div className="updates">
            {Events.map((p) =>(

                <Event key ={p.id}post={p}/>
            ))}
        </div>


    </div>
    </>
    )
}

