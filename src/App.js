
import Home from "./pages/homepage/Home";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboardUser/Dashboard";
import Testing from "./pages/route-testing/testing";
import Calendar from "./pages/calendar/Calendar";
import Chat from "./pages/chat/ChatPage";
import Notif from "./pages/notification/Notif";
import Project from "./pages/projects/Project";
import Merch from "./pages/merch/Merch";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
   <>

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/testing" element = {<Testing />} />
      <Route path="/calendar" element = {<Calendar />} />
      <Route path="/profile" element = {<Profile/>} />
      <Route path="/chatpage" element = {<Chat/>} />
      <Route path="/notif" element = {<Notif/>} />
      <Route path="/project" element ={<Project/>} />
      <Route path="/merch" element ={<Merch/>} />
      <Route path="/dashboard" element ={<Dashboard/>} />
    </Routes>


   </>
   )
  }

export default App;
