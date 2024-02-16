import { projectsData } from "../data";
import Work from "./Work";

type WorksProps = {
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
};

const Works = ({ setSelectedProject }: WorksProps) => {
  const workElements = projectsData.map((project) => (
    <Work
      key={project.id}
      id={project.id}
      name={project.name}
      img={project.img}
      setSelectedProject={setSelectedProject}
    />
  ));
  return (
    <section className="px-6 mx-auto mt-32 pt-20" id="work">
      <h4 className="text-center mb-2 ">Work Projects</h4>
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
