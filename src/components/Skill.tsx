type SkillProps = {
  name: string;
  img: string;
};

const Skill = ({ name, img }: SkillProps) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[80px] h-[75px] md:w-[90px] md:h-[85px]" src={img} alt={name} />
      <p className="text-xl mt-3">{name}</p>
    </div>
  );
};

export default Skill;
