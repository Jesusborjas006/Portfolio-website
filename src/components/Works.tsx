import { projectsData } from "../data";
import Work from "./Work";

const Works = () => {
  const workElements = projectsData.map((project) => (
    <Work key={project.id} name={project.name} img={project.img} />
  ));
  return (
    <section className="px-6 mx-auto mt-32">
      <h4 className="text-center mb-2">Work Projects</h4>
      <h3 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
        {workElements}
      </div>
    </section>
  );
};

export default Works;
