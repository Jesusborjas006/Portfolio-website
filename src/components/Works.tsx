import { projectsData } from "../data";
import Work from "./Work";

const Works = () => {
  const workElements = projectsData.map((project) => (
    <Work key={project.id} name={project.name} img={project.img} />
  ));
  return (
    <section>
      <h4>Work Projects</h4>
      <h3>My Projects</h3>
      <div>{workElements}</div>
    </section>
  );
};

export default Works;
