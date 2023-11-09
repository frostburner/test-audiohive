import React from "react"
import "./events.css"
import Event from "../../components/event-postings/Events-posting"
import { Events } from "../../testData"


export default function Calendar() {
    return(
    <>
    <div className="bannerImg">
            <img className="coverImage" src="assets/events/cover-calendar.jpg" alt="cover"/>
                <h1 className="bannerHeader"> Find Events Near You </h1>
    </div>
    <div className="updatesDiv">
        <h1 className="EventsTitle"> Upcoming Events </h1>
    
        <div className="updates">
            {Events.map((p) =>(

                <Event key ={p.id}post={p}/>
            ))}
        </div>


    </div>
    </>
    )
}

