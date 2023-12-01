import "./vertical.css"
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
                      <CustomLink to ="/dashboard" className="noDeco">
                          <DashboardIcon style={{color: "#02C39A"}} />
                          <span> Dashboard </span> 
                      </CustomLink>
                    </li>
                   
                   <li className="navHolder">
                        <CustomLink to ="/project" className="noDeco">
                            <FolderCopyIcon style={{color: "#02C39A", left:"10px"}}  />  
                            <span> Project</span>
                        </CustomLink>
                    </li>

                    <li className="navHolder">
                        <CustomLink to ="/calendar" className="noDeco">
                            <CalendarMonthIcon style={{color: "#02C39A"}} /> 
                            <span> Events</span> 
                        </CustomLink>
                    </li>

                    <li className="navHolder">
                        <CustomLink to ="/merch" className="noDeco">
                            <StoreIcon style={{color: "#02C39A"}} />
                            <span>Merchandize</span>
                        </CustomLink>
                    </li>

                    
                  </div>
                </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname;
  
    return (
      <Link to={to} {...props}>
        <li className={path === to ? "active" : ""}>
          {children}
        </li>
      </Link>
    );
}
