import Vertical from "../../components/vertical-nav/Vertical";
import "./project-css.css";
import ProjectComponent from "../../components/project-component/ProjectsComponent";
import Topbar from "../../components/topbar/Topbar";

export default function Project() {
  return (
    <>
    <Topbar />
      <div className="verticalDiv">
         <Vertical />
        </div>
        <div className="projectContainer">
            <h1> Testing Projects Tabs </h1>
        <ProjectComponent />
      </div>
      
    </>
  );
}
