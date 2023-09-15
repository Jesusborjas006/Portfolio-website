import { skillsData } from "../data";
import Skill from "./Skill";

const Skills = () => {
  const skillElements = skillsData.map((skill) => (
    <Skill key={skill.id} name={skill.name} img={skill.img} />
  ));
  return (
    <div>
      <h4>Tech Stack</h4>
      <h3>Skills</h3>
      <div>{skillElements}</div>
    </div>
  );
};

export default Skills;
