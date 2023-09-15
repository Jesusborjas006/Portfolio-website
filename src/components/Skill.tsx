type SkillProps = {
  name: string;
  img: string;
};

const Skill = ({ name, img }: SkillProps) => {
  return (
    <div>
      <img className="w-[100px] border" src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Skill;
