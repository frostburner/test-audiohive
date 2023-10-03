import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Vertical from "../../components/vertical-nav/Vertical";
import Newsfeed from "../../components/newsfeed/Newsfeed";
import Rightbar from "../../components/rightbar/Rightbar";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./profile.css"


export default function Profile() {
    return(
        <>
          <div className="profile">
          <Vertical/>
            <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    
                   <img className="profileCoverImg" src="assets/people/cover.jpg" alt="" />
                   <div className="🍆"> 
                   <img className="profileUserImg" src="assets/people/profile-test.jpg" alt="" /> </div>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Rafael Jose Villa</h4>
                    <span className="profileDesc">test</span>
                    
                </div>
            </div>

            <div className="contentHolder">
            
                <div className="profileRightBottom"> &nbsp;
        
                    <div className="⬛">
                        <h3 className="testText">Overview</h3>
                        <p className="testText">I specialize in Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do.</p>
                    </div>

                    <div className="⬛">
                        <h3 className="testText">About Me</h3>
                        <p className="testText">I am a Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do. </p>
                        <p className="testText">My work is featured in Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <h4 className="testText">Read More <ArrowDownwardIcon/></h4>
                    </div> &nbsp;  

                    

            </div> 

                
               <div className="red">
                    
                   <button className="testButton">Edit Profile</button>
                
                <div className="profileSkills">
               
                    <div className="⬜">
                  <p className="testText">Skills</p> &nbsp;
                  <p className="testText"> Location</p> &nbsp;
                  <p className="testText">Email</p> &nbsp;
                    </div>
                    
                    </div>
                </div>
                     
                    
                </div>
                
                <div className="worksDiv">
                        <h2> Works </h2>
                        
                        <div className="horizon-scroll">
                            
                               <div className="testing">1</div>
                               <div className="testing">2</div>
                               <div className="testing">3</div>
                               <div className="testing">4</div>
                               <div className="testing">5</div>
                               <div className="testing">6</div>
                               <div className="testing">7</div>
                               <div className="testing">8</div>
                               <div className="testing">9</div>
                               <div className="testing">10</div>
                            
                        </div>
                    </div>
            </div>
          </div>
        </>
    )
}