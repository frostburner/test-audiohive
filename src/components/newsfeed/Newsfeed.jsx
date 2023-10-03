import "./newsfeed.css"
import Shared from "../shared/Shared"
import Post from "../post/Post"
import {Posts} from "../../testData"

export default function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeedWrapper">
                <Shared/> 
               {Posts.map((p)=>(


                <Post key ={p.id}post={p}/>
               ))}
            </div>
        </div>
    )
}