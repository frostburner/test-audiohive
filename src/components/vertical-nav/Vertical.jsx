import "./vertical.css"
// import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';

export default function Rightbar({profile}) {

    return (
        
                <div className="verticalNav">
                  <div className="navContainer">
                    <li className="navHolder">
                      <CustomLink to ="/dashboard">
                          <DashboardIcon style={{color: "#02C39A"}}/>
                      </CustomLink> <span> Dashboard </span> 
                      </li>
                   
                   <li className="navHolder">
                        <CustomLink to ="/project">
                            <FolderCopyIcon style={{color: "#02C39A", left:"10px"}}  />  
                        </CustomLink><span> Project</span>
                    </li>

                    <li className="navHolder">
                        <CustomLink to ="/calendar">
                            <CalendarMonthIcon style={{color: "#02C39A"}} /> 
                        </CustomLink><span> Events</span> 
                        
                    </li>

                    <li className="navHolder">
                        <CustomLink to ="/merch">
                            <StoreIcon style={{color: "#02C39A"}} />
                        </CustomLink><span>Merchandize</span>
                        </li>
                      </div>
                </div>
    )
}
function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname;
  
    return (
      <li className={path === to ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }