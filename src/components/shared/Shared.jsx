import "./shared.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function Share(){
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                   <img className="shareProfileImg" src="/assets/people/profile-test.jpg" alt=""/>
                    <input placeholder="Post an update!" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className="shareIcon"/>
                            <span className="shareOptionText">Post your content</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon className="shareIcon"/>
                            <span className="shareOptionText">Tag Someone</span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon className="shareIcon"/>
                            <span className="shareOptionText">Look for events</span>
                        </div>
                        <div className="shareOption">
                            <HelpOutlineIcon className="shareIcon"/>
                            <span className="shareOptionText">Ask a question</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button> {/* test test*/}
                </div>
            </div>
        </div>
    )
}