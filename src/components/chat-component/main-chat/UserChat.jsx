import Chatbox from "./chatBox";
import "./userchat.css";

export default function UserChat() {
  return (
    <>
      <div className="chatName">
        <div className="holder">
          <img
            src="/assets/people/profile-test.jpg"
            alt=""
            className="profileHolder"
          />

          <p className="chatUserTest"> Chat with <b>UserTest</b> </p>
          </div>
      </div>

      <div className="chatbox"> <Chatbox/> </div>
    </>
  );
}
