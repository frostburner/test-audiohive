import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Testing from "../../pages/route-testing/testing";
import Profile from "../../pages/profile/Profile";
import Calendar from "../../pages/calendar/Calendar";
import ChatPage from "../../pages/chat/ChatPage";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" className="logo">
          {" "}
          AudioHive
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="search" />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <ul>
            <li className="topbarIconItem">
              <CustomLink to="/">
                <HomeIcon style={{color: "#f0f3bd"}}/>
              </CustomLink>
            </li>
            <li className="topbarIconItem">
              <CustomLink to="/calendar">
                <CalendarMonthIcon style={{color: "#f0f3bd"}} />
              </CustomLink>
            </li>
            <li className="topbarIconItem">
              <CustomLink to="/ChatPage">
                <ChatIcon style={{color: "#f0f3bd"}} />
              </CustomLink>
            </li>
            <li className="topbarIconItem">
              <CustomLink to="/notif">
                <NotificationsIcon style={{color: "#f0f3bd"}} />
              </CustomLink>
            </li>
          </ul>
        </div>
        <Link to="/profile">
          <img
            src="/assets/people/profile-test.jpg"
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path == to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
