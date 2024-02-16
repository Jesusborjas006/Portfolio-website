import { skillsData } from "../data";
import Skill from "./Skill";

const Skills = () => {
  const skillElements = skillsData.map((skill) => (
    <Skill key={skill.id} name={skill.name} img={skill.img} />
  ));
  return (
    <section className="text-center px-6 mx-auto mt-52 pt-20" id="expertise">
      <h4 className="mb-2 ">Tech Stack</h4>
      <h3 className="text-3xl md:text-4xl font-semibold mb-10">Skills</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6  gap-x-3 gap-y-6">
        {skillElements}
      </div>
    </section>
  );
};

export default Skills;
