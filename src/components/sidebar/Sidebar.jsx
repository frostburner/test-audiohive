import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import EventIcon from '@mui/icons-material/Event';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {Users} from "../../testData"
import Online from "../online/Online"


export default function Sidebar() {
    return (
        <>
        <div className="sidebar">
            <div className="sidebarWrapper">
                
                <h2 className="Contacts">Contacts</h2>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}