import "./chatting.css"
import UserComponent from "./user-component/UserComponent"
import UserChat from "./main-chat/UserChat"
import ChatProfile from "./chatProfile/ChatProfile"

export default function Chatting(){
    return(
        <>
        <div className="users-online"><UserComponent/></div>
        <div className="middle-part"><UserChat /></div>
        <div className="right-part"><ChatProfile/></div>
        </>
    )
}