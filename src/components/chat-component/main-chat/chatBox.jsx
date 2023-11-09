import "./chatbox.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';

export default function Chatbox() {
    return(
        <>
        <div className="chatBoxContainer">
            <div className="chatBox">
                <textarea className="chatBoxReal" />
            
                <MusicNoteIcon style={{color: "#000"}} />
                <AttachFileIcon style={{color: "#000"}} />
                <ImageIcon style={{color: "#000"}} />
                <div className="sendContainer">
                    <SendIcon fontSize="large" style={{color: "#000" }}/>
                    </div>
            </div>
            
        </div>

        
        
        </>
    );
}