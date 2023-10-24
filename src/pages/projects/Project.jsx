import Vertical from "../../components/vertical-nav/Vertical";
import "./project-css.css";
import ProjectComponent from "../../components/project-component/ProjectsComponent";

export default function Project() {
  return (
    <>
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
