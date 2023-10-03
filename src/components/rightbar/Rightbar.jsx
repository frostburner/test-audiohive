import "./rightbar.css"
import {Users} from "../../testData"
import Online from "../online/Online"


export default function Rightbar({profile}) {


    const ProfilePrev = () => {
        return (
            <>
            <div className="ProfileSidebar">
            <div className="shareWrapper">
                <div className="shareTop">
                   <img className="rightbarProfile" src="/assets/people/profile-test.jpg" alt=""/>
                   <div className="test">
                    <h1 className="userName">Rafael Jose Villa </h1>
                    <span className="userCategory">Category</span>
                    </div>
                </div>
                
               
            </div>
        </div>

        <div className="horizontal-scroll">
            <h2>Upcoming Events</h2>
                    <div className="scroll-content">
                        <div className="scroll-item">1</div>
                        <div className="scroll-item">2</div>
                        <div className="scroll-item">3</div>
                        <div className="scroll-item">4</div>
                        <div className="scroll-item">5</div>
                    </div>
                </div>    

        <div className="horizontal-scroll">
            <h2> Trending Merch</h2>
                    <div className="scroll-content">
                        <div className="scroll-item">1</div>
                        <div className="scroll-item">2</div>
                        <div className="scroll-item">3</div>
                        <div className="scroll-item">4</div>
                        <div className="scroll-item">5</div>
                    </div>
                </div>  
            </>
        );
    };

    const HomeRightbar = () => {
        return(
            <>
            <div className="eventContainer">
                    <img className="eventImg" src="assets/events/calendar.png" alt="" />
                    <span className="eventText"><b>LoolaPalooza PH</b> and <b>4 more </b> have upcoming events near you. </span>
                </div>
                <img src="assets/events/spotifyAd2.jpg" alt="" className="rightBarAd" />
                <h4 className="rightbarTitle">Contacts</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
             </>
        );

    };

    return (
        <div className="rightbar">
           {/* test right bar */}
            <div className="rightbarWrapper">
                <ProfilePrev/>
            </div>
        </div>
    )
}