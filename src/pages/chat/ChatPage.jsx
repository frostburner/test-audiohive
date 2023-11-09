import React from "react";
import Chatting from "../../components/chat-component/Chatting"
import "./chat.css"
import Topbar from "../../components/topbar/Topbar";

export default function Chat(){
    return(
        <>
        <Topbar />
        <div className="parentDiv">
            <Chatting/>
        </div>
        </>
    )
}