import "./usercomponent.css"
import {Users} from "../../../testData"
import Online from "../../online/Online"
import SearchIcon from "@mui/icons-material/Search";

export default function UserComponent(){
        return(
            <>
            <div className="userContainer">
                <div className="userSearch">
                <SearchIcon className="search" />
                    <input className="searchInput" />
                 </div>    

                <h2 className="headerContact"> Unread Messages </h2>
                <div className="userOnlineHolder">
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